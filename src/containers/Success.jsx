import React, { useContext } from 'react';
import AppContext from "../context/AppContext";
import Map from '../components/Map';

function Success() {
  const { state } = useContext(AppContext);
  const { buyer } = state;

  return (
    <section className="Success">
      <div className="Success-content">
        <h2>{`${buyer.name}, gracias por tu compra`}</h2>
        <span>Tu pedido llegará en 2 días a tu dirección</span>
        <div className="Success-map">
          <Map/>
        </div>
      </div>
    </section>
  )
}

export default Success