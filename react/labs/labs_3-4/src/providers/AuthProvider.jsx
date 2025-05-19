import React, { useState, useEffect } from 'react';
import { AuthCtx } from '../contexts/authContext';

export function DummyLogin() {
  const { user, login, logout } = useAuth();
  const [form, setForm] = useState({ email: '', password: '' });

  if (user) {
    return (
      <div style={{
        display: 'flex',
        gap: '1rem',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <span>👋 Hola, {user.name}</span>
        <button onClick={logout}>Logout</button>
      </div>
    );
  }

  return (
    <>
      <h2 style={{ textAlign: 'center' }}>🦄 My Login is Amazing 🦄</h2>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
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
          autoComplete="username"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="password"
          value={form.password}
          required
          autoComplete="current-password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button type="submit">Login</button>
      </form>
      </div>
    </>
  );
}

export function useAuth() {
  return React.useContext(AuthCtx);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('auth:user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Persist user to localStorage
  useEffect(() => {
    if (user) {
      localStorage.setItem('auth:user', JSON.stringify(user));
    } else {
      localStorage.removeItem('auth:user');
    }
  }, [user]);

  const login = async (email, password) => {
    try {
      const response = await fetch('http://localhost:3001/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        setUser(data.user);
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error('Login error:', error);
      alert("You shall not pass!");
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthCtx.Provider value={{ user, login, logout }}>
      {children}
    </AuthCtx.Provider>
  );
}
