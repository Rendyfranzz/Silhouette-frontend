import React from 'react'
import { NavLink } from 'react-router-dom'
import {FaUserCircle} from 'react-icons/fa'
import logo from '../image/logo.jpg'
const Navbar = () => {
  return (
    
    <nav className=' font-popin text-[20px] flex justify-between p-2'>
        <div><img className='absolute top-0 w-32' src={logo} alt="logo"/></div>
        <div className=''>
            <ul className='flex flex-row justify-center items-center space-x-6'>
                <l1>
                    <NavLink to='/Home' className={({ isActive }) => isActive ? "text-cyan-500" : ""}>Home</NavLink>
                </l1>
                <l1>
                    <NavLink to='/About' className={({ isActive }) => isActive ? "text-cyan-500" : ""}>About</NavLink>
                </l1>
                <l1>
                    <NavLink to='/PriceList' className={({ isActive }) => isActive ? "text-cyan-500" : ""}>Price List</NavLink>
                </l1>
                <l1>
                    <NavLink to='/BookOnline' className={({ isActive }) => isActive ? "text-cyan-500" : ""}>Book Online</NavLink>
                </l1>
                <l1 className="flex flex-row space-x-1">
                <FaUserCircle size={20}/>
                    <NavLink to='/'>Login</NavLink>
                </l1>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar