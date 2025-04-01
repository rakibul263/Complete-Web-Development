import Counter from './counter'
import Batsman from './Batsman'
import './App.css'


function App() {

  function handelClick(){
    alert('I am clicked');
  }

  const handelClick3 = () =>{
    alert('clicked 3');
  }

  const handelAdd5 = (num) =>{
    const newNum = num + 5;
    alert(newNum);
  }

  return (
    <>
      <Batsman></Batsman>
      <Counter></Counter>
      <h3>Vite + React</h3>
      <button onClick={handelClick}>Click</button>
      <button onClick={handelClick3}>Button 3</button>
      <button onClick={()=>handelAdd5(7)}>Click add 5</button>
    </>
  )
}

export default App
