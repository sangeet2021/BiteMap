import React, { useState } from "react";
import "./List.css";

const List = () => {
  const [rating, setRating] = useState("");
  return (
    <div className="list">
      <div className="restaurant-header">
        <h1>Restaurants Near You!</h1>
        <div className="rating">
          <label htmlFor="">Rating</label>
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
    </div>
  );
};

export default List;
