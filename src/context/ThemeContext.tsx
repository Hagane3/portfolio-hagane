'use client';

import { createContext, useContext, useState, useEffect } from 'react';

type themeContextType = {
  theme: string;
  setThemeHandler: () => void;
};

type Props = {
  children: React.ReactNode;
};

const localTheme = window.localStorage.getItem('theme');

const themeContextDefaultValues: themeContextType = {
  theme: localTheme || 'dark',
  setThemeHandler: () => {},
};

const ThemeContext = createContext<themeContextType>(themeContextDefaultValues);

export function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState(localTheme || 'dark');

  useEffect(() => {
    document.body.dataset.theme = theme;
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  const setThemeHandler = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return <ThemeContext.Provider value={{ theme, setThemeHandler }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}
