import React, { useContext } from 'react'
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom'
import AppContext from '../context/AppContext'
import handleSumTotal from '../utils/totalPrice';

function Checkout() {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;

  const handleRemoveFromCart = product => {
    removeFromCart(product)
  }

  return (
    <>
    <Helmet>
      <title>Lista de pedidos - Platzi Conf Merch</title>
    </Helmet>
    <section className="Checkout">
      <ul className="Checkout-content">
        {cart.length 
        ? <h3>Lista de pedidos</h3>
        : <h3>No hay pedidos</h3>
        }
        {cart.map(item => (
          <div className="Checkout-item" key={item.id}>
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
            <button 
              type="button"
              onClick={() => handleRemoveFromCart(item)}
            >Eliminar</button>
          </div>
        ))}
      </ul>
      {cart.length && 
        <div className="Checkout-sidebar">
          <h3>{`Precio total: $ ${ handleSumTotal(cart) }`}</h3>
          <Link to="/checkout/information">
            <button type="button">Continuar pedido</button>
          </Link>
        </div>
      }
    </section>
    </>
  )
}

export default Checkout