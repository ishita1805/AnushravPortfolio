import React from 'react'
import './style.css'

const ImageCard = ({img, ...props}) => {
    return (
        <img src={img} class='image-card' alt='work'/>
    )
}

export default ImageCard
