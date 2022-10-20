import React from "react";
import Benefits from "./Components/Benefits";
import Blog from "./Components/Blog";
import Cards from "./Components/Cards";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Partners from "./Components/Partners";
import Review from "./Components/Review";
import Team from "./Components/Team";
import Work from "./Components/Work";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Partners />
      <Work />
      <Benefits />
      <Cards />
      <Team />
      <Review />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
