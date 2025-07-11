import { Suspense } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Pricing_Options from "./components/Pricing Options/Pricing_Options";
import ResultChart from "./components/Result Chart/ResultChart";

const pricingPromise = fetch("Pricing_Data.json").then((res) => res.json());

const resultPromise = fetch("Marks_Data.json").then((res) => res.json());
function App() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Suspense
          fallback={<span className="loading loading-ring loading-lg"></span>}
        >
          <Pricing_Options pricingPromise={pricingPromise}></Pricing_Options>
        </Suspense>
        <Suspense
          fallback={<span className="loading loading-ring loading-lg"></span>}
        >
          <ResultChart resultPromise={resultPromise}></ResultChart>
        </Suspense>
      </main>
    </>
  );
}

export default App;
