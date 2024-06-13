import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import UseMemoExample from "./components/UseMemoExample.tsx";
import UseCallbackExample from "./components/UseCallbackExample.tsx";
import UseReducerExample from "./components/UseReducerExample.tsx";
import UseRefExample from "./components/UseRefExample.tsx";
import UseContextExample from "./components/UseContextExample.tsx";
import Layout from "./components/Layout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/useContext",
        element: <UseContextExample />,
      },
      {
        path: "/useMemo",
        element: <UseMemoExample a={5} b={10} />,
      },
      {
        path: "/useCallback",
        element: <UseCallbackExample />,
      },
      {
        path: "/useReducer",
        element: <UseReducerExample />,
      },
      {
        path: "/useRef",
        element: <UseRefExample />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
