import React, { useContext } from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/cartContext';


const Header = () => {
    const {cart}  = useContext(CartContext);
    const cartHasItems = cart.length > 0 ;

  return (
    <header className='h-16 flex justify-between items-center sm:text-2xl text-lg font-bold shadow-xl px-4 sm:px-10 bg-white bg-opacity-75 cursor-pointer '>
        <section>
            <Link to={'/'}>E-COM</Link>
        </section>
        <section className='flex items-center sm:gap-10 gap-4'>
            <Link to={'/products'}><p>Products</p></Link>
            <Link to={'/cart'} className='relative'>
                <FaShoppingCart/>
                {
                    cartHasItems && (
                        <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"></span>
                    )
                }
            </Link>
            <FaRegUserCircle/>
        </section>
    </header>
  )
}

export default Header