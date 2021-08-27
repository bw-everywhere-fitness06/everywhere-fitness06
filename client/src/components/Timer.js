import React from "react";
import { useStopwatch } from "react-timer-hook";

function MyStopwatch() {
  const { seconds, minutes, isRunning, start, pause, reset } =
    useStopwatch({ autoStart: false });

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: "50px", color: "white" }}>
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <p>{isRunning ? "Running" : "Not running"}</p>
      {isRunning ? <button onClick={pause}>Finish Class</button> :
      <button onClick={start}>Start Class</button>}
    </div>
  );
}

export default function App() {
  return (
    <div>
      <MyStopwatch />
    </div>
  );
}
