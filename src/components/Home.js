import React from 'react'
import Cardl from '../images/gcc1.946c88c6 (1).webp'
import './home.css'
const Home = () => {
  return (
    <div className='homeContainer'>
      <section className='homeinner'>
      <div className="left">
      <h1>Verify Gift Cards</h1>
        <p>Leverage our agile and efficient frameworks to provide a robust verification.
          Our smart algorithms run very fast to provide for you adequate info.</p>
          <button className='verifybtn2 verinow'>Verify Now</button>
      </div>
      <div className="right">
        <img className='cardimg' src={Cardl} alt="" />
      </div>
      </section>
      
    </div>
  )
}

export default Home