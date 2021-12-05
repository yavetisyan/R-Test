import React, { useContext } from "react";
import ThemeContext from "../../../context/ThemeContext";
import LanguageContext from "../../../context/DispatchContext";
import withBorder from "../../../hoc/withBorder";

const Home = (props) => {
  const lng = useContext(LanguageContext);
  const handleChange = useContext(ThemeContext);

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
            {props.homeComp}
          </h1>
          <h3>{lng}</h3>
          <h3>{handleChange}</h3>
        </div>
      ) : (
        <div>
          Загаловок 'Дом'
          <h1
            style={{
              color: lng === "EN" ? "black" : "red",
              fontStyle: "italic",
            }}
          >
            Это компонент дома
          </h1>
          <h3>{lng}</h3>
          <h3>{handleChange}</h3>
        </div>
      )}
    </div>
  );
};

export const HomeWithBorder = withBorder(Home);

export default Home;
