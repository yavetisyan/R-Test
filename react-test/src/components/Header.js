import React from "react";
import { makeStyles } from "@mui/styles";

const headerStyle = makeStyles({
  header: {
    height: 100,
    backgroundColor: "#000957",
    color: "#EBE645",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 40,
  },
});

function Header() {
  const classes = headerStyle();

  return <div className={classes.header}>Header</div>;
}

export default Header;
