import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./providers/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      {/* Tenemos acceso a los datos del AuthProvider: user, login, logout */}
      <App />
    </AuthProvider>
  </StrictMode>
);
