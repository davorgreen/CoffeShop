import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import image from '../imgSlider/screenshot_2019-08-21_12.57.27.png';


function AboutUs() {
    return (
        <div className="container mx-auto flex flex-col gap-8 bg-green-50 items-center justify-center w-11/12 lg:w-3/4 h-full shadow-lg shadow-green-200 px-6 py-8 rounded-xl m-6">

            <h3 className="text-4xl font-bold text-green-700">Welcome to GreenGo, where every cup tells a story</h3>

            <p className="font-sans text-lg text-green-800 text-center px-4"> At GreenGo, we believe that coffee is more than just a beverage—it's a global connection that brings people together. As one of the biggest international coffee shops and one of the world’s largest distribution groups, our journey is fueled by passion, excellence, and a deep love for coffee.</p>

            <h3 className="text-3xl font-bold text-green-700">Our Story</h3>

            <p className="font-serif text-gray-700 text-xl leading-8 text-center px-6">Founded with a mission to bring the finest coffee experiences to the world, GreenGo has grown into a renowned name in the coffee industry. From the heart of coffee plantations to your favorite cup, we meticulously oversee every step of the process. Our commitment to quality ensures that every sip you take is a testament to the hard work and dedication of coffee farmers, roasters, and baristas around the globe.</p>

            <Link to={'/shop'} className="flex gap-3 items-center hover:underline cursor-pointer">
                <h3 className="text-3xl font-bold text-green-700">Our Coffee </h3>
                <MdOutlineShoppingCart size={30} color="green" />
            </Link>

            <p className="font-sans text-lg text-green-800 text-center px-4">GreenGo’s coffee beans are sourced from the most fertile regions of the world, each chosen for its unique flavor profile and superior quality. We partner with sustainable farms that prioritize ethical practices and environmental stewardship. Our expert roasters then craft these beans into blends and single-origin masterpieces that cater to both traditional and adventurous palates.</p>

            <h3 className="text-3xl font-bold text-green-700">Our Community</h3>
            <div className="flex flex-col items-center md:flex-row"> <p className="font-sans text-lg text-green-800 text-center px-4"> We are more than just a coffee shop. GreenGo is a community hub, a place where friends meet, ideas are born, and moments are cherished. Our baristas are passionate coffee artisans who are eager to share their knowledge and craft with you. Whether you’re grabbing a quick espresso on the go or settling in for a relaxing afternoon, we strive to make every visit memorable.</p>
                <img src={image} alt="aaa" className="w-1/2 object-cover rounded-2xl" />
            </div>


            <h2 className="text-3xl font-bold text-green-700">Join Us</h2>

            <p className="font-sans text-lg text-green-800 text-center px-4">Step into GreenGo and become a part of our coffee family. Discover a world of flavors, aromas, and experiences that celebrate the art of coffee. Whether you're a seasoned connoisseur or a curious newcomer, GreenGo is your destination for exceptional coffee and warm, welcoming vibes.</p>

            <h3 className="text-2xl font-bold text-green-600 text-center">Thank you for being a part of our story. Together, let’s make every cup a celebration of life, culture, and connection.</h3>
        </div>
    )
}

export default AboutUs;
