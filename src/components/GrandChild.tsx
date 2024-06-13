import React, { useContext } from "react";
import { MyContext } from "../context/myContext";

const GrandChild: React.FC = () => {
  const { count, setCount } = useContext(MyContext);

  return (
    <>
      <div className="grand-child">
        <h1>This is grand child</h1>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
};

export default GrandChild;
