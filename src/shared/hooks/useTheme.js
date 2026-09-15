import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext.jsx'

/** Reads the current theme + toggler from ThemeContext. */
export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within a ThemeProvider')
  return ctx
}
