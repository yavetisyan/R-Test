import React, { useContext } from "react";
import ThemeContext from "../../../context/ThemeContext";
import withBorder from "../../../hoc/withBorder";

const Contact = (props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      This is Cotact component
      <h1
        style={{
          color: theme === "EN" ? "black" : "red",
          fontStyle: "italic",
        }}
      >
        {theme === "EN" ? props.contactText : "Это страница Контакты"}
      </h1>
      <h3>{!!props.isWithBorder + ""}</h3>
    </div>
  );
};

export default withBorder(Contact);
