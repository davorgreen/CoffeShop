//icons
import { IoMdCloseCircle } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../slices/CartSlice";
import { useEffect, useState } from "react";
import { addToFavorite } from "../slices/FavoriteSlice";

function Modal({ modalOpen, handleClose, item }) {
    const [addedItemToCart, setAddedItemToCart] = useState(false);
    const [favoriteIcon, setFavoriteIcon] = useState(null);
    const [inCart, setInCart] = useState(null);

    const { favoriteItems } = useSelector((state) => state.favoriteStore);
    const { cart } = useSelector((state) => state.cartStore);

    const dispatch = useDispatch();

    const { name,
        id,
        price,
        region,
        weight,
        grind_option,
        roast_level, } = item;


    function addItemToCart(item) {
        dispatch(addToCart(item));
        setAddedItemToCart(true);
    }

    function addItemToFavorites(item) {
        dispatch(addToFavorite(item));
        setFavoriteIcon(true);
    }


    useEffect(() => {
        favoriteItems.find((favorite) => {
            if (favorite.id === id) {
                setFavoriteIcon(favorite.id);
                return;
            }
        })
    }, [favoriteItems]);


    useEffect(() => {
        cart.find((el) => {
            if (el.id === id) {
                setInCart(el.id);
                return;
            }
        })
    }, [cart])


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
                        <button className="flex flex-row items-center gap-1 px-4 py-2 bg-green-400 text-white font-bold rounded-xl hover:text-green-900 hover:underline hover:bg-transparent " onClick={() => addItemToFavorites(item)}><Link to={'/favorites'}>Add To Favorites</Link>{favoriteIcon === id ? <FaRegHeart size={20} color="red" /> : <FaRegHeart size={20} color="green" />}</button>
                        <button className="flex flex-row items-center gap-1 px-6 py-3 bg-green-400 text-white font-bold rounded-xl hover:text-green-900 hover:underline hover:bg-transparent " onClick={() => addItemToCart(item)}><Link to={'/cart'}> {addedItemToCart ? 'View Cart' : 'Add To Cart'}</Link>{inCart === id ? <MdOutlineShoppingCart size={20} color="red" /> : <MdOutlineShoppingCart size={20} color="green" />}</button>
                    </div>
                </div>
            </div>)}</div>
    )
}

export default Modal