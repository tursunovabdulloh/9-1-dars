import React, { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaBagShopping } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../store/CartSlice";
// toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      });
  }, []);

  const handleAddToCart = (product) => {
    dispatch(AddToCart(product));
    toast.success("has been added to the cart!");
  };

  if (loading) {
    return (
      <div className="flex justify-center flex-col items-center h-screen bg-base-100">
        <AiOutlineLoading3Quarters className="animate-spin text-6xl text-blue-500" />
        <span className="ml-4 text-2xl text-blue-600">Loading...</span>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {products.map((product) => (
          <div
            key={product.id}
            className={
              theme === "synthwave"
                ? "bg-base-200 rounded-lg"
                : "bg-base-100 rounded-lg shadow-md overflow-hidden cursor-pointer"
            }
          >
            <div className="flex flex-col p-4">
              <div className="flex items-center">
                <h2 className="text-sm font-bold mb-2 mr-auto">
                  {product.title}
                </h2>
                <FaBagShopping
                  style={{ zoom: 1.7 }}
                  onClick={() => handleAddToCart(product)} // Mahsulotni savatchaga qo'shish
                  className={
                    theme === "synthwave"
                      ? "text-white cursor-pointer hover:text-green-500 transition-colors duration-100"
                      : "text-gray-700 hover:text-green-500 transition-colors duration-100 cursor-pointer "
                  }
                />
              </div>
              <p
                className={
                  theme === "synthwave"
                    ? "text-white"
                    : "text-gray-700 font-semibold"
                }
              >
                Description: {product.description.slice(0, 35)}...
              </p>
              <p
                className={
                  theme === "synthwave"
                    ? "text-white"
                    : "text-gray-700 font-semibold"
                }
              >
                Price: ${product.price?.toFixed(2)}
              </p>
              <div className="flex items-start mt-[4px] gap-y-2">
                <p className="mr-auto text-white bg-green-500 rounded-xl p-1">
                  {product.rating} 5⭐
                </p>
              </div>
            </div>
            <div className="w-[300px] h-[280px]">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
