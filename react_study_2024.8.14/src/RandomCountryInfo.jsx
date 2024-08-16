import React, { useState, useEffect } from "react";

function RandomCountryInfo() {
  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
    .then(response => response.json())
    .then(data => {
      const randomCountry = data[Math.floor(Math.random() * data.length)];
      setCountry(randomCountry);
    });
  }, []);

  return (
    <div>
      <h1>Random Country Infomation</h1>
      {country ? (
        <div>
          <h2>{country.name}</h2>
          <p>首都: {country.capital}</p>
          <p>人口: {country.population.toLocaleString()}</p>
          <p>言語: {country.languages.map(lang => lang.name).join(", ")}</p>
          <img src={country.flag} alt={`Flag of ${country.name}`} className="flagImage" />
        </div>
      ) : (
        <p>Losding...</p>
      )}
    </div>
  );
}

export default RandomCountryInfo;