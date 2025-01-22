import "./App.css";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import { getPlacesData } from "./api/api";
import { useEffect, useState } from "react";

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);
  useEffect(() => {
    getPlacesData().then((data) => {
      setRestaurants(data);
      
    });
  }, []);
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
