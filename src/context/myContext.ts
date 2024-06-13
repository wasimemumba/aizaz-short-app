import { createContext } from "react";


interface ContextType {
  count: number;
  setCount: (count: number | ((prevCount: number) => number)) => void;

}

export const MyContext = createContext<ContextType>({
  count: 0,
  setCount: () => {},
});


export const MyProvider = MyContext.Provider;