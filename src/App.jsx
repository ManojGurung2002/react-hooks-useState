import './App.css';
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(4)

  /** 
   *  useState always returns an array, but we desctructure it for better readability
   *  - Initializing a state variable
   *  const arr = useState(4);
   *  const [count, setCount] = useState(4);
   * 
   * - Initializing a state variable using function
   * 
   * Blog witht he same concepts:
   * https://blog.webdevsimplified.com/2020-04/use-state/
   * 
  */

  const decrementCount = () => {
    setCount((count) => {
      return count-1
    })
  }

  const incrementCount = () => {
    setCount((count) => {
      return count+1
    })
  }
  return (
    <div className="App">
      <button onClick={decrementCount}>-</button>
      <h1>Count: {count}</h1>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}

export default App;
