import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'

function App() {
  const handelClick = ()=>{
    alert('Clicked me ')
  }

  const handelAdd = (Num) =>{
    const newNumber = Num + 10;
    alert(newNumber);
  } 

  return (
    <>
      <h1>React New Website</h1>
      <button onClick={handelClick}>Click Me</button><br />
      <button onClick={()=>handelAdd(6)}>Add Ten</button>
      <Counter></Counter>
    </>
  )
}

export default App
