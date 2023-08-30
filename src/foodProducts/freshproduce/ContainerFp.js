// Container.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const ContainerFp = ({ product, onAddToCart, onBuyNow }) => {
  const { image, name, price, description } = product;

  return (
    <div className="product-container">
      
      <img src={image} alt={name} />
      <div className='name-price'>
      <p className='name-prod'>{name}</p>
      <p className='price-prod'>Rs.{price}</p>
       </div>
      <p className='description-prod'>{description}</p>
     
      <div className='button-1-2'>
        <button onClick={() => onBuyNow(product)}  className="button-1">Buy Now</button>
        <button onClick={() => onAddToCart(product)}  className="button-2">Add to Cart<FontAwesomeIcon icon={faCartShopping} /></button>
      </div>
    </div>
  );
};

export default ContainerFp;