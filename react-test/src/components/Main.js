import React, { useState } from "react";
import Content from "./Content";
import Header from "./Header";
import Navbar from "./Navbar";

function Main() {
  const [viewMode, setViewMode] = useState("");

  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
      <div style={{ display: "flex" }}>
        <Link onClick={() => setViewMode("Home")} style={{ margin: 10 }}>
          Home
        </Link>
        <Link onClick={() => setViewMode("About")} style={{ margin: 10 }}>
          About
        </Link>
        <Link onClick={() => setViewMode("Contact")} style={{ margin: 10 }}>
          Contact
        </Link>
      </div>

      {/*<Header />
      <Navbar />
      <Content />*/}

      {viewMode === "Home" && <div>This is Home component</div>}
      {viewMode === "About" && <div>This is About component</div>}
      {viewMode === "Contact" && <div>This is Contact component</div>}
    <div>
			asdasd
		</div>asdasd
		</div>
		
  );
}

export default Main;
