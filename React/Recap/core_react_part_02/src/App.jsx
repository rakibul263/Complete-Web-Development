import './App.css'
import Batsman from './Batsman';
import Counter from './Counter';

function App() {

  function handelClick(){
    alert("I am clicked");
  }

  return (
    <>
      <h3>Vite + React</h3>
      <Batsman></Batsman>
      <Counter></Counter>
      <button onClick={handelClick}>Click Me</button>
    </>
  )
}

export default App
