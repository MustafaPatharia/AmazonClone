import Image from "next/image"
import { useState, useEffect} from "react"
import { StarIcon, BookmarkIcon } from "@heroicons/react/solid"
import Currency from 'react-currency-formatter'
import { useDispatch } from "react-redux"
import { addToBasket } from "../slices/basketSlice"
import Link from "next/link"

export default function Product({id,title, price, image, rating}) {

    const dispatch = useDispatch();
    const [hasPrime] = useState( Math.random() < 0.5)
    const [isAmazonChoice] = useState( Math.random() < 0.1)
    const [isBestSeller] = useState( Math.random() < 0.2)
    const [isBookmarked] = useState( Math.random() < 0.1)
    const [ primeDate , setPrimeDate ] = useState()
    const [ nonPrimeDate , setNonPrimeDate ] = useState()
    const [ quantity ] = useState(1);

    // console.log(hasPrime)
    useEffect(() => {
        let prime_dt = new Date();
        prime_dt.setDate(prime_dt.getDate() + 3)
        setPrimeDate(prime_dt.toDateString().slice(0,-5));
        
        let non_prime_dt = new Date();
        non_prime_dt.setDate(non_prime_dt.getDate() + 5)
        setNonPrimeDate(non_prime_dt.toDateString().slice(0,-5));
    },[])

    const addItemToBasket = () => {
        const deliveryDate = hasPrime ? primeDate : nonPrimeDate
        const product = {
            id,
            title,
            price,
            image,
            quantity,
            hasPrime,
            deliveryDate,
        }
        // Sending the product as an action to Store
        dispatch(addToBasket(product));
    }

    return (
        <div className="relative flex flex-col m-3 md:m-6 bg-white" >
            <div className="absolute top-2 right-2 w-[95%] z-10">
                <div className="flex justify-between">
                    { isAmazonChoice && !isBestSeller && ( <div className="bg-amazon_blue mr-auto text-white px-3 py-1 fit-content w-36 text-sm">
                        <p>Amazon's  <span className="text-amazon_yellow">Choice</span></p>
                    </div> )}

                    { isBestSeller && !isAmazonChoice && ( <div className="bg-amazon_yellow mr-auto text-white px-3 py-1 w-26 text-sm">
                        <p>Best Seller</p>
                    </div> )
                    }

                    { isBookmarked && (
                        <div className="ml-auto">
                            <BookmarkIcon className="h-7 text-amazon_yellow-light" />
                        </div>
                    )}
                </div>
            </div>
            <div className="pt-8 py-3 mx-auto">
                <Image src={image} height={215} width={215} objectFit="contain" />
            </div>

            <div className="p-3">
                <Link key={id} href={`/product/${id}`}>
                    <h4 className="my-3 line-clamp-2 text-xs md:text-xl link hover:text-amazon_blue-iris">{title}</h4>
                </Link>
                <div className="flex">
                    {Array(Math.round(rating.rate)).fill().map((_,i) => (
                        <StarIcon className="w-3 md:w-5 text-amazon_yellow-light" />
                    ))}
                </div>

                {/* <div className="">{description}</div> */}
                <div className="my-2 text-sm  md:text-2xl font-semibold">
                    <Currency quantity={price} currency="AED"/>
                </div>

                { hasPrime ? (
                    <div className="flex items-center space-x-3 text-gray-500">
                        <img className="w-6 h-3 md:w-11 md:h-7" src="/images/amazon_prime.png" alt="amazon_prime" />
                        <div className="text-xs md:text-base">
                            <p>Get it <span className="font-semibold">{primeDate}</span></p>
                            <p>FREE delivery by Amazon</p>
                        </div>
                    </div>
                ) : (
                    <div className="text-gray-500 text-xs md:text-sm">
                        <p>Get it <span className="font-semibold">{nonPrimeDate}</span></p>
                        <p>FREE delivery on your first order shiped by Amazon</p>
                    </div>
                ) }

                <button onClick={addItemToBasket} className="mt-3 cursor-pointer hover:text-amazon_yellow">Add to basket</button>
            </div>

        </div>
    )
}
