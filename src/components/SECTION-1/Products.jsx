import React from 'react';
import { products } from "../../data/products";

const Products = ({ cart, setCart, count, setCount }) => {

  const addToCart = (product) => {
    setCart([...cart, product]);
    setCount(count + 1);
  };

  return (
    <div>

      <div className="px-4 md:px-10 mt-10">
        <div className="text-xl md:text-3xl text-gray-600 font-medium">
          Grab the best deal on{" "}
          <span className="text-blue-500">Smartphone</span>
        </div>

        <div className="p-0.5 rounded-2xl bg-blue-500 w-40 md:w-120 mt-3"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-4 md:px-10 mt-5">

        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-xl p-4 flex flex-col items-center hover:shadow-2xl hover:shadow-blue-500 border-gray-300 transition-all duration-300"
          >

            <img
              className="h-32 md:h-40 object-contain"
              src={product.image}
              alt={product.name}
            />

            <h3 className="mt-3 font-medium text-center">
              {product.name}
            </h3>

            <p className="text-blue-600 text-lg md:text-xl font-bold text-center mt-2">
              <span className="pr-4">
                ₹{product.price - product.discount}
              </span>

              <span className="line-through text-gray-500">
                ₹{product.price}
              </span>
            </p>

  
            <p className="text-green-600 font-medium text-center">
              Save - ₹{product.discount}
            </p>

            
            <div className="pt-3 w-full flex justify-center">
              <button
                onClick={() => addToCart(product)}
                className="border bg-blue-500 hover:bg-blue-700 text-white rounded-lg h-10 px-6 w-full sm:w-auto"
              >
                Add To Cart
              </button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default Products;