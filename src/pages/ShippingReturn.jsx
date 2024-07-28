

const ShippingReturn = () => {
    return (
        <div className="container mx-auto p-6 text-green-900">
            <h1 className="text-4xl font-bold mb-6 text-center text-green-700">Shipping & Return</h1>
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">Shipping Policy</h2>
                <p className="mb-4">
                    We offer fast and reliable shipping. Please review our shipping policy below.
                </p>

                <h2 className="text-2xl font-semibold mb-4">Shipping Times</h2>
                <p className="mb-4">
                    Orders are processed within 2-3 business days. Delivery times vary based on your location.
                </p>

                <h2 className="text-2xl font-semibold mb-4">Return Policy</h2>
                <p className="mb-4">
                    You can return items within 30 days of receipt. Items must be in their original condition and packaging.
                </p>

                <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                <p>
                    If you have any questions about our Shipping & Return Policy, please contact us at:
                </p>
                <p>
                    Email: support@greengocoffeeshop.com
                </p>
            </div>
        </div>
    );
};

export default ShippingReturn;
