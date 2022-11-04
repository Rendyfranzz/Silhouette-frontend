
import { FaRegSmile, FaCheckCircle, FaRegImage, FaRegTimesCircle } from "react-icons/fa"
import CardAbout from '../components/CardAbout'
const About = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center font-popin'>
      <div>
        <h1 className='text-title font-bold'>About</h1>
        <p> lorem</p>
      </div>

      <div className='w-screen h-48 bg-black p-2 overflow-hidden'>
        <h1 className=' text-lg md:text-title text-white text-center font-bold'>WHY BOOK WITH US?</h1>
        <div className='text-xs md:text-sm flex flex-row justify-center items-center space-x-6 p-4'>
          <CardAbout><FaRegSmile size={60} /><p>No Deposit!</p></CardAbout>
          <CardAbout><FaCheckCircle size={60} />Quality Approved!</CardAbout>
          <CardAbout><FaRegTimesCircle size={60} />No Cancellation Penalty!</CardAbout>
          <CardAbout><FaRegImage size={60} />A Variety of Concepts!</CardAbout>
        </div>
      </div>

      <div className='w-screen h-48 flex flex-col md:flex-row justify-evenly items-center overflow-hidden'>
        <h1 className=' text-lg md:text-title text-black text-center font-bold'>Jam Operasional</h1>
        <div className='flex flex-row justify-center items-center space-x-6'>
          <table className='border-separate border-spacing-2 border-spacing-x-8 text-sm md:text-lg'>
            <tr>
              <td>Sabtu-Rabu</td>
              <td>10.00-20.00</td>
            </tr>
            <tr>
              <td>Kamis</td>
              <td>10.00-15.00</td>
            </tr>
            <tr>
              <td>Jumat</td>
              <td>Tutup</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}

export default About