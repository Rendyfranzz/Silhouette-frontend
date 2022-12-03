import { FaInstagram } from "react-icons/fa"

const Footer = () => {
  return (
    <div className='w-full md:w-screen flex flex-col md:flex-row justify-between overflow-hidden px-8 py-4 text-lg md:text-title font-popin text-black'>
        <div className="flex justify-center items-center">
        <p className="text-sm md:text-lg text-center">&copy;2022 Silhouette Studio</p>
        </div>
        <div className="flex flex-row justify-center items-center">
            <p className="text-sm md:text-lg text-center">Follow us on Instagram</p>
            <a className="" href="https://instagram.com/silhouette.studioss?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer"><FaInstagram size={30}/></a>
        </div>
    </div>
  )
}

export default Footer