import { Suspense } from 'react';
import './App.css'
import Countries from './components/countries/countries'

const fetchData = fetch("https://restcountries.com/v3.1/all")
  .then(res => res.json());

function App() {
  return (
    <>
      <Suspense fallback={<h3>Loading Nadir ...</h3>}>
          <Countries fetchData={fetchData}></Countries>
      </Suspense>
    </>
  )
}

export default App
