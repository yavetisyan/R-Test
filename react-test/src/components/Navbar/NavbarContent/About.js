import React, { useContext } from "react";
import LanguageContext from "../../../context/DispatchContext";
import withBorder from "../../../hoc/withBorder";

const About = (props) => {
  const lng = useContext(LanguageContext);
  return (
    <div>
      {lng === "EN" ? (
        <div>
          This is Home component
          <h1
            style={{
              color: lng === "EN" ? "black" : "red",
              fontStyle: "italic",
            }}
          >
            {props.aboutText}
          </h1>
          <h3>{lng}</h3>
        </div>
      ) : (
        <div>
          Загаловок 'О Нас'
          <h1
            style={{
              color: lng === "EN" ? "black" : "red",
              fontStyle: "italic",
            }}
          >
            Это компонент О Нас
          </h1>
          <h3>{lng}</h3>
        </div>
      )}
    </div>
  );
};

export default withBorder(About);
