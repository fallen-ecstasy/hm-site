import React,{useState} from 'react';
import './App.css';
import Navbar from './Navbar';
import logo from './media/logo2.png';
import Home from './Home';
import About from './About';
// import Skill from './Skill';
import Services from './Services';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

import {isMobile} from 'react-device-detect';

function App(prop) {
  const [Viewport] = useState(isMobile?"Mobile":"Desktop");
  console.log(Viewport);

  return (
    <div className="App">
      <Navbar img={logo} className="Navbar-comp" view={Viewport} />
      <div className="content-main">
      <Home className="content-item" view={Viewport} />
      <About className="content-item" view={Viewport} />
      <Services className="content-item" view={Viewport} />
      {/* <Skill /> */}
      <Projects className="content-item" view={Viewport} />
      <Contact className="content-item" view={Viewport} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
