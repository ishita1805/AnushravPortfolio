import React from 'react'
import './style.css'

const Card = ({title,url,content,img,...props}) => {

    let bgCss = {
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover'
    }
    
    return (
        <div className='card' style={bgCss}>
            <div className='card-inner'>
            <h2>{title}</h2>
            <p>
                {content}
            </p>
            <a href={url} target="__blank">View Project</a>
            </div>
        </div>
    )
}

export default Card
