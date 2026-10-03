import { Sun, Moon } from "lucide-react";

/**
 * Animated Theme Switcher button (Light / Dark mode)
 */
export default function ThemeToggle({ isDark, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="theme-toggle-btn"
      type="button"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <div className={`theme-toggle-slider ${isDark ? "is-dark" : "is-light"}`}>
        <Sun className="theme-icon sun-icon" size={17} />
        <Moon className="theme-icon moon-icon" size={17} />
      </div>
      <span className="theme-label">{isDark ? "Dark" : "Light"}</span>
    </button>
  );
}
