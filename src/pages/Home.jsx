import { Link } from "react-router-dom";
import CommentSlider from "../components/CommentSlider";
import SimpleSlider from "../components/SimpleSlider";




function Home() {
    return (

        <div className="mt-5">
            <div
                className="relative h-screen flex  justify-center items-center text-center bg-cover bg-center"
                style={{ backgroundImage: 'url(https://images.yummy.ph/yummy/uploads/2020/01/pokko-cafe-marikina-2.png)' }}
            >
                <div className="bg-black bg-opacity-50 absolute inset-0 z-0"></div>
                <div className="relative z-10 text-white p-8 ">
                    <h1 className="text-5xl font-bold mb-4 hidden md:block">Welcome to GreenGo Coffee Shop</h1>
                    <p className="text-2xl mb-8">Experience the best coffee in town, brewed to perfection.</p>
                    <Link to="/shop">
                        <button className="bg-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-700">
                            Shop Now
                        </button>
                    </Link>
                </div>
            </div>
            <div className="container mx-auto flex flex-col lg:flex-row items-center gap-5 mt-5">
                <div className="w-full md:w-1/2">
                    <img
                        src="https://static.wixstatic.com/media/b8deca_b0a5ddc07ef84aada34a3f6198ee0c4e~mv2.jpg/v1/crop/x_0,y_569,w_3360,h_3061/fill/w_844,h_769,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4TLC8360-2.jpg"
                        alt="Our Story"
                        className="w-full h-auto rounded-xl"
                    />
                </div>
                <div className="w-full md:w-1/2 ">
                    <h3 className="text-center font-bold text-3xl mb-5 text-green-700">Our Story</h3>
                    <p className="md:text-xl mb-8 font-lora tracking-wide leading-relaxed text-center">
                        Your ultimate destination for exceptional coffee experiences. Established in 2012, GreenGo began its journey as a humble local café, serving the finest brews to our community. Over the years, our passion for coffee and commitment to quality have propelled us to new heights.
                    </p>
                    <p className="md:text-xl mb-8 font-lora tracking-wide leading-relaxed text-center">
                        Today, GreenGo is one of the biggest international coffee shops and a proud member of one of the world’s largest distribution groups. Our dedication to sourcing the best coffee beans and our innovative brewing techniques have made us a favorite among coffee enthusiasts worldwide.
                    </p>
                    <p className="md:text-xl mb-8 font-lora tracking-wide leading-relaxed text-center">
                        Whether you're here for a quick espresso, a leisurely latte, or to explore our diverse menu of coffee blends, we are committed to delivering a superior coffee experience.
                    </p>
                </div>
            </div>
            <SimpleSlider />
            <CommentSlider />


        </div>




    )
}

export default Home;