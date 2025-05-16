import { useCounter } from './providers/counterProvider';

export default function Counter() {
    const { count, increment, decrement } = useCounter();

    return (
        <>
            <h2 style={{
                width: '80%', 
                fontSize: '1.5rem', 
                margin: '1em auto', 
                textAlign: 'center'
                }}>
                Contador: {count}
            </h2>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                fontFamily: 'sans-serif',
                padding: '1rem',
                margin: '0 auto'
            }}>
                <button onClick={decrement}>-</button>
                <span>{count}</span>
                <button onClick={increment}>+</button>
            </div>
        </>
    );
}