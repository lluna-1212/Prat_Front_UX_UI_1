// Exporta **solo** lo que la app necesita: el Provider y el Hook.
// Nunca expongas AuthCtx directamente.
export { AuthProvider } from './AuthProvider';
export { default as useAuth } from './useAuth';