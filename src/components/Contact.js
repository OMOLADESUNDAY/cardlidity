import React from 'react'
import './contact.css'
import { Element } from 'react-scroll'
const Contact = () => {
  return (
    <Element name='contact' className='contactContainer'>
    <h1 className='contacttext'>Contact Us</h1>
    <p className='contacttext'>We are available to help you with your giftcard verification needs and to provide you support with a quick solution to your problem.</p>
    <section className='innercontactcontainer'>
     <form action="" className='helpForm'>
      <label htmlFor="email">Email</label>
      <input type="email" required id='email' className='email'/>
      <label htmlFor="message">Message</label>
      <textarea name="" required id="message" placeholder='Message' className='message' cols="30" rows="10"></textarea>
      <button type='submit' className='messagebtn' >Submit</button>
     </form>
    </section>
  </Element>
  )
}

export default Contact