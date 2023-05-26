import React from 'react'
const numberOfReviews = Math.floor(Math.random()*1000);
import someProduct from './assets/images/fashion-model-in-fur.jpg';
import './Product.css';
const productMeta = {rating:5};

function Product({title, price, rating, reviews}) {//todo: add image to props

  const emojiRating = [...Array(rating)].map((star, i)=> '😄')

  return (
    <div className='product-tile'>
        <div className="product-img-container">
          <img src={someProduct} alt="" className="product-image" />
        </div>
        
        <div className="product-specs">
            <h4 className="product-title">{title || 'cool thingy'}</h4>
            <div className="product-price">{price || '$343'}</div>
            <div className="product-rating">
              {emojiRating}  
              <span className="product-rating-number">{reviews ? reviews.toLocaleString():numberOfReviews.toLocaleString()}</span>
            </div>
        </div>
        <button className="product-add-to-cart">Add to Cart</button>
  </div>
  )
}

export default Product

