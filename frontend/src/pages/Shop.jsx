import React, { useEffect, useState } from "react";

import { FaSearch, FaSlidersH, FaTimes } from "react-icons/fa";

import FeaturedProducts from "../components/FeaturedProducts";

import { getProducts } from "../api/productApi";

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("featured");
  const [currentPage, setCurrentPage] = useState(1);

  const [categories, setCategories] = useState(["All"]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const products = await getProducts();

        const uniqueCategories = [
          ...new Set(products.map((product) => product.category)),
        ];

        setCategories(["All", ...uniqueCategories]);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    setCurrentPage(1);
  };

  const handleResetFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All");
    setSortOption("featured");
    setCurrentPage(1);
  };

  const hasActiveFilters =
    searchTerm !== "" ||
    selectedCategory !== "All" ||
    sortOption !== "featured";

  return (
    <main className="min-h-screen bg-gray-100">
      {/* Page Header */}
      <section className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-blue-400 font-semibold uppercase tracking-wider text-sm mb-2">
            Shop
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Explore Our Products
          </h1>

          <p className="text-gray-300 max-w-2xl text-lg">
            Discover quality products across different categories and find
            exactly what you are looking for.
          </p>
        </div>
      </section>

      {/* Shop Controls */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
            {/* Search + Sort */}
            <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
              {/* Search */}
              <div className="relative w-full lg:max-w-xl">
                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />

                <input
                  type="text"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  placeholder="Search products..."
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              </div>

              {/* Sort */}
              <div className="flex items-center gap-3">
                <label
                  htmlFor="sort"
                  className="hidden sm:flex items-center gap-2 text-sm font-medium text-gray-600"
                >
                  <FaSlidersH />
                  Sort by
                </label>

                <select
                  id="sort"
                  value={sortOption}
                  onChange={handleSortChange}
                  className="w-full sm:w-52 px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low-high">Price: Low to High</option>
                  <option value="price-high-low">Price: High to Low</option>
                  <option value="name-a-z">Name: A to Z</option>
                  <option value="name-z-a">Name: Z to A</option>
                </select>
              </div>
            </div>

            {/* Categories */}
            <div className="mt-6 pt-5 border-t border-gray-200">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-sm font-semibold text-gray-700">
                  Categories
                </h2>

                {hasActiveFilters && (
                  <button
                    onClick={handleResetFilters}
                    className="flex items-center gap-2 text-sm text-red-500 hover:text-red-700 font-medium transition"
                  >
                    <FaTimes />
                    Clear Filters
                  </button>
                )}
              </div>

              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-medium capitalize transition-all duration-200 ${
                      selectedCategory === category
                        ? "bg-blue-600 text-white shadow-md"
                        : "bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <FeaturedProducts
        searchTerm={searchTerm}
        selectedCategory={selectedCategory}
        sortOption={sortOption}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </main>
  );
};

export default Shop;
