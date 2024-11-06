import React, { useEffect, useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const counterFn = () => {
    for (let i = 0; i <= 100; i++) {
      setTimeout(() => {
        setCounter(counter+1);
      },1000);
    }
  };

  useEffect(() => {
    counterFn();
  },[counter]);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={counterFn}>Start</button>
      <button>Pause</button>
      <button>Continue</button>
    </div>
  );
};

export default Counter;
