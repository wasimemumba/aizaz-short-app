import React, { Suspense } from "react";

// Lazy load HeavyComponent
const HeavyComponent = React.lazy(() => import("./HeavyComponent"));

const LazyLoadingExample: React.FC = () => {
  return (
    <div>
      <h1>Lazy Loading Example</h1>
      <Suspense fallback={<div>Loading...</div>}>
        {/* HeavyComponent will only be loaded when this is rendered */}
        <HeavyComponent />
      </Suspense>
    </div>
  );
};

export default LazyLoadingExample;
