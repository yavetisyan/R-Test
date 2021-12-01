import React from "react";
import withBorder from "../../../hoc/withBorder";

const About = ({ asd, isWithBorder }) => {
  return (
    <div>
      This is About component
      <h1>{asd}</h1>
      <h3>{!!isWithBorder + ""}</h3>
    </div>
  );
};
export default withBorder(About);
