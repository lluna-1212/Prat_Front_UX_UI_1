import { createContext, useContext, useState } from 'react';
   const CounterContext = createContext();
    export function CounterProvider({ children }) {
     const [count, setCount] = useState(0);
      const increment = () => setCount(c => c + 1);
      const decrement = () => setCount(c => c - 1);
     return (
        <CounterContext.Provider value={{ count, increment, decrement }}>
          {children}
        </CounterContext.Provider>
      );
    }
    export const useCounter = () => useContext(CounterContext);