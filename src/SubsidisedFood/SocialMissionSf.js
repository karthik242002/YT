import React from 'react'
import dummy from '../home/CSS/dummy.png'

const SocialMissionSf = () => {
  return (
    <div className='socialmission-sf'>
      <section className='socialmission-content'>
        <h2>Our Social Mission</h2>
        <p>Hari Arunachala's Subsidized Food program embodies our social mission of serving the community with compassion and care. We believe that access to nutritious food is a fundamental human right, and through this program, we strive to make a positive impact in the lives of those in need.</p>
        <button>Learn More</button>
      </section>
      <section className='socialmission-img'>
        <img src={dummy} alt="Social mission" />
      </section>
    </div>
  )
}

export default SocialMissionSf
