import './App.css';
import Navbar from './Navbar';
import logo from './media/logo.png';
import Home from './Home';
import About from './About';

function App(prop) {
  return (
    <div className="App">
      <Navbar img={logo} className="Navbar-comp" />
      <Home />
      <About />
    </div>
  );
}

export default App;
