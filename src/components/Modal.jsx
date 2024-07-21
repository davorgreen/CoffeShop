//icons
import { IoMdCloseCircle } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

function Modal({ modalOpen, handleClose, item }) {
    const { name,
        price,
        region,
        weight,
        flavor_profil,
        grind_option,
        roast_level, } = item;
    return (
        <div>{modalOpen && (
            <div className="absolute right-0 top-0 bottom-0 left-0 ">
                <div className="w-full h-full bg-green-200 overflow-hidden flex flex-col justify-center items-center gap-4">
                    <button onClick={() => handleClose()}><IoMdCloseCircle size={30} color="green" /></button>
                    <div className="text-xl text-green-800 font-bold underline">{name}</div>
                    <div className="text-gray-900 text-base font-bold">Price: <span className="font-bold">${price}</span> </div>
                    <div className="text-gray-700 font-bold "><span className="border-b-4 border-lime-900">Region: </span><span className="font-bold">{region}</span></div>
                    <div className="text-gray-700 font-bold">Weight: {weight}g</div>
                    <div className="text-gray-700 font-bold">Grind Option: <span className="underline">{grind_option}</span> </div>
                    <div className="text-gray-700 font-bold">Roast Level: <span className="font-bold">{roast_level}</span></div>
                    <div className="flex gap-10">
                        <span><FaRegHeart size={30} color="green" /></span>
                        <span><MdOutlineShoppingCart size={30} color="green" /></span>
                    </div>
                </div>
            </div>)}</div>
    )
}

export default Modal