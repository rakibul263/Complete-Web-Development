import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo.jsx'
import University from './University.jsx'
import Actor from './Actor.jsx'
import Singer from './Singer.jsx'

function App() {
  // const [count, setCount] = useState(0)
  const actor = ['Hena', 'Omor Sani', 'salman sha', 'Pritom Hasan']
  const singer = [
    {id: 1, name: 'Pritom Hasan', age: 43},
    {id: 2, name: 'Tahsan', age: 53},
    {id: 3, name: 'Shilpa', age: 65}
]

  return (
    <>
      <h2>This is our University Page</h2>
      {
        actor.map(actor => <Actor actor={actor}></Actor>)
      }
      {
        singer.map(singer => <Singer key={singer.id} singer = {singer}></Singer>)
      }
      {/* <University dept="CSE" std="989"></University>
      <University dept="EEE" std="524"></University>
      <Todo learn='react' isDone={true}></Todo>
      <Todo learn='revice js' isDone={true}></Todo>
      <Todo learn='take a meal' isDone={false}></Todo>  */}

      {/* <h1>React core concept</h1> */}
     {/*  <Developer name="Rakibul" tech="JS"></Developer>
      <Developer name="Aysha" tech="Django"></Developer>
      <Student></Student>
      <Salami event='Edul-Fitor' amount='1000'></Salami> */}
    </>
  )
}

function Salami({event, amount}){
  return (
    <div className='student'>
      <p>Salami For  : {event}</p>
      <p>Amount : {amount}</p>
    </div>
  )
}

function Developer(props){
  console.log(props);
  return(
    <div style={
      {
        margin: "20px",
        border: "solid blue 2px",
        borderRadius: "10px",
      }
    }>
      <p>Developer : {props.name}</p>
      <p>Technology : {props.tech}</p>
    </div>
  )
}

function Person(){
  const name = 'Rakibul';
  const age = 23;

  return(
    <p>I am a Person, name : {name} age : {age}</p>
    
  )
}

function Student(){
  const studentStyle = {
    color : 'orange',
  }
  return (
    <div className='student'>
      <p style={studentStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, debitis!</p>
      <p>Name : </p>
      <p>dept : </p>
    </div>
  )
}

export default App
