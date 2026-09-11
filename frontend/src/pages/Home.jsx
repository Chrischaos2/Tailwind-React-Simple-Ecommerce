import React, { useState } from "react";

import Hero from "../components/Hero";

import FeaturedProducts from "../components/FeaturedProducts";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <Hero />

      <FeaturedProducts
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default Home;
