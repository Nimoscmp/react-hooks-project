import React from 'react'

function Checkout() {
  return (
    <section className="Checkout">
      <ul className="Checkout-content">
        <h3>Lista de pedidos</h3>
        <div className="Checkout-element">
          <h4>ITEM name</h4>
          <span>$10</span>
        </div>
        <button type="button">Eliminar</button>
      </ul>
      <div className="Checkout-sidebar">
        <h3>Precio total: $100</h3>
        <button type="button">Continuar pedido</button>
      </div>
    </section>
  )
}

export default Checkout