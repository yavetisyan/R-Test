import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import About from "./NavbarContent/About";
import Home, { HomeWithBorder } from "./NavbarContent/Home";
import Contact from "./NavbarContent/Contact";
import Admin from "./NavbarContent/Admin";
import { makeStyles } from "@mui/styles";

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
  const [theme, setTheme] = useState("Black");
  return (
    <div>
      <div
        style={{ display: "flex", margin: 20, justifyContent: "space-between" }}
      >
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
        <div>
          <label for="Black">Black</label>
          <input
            type="radio"
            name="language"
            value="Black"
            style={{ marginRight: 10 }}
            checked={theme === "black"}
            onChange={() => setTheme("black")}
          />
          <label for="Red">Red</label>
          <input
            type="radio"
            name="language"
            value="red"
            style={{ marginRight: 10 }}
            checked={theme === "red"}
            onChange={() => setTheme("red")}
          />
        </div>
      </div>

      <Routes>
        <Route index element={<Home aaa="oooooo" />} />
        <Route
          path="/Home"
          element={<Home aaa="oooooo" borderColor="yellow" theme={theme} />}
        />
        <Route
          path="/About"
          element={<About asd="mi ban eli about" borderColor="blue" />}
        />
        <Route
          path="/Contact"
          element={<Contact dsa="mi ban eli contact" borderColor="red" />}
        />
        <Route path="/Admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default Navbar;
