import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const ContainerPG = ({ product, onAddToCart, onBuyNow }) => {
  const { image, name, price, description } = product;

  return (
    <div className="product-container-sp">
      
      <img src={image} alt={name} />
      <center className='name-dec-price'>
      <p className='name-prod-sp'>{name}</p>
      <p className='description-prod-sp'>{description}</p>
      <p className='price-prod-sp'>Rs.{price}</p>
       </center>
      
     
      <div className='button-1-2'>
        <button onClick={() => onBuyNow(product)}  className="button-1-sp">Buy Now</button>
        <button onClick={() => onAddToCart(product)}  className="button-2-sp">Add to Cart<FontAwesomeIcon icon={faCartShopping} /></button>
      </div>
    </div>
  );
};

export default ContainerPG;