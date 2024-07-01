import React from "react";
import { FixedSizeList } from "react-window";

const data = Array.from({ length: 100000 }, (_, index) => `Item ${index}`);

interface RowProps {
  index: number;
  style: React.CSSProperties;
}

const renderRow: React.FC<RowProps> = ({ index, style }) => (
  <div
    style={{
      ...style,
      display: "flex",
      alignItems: "center",
      borderBottom: "1px solid lightgrey",
    }}
  >
    <span>{data[index]}</span>
  </div>
);

const VirtualizedListExample: React.FC = () => (
  <div>
    <h1>Virtualized List Example</h1>
    <p>
      This example demonstrates how to use react-window to render a large list
      of items efficiently
      <br />
      Check the dom and see how only the visible items are rendered.
    </p>
    <div
      style={{
        height: "400px",
        width: "300px",
        border: "1px solid lightgrey",
      }}
    >
      <FixedSizeList
        height={400}
        width={300}
        itemCount={data.length}
        itemSize={40} // Height of each row
      >
        {renderRow}
      </FixedSizeList>
    </div>
  </div>
);

export default VirtualizedListExample;
