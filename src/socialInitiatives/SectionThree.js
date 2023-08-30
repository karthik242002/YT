import React from 'react'
import dummy from '../home/CSS/dummy.png'

const SectionOne = () => {
  return (
    <div className='sectionone-SI'>
      <section className='section-left-SI'>
        <h2>Engage with Impact Stories</h2>
        <p>Explore the impact stories of individuals and communities who have benefited from our initiatives. Engage with their stories and share your thoughts to create a sense of community and support</p>
      </section>
      <section className='section-right-SI'>
        <img src={dummy} alt="Image of purchase" />
      </section>
    </div>
  )
}

export default SectionOne