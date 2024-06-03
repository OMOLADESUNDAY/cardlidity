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
import { Helmet } from 'react-helmet';
<Helmet>
<meta property="og:title" content="Cardlidity" />
    <meta property="og:description" content=" Verify all brands of Gift cards" />
    <meta property="og:image" name="image" content="./images/gcc1.946c88c6 (1).webp" />
    <meta property="og:image:type" content="image/webp" />
    <meta property="og:image:width" content="200" />
    <meta property="og:image:height" content="200" />
    <meta property="og:url" content="https://cardlidity.com" />
    <meta property="og:type" content="website" />
</Helmet>
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <div className="App">
     <Navbar />
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
