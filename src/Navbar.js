/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './styles/Navbar.css';

function Navbar(props) {
    return (
        <div className="Navbar">
            <img src={props.img} className="nav-logo" />
            <ul>
            <li>01. About</li>
            <li>02. Experience</li>
            <li>03. Projects</li>
            <li><button className="nav-btn">Resume</button></li>
            </ul>
        </div>
    )
}

export default Navbar
