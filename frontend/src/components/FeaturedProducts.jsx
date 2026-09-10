import React from "react";
import ProductCard from "./ProductCard";
import products from "../data/products";

const FeaturedProducts = ({
  searchTerm = "",
  selectedCategory = "All",
  sortOption = "featured",
  currentPage = 1,
  setCurrentPage,
}) => {
  const term = searchTerm.toLowerCase();

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(term) ||
      product.category.toLowerCase().includes(term) ||
      (product.description || "").toLowerCase().includes(term);

    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });
  const sortedProducts = [...filteredProducts];
  if (sortOption === "price-low-high") {
    sortedProducts.sort((a, b) => a.price - b.price);
  }
  if (sortOption === "price-high-low") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }
  if (sortOption === "name-a-z") {
    sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
  }
  if (sortOption === "name-z-a") {
    sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
  }
  const productsPerPage = 4;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1,
  );
  return (
    <section className="py-10 bg-gray-100">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.length === 0 ? (
            <p className="col-span-full text-center text-gray-500">
              No products found.
            </p>
          ) : (
            currentProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                img={product.image}
                name={product.name}
                category={product.category}
                price={product.price}
              />
            ))
          )}
        </div>
        {setCurrentPage && (
          <div className="flex justify-center gap-2 mt-10">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-full font-medium transition ${
                currentPage === 1
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-white text-gray-700 border hover:bg-blue-100"
              }`}
            >
              Previous
            </button>
            {pageNumbers.map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-full font-medium transition ${
                  currentPage === page
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 border hover:bg-blue-100"
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-full font-medium transition ${
                currentPage === totalPages
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-white text-gray-700 border hover:bg-blue-100"
              }`}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;
