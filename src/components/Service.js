import React from 'react'
import './service.css'

const Service = () => {
  return (
    <div className='serviceContainer'>
      <h1 className='servicetext'>Our service</h1>
      <p className='servicetext'>Leverage our agile and efficient frameworks to provide a robust verification and synopsis for high level reviews on your giftcards</p>
      <section className='innerServicecontainer'>
        <div className='service'>
          <div className='number'>1</div>
          <h2>High performance</h2>
          <p>Our smart algorithms run very fast to provide for you adequate info about your giftcard. We value our customers time, that is why you can get a fast response on your request</p>
        </div>

        <div className='service'>
          <div className='number'>2</div>
          <h2>Secured and Encrypted</h2>
          <p>We at Cardlidity makes sure customers giftcard details are secured and encrypted. No attacker or false identity can intercept your verification operations</p>
        </div>

        <div className='service'>
          <div className='number'>3</div>
          <h2>High performance</h2>
          <p>Our smart frameworks is built on a decentralized platform to ensure clients gift card details are not stored anywhere in the server. Your card details are immediately deleted after verification operations.</p>
        </div>
      </section>
    </div>
  )
}

export default Service