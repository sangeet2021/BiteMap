import React from "react";
import "./PlaceDetails.css";

const PlaceDetails = ({ place, num }) => {
  const imgSrc =
    "https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg";
  return (
    <div className="place-details">
      <div className="img">
        <img src={imgSrc} alt="food" />
      </div>
      <h3>
        {num + 1}. {place}
      </h3>
    </div>
  );
};

export default PlaceDetails;
