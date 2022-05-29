import Image from "next/image"
import { useState, useEffect} from "react"
import { StarIcon, BookmarkIcon } from "@heroicons/react/solid"
import Currency from 'react-currency-formatter'

const MAX_RATING = 5;
const MIN_RATING = 1;

export default function Product({id, title, price, image}) {
    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    )

    const [hasPrime] = useState( Math.random() < 0.5)
    const [isAmazonChoice] = useState( Math.random() < 0.1)
    const [isBestSeller] = useState( Math.random() < 0.2)
    const [isBookmarked] = useState( Math.random() < 0.1)
    const [ primeDate , setPrimeDate ] = useState()
    const [ nonPrimeDate , setNonPrimeDate ] = useState()

    // console.log(hasPrime)
    useEffect(() => {
        let prime_dt = new Date();
        prime_dt.setDate(prime_dt.getDate() + 3)
        setPrimeDate(prime_dt.toDateString().slice(0,-5));
        
        let non_prime_dt = new Date();
        non_prime_dt.setDate(non_prime_dt.getDate() + 5)
        setNonPrimeDate(non_prime_dt.toDateString().slice(0,-5));
    },[])

    return (
        <div className="relative flex flex-col m-6 bg-white" >
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
                <h4 className="my-3 line-clamp-2 text-xl link hover:text-amazon_blue-iris">{title}</h4>
                <div className="flex">
                    {Array(rating).fill().map((_,i) => (
                        <StarIcon className="w-5 text-amazon_yellow" />
                    ))}
                </div>

                {/* <div className="">{description}</div> */}
                <div className="my-2 text-2xl font-semibold">
                    <Currency quantity={price} currency="AED"/>
                </div>

                { hasPrime ? (
                    <div className="flex items-center space-x-3 text-gray-500">
                        <img className="w-11 h-7" src="/images/amazon_prime.png" alt="amazon_prime" />
                        <div>
                            <p>Get it <span className="font-semibold">{primeDate}</span></p>
                            <p>FREE delivery by Amazon</p>
                        </div>
                    </div>
                ) : (
                    <div className="text-gray-500 text-sm">
                        <p>Get it <span className="font-semibold">{nonPrimeDate}</span></p>
                        <p className="w-52">FREE delivery on your first order shiped by Amazon</p>
                    </div>
                ) }
            </div>

        </div>
    )
}
