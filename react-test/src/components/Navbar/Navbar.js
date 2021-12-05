import React, { useContext } from "react";
import { Routes, Route, Link } from "react-router-dom";
import About from "./NavbarContent/About";
import Home, { HomeWithBorder } from "./NavbarContent/Home";
import Contact from "./NavbarContent/Contact";
import Admin from "./NavbarContent/Admin";
import { makeStyles } from "@mui/styles";
import LanguageContext from "../../context/DispatchContext";

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
  const  lng  = useContext(LanguageContext);

  return (
    <div>
      <div
        style={{
          display: "flex",
          margin: 20,
          justifyContent: "space-between",
        }}
      >
        {lng === "EN" ? (
          <nav>
            <Link to="Home" className={classes.navLink}>
              Home
            </Link>
            <Link to="About" className={classes.navLink}>
              About
            </Link>
            <Link to="Contact" className={classes.navLink}>
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
            <Link to="Contact" className={classes.navLink}>
              Контакт
            </Link>
          </nav>
        )}
      </div>

      <Routes>
        <Route index element={<Home homeComp="oooooo" />} />
        <Route
          path="/Home/"
          element={
            <HomeWithBorder borderColor="yellow" homeComp="This is Home" />
          }
        />
        <Route
          path="/About/"
          element={<About borderColor="blue" aboutText="mi ban eli about" />}
        />
        <Route
          path="/Contact/"
          element={
            <Contact borderColor="red" contactText="mi ban eli contact" />
          }
        />
        <Route path="/Admin/" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default Navbar;
