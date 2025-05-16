import { useCallback, useEffect, useState } from 'react';

function usePersistentState(key, initialValue) {
  const [state, setState] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored !== null ? JSON.parse(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export function useCounter() {
  const [count, setCount] = usePersistentState('counter', 0);

  const increment = useCallback(() => setCount(c => c + 1), []);
  const decrement = useCallback(() => setCount(c => c - 1), []);

  return { count, increment, decrement };
}