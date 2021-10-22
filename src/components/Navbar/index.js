import React,{ useState } from 'react'
import './style.css'
import { NavLink, Redirect } from 'react-router-dom'
import icon from '../../assets/anush.jfif'
import * as Scroll from 'react-scroll';

const Navbar = () => {
    const [red, setRed] = useState(false);
    const [redPath, setRedPath] = useState('');

    var scroller = Scroll.scroller;

    const scrollToElem = (item) => {
        if(window.location.pathname === '/work') {
            setRedPath(item);
            setRed(true);
        }
        scroller.scrollTo(item, {
            duration: 1500,
            smooth: true,
            offset: 0
        })
    }

    return (
        <div className='nav'>
            {red?<Redirect to={redPath} exact />:null}
            <NavLink className='inner-nav' to='/'>
                <img src={icon} alt='profile' />
                <p id='hide-nav'>Anushrav Singhal</p>

            </NavLink>

            <div className='inner-nav' >
                <p className='inner-nav-item' onClick={()=>scrollToElem('about')}>About</p>
                <p className='inner-nav-item'><NavLink className='navlink' to="/work">Work</NavLink></p>
                <p className='inner-nav-item'  onClick={()=>scrollToElem('contact')}>Contact</p>
                <a className='inner-nav-item' href="https://drive.google.com/file/d/1FwgiPDwFrlDkSPc1wR9_cxoO__6xLzLt/view?usp=sharing" target="__blank"><p>Resume</p></a>

            </div>
        </div>
    )
}

export default Navbar
