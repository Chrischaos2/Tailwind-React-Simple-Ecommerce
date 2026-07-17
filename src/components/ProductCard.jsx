import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ id, img, name, category, price }) => {
  return (
    <div className="h-full">
      <Link to={`/products/${id}`} className="block h-full">
        <div className="bg-white rounded-lg shadow-md h-full flex flex-col overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
          <img src={img} alt={name} className="w-full h-64 object-cover" />

          <div className="flex flex-col flex-1 p-6">
            <h3 className="text-lg font-semibold">{name}</h3>

            <p className="text-gray-500 text-sm mt-1">{category}</p>

            <div className="flex items-center gap-3 pt-4">
              <span className="flex-1 text-md font-bold text-blue-600">
                ${price.toFixed(2)}
              </span>

              <button className="shrink-0 bg-blue-600 text-white text-sm px-4 py-2 rounded-xl hover:bg-blue-700 transition whitespace-nowrap">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
