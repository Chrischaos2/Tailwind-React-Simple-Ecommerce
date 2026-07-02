import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const ProductDetails = () => {
  const { id } = useParams();
  console.log(id);
  const product = products.find((product) => product.id === parseInt(id));
  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <section className="py-10 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-8">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 mb-8 text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300"
        >
          <FaArrowLeft />
          Back to Shop
        </Link>
        <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-10">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-112 rounded-xl shadow-lg object-cover"
          />

          <div>
            <p className="text-blue-600 font-semibold">{product.category}</p>

            <h1 className="text-4xl font-bold mt-2">{product.name}</h1>

            <p className="text-3xl font-bold text-green-600 my-4">
              ${product.price}
            </p>

            <p className="text-gray-600 mb-6">{product.description}</p>

            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
