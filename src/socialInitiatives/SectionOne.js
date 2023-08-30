import React from 'react'
import dummy from '../home/CSS/dummy.png'

const SectionOne = () => {
  return (
    <div className='sectionone-SI'>
      <section className='section-left-SI'>
        <h2>Purchase with Purpose</h2>
        <p>Every purchase you make at Hari Arunachala supports our social initiatives. A portion of the proceeds from each sale goes directly towards funding our projects. By choosing our products, you play a vital role in making a difference.</p>
      </section>
      <section className='section-right-SI'>
        <img src={dummy} alt="Image of purchase" />
      </section>
    </div>
  )
}

export default SectionOne
