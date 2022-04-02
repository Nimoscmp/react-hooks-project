import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
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
    </header>
  )
}

export default Header