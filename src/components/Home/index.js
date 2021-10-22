import React,{ useEffect } from 'react'
import './style.css'
import arrow from '../../assets/next.png'
import be from '../../assets/behance.png'
import db from '../../assets/dribbble.png'
import ins from '../../assets/instagram.png'
import li from '../../assets/linkedin.png'
import { NavLink } from 'react-router-dom'
import * as Scroll from 'react-scroll';

const Home = () => {

    var scroller = Scroll.scroller;

    const scrollElem = (item) =>{
        scroller.scrollTo(item, {
            duration: 1500,
            smooth: true,
            offset: 0
          })
    }
    
    useEffect(() => {
        let path = window.location.pathname.replace("/","");
        scroller.scrollTo(path, {
            duration: 1500,
            smooth: true,
            offset: 0
          })
    }, [scroller])

    return (
        <div className='home'>
            <div className='home-content'>
                <div className='home-center'>
                    <h1>
                        I’m a <span id='purple'>UX/UI</span> 
                        <br/>
                        & <span id='purple'>Product</span> Designer
                    </h1>
                    <p id='subtitle'>Building meaningful user experiences one product at a time</p>
                    <div className='buttons'>
                        <NavLink className='button-link' to='/work'><button id='cta'>My Work</button></NavLink>
                        <button id='cta2' onClick={()=>scrollElem('contact')}>Let's Chat</button>
                    </div>
                </div>
                <div className='icons'>
                    <a href="https://dribbble.com/AnushravSinghal" target="__blank"><img src={db} alt="dribbble"/></a>
                    <a href="https://www.behance.net/anushravsinghal" target="__blank"><img src={be} alt="behance"/></a>
                    <a href="https://www.instagram.com/anushravsinghal/" target="__blank"><img src={ins} alt="instagram"/></a>
                    <a href="https://www.linkedin.com/in/anushravsinghal/" target="__blank"><img src={li} alt="linkedin"/></a>
                
                </div>
            </div>
            
            <div id='down' onClick={()=>scrollElem('about')}>
                <img src={arrow} alt='arrow'/>
            </div>

        </div>
    )
}

export default Home
