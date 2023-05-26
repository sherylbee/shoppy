import React from 'react'
import './Home.css'
import addToCartBanner from './assets/images/add-to-cart-5751360-0.svg';
import purchaseCompleteBanner from './assets/images/buy-one-get-one-free-shopping-offer-5751358-0.svg';
import buyOneGetOneBanner from './assets/images/girl-doing-online-shopping-5751355-0.svg';
import Product from './Product';
import {formatNumber} from './helpers'

function Home() {

  return (
    <div>
        <div className="home">
            <div className="home-container">
                <div className="hero-imageContainer">
                    <img src={purchaseCompleteBanner} alt="" className="home-image hero-image" />
                    <img src={addToCartBanner} alt="" className="home-image hero-image" />
                </div>
                <div className="home-productsContainer">
                {/* props = title, price, star_rating, image*/}
                  <Product title="Fur Coat" price={formatNumber(2454)} rating={2} reviews={1342}/>
                  <Product/>
                  <Product/>
                  <Product/>
                  <Product/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home;