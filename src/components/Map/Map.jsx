import React from "react";
import "./Map.css";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const center = {
  lat: 27.7172,
  lng: 85.324,
};

const apiKey = import.meta.env.VITE_APP_NAME

const Map = () => {
  return (
    <div className="map">
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap
          mapContainerStyle={{ height: "100%", width: "100%" }}
          center={center}
          zoom={12}
        />
      </LoadScript>
    </div>
  );
};

export default Map;
