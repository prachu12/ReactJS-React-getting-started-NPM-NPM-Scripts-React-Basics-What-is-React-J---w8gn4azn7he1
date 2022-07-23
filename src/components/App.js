import React, { Component, useState, useEffect } from "react";
import '../styles/App.css';

const App = () => {
  // write your code here 
  const[seconds, setSeconds] = useState(0);

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for<input id="timeCount" onKeyDown={setSeconds-1} /> sec.
        </h1>
      </div>
      <div id="current-time">{setSeconds(0)}</div>
    </div>
  )
}


export default App;
