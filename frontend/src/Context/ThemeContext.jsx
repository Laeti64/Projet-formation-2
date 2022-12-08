import { createContext, useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";

export const ThemeContext = createContext({});

function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const handleToggleDarkMode = () => {
    if (theme === "dark") {
      setTheme("light");
    }
    if (theme === "light") {
      setTheme("dark");
    }
  };

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
    }
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, [theme]);

  const memoContext = useMemo(() => ({ theme, handleToggleDarkMode }), [theme]);

  return (
    <ThemeContext.Provider value={memoContext}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
ThemeContextProvider.propTypes = {
  children: PropTypes.string.isRequired,
};
