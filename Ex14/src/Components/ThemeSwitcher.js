import React, { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemedButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isLight = theme === "light";

  return (
    <button
      onClick={toggleTheme}
      style={{
        backgroundColor: isLight ? "white" : "skyblue",
        color: "black",
        border: "2px solid black",
        fontSize: "20px",
        padding: "8px 16px",
        borderRadius: "6px",
        boxShadow: "2px 2px 3px gray",
      }}
    >
      Toggle Theme
    </button>
  );
}

function ThemeSwitcher() {
  return (
    <div>
      <ThemeProvider>
        <ThemedButton />
      </ThemeProvider>
    </div>
  );
}

export default ThemeSwitcher;
