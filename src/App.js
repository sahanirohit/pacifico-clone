import React from "react";
import Blog from "./Components/Blog";
import Cards from "./Components/Cards";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Review from "./Components/Review";
import Team from "./Components/Team";
import Work from "./Components/Work";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Work />
      <Cards />
      <Team />
      <Review />
      <Blog />
      <div className="h-[2000px]"></div>
    </div>
  );
}

export default App;
