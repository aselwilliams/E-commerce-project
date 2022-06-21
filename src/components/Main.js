// import { useState } from "react";
// import { data } from "../products";
import {Link} from 'react-router-dom'

const Main = ({ handleAddCart,filteredProducts,filterByRange,products,filterRange,range,search }) => {
  return (
    <>
      {filterRange().map((item) => {
       
        return (
          <article className="product" key={item.id}>
            <div class="product-container">
              <img
                src={item.fields.image[0].thumbnails.large.url}
                className="product-img img"
                alt={item.fields.name}
              />
              <p>{item.fields.name}</p>
              <div class="product-icons">
                <Link
                  to={`/products/${item.id}`}
                  class="product-icon"
                >
                  <i class="fas fa-search"></i>
                </Link>
                <button
                  onClick={() => handleAddCart(item.id)}
                  class="product-cart-btn product-icon "
                  data-id="rec43w3ipXvP28vog"
                >
                  <i class="fas fa-shopping-cart"></i>
                </button>
              </div>
              <footer>
                <p className="product-name">{item.fields.name}</p>
                <h4 className="product-price">${item.fields.price / 100}</h4>
              </footer>
            </div>
          </article>
        );
      })}
    </>
  );
};
export default Main;
