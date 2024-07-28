import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { RxCrossCircled } from "react-icons/rx";


const NewsletterModal = ({ isTrue, onClose }) => {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);

    useEffect(() => {
        if (isSubscribed) {
            toast.success("Successfully subscribed to the newsletter!");
            setIsSubscribed(false);
        }
    }, [isSubscribed]);

    function handleEmailSubmit() {
        localStorage.setItem('newsletterEmail', email);
        setEmail('');
        setIsSubscribed(true);
        onClose();
    }

    if (!isTrue) {
        return null;
    }




    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
                <button onClick={() => onClose()} className="absolute top-2 right-2 text-gray-500 hover:text-gray-800">
                    <RxCrossCircled size={30} />
                </button>
                <h2 className="text-2xl font-bold mb-4">Sign Up for Our Newsletter</h2>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                />
                <button onClick={() => handleEmailSubmit()}
                    className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 transition-all"
                >
                    Subscribe
                </button>
            </div>
        </div>
    );
};

export default NewsletterModal;

