import NavBarTop from "./SECTION-1/NavBarTop";
import NavBar from "./SECTION-1/NavBar";
import ImageBar from "./SECTION-1/ImageBar";
import Products from "./SECTION-1/Products";
import Products2 from "./SECTION-1/Products2";

const Home = ({ cart, setCart }) => {
  return (
    <>
      
      <NavBarTop />
      <NavBar cart={cart} />
      <ImageBar />
      <Products cart={cart} setCart={setCart} />
      <Products2 cart={cart} setCart={setCart}  />
    </>
  );
};

export default Home;