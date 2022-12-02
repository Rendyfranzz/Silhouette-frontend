import React from 'react'
import ImageHome from '../components/ImageHome'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useDispatch } from "react-redux"
import { getMe } from '../feature/authSlice';
import { useEffect } from 'react';
import home from "../image/home.webp"
import AnimatedPage from '../components/AnimatedPage'

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMe())
  }, [dispatch])
  return (
    <AnimatedPage>
      <><Navbar />
        <div className='min-h-screen overflow-hidden space-y-4'>
          <div className='md:mt-20 mt-10 h-1/2 flex justify-center items-center overflow-hidden px-10'>
            <img className='contrast-50 w-96 md:w-full hover:scale-105 hover:contrast-100 transition ease-in-out duration-500' src={home} alt='home' />
          </div>
          <div><ImageHome /></div>
        </div>
        <Footer />
      </>
    </AnimatedPage>
  )
}

export default Home