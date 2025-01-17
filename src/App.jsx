import "./App.css";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";

function App() {
  return (
    <>
      <Header />
      <div className="section">
        <List />
        <Map />
      </div>
    </>
  );
}

export default App;
