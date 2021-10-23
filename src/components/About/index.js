import React from 'react'
import * as Scroll from 'react-scroll'
import './style.css'
import icons from '../../assets/icons.webp'

const About = () => {

    var Element  = Scroll.Element;


    return (
        <Element name="about">
        <div id='about' className='about'>
            <h1>About Me</h1>
            <p>
                I am Anushrav, a final-year undergrad at VIT University, Vellore. I'm have been entrusted with the position 
                of VP Design at C4Projects (a tech solutions start-up) for 2 years now. <br/>
                I have worked as a design intern for Humourbaba, an e-commerce platform based in Vellore. 
                I have a fresh take on design concepts and can deliver good quality content within deadlines.
            </p>
            <h3>Tools I Use</h3>
            <img id='about-tools' src={icons} alt='tools'/>
            {/* <h3>Companies I've worked with</h3>
            <div></div> */}
        </div>
        </Element>
    )
}

export default About
