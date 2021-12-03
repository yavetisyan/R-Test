import React, { useContext } from "react";
import GlobalContext from "../../../context/GlobalContext";
import ThemeContext from "../../../context/ThemeContext";
import withBorder from "../../../hoc/withBorder";

const Home = (props) => {
  const { theme } = useContext(ThemeContext);
  const { checked } = useContext(GlobalContext);

  return (
    <div>
      {theme === "EN" ? (
        <div>
          This is Home component
          <h1
            style={{
              color: theme === "EN" ? "black" : "red",
              fontStyle: "italic",
            }}
          >
            {props.homeComp}
          </h1>
          <h3>{theme}</h3>
          <h3>{checked}</h3>
        </div>
      ) : (
        <div>
          Загаловок 'Дом'
          <h1
            style={{
              color: theme === "EN" ? "black" : "red",
              fontStyle: "italic",
            }}
          >
            Это компонент дома
          </h1>
          <h3>{theme}</h3>
          <h3>{checked}</h3>
        </div>
      )}
    </div>
  );
};

export const HomeWithBorder = withBorder(Home);

export default Home;
