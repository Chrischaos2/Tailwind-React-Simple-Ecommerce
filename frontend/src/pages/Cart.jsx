import React from "react";

import { Link } from "react-router-dom";

import {
  FaArrowLeft,
  FaMinus,
  FaPlus,
  FaTrash,
  FaShoppingBag,
} from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from "../features/cart/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const subtotal = cartItems.reduce(
    (total, item) => total + Number(item.price) * item.quantity,
    0,
  );

  const shipping = subtotal > 0 ? 10 : 0;

  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <main className="min-h-screen bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-10">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center">
                <FaShoppingBag className="text-3xl text-blue-600" />
              </div>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              Your Cart is Empty
            </h1>

            <p className="text-gray-500 mb-8">
              You haven't added any products to your cart yet.
            </p>

            <Link
              to="/shop"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              <FaArrowLeft />
              Continue Shopping
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition mb-4"
          >
            <FaArrowLeft />
            Continue Shopping
          </Link>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                Shopping Cart
              </h1>

              <p className="text-gray-500 mt-1">
                {cartItems.length}{" "}
                {cartItems.length === 1 ? "product" : "products"} in your cart
              </p>
            </div>

            <button
              onClick={() => dispatch(clearCart())}
              className="flex items-center gap-2 text-sm text-red-500 hover:text-red-700 font-medium transition"
            >
              <FaTrash />
              Clear Cart
            </button>
          </div>
        </div>

        {/* Cart Layout */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 sm:p-5"
              >
                <div className="flex gap-4">
                  {/* Product Image */}
                  <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Information */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between gap-3">
                      <div>
                        <p className="text-xs text-blue-600 font-medium capitalize mb-1">
                          {item.category}
                        </p>

                        <h2 className="text-base sm:text-lg font-semibold text-gray-900 line-clamp-2">
                          {item.title}
                        </h2>
                      </div>

                      {/* Remove */}
                      <button
                        onClick={() => dispatch(removeFromCart(item._id))}
                        className="text-gray-400 hover:text-red-500 transition flex-shrink-0"
                        aria-label="Remove product"
                      >
                        <FaTrash />
                      </button>
                    </div>

                    {/* Price + Quantity */}
                    <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <p className="text-lg font-bold text-gray-900">
                        ${Number(item.price).toFixed(2)}
                      </p>

                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => dispatch(decreaseQuantity(item._id))}
                          className="w-9 h-9 rounded-lg border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition"
                        >
                          <FaMinus className="text-xs" />
                        </button>

                        <span className="w-8 text-center font-semibold">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => dispatch(increaseQuantity(item._id))}
                          className="w-9 h-9 rounded-lg border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition"
                        >
                          <FaPlus className="text-xs" />
                        </button>
                      </div>

                      <p className="font-bold text-blue-600">
                        ${(Number(item.price) * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Order Summary
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>

                  <span>${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>

                  <span>${shipping.toFixed(2)}</span>
                </div>

                <div className="border-t border-gray-200 pt-4 flex justify-between">
                  <span className="text-lg font-bold text-gray-900">Total</span>

                  <span className="text-xl font-bold text-blue-600">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>

              <Link
                to="/checkout"
                className="block w-full text-center bg-blue-600 text-white py-3.5 rounded-xl font-semibold mt-6 hover:bg-blue-700 transition"
              >
                Proceed to Checkout
              </Link>

              <Link
                to="/shop"
                className="flex items-center justify-center gap-2 mt-4 text-gray-600 hover:text-blue-600 font-medium transition"
              >
                <FaArrowLeft />
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cart;
