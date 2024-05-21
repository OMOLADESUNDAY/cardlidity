import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import More from './components/More';
import Service from './components/Service';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Verificatio from './components/Verificatio'
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <div className="App">
     <Navbar/>
     <Home/>
     <More/>
     <Verificatio/>
     <Service/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
