import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa'
import logo from '../image/logo.jpg'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { logOut, reset } from "../feature/authSlice"
import { Notify, SuccessNotification } from './Notify'
import { FaAlignJustify, FaRegTimesCircle } from "react-icons/fa"
const Navbar = (children) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth)
    const [open, setOpen] = useState(false)

    const out = () => {
        SuccessNotification("Berhasil Keluar")
        dispatch(logOut());
        dispatch(reset());
        navigate("/home")
    }

    return (
        <nav className='w-full md:w-screen text-[12px] md:text-[20px] flex flex-col justify-center md:justify-between pt-2 md:pt-8 px-8 overflow-x-hidden'>
            <div className='flex'><img className='hidden md:block md:absolute top-0 w-14 md:w-32' src={logo} alt="logo" />
            <h1 className='md:hidden block text-xl font-extrabold'>Silhouette</h1>
                <button className='block md:hidden ml-auto ' onClick={() => setOpen(!open)}>
                    {
                        open ? <FaRegTimesCircle className='' size={30} /> : <FaAlignJustify size={30} />
                    }
                </button>
            </div>
            <div className='flex justify-center md:justify-end'>
                <ul className={`text-black text-lg md:text-xl font-medium flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:justify-items-end md:items-end items-center space-x-2 md:space-x-6 transition-all duration-1000 md:flex ${open ? "" : "hidden"}`}>
                    <li>
                        <NavLink to='/home' className={({ isActive }) => isActive ? "text-cyan-500" : ""}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' className={({ isActive }) => isActive ? "text-cyan-500" : ""}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/priceList' className={({ isActive }) => isActive ? "text-cyan-500" : ""}>Price List</NavLink>
                    </li>
                    <li>
                        <NavLink to='/bookonline' className={({ isActive }) => isActive ? "text-cyan-500" : ""}>Book Online</NavLink>
                    </li>
                    <li className="flex flex-col md:flex-row text-center justify-center items-center space-x-1 space-y-2 md:space-y-0">

                        {user ? <><NavLink to={`/userdetail/${user.uuid}`} className={({ isActive }) => isActive ? "text-cyan-500" : ""}>{user.name}</NavLink> <button onClick={out}>logOut</button></> : <><FaUserCircle size={20} /> <NavLink to='/login'>Login</NavLink></>
                        }
                    </li>
                </ul>
                <Notify />
            </div>

        </nav>

    )

}

export default Navbar