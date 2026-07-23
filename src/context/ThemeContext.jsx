import { createContext, useContext, useEffect, useState } from "react";

const STORAGE_KEY = "velora-theme";
const SYSTEM_THEME_QUERY = "(prefers-color-scheme: dark)";
const VALID_THEMES = ["light", "dark", "system"];

const ThemeContext = createContext(null);

function getStoredTheme() {
  try {
    const storedTheme = localStorage.getItem(STORAGE_KEY);

    return VALID_THEMES.includes(storedTheme) ? storedTheme : "system";
  } catch {
    return "system";
  }
}

function getSystemTheme() {
  return window.matchMedia(SYSTEM_THEME_QUERY).matches ? "dark" : "light";
}

function applyTheme(resolvedTheme) {
  const isDark = resolvedTheme === "dark";

  document.documentElement.classList.toggle("dark", isDark);
  document.documentElement.style.colorScheme = resolvedTheme;
}

function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(getStoredTheme);
  const [systemTheme, setSystemTheme] = useState(getSystemTheme);
  const resolvedTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    applyTheme(resolvedTheme);

    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Keep the in-memory preference when storage is unavailable.
    }

  }, [resolvedTheme, theme]);

  useEffect(() => {
    if (theme !== "system") return undefined;

    const mediaQuery = window.matchMedia(SYSTEM_THEME_QUERY);
    const handleSystemThemeChange = () => {
      setSystemTheme(getSystemTheme());
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, [theme]);

  function setTheme(nextTheme) {
    if (!VALID_THEMES.includes(nextTheme)) return;

    setThemeState(nextTheme);
  }

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { ThemeProvider, useTheme };
