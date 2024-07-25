import { Link } from 'react-router-dom';
import image from '../assets/image.jpg';
import Sidebar from './Sidebar';

//icons
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

import { useState } from 'react';
import { useSelector } from 'react-redux';



function Header() {
    const [isActive, setIsActive] = useState(false);
    const { totalProduct } = useSelector(state => state.cartStore);
    const { favoriteTotal } = useSelector((state) => state.favoriteStore);

    function toggleSidebar() {
        setIsActive(!isActive);

    }
    return (
        <div className="container mx-auto items-center md:shadow-2xl lg:flex lg:justify-between md:bg-green-300 md:h-40 lg:w-10/12 lg:h-28">
            <div className="flex flex-row  justify-center items-center">
                <img src={image} alt="aaa" className="w-28 h-28 " />
                <Link to={'/'}><h2 className="font-bold text-5xl ml-4 text-green-500">GreenGo</h2></Link>
            </div>
            <div className='flex justify-center md:flex flex-wrap text-base py-3 lg:ml-6'>
                <ul className='flex flex-row gap-5 font-bold text-green-800 text-xl'>
                    <Link to={'/'} className=' hover:text-orange-300 focus:underline focus:decoration-orange-400 transition-all '>Home</Link>
                    <Link to={'/shop'} className=' hover:text-orange-300 focus:underline focus:decoration-orange-400 transition-all '>Shop</Link>
                    <Link to={'/blog'} className=' hover:text-orange-300 focus:underline focus:decoration-orange-400  transition-all '>Blog</Link>
                    <Link to={'/about'} className=' hover:text-orange-300 focus:underline focus:decoration-orange-400 transition-all '>About Us</Link>
                    <Link to={'/contact'} className=' hover:text-orange-300 focus:underline focus:decoration-orange-400 transition-all '>Contact Us</Link>
                </ul>
            </div>
            <div className='flex gap-5 mr-5 justify-center mt-5 md:mt-0'>
                <Link>
                    <FaRegUser size={28} color='green' />
                </Link>
                <Link to={'favorites'}>
                    <FaRegHeart size={28} color='green' />
                    <div className='relative'>
                        <span className='absolute left-5 bottom-6 flex items-center justify-center px-2 py-1 rounded-2xl bg-yellow-400 text-white font-bold'>{favoriteTotal}</span>
                    </div>
                </Link>
                <Link to={'/cart'}>
                    <MdOutlineShoppingCart size={28} color='green' onClick={toggleSidebar} />
                    <div className='relative'>
                        <span className='absolute left-5 bottom-6 flex items-center justify-center px-2 py-1 rounded-2xl bg-yellow-400 text-white font-bold'>{totalProduct}</span>
                    </div>
                </Link>
            </div >
            <div>
                <Sidebar isActive={isActive} closedSidebar={toggleSidebar} />
            </div>
        </div >
    )
}

export default Header;