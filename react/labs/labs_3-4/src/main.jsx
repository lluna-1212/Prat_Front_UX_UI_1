import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.jsx";

// Provider creado para el primer ejemplo:
// import { AuthProvider } from "./providers/authProvider.jsx";

// Provider importado desde auth/index.js:
import { AuthProvider } from './auth';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      {/* Tenemos acceso a los datos del AuthProvider: user, login, logout */}
      <App />
    </AuthProvider>
  </StrictMode>
);
