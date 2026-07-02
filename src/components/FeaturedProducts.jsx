import React from "react";
import ProductCard from "./ProductCard";
import products from "../data/products";

const FeaturedProducts = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              img={product.image}
              name={product.name}
              category={product.category}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
