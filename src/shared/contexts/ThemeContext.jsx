import { createContext, useContext, useState, useEffect } from "react";

const STORAGE_KEY = "coremarket-tema";

// ==========================================
// Contexto & Provider
// ==========================================

const ThemeContext = createContext();

export function ThemeProvider({ children }) {

  // Detecta a preferência inicial (localStorage > sistema > default)
  const [tema, setTema] = useState(() => {
    if (typeof window === "undefined") return "light";

    const salvo = window.localStorage?.getItem(STORAGE_KEY);
    if (salvo) return salvo;

    const prefereDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
    return prefereDark ? "dark" : "light";
  });

  // Atualiza a classe no HTML e persiste a escolha no localStorage
  useEffect(() => {
    const root = document.documentElement;

    if (tema === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    try {
      window.localStorage?.setItem(STORAGE_KEY, tema);
    } catch {
      // localStorage indisponível (ex: navegação anônima em alguns navegadores)
    }
  }, [tema]);

  function alternarTema() {
    setTema((prev) => (prev === "dark" ? "light" : "dark"));
  }

  return (
    <ThemeContext.Provider
        value={{
          tema,
          isDark: tema === "dark",
          toggleTheme: alternarTema,
          alternarTema,
          setTema,
        }}
      >
      {children}
    </ThemeContext.Provider>
  );
}

// ==========================================
// Custom Hook
// ==========================================

export function useTheme() {
  const ctx = useContext(ThemeContext);

  if (!ctx) {
    throw new Error("useTheme deve ser usado dentro de um ThemeProvider");
  }

  return ctx;
}