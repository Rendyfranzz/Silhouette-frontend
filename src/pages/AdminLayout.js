import React from 'react'
import Sidebar from '../components/Sidebar'
const AdminLayout = ({children}) => {
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