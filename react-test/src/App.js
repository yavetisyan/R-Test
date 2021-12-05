import React from "react";
import "./App.css";
import Main from "./components/Main";
import { BrowserRouter } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import store from "./hoc/redux/store";

function App() {
  const name = useSelector(function (state) {
    return state.currentUser.name;
  });
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Main />
        <h1>{name}</h1>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
