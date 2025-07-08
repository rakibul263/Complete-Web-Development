import { Suspense } from 'react';
import './App.css'
import Batsman from './Batsman';
import Counter from './Counter';
import Users from './Users';
import Friends from './Friends';
import Posts from './Posts';

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())

const fetchFriends = async() => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  return res.json();
}

const fetchPosts = async() => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  return res.json();
}

function App() {
  // function handelClick(){
  //   alert("Button Clicked!");
  // }

  const friendsPromise = fetchFriends();
  const postsPromise = fetchPosts();

  return (
    <>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>

      <Suspense fallback={<h3>Friends are coming for treat...</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>

      <Suspense fallback={<h4>Posts is Loading...</h4>}>
        <Posts postsPromise={postsPromise}></Posts>
      </Suspense>
      {/* <Batsman></Batsman> */}
      {/* <Counter></Counter> */}
      {/* <button onClick={handelClick}>Click Me</button> */}
    </>
  )
}

export default App
