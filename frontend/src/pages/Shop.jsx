import React, { useState } from "react";
import FeaturedProducts from "../components/FeaturedProducts";
import { FaSearch } from "react-icons/fa";

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("featured");
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="flex flex-col items-center mb-10 mt-4">
      <div className="relative w-full max-w-lg">
        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />

        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1); // Reset to first page on search
          }}
          className="w-full mb-2 pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        />
      </div>
      <div className="flex flex-wrap justify-center gap-3 mb-4">
        {["All", "Clothing", "Shoes", "Bags", "Electronics", "Accessories"].map(
          (category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentPage(1); // Reset to first page on category change
              }}
              className={`px-5 py-2 rounded-full font-medium transition ${
                selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 border hover:bg-blue-100"
              }`}
            >
              {category}
            </button>
          ),
        )}
      </div>
      <div className="w-full max-w-xs mb-6">
        <select
          value={sortOption}
          onChange={(e) => {
            setSortOption(e.target.value);
            setCurrentPage(1); // Reset to first page on sort change
          }}
          className="w-48 px-2 py-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="featured">Featured</option>
          <option value="price-low-high">Price: Low to High</option>
          <option value="price-high-low">Price: High to Low</option>
          <option value="name-a-z">Name: A to Z</option>
          <option value="name-z-a">Name: Z to A</option>
        </select>
      </div>
      <FeaturedProducts
        searchTerm={searchTerm}
        selectedCategory={selectedCategory}
        sortOption={sortOption}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Shop;
