import React from 'react'

function Payment() {
  return (
    <section className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        <button type="button" className="Payment-button">
          Boton de pago con Paypal
        </button>
      </div>
    </section>
  )
}

export default Payment