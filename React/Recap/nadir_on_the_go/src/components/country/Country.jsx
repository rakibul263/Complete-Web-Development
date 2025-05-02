import React, { useState } from 'react';
import './country.css'

const Country = ({country, handelVisitedCountries}) => {
    const [visited, setVisited] = useState(false);

    // console.log(country.flags);
    // const {name} = country;

    const handelVisited = () => {
        if(visited == false){
            setVisited(true);
        }else{
            setVisited(false);
        }
        handelVisitedCountries(country );
    }

    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <h3>Name : {country.name.common}</h3>
            <img src={country.flags.png} alt="Country Images" />
            <p>Independent : {country.independent ? 'Free' : 'Not Free'}</p>
            <p>Population : {country.population}</p>
            <button onClick={handelVisited}>{visited ? "Visited" : "Not Visited"}</button>
        </div>
    );
};

export default Country;