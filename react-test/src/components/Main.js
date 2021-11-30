import React from "react";
import Header from "./Header";
import Navbar from "./Navbar/Navbar";

function Main() {
  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
      <Header />
      <Navbar />
    </div>
  );
}

export default Main;
