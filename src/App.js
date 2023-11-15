import React from "react";
import data from "./Components/data";
import Navbar from "./Components/navbar";
import Place from "./Components/place";

export default function App() {
  const places = data.map((item) => {
    return <Place item={item} />;
  });
  return (
    <div className="container">
      <Navbar />
      <div className="card-container">{places}</div>
    </div>
  );
}
