import React from "react";
import "./Map.css";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useEffect, useRef, useCallback } from "react";

// const currentLocation = async () => {
//   try {
//     const position = await new Promise((resolve, reject) => {
//       navigator.geolocation.getCurrentPosition(resolve, reject);
//     });
//     console.log(position.coords.latitude);
//   } catch (error) {
//     console.log(error);
//   }
// };

const apiKey = import.meta.env.VITE_APP_NAME;

const Map = ({ setCoordinates, setBounds, coordinates }) => {
  // useEffect(() => {
  //   currentLocation();
  // }, []);
  const mapRef = useRef(null);
  const handleCenterChanged = useCallback(() => {
    if (mapRef.current) {
      const newCenter = mapRef.current.getCenter();
      const newCoordinates = { lat: newCenter.lat(), lng: newCenter.lng() };

      // Only update if the coordinates have actually changed
      if (
        newCoordinates.lat !== coordinates.lat ||
        newCoordinates.lng !== coordinates.lng
      ) {
        setCoordinates(newCoordinates);
      }
    }
  }, [coordinates, setCoordinates]);

  const handleBoundsChanged = () => {
    if (mapRef.current) {
      const newBounds = mapRef.current.getBounds();
      const NorthEast = newBounds.getNorthEast();
      const SouthWest = newBounds.getSouthWest();
      setBounds({
        northeast: {
          lat: NorthEast.lat(),
          lng: NorthEast.lng(),
        },
        southwest: {
          lat: SouthWest.lat(),
          lng: SouthWest.lng(),
        },
      });
      // console.log({
      //   northeast: {
      //     lat: NorthEast.lat(),
      //     lng: NorthEast.lng()
      //   },
      //   southwest: {
      //     lat: SouthWest.lat(),
      //     lng: SouthWest.lng()
      //   }
      // })
    }
  };

  return (
    <div className="map">
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap
          onLoad={(map) => (mapRef.current = map)}
          mapContainerStyle={{ height: "100%", width: "100%" }}
          center={coordinates}
          zoom={16}
          onCenterChanged={handleCenterChanged}
          onBoundsChanged={handleBoundsChanged}
        />
      </LoadScript>
    </div>
  );
};

export default Map;
