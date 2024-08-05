import React, { useContext } from 'react'
import ProductCard from '../components/ProductCard'
import products from '../assets/productData'
import { CartContext } from '../contexts/cartContext'

const ProductPage = () => {
  const {addToCart} = useContext(CartContext)
  return (
    <div  className="p-8">
      <h1 className="text-4xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {
          products.map((product) => {
            return(
              <ProductCard product={product} key={product.id} addToCart={addToCart}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default ProductPage