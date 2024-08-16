import React, { useState, useEffect } from "react";

function RandomNumberUpdater() {
  const [randomNumber, setRandomNumber] = useState(null);
  const [fetchCount, setFetchCount] = useState(0);

  useEffect(() => {
    fetch("https://api.recursionist.io/random-integer")
    .then(response => response.json())
    .then(data => {
      setRandomNumber(data);
    });
  }, [fetchCount]);

  const handleClick = () => {
    setFetchCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <h1>Random Number: {randomNumber}</h1>
      <button onClick={handleClick}>Generate New Random Number</button>
    </div>
  );
}

export default RandomNumberUpdater;