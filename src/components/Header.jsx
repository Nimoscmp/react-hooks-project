import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../context/AppContext'

function Header() {
  const { state } = useContext(AppContext);
  const { cart } = state;

  const data = {
    title: `PlatziConf Merch`
  }

  return (
    <header className="Header">
      <h1 className="Header-title">
        <Link to="/">
          {data.title}
        </Link>
      </h1>
      <nav className="Header-checkout">
        <Link to="/checkout">
          Checkout
        </Link>
      </nav>
      {cart.length &&
        <div className="Header-alert">
          {cart.length}
        </div>
      }
    </header>
  )
}

export default Header