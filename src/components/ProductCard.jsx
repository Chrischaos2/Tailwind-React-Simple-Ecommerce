import React from "react";

const ProductCard = () => {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
        <img
          src="https://via.placeholder.com/300"
          alt="Product Image"
          className="w-full h-60 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">Product Name</h3>
          <p className="text-gray-600 mb-4">Product description goes here.</p>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-blue-600">$99.99</span>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
