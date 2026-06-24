import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Cart from "./components/SECTION-1/Cart";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {

  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Signup />} />

      <Route
        path="/home"
        element={
          <Home 
          cart={cart}
          setCart={setCart} 
          count={count}
          setCount={setCount}
          />
        }
      />

      <Route
        path="/cart"
        element={
          <Cart 
          cart={cart}
          setCart={setCart}
          count={count}
          setCount={setCount}
          />
        }
      />

    </Routes>
  );
}

export default App;