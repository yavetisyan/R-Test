import React, { useContext } from "react";
import ThemeContext from "../../../context/ThemeContext";
import withBorder from "../../../hoc/withBorder";

const About = ({ asd, isWithBorder }) => {

	const {theme} = useContext(ThemeContext);
  return (
    <div>
     
			
      <h1>{theme === 'EN' ?  asd : <div>Это страница О Нас</div>}</h1>
      <h3>{!!isWithBorder + ""}</h3>
    </div>
  );
};
export default withBorder(About);
