import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>React Hooks Examples</h1>
      <ol className="list">
        <li className="list-item">
          <Link to="/useContext">useContext</Link>
        </li>
        <li className="list-item">
          <Link to="/useMemo">useMemo</Link>
        </li>
        <li className="list-item">
          <Link to="/useCallback">useCallback</Link>
        </li>
        <li className="list-item">
          <Link to="/useReducer">useReducer</Link>
        </li>
        <li className="list-item">
          <Link to="/useRef">useRef</Link>
        </li>
      </ol>
    </div>
  );
}

export default App;
