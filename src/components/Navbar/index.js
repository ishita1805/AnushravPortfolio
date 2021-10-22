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
                <p>ABOUT</p>
                <p>WORK</p>
                <p>CONTACT</p>
                <p>RESUME</p>
                
            </div>
        </div>
    )
}

export default Navbar
