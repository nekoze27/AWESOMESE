import React, { useState, useEffect } from "react";

function TimerComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div>
      <h1>Timer: {count}</h1>
    </div>
  );
}

export default TimerComponent;