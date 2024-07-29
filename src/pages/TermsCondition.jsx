import { Link } from "react-router-dom";


const TermsCondition = () => {
    return (
        <div className="container mx-auto p-6 text-green-900">
            <h1 className="text-4xl font-bold mb-6 text-center text-green-700">Terms & Conditions</h1>
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
                <p className="mb-4">
                    Welcome to our coffee shop. By accessing our services, you agree to these terms and conditions.
                </p>

                <h2 className="text-2xl font-semibold mb-4">Use of Our Service</h2>
                <p className="mb-4">
                    You agree to use our service only for lawful purposes. You must not use our service for any illegal or unauthorized purpose.
                </p>

                <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
                <p className="mb-4">
                    All content on our site, including text, graphics, and logos, is the property of our coffee shop and protected by copyright laws.
                </p>

                <Link to={'/contact'}><h2 className="text-2xl font-semibold mb-4">Contact Us</h2></Link>
                <p>
                    If you have any questions about our Terms & Conditions, please contact us at:
                </p>
                <p>
                    Email: support@greengocoffeeshop.com
                </p>
            </div>
        </div>
    );
};

export default TermsCondition;
