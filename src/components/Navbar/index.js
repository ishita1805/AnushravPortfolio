import React from 'react'
import './style.css'
import icon from '../../assets/anush.jpeg'

const Navbar = () => {
    return (
        <div className='nav'>
            <div className='inner-nav'>
                <img src={icon} alt='profile'/>
                <p id='hide-nav'>Anushrav Singhal</p>
            </div>
            <div className='inner-nav'>
                <p>About</p>
                <p>Work</p>
                <p>Contact</p>
                <p>Resume</p>
                
            </div>
        </div>
    )
}

export default Navbar
