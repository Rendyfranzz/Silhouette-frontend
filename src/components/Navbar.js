import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa'
import logo from '../image/logo.jpg'
import { useDispatch,useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { logOut,reset } from "../feature/authSlice"
const Navbar = (children) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {user}= useSelector((state)=> state.auth)

    const out =()=>{
        dispatch(logOut());
        dispatch(reset());
        navigate("/home")
    }
 
    return (
        <nav className='w-full md:w-screen font-popin text-[12px] md:text-[20px] flex justify-between py-2 md:py-2 px-8 overflow-x-hidden'>
            <div><img className='md:absolute top-0 w-14 md:w-32' src={logo} alt="logo" /></div>
            <div className=''>
                <ul className='flex flex-row justify-center items-center space-x-2 md:space-x-6'>
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
                        
                        { user ? <><p>{user.name}</p><button onClick={out}>logOut</button></>:<><FaUserCircle size={20} /> <NavLink to='/Login'>Login</NavLink></>   
                        }
                    </li>
                </ul>
            </div>
        </nav>
    )
  
}

export default Navbar