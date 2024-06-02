import React from 'react'
import Cardl from '../images/gcc1.946c88c6 (1).webp'
import './home.css'
import { Element, Link } from 'react-scroll'
const Home = () => {
  return (
    <Element name='home' className='homeContainer'>
      <section className='homeinner'>
      <div className="left">
      <h1>Verify Gift Cards</h1>
        <p className='add'>Leverage our agile and efficient frameworks to provide a robust verification.
          Our smart algorithms run very fast to provide for you adequate info.</p>
          <Link to='verification' smooth={true} duration={500} className='verifybtn2 verinow'>Verify Now</Link>
      </div>
      <div className="right">
        <img className='cardimg' src={Cardl} alt="" />
      </div>
      </section>
      
    </Element>
  )
}

export default Home