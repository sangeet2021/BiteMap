import React from "react";

const PlaceDetails = ({ place, num }) => {
  console.log(place);
  return (
    <h3>
      <div className="img">
        {/* <img src={place.photo} alt={place.name} /> */}
      </div>
      {num + 1}. {place.name}
    </h3>
  );
};

export default PlaceDetails;
