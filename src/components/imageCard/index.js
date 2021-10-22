import React from 'react'
import './style.css'

const ImageCard = ({img, title, url, ...props}) => {

    let cssBG = {
        backgroundImage: `url(${img})`,
        backgroundSize: '100%',
    }

    return (
        <a href={url} target="__blank">
        <div className='img-card' style={cssBG}>
            <div className='img-card-in'>
                <p>{title}</p>
            </div>
        </div>
        </a>
    )
}

export default ImageCard
