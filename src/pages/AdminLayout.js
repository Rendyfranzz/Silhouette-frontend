import React, { useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import { useDispatch,useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { getMe } from '../feature/authSlice'
const AdminLayout = ({children}) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {isError}= useSelector((state)=> state.auth)

  useEffect(()=>{
    dispatch(getMe());
  },[dispatch])

  useEffect(()=>{
    if (isError){
      navigate("/login")
    }
  },[isError,navigate])

  return (
    <>
    <div className='flex flex-row'>
    <Sidebar/>
    <div>
        {children}
    </div>
    </div>

    </>
  )
}

export default AdminLayout