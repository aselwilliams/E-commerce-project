import { useState,useEffect } from "react";
import "./App.css";
import Cart from "./components/Cart";
import Hero from "./components/Hero";
import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import Body from "./components/Body";
import SideBar from "./components/SideBar";
import { data } from "./products";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from "./pages/Products";

const getFeatured=()=>{
  let sliced=data.slice(0,3)
  return sliced
}  


const getInitialCart=JSON.parse(localStorage.getItem('initialCart'))

const initialState=getInitialCart ? getInitialCart : []

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [inCart, setInCart] = useState(initialState);
  const [count, setCount] = useState(getInitialCart ? getInitialCart.length : 0);
  const [total, setTotal] = useState(0);
  const [products,setProducts]=useState(data)
  const [filteredProducts,setFilteredProducts]=useState([])
  const [featured,setFeatured]=useState(getFeatured())
  console.log(inCart, "inCart");

// useEffect(()=>{
//         localStorage.setItem("expenseHistory", JSON.stringify(history));
//         let totalincome = 0;
//         let totalexpense = 0;
//         let totalBalance = 0;            
//           for (let i=0; i < history.length; i++){
//               totalBalance += Number(history[i].amount)
//               if (history[i].amount > 0) {
//                 totalincome += Number(history[i].amount) 
//               } else if(history[i].amount < 0) {
//                 totalexpense += Number(history[i].amount)
//               } 
//         }
//         setIncome(totalincome); 
//         setExpense(totalexpense);
//         setTotalBalance(totalBalance); 

//     },[history]);
// useEffect(() => {
//     const newHistory = JSON.parse(sessionStorage.getItem("saved-data"));
//     if (newHistory) {
//       setHistory(newHistory);
//     }
//   }, []);


useEffect(()=>{
  localStorage.setItem('initialCart', JSON.stringify(inCart))
  let totalAmount=0;
  let totalWithCount=0;
   setTotal(totalAmount);
   let elItem=inCart.map((el)=>{
      if(el.count>1){
      let newAmount = el.count*(el.fields.price/100)
     setTotal(newAmount)
  } else {
    totalAmount = total + el.fields.price/100
    setTotal(totalAmount)
  }
})
     
   
},[inCart])


console.log(featured, 'featured')

  const handleAddToCart = (id) => {
    setToggle(true);
    const newItem = products.find((item) => item.id === id);
    newItem.count=1;
    console.log(newItem, 'newItem')
    if (!inCart.includes(newItem)) {
      setInCart([...inCart, newItem]);
      setCount((prevState) => prevState + 1);
    }
    // if (count === 0) {
    //   setTotal((newItem.fields.price / 100) * 1);
    // } else {
    //   setTotal(total + (newItem.fields.price / 100) * 1);
    // }
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
    <Router>
    
      <Loading isLoading={isLoading} />
      
      <NavBar handleToggleCart={handleToggleCart} count={count} 
        closeCart={closeCart}
        toggle={toggle}
      />
      
      <Routes>
      {/* <Hero /> */}

      {/* <SideBar /> */}

      <Route path='/' element={<Home featured={featured} handleAddToCart={handleAddToCart} />}/>

      {/* products */}
      <Route exact path='/products' element={<Body handleAddToCart={handleAddToCart} 
      handleCategory={handleCategory} filteredProducts={filteredProducts} products={products} />}/>
      <Route path='/products/:itemId' element={<Products handleAddToCart={handleAddToCart}  filteredProducts={filteredProducts} />} />
      <Route path='/about' element={<About />}/>
      </Routes>
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
      </Router>
     
    </div>
  );
}

export default App;
