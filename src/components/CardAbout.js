import React from 'react'

const CardAbout = (props) => {
    const {children} = props
  return (
    <div className='w-36 h-32 bg-white flex flex-col justify-center items-center text-center rounded-md hover:scale-110 transition hover:-translate-y-1 duration-300'>{children}</div>
  )
}

export default CardAbout