import React from 'react'

function Product({ product, handleAddToCart }) {
  return (
    <figure className="Products-item">
      <img 
        src={product.image}
        alt={product.title}
      />
      <div className="Product-item-info">
        <h2>
          {product.title}
          <span>$ {product.price}</span>
        </h2>
        <p>{product.description}</p>
      </div>
      <button 
        type="button"
        onClick={() => handleAddToCart(product)}  
      >Comprar</button>
    </figure>
  )
}

export default Product