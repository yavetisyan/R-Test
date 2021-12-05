import React, { useContext } from "react";
import LanguageContext from "../../../context/DispatchContext";
import withBorder from "../../../hoc/withBorder";

const Contact = (props) => {
  const lng = useContext(LanguageContext);

  return (
    <div>
      {lng === "EN" ? (
        <div>
          This is Cotact component
          <h1
            style={{
              color: lng === "EN" ? "black" : "red",
              fontStyle: "italic",
            }}
          >
            {props.contactText}
          </h1>
          <h3>{lng}</h3>
        </div>
      ) : (
        <div>
          Загаловок 'Кантакты'
          <h1
            style={{
              color: lng === "EN" ? "black" : "red",
              fontStyle: "italic",
            }}
          >
            Это страница Контакты
          </h1>
          <h3>{lng}</h3>
        </div>
      )}
    </div>
  );
};

export default withBorder(Contact);
