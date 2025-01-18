import React, { useState } from "react";
import "./List.css";
import PlaceDetails from "../PlaceDetails/PlaceDetails";

const List = () => {
  const [rating, setRating] = useState("");

  const restaurants = [
    "The Gourmet Spot",
    "Ocean Breeze Grill",
    "Saffron Delight",
    "Urban Table",
    "Café de Luna",
    "Tuscany Trattoria",
    "Bistro Bella",
    "The Green Fork",
    "Spice Haven",
    "The Palate",
  ];
  return (
    <div className="list">
      <div className="restaurant-header">
        <h1>Restaurants Near You!</h1>
        <div className="rating">
          <label htmlFor="">Rating :</label>
          <select
            name=""
            id=""
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
            <option value={0}>All</option>
            <option value={3}>Above 3.0</option>
            <option value={4}>Above 4.0</option>
            <option value={4.5}>Above 4.5</option>
          </select>
        </div>
      </div>
      <div className="restaurants">
        {restaurants.map((place, i) => (
          <PlaceDetails key={i} place ={place} num = {i}/>
        ))}
      </div>
    </div>
  );
};

export default List;
