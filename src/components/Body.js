import Main from "./Main";
function Body({ handleAddToCart }) {
  return (
    <section class="products">
      {/* filters */}
      <div class="filters">
        <div class="filters-container">
          {/* search */}
          <form class="input-form">
            <input type="text" class="search-input" placeholder="search..." />
          </form>
          {/* categories */}
          <h4>Company</h4>
          <article class="companies">
            <button class="company-btn">all</button>
            <button class="company-btn">ikea</button>
          </article>
          {/* price */}
          <h4>Price</h4>
          <form class="price-form">
            <input
              type="range"
              class="price-filter"
              min="0"
              value="50"
              max="100"
            />
          </form>
          <p class="price-value"></p>
        </div>
      </div>
      {/* products */}
      <div class="products-container">
        <Main handleAddCart={handleAddToCart} />
      </div>
    </section>
  );
}

export default Body;
