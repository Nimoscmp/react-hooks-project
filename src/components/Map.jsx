import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import API_KEY from '../constants/google';

function Map({ data }) {
  const mapStyles = {
    height: "50vh",
    width: "100%"
  }

  const defaultCenter = {
    lat: data.lat,
    lng: data.lng
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