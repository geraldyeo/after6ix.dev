import { Button } from "./button";
import { useTheme } from "../../contexts/theme-context";

// Simple icons as React components to avoid external dependencies
const SunIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <circle cx={12} cy={12} r={5} />
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
  </svg>
);

const MoonIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const MonitorIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <rect x={2} y={3} width={20} height={14} rx={2} ry={2} />
    <path d="M8 21h8M12 17v4" />
  </svg>
);

interface ThemeToggleProps {
  variant?: "button" | "dropdown";
  size?: "sm" | "default" | "lg";
}

export function ThemeToggle({ variant = "button", size = "default" }: ThemeToggleProps) {
  const { theme, setTheme, actualTheme } = useTheme();

  if (variant === "button") {
    return (
      <Button
        variant="outline"
        size={size === "sm" ? "sm" : "default"}
        onClick={() => {
          if (theme === "light") {
            setTheme("dark");
          } else if (theme === "dark") {
            setTheme("system");
          } else {
            setTheme("light");
          }
        }}
        className="relative"
        aria-label={`Switch to ${theme === "light" ? "dark" : theme === "dark" ? "system" : "light"} theme`}
      >
        <SunIcon className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <MoonIcon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  // Dropdown variant with all options
  return (
    <div className="relative">
      <Button
        variant="outline"
        size={size === "sm" ? "sm" : "default"}
        className="w-40 justify-between"
        onClick={() => {
          // Cycle through themes: light -> dark -> system -> light
          if (theme === "light") {
            setTheme("dark");
          } else if (theme === "dark") {
            setTheme("system");
          } else {
            setTheme("light");
          }
        }}
      >
        <div className="flex items-center gap-2">
          {theme === "light" && <SunIcon className="h-4 w-4" />}
          {theme === "dark" && <MoonIcon className="h-4 w-4" />}
          {theme === "system" && <MonitorIcon className="h-4 w-4" />}
          <span className="capitalize">
            {theme === "system" ? `System (${actualTheme})` : theme}
          </span>
        </div>
      </Button>
    </div>
  );
}

interface ThemeToggleGroupProps {
  className?: string;
}

export function ThemeToggleGroup({ className }: ThemeToggleGroupProps) {
  const { theme, setTheme, actualTheme } = useTheme();

  return (
    <div className={`flex rounded-lg border border-border p-1 ${className}`}>
      <Button
        variant={theme === "light" ? "default" : "ghost"}
        size="sm"
        onClick={() => { setTheme("light"); }}
        className="flex-1"
      >
        <SunIcon className="h-4 w-4 mr-2" />
        Light
      </Button>
      <Button
        variant={theme === "dark" ? "default" : "ghost"}
        size="sm"
        onClick={() => { setTheme("dark"); }}
        className="flex-1"
      >
        <MoonIcon className="h-4 w-4 mr-2" />
        Dark
      </Button>
      <Button
        variant={theme === "system" ? "default" : "ghost"}
        size="sm"
        onClick={() => { setTheme("system"); }}
        className="flex-1"
        title={`System theme (currently ${actualTheme})`}
      >
        <MonitorIcon className="h-4 w-4 mr-2" />
        System
      </Button>
    </div>
  );
}