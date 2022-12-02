import React from 'react'

const ImageCard = (props) => {
    const {children} = props
  return (
    <div className=' w-44 md:w-64 overflow-hidden rounded-sm'>{children}</div>
  )
}

export default ImageCard