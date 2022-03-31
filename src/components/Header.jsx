import React from 'react'

function Header() {
  const data = {
    title: `PlatziConf Merch`
  }

  return (
    <header className="Header">
      <h1 className="Header-title">
        {data.title}
      </h1>
      <nav className="Header-checkout">
        checkout
      </nav>
    </header>
  )
}

export default Header