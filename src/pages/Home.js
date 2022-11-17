import React from 'react'
import ImageHome from '../components/ImageHome'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <><Navbar/>
    <div className='h-screen overflow-hidden'>
      <div className='h-1/2'></div>
      <ImageHome/>
    </div>
    </>
  )
}

export default Home