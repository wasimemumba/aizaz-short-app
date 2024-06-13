import { useState } from "react";
import { MyProvider } from "../context/myContext";
import Parent from "../components/Parent";

function UseContextExample() {
  const [count, setCount] = useState(0);

  return (
    <MyProvider value={{ count, setCount }}>
      <div className="UseContextExample">
        <Parent />
      </div>
    </MyProvider>
  );
}

export default UseContextExample;
