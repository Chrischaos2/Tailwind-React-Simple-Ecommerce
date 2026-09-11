import React from "react";

import { Link } from "react-router-dom";

const ProductCard = ({ id, img, name, category, price }) => {
  return (
    <Link
      to={`/products/${id}`}
      className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
    >
      {/* Product Image */}
      <div className="relative w-full aspect-square bg-gray-100 overflow-hidden">
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Information */}
      <div className="p-3">
        {/* Category */}
        <p className="text-xs text-gray-500 capitalize mb-1">{category}</p>

        {/* Product Name */}
        <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 min-h-[40px] group-hover:text-blue-600 transition-colors">
          {name}
        </h3>

        {/* Price */}
        <p className="mt-2 text-base font-bold text-gray-900">
          ${Number(price).toFixed(2)}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
