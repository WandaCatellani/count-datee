import React, { useState, useEffect } from "react";
import "./style.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [hour, setHour] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  useEffect(() => {
    console.log();
  }, [hour, minutes, seconds]);

  function giveCountDate() {
    setCount(count + 1);
    setHour(new Date().getHours());
    setMinutes(new Date().getMinutes());
    setSeconds(new Date().getSeconds());
  }

  return (
    <div>
      <h1>Contador y Date</h1>
      <p>Contador: {count}</p>
      <p>
        Hora: {hour} : {minutes} : {seconds}{" "}
      </p>
      <input
        onClick={() => giveCountDate()}
        type="button"
        value="Click me to add one number"
      />
    </div>
  );
}
