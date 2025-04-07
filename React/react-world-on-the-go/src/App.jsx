import { Suspense } from 'react';
import './App.css'
import Countries from './components/countries/countries'

// const fetchCountries = async() =>{
//   const res = await fetch('https://restcountries.com/v3.1/all')
//   return res;
// }

const countriesPromise = fetch('https://restcountries.com/v3.1/all')
  .then(res =>  res.json());


function App() {
  // const countriesPromise = fetchCountries();

  return (
    <>
      <Suspense fallback={<h3>Loading Data....</h3>}>
        <Countries key={countriesPromise.id} countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  )
}

export default App
