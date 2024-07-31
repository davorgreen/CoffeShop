import { Link } from "react-router-dom";
//icons
import { MdOutlineShoppingCart } from "react-icons/md";



function Payment() {

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
                            placeholder="Enter your phone number"
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
                    <button type="submit"
                        className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 transition-all">Process Payment</button>
                </form>

            </div>
        </div>
    )
}

export default Payment;