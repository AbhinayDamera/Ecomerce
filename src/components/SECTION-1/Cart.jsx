import React from 'react';

const Cart = ({ cart, setCart }) => {

  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  let totalPrice = 0;

  for (let i = 0; i < cart.length; i++) {
    totalPrice += cart[i].price - cart[i].discount;
  }

  const buyNow = () => {
    alert(`Order placed successfully! Total Amount: ₹${totalPrice}`);
    setCart([]);
  };

  return (
    <div>

      <h1 className="text-2xl md:text-4xl font-bold flex justify-center mt-10">
        SHOPPING CART
      </h1>

      <div className="flex justify-center items-center mt-10 px-4">

        <div className="w-full md:w-3/4 min-h-[400px] border border-gray-300 rounded-lg">

          <div className="hidden md:flex p-5 bg-gray-100 justify-between font-bold">
            <div>Item</div>
            <div>Name</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Total</div>
            <div>Remove</div>
          </div>

          {cart.length === 0 ? (
            <div className="text-center p-10 text-xl md:text-2xl font-semibold">
              Your Cart is Empty
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row justify-between items-center gap-4 p-5 border-b"
              >

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-contain"
                />

                <div className="font-medium text-center md:text-left">
                  {item.name}
                </div>

                <div>
                  Price: ₹{item.price - item.discount}
                </div>

                <div>
                  Qty: 1
                </div>

                <div>
                  Total: ₹{item.price - item.discount}
                </div>

                <button
                  onClick={() => removeItem(item.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
                >
                  Remove
                </button>

              </div>
            ))
          )}

          {cart.length > 0 && (
            <div className="flex justify-end p-5 bg-red-600 text-white font-bold text-lg md:text-xl">
              Total Price: ₹{totalPrice}
            </div>
          )}

          {cart.length > 0 && (
            <div className="flex justify-center mt-5 mb-5">
              <button
                onClick={buyNow}
                className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-700"
              >
                Buy Now
              </button>
            </div>
          )}

        </div>
      </div>

    </div>
  );
};

export default Cart;