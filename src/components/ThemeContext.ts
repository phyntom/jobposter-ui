import { createContext } from 'react';

type Theme = {
  theme: string;
};

export const ThemeContext = createContext<Theme>({
  theme: '',
});

export function useTheme() {
  if (ThemeContext === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return ThemeContext;
}
