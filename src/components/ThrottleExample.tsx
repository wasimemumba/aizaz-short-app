import React, { useCallback } from "react";

// eslint-disable-next-line @typescript-eslint/ban-types
const throttle = (fn: Function, delay: number) => {
  let lock = false;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let lastFn: (() => any) | null = null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (...args: any[]) => {
    if (lock) {
      lastFn = () => fn(...args);
      return;
    }
    lock = true;
    fn(...args);
    setTimeout(() => {
      lock = false;
      if (lastFn) {
        lastFn();
        lastFn = null;
      }
    }, delay);
  };
};

const ThrottleExample: React.FC = () => {
  const [count, setCount] = React.useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleClick = useCallback(
    throttle((e: React.MouseEvent<HTMLButtonElement>) => {
      console.log(e.target);
      console.log("API call sent");
      setCount((prevCount) => prevCount + 1);
    }, 1000),
    []
  );

  return (
    <div>
      <h1>Throttle Example</h1>
      <p>only 1 api call every 1s</p>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default ThrottleExample;
