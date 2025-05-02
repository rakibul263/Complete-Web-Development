import React, { use, useState } from 'react';
import Country from '../country/country';
import './countries.css'

const Countries = ({fetchData}) => {
    const countries = use(fetchData);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const handelVisitedCountries = (country) => {
        console.log('Country visited', country.name.common)
    }
    // console.log(Data);
    return (
        <div>
            <h1>Traveller : {countries.length}</h1>
            <h2>Visited Country : {}</h2>
            <div className='countries'>
            {
                countries.map(country => <Country 
                    key={country.cca3} 
                    country={country}
                    handelVisitedCountries = {handelVisitedCountries}
                    > 
                    </Country>)
            }
            </div>
        </div>
    );
};

export default Countries;