import React, { useReducer } from "react";
import {
  CHANGE_THEME,
  DECREMENT_COUNT,
  INCREMENT_COUNT,
  LNG_CHANGE,
} from "../constants/actionTypes";
import ThemeContext from "../context/ThemeContext";
import LanguageContext from "../context/DispatchContext";
import Header from "./Header";
import Navbar from "./Navbar/Navbar";
import DispatchContext from "../context/DispatchContext";

const initialState = {
  count: 0,
  lng: "EN",
  theme: "light",
};

function reducer(state, action) {
  console.log(state, action, "Reducer called");
  switch (action.type) {
    case INCREMENT_COUNT:
      return { ...state, count: state.count + 1 };
    case DECREMENT_COUNT:
      return { ...state, count: state.count - 1 };
    case CHANGE_THEME:
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    case LNG_CHANGE:
      return {
        ...state,
        lng: action.payload,
      };
    default:
      throw new Error();
  }
}

function Main() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <LanguageContext.Provider value={state.lng}>
        <ThemeContext.Provider value={state.theme}>
          <div
            style={{
              maxWidth: "1000px",
              margin: "0 auto",
              //backgroundColor: state.theme === "light" ? "dark" : "light",
            }}
          >
            <div>
              Count:{state.count}
              <button onClick={() => dispatch({ type: DECREMENT_COUNT })}>
                -
              </button>
              <button onClick={() => dispatch({ type: INCREMENT_COUNT })}>
                +
              </button>
            </div>
            <Header dispatch={dispatch} />
            {/*<Navbar />*/}
          </div>
        </ThemeContext.Provider>
      </LanguageContext.Provider>
    </DispatchContext.Provider>
  );
}

export default Main;
