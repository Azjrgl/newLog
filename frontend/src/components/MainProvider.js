import { useState, createContext, Children } from "react";

export const ThemeContext = createContext();

const MainProvider = ({ children }) => {
  const [theme, setTheme] = useState("Light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default MainProvider;
