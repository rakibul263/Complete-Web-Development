import { Suspense } from 'react';
import './App.css'
import Batsman from './Batsman';
import Counter from './Counter';
import Users from './users';
import Friends from './Friends';
import Posts from './Posts';

// const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
//   .then(res => res.json())

// const fetchFriends = async() => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users")
//   return res.json();
// }

const fetchPosts = async() => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  return res.json();
}

function App() {

  // function handelClick(){
  //   alert("I am clicked");
  // }

  // const friendsPromise = fetchFriends();
  const postsPromise = fetchPosts();

  return (
    <>
      {/* <h3>Vite + React</h3> */}
      {/* <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}

      <Suspense fallback={<h2>Loading posts...</h2>}>
        <Posts postsPromise = {postsPromise}></Posts>
      </Suspense>

      {/* <Suspense fallback={<h2>Loading friends...</h2>}>
        <Friends friendsPromise = {friendsPromise}></Friends>
      </Suspense> */}
      
      {/* <Batsman></Batsman>
      <Counter></Counter>
      <button onClick={handelClick}>Click Me</button> */}
    </>
  )
}

export default App
