/* eslint-disable jsx-a11y/alt-text */
import React, {useState} from 'react';
import './styles/Navbar.css';
import { InlineIcon } from '@iconify/react';
import list20Filled from '@iconify-icons/fluent/list-20-filled';
import crossIcon from '@iconify-icons/akar-icons/cross';

function Navbar(props) {

    // States
const [navbar, setNavbar] = useState(false);
const [linkActive, setLink] = useState(0);
const [slide, setslide] = useState(false);

// Background State Change Function
const backgroundChange = () => {
    if(window.scrollY >= 100){
        setNavbar(true);
    }else{
        setNavbar(false);
    }
    if(window.scrollY >= 800 && window.scrollY<1600){
        setLink(1);
    }else if(window.scrollY >= 1600 && window.scrollY<2400){
        setLink(2);
    }else if(window.scrollY>=2400 && window.scrollY<3200){
        setLink(3);
    }else if(window.scrollY>=3200){
        setLink(4);
    }else{
        setLink(0);
    }
}
window.addEventListener('scroll',backgroundChange);


// Scrolling functions
const scrollAbout = () =>{
    setslide(false);
        window.scrollTo({
            top:750,
            left:0,
            behavior:'smooth'
        });
}
const scrollServices = () =>{
    setslide(false);
    window.scrollTo({
        top:1600,
        left:0,
        behavior:'smooth'
    });
}
const scrollProjects = () =>{
    setslide(false);
    window.scrollTo({
        top:2400,
        left:0,
        behavior:'smooth'
    });
}
const scrollContact = () =>{
    setslide(false);
    window.scrollTo({
        top:3200,
        left:0,
        behavior:'smooth'
    });
}
const scrollHome = () =>{
    setslide(false);
    window.scrollTo({
        top:0,
        left:0,
        behavior:'smooth'
    });
}


// Slide Function
const SlideIn = () =>{
    setslide(true);
}
const SlideOut = () =>{
    setslide(false);
}

if(props.view === "Mobile"){

    // Mobile View
    return(
        <div className={(navbar)?"Navbar-mobile Active":"Navbar-mobile InActive"}>
            <img onClick={scrollHome} src={props.img} className="nav-logo-mobile" />
            <InlineIcon onClick={SlideIn} icon={list20Filled} className="burger"/>
            <ul className={slide?"Sidebar In":"Sidebar Out"}>
            <InlineIcon onClick={SlideOut} icon={crossIcon} className="cross"/>
            <li><button onClick={scrollAbout}>01. About</button></li>
            <li><button onClick={scrollServices}>02. Services</button></li>
            <li><button onClick={scrollProjects}>03. Projects</button></li>
            <li><button onClick={scrollContact}>04. Contact</button></li>
            <li><button className="nav-btn-mobile">Resume</button></li>
            </ul>
        </div>
    )
}else{
    // Desktop View
    return (
        <div className={navbar?"Navbar Active":"Navbar InActive"}>
            <img onClick={scrollHome} src={props.img} className="nav-logo" />
            <ul>
            <li><button onClick={scrollAbout} className={(linkActive===1)?"nav-link link-active":"nav-link"}>01. About</button></li>
            <li><button onClick={scrollServices} className={(linkActive===2)?"nav-link link-active":"nav-link"}>02. Services</button></li>
            <li><button onClick={scrollProjects} className={(linkActive===3)?"nav-link link-active":"nav-link"}>03. Projects</button></li>
            <li><button onClick={scrollContact} className={(linkActive===4)?"nav-link link-active":"nav-link"}>04. Contact</button></li>
            <li><button className="nav-btn">Resume</button></li>
            </ul>
        </div>
    )
}
}

export default Navbar
