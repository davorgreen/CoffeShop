import { useSelector } from "react-redux";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
//icons
import { MdOutlineShoppingCart } from "react-icons/md";




function Payment() {
    const [currentCoupon, setCurrentCoupon] = useState(null);
    const { totalPrice } = useSelector((state) => state.cartStore);
    const coupon = useRef();

    function handleCoupon() {
        setCurrentCoupon(coupon.current.value);
        coupon.current.value = '';
    }

    return (
        <div className="flex items-center justify-center m-5">
            <div className="bg-green-300 p-8 rounded shadow-2xl w-1/3">
                <Link to={'/cart'}><button className="px-4 py-2 mb-2 bg-green-600 rounded text-white flex gap-1"><MdOutlineShoppingCart size={20} /> Back To Cart</button></Link>
                <h2 className="text-2xl font-bold mb-6 text-center">Enter Your Details</h2>
                <form>
                    <div className="mb-4">
                        <label className="block font-bold text-gray-700">FullName</label>
                        <input
                            type="text"
                            placeholder="Enter Your FullName"
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-bold text-gray-700">Address</label>
                        <input
                            type="text"
                            placeholder="Enter Your Address"
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-bold text-gray-700">Email</label>
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-bold text-gray-700">PhoneNumber</label>
                        <input
                            type="tel"
                            placeholder="Enter your phone number ***-***-****"
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-bold text-gray-700">Payment Method</label>
                        <select
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                        >
                            <option value="card">Credit/Debit Card</option>
                            <option value="cash">Cash on Delivery</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="flex items-center">
                            <input type="checkbox" className="form-checkbox text-green-600 h-5 w-5" required />
                            <span className="ml-2 text-gray-700">I agree to the terms and conditions</span>
                        </label>
                    </div>
                    {/*discount*/}
                    <div className="flex flex-col items-center gap-2">
                        <p className="text-sm font-semibold text-slate-900">Take your discount 10%</p>
                        <div className="flex flex-row items-center justify-center ">
                            <input ref={coupon} type="text" placeholder="Insert your coupon" className="px-2 py-1 rounded-full outline-none w-full" />
                            <button className="px-2 py-1S" onClick={() => handleCoupon()} ><span className="bg-blue-500 px-4 py-2 rounded-full text-white">Apply</span></button>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center ">
                        <p className="text-base font-medium">Total Price:</p>
                        <p className="text-xl font-bold">${currentCoupon === 'green' ? (totalPrice - (totalPrice * 0.1).toFixed(2)) : totalPrice}</p>
                    </div>
                    <button type="submit"
                        className="w-full mt-3 bg-green-600 text-white p-2 rounded hover:bg-green-700 transition-all">Process Payment</button>
                </form>
            </div>
        </div>
    )
}

export default Payment;