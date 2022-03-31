import React from 'react'

function Footer() {
  const data = {
    title: 'Platzi Conf Merch',
    copy: 'Todos los derechos reservados'
  }

  return (
    <footer className="Footer">
      <h2 className="Footer-title">{data.title}</h2>
      <p className="Footer-copy">{data.copy}</p>
    </footer>
  )
}

export default Footer