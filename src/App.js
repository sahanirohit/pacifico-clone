import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Work from "./Components/Work";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Work />
      <div className="h-[2000px]"></div>
    </div>
  );
}

export default App;
