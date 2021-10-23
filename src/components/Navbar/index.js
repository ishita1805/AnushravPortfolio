import React,{ useState } from 'react'
import './style.css'
import { NavLink, Redirect } from 'react-router-dom'
import icon from '../../assets/anush.webp'
import nav from '../../assets/menu.png'
import close from '../../assets/close.png'
import * as Scroll from 'react-scroll';
import be from '../../assets/behance.webp'
import db from '../../assets/dribbble.webp'
import ins from '../../assets/instagram.webp'
import li from '../../assets/linkedin.webp'

const Navbar = () => {
    const [red, setRed] = useState(false);
    const [redPath, setRedPath] = useState('');
    const [menu, setMenu] = useState(false);

    var scroller = Scroll.scroller;

    const scrollToElem = (item) => {
        setMenu(()=>false)
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

    if(!menu) return (
        <div className='nav'>
            {red?<Redirect to={redPath} exact />:null}
            <NavLink className='inner-nav' to='/'>
                <img src={icon} className='nav-dp' alt='profile' />
                <p id='hide-nav'>Anushrav Singhal</p>

            </NavLink>

            <div className='inner-nav' >
                <p className='inner-nav-item' onClick={()=>scrollToElem('about')}>About</p>
                <p className='inner-nav-item'><NavLink className='navlink' to="/work">Work</NavLink></p>
                <a className='inner-nav-item' href="https://anushravsinghal.medium.com/" target="__blank"><p>Blogs</p></a>
                <p className='inner-nav-item'  onClick={()=>scrollToElem('contact')}>Contact</p>
                <a className='inner-nav-item' href="https://drive.google.com/file/d/1FwgiPDwFrlDkSPc1wR9_cxoO__6xLzLt/view?usp=sharing" target="__blank"><p>Resume</p></a>
            </div>
            <div className='nav-small' onClick={()=>setMenu(()=>!menu)}>
                <img src={nav} alt='nav'/>
            </div>
        </div>
        )
        else return (
            <div className='dropdown'>
                <img class='close-dpd' src={close} alt='close' onClick={()=>setMenu(()=>!menu)}/>
                <img src={icon} className='small-nav-dp' alt='profile' />
                <h3>Anushrav Singhal</h3>
                <p className='small-nav-item' onClick={()=>scrollToElem('about')}>About</p>
                <p className='small-nav-item'><NavLink className='navlink' to="/work">Work</NavLink></p>
                <a className='small-nav-item' href="https://anushravsinghal.medium.com/" target="__blank"><p>Blogs</p></a>
                <p className='small-nav-item'  onClick={()=>scrollToElem('contact')}>Contact</p>
                <a className='small-nav-item' href="https://drive.google.com/file/d/1FwgiPDwFrlDkSPc1wR9_cxoO__6xLzLt/view?usp=sharing" target="__blank"><p>Resume</p></a>
                <div className='nav-icons'>
                    <a href="https://dribbble.com/AnushravSinghal" target="__blank"><img src={db} alt="dribbble"/></a>
                    <a href="https://www.behance.net/anushravsinghal" target="__blank"><img src={be} alt="behance"/></a>
                    <a href="https://www.instagram.com/anushravsinghal/" target="__blank"><img src={ins} alt="instagram"/></a>
                    <a href="https://www.linkedin.com/in/anushravsinghal/" target="__blank"><img src={li} alt="linkedin"/></a>
                
                </div>
                <p className='small-footer'>Made By Anushrav Singhal</p>
            </div>
        )
}

export default Navbar
