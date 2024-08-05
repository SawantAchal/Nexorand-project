import React from 'react'
import ProductCard from '../components/ProductCard'
import products from '../assets/productData'

const ProductPage = () => {
  return (
    <div  className="p-8">
      <h1 className="text-4xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {
          products.map((product) => {
            return(
              <ProductCard product={product} key={product.id}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default ProductPage