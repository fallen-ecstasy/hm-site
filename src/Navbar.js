/* eslint-disable jsx-a11y/alt-text */
import React, {useState} from 'react';
import './styles/Navbar.css';


function Navbar(props) {

const [navbar, setNavbar] = useState(false);
const [linkActive, setLink] = useState(0);

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

const scrollAbout = () =>{
    window.scrollTo({
        top:800,
        left:0,
        behavior:'smooth'
    });
    console.log("Clicked About")
}
const scrollServices = () =>{
    window.scrollTo({
        top:1600,
        left:0,
        behavior:'smooth'
    });
}
const scrollProjects = () =>{
    window.scrollTo({
        top:2400,
        left:0,
        behavior:'smooth'
    });
}
const scrollContact = () =>{
    window.scrollTo({
        top:3200,
        left:0,
        behavior:'smooth'
    });
}
const scrollHome = () =>{
    window.scrollTo({
        top:0,
        left:0,
        behavior:'smooth'
    });
}

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

export default Navbar
