import React from 'react'
import HeaderNF from './HeaderNF'
import SliderNF from './SliderNF'

const NonfictionLayout = () => {
  return (
    <div className='spirit-layout'>
      <HeaderNF></HeaderNF>
      <SliderNF></SliderNF>
      <div> 
  <center>
  <button className='book-head-button'>View All</button>
  </center>
  </div>
      
    </div>
  )
}

export default NonfictionLayout