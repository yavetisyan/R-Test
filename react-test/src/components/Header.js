import React from "react";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import Home from "./Navbar/NavbarContent/Home";
import { Routes, Route } from "react-router-dom";

const headerStyle = makeStyles({
  header: {
    height: 100,
    backgroundColor: "#000957",
    color: "#EBE645",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 40,
    textDecoration: "none",
		fontWeight:'bold'
  },
});

function Header() {
  const classes = headerStyle();

  return (
    <div>
      <Link to={"/"} className={classes.header}>
        Header
      </Link>

      <div>
        {/*<Routes>
          <Route path={'Admin'} element={<Admin />} />
        </Routes>*/}
      </div>
    </div>
  );
}

export default Header;
