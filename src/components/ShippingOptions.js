import { useSelector } from "react-redux";
import { useState } from "react";
import { cartValue } from "../slices/basketSlice";
import Currency from 'react-currency-formatter'
import { useEffect } from "react";

function ShippingOptions({itemsLength}) {

    const subTotal = useSelector(cartValue);
    const [shipping , setShipping] = useState (0)
    const [totalCartValue, setTotalCartValue] = useState(subTotal+shipping)

    const onSelectShipping = (e) => {
        setShipping(parseInt(e.target.value));
    }

    useEffect(()=> {
        const total = subTotal+shipping
        setTotalCartValue(total)
    },[subTotal, shipping])

  return (
    <div className="flex flex-col py-8">
        <p className="text-xl font-semibold">Choose Shipping</p>
        <div className="grid grid-cols-4 mt-4">
            <div className="col-span-3 flex-col flex space-y-3">                
                <div className="form-check">
                    <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-500 bg-white checked:bg-amazon_yellow checked:border-amazon-yellow focus:outline-none transition duration-200 mt-1 align-top  mr-2 cursor-pointer" type="radio" name="shipping" onChange={onSelectShipping} id="free_shipping" defaultChecked value={0}/>
                    <label className="form-check-label inline-block text-gray-500" for="free_shipping">Free Shipping</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-500 bg-white checked:bg-amazon_yellow checked:border-amazon-yellow focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="shipping" id="paid_shipping" onChange={onSelectShipping} value={15}/>
                    <label className="form-check-label inline-block text-gray-500" for="paid_shipping">
                    Delivery in <span className="font-semibold">next 2 days (AED 15)</span>
                </label>
                </div>
            </div>
            <div className="flex flex-col space-y-2 mr-5">
                <div className="flex space-x-12 justify-between ">
                    <p>Subtotal ({itemsLength} items)</p>
                    <Currency quantity={subTotal} currency="AED"/>
                </div>
                <div className="flex space-x-12 justify-between ">
                    <p>Shipping</p>
                    { shipping == 0 ? 
                    (<p>FREE</p>) : ( <Currency quantity={shipping} currency="AED"/>) }
                </div>
                <div className="flex space-x-12 justify-between">
                    <p>Cart Value</p>
                    <div className="font-semibold text-lg">
                        <Currency quantity={subTotal+shipping} currency="AED" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShippingOptions