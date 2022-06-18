// import { useState } from "react";
// import { data } from "../products";

const Main = ({ handleAddCart,filteredProducts,filterByRange,products,filterRange,range }) => {
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
                <a
                  href="product.html?id=rec43w3ipXvP28vog"
                  class="product-icon"
                >
                  <i class="fas fa-search"></i>
                </a>
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
