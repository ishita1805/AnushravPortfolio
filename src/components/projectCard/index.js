import React from 'react'
import './style.css'

const Card = ({title,url,content,img,...props}) => {
    return (
        <div className='card'>
            <h2>Landing Page</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Sed fermentum lacinia facilisis 
                dolor. Pharetra, fringilla aliquam morbi odio lorem risus.......
            </p>
            <a href={url} target="__blank">View Project</a>
        </div>
    )
}

export default Card
