import React, { useCallback, useState } from "react";

interface ChildProps {
  onClick: () => void;
}

const Child: React.FC<ChildProps> = React.memo(({ onClick }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Click me</button>;
});

const Parent = () => {
  const [count, setCount] = useState(0);

  console.log("Parent rendered");

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
          console.log("Button Clicked");
        }}
      >
        Increment Count
      </button>
      <Child onClick={handleClick} />
    </div>
  );
};

export default Parent;
