import React, { useState } from 'react'
import './style.css'
import uiux, { branding, illustrations} from '../../data'
import Card from '../projectCard'
import ImageCard from '../imageCard'
import Illustration from '../IllustrationCard'

const Work = () => {
    const [nav,setNav] = useState('uiux');
    
    return (
        <div className='work'>
            <div className='nav-work'>
                <p onClick={()=>setNav(()=>'uiux')} className={nav==='uiux'?'nav-selected':null}>UI/UX</p>
                <p onClick={()=>setNav(()=>'illustrations')} className={nav==='illustrations'?'nav-selected':null}>Illustrations</p>
                <p onClick={()=>setNav(()=>'branding')} className={nav==='branding'?'nav-selected':null}>Branding</p>
            </div>
            <div className='work-grid'>
                {
                    nav === 'uiux'?
                    uiux.map((item) => (
                        <Card
                        title={item.title}
                        content={item.content}
                        url={item.url}
                        img={item.img}/>
                    )):null
                }
                {
                    nav === 'illustrations'?
                    illustrations.map((item) => (
                        <Illustration
                        img={item.img}/>
                    )):null
                }
                {
                    nav === 'branding'?
                    branding.map((item) => (
                        <ImageCard
                        title={item.title}
                        img={item.img}
                        url={item.url}/>
                    )):null
                }
            </div>
        </div>
    )
}

export default Work
