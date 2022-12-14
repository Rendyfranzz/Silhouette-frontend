import { NavSide } from './NavSide'
import { FaHome, FaUser, FaShoppingCart, FaSignOutAlt, FaCalendarAlt } from 'react-icons/fa'
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { logOut, reset } from "../feature/authSlice"

const Sidebar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const out = () => {
        dispatch(logOut());
        dispatch(reset());
        navigate("/home")
    }
    return (
        <div className="min-h-screen flex flex-row bg-gray-100">
            <div className="flex flex-col w-56 bg-white rounded-r-3xl overflow-hidden">
                <div className="flex items-center justify-center h-24 shadow-md">
                    <h1 className="text-2xl uppercase text-indigo-500">Sillhouette</h1>
                </div>
                <div className='flex flex-col justify-between h-full'>
                    <ul className="flex flex-col py-4">
                        <li>
                            <NavSide to="/admin">
                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><FaHome /></span>
                                <span className="text-sm font-medium">Dashboard</span>
                            </NavSide>
                        </li>
                        <li>
                            <NavSide to="/listuser">
                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><FaUser /></span>
                                <span className="text-sm font-medium">Users</span>
                            </NavSide>
                        </li>
                        <li>
                            <NavSide to="/listorder">
                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><FaShoppingCart /></span>
                                <span className="text-sm font-medium">Orders</span>
                            </NavSide>
                        </li>
                        <li>
                            <NavSide to="/listtime">
                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><FaCalendarAlt /></span>
                                <span className="text-sm font-medium">Time</span>
                            </NavSide>
                        </li>
                    </ul>

                    <div className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><FaSignOutAlt /></span>
                        <button onClick={out} className="text-sm font-medium">Log out</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar