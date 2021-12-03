import React, { useState } from "react";
import GlobalContext from "../context/GlobalContext";
import ThemeContext from "../context/ThemeContext";
import Header from "./Header";
import Navbar from "./Navbar/Navbar";

function Main() {
  const [theme, setTheme] = useState("EN");
  const [checked, setChecked] = useState("light");
  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        setTheme: setTheme,
      }}
    >
      <GlobalContext.Provider
        value={{
          checked: checked,
          setChecked: setChecked,
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <Header />
          <Navbar />
        </div>
      </GlobalContext.Provider>
    </ThemeContext.Provider>
  );
}

export default Main;
