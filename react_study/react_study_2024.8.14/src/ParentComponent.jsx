import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  const handleChildClick = () => {
    alert("子コンポーネントのボタンがクリックされました！");
  };

  return (
    <div>
      <ChildComponent onClick={handleChildClick} />
    </div>
  );
}

export default ParentComponent;