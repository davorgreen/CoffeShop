import { Link } from "react-router-dom";
import CommentSlider from "../components/CommentSlider";
import SimpleSlider from "../components/SimpleSlider";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import locations from "../data/locations";


function Home() {
    return (

        <div className="mt-5">
            <div
                className="relative h-screen flex  justify-center items-center text-center bg-cover bg-center"
                style={{ backgroundImage: 'url(https://images.yummy.ph/yummy/uploads/2020/01/pokko-cafe-marikina-2.png)' }}
            >
                <div className="bg-black bg-opacity-50 absolute inset-0 z-0"></div>
                <div className="relative z-10 text-white p-8">
                    <h1 className="text-5xl font-bold mb-4 hidden lg:block">Welcome to GreenGo Coffee Shop</h1>
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
            <div className="container mx-auto flex flex-col justify-center items-center m-8">
                <h3 className="text-center font-bold text-3xl m-5 text-green-700">Our Location</h3>
                <div className="m-5">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {locations.map((location, index) => (
                            <div key={index} className="bg-green-100 p-4 rounded-lg shadow-lg">
                                <h2 className="text-2xl font-bold text-green-800 mb-4 text-center">{location.city}</h2>
                                <ul className="list-none text-green-700 ">
                                    {location.addresses.map((loc, idx) => (
                                        <li key={idx} className="mb-2 text-center">
                                            <span className="flex font-bold text-xl justify-center text-green-700">{loc.address}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <MapContainer center={[45.2551, 19.8458]} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[46.0985, 19.6712]}>
                        <Popup className="font-semibold text-green-800">
                            Matije Gupca 24, Subotica
                        </Popup>
                    </Marker>
                    <Marker position={[46.0988, 19.6700]}>
                        <Popup className="font-semibold text-green-800">
                            Korzo 7, Subotica
                        </Popup>
                    </Marker>
                    <Marker position={[46.0728, 19.6429]}>
                        <Popup className="font-semibold text-green-800">
                            Somborski put 39, Subotica
                        </Popup>
                    </Marker>
                    <Marker position={[45.254, 19.8317]}>
                        <Popup className="font-semibold text-green-800">
                            Bulevar oslobođenja 96, Novi Sad
                        </Popup>
                    </Marker>
                    <Marker position={[45.2551, 19.8458]}>
                        <Popup className="font-semibold text-green-800">
                            Zmaj Jovina 22, Novi Sad
                        </Popup>
                    </Marker>
                    <Marker position={[45.2461, 19.8396]}>
                        <Popup className="font-semibold text-green-800">
                            Narodnog Fronta 23, Novi Sad
                        </Popup>
                    </Marker>
                    <Marker position={[44.8176, 20.4572]}>
                        <Popup className="font-semibold text-green-800">
                            Knez Mihailova 32, Beograd
                        </Popup>
                    </Marker>
                    <Marker position={[44.8053, 20.4781]}>
                        <Popup className="font-semibold text-green-800">
                            Bulevar kralja Aleksandra 150, Beograd
                        </Popup>
                    </Marker>
                    <Marker position={[44.8238, 20.4582]}>
                        <Popup className="font-semibold text-green-800">
                            Cara Dušana 60, Beograd
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>


        </div>




    )
}

export default Home;