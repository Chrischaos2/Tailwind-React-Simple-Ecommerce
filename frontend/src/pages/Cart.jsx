import React from "react";

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

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <section className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-xl shadow p-10 text-center">
            <h2 className="text-xl font-semibold">Your cart is empty</h2>

            <p className="text-gray-500 mt-2">
              Add some products from the shop.
            </p>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="space-y-3">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-sm border px-3 py-3 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8"
                >
                  {/* Product Information */}
                  <div className="flex-1">
                    <h2 className="font-semibold text-base">{item.name}</h2>

                    <p className="text-green-600 font-bold">${item.price}</p>

                    <p className="text-sm text-gray-500">
                      Subtotal: ${item.price * item.quantity}
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-3 self-start sm:self-auto">
                    <button
                      onClick={() => dispatch(decreaseQuantity(item.id))}
                      className="w-7 h-7 text-sm rounded bg-red-500 text-white hover:bg-red-600"
                    >
                      -
                    </button>

                    <span className="font-semibold w-6 text-center">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => dispatch(increaseQuantity(item.id))}
                      className="w-6 h-6 rounded text-sm bg-green-500 text-white hover:bg-green-600"
                    >
                      +
                    </button>
                  </div>

                  {/* Remove Button */}
                  <div className="sm:ml-8">
                    <button
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="bg-gray-700 hover:bg-gray-800 text-white px-2 py-1.5 text-sm rounded-lg"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Footer */}
            <div className="bg-white shadow rounded-lg mt-6 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold">Total: ${total}</h2>

                <p className="text-gray-500 text-sm">
                  {cartItems.length} item(s)
                </p>
              </div>

              <button
                onClick={() => dispatch(clearCart())}
                className="bg-red-600 hover:bg-red-700 text-white px-3 py-3 rounded-lg"
              >
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Cart;
