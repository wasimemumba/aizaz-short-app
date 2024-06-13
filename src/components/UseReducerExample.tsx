import React, { useReducer } from "react";

// Define the initial state type
interface State {
  count: number;
}

// Define the action types
type Action = { type: "increment" } | { type: "decrement" } | { type: "reset" };

// Define the initial state
const initialState: State = { count: 0 };

// Define the reducer function
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      throw new Error("Unhandled action type");
  }
};

const Counter: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default Counter;
