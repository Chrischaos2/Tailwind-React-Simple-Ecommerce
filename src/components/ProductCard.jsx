import React from "react";

const ProductCard = ({ img, name, category, price }) => {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
        <img src={img} alt={name} className="w-full h-64 object-cover" />
        <div className="p-6">
          <h3 className="text-md font-bold mb-1">{name}</h3>
          <p className="text-gray-600 mb-4">{category}</p>
          <div className="flex items-center justify-between">
            <span className="text-md font-bold text-blue-600">
              ${price.toFixed(2)}
            </span>
            <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-xl hover:bg-blue-700 transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
