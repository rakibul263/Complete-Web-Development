import { Suspense } from 'react';
import './App.css'
import Batsman from './Batsman';
import Counter from './Counter';
import Users from './Users';

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())

function App() {
  // function handelClick(){
  //   alert("Button Clicked!");
  // }

  return (
    <>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>
      {/* <Batsman></Batsman> */}
      {/* <Counter></Counter> */}
      {/* <button onClick={handelClick}>Click Me</button> */}
    </>
  )
}

export default App
