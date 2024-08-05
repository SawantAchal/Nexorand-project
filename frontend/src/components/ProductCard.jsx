import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../contexts/cartContext';

const ProductCard = ({ product }) => {
  const { cart, addToCart } = useContext(CartContext);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    // Check if the product is in the cart
    const productInCart = cart.some(cartItem => cartItem.id === product.id);
    setIsAdded(productInCart);
  }, [cart, product.id]);

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);
  };

  return (
    <main className="border rounded-lg shadow-lg overflow-hidden">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover"/>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{product.name}</h2>
        <p className="text-gray-700 mb-4">Rs. {product.price}</p>
        <button  onClick={handleAddToCart}  disabled={isAdded}  className={`px-4 py-2 rounded ${isAdded ? 'bg-gray-500' : 'bg-[#7A4988] text-white hover:bg-[#6a2d7a]'}`}>
          {isAdded ? 'Added to Cart' : 'Add to Cart'}
        </button>
      </div>
    </main>
  );
};

export default ProductCard;
