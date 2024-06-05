import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0);
  // let counter = 0;
  const addValue = () => {
    counter += 5;
    setCounter(counter);
    console.log('addValue', counter);
  };
  const removeValue = () => {
    counter -= 5;
    setCounter(!counter ? counter : 0);
    console.log('removeValue', counter);
  }
  return (
    <>
      <h1>Current Value {counter ? counter : 0}</h1>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
