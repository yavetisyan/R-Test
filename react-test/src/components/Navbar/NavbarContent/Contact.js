import React, { useContext } from "react";
import ThemeContext from "../../../context/ThemeContext";
import withBorder from "../../../hoc/withBorder";

const Contact = (props) => {
  const { theme } = useContext(ThemeContext);

  return (
  <div>
		{theme==='EN' ? (
			<div>
      This is Cotact component
      <h1
        style={{
          color: theme === "EN" ? "black" : "red",
          fontStyle: "italic",
        }}
      >
        {props.contactText }
      </h1>
      <h3>{theme}</h3>
    </div>
		):(  <div>
      Загаловок 'Кантакты'
      <h1
        style={{
          color: theme === "EN" ? "black" : "red",
          fontStyle: "italic",
        }}
      >
        Это страница Контакты
      </h1>
      <h3>{theme}</h3>
    </div>)}
	</div>
  );
};

export default withBorder(Contact);
