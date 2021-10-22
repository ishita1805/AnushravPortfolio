import React from 'react'
import './style.css'
import arrow from '../../assets/next.png'

const Home = () => {
    return (
        <div className='home'>
            <div className='home-content'>
                <h1>
                    I’m a <span id='purple'>UX/UI</span> 
                    <br/>
                    & <span id='purple'>Product</span> Designer
                </h1>
                <p id='subtitle'>Building meaningful user experiences one product at a time</p>
                <div className='buttons'>
                    <button id='cta'>MY WORK</button>
                    <button id='cta2'>LET'S CHAT</button>
                </div>
            </div>
            
            <div id='down'>
                <img src={arrow} alt='arrow'/>
            </div>

        </div>
    )
}

export default Home
