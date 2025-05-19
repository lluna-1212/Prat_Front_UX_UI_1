import { useState } from 'react';
import { AuthProvider } from './providers/AuthProvider';
import { DummyLogin } from './providers/AuthProvider';
import { CounterProvider } from './providers/counterProvider';
import Counter from './Counter';

function App() {
  return (
    // Provider global para login:
    <AuthProvider>
      <div className="App" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        fontFamily: 'sans-serif',
        padding: '1rem',
        margin: '0 auto'
      }}>
        <header className="App-header">
          <h1 style={{
            width: '80%', 
            fontSize: '2rem', 
            margin: '1em auto', 
            textAlign: 'center'
            }}>
              My <code style={{
                fontFamily: 'monospace',
                fontStyle: 'italic',
              }}>&lt;App.jsx</code> is Amazing v2 🐴🐴🐴
          </h1>
          <hr />
          <DummyLogin />
          <hr />
          {/* Contador con su Provider: */}
          <CounterProvider>
            <Counter />
            </CounterProvider>
          </header>
        </div>
    </AuthProvider>
  );
}

export default App;
