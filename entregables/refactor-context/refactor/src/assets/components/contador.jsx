import { useCounter } from './useCounter';

export default function Counter() {
  const { count, increment, decrement } = useCounter();

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontFamily: 'sans-serif',
      padding: '1rem',
    }}>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}