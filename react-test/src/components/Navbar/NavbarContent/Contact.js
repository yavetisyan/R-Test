import React from "react";
import withBorder from "../../../hoc/withBorder";

const Contact = (props) => {
  return (
    <div>
      This is Cotact component
      <h1>{props.dsa}</h1>
      <h3>{!!props.isWithBorder + ""}</h3>
    </div>
  );
};

export default withBorder(Contact);
