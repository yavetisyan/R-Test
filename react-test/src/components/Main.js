import React, { useState } from "react";
import ThemeContext from "../context/ThemeContext";
import Header from "./Header";
import Navbar from "./Navbar/Navbar";

function Main() {
  const [theme, setTheme] = useState("EN");
  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        setTheme: setTheme,
      }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <Header />
        <Navbar />
      </div>
    </ThemeContext.Provider>
  );
}

export default Main;
