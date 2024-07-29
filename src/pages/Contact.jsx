import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import image10 from '../imgSlider/icons8-instagram-48.png'
//icons
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";


const ContactUs = () => {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [faqs, setFaqs] = useState([
        {
            question: "What are your opening hours?",
            answer: "Our coffee shop is open from 8 AM to 8 PM, Monday to Sunday.",
            isOpen: false
        },
        {
            question: "Do you offer vegan options?",
            answer: "Yes, we offer a variety of vegan options including plant-based milks and pastries.",
            isOpen: false
        },
        {
            question: "Can I order online?",
            answer: "Yes, you can place your order online through our website or mobile app.",
            isOpen: false
        },
        {
            question: "Where are you located?",
            answer: "We are located at 123 Street, Subotica. You can find directions on our website.",
            isOpen: false
        },
        {
            question: "Do you have Wi-Fi available?",
            answer: "Yes, we offer free Wi-Fi for all our customers.",
            isOpen: false
        },
        {
            question: "Can I book a table in advance?",
            answer: "We do not accept table reservations. Our seating is available on a first-come, first-served basis.",
            isOpen: false
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept cash or credit/debit cards.",
            isOpen: false
        },
        {
            question: "Do you offer gift cards?",
            answer: "Yes, we offer gift cards which can be purchased at our store.",
            isOpen: false
        },
        {
            question: "Are you hiring?",
            answer: "We are always looking for passionate coffee lovers to join our team. Visit our careers page for current openings.",
            isOpen: false
        },
        {
            question: "Do you host events or private parties?",
            answer: "Yes, we can host events and private parties. Please contact us for more information.",
            isOpen: false
        },
    ]);

    function toggleAnswer(index) {
        setFaqs(faqs.map((fa, i) => {
            if (i === index) {
                fa.isOpen = !fa.isOpen
            } else {
                fa.isOpen = false;
            }
            return fa;
        }))

    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('contactForm', JSON.stringify(form));
        toast.success("Your message has been sent!");
        setForm({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className="container mx-auto p-6 bg-green-100 flex flex-col items-center">
            <h1 className="text-3xl font-bold text-green-800 mb-6 text-center">Contact Us</h1>

            <div className="flex items-center gap-6 w-2/3">
                <div className="bg-green-100 p-6 rounded-lg shadow-lg w-full text-center">
                    <h2 className="text-2xl font-bold text-green-700 mb-4">Get in Touch</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className="w-full p-2 border border-green-300 rounded"
                        />
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            className="w-full p-2 border border-green-300 rounded"
                        />
                        <input
                            type="text"
                            name="subject"
                            value={form.subject}
                            onChange={handleChange}
                            placeholder="Subject"
                            className="w-full p-2 border border-green-300 rounded"
                        />
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Message"
                            className="w-full p-2 border border-green-300 rounded"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 transition-all"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            <div className="mt-6 bg-green-100 p-6 rounded-lg shadow-lg w-2/3 text-center">
                <h2 className="text-2xl font-bold text-green-700 mb-4">Contact Information</h2>

                <p className="text-xl font-bold text-green-500 mb-5">
                    At GreenGo, our customers are our top priority. Whether you have a question, a concern, or simply want to share your feedback, we are always here to help. Feel free to reach out to us through any of the following methods:</p>
                <p className="text-lg text-green-700"><strong>Phone:</strong> +1 234 567 890</p>
                <p className="text-lg text-green-700"><strong>Email:</strong> contact@greengo.com</p>
                <p className="text-lg text-green-700"><strong>Office Hours:</strong> Mon - Sun, 8am - 8pm</p>
            </div>

            <div className="container mx-auto p-6 m-5  w-2/3">
                <h2 className="text-2xl font-bold text-green-700 mb-4 text-center">Frequently Asked Questions</h2>
                <div className="bg-green-100 p-6 rounded-lg shadow-lg w-2/3 mx-auto">
                    {faqs.map((el, index) => (
                        <div key={index} className="p-3 border-b border-green-200 text-lg text-center">
                            <h3
                                className="font-bold text-lg text-green-700 cursor-pointer"
                                onClick={() => toggleAnswer(index)}
                            >
                                {el.question}
                            </h3>
                            {el.isOpen && <p className="mt-2 text-green-500 text-base font-bold">{el.answer}</p>}
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-6 bg-green-100 p-6 rounded-lg shadow-lg w-2/3 text-center">
                <h2 className="text-2xl font-bold text-green-700 mb-4">Follow Us</h2>
                <div className="flex justify-center items-center space-x-4 gap-5">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-700"><FaFacebook size={30} color="blue" /></a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-700"><BsTwitterX size={30} color="black" /></a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-700"> <img src={image10} className="w-[45px]" /></a>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ContactUs;
