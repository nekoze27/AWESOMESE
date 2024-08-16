import React, { useState } from "react";

function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => () => {
    setInput(input + value);
  };

  const calculate = () => {
    try {
      setInput((eval(input) || "") + "");
    } catch (e) {
      setInput("error");
    }
  };

  const clear = () => setInput("");
  const backspace = () => setInput(input.slice(0, -1));

  const buttons = [
    { label: "7", action: null },
    { label: "8", action: null },
    { label: "9", action: null },
    { label: "/", action: null },
    { label: "4", action: null },
    { label: "5", action: null },
    { label: "6", action: null },
    { label: "*", action: null },
    { label: "1", action: null },
    { label: "2", action: null },
    { label: "3", action: null },
    { label: "-", action: null },
    { label: "0", action: null },
    { label: ".", action: null },
    { label: "=", action: calculate },
    { label: "+", action: null },
    { label: "AC", action: clear },
    { label: "▶️", action: backspace },
  ];

  return (
    <div className="calculator">
      <form>
        <input type="text" value={input} readOnly />
      </form>
      <div className="keypad">
        {buttons.map((btn) => (
          <button
            key={btn.label}
            onClick={btn.action ? btn.action : handleClick(btn.label)}
          >
            {btn.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;