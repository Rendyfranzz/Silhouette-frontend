import React from 'react'

const TimeButton = (props) => {
    const {children} = props;
    return (
        <button type='button' {...props}>{children}</button>
    )
}

export default TimeButton