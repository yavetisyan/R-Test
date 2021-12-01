import React from "react";
import withBorder from "../../../hoc/withBorder";

const Home = (props) => {
  return (
    <div>
      This is Home component
      <h1
        style={{
          color: props.theme === "black" ? "black" : "red",
        }}
      >
        {props.aaa}
      </h1>
      <h3>{!!props.isWithBorder + ""}</h3>
    </div>
  );
};

export const HomeWithBorder = withBorder(Home);

export default Home;
