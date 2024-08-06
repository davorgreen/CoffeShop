import { Link } from 'react-router-dom';
import image from '../assets/image.jpg';
import Sidebar from './Sidebar';

//icons
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

import { useState } from 'react';
import { useSelector } from 'react-redux';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';



function Header() {
    const [isActive, setIsActive] = useState(false);
    const { totalProduct } = useSelector(state => state.cartStore);
    const { favoriteTotal } = useSelector((state) => state.favoriteStore);
    const [hamburgerMenu, setHamburgerMenu] = useState(false);

    function toggleSidebar() {
        setIsActive(!isActive);
    }

    function toggleHamburgerMenu() {
        setHamburgerMenu(!hamburgerMenu);
    }

    return (
        <div className="container mx-auto md:shadow-2xl md:bg-green-300 items-center lg:w-10/12  lg:h-28 lg:flex lg:gap-5 lg:justify-between">
            <div className="flex flex-row  justify-center items-center">
                <img src={image} alt="aaa" className="w-28 h-28 " />
                <Link to={'/'}><h2 className="font-bold text-5xl ml-4 text-green-500">GreenGo</h2></Link>
            </div>
            <div className='md:hidden flex items-center justify-center'>
                <button onClick={toggleHamburgerMenu}>
                    {
                        hamburgerMenu ? <FaTimes size={30} /> : <GiHamburgerMenu size={50} />
                    }
                </button>
            </div>
            <div className='container mx-auto m-3 flex flex-col justify-center items-center border bg-green-300 rounded-xl w-1/3 h-full md:flex-row md:border-none md:items-center md:gap-6 md:w-full'>
                <div className={`flex justify-center md:flex flex-wrap text-base py-3 lg:ml-5 ${hamburgerMenu ? 'block' : 'hidden'}`}>
                    <ul className='flex flex-col items-center md:flex-row gap-5 font-bold text-green-800 text-xl'>
                        <Link to={'/'} className=' hover:text-orange-300 focus:underline focus:decoration-orange-400 transition-all '>Home</Link>
                        <Link to={'/shop'} className=' hover:text-orange-300 focus:underline focus:decoration-orange-400 transition-all '>Shop</Link>
                        <Link to={'/ourteam'} className=' hover:text-orange-300 focus:underline focus:decoration-orange-400  transition-all '>Our Team</Link>
                        <Link to={'/about'} className=' hover:text-orange-300 focus:underline focus:decoration-orange-400 transition-all '>About Us</Link>
                        <Link to={'/contact'} className=' hover:text-orange-300 focus:underline focus:decoration-orange-400 transition-all '>Contact Us</Link>
                    </ul>
                </div>
                <div className={`flex flex-col items-center  md:flex md:flex-row gap-6 mr-5 md:justify-center mt-5 lg:mt-0 ${hamburgerMenu ? 'block' : 'hidden'}`}>
                    <div className='flex flex-row hover:text-orange-300 focus:underline focus:decoration-orange-400 transition-all font-bold text-green-800 text-md'>
                        <FaRegUser size={28} color='green' />
                        <SignedOut>
                            <SignInButton />
                        </SignedOut>
                        <SignedIn>
                            <UserButton afterSwitchSessionUrl='/' />
                        </SignedIn>
                    </div>

                    <Link to={'favorites'}>
                        <FaRegHeart size={28} color='green' />
                        <div className='relative'>
                            <span className='absolute left-5 bottom-6 flex items-center justify-center px-2 py-1 rounded-2xl bg-yellow-400 text-white font-bold'>{favoriteTotal}</span>
                        </div>
                    </Link>
                    <Link>
                        <MdOutlineShoppingCart size={28} color='green' onClick={toggleSidebar} />
                        <div className='relative'>
                            <span className='absolute left-5 bottom-6 flex items-center justify-center px-2 py-1 rounded-2xl bg-yellow-400 text-white font-bold'>{totalProduct}</span>
                        </div>
                    </Link>
                </div >
            </div>
            <div>
                <Sidebar isActive={isActive} closedSidebar={toggleSidebar} />
            </div>
        </div >
    )
}

export default Header;