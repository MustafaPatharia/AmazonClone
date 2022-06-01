
import { useState } from "react";
import { IconBrandPaypal, IconCreditCard, IconBrandApple } from '@tabler/icons';
import { formatExpirationDate, formatCreditCardNumber, formatCVC } from '../utils/creditCard'

function PaymentOptions() {

    const [paymentMethod, setPaymentMethod] = useState ('credit-card')
    const [ cardDetails, setCardDetails] = useState({cardNumber: '', cardName: '', cardDate:'' , cardCVV: ''})

    const onSelectPayment = (e) => {
        setPaymentMethod(e.target.value);
    }

  return (
    <div>
        <p className="text-gray-600 my-5">Payment Method</p>
        <div className="col-span-3 flex-col flex text-xl space-y-4">                
                <div className="form-check flex">
                    <input className="form-check-inputappearance-none rounded-full h-4 w-4 border border-gray-500 bg-white checked:bg-amazon_yellow checked:border-amazon-yellow focus:outline-none transition duration-200 mt-1 align-top  mr-2 cursor-pointer" type="radio" name="payment" onChange={onSelectPayment} id="credit-card" defaultChecked value="credit-card"/>
                    <label className="space-x-3 flex font-semibold form-check-label" for="credit-card"><IconCreditCard/><p>Credit Card</p></label>
                </div>
                <div className="form-check">
                    <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-500 bg-white checked:bg-amazon_yellow checked:border-amazon-yellow focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="payment" id="paypal" onChange={onSelectPayment} value="paypal"/>
                    <label className="flex font-semibold form-check-label space-x-3" for="paypal">
                    <IconBrandPaypal /><p>Paypal</p>
                </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-500 bg-white checked:bg-amazon_yellow checked:border-amazon-yellow focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="payment" id="apple-pay" onChange={onSelectPayment} value='apple-pay'/>
                    <label className="flex space-x-3 form-check-label font-semibold" for="apple-pay"><IconBrandApple/><p>Apple Pay</p>
                </label>
                </div>
            </div>
            
            {paymentMethod === 'paypal' && (
                 <button className="bg-blue-600 mt-8 text-white w-full rounded-md p-3">
                 Pay with Paypal
                </button>
            )}
            {paymentMethod === 'apple-pay' && (
                 <button className="bg-gray-800 mt-8 text-white w-full rounded-md p-3">
                 Pay with Apple pay
                </button>
            )}
            {paymentMethod === 'credit-card' && (
                <div>
                   {/* Card Form */}
                    <form className="mt-10 flex flex-col space-y-7">
                        <div className="relative group">
                            <input type="text" id="card_name" 
                             onChange={(e) => { 
                                setCardDetails( { ...cardDetails, cardName: e.target.value } )} }
                             required className="w-full h-10 text-base peer bg-transparent outline-none font-bold" />
                            <label for="card_name" className="transform transition-all absolute top-0 left-0 h-full flex items-center  text-base group-focus-within:text-base peer-valid:text-base group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">Name on card</label>
                        </div>
                        <div className="relative group">
                            <input type="text" id="card_number" value={cardDetails.cardNumber} 
                            onChange={(e) => { 
                                setCardDetails( { ...cardDetails, cardNumber: formatCreditCardNumber(e.target.value) } )} }
                            required className="w-full h-10 text-base peer bg-transparent outline-none font-bold" />
                            <label for="card_number" className="transform transition-all absolute top-0 left-0 h-full flex items-center  text-base group-focus-within:text-base peer-valid:text-base group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">Card Number</label>
                        </div>
                        <div className="flex space-x-4">
                            <div className="relative group">
                                <input type="text" id="date" 
                                pattern="\d\d/\d\d" value={cardDetails.cardDate} 
                                onChange={(e) => { 
                                    setCardDetails( { ...cardDetails, cardDate: formatExpirationDate(e.target.value) } )} }
                                required className="w-full h-10 text-base peer bg-transparent outline-none font-bold" />
                                <label for="date" className="transform transition-all absolute top-0 left-0 h-full flex items-center  text-base group-focus-within:text-base peer-valid:text-base group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">Expiry Date</label>
                            </div>
                            <div className="relative group">
                                <input type="text" id="cvv" value={cardDetails.cardCVV} pattern="\d{3,4}"
                                onChange={(e) => { 
                                    setCardDetails( { ...cardDetails, cardCVV: formatCVC(e.target.value) } )} }
                                required className="w-full h-10 text-base peer bg-transparent outline-none font-bold" />
                                <label for="cvv" className="transform transition-all absolute top-0 left-0 h-full flex items-center  text-base group-focus-within:text-base peer-valid:text-base group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">CVV</label>
                            </div>
                        </div>

                    </form>

                    <button className="bg-amazon_yellow mt-8 text-white w-full rounded-md p-3">
                    Pay with Card
                   </button>                  

                </div>
                
            )}
    </div>
  )
}

export default PaymentOptions