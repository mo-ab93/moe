'use client';

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

type Direction = 'a' | 'b';

interface ThemeContextValue {
  isDark: boolean;
  direction: Direction;
  toggleTheme: () => void;
  setDirection: (d: Direction) => void;
  accentColor: string;
}

const ThemeContext = createContext<ThemeContextValue>({
  isDark: false,
  direction: 'a',
  toggleTheme: () => {},
  setDirection: () => {},
  accentColor: '#b8472a',
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(false);
  const [direction, setDirection] = useState<Direction>('a');

  useEffect(() => {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
    document.body.setAttribute('data-direction', direction);
  }, [isDark, direction]);

  const accentColor =
    direction === 'a'
      ? isDark ? '#daaf2c' : '#b8472a'
      : isDark ? '#b8472a' : '#daaf2c';

  return (
    <ThemeContext.Provider
      value={{
        isDark,
        direction,
        toggleTheme: () => setIsDark((prev: boolean) => !prev),
        setDirection,
        accentColor,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
