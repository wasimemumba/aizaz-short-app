import React, { useState } from "react";

interface props {
  a: number;
  b: number;
}

const UseMemoExample: React.FC<props> = ({ a, b }) => {
  const [count, setCount] = useState(0);

  const expensiveCalculation = (a: number, b: number) => {
    console.log("Calculating...");
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += a * b;
    }

    console.log("Finished calculating");
    return result;
  };

  console.log("Starting expensive calculation");
  const result = expensiveCalculation(a, b);
  console.log("Finished expensive calculation");

  return (
    <div>
      <p>Expensive value: {result}</p>
      <p>Count: {count}</p>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
          console.log("Button Click");
        }}
      >
        Increment Count
      </button>
    </div>
  );
};

export default UseMemoExample;
