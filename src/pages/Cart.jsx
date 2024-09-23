import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../store/CartSlice";
//  toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Cart() {
  const cart = useSelector((state) => state.cart.Cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
    toast.info("has been deleted on the cart!");
  };

  return (
    <main className="main">
      <div className="container">
        <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div>
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 border-b"
              >
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ${item.price?.toFixed(2)}</p>
                </div>
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-16 h-16 object-cover"
                />
                <button
                  onClick={() => handleRemoveFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
