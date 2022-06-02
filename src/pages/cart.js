import { useSelector } from "react-redux";
import Header from "../components/Header";
import { selectItems } from "../slices/basketSlice";
import BasketProduct from "../components/BasketProduct"
import ShippingOptions from "../components/ShippingOptions";
import { signIn, useSession } from "next-auth/react";
import PaymentOptions from "../components/PaymentOptions";

function cart() {
    const items = useSelector(selectItems);
    const {data:session} = useSession();

    return (
        <div>
            <Header />

            <main className="xl:flex max-w-screen-2xl mx-auto">
                <div className="xl:flex xl:w-full m-5 xl:space-x-8">
                {/* Left */}
                <div className="grow-[4] flex-1">
                    <div className="flex flex-col">
                        <h1 className="text-3xl my-8">{items.length === 0 ? 'Your Amazon basket is empty' : 'Shopping Basket'}</h1>
                        <div className="grid gap-y-4 md:grid-cols-2 xl:grid-cols-1 md:grid-flow-row-dense">
                            {items.map((item,i) => (
                                <BasketProduct key={i} id={item.id} title={item.title} price={item.price} image={item.image} hasPrime={item.hasPrime} deliveryDate={item.deliveryDate} quantity={item.quantity} />
                            ))}
                        </div>
                        {items.length > 0 && ( 
                            <ShippingOptions itemsLength={items.length} /> )}
                    </div>                
                </div>

                {/* Right */}
                { items.length > 0 && ( 
                    <div className="bg-amazon_blue-alice rounded-lg  px-8 py-5 xl:mt-6 h-fit flex-1 sticky top-5">
                        {!session ? (
                            <button className="bg-amazon_yellow text-white w-full rounded-md p-3" onClick={signIn}>
                                Signin to checkout
                            </button>) : (
                                <div>
                                    <p className="font-semibold text-lg">{session.user.name.split(' ')[0]}, last step remained👇</p>
                                    <PaymentOptions />
                                </div>
                            )}
                    </div>
                )}
                </div>
            </main>
        </div>
    )
}

export default cart;