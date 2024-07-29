import { useState } from "react"
import { Link } from "react-router-dom"
import NewsletterModal from "./NewsletterModal";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';




function Footer() {
    const [isTrue, setIsTrue] = useState(false);

    function handleNewsletterModalOpen() {
        setIsTrue(!isTrue)
    }

    return (
        <div>
            <div className="bg-green-300">
                <div className="w-10/12 m-auto">
                    <div className="flex flex-col justify-center items-center pt-5 gap-3 md:items-start  md:flex-row md:py-14 ">
                        <div className="w-2/6">
                            <Link to={'/shop'}> <h1 className="text-2xl mb-5  text-green-800 font-bold underline ">Our Store</h1></Link>
                            <Link to={'/shop'}> <p className="hover:text-orange-500 focus:underline focus:decoration-orange-400 transition-all text-xl">"GreenGo is one of the biggest international coffee shop, one of the world’s largest distribution groups."</p></Link></div>
                        <div className="w-2/6">
                            <h1 className="text-2xl mb-5  text-green-800 font-bold underline ">Quick Links</h1>
                            <Link to={'/about'}> <p className="hover:text-orange-500 focus:underline focus:decoration-orange-400 transition-all text-xl">About Us</p></Link>
                            <Link to={'/cart'}><p className="hover:text-orange-500 focus:underline focus:decoration-orange-400 transition-all text-xl" >Shopping Cart</p></Link>
                            <Link to={'/favorites'}> <p className="hover:text-orange-500 focus:underline focus:decoration-orange-400 transition-all text-xl">Wishlist</p></Link>

                        </div>
                        <div className="w-2/6">
                            <Link to={'/contact'}> <h1 className="text-2xl mb-5  text-green-800 font-bold underline ">Information</h1></Link>
                            <Link to={'/privacypolicy'}>  <p className="hover:text-orange-500 focus:underline focus:decoration-orange-400 transition-all text-xl">Privacy Policy</p></Link>
                            <Link to={'/refundpolicy'}> <p className="hover:text-orange-500 focus:underline focus:decoration-orange-400 transition-all text-xl" >Refund Policy</p> </Link>
                            <Link to={'/shippingreturn'}> <p className="hover:text-orange-500 focus:underline focus:decoration-orange-400 transition-all text-xl">Shipping & Return</p></Link>
                            <Link to={'/termscondition'}><p className="hover:text-orange-500 focus:underline focus:decoration-orange-400 transition-all text-xl">Terms & Condition</p></Link>
                        </div>
                        <div className="w-2/6">
                            <h1 className="text-2xl mb-5  text-green-800 font-bold underline ">Let's Get In Touch</h1>
                            <p className="hover:text-orange-500 focus:underline focus:decoration-orange-400 transition-all text-xl relative" onClick={() => handleNewsletterModalOpen()}>Sign Up For Our newsletter and receive 10% off your</p>

                        </div>
                    </div>
                </div>
            </div>
            {
                <><NewsletterModal isTrue={isTrue} onClose={handleNewsletterModalOpen} />
                    <ToastContainer /></>
            }
        </div >
    )
}

export default Footer