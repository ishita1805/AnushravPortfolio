import React from 'react'
import * as Scroll from 'react-scroll'
import './style.css'
import { content } from '../../data'

const Contact = () => {

    var Element  = Scroll.Element;

    return (
        <Element name="contact">
        <div id='contact' className='contact'>
            <h1>{content.contact.title}</h1>
            <p>
                {content.contact.subtitle}<br/>{content.contact.content}
            </p>
            <a href={content.contact.cta.link}>{content.contact.cta.label}</a>
            <p id='footer'>{content.contact.footer}</p>
            
            <img src={content.contact.icon} alt='contact'/>
        </div>
        </Element>
    )
}

export default Contact
