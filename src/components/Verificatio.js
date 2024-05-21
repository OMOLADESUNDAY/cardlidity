import React from 'react'
import veriImg from "../images/gig1.b5f9534b.webp"
import "./verification.css"
import { RiErrorWarningFill } from "react-icons/ri";
const Verificatio = () => {
  return (
    <section className='veriContainer'>
      <div className="leftveri">
        <img src={veriImg} alt="" />
      </div>
      <div className="rightveri">
        <form>
        <select id="choices" name="choices" className='cardselect'>
        <option value="" disabled selected>Select type of card</option>
          <option value="Apple">Apple</option>
          <option value="eBay">eBay</option>
          <option value="Steam">Steam</option>
          <option value="Amazon">Amazon</option>
          <option value="Xbox">Xbox</option>
          <option value="Googleplay">Googleplay</option>
          <option value="Playstation">Playstation</option>
          <option value="Sephora">Sephora</option>
          <option value="NordStorm">NordStorm</option>
          <option value="Nike">Nike</option>
          <option value="Mastercard">Mastercard</option>
          <option value="Vanilla">Vanilla</option>
          <option value="WalmartCard">WalmartCard</option>
          <option value="Perfect Visa">Perfect Visa</option>
          <option value="Visa Silvery White">Visa Silvery White</option>
          <option value="TT Visa">TT Visa</option>
          <option value="Amex">Amex</option>
      </select>
      <div className='sect2'>
      <select id="choices" name="choices" className='selectcurrency '>
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          <option value="AUD">AUD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
      </select>
      <input type="Number" placeholder='Card Amount' className='amount' />
      </div>
      <input type="text" name="" id="" placeholder='Redemption code' className='cardselect'/>
      <p className='warningp'> <RiErrorWarningFill className='warning'/> Please make sure the redemption code is the original scratched code</p>
        <button type='submit' className='verifyCard'>Verify Card</button>
        <p>Please make sure the codes you are about to input are correct and according to details</p>
        </form>
      </div>
    </section>
  )
}

export default Verificatio