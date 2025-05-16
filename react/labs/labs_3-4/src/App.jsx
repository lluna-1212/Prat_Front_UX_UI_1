import { useState } from 'react';
import { AuthProvider } from './providers/AuthProvider';
import { DummyLogin } from './providers/AuthProvider';
import { CounterProvider } from './providers/counterProvider';
import Counter from './Counter';

function App() {
  return (
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
              }}>&lt;App.jsx&gt;</code> is Amazing v2 🐴🐴🐴
          </h1>
          <hr />
          <DummyLogin />
          <hr />
          <CounterProvider>
            <Counter />
            </CounterProvider>
          </header>
        </div>
    </AuthProvider>
  );
}

export default App;
