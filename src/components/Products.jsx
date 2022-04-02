import React from 'react'
import Product from './Product'

function Products({ products }) {
  return (
    <section className="Products">
      <ul className="Products-items">
        {products.map(product => (
          <Product 
            key={product.id}
            product={product}
          />
        ))}
      </ul>
    </section>
  )
}

export default Products