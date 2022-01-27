import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

const CountriesDetails = () => {
  const [selectedCountry, setSelectedCountry] = useState({});

  useEffect(() => {
    setSelectedCountry(JSON.parse(localStorage.getItem("selectedCountry")));
  }, []);

  return (
    <div className="countryDetails">
      <h1>Details</h1>
      <div>
        <div className="row">
          <div className="propertyName">
            Location:
          </div>
          <div className="propertyValue">
            {selectedCountry.location}
          </div>
        </div>


        <div className="row">
          <div className="propertyName">
            Country:
          </div>
          <div>
            {selectedCountry.country}
          </div>
        </div>

        <div className="row">
          <div className="propertyName">
            City:
          </div>
          <div className="propertyValue">
            {selectedCountry.city}
          </div>
        </div>

        <div className="row">
          <div className="propertyName">
            Latitude:
          </div>
          <div className="propertyValue">
            {selectedCountry.latitude}
          </div>
        </div>

        <div className="row">
          <div className="propertyName">
            Longitude:
          </div>
          <div className="propertyValue">
            {selectedCountry.longitude}
          </div>
        </div>

      </div>
    </div>
  )
}

export default CountriesDetails;
