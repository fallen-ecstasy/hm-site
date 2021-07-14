import React from 'react';
import './styles/contact.css';
import {InlineIcon} from '@iconify/react';
import linkedinFill from '@iconify-icons/akar-icons/linkedin-fill';
import whatsappFill from '@iconify-icons/akar-icons/whatsapp-fill';
import mail48Regular from '@iconify-icons/fluent/mail-48-regular';

function Contact(prop) {

    const linkedIn = () =>{
        window.location.href="https://www.linkedin.com/in/harsh-misra-295909202/";
    }
    const mail = () =>{
        window.location.href="mailto:harsh.misra1101@gmail.com";
    }
    const wa = () =>{
        window.location.href="https://wa.me/8840522368?text=Hello%2C+Harsh";
    }

    if(prop.view==="Mobile"){
        return (
            <div className="Contact-m">
                <div className="Heading-mobile"><h1>04.</h1><h2>Contact</h2><hr /></div>
                <div className="contact-body-m">
                    <h5>Get in Touch</h5>
                    <p>
                    Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
    
                    <button onClick={linkedIn}><InlineIcon icon={linkedinFill} /> Connect on LinkedIn</button>
                    <button onClick={wa}><InlineIcon icon={whatsappFill}/> Say Hello on WhatsApp</button>
                    <button onClick={mail}><InlineIcon icon={mail48Regular} /> Ping me on Mail</button>
                </div>
            </div>
        )
    }else{
        return (
        <div className="Contact">
            <div className="Heading"><h1>04.</h1><h2>Contact</h2><hr /></div>
            <div className="contact-body">
                <h5>Get in Touch</h5>
                <p>
                Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <button onClick={linkedIn}><InlineIcon icon={linkedinFill} /> Connect on LinkedIn</button>
                <button onClick={wa}><InlineIcon icon={whatsappFill}/> Say Hello on WhatsApp</button>
                <button onClick={mail}><InlineIcon icon={mail48Regular} /> Ping me on Mail</button>
            </div>
        </div>
    )
    }
}

export default Contact
