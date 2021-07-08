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

function App(prop) {
  return (
    <div className="App">
      <Navbar img={logo} className="Navbar-comp" />
      <Home />
      <About />
      <Services />
      {/* <Skill /> */}
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
