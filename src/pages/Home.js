import React from 'react';
import {useNavigate, Link} from 'react-router-dom'

const Home = ({featured, handleAddToCart}) => {
const navigate=useNavigate()

const navigateToProducts=()=>{
    navigate('/products')
}

  return (
    <div>
    <section className="hero">
      <div className="hero-container">
        <h1 className="text-slanted">
          rest, relax, unwind
        </h1>
        <h3>Embrace your choices - we do</h3>
        <button className="hero-btn" onClick={navigateToProducts}>
          show now
        </button>
      </div>
    </section>
    <section className="section featured">
      <div className="title">
        <h2><span>/</span> featured</h2>
      </div>
      <div className="featured-center section-center"> 
      {featured.map((item)=>{
          return (
        <article className="product" key={item.id}>
          <div className="product-container">
            <img src={item.fields.image[0].thumbnails.large.url} className="product-img img" alt={item.fields.name}/>
           
            <div className="product-icons">
            <Link
                  to={`/products/${item.id}`}
                  class="product-icon"
                >
                  <i class="fas fa-search"></i>
                </Link>
              {/* <a href="product.html?id=rec43w3ipXvP28vog" className="product-icon">
                <i className="fas fa-search"></i>
              </a> */}
              <button
                  onClick={() => handleAddToCart(item.id)}
                  class="product-cart-btn product-icon "
                  data-id="rec43w3ipXvP28vog"
                >
                  <i class="fas fa-shopping-cart"></i>
                </button>
              {/* <button className="product-cart-btn product-icon" data-id="rec43w3ipXvP28vog">
                <i className="fas fa-shopping-cart"></i>
              </button> */}
            </div>
          </div>
          <footer>
            <p className="product-name">{item.fields.name}</p>
            <h4 className="product-price">${item.fields.price/100}</h4>
          </footer>
        </article>  
          )  
      })}
     
        </div>
      <button className="btn" onClick={navigateToProducts}>
        all products
      </button>
    </section>
    </div>
  )
}

export default Home