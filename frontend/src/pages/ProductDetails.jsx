import React, { useEffect, useState } from "react";

import { useParams, Link } from "react-router-dom";

import { FaArrowLeft } from "react-icons/fa";

import { useDispatch } from "react-redux";

import { addToCart } from "../features/cart/cartSlice";

import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await axios.get(
          `http://localhost:5000/api/products/${id}`,
        );

        setProduct(response.data);
      } catch (error) {
        console.error("Failed to fetch product:", error);

        setError("Failed to load product.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  if (loading) {
    return (
      <section className="min-h-screen bg-gray-100 py-10">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-gray-500 text-lg">Loading product...</p>
        </div>
      </section>
    );
  }

  if (error || !product) {
    return (
      <section className="min-h-screen bg-gray-100 py-10">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-red-500 text-lg">
            {error || "Product not found."}
          </p>

          <Link
            to="/shop"
            className="inline-flex items-center gap-2 mt-6 text-blue-600 font-semibold hover:text-blue-800 transition"
          >
            <FaArrowLeft />
            Back to Shop
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Back to Shop */}
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 mb-8 text-blue-600 font-semibold hover:text-blue-800 transition"
        >
          <FaArrowLeft />
          Back to Shop
        </Link>

        {/* Product Details */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-10 p-6 lg:p-10">
            {/* Product Image */}
            <div className="bg-gray-100 rounded-xl overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full aspect-square object-cover"
              />
            </div>

            {/* Product Information */}
            <div className="flex flex-col justify-center">
              {/* Category */}
              <p className="text-blue-600 font-semibold uppercase tracking-wide text-sm ">
                {product.category}
              </p>

              {/* Title */}
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3">
                {product.title}
              </h1>

              {/* Price */}
              <p className="text-3xl font-bold text-gray-900 mt-5">
                ${Number(product.price).toFixed(2)}
              </p>

              {/* Description */}
              <div className="mt-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">
                  Description
                </h2>

                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Brand */}
              {product.brand && (
                <div className="mt-5">
                  <span className="text-sm text-gray-500">Brand</span>

                  <p className="font-medium text-gray-800 capitalize">
                    {product.brand}
                  </p>
                </div>
              )}

              {/* Stock */}
              <div className="mt-5">
                <span className="text-sm text-gray-500">Availability</span>

                <p
                  className={`font-medium ${
                    product.stock > 0 ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {product.stock > 0
                    ? `${product.stock} items in stock`
                    : "Out of stock"}
                </p>
              </div>

              {/* Add to Cart */}
              <button
                onClick={handleAddToCart}
                disabled={product.stock <= 0}
                className={`mt-8 w-full sm:w-auto px-8 py-3 rounded-xl font-semibold text-white transition ${
                  product.stock > 0
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
