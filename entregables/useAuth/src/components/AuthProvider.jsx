// Lab 16 – Starter: useAuth con persistencia en localStorage
// -----------------------------------------------------------------------------
// 1️⃣  Implementa un AuthProvider + useAuth siguiendo las instrucciones TODO.
// 2️⃣  Añade persistencia básica usando localStorage.
// 3️⃣  Integra el provider en App.jsx y crea un login/logout de prueba.
// -----------------------------------------------------------------------------
import { createContext, useContext, useEffect, useState } from 'react';

// 📌 TODO‑1: define el shape mínimo de usuario
const initialUser = null; // o { email: "", name: "" }

const AuthContext = createContext({
  user: initialUser,
  login: (_email, _password) => {},
  logout: () => {},
});

export function AuthProvider({ children }) {
  // 📌 TODO‑2: reemplaza con useState y carga inicial desde localStorage
  const [user, setUser] = useState(initialUser);

  // Persistir cambios en localStorage
  useEffect(() => {
    if (user) {
      localStorage.setItem('auth:user', JSON.stringify(user));
    } else {
      localStorage.removeItem('auth:user');
    }
  }, [user]);

  // 📌 TODO‑3: function login / logout dummy
  const login = (email, password) => {
    // Simulación rápida (sin backend)
    const newUser = { email, name: email.split('@')[0] };
    setUser(newUser);
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

// 📌 TODO‑4: Componente de ejemplo (puedes moverlo a otra ruta)
export function DummyLogin() {
  const { user, login, logout } = useAuth();
  const [form, setForm] = useState({ email: '', password: '' });

  if (user) {
    return (
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <span>👋 Hola, {user.name}</span>
        <button onClick={logout}>Logout</button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        login(form.email, form.password);
      }}
      style={{ display: 'flex', gap: '0.5rem' }}
    >
      <input
        type="email"
        placeholder="email"
        value={form.email}
        required
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="password"
        value={form.password}
        required
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <button type="submit">Login</button>
    </form>
  );
}