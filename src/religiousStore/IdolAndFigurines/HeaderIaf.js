import React from 'react'
import Category from '../../foodProducts/Category'

const HeaderIaf = () => {
  return (
    <section className='fp-head'>
        <div>
        <center className='category-Iaf'>
            <Category></Category>
        </center>
       
       <div className='product-head'>
        <h2>Idols and Figurines</h2>
        <div>
        <p>Discover divine idols and figurines representing various deities and avatars. Crafted with intricate detail and reverence, these sacred representations serve as focal points for devotion and meditation.</p>
       <button className='product-head-button'>View More</button>
       </div>
       </div>
        </div>
    </section>
  )
}

export default HeaderIaf