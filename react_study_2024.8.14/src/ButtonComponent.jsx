import React from "react";

function ButtonComponent() {
  const handleClick = () => {
    alert("ボタンがクリックされました！");
  };
  return <button onClick={handleClick}>クリックしてください</button>;
}

export default ButtonComponent;