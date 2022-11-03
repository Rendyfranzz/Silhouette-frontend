import React from 'react'

const TimeButton = (props) => {
    const {children} = props;
    return (
        <button type='button' {...props} value={children} className="w-14 md:w-32 border-solids border-2 border-black rounded-sm">{children}</button>
    )
}

export default TimeButton