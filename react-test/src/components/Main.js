import React, { useEffect, useState } from "react";
import Header from "./Header";
import Navbar from "./Navbar/Navbar";
import fakeApi from "./fakeApi";

function Main() {
  const [api, setApi] = useState([]);

  const fakeAPI = async () => {
    const response = await fetch("https://fakestoreapi.com/products/1");
    const data = await response.json();
    setApi(data.products);
  };
  const fakeAPI = Object.keys(api);

  useEffect(() => {
    fakeAPI();
  }, []);

  //const fake = Object.keys(api);

  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
      <Header />
      <Navbar />
      <button onClick={fakeAPI}>asdsad</button>
      <div>
        this is API
        <ul>
          {fakeAPI.map((shop) => (
            <li>{shop.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Main;
