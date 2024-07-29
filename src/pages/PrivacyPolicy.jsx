import { Link } from "react-router-dom";


const PrivacyPolicy = () => {
    return (
        <div className="container mx-auto p-6 text-green-900">
            <h1 className="text-4xl font-bold mb-6 text-center text-green-700">Privacy Policy</h1>
            <div className="bg-white p-8 rounded-lg shadow-lg ">
                <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
                <p className="mb-4">
                    Welcome to our coffee shop's Privacy Policy. We value your privacy and are committed to protecting your personal information.
                </p>

                <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
                <p className="mb-4">
                    We collect information to provide better services to all our users. This includes:
                </p>
                <ul className="list-disc pl-8 mb-4">
                    <li>Your name and contact details</li>
                    <li>Payment information</li>
                    <li>Preferences and interests</li>
                    <li>Website usage data</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-4">How We Use Information</h2>
                <p className="mb-4">
                    We use the information we collect for the following purposes:
                </p>
                <ul className="list-disc pl-8 mb-4">
                    <li>To provide and maintain our services</li>
                    <li>To notify you about changes to our services</li>
                    <li>To allow you to participate in interactive features of our service</li>
                    <li>To provide customer support</li>
                    <li>To gather analysis or valuable information so that we can improve our service</li>
                </ul>

                <Link to={'/contact'}><h2 className="text-2xl font-semibold mb-4">Contact Us</h2></Link>
                <p>
                    If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <p>
                    Email: support@greengocoffeeshop.com
                </p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
