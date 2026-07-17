import React from "react";
import ProductCard from "./ProductCard";
import products from "../data/products";

const FeaturedProducts = ({ searchTerm = "", selectedCategory = "All" }) => {
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
            filteredProducts.map((product) => (
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
      </div>
    </section>
  );
};

export default FeaturedProducts;
