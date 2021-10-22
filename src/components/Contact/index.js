import React from 'react'
import * as Scroll from 'react-scroll'
import './style.css'
import contact from '../../assets/contact.png'

const Contact = () => {

    var Element  = Scroll.Element;

    return (
        <Element name="contact">
        <div id='contact' className='contact'>
            <h1>Get in touch!</h1>
            <p>
                I'm looking for my next big project.
                <br/> 
                If you're a company or a fellow designer, I'd love to get in touch and collaborate :)
            </p>
            <a href="mailto:anushrav20@gmail.com">Let's Chat</a>
            <p id='footer'>2021 ⓒ Anushrav Singhal</p>
            
            <img src={contact} alt='contact'/>
        </div>
        </Element>
    )
}

export default Contact
