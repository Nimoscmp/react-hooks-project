import React, { useContext } from 'react';
import AppContext from "../context/AppContext";
import Map from '../components/Map';
import useGoogleAddress from '../hooks/useGoogleAddress';

function Success() {
  const { state } = useContext(AppContext);
  const { buyer } = state;
  const location = useGoogleAddress(buyer[0].address)
  return (
    <section className="Success">
      <div className="Success-content">
        <h2>{`${buyer.name}, gracias por tu compra`}</h2>
        <span>Tu pedido llegará en 2 días a tu dirección</span>
        <div className="Success-map">
          <Map data={location}/>
        </div>
      </div>
    </section>
  )
}

export default Success