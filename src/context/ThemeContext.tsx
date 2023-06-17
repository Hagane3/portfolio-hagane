'use client';

import { createContext, useContext, useState, useEffect } from 'react';

type themeContextType = {
  theme: string;
  setThemeHandler: () => void;
};

type Props = {
  children: React.ReactNode;
};

const themeContextDefaultValues: themeContextType = {
  theme: 'dark',
  setThemeHandler: () => {},
};

const ThemeContext = createContext<themeContextType>(themeContextDefaultValues);

export function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    if (!localStorage.getItem('theme')) {
      localStorage.setItem('theme', theme);
    } else {
      setTheme(localStorage.getItem('theme')!);
    }
    document.body.dataset.theme = theme;
  }, [theme]);

  const setThemeHandler = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    localStorage.setItem('theme', theme === 'dark' ? 'light' : 'dark');
  };

  return <ThemeContext.Provider value={{ theme, setThemeHandler }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}
