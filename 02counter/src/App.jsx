import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(7)
 
// let counter = 7

const addValue = () => {
  // console.log("clicked", counter);
  counter = counter + 1
  setCounter(counter)
}
const removeValue = () => {
  // console.log("clicked", counter);
  if (counter > 0) {
    counter = counter - 1
    setCounter(counter)
  }
  
}
  return (
    <>
      <h1>Learning React</h1>
      <h2>Counter value: {counter}</h2>
      <button
      onClick={addValue}>Inc Value {counter}</button>
      <br />
      <button
      onClick={removeValue}>Dec value{counter}</button>
      <footer>{counter}</footer>
    </>
  )
}

export default App
