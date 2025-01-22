import React from "react";
import "./Map.css";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useEffect, useRef } from "react";

const center = {
  lat: 27.673428,
  lng: 85.242783,
};

const apiKey = import.meta.env.VITE_APP_NAME;

const Map = ({ setCoordinates, setBounds, coordinates }) => {
  const handleCenterChanged = (map) => {
    if (map) {
      const newCenter = map.getCenter();
      const lat = newCenter.lat();
      const lng = newCenter.lng();
      setCoordinates({ lat, lng });
    }
  };

  console.log(coordinates);
  return (
    <div className="map">
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap
          mapContainerStyle={{ height: "100%", width: "100%" }}
          center={center}
          zoom={15}
          onCenterChanged={(map) => handleCenterChanged(map)}
        />
      </LoadScript>
    </div>
  );
};

export default Map;
