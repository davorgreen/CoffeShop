import { useSelector } from "react-redux"
import CartProductComponent from "../components/CartProductComponent";
import { useRef, useState } from "react";
import { useNavigate } from "react-router";





function Cart() {
    const [currentCoupon, setCurrentCoupon] = useState(null);
    const coupon = useRef();
    const { totalPrice, cart } = useSelector((state) => state.cartStore);
    const navigate = useNavigate();

    function handleCoupon() {
        setCurrentCoupon(coupon.current.value);

        coupon.current.value = '';
    }

    function handleToPay() {
        if (cart.length > 0) {
            navigate('/payment')
        } else {
            return null;
        }
    }

    return (
        <>
            <div className=" mt-5 lg:mt-12">
                <div className="container mx-auto flex flex-col lg:flex-row lg:gap-5">
                    {/*left side*/}
                    <div className="w-full lg:w-[70%]">
                        {/*header*/}
                        <div className="grid grid-cols-4 bg-green-300 h-14 place-items-center">
                            <p className="text-xl text-textColor font-medium">Product</p>
                            <p className="text-xl text-textColor font-medium" >Price</p>
                            <p className="text-xl text-textColor font-medium">Quantity</p>
                            <p className="text-xl text-textColor font-medium">Total Price</p>
                        </div>
                        {/*body of items*/}
                        <div className="flex flex-col gap-4">
                            {cart.map((item, index) => {
                                return <CartProductComponent item={item} index={index} key={index} />
                            })}
                        </div>
                    </div>

                    {/*rigth side*/}
                    <div className="w-full lg:w-[30%] border border-mainBlue overflow-hidden flex flex-col gap-3  rounded-lg">
                        {/*heading*/}
                        <div className="h-14 bg-green-300 flex items-center justify-center">
                            <h2 className="text-center font-medium text-base">Cart Total</h2>
                        </div>
                        <div className="px-5 flex flex-col gap-5 relative">
                            <div className="flex flex-col items-center justify-between gap-4 my-4 border border-gray-300">
                                <div className="flex flex-col justify-center items-center ">
                                    <p className="text-base font-medium">Total Price:</p>
                                    <p className="text-xl font-bold">${currentCoupon === 'green' ? (totalPrice - (totalPrice * 0.1).toFixed(2)) : totalPrice}</p>
                                </div>
                                {/*discount*/}
                                <div className="flex flex-col items-center gap-2">
                                    <p className="text-sm text-slate-500">Take your discount 10%</p>
                                    <div className="border border-slate-500 rounded-full flex flex-row items-center justify-center ">
                                        <input ref={coupon} type="text" placeholder="Insert your coupon" className="px-2 py-1 rounded-full outline-none w-full" />
                                        <button className="px-2 py-1 rounded-full" onClick={() => handleCoupon()} >Apply</button>
                                    </div>
                                </div>
                                <button className="mt-5 mb-3 px-4 py-2 text-white font-bold bg-green-700 rounded-xl cursor-pointer hover:text-green-700 hover:bg-transparent hover:font-bold hover:underline" onClick={() => handleToPay()}>Process Payment</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> </>

    )
}

export default Cart