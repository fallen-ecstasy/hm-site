import React from 'react';
import './styles/About.css';
import photo from './media/pic2.jpg';

function About(prop) {
    if(prop.view==="Mobile"){
        return(
            <div className="About-mobile">
            <div className="Heading-mobile"><h1>01.</h1><h2>About</h2><hr /></div>
            <div className="body-m">
                
            <div className="intro-m">
            <p>Hello! My name is Harsh and I enjoy creating things that live on the internet. My interest in web development started back in 2018 when I decided to try editing custom Wordpress themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
            </p>
            <p>Fast-forward to today, and I've had the privilege of working as a freelancer, an intern in a start-up, and in a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.
            </p>
            <div className="Skills-m">
            <ul>
                <li><h5>></h5>JavaScript (ES6+)</li>
                <li><h5>></h5>React</li>
                <li><h5>></h5>Node JS</li>
                </ul>
                <ul>
                <li><h5>></h5>Express</li>
                <li><h5>></h5>Wordpress</li>
                <li><h5>></h5>DBMS (MongoDB, PostgreSQL)</li>
            </ul>
            </div>
            </div>
            <div className="Photo-m">
             <img src={photo} /><div></div>
                </div>
            </div>
        </div>
        )
    }else{
        return (
        <div className="About">
            <div className="Heading"><h1>01.</h1><h2>About</h2><hr /></div>
            <div className="body">
                
            <div className="intro">
            <p>Hello! My name is Harsh and I enjoy creating things that live on the internet. My interest in web development started back in 2018 when I decided to try editing custom Wordpress themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
            </p>
            <p>Fast-forward to today, and I've had the privilege of working as a freelancer, an intern in a start-up, and in a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.
            </p>
            <div className="Skills">
            <ul>
                <li><h5>></h5>JavaScript (ES6+)</li>
                <li><h5>></h5>React</li>
                <li><h5>></h5>Node JS</li>
                </ul>
                <ul>
                <li><h5>></h5>Express</li>
                <li><h5>></h5>Wordpress</li>
                <li><h5>></h5>DBMS (MongoDB, PostgreSQL)</li>
            </ul>
            </div>
            </div>
            <div className="Photo">
             <img src={photo} /><div></div>
                </div>
            </div>
        </div>
    )
    }
}

export default About
