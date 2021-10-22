import React from 'react'
import './style.css'

const Illustration = ({img, title, ...props}) => {
    return (
       <img src={img} alt={title} className='illustration-card'/>
    )
}

export default Illustration
