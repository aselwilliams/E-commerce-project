function Cart({ closeCart, toggle, inCart, count, handleDelete, total }) {
    return (
      <div className={toggle ? "show cart-overlay" : "cart-overlay"}>
        <aside className={toggle ? "show cart" : "cart"}>
          <button className="cart-close" onClick={closeCart}>
            X {/* <i className="fas fa-times"></i> */}
          </button>
          <header>
            <h3 className="text-slanted">your bag</h3>
          </header>
          {/* cart items */}
          <div className="cart-items">
            {inCart.map((item) => {
              return (
                <article
                  class="cart-item"
                  data-id="rec8kkCmSiMkbkiko"
                  key={item.id}
                >
                  <img
                    src={item.fields.image[0].thumbnails.small.url}
                    class="cart-item-img"
                    alt={item.fields.name}
                  />
                  <div>
                    <h4 class="cart-item-name">{item.fields.name}</h4>
                    <p class="cart-item-price">${item.fields.price / 100}</p>
                    <button
                      class="cart-item-remove-btn"
                      data-id="rec8kkCmSiMkbkiko"
                      onClick={() => handleDelete(item)}
                    >
                      remove
                    </button>
                  </div>
  
                  <div>
                    <button
                      class="cart-item-increase-btn"
                      data-id="rec8kkCmSiMkbkiko"
                    >
                      <i class="fas fa-chevron-up"></i>
                    </button>
                    <p class="cart-item-amount" data-id="rec8kkCmSiMkbkiko">
                      1
                    </p>
                    <button
                      class="cart-item-decrease-btn"
                      data-id="rec8kkCmSiMkbkiko"
                    >
                      <i class="fas fa-chevron-down"></i>
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
          {/* footer */}
          <footer>
            <h3 className="cart-total text-slanted">total : ${total.toFixed(2)}</h3>
            <button className="cart-checkout btn">checkout</button>
          </footer>
        </aside>
      </div>
    );
  }
  
  export default Cart;
  