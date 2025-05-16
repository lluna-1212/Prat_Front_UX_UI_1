import { useContext } from 'react';
import AuthCtx from './authContext';

export default function useAuth() {
  return useContext(AuthCtx);
}