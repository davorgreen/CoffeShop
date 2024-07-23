//icons
import { ImCross } from "react-icons/im";
import { useSelector } from "react-redux";
import CartProductComponent from "./CartProductComponent";




function Sidebar({ isActive, closedSidebar }) {
    const { cart } = useSelector((state) => state.cartStore)
    return (
        <div>
            <div>
                <div style={{ transform: `translateX(${isActive ? '0%' : '100%'})` }} className="fixed top-0 right-0 bg-white shadow-lg h-full transition-transform duration-300 ease-in-out overflow-y-auto z-50">
                    <div className="border-b m-4">
                        <h1 className="text-3xl p-4">Your Cart</h1>
                    </div>
                    <div className="p-4">
                        <span className="absolute top-0 right-0 p-4" onClick={closedSidebar}>
                            <ImCross />
                        </span>
                        {cart.length > 0 ? <div className="flex flex-col gap-4 items-start justify-start">
                            {cart.map((item, index) => {
                                return <div className="w-2/3" key={index}><CartProductComponent item={item} index={index} key={index} />
                                </div>
                            })}
                            <button onClick={() => closedSidebar()} className="mt-5 px-4 py-2 text-white font-bold bg-green-700 rounded-xl cursor-pointer hover:text-green-700 hover:bg-transparent hover:font-bold hover:underline">Process Payment</button>

                        </div>
                            : (<div className="text-3xl font-bold uppercase">Empty Cart</div>)}

                    </div>
                </div>
            </div>
        </div >
    )
}

export default Sidebar