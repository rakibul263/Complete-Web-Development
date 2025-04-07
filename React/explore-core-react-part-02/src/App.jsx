import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Users from './users'
// import { Suspense } from 'react'
import Friends from './Friends'
import Posts from './Posts'

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())

const fetchFriends = async() =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  return res.json();
}

const fetchPosts = async() =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  return res.json();
}


function App() {
  const fetchFriend = fetchFriends();
  const postPromise = fetchPosts();
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
      <Suspense fallback={<h3>Loading Post....</h3>}>
        <Posts key={Posts.id} postPromise = {postPromise}></Posts>
      </Suspense>
      <Suspense fallback={<h3>Post are comming please dont go back ....</h3>}>

      </Suspense>
      <button onClick={handelClick}>Click Me</button><br />
      <button onClick={()=>handelAdd(6)}>Add Ten</button>
      <Counter></Counter>
      <Suspense fallback={<h3>Loading...</h3>}>
          <Users fetchUsers={fetchUsers}></Users>
      </Suspense>
      <Suspense fallback={<h3>Friends are comming for treat....</h3>}>
        <Friends fetchFriend={fetchFriend}></Friends>
      </Suspense>
    </>
  )
}

export default App
