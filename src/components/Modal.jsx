//icons
import { IoMdCloseCircle } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../slices/CartSlice";
import { useEffect, useState } from "react";
import { addToFavorite } from "../slices/FavoriteSlice";
import '../index.css'

//library
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import CSS
import { confirmAlert } from "react-confirm-alert";
import 'react-toastify/dist/ReactToastify.css';
import { Bounce, toast } from "react-toastify";

function Modal({ modalOpen, handleClose, item }) {
    const [favoriteIcon, setFavoriteIcon] = useState(null);
    const [inCart, setInCart] = useState(null);
    const navigate = useNavigate();

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

    const handleAddFunction = () => {
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div className='flex flex-col gap-5 bg-white p-4 rounded-lg shadow-2xl'>
                        <h1 className='underline text-xl font-bold text-green-900'>Confirm to continue</h1>
                        <p className='text-2xl font-bold text-green-500'>Do you want to continue shopping?</p>
                        <div className='flex gap-5 md:justify-between items-center'>
                            <button
                                className='px-4 py-2 text-white font-bold bg-green-700 rounded-xl cursor-pointer hover:text-green-700 hover:bg-transparent hover:font-bold hover:underline'
                                onClick={() => {
                                    onClose();
                                    navigate('/shop');
                                }}
                            >
                                Yes
                            </button>
                            <button
                                className='px-4 py-2 text-white font-bold bg-green-700 rounded-xl cursor-pointer hover:text-green-700 hover:bg-transparent hover:font-bold hover:underline'
                                onClick={() => {
                                    onClose();
                                    navigate('/cart');
                                }}
                            >
                                No
                            </button>
                        </div>
                    </div>
                );
            },
        });
    }

    function addItemToCart(item) {
        if (cart.length > 0) {
            dispatch(addToCart(item));
        } else {
            dispatch(addToCart(item));
            handleAddFunction();
        }
    }

    function addItemToFavorites(item) {
        const isAlreadyFavorite = favoriteItems.some(favorite => favorite.id === item.id);

        if (!isAlreadyFavorite) {
            dispatch(addToFavorite(item));
            toast.success('Added To Favorite!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });
        }
    }


    useEffect(() => {
        const favorite = favoriteItems.find(favorite => favorite.id === id);
        if (favorite) {
            setFavoriteIcon(favorite.id);

        } else {
            setFavoriteIcon(null);
        }
    }, [favoriteItems, id]);



    useEffect(() => {
        cart.find((el) => {
            if (el.id === id) {
                setInCart(el.id);
                return;
            }
        })
    }, [cart, id])


    return (s
        < div > { modalOpen && (
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
                        <button className="flex flex-row items-center gap-1 px-4 py-2 bg-green-400 text-white font-bold rounded-xl hover:text-green-900 hover:underline hover:bg-transparent " onClick={() => {
                            if (favoriteIcon) {
                                navigate('/favorites')
                            } else {
                                addItemToFavorites(item)
                            }
                        }} >{favoriteIcon ? 'View Favorites' : 'Add To Favorites'}{favoriteIcon === id ? <FaRegHeart size={20} color="red" /> : <FaRegHeart size={20} color="green" />}</button>
                        <button className="flex flex-row items-center gap-1 px-6 py-3 bg-green-400 text-white font-bold rounded-xl hover:text-green-900 hover:underline hover:bg-transparent " onClick={() => {
                            if (inCart) {
                                navigate('/cart');
                            } else {
                                addItemToCart(item);
                            }
                        }} >{inCart ? 'View Cart' : 'Add To Cart'}{inCart === id ? <MdOutlineShoppingCart size={20} color="red" /> : <MdOutlineShoppingCart size={20} color="green" />}</button>
                    </div>
                </div>
            </div>)
        }</ >
    )
}

export default Modal;