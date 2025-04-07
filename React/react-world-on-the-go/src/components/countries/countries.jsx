import React from "react";
import { use } from "react";
import Country from "../country/country";
import './countries.css'

const Countries = ({ countriesPromise }) => {
  const countries = use(countriesPromise);
//   console.log(countries);
  return (
    <div>
      <h2>Traveling Countries : {countries.length}</h2>
      <div className="countries">
      {
        countries.map(country => <Country country={country}></Country>)
      }
      </div>
    </div>
  );
};

export default Countries;
