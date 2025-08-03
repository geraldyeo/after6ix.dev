import * as React from "react"

export type Theme = "light" | "dark" | "system"

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  actualTheme: "light" | "dark"
}

const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined)

export function useTheme() {
  const context = React.useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
  enableSystem?: boolean
}

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "after6ix-theme",
  enableSystem = true,
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = React.useState<Theme>(defaultTheme)
  const [actualTheme, setActualTheme] = React.useState<"light" | "dark">("light")

  // Get system theme preference
  const getSystemTheme = React.useCallback((): "light" | "dark" => {
    if (typeof window === "undefined") return "light"
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  }, [])

  // Initialize theme from localStorage or system preference
  React.useEffect(() => {
    if (typeof window === "undefined") return

    const stored = localStorage.getItem(storageKey) as Theme | null
    if (stored && ["light", "dark", "system"].includes(stored)) {
      setTheme(stored)
    } else if (enableSystem) {
      setTheme("system")
    }
  }, [storageKey, enableSystem])

  // Update actual theme based on current theme and system preference
  React.useEffect(() => {
    const resolvedTheme = theme === "system" ? getSystemTheme() : theme
    setActualTheme(resolvedTheme)

    const root = window.document.documentElement
    root.classList.remove("light", "dark")
    root.classList.add(resolvedTheme)

    // Add theme transition class for smooth transitions
    root.classList.add("theme-transition")
    
    // Remove transition class after animation completes
    const timer = setTimeout(() => {
      root.classList.remove("theme-transition")
    }, 250)

    return () => clearTimeout(timer)
  }, [theme, getSystemTheme])

  // Listen for system theme changes
  React.useEffect(() => {
    if (!enableSystem || theme !== "system") return

    const media = window.matchMedia("(prefers-color-scheme: dark)")
    
    const handleChange = () => {
      setActualTheme(getSystemTheme())
    }

    media.addEventListener("change", handleChange)
    return () => media.removeEventListener("change", handleChange)
  }, [theme, enableSystem, getSystemTheme])

  const value = React.useMemo(() => ({
    theme,
    setTheme: (newTheme: Theme) => {
      localStorage.setItem(storageKey, newTheme)
      setTheme(newTheme)
    },
    actualTheme,
  }), [theme, actualTheme, storageKey])

  return (
    <ThemeContext.Provider {...props} value={value}>
      {children}
    </ThemeContext.Provider>
  )
}