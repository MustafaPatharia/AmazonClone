import Image from "next/image"
import { PlusIcon , MinusIcon, XIcon } from '@heroicons/react/outline'
import { useDispatch } from "react-redux"
import { changeProductQuantity, removeFromBasket } from "../slices/basketSlice"
import Currency from 'react-currency-formatter'



function BasketProduct({id,title,price,hasPrime,image, quantity, deliveryDate}) {
    const dispatch = useDispatch();

    const changeQuanity = (value) => {
        dispatch(changeProductQuantity({id , value}))
    }

    const removeItemFromBasket = () => {
        dispatch(removeFromBasket(id))
    }

  return (
    <div className="grid grid-cols-4 xl:grid-cols-[160px,minmax(400px,1fr),140px,160px,50px] grid-flow-row-dense gap-x-8 gap-y-2 border-gray-100 border-b-2 py-6">
        <Image src={image} width={140} height={140} objectFit="contain" />

        {/* 2nd Grid Column && Detail */}
        <div className="flex flex-col space-y-2  col-span-3 xl:col-span-1">
            <h2 className="mb-2 text-xl">{title}</h2>
            <div className="text-sm hidden xl:block">
                <input className="form-check-input appearance-none h-4 w-4 border border-gray-400 rounded-sm bg-white checked:bg-amazon_yellow checked:border-amazon_yellow focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="containeGift" />
                <label className="inline-block text-gray-500" for="containeGift">
                    This order contains gift <span className="text-amazon_blue-iris link">Learn more</span>
                </label>
            </div>
            { hasPrime ? (
            <div className="hidden xl:flex items-center space-x-2 text-xs md:text-sm text-gray-500">
                <img loading="lazy" className="w-10 h-6" src="/images/amazon_prime.png" alt="amazon_prime" />
                <p>Get it <span className="font-semibold">{deliveryDate}</span> FREE delivery by Amazon</p>
            </div> )  : (
            <div className="hidden xl:flex flex-col md:flex-row md:items-center md:space-x-2 text-xs md:text-sm text-gray-500">
                <p>Get it <span className="font-semibold">{deliveryDate}</span> FREE delivery on your first order shiped by Amazon</p>
                
            </div>
            )}
            {/* Price for small screen */}
            <div className="xl:hidden font-semibold text-2xl">
                <Currency quantity={price*quantity} currency="INR"/>
            </div>

            <div className="hidden md:flex items-center space-x-3 xl:space-x-5 text-amazon_yellow text-xs md:text-sm">
                <p className="link" onClick={removeItemFromBasket}>Delete</p>
                <div className="h-4 w-0.5 bg-amazon_yellow"></div>
                <p className="link">Save for later</p>
                <div className="h-4 w-0.5 bg-amazon_yellow hidden xl:block"></div>
                <p className="link hidden xl:block">See more like this</p>
            </div>
        </div>

        {/* 3rd Grid Colum && Counter */}
        <div className="flex items-center justify-center space-x-5">
            <div className="p-1 hover:bg-gray-100 rounded-md cursor-pointer">
                <MinusIcon onClick={()=>quantity > 1 ? changeQuanity(-1) : ''} className="h-5 w-5"/>
            </div>
            <p className="w-5">{quantity}</p>
            <div className="p-1 hover:bg-gray-100 rounded-md cursor-pointer">
                <PlusIcon onClick={()=>changeQuanity(1)} className="h-5 w-5" />
            </div>
        </div>

        {/* 4th Grid Column */}
        <div className="col-span-3 xl:col-span-1 flex items-center">
            { hasPrime ? (
            <div className="flex xl:hidden items-center space-x-2 text-xs md:text-sm text-gray-500">
                <img loading="lazy" className="w-10 h-6" src="/images/amazon_prime.png" alt="amazon_prime" />
                <p>Get it <span className="font-semibold">{deliveryDate}</span> FREE delivery by Amazon</p>
            </div> )  : (
            <div className="flex xl:hidden md:flex-row items-center space-x-2 text-xs md:text-sm text-gray-500">
                <p>Get it <span className="font-semibold">{deliveryDate}</span> FREE delivery on your first order shiped by Amazon</p>
            </div>
            )}
            {/* Price */}
            <div className="hidden xl:flex mx-auto font-semibold text-xl">
                <Currency quantity={price*quantity} currency="AED"/>
            </div>
        </div>

        {/* 5th Grid Column */}
        <div className="flex w-full items-center mx-auto col-span-full xl:col-span-1 ">
            <div onClick={removeItemFromBasket} className="xl:block text-gray-400 cursor-pointer hidden">
                <XIcon className="h-6 w-6 hover:bg-gray-100 rounded-md p-1"  />
            </div>

            {/* Buttons */}
            <div className="flex w-full text-center space-x-4 text-white md:hidden">
                <button className="rounded-md w-full p-3 bg-amazon_yellow" onClick={removeItemFromBasket}>Delete</button>
                <button className="rounded-md w-full p-3 bg-amazon_yellow-light">Save for later</button>
            </div>
    
        </div>        
    </div>
  )
}

export default BasketProduct