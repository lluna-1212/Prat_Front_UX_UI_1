import { useState } from 'react';
import { useAuth } from './context/authContext';
import './App.css'

function LoginForm() {
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    // Simula una llamada a API
    setTimeout(() => {
      login({ id: 1, name: 'Pepe' });
      setLoading(false);
    }, 1000);
  };

  return (
    <button onClick={handleLogin} disabled={loading}>
      {/* Se puede hacer con Suspense... */}
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
    </>
  );
}

export default App;
