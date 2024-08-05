import React from 'react'
import bg from '../assets/bg.jpg'
import Header from '../components/Header'

const HomePage = () => {
  return (
    <main style={{backgroundImage : `url(${bg})`}} className='bg-cover bg-center min-h-screen'>
        <Header/>
    </main>
  )
}

export default HomePage