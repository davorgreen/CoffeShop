import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link, useNavigate, } from "react-router-dom";
//icons
import { MdOutlineShoppingCart } from "react-icons/md";
import { applyCoupon, setCartClear, resetDiscount, } from "../slices/CartSlice";
import { toast } from "react-toastify";

const Payment = () => {
    const [paymentMethod, setPaymentMethod] = useState('');
    const [coupon, setCoupon] = useState('');
    const [form, setForm] = useState({
        fullName: '',
        address: '',
        email: '',
        phoneNumber: '',
        paymentMethod: '',
        totalPrice: '',
        cardNumber: '',
        CVC: '',
        expirationDate: '',
    });
    const { totalPrice, currentCoupon } = useSelector((state) => state.cartStore);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function handleCoupon(e) {
        setCoupon(e.target.value);
    }

    function handleCouponApply() {
        dispatch(applyCoupon(coupon));
    }

    useEffect(() => {
        setCoupon(currentCoupon)
    }, [])

    useEffect(() => {
        setForm(prevForm => ({
            ...prevForm,
            totalPrice: totalPrice,
        }));
    }, [totalPrice]);

    const handlePaymentMethod = (e) => {
        const selectMethod = e.target.value;
        setPaymentMethod(selectMethod);
        setForm(prevForm => ({
            ...prevForm,
            paymentMethod: selectMethod,
        }));
    };

    function handleChange(e) {
        const { name, value } = e.target;
        setForm(prevForm => ({ ...prevForm, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        localStorage.setItem('orderForm', JSON.stringify({ ...form, totalPrice: totalPrice }));
        toast.success('Your order has been sent!');
        setForm({
            fullName: '',
            address: '',
            email: '',
            phoneNumber: '',
            paymentMethod: '',
            totalPrice: '',
            cardNumber: '',
            CVC: '',
            expirationDate: ''
        });
        dispatch(setCartClear());
        dispatch(resetDiscount());
        navigate('/');
    }


    return (
        <div className="flex items-center justify-center m-5">
            <div className="bg-green-300 p-8 rounded shadow-2xl w-1/3">
                <Link to={'/cart'}>
                    <button className="px-4 py-2 mb-2 bg-green-600 rounded text-white flex gap-1">
                        <MdOutlineShoppingCart size={20} /> Back To Cart
                    </button>
                </Link>
                <h2 className="text-2xl font-bold mb-6 text-center">Enter Your Details</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block font-bold text-gray-700">FullName</label>
                        <input
                            name="fullName"
                            value={form.fullName}
                            type="text"
                            placeholder="Enter Your FullName"
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-bold text-gray-700">Address</label>
                        <input
                            name="address"
                            value={form.address}
                            type="text"
                            placeholder="Enter Your Full Address"
                            pattern="[a-zA-Z0-9,.' \-]{5,}"
                            title="Address must be at least 5 characters long and can include letters, numbers, spaces"
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-bold text-gray-700">Email</label>
                        <input
                            name="email"
                            value={form.email}
                            type="email"
                            placeholder="Enter Your Email"
                            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                            title="Enter a valid email address (e.g., example@example.com)"
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-bold text-gray-700">PhoneNumber</label>
                        <input
                            name="phoneNumber"
                            value={form.phoneNumber}
                            type="tel"
                            placeholder="Enter your phone number"
                            pattern="\d{3}-\d{3}-\d{4}"
                            title="Phone number must be in the format XXX-XXX-XXXX"
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                            onChange={handleChange}
                        />
                    </div>
                    {/* Payment method */}
                    <div className="mb-4">
                        <label className="block font-bold text-gray-700">Payment Method</label>
                        <select
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                            name="paymentMethod"
                            value={form.paymentMethod}
                            onChange={handlePaymentMethod}
                        >
                            <option value='' disabled>Select Payment Method</option>
                            <option value="card">Credit/Debit Card</option>
                            <option value="cash">Cash on Delivery</option>
                        </select>
                    </div>
                    {paymentMethod === 'card' && (
                        <div className="mb-4">
                            <div className="bg-green-300 p-8 rounded shadow-2xl w-full">
                                <h2 className="text-xl font-bold mb-6 text-center">Enter Card Details</h2>
                                <div>
                                    <label htmlFor="cardNumber" className="block font-bold text-gray-700">Card Number</label>
                                    <input type="text" name="cardNumber"
                                        value={form.cardNumber} placeholder="Card Number" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500" pattern="(?<!\d)\d{16}(?!\d)|(?<!\d[ _-])(?<!\d)\d{4}(?:[_ -]\d{4}){3}(?![_ -]?\d)" required onChange={handleChange} />
                                </div>
                                <div>
                                    <label htmlFor="CVC" className="block font-bold text-gray-700">CVC</label>
                                    <input type="text" name="CVC"
                                        value={form.CVC} placeholder="CVC" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500" pattern="^\d{3,4}$" required onChange={handleChange} />
                                </div>
                                <div>
                                    <label htmlFor="expirationDate" className="block font-bold text-gray-700">Expiration Date</label>
                                    <input type="text" name="expirationDate"
                                        value={form.expirationDate} placeholder="MM/YY" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500" pattern="^(0[1-9]|1[0-2])\/?([0-9]{2})$" required onChange={handleChange} />
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="mb-4">
                        <label className="flex items-center">
                            <input type="checkbox" className="form-checkbox text-green-600 h-5 w-5" required />
                            <span className="ml-2 text-gray-700">I agree to the terms and conditions</span>
                        </label>
                    </div>
                    {/* Discount */}
                    <div className="flex flex-col items-center gap-2">
                        <p className="text-sm font-semibold text-slate-900">Take your discount 10%</p>
                        <div className="flex flex-row items-center justify-center">
                            <input value={coupon} type="text" placeholder="Insert your coupon" className="px-2 py-1 rounded-full outline-none w-full focus:outline-none focus:ring-2 focus:ring-green-500 text-center" onChange={handleCoupon} />
                            <button type="button" className="px-2 py-1" onClick={handleCouponApply}>
                                <span className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full text-white">Apply</span>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-base font-medium">Total Price:</p>
                        <p className="text-xl font-bold">${totalPrice.toFixed(2)}</p>
                    </div>
                    <button
                        type="submit"
                        className="w-full mt-3 bg-green-600 text-white p-2 rounded hover:bg-green-700 transition-all"
                    >
                        Process Payment
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Payment;