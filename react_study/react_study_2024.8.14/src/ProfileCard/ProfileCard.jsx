import React from "react";

function ProfileCard({ name, age, sex, profession }) {
  return (
    <div>
      <h3>Card</h3>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Sex: {sex}</p>
      <p>Profession: {profession}</p>
    </div>
  );
}

export default ProfileCard;