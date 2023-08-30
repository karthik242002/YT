import React from 'react';
import Category from '../Category';

const Products = () => {
  return (

    <section className='fp-head'>
        <div>
        <center>
            <Category></Category>
        </center>
        
       <div className='product-head'>
        <h2>Products</h2>
        <div>
        <p>Discover a diverse range of food products thoughtfully curated to elevate your culinary experience. We take pride in offering a wide selection to cater to your unique tastes and preferences:</p>
       <button className='product-head-button'>View More</button>
       </div>
       </div> 
       </div> 
       
    </section>
  )
}

export default Products
