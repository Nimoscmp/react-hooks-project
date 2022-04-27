import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import API_KEY from '../constants/google';

function Map() {
  const mapStyles = {
    height: "50vh",
    width: "100%"
  }

  const defaultCenter = {
    lat: 4.5,
    lng: 72.5
  }

  return (
    <LoadScript googleMapsApiKey={API_KEY}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={8}
        center={defaultCenter}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  )
}

export default Map