import React, { useContext } from "react";
import ThemeContext from "../../../context/ThemeContext";
import withBorder from "../../../hoc/withBorder";

const Home = (props) => {
  const value = useContext(ThemeContext);
  return (
    <div>
      This is Home component
      <h1X
        style={{
          color: value === "EN" ? "black" : "red",
          fontStyle: "italic",
        }}
      >
        {value === "EN" ? props.homeComp : "Это компонент дома"}
      </h1X>
      <h3>{!!props.isWithBorder + ""}</h3>
    </div>
  );
};

export const HomeWithBorder = withBorder(Home);

export default Home;
