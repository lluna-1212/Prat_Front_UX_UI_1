import { useState } from 'react';

// Primer ejemplo:
// import { useAuth } from './contexts/authContext';

// Importación desde auth/index.js:
import { useAuth } from './auth';

import './App.css'
import { CounterProvider } from './providers/counterProvider';
import Counter from './Counter';

function LoginForm() {
  const { user, login } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      login({ id: 1, name: 'Pepe' });
      setLoading(false);
    }, 1000);
  };

  // Si ya hay user, no renderizamos nada (o podrías devolver otro UI)
  if (user) return null;

  return (
    <button onClick={handleLogin} disabled={loading}>
      {loading ? 'Iniciando sesión...' : 'Iniciar sesión'}
    </button>
  );
}

function UserProfile() {
  const { user, logout } = useAuth();

  if (!user) {
    return <p>No estás autenticado.</p>;
  }

  return (
    <div>
      <p>¡Hola, {user.name}!</p>
      <button onClick={logout}>Cerrar sesión</button>
    </div>
  );
}

function App() {
  return (
    <>      
      <h1>My Pony is Amazing 🐴</h1>
      <UserProfile />
      <LoginForm />
      <hr />
      {/* Contador con su Provider: */}
      <CounterProvider>
        <Counter />
      </CounterProvider>
    </>
  );
}

export default App;
