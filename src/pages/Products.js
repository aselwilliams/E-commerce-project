import React from "react";
import { useParams } from "react-router-dom";

const Products = ({ filteredProducts, handleAddToCart }) => {
  const { itemId } = useParams();
  return (
    <>
      {filteredProducts.map((item) => {
        if (item.id === itemId) {
          return (
            <section className="single-product">
              <div className="section-center single-product-center">
                <img
                  src={item.fields.image[0].thumbnails.large.url}
                  alt="product"
                />
                <article className="single-product-info">
                  <div>
                    <h2 className="single-product-title">{item.fields.name}</h2>
                    <p className="single-product-company text-slanted">by {item.fields.company}</p>
                    <p className="single-product-price">${item.fields.price / 100}</p>
                    <div className="single-product-colors">
                      <span
                        className="product-color"
                        style={{backgroundColor: 'rgb(241, 80, 37)'}}
                      ></span>
                      <span
                        className="product-color"
                        style={{backgroundColor: 'rgb(34, 34, 34)'}}
                      ></span>
                    </div>
                    <p className="single-product-desc">
                      Cloud bread VHS hell of banjo bicycle rights jianbing
                      umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist
                      yr dreamcatcher waistcoat, authentic chillwave trust fund.
                      Viral typewriter fingerstache pinterest pork belly
                      narwhal. Schlitz venmo everyday carry kitsch pitchfork
                      chillwave iPhone taiyaki trust fund hashtag kinfolk
                      microdosing gochujang live-edge
                    </p>
                    <button onClick={() => handleAddToCart(item.id)} className="addToCartBtn btn" data-id="id">
                      add to cart
                    </button>
                  </div>
                </article>
              </div>
            </section>
          );
        }
      })}
    </>
  );
};

export default Products;
