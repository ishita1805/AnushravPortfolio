import React from 'react'
import './style.css'
import { NavLink } from 'react-router-dom'
import icon from '../../assets/anush.jfif'

const Navbar = () => {
    return (
        <div className='nav'>
            <div className='inner-nav'>
                <img src={icon} alt='profile'/>
                <p id='hide-nav'>Anushrav Singhal</p>
            </div>
            <div className='inner-nav'>
                <NavLink className='inner-nav-item' to="/"><p>About</p></NavLink>
                <NavLink className='inner-nav-item'  to="/work"><p>Work</p></NavLink>
                <NavLink className='inner-nav-item'  to="/"><p>Contact</p></NavLink>
                <a className='inner-nav-item'  href="https://drive.google.com/file/d/1FwgiPDwFrlDkSPc1wR9_cxoO__6xLzLt/view?usp=sharing" target="__blank"><p>Resume</p></a>        
            </div>
        </div>
    )
}

export default Navbar
