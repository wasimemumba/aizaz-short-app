import React, { useState, useEffect } from "react";

const generateLargeList = (size: number) => {
  return Array.from({ length: size }, (_, index) => `Item ${index + 1}`);
};

const HeavyComponent: React.FC = () => {
  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    // Simulate a heavy computation task
    const largeList = generateLargeList(10000); // Generating a list of 10,000 items
    setItems(largeList);
  }, []);

  return (
    <div>
      <h2>This is a heavy component that was lazy loaded!</h2>
      <div style={{ overflow: "auto", height: "400px" }}>
        {items.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
};

export default HeavyComponent;
