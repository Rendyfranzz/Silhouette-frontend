
import { FaRegSmile, FaCheckCircle, FaRegImage, FaRegTimesCircle } from "react-icons/fa"
import CardAbout from '../components/CardAbout'
import Map from "../components/Map"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useDispatch } from "react-redux"
import { getMe } from '../feature/authSlice';
import { useEffect } from 'react';
import AnimatedPage from "../components/AnimatedPage"
const About = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMe())
  }, [dispatch])
  return (
    <AnimatedPage>
      <><Navbar />

        <div className='min-h-screen flex flex-col justify-center items-center text-black'>
          <div className="w-screen h-48 flex flex-col items-center justify-center p-2 overflow-hidden">
            <h1 className='font-bold'>About</h1>
            <p className="p"> lorem</p>
          </div>

          <div className='w-screen h-48 bg-black p-2 overflow-hidden'>
            <h1 className=' text-white text-center font-bold'>WHY BOOK WITH US?</h1>
            <div className='flex flex-row justify-center items-center space-x-6 p-4'>
              <CardAbout><FaRegSmile size={60} /><p className="p text-black">No Deposit!</p></CardAbout>
              <CardAbout><FaCheckCircle size={60} /><p className="p text-black">Quality Approved!</p></CardAbout>
              <CardAbout><FaRegTimesCircle size={60} /><p className="p text-black">No Cancellation Penalty!</p></CardAbout>
              <CardAbout><FaRegImage size={60} /><p className="p text-black">A Variety of Concepts!</p></CardAbout>
            </div>
          </div>

          <div className='w-screen h-48 flex flex-col md:flex-row justify-evenly items-center overflow-hidden'>
            <h1 className='text-black text-center font-bold'>Jam Operasional</h1>
            <div className='flex flex-row justify-center items-center space-x-6'>
              <table className='border-separate border-spacing-2 border-spacing-x-8'>
                <tbody>
                  <tr>
                    <td>Setiap Hari</td>
                    <td>10.00-20.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="w-screen flex justify-center items-center flex-col space-y-4 h-96 p-2">
            <p className='h1 text-center font-bold'>Lokasi</p>
            <Map />
          </div>
        </div>
        <Footer />
      </>
    </AnimatedPage>
  )
}

export default About