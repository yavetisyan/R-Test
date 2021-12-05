import React, { useContext } from "react";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import Home from "./Navbar/NavbarContent/Home";
import { Routes, Route } from "react-router-dom";
import LanguageContext from "../context/DispatchContext";
import Switch from "@mui/material/Switch";
import ThemeContext from "../context/ThemeContext";

import DispatchContext from "../context/DispatchContext";
import { CHANGE_THEME, LNG_CHANGE } from "../constants/actionTypes";

const headerStyle = makeStyles({
  header: {
    height: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 40,

    //		color: "#EBE645",
  },

  header__top: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
  },

  bgColor_L: {
    backgroundColor: "#222",
    color: "#aacaca",
    transition: "all .3s",
    textDecoration: "none",
    fontWeight: "bold",
  },
  bgColor_D: {
    backgroundColor: "#cad5ff",
    color: "#063464",
    transition: "all .3s",
    textDecoration: "none",
    fontWeight: "bold",
  },
});

function Header(props) {
  const classes = headerStyle();
  const lng = useContext(LanguageContext);
  const theme = useContext(ThemeContext);
  const dispatch = useContext(DispatchContext);

  const handleChange = (e) => {
    props.dispatch({ type: CHANGE_THEME });
    //dispatch({ type: CHANGE_THEME });
  };

  const handleChangeLang = (e) => {
    dispatch({ type: LNG_CHANGE, payload: e.target.checked ? "RU" : "EN" });
  };
  return (
    <div>
      <div className={classes.header__top}>
        <div>
          ENG
          {<Switch checked={lng === "RU"} onChange={handleChangeLang} />}
          RU
        </div>
        <div>
          Light
          {<Switch checked={theme === "dark"} onChange={handleChange} />}
          Dark
        </div>
      </div>
      <div>
        <div
          className={theme === "light" ? classes.bgColor_D : classes.bgColor_L}
        >
          {lng === "EN" ? (
            <div className={classes.header}>
              <Link
                to={"/"}
                className={
                  theme === "light" ? classes.bgColor_D : classes.bgColor_L
                }
              >
                Header
              </Link>
            </div>
          ) : (
            <div className={classes.header}>
              <Link
                to={"/"}
                className={
                  theme === "light" ? classes.bgColor_D : classes.bgColor_L
                }
              >
                Загалвок
              </Link>
            </div>
          )}
        </div>

        <div>
          <Routes>
            <Route path={"Admin"} element={<Home />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Header;
