import React, { useContext } from "react";
import ThemeContext from "../../../context/ThemeContext";
import withBorder from "../../../hoc/withBorder";

const About = (props) => {
  const { theme } = useContext(ThemeContext);
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
            {props.aboutText}
          </h1>
          <h3>{theme}</h3>
        </div>
      ) : (
        <div>
          Загаловок 'О Нас'
          <h1
            style={{
              color: theme === "EN" ? "black" : "red",
              fontStyle: "italic",
            }}
          >
            Это компонент О Нас
          </h1>
          <h3>{theme}</h3>
        </div>
      )}
    </div>
  );
};

export default withBorder(About);
