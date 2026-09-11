import React, { useEffect, useState } from "react";

import ProductCard from "./ProductCard";

import { getProducts } from "../api/productApi";

const FeaturedProducts = ({
  searchTerm = "",
  selectedCategory = "All",
  sortOption = "featured",
  currentPage = 1,
  setCurrentPage,
}) => {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  // Fetch products from the backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getProducts();

        console.log("Products from backend:", data);

        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);

        setError("Failed to load products.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Search term
  const term = searchTerm.toLowerCase();

  // Filter products
  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.title.toLowerCase().includes(term) ||
      product.category.toLowerCase().includes(term) ||
      (product.description || "").toLowerCase().includes(term);

    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Sort products
  const sortedProducts = [...filteredProducts];

  if (sortOption === "price-low-high") {
    sortedProducts.sort((a, b) => a.price - b.price);
  }

  if (sortOption === "price-high-low") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  if (sortOption === "name-a-z") {
    sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
  }

  if (sortOption === "name-z-a") {
    sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
  }

  // Products per page
  const productsPerPage = 12;

  // Total number of pages
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  // Calculate product indexes
  const indexOfLastProduct = currentPage * productsPerPage;

  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  // Products displayed on the current page
  const currentProducts = sortedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );

  // Keep current page valid when filtering reduces the number of pages
  useEffect(() => {
    if (totalPages > 0 && currentPage > totalPages) {
      setCurrentPage?.(1);
    }
  }, [totalPages, currentPage, setCurrentPage]);

  // Create smart pagination numbers
  const getPageNumbers = () => {
    const pages = [];

    if (totalPages <= 7) {
      for (let page = 1; page <= totalPages; page++) {
        pages.push(page);
      }

      return pages;
    }

    pages.push(1);

    if (currentPage > 4) {
      pages.push("...");
    }

    const startPage = Math.max(2, currentPage - 1);

    const endPage = Math.min(totalPages - 1, currentPage + 1);

    for (let page = startPage; page <= endPage; page++) {
      pages.push(page);
    }

    if (currentPage < totalPages - 3) {
      pages.push("...");
    }

    pages.push(totalPages);

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <section className="py-14 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Products
        </h2>

        {/* Loading */}
        {loading && (
          <div className="text-center py-10">
            <p className="text-gray-500 text-lg">Loading products...</p>
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="text-center py-10">
            <p className="text-red-500 text-lg">{error}</p>
          </div>
        )}

        {/* Products */}
        {!loading && !error && (
          <>
            {filteredProducts.length === 0 ? (
              <p className="text-center text-gray-500 py-10">
                No products found.
              </p>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
                {currentProducts.map((product) => (
                  <ProductCard
                    key={product._id}
                    id={product._id}
                    img={product.image}
                    name={product.title}
                    category={product.category}
                    price={product.price}
                  />
                ))}
              </div>
            )}

            {/* Pagination */}
            {setCurrentPage && totalPages > 1 && (
              <div className="flex flex-wrap justify-center items-center gap-2 mt-12">
                {/* Previous */}
                <button
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition ${
                    currentPage === 1
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-white text-gray-700 border border-gray-300 hover:bg-blue-50 hover:text-blue-600"
                  }`}
                >
                  Previous
                </button>

                {/* Page Numbers */}
                {pageNumbers.map((page, index) =>
                  page === "..." ? (
                    <span
                      key={`ellipsis-${index}`}
                      className="px-2 text-gray-500"
                    >
                      ...
                    </span>
                  ) : (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 rounded-lg font-medium text-sm transition ${
                        currentPage === page
                          ? "bg-blue-600 text-white shadow-md"
                          : "bg-white text-gray-700 border border-gray-300 hover:bg-blue-50 hover:text-blue-600"
                      }`}
                    >
                      {page}
                    </button>
                  ),
                )}

                {/* Next */}
                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition ${
                    currentPage === totalPages
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-white text-gray-700 border border-gray-300 hover:bg-blue-50 hover:text-blue-600"
                  }`}
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;
