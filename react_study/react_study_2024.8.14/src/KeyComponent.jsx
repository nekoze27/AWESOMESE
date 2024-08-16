import React from "react";

function KeyComponent() {
  const handleKeyDown = (event) => {
    console.log(`押されたキー: ${event.key}`);
  };

  return <input type="text" onKeyDown={handleKeyDown} placeholder="文字を入力してください" />;
}

export default KeyComponent;