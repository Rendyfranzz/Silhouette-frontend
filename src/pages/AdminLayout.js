import React, { useEffect } from 'react'
import AnimatedPage from '../components/AnimatedPage'
import Sidebar from '../components/Sidebar'

const AdminLayout = ({ children }) => {

  return (
    <AnimatedPage>
      <>
        <div className='flex flex-row relative'>
          <Sidebar />
          <div className='w-screen'>
            {children}
          </div>
        </div>

      </>
    </AnimatedPage>
  )
}

export default AdminLayout