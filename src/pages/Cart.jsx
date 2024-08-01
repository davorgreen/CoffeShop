import { useSelector } from "react-redux"
import { useNavigate } from "react-router";
import CartProductComponent from '../components/CartProductComponent'




function Cart() {
    const { totalPrice, cart } = useSelector((state) => state.cartStore);
    const navigate = useNavigate();

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
                                <div className="flex flex-col justify-center items-center gap-5 ">
                                    <p className="text-xl font-medium">Total Price: </p>
                                    <p className="text-xl font-bold">${totalPrice}</p>
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