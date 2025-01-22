import "./App.css";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import { getPlacesData } from "./api/api";
import { useEffect, useState } from "react";

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
  const [bounds, setBounds] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    if (bounds?.northeast && bounds?.southwest) {
      getPlacesData(bounds.northeast, bounds.southwest).then((data) => {
        setRestaurants(data || []);
      });
    }
  }, [coordinates, bounds]);

  return (
    <>
      <Header />
      <div className="section">
        <List restaurants={restaurants} />
        <Map
          setCoordinates={setCoordinates}
          setBounds={setBounds}
          coordinates={coordinates}
        />
      </div>
    </>
  );
}

export default App;
