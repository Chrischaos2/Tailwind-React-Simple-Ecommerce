import React from "react";

const Orders = () => {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  return (
    <div className="max-w-6xl mx-auto px-8 py-10">
      <h1 className="text-4xl font-bold mb-8">My Orders</h1>

      {orders.length === 0 ? (
        <p className="text-gray-500">You have no orders yet.</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order.orderNumber}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="text-xl font-semibold">{order.orderNumber}</h2>

                  <p className="text-gray-500">
                    {new Date(order.orderDate).toLocaleString()}
                  </p>
                </div>

                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
                  {order.status}
                </span>
              </div>

              <div className="border-t pt-4">
                {order.items.map((item) => (
                  <div key={item.id} className="flex justify-between py-2">
                    <div>
                      <p className="font-medium">{item.name}</p>

                      <p className="text-gray-500">Quantity: {item.quantity}</p>
                    </div>

                    <p>${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>

              <div className="border-t mt-4 pt-4 flex justify-between font-bold">
                <span>Total</span>

                <span>${order.total.toFixed(2)}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
