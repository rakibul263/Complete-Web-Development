import React, { useState } from 'react';
import './country.css'

const Country = ({country}) => {
    console.log(country.flags)
    

    const [visited, setVisited]=useState(false);

    const handelVisited =()=>{
        // if(visited === true){
        //     setVisited(false);
        // }else{
        //     setVisited(true);
        // }
        setVisited(!visited);
    }

    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <h3>Name : {country.name.common}</h3>
            <img src={country.flags.png} alt="Pic nai" />
            <p>Independent : {country.independent ? 'Free' : 'Not Free'}</p>
            <p>Population: {country.population}</p>
            <button onClick={handelVisited}>{visited ? 'Visited' : 'Not Visited'}</button>
        </div>
    );
};

export default Country;