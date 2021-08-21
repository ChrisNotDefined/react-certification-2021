import React, { createContext, useContext } from 'react';
import { useAuth } from '../utils/hooks';

export const AuthContext = createContext();
AuthContext.displayName = 'Auth';

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const {
    login,
    logout,
    register,
    state: { user: creds, loading, error },
  } = useAuth();

  return (
    <AuthContext.Provider value={{ login, logout, creds, loading, error, register }}>
      {children}
    </AuthContext.Provider>
  );
};
