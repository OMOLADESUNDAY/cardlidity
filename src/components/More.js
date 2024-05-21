import React from 'react'
import { Link } from 'react-scroll'
import "./more.css"
import moreimg from '../images/gcc2.0cb4b1ce.webp'
const More = () => {
  return (
    <section className='moreContainer'>
      <div className="moreleft">
        <img src={moreimg} alt="" className='moreimg'/>
      </div>
      <div className="moreright" data-aos="fade-up">
        <h2>We have verified over 10k giftcards on our site.Verify yours now</h2>
        <Link to='' className='verifybtn2 btn'>Try for free</Link>
      </div>
    </section>
  )
}

export default More