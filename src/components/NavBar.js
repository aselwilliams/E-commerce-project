import Hero from './Hero';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import { useLocation } from "react-router-dom";
import Cart from '../components/Cart'

function NavBar({ handleToggleCart,
        closeCart,
        toggle,
      
        count}) {
       let Logo = require("../image/logo-comfy.jpeg")
 //assigning location variable
    const location = useLocation();
 //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");
   
    return (
        <>
        <nav className="navbar page" >
        <div className="nav-center">
          {/* links */}
          <div>
            <button className="toggle-nav">
              <i className="fas fa-bars"></i>
            </button>
            <ul className="nav-links" >
              <li className={splitLocation[1] === "" ? "active" : ""}>
                <Link to="/" className="nav-link"  style={((splitLocation[1]==='products')||(splitLocation[1]==='about')) ?  {color:'black'} : {color:'white'}  }>
                  {" "}
                  home{" "}
                </Link>
              </li>
              <li className={splitLocation[1] === "products" ? "active" : ""}>
                <Link to="/products" className="nav-link" style={((splitLocation[1]==='products')||(splitLocation[1]==='about')) ? {color:'black'}  : {color:'white'} } >
                  {" "}
                  products{" "}
                </Link>
              </li>
              <li className={splitLocation[1] === "about" ? "active" : ""}>
                
                <Link to="/about" className="nav-link" style={((splitLocation[1]==='products')||(splitLocation[1]==='about')) ? {color:'black'}  : {color:'white'} } >
                  {" "}
                  about{" "}
                </Link>
              </li>
            </ul>
          </div>
          {/* logo */}
          <img src={Logo} className="nav-logo" alt="logo" />
          {/* cart icon */}
          <div className="toggle-container">
            <button className="toggle-cart">
              <i className="fas fa-shopping-cart" style={((splitLocation[1]==='products')||(splitLocation[1]==='about')) ? {color:'black'}  : {color:'white'} }  onClick={handleToggleCart}></i>
            </button>
            <span className="cart-item-count">{count}</span>
          </div>
        </div>
      
      </nav>
      {/* {!activeHome ? <Hero  query={splitLocation[1]==='products' ? 'products' : 'about'}/> : null} */}
      {((splitLocation[1]==='products')||(splitLocation[1]==='about')) ? <Hero  query={splitLocation[1]==='products' ? 'products' : 'about'}/> : null} 
      
      
      </>
    );
  }
  
  export default NavBar;
  