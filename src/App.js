import { useState,useEffect } from "react";
import "./App.css";
import Cart from "./components/Cart";
import Hero from "./components/Hero";
import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import Body from "./components/Body";
import SideBar from "./components/SideBar";
import { data } from "./products";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [inCart, setInCart] = useState([]);
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [products,setProducts]=useState(data)
  const [filteredProducts,setFilteredProducts]=useState([])
  console.log(inCart, "inCart");

  const handleAddToCart = (id) => {
    setToggle(true);
    const newItem = products.find((item) => item.id === id);
    newItem.count=1;
    console.log(newItem, 'newItem')
    if (!inCart.includes(newItem)) {
      setInCart([...inCart, newItem]);
      setCount((prevState) => prevState + 1);
    }
    if (count === 0) {
      setTotal((newItem.fields.price / 100) * 1);
    } else {
      setTotal(total + (newItem.fields.price / 100) * 1);
    }
  };
  

  const closeCart = () => {
    setToggle(false);
  };

  const handleToggleCart = () => {
    setToggle(!toggle);
  };

  const handleDelete = (product) => {
    if (inCart.length !== 0) {
      const inCartCopy = inCart.map((item) => ({ ...item }));
      const filtered = inCartCopy.filter((item) => item.id !== product.id);
      setInCart(filtered);
      setCount((prevState) => prevState - 1);
      setTotal(total - product.fields.price / 100);
    } else {
      setTotal(0);
    }
  };

console.log(products)
  useEffect(() => {
    setFilteredProducts(products);
  },[]);

  const handleCategory = (category) => {
  
    if (category === "all") {
      setFilteredProducts(products);
    } else {
      const productsCopy = products.map((item)=>({...item}))
      const newProducts = productsCopy.filter((item) => item.fields.company === category);
      setFilteredProducts(newProducts);
    }
  };
  
  return (
    <div className="App">
      <Loading isLoading={isLoading} />

      <NavBar handleToggleCart={handleToggleCart} count={count} />

      <Hero />

      <SideBar />

      <Cart
        closeCart={closeCart}
        toggle={toggle}
      
        count={count}
        handleDelete={handleDelete}
        total={total}
        products={products}
        inCart={inCart}
        setInCart={setInCart}
        setTotal={setTotal}
        setCount={setCount}
      />

      {/* products */}
      <Body handleAddToCart={handleAddToCart} handleCategory={handleCategory} filteredProducts={filteredProducts} products={products} />
    </div>
  );
}

export default App;
