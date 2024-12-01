import { createContext } from 'react';
import type { AuthContextType } from './types';

export const AuthContext = createContext<AuthContextType>({
  user: null,
  profile: null,
  loading: true,
});