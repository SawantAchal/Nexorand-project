import React, { useContext } from 'react'
import { CartContext } from '../contexts/cartContext'
import Header from '../components/Header'

const CartPage = () => {
  const {cart , removeFromCart } = useContext(CartContext)
  return (
    <div className="">
      <Header/>
    <h1 className="text-4xl font-bold mb-6 pt-20 text-center ">Cart</h1>
    {cart.length === 0 ? (
      <p className='text-center text-2xl'>Your cart is empty</p>
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-5">
        {cart.map(product => (
          <div key={product.id} className="border rounded-lg shadow-lg overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{product.name}</h2>
              <p className="text-gray-700 mb-4">${product.price}</p>
              <button
                onClick={() => removeFromCart(product.id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Remove from Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
  )
}

export default CartPage