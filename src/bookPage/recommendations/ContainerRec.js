import React from 'react';


const ContainerRec = ({ product, onAddToCart, onBuyNow }) => {
  const { image, name, price, description } = product;

  return (
    <div className="product-container-sp">
      
      <img src={image} alt={name} />
      <div className='name-dec-price'>
      <p className='name-prod-sp'>{name}</p>
      <p className='description-prod-sp'>{description}</p>
      <p className='price-prod-sp'>Rs.{price}</p>
       </div>
      
    </div>
  );
};

export default ContainerRec;