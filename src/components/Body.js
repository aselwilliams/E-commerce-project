import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import {
  searchFilter,
  filterCategory,
  filterByRange
} from "../reducers/ProductsSlice";
import "../App.css";

import Main from "./Main";
function Body() {
  const dispatch = useDispatch();
  const [range, setRange] = useState(50);
  const [searchVal, setSearchVal] = useState("");
  console.log(range);

  let btnRefA = useRef(null);
  let btnRefI = useRef(null);
  let btnRefL = useRef(null);
  let btnRefM = useRef(null);
  let btnRefC = useRef(null);

  const handleSearch = (e) => {
    setSearchVal(e.target.value);
    dispatch(searchFilter(e.target.value));
  };

  const handleCategory = (category) => {
    dispatch(filterCategory(category));
    if (btnRefA.current.innerHTML === category) {
      btnRefA.current.classList = "company-btn active-btn";
      btnRefL.current.classList = "company-btn";
      btnRefM.current.classList = "company-btn";
      btnRefC.current.classList = "company-btn";
      btnRefI.current.classList = "company-btn";
    }
    if (btnRefI.current.innerHTML === category) {
      btnRefI.current.classList = "company-btn active-btn";
      btnRefL.current.classList = "company-btn";
      btnRefM.current.classList = "company-btn";
      btnRefC.current.classList = "company-btn";
      btnRefA.current.classList = "company-btn";
    }
    if (btnRefL.current.innerHTML === category) {
      btnRefL.current.classList = "company-btn active-btn";
      btnRefA.current.classList = "company-btn";
      btnRefM.current.classList = "company-btn";
      btnRefC.current.classList = "company-btn";
      btnRefI.current.classList = "company-btn";
    }
    if (btnRefM.current.innerHTML === category) {
      btnRefM.current.classList = "company-btn active-btn";
      btnRefL.current.classList = "company-btn";
      btnRefA.current.classList = "company-btn";
      btnRefC.current.classList = "company-btn";
      btnRefI.current.classList = "company-btn";
    }
    if (btnRefC.current.innerHTML === category) {
      btnRefC.current.classList = "company-btn active-btn";
      btnRefL.current.classList = "company-btn";
      btnRefM.current.classList = "company-btn";
      btnRefA.current.classList = "company-btn";
      btnRefI.current.classList = "company-btn";
    }
  };

  const handleRange = (e) => {
    setRange(e.target.value);
    dispatch(filterByRange(range));
  };
  return (
    <section className="products">
      {/* filters */}
      <div className="filters">
        <div className="filters-container">
          {/* search */}
          <form className="input-form">
            <input
              type="text"
              className="search-input"
              value={searchVal}
              placeholder="search..."
              onChange={handleSearch}
            />
          </form>
          {/* categories */}
          <h4>Company</h4>
          <article className="companies">
            <button
              ref={btnRefA}
              onClick={() => handleCategory("all")}
              className="company-btn"
            >
              all
            </button>
            <button
              ref={btnRefI}
              onClick={() => handleCategory("ikea")}
              className="company-btn"
            >
              ikea
            </button>
            <button
              ref={btnRefL}
              onClick={() => handleCategory("liddy")}
              className="company-btn"
            >
              liddy
            </button>
            <button
              ref={btnRefM}
              onClick={() => handleCategory("marcos")}
              className="company-btn"
            >
              marcos
            </button>
            <button
              ref={btnRefC}
              onClick={() => handleCategory("caressa")}
              className="company-btn"
            >
              caressa
            </button>
          </article>
          {/* price */}
          <h4>Price</h4>
          <form className="price-form">
            <input
              type="range"
              className="price-filter"
              min="0"
              value={range}
              max="100"
              onChange={handleRange}
            />
          </form>
          <p className="price-value">Value: ${range}</p>
        </div>
      </div>
      <div className="products-container">
        {/* <h3 class="filter-error">sorry, no products matched your search</h3> */}
        <Main />
      </div>
    </section>
  );
}

export default Body;
