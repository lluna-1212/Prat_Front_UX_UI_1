import { useState } from 'react';
import AuthCtx from './authContext';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const login  = (u) => setUser(u);
  const logout = () => setUser(null);

  return (
    <AuthCtx.Provider value={{ user, login, logout }}>
      {children}
    </AuthCtx.Provider>
  );
}