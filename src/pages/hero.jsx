import React, { useEffect, useState } from "react";
import {
  AiOutlineLoading3Quarters,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { LuDelete } from "react-icons/lu";

export default function Hero() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://cors-anywhere.herokuapp.com/https://dummyjson.com/products"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data.products);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center flex-col items-center h-screen bg-gray-100">
        <AiOutlineLoading3Quarters className="animate-spin text-6xl text-blue-500" />
        <span className="ml-4 text-2xl text-blue-600">Loading...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-base-100">
        <p className="text-red-500 text-xl">Error: {error}</p>
      </div>
    );
  }

  return (
    <main className="main bg-base-100 ">
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => onClickProduct(product.id)}
              className={
                theme === "synthwave"
                  ? "bg-base-300 rounded-lg shadow-md overflow-hidden cursor-pointer"
                  : "bg-base-100 rounded-lg shadow-md overflow-hidden cursor-pointer"
              }
            >
              <div className="flex flex-col p-4">
                <div className="flex items-center">
                  <h2 className="text-sm font-bold mb-2 mr-auto">
                    {product.title}
                  </h2>
                  <FiShoppingCart
                    style={{ zoom: 2 }}
                    //  onClick={(e) => handleDelete(product.id, e)}
                    className="cursor-pointer text-gray-700 hover:text-red-500 transition-colors duration-300"
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
                  <div
                  //  className={`cursor-pointer text-[25px] transition-colors duration-300 border-2 ${
                  //    cartItems.has(product.id)
                  //      ? "border-red-100 bg-green-500 text-white"
                  //      : "border-gray-300 bg-gray-400 text-white"
                  //  } rounded-full p-1`}
                  //  onClick={(e) => handleCartClick(product, e)}
                  ></div>
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
    </main>
  );
}
