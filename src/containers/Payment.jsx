import React, { useContext } from 'react'
import { PayPalButton } from 'react-paypal-button-v2'
import { useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext'
import handleSumTotal from '../utils/totalPrice';

function Payment() {
  const navigate = useNavigate();
  const { state , addNewOrder } = useContext(AppContext)
  const { cart , buyer } = state;
  
  const paypalOptions = {
    clientId: 'AZl9c-95-AQJWMXtfV6ObCYrJlS2OiJxNeIB6QSDCwQu1VsjToQGjYBKRtHtF6rXqF4UWVXL467C320F',
    intent: 'capture',
    currency: 'USD' 
  }

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect'
  }

  const handlePaymentSuccess = data => {
    console.log(data)
    if(data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data
      }
      addNewOrder(newOrder);
      navigate.push('/checkout/success')
    }
  }

  return (
    <section className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map(item => (
          <div className="Payment-item" key={item.id}>
            <h4>{item.title}</h4>
            <span>$ {item.price}</span>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal(cart)}
            onPaymentStart={() => console.log('Start payment')}
            onPaymentSuccess={data => handlePaymentSuccess(data)}
            onPaymentError={() => console.log('Error payment')}
            onPaymentCancel={() => console.log('Cancel payment')}
          />
        </div>
      </div>
    </section>
  )
}

export default Payment