import React from "react";
import { useLocation } from "react-router-dom";

const OrderConfirmation = () => {
  const location = useLocation();
  const order =
    location.state?.order || JSON.parse(localStorage.getItem("order"));

  return (
    <div className="max-w-4xl mx-auto px-8 py-16">
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-green-600 mb-4">
            Order Placed Successfully!
          </h1>

          <p className="text-gray-600">Thank you for your order.</p>

          <p className="font-semibold mt-4">
            Order Number: {order?.orderNumber}
          </p>
          <p className="text-gray-500 mt-2">
            Date:{" "}
            {order?.orderDate
              ? new Date(order.orderDate).toLocaleString()
              : "N/A"}
          </p>
          <p className="text-gray-500 mt-2">
            Status: {order?.status || "Pending"}
          </p>
        </div>

        {order && (
          <>
            <div className="border-b pb-6 mb-6">
              <h2 className="text-2xl font-semibold mb-4">
                Customer Information
              </h2>

              <p>
                <strong>Name:</strong> {order.customer.firstName}{" "}
                {order.customer.lastName}
              </p>

              <p>
                <strong>Email:</strong> {order.customer.email}
              </p>

              <p>
                <strong>Phone:</strong> {order.customer.phone}
              </p>

              <p>
                <strong>Address:</strong> {order.customer.address},{" "}
                {order.customer.city}, {order.customer.county}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>

              {order.items.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between py-4 border-b"
                >
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-gray-500">Quantity: {item.quantity}</p>
                  </div>

                  <p className="font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}

              <div className="flex justify-between mt-6">
                <span>Subtotal</span>
                <span>${order.subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between mt-3">
                <span>Shipping</span>
                <span>${order.shippingCost.toFixed(2)}</span>
              </div>

              <div className="flex justify-between mt-4 pt-4 border-t text-xl font-bold">
                <span>Total</span>
                <span>${order.total.toFixed(2)}</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default OrderConfirmation;
