import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa'
import logo from '../image/logo.jpg'
const Navbar = () => {
 
    return (
        <nav className=' font-popin text-[20px] flex justify-between p-2 overflow-x-hidden'>
            <div><img className='absolute top-0 w-32' src={logo} alt="logo" /></div>
            <div>
                <ul className='flex flex-row justify-center items-center space-x-6'>
                    <li>
                        <NavLink to='/Home' className={({ isActive }) => isActive ? "text-cyan-500" : ""}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/About' className={({ isActive }) => isActive ? "text-cyan-500" : ""}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/PriceList' className={({ isActive }) => isActive ? "text-cyan-500" : ""}>Price List</NavLink>
                    </li>
                    <li>
                        <NavLink to='/BookOnline' className={({ isActive }) => isActive ? "text-cyan-500" : ""}>Book Online</NavLink>
                    </li>
                    <li className="flex flex-row space-x-1">
                        <FaUserCircle size={20} />
                        <NavLink to='/Login'>Login</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
  
}

export default Navbar