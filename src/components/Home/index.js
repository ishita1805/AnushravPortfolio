import React,{ useEffect } from 'react'
import './style.css'
import arrow from '../../assets/next.webp'
import { content } from '../../data'
import { NavLink } from 'react-router-dom'
import * as Scroll from 'react-scroll';

const Home = (props) => {

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
        if(path === '') window.scrollTo(0,0);
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
                        {content.home.title.item1}
                         <span id='purple'>{content.home.title.item2}</span> 
                        <br/>
                        {content.home.title.item3}
                        <span id='purple'>{content.home.title.item4}</span>
                        {content.home.title.item5}
                    </h1>
                    <p id='subtitle'>{content.home.subtitle}</p>
                    <div className='buttons'>
                        <NavLink className='button-link' to={content.home.cta1.link}><button id='cta'>{content.home.cta1.label}</button></NavLink>
                        <button id='cta2' onClick={()=>scrollElem(content.home.cta2.link)}>{content.home.cta2.label}</button>
                    </div>
                </div>
                <div className='icons'>
                    {
                        content.home.icons.map((item) => (
                            <a href={item.url} target="__blank"><img src={item.icon} alt="dribbble"/></a>
                        ))
                    }
                    
                    
                
                </div>
            </div>
            
            <div id='down' onClick={()=>scrollElem('about')}>
                <img src={arrow} alt='arrow'/>
            </div>

        </div>
    )
}

export default Home
