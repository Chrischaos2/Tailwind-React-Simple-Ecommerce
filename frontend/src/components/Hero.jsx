import React from "react";
import HeroImage from "../assets/HeroImage.jpg"; // Ensure you have an image in the specified path

const Hero = () => {
  return (
    <section className="bg-gray-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              New Collection !!!!!
            </span>
            <h1 className="text-5xl font-bold leading-tight mb-4">
              Discover the Latest Trends in Fashion
            </h1>
            <p className="text-gray-300 mb-6 max-w-lg">
              Explore our new arrivals and find your perfect style. From casual
              wear to formal attire, we have something for everyone.
            </p>
            <div className="flex gap-4 mt-8">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition duration-300">
                Shop Now
              </button>
              <button className="border border-white text-white px-6 py-3 rounded-xl hover:bg-white hover:text-gray-800 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
          <div className="h-full">
            <img
              src={HeroImage}
              alt="Fashion Mens Sneaker"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl transition duration-500 hover:scale-105 hover:shadow-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
