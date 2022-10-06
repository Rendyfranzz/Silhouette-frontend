import { FaInstagram } from "react-icons/fa"

const Footer = () => {
  return (
    <div className='w-screen flex flex-row justify-between overflow-x-hidden px-8 py-4 text-title font-popin'>
        <div>
        <p>&copy;2022 Silhouette Studio</p>
        </div>
        <div className="flex flex-row space-x-1">
            <p>Follow us on Instagram</p>
            <a href="https://instagram.com/silhouette.studioss?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer"><FaInstagram size={30}/></a>
   
        </div>
    </div>
  )
}

export default Footer