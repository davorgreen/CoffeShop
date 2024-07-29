import { Link } from "react-router-dom"
import img from '../imgSlider/119685306_194658822278221_659816197535638191_n.jpg'

function NotFoundPage() {
    return (
        <div className="container mx-auto p-6 bg-green-100 shadow-xl flex flex-col items-center  justify-center w-2/3 h-2/3 m-6">
            <div className=" flex flex-col items-center m-3">
                <p className="text-3xl font-bold text-green-800 mb-6 text-center">Page Not Found !</p>
                <img src={img} alt="img" className="w-2/3 m-3 rounded-xl" />
                <Link to={'/'}><button className="w-full p-2 border border-green-900  rounded text-xl font-bold text-green-500">Back To HomePage</button></Link>
            </div>
        </div>
    )
}

export default NotFoundPage