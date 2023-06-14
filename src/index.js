import React, { useState } from "react";

export const SimpleCounterComponent = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>Counter Component</h1>
      <div>{counter}</div>
      <button onClick={() => setCounter((prev) => prev + 1)}>increment</button>
    </div>
  );
};
