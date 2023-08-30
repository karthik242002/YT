// App.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft,faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Container from '../pantryEssentials/ContainerPe';

const SliderPe = () => {
  const [cart, setCart] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerChunkSize = 4;

  const products = [
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfx6RK0hEwBSSo10mfwgLu-mTs3kUTM_pQKiSeOb_LYeqywl88X43cT_aSZvIh1qa89Ow&usqp=CAU', name: 'Product 1', price: 100 , description:'descripton'},
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfx6RK0hEwBSSo10mfwgLu-mTs3kUTM_pQKiSeOb_LYeqywl88X43cT_aSZvIh1qa89Ow&usqp=CAU', name: 'Product 2', price: 200 , description:'descripton'},
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfx6RK0hEwBSSo10mfwgLu-mTs3kUTM_pQKiSeOb_LYeqywl88X43cT_aSZvIh1qa89Ow&usqp=CAU', name: 'Product 3', price: 200 , description:'descripton'},
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfx6RK0hEwBSSo10mfwgLu-mTs3kUTM_pQKiSeOb_LYeqywl88X43cT_aSZvIh1qa89Ow&usqp=CAU', name: 'Product 4', price: 200 , description:'descripton'},
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfx6RK0hEwBSSo10mfwgLu-mTs3kUTM_pQKiSeOb_LYeqywl88X43cT_aSZvIh1qa89Ow&usqp=CAU', name: 'Product 5', price: 200 , description:'descripton'},
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfx6RK0hEwBSSo10mfwgLu-mTs3kUTM_pQKiSeOb_LYeqywl88X43cT_aSZvIh1qa89Ow&usqp=CAU', name: 'Product 6', price: 200, description:'descripton'},
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfx6RK0hEwBSSo10mfwgLu-mTs3kUTM_pQKiSeOb_LYeqywl88X43cT_aSZvIh1qa89Ow&usqp=CAU', name: 'Product 7', price: 200 , description:'descripton'},
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfx6RK0hEwBSSo10mfwgLu-mTs3kUTM_pQKiSeOb_LYeqywl88X43cT_aSZvIh1qa89Ow&usqp=CAU', name: 'Product 8', price: 200 , description:'descripton'},
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfx6RK0hEwBSSo10mfwgLu-mTs3kUTM_pQKiSeOb_LYeqywl88X43cT_aSZvIh1qa89Ow&usqp=CAU', name: 'Product 9', price: 200 , description:'descripton'},
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfx6RK0hEwBSSo10mfwgLu-mTs3kUTM_pQKiSeOb_LYeqywl88X43cT_aSZvIh1qa89Ow&usqp=CAU', name: 'Product 10', price: 200 , description:'descripton'},
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfx6RK0hEwBSSo10mfwgLu-mTs3kUTM_pQKiSeOb_LYeqywl88X43cT_aSZvIh1qa89Ow&usqp=CAU', name: 'Product 11', price: 200 , description:'descripton'},
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfx6RK0hEwBSSo10mfwgLu-mTs3kUTM_pQKiSeOb_LYeqywl88X43cT_aSZvIh1qa89Ow&usqp=CAU', name: 'Product 12', price: 200 , description:'descripton'},
    // Add more products as needed
  ];

   const visibleProducts = products.slice(
    currentIndex,
    currentIndex + containerChunkSize
  );
   const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      Math.max(prevIndex - containerChunkSize, 0)
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + containerChunkSize, products.length - 1)
    );
  };

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleBuyNow = (product) => {
    // Implement buy now functionality
  };

  return (
    <div className="app">
      <div>
      <div className="product-row">
        {visibleProducts.map((product, index) => (
          <Container
            key={index}
            product={product}
            onAddToCart={handleAddToCart}
            onBuyNow={handleBuyNow}
          />
        ))}
      </div>
    </div>
     <div className="nav-icons">
        <button onClick={handlePrev} disabled={currentIndex === 0} className='left-arrow'>
         <FontAwesomeIcon icon={faArrowLeft} className='left-icon'/>
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex >= products.length - containerChunkSize} className='right-arrow'>
          <FontAwesomeIcon icon={faArrowRight} className='right-icon' />
        </button>
      </div>
</div>
  );
};

export default SliderPe;