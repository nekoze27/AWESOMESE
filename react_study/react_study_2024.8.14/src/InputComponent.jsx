import React from "react";

function InputComponent() {
  const handleChange = (event) => {
    console.log(event.target.value);
    console.log(event.target.typw);
  };

  return (
    <input type="text" onChange={handleChange} placeholder="入力してください" />
  );
}

export default InputComponent;