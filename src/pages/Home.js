import React from 'react'
import ImageHome from '../components/ImageHome'
import Navbar from '../components/Navbar'
import { useDispatch } from "react-redux"
import { getMe } from '../feature/authSlice';
import { useEffect } from 'react';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getMe()) 
  },[dispatch])
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