import React, { useContext } from "react";
import { Routes, Route, Link } from "react-router-dom";
import About from "./NavbarContent/About";
import Home, { HomeWithBorder } from "./NavbarContent/Home";
import Contact from "./NavbarContent/Contact";
import Admin from "./NavbarContent/Admin";
import { makeStyles } from "@mui/styles";
import ThemeContext from "../../context/ThemeContext";

const navStyle = makeStyles({
  navLink: {
    margin: 10,
    textTransform: "uppercase",
    textDecoration: "none",
    color: "black",
  },
});

function Navbar() {
  const classes = navStyle();
  const { theme, setTheme } = useContext(ThemeContext);
  console.log(theme, setTheme);


  return (
    <div> 
      <div
        style={{
          display: "flex",
          margin: 20,
          justifyContent: "space-between",
        }}
      >
        {theme === "EN" ? (
          <nav>
            <Link to="Home" className={classes.navLink}>
              Home
            </Link>
            <Link to="About" className={classes.navLink}>
              About
            </Link>
            <Link to="/Contact" className={classes.navLink}>
              Contact
            </Link>
          </nav>
        ) : (
          <nav>
            <Link to="Home" className={classes.navLink}>
              Дом
            </Link>
            <Link to="About" className={classes.navLink}>
              Нас
            </Link>
            <Link to="/Contact" className={classes.navLink}>
              Контакт
            </Link>
          </nav>
        )}

        <div>
          <label>EN</label>
          <input
            type="radio"
            name="language"
            value="Eng"
            style={{ marginRight: 10 }}
            checked={theme === "EN"}
            onChange={() => setTheme("EN")}
          />
          <label>RU</label>
          <input
            type="radio"
            name="language"
            value="red"
            style={{ marginRight: 10 }}
            checked={theme === "RU"}
            onChange={() => setTheme("RU")}
          />
        </div>
      </div>

      <Routes>
        <Route index element={<Home homeComp="oooooo" />} />
        <Route
          path="/Home"
          element={<HomeWithBorder borderColor="yellow" homeComp="This is Home" />}
        />
        <Route
          path="/About"
          element={<About borderColor="blue" aboutText="mi ban eli about" />}
        />
        <Route
          path="/Contact"
          element={
            <Contact borderColor="red" contactText="mi ban eli contact" />
          }
        />
        <Route path="/Admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default Navbar;
