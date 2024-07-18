import { Link } from 'react-router-dom';
import image from '../assets/image.jpg';
import Sidebar from './Sidebar';

//icons
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

import { useState } from 'react';



function Header() {
    const [isActive, setIsActive] = useState(false);

    function toggleSidebar() {
        setIsActive(!isActive);

    }
    return (
        <div className="container mx-auto flex-col items-center md:shadow-2xl md:flex md:justify-between md:flex-row md:bg-green-300 md:h-0 lg:w-10/12 lg:h-28">
            <div className=" flex flex-row justify-center items-center">
                <img src={image} alt="aaa" className="w-28 h-28 " />
                <h2 className="font-bold text-5xl ml-4 text-green-500">GreenGo</h2>
            </div>
            <div className='flex justify-center md:flex flex-wrap text-base py-3 lg:mr-10'>
                <ul className='flex flex-row gap-5 font-bold text-green-800 text-xl'>
                    <Link to={'/'} className=' hover:text-orange-300 focus:underline focus:decoration-orange-400 transition-all '>Home</Link>
                    <Link to={'/shop'} className=' hover:text-orange-300 focus:underline focus:decoration-orange-400 transition-all '>Shop</Link>
                    <Link to={'/blog'} className=' hover:text-orange-300 focus:underline focus:decoration-orange-400  transition-all '>Blog</Link>
                    <Link to={'/about'} className=' hover:text-orange-300 focus:underline focus:decoration-orange-400 transition-all '>About Us</Link>
                    <Link to={'/contact'} className=' hover:text-orange-300 focus:underline focus:decoration-orange-400 transition-all '>Contact Us</Link>
                </ul>
            </div>
            <div className='flex gap-5 mr-5 justify-center'>
                <Link>
                    <FaRegHeart size={28} color='green' />
                </Link>

                <Link>
                    <FaRegUser size={28} color='green' />
                </Link>

                <Link>
                    <MdOutlineShoppingCart size={28} color='green' onClick={toggleSidebar} />
                </Link>
            </div>
            <div>
                <Sidebar isActive={isActive} closedSidebar={toggleSidebar} />
            </div>
        </div>
    )
}

export default Header;