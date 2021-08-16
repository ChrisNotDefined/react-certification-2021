import React, { createContext, useContext } from 'react';
import { useAuth } from '../utils/hooks/useAuth';

export const AuthContext = createContext();
AuthContext.displayName = 'Auth';

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const {
    login,
    logout,
    state: { user, loading, error },
  } = useAuth();

  return (
    <AuthContext.Provider value={{ login, logout, user, loading, error }}>
      {children}
    </AuthContext.Provider>
  );
};
