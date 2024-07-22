//icons
import { IoMdCloseCircle } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/CartSlice";

function Modal({ modalOpen, handleClose, item }) {
    const [qty, setQty] = useState(1);

    const dispatch = useDispatch();

    const { name,
        price,
        region,
        weight,
        flavor_profil,
        grind_option,
        roast_level, } = item;

    const addItemToCart = (product) => {
        let totalPrice = qty * product.price;
        const tempProduct = {
            ...product,
            quantity: qty,
            totalPrice,
        }
        dispatch(addToCart(tempProduct));
    }

    useEffect(() => {
        if (modalOpen) {

        } else {
            setQty(1);
        }
    }, []);

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
                    <div className="flex gap-5">
                        <button className="flex flex-row items-center gap-1 px-4 py-2 bg-green-400 text-white font-bold rounded-xl hover:text-green-900 hover:underline hover:bg-transparent "><Link>Add To Favorites</Link><FaRegHeart size={20} color="green" /></button>
                        <button className="flex flex-row items-center gap-1 px-6 py-3 bg-green-400 text-white font-bold rounded-xl hover:text-green-900 hover:underline hover:bg-transparent " onClick={() => addItemToCart(item)}><Link to={'/cart'}>Add To Cart</Link><MdOutlineShoppingCart size={20} color="green" /></button>
                    </div>
                </div>
            </div>)}</div>
    )
}

export default Modal