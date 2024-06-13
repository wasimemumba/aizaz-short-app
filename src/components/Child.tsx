import React from "react";
import { MyContext } from "../context/myContext";
import { useContext } from "react";
import GrandChild from "./GrandChild";

interface props {
  childNumber: number;
}

const Child: React.FC<props> = ({ childNumber }) => {
  const { count, setCount } = useContext(MyContext);

  return (
    <>
      <div className="child">
        <h1>This is child {childNumber}</h1>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <GrandChild />
    </>
  );
};

export default Child;
