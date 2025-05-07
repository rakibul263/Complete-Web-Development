import { Suspense } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import PricingOption from './components/PricingOptions/PricingOption'
import ResultChart from './components/ResultChart/ResultChart'
import axios from 'axios'
import MarksChart from './components/MarksChart/MarksChart'

const pricingPromise = fetch('Pricing.json')
  .then(res => res.json())

const marksPromise = axios.get('marksData.json')

function App() {

  return (
    <>
      <header>
          <Navbar></Navbar>
          {/* <DaisyNav></DaisyNav> */}
      </header>
      <main>
        <Suspense fallback = {<span className="loading loading-dots loading-lg"></span>}>
          <PricingOption pricingPromise={pricingPromise}></PricingOption>
        </Suspense>

        <Suspense fallback = {<span className="loading loading-dots loading-lg"></span>}>
          <MarksChart marksPromise={marksPromise}></MarksChart>
        </Suspense>

        <ResultChart></ResultChart>
      </main>


    </>
  )
}

export default App
