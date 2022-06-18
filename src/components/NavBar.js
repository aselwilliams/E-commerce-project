function NavBar({ handleToggleCart,count }) {
    return (
      <nav class="navbar page">
        <div class="nav-center">
          {/* links */}
          <div>
            <button class="toggle-nav">
              <i class="fas fa-bars"></i>
            </button>
            <ul class="nav-links">
              <li>
                <a href="index.html" class="nav-link">
                  {" "}
                  home{" "}
                </a>
              </li>
              <li>
                <a href="products.html" class="nav-link">
                  {" "}
                  products{" "}
                </a>
              </li>
              <li>
                <a href="about.html" class="nav-link">
                  {" "}
                  about{" "}
                </a>
              </li>
            </ul>
          </div>
          {/* logo */}
          <img src="./images/logo-black.svg" class="nav-logo" alt="logo" />
          {/* cart icon */}
          <div class="toggle-container">
            <button class="toggle-cart" onClick={handleToggleCart}>
              <i class="fas fa-shopping-cart"></i>
            </button>
            <span class="cart-item-count">{count}</span>
          </div>
        </div>
      </nav>
    );
  }
  
  export default NavBar;
  