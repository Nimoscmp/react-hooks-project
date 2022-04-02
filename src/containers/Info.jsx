import React from 'react'
import { Link } from 'react-router-dom'

function Info() {

  const inputsData = [
    {id: 1, type: 'text', placeholder: 'Nombre completo', name: 'name'},
    {id: 2, type: 'email', placeholder: 'Correo electrónico', name: 'name'},
    {id: 3, type: 'text', placeholder: 'Dirección', name: 'name'},
    {id: 4, type: 'text', placeholder: 'Apartamento', name: 'name'},
    {id: 5, type: 'text', placeholder: 'País', name: 'name'},
    {id: 6, type: 'text', placeholder: 'Estado', name: 'name'},
    {id: 7, type: 'text', placeholder: 'Ciudad', name: 'name'},
    {id: 8, type: 'number', placeholder: 'Código postal', name: 'name'},
    {id: 9, type: 'phone', placeholder: 'Teléfono', name: 'name'},
  ]

  return (
    <section className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Información de contacto:</h2>
        </div>
        <div className="Information-form">
          <form>
            {inputsData.map(input => (
              <input 
                key={input.id}
                type={input.type}
                placeholder={input.placeholder}
                name={input.name}
              />
            ))}
          </form>
        </div>
        <div className="Information-buttons">
          <Link to="/checkout">
            <button type="button" className="Information-back">
              Regresar
            </button>
          </Link>
          <Link to="/checkout/payment">
            <button type="button" className="Information-next">
              Pagar
            </button>
          </Link>
        </div>
      </div>

      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        <div className="Information-item">
          <div className="Information-element">
            <h4>ITEM Name</h4>
            <span>$10</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info