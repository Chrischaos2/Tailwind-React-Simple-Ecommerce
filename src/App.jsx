import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturedProducts />
    </div>
  );
};

export default App;
