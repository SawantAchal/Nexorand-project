import React from 'react'
import bg from '../assets/bg2.jpg'
import Header from '../components/Header'
import ProductPage from './ProductPage'

const HomePage = () => {
  return (
    <div>
      <main style={{backgroundImage : `url(${bg})`}} className='bg-cover bg-center min-h-screen'>
        <Header/>
      </main>
      <ProductPage/>
    </div>
  )
}

export default HomePage