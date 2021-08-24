import React, { createContext, useCallback, useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { storage } from '../utils/storage';

const getTheme = () => storage.get('preferences')?.darkTheme;

const setTheme = (isDark) =>
  storage.set('preferences', {
    ...storage.get('preferences'),
    darkTheme: isDark,
  });

const initialState = {
  darkTheme: getTheme() || false,
  toogleTheme: () => null,
};

const ThemeContext = createContext(initialState);
ThemeContext.displayName = 'Theme';

export const useThemeContext = () => useContext(ThemeContext);

export const DarkThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(initialState.darkTheme);

  const toogleTheme = useCallback(() => {
    setDarkTheme((prev) => {
      setTheme(!prev);
      return !prev;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ darkTheme, toogleTheme }}>
      <ThemeProvider theme={{ isDark: darkTheme }}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
