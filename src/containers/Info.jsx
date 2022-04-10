import React, { useRef, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AppContext from '../context/AppContext'

function Info() {
  const { state, addToBuyer } = useContext(AppContext);
  const { cart } = state;
  const form = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      'name': formData.get('name'),
      'email': formData.get('email'),
      'address': formData.get('address'),
      'apto': formData.get('apto'),
      'country': formData.get('country'),
      'state': formData.get('state'),
      'city': formData.get('city'),
      'code': formData.get('code'),
      'phone': formData.get('phone') 
    }
    addToBuyer(buyer);
    navigate.push('/  checkout/payment');
  }

  const inputsData = [
    {id: 1, type: 'text', placeholder: 'Nombre completo', name: 'name'},
    {id: 2, type: 'email', placeholder: 'Correo electrónico', name: 'email'},
    {id: 3, type: 'text', placeholder: 'Dirección', name: 'address'},
    {id: 4, type: 'text', placeholder: 'Apartamento', name: 'apto'},
    {id: 5, type: 'text', placeholder: 'País', name: 'country'},
    {id: 6, type: 'text', placeholder: 'Estado', name: 'state'},
    {id: 7, type: 'text', placeholder: 'Ciudad', name: 'city'},
    {id: 8, type: 'number', placeholder: 'Código postal', name: 'code'},
    {id: 9, type: 'phone', placeholder: 'Teléfono', name: 'phone'},
  ]

  return (
    <section className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Información de contacto:</h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
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
            <button 
              type="button" 
              className="Information-next"
              onClick={() => handleSubmit()}
            >
              Pagar
            </button>
          </Link>
        </div>
      </div>

      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        {cart.map(item => (
          <div className="Information-item" key={item.id}>
            <div className="Information-element">
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Info