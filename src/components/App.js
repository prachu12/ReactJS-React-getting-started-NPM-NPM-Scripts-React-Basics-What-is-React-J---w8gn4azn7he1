import React, { Component, useState, useEffect } from "react";
import '../styles/App.css';

let timer;
const App = () => {
  // write your code here 
  const [inputTime, setInputTime] = useState(-1);

  const startTime = (event) => {
    if (event.key === "Enter") {
      if(timer){
        clearInterval(timer);
      }
      if(isNaN(event.target.value)){
        setInputTime(0);
        return;
      }
      setInputTime(Math.floor(event.target.value))
      startTimer();
    }
  }

  useEffect(()=>{
    if(inputTime < 1){
      clearInterval(timer);
    }
  }, [inputTime])

  function startTimer(){
    timer = setInterval(()=>{
      setInputTime(prevTime => prevTime - 1)
    }, 1000)
  }


  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for<input id="timeCount" onKeyDown={startTime} /> sec.
        </h1>
      </div>
      <div id="current-time">{(inputTime != -1) ? inputTime : ""}</div>
    </div>
  )
}


export default App;
