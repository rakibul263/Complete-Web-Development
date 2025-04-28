import './App.css'
import ToDo from './ToDo'

function App() {

  return (
    <>
      <h1>Vite + React</h1>
      <Student></Student>
      <Student></Student>
      <Developer name="Shuvo" tech="Python"></Developer>
      <Developer name="Rajon" tech="Java"></Developer>
      <ToDo learn="Bangla Book"></ToDo>
    </>
  )
}

function Developer(props){
  console.log(props)
  return (
    <div style={{
      border: '2px solid green',
      borderRadius: '20px',
      padding: ' 10px',
      margin: '20px'
    }}>
      <h3>Developer: {props.name}</h3>
      <p>Technology: {props.tech}</p>
    </div>
  )
}

function Student(){
  return (
    <div className='student'>
      <p>Name : </p>
      <p>Dept : </p>
    </div>
  )
}

function Person(){
  return (
    <p>I am a person. </p>
  )
}

function Sports(){
  return (
    <div>
      <h1>Sports</h1>
      <p>This is a sports section</p>
    </div>
  )
}

export default App
