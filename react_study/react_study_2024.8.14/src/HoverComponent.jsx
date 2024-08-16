import React from "react";

function HoverComponent() {
  const handleMouseOver = () => {
    console.log("マウスが要素の上に載りました");
  };

  return (
    <div onMouseOver={handleMouseOver}>
      マウスを乗せてみてください
    </div>
  );
}

export default HoverComponent;