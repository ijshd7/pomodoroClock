import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  return (
    <div className="App">
      <p id="break-label">Break Length: <span id="break-length">{breakLength}</span></p>
      <p id="session-label">Session Length: <span id="session-length">{sessionLength}</span></p>
      <p id="timer-label">Session: </p>
      <p id="time-left">25:00</p>
      <button id="break-decrement">Break Decrement</button>
      <button id="session-decrement">Session Decrement</button>
      <button id="break-increment">Break Increment</button>
      <button id="session-increment">Session Increment</button>
    </div>
  );
}

export default App;
