import React from 'react'
import * as Scroll from 'react-scroll'
import './style.css'
import { content } from '../../data'

const About = () => {

    var Element  = Scroll.Element;

    return (
        <Element name="about">
        <div id='about' className='about'>
            <h1>{content.about.title}</h1>
            <p>{content.about.content}</p>
            <h3>{content.about.subtitle}</h3>
            <img id='about-tools' src={content.about.icons} alt='tools'/>
        </div>
        </Element>
    )
}

export default About
