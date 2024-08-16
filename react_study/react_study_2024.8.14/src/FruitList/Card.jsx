import React from "react";

const Card = ({ name, calorie, macro, image }) => {
  return (
    <div className="card">
      <img className="card-img" src={image} alt={name} />
      <h3>{name}</h3>
      <p>Calorie: {calorie}</p>
      <p>
        Macro: P {macro["p"]} F {macro["f"]} C {macro["c"]}
      </p>
    </div>
  );
};

export default Card;