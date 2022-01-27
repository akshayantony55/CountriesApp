import React, { useState, useEffect, useCallback } from "react"
import "./style.css";
import { useHistory } from "react-router-dom";

const CountriesList = () => {
  const [countryData, setCountryData] = useState([]);

  const history = useHistory();

  useEffect(() => {
    fetch(`https://api.ozayed.com/api/most-visited-city`)
      .then(response => response.json())
      .then(data => {
        setCountryData(data.data);
      })
  }, []);

  const onCountryClick = useCallback(
    (value) => {
      localStorage.setItem('selectedCountry', JSON.stringify(value))
      const path = `/details/${value.name}`;
      history.push(path);
    },
    [history]
  );

  return (
    <div className="grid">
      {countryData.map((country, index) => {
        return (
          <div key={index} className="item" onClick={() => onCountryClick(country)}>
            <img src={country.image} alt="Norway" className="countryImage"/>
            <div className="text-block">
                <div>{country.name}</div>
            </div>
            </div>
            )
      })}
          </div>

        )
      }

export default CountriesList;