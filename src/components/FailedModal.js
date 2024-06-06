import React from 'react'
import './failedModal.css'

const FailedModal = ({carddetails}) => {
  console.log(carddetails)
  const {cardName,cardAmount,CardCurrency,closemodal}=carddetails
  console.log(cardName,cardAmount,CardCurrency)
  return (
    <div className='modalcontainer'>
      <h1>Success!</h1>
      <h2>your {cardName} gift card has been verified </h2>
      <p>Here's the result</p>
      <hr />
      <div><p>Brand: <span><b>{cardName}</b></span></p></div>
      <div><p>Amount: <span><b>{CardCurrency} {cardAmount}</b></span></p></div>
      <div><p>Brand: <span><b>Activated</b></span></p></div>
      <button className='closeBtn' onClick={()=>closemodal()}>close</button>
    </div>
  )
}

export default FailedModal