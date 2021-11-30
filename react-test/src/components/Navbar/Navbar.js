import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import About from "./NavbarContent/About";
import Home from "./NavbarContent/Home";
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

  return (
    <div>
      <div style={{ display: "flex", margin: "20px 0" }}>
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
      </div>

      <Routes>
        <Route index element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default Navbar;
