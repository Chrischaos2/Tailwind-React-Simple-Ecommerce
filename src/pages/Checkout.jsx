import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const isCartEmpty = cartItems.length === 0;
  const navigate = useNavigate();

  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  // Validation patterns
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^(?:\+254|0)(?:1|7)\d{8}$/;

  // Shipping and total
  const shippingCost = 10;
  const total = subtotal + shippingCost;

  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    county: "",
    postalCode: "",
  });

  // Validation errors
  const [errors, setErrors] = useState({});

  // Validate checkout form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Phone number is invalid";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    if (!formData.county.trim()) {
      newErrors.county = "County is required";
    }

    if (!formData.postalCode.trim()) {
      newErrors.postalCode = "Postal code is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Handle placing order
  const handlePlaceOrder = () => {
    if (!validateForm()) {
      return;
    }

    const order = {
      customer: formData,
      items: cartItems,
      subtotal,
      shippingCost,
      total,
    };

    console.log("Order:", order);
    // Navigate to order confirmation page
    navigate("/order-confirmation", { state: { order } });
  };

  return (
    <div className="max-w-7xl mx-auto px-8 py-10">
      <h1 className="text-4xl font-bold mb-8">Checkout</h1>

      {/* Customer Information */}
      <div className="max-w-3xl">
        <h2 className="text-2xl font-semibold mb-6">Customer Information</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Name */}
          <div>
            <label className="block mb-2 font-medium">First Name</label>

            <input
              type="text"
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  firstName: e.target.value,
                })
              }
              className={`w-full rounded-lg px-4 py-3 border ${
                errors.firstName ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />

            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <label className="block mb-2 font-medium">Last Name</label>

            <input
              type="text"
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  lastName: e.target.value,
                })
              }
              className={`w-full rounded-lg px-4 py-3 border ${
                errors.lastName ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />

            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 font-medium">Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
              className={`w-full rounded-lg px-4 py-3 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-2 font-medium">Phone</label>

            <input
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  phone: e.target.value,
                })
              }
              className={`w-full rounded-lg px-4 py-3 border ${
                errors.phone ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />

            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>
        </div>
      </div>

      {/* Shipping Information */}
      <div className="max-w-3xl mt-10">
        <h2 className="text-2xl font-semibold mb-6">Shipping Information</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Address */}
          <div className="md:col-span-2">
            <label className="block mb-2 font-medium">Address</label>

            <input
              type="text"
              placeholder="Enter your delivery address"
              value={formData.address}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  address: e.target.value,
                })
              }
              className={`w-full rounded-lg px-4 py-3 border ${
                errors.address ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />

            {errors.address && (
              <p className="text-red-500 text-sm mt-1">{errors.address}</p>
            )}
          </div>

          {/* City */}
          <div>
            <label className="block mb-2 font-medium">City</label>

            <input
              type="text"
              placeholder="Enter your city"
              value={formData.city}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  city: e.target.value,
                })
              }
              className={`w-full rounded-lg px-4 py-3 border ${
                errors.city ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />

            {errors.city && (
              <p className="text-red-500 text-sm mt-1">{errors.city}</p>
            )}
          </div>

          {/* County */}
          <div>
            <label className="block mb-2 font-medium">County</label>

            <input
              type="text"
              placeholder="Enter your county"
              value={formData.county}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  county: e.target.value,
                })
              }
              className={`w-full rounded-lg px-4 py-3 border ${
                errors.county ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />

            {errors.county && (
              <p className="text-red-500 text-sm mt-1">{errors.county}</p>
            )}
          </div>

          {/* Postal Code */}
          <div>
            <label className="block mb-2 font-medium">Postal Code</label>

            <input
              type="text"
              placeholder="Enter postal code"
              value={formData.postalCode}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  postalCode: e.target.value,
                })
              }
              className={`w-full rounded-lg px-4 py-3 border ${
                errors.postalCode ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />

            {errors.postalCode && (
              <p className="text-red-500 text-sm mt-1">{errors.postalCode}</p>
            )}
          </div>
        </div>
      </div>

      {/* Order Summary */}
      <div className="max-w-3xl mt-10">
        <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>

        <div className="bg-white rounded-lg shadow-md p-6">
          {isCartEmpty ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            <div>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between py-4 border-b"
                >
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>

                    <p className="text-gray-500">Quantity: {item.quantity}</p>
                  </div>

                  <p className="font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}

              {/* Subtotal */}
              <div className="flex justify-between mt-6 text-xl font-bold">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              {/* Shipping */}
              <div className="flex justify-between mt-4 text-lg font-bold">
                <span>Shipping</span>
                <span>${shippingCost.toFixed(2)}</span>
              </div>

              {/* Total */}
              <div className="flex justify-between mt-4 pt-4 border-t text-xl font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Place Order Button */}
      <button
        type="button"
        disabled={isCartEmpty}
        onClick={handlePlaceOrder}
        className="mt-8 w-full md:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Place Order
      </button>
    </div>
  );
};

export default Checkout;
