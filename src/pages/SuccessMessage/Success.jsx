import React, { useContext, useState } from 'react'
import './Success.css'
import { useNavigate } from "react-router-dom";
import { ShopContext } from '../../context/ShopContextProvider'

const Success = () => {
  const { getTotalCartAmout, clearCart } = useContext(ShopContext);
  const navigate = useNavigate();
  const [showMessage, setShowMessage] = useState(false); // State to control message visibility
  const [paymentMade, setPaymentMade] = useState(false); // State to track payment status

  const handleButton = () => {
    clearCart();
    setShowMessage(true); // Show the message when the button is clicked
    setPaymentMade(true); // Update payment status
  }

  return (
    <div className='success'>
      {showMessage && (
        <>
          <h1>Thank You</h1>
          <h3>You're Successfully purchased All Items</h3>
        </>
      )}
      {!showMessage && (
        <h1>Total Cart Amount: $ {getTotalCartAmout()}</h1>
      )}
      <div>
        {paymentMade ? (
          <button onClick={() => navigate("/")}>Continue Shopping</button>
        ) : (
          <button onClick={handleButton}>Make Payment</button>
        )}
      </div>
    </div>
  )
}

export default Success
