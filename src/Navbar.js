/* eslint-disable jsx-a11y/alt-text */
import React, {useState, useEffect} from 'react';
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
    if(window.scrollY >= 700){
        setLink(1);
    }else{
        setLink(0);
    }
}
window.addEventListener('scroll',backgroundChange);


    return (
        <div className={navbar?"Navbar Active":"Navbar InActive"}>
            <img src={props.img} className="nav-logo" />
            <ul>
            <li><button className={(linkActive===1)?"nav-link link-active":"nav-link"} onClick="">01. About</button></li>
            <li><button className="nav-link" onClick="">02. Experience</button></li>
            <li><button className="nav-link" onClick="">03. Projects</button></li>
            <li><button className="nav-btn">Resume</button></li>
            </ul>
        </div>
    )
}

export default Navbar
