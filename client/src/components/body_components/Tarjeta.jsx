import React from "react";

const Tarjeta = ({ name, foodWeight, image }) => {
  return (
    <div className="task">
      {foodWeight}g {name}
      {/*  <img src={image} alt="foodImg" /> */}
    </div>
  );
};

export default Tarjeta;
