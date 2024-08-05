import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";


const Header = () => {
  return (
    <header className='h-16 flex justify-between items-center sm:text-2xl text-lg font-bold shadow-xl px-4 sm:px-10 bg-white bg-opacity-75 cursor-pointer '>
        <section>
            <h1>E-COM</h1>
        </section>
        <section className='flex items-center sm:gap-10 gap-4'>
            <p>Products</p>
            <FaShoppingCart/>
            <FaRegUserCircle/>
        </section>
    </header>
  )
}

export default Header