import React from 'react';
import './CSS/Social.css';
import dummy from './CSS/dummy.png';

const Social = () => {
  return (
    <div className='socialwrap-home'>
      <section className='social-home'>
        <h2>Learn More About Social Initiatives</h2>
        <p>Explore our Subsidized Food program, ensuring affordable meals for those in need. Read impact stories, understand kindness's global impact, and join our journey for a meaningful difference.</p>
        <button className='learnmore-home'>Learn More</button>
         
      </section>
      <section className='socialimage-home'>
        <img src={dummy} alt="image-home" /> 
      </section>
    </div>
  )
}

export default Social
