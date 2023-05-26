import React from 'react'
import "./Checkout.css";

function Checkout() {
  return (
    <div className='checkout-wrapper'>
        <div className="checkout-cart-contents checkout-column">left</div>
        <div className="checkout-cart-summary checkout-column">right</div>
    </div>
  )
}

export default Checkout