import React from "react";
import Child from "./Child";

const Parent: React.FC = () => {
  return (
    <div>
      <Child childNumber={1} />
    </div>
  );
};

export default Parent;
