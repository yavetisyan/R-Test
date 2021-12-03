import React, { useContext } from "react";
import ThemeContext from "../../../context/ThemeContext";
import withBorder from "../../../hoc/withBorder";

const Home = (props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      This is Home component
      <h1
        style={{
          color: theme === "EN" ? "black" : "red",
          fontStyle: "italic",
        }}
      >
        {theme === "EN" ? "asdas" : "Это компонент дома"}
      </h1>
      <h3>{!!props.isWithBorder + ""}</h3>
    </div>
  );
};

export const HomeWithBorder = withBorder(Home);

export default Home;
