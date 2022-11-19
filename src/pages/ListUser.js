import React, { useEffect } from 'react'
import AdminLayout from './AdminLayout'
import { useDispatch,useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { getMe } from '../feature/authSlice'

const ListUser = () => {
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
    <AdminLayout>
        List user ngab
    </AdminLayout>
  )
}

export default ListUser