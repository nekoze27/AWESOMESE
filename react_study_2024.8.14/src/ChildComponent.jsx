import React from "react";

function ChildComponent({ onClick }) {
  return <button onClick={onClick}>子コンポーネントのボタン</button>;
}

export default ChildComponent;