import { useState } from "react";

import Main from "./Main";
function Body({ handleAddToCart,handleCategory,products,filteredProducts}) {
    const [range,setRange]=useState(50)
    const [filterByRange,setFilterByRange]=([])

    const filterRange=()=>{
      
      const productsCopy = filteredProducts.map((item)=>({...item}))
      const newProducts = productsCopy.filter((item) => (item.fields.price/100) < parseInt(range, 10));
     return newProducts
    }


    const handleRange=(e)=>{
        setRange(e.target.value)
    }
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
            <button onClick={()=>handleCategory('all')} class="company-btn">all</button>
            <button onClick={()=>handleCategory('ikea')} class="company-btn">ikea</button>
            <button onClick={()=>handleCategory('liddy')}class="company-btn">liddy</button>
            <button onClick={()=>handleCategory('marcos')} class="company-btn">marcos</button>
            <button onClick={()=>handleCategory('caressa')} class="company-btn">caressa</button>
          </article>
          {/* price */}
          <h4>Price</h4>
          <form class="price-form">
            <input
              type="range"
              class="price-filter"
              min="0"
              value={range}
              max="100"
              onChange={handleRange}
            />
          </form>
          <p class="price-value">Value: ${range}</p>
        </div>
      </div>
      {/* products */}
      <div class="products-container">
        <Main handleAddCart={handleAddToCart} filteredProducts={filteredProducts} filterByRange={filterByRange} products={products} filterRange={filterRange} range={range}/>
      </div>
    </section>
  );
}

export default Body;
