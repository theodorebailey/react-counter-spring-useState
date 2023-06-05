import React, { useState } from "react";

import './App.css';

import Example from './Example';
import Examples from './Examples';
import Timer from './Timer';

function App() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }
 return (
  <>
    <div className="container">
      <h1>{count}</h1>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
    <div>
      <Example />
    </div>
    <div>
      <Examples />
    </div>
    <div>
      <Timer />
    </div>
  </>
  );
}

export default App;
