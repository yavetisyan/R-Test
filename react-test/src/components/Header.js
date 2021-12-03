import React, { useContext, useReducer } from "react";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import Home from "./Navbar/NavbarContent/Home";
import { Routes, Route } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";
import Switch from "@mui/material/Switch";
import GlobalContext from "../context/GlobalContext";

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

const initialState = { count: 0 };

function reducer(state, action) {
  console.log(action, "reducer called");
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Header() {
  const classes = headerStyle();
  const { theme, setTheme } = useContext(ThemeContext);
  const { checked, setChecked } = useContext(GlobalContext);
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (event) => {
    setChecked(event.target.checked ? "dark" : "light");
  };
  return (
    <div>
      <div className={classes.header__top}>
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
        <div>
          Light
          {
            <Switch
              checked={checked === "dark"}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
          }
          Dark
        </div>
      </div>
      <div>
        <div
          className={
            checked === "light" ? classes.bgColor_D : classes.bgColor_L
          }
        >
          {theme === "EN" ? (
            <div className={classes.header}>
              <Link
                to={"/"}
                className={
                  checked === "light" ? classes.bgColor_D : classes.bgColor_L
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
                  checked === "light" ? classes.bgColor_D : classes.bgColor_L
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

      <div>
        Count: {state.count}
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
      </div>
    </div>
  );
}

export default Header;
