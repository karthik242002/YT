import React from 'react'

const Team = () => {

    const items=[
        {
        title:'Our Visionaries', 
        description:"Our founders are the visionaries behind Hari Arunachala. Driven by a profound desire to create a better world, they laid the foundation for our company, infusing it with core values of compassion, inclusivity, and sustainability."
    },
     {
        title:'Operations Team', 
        description:"Behind the scenes, our Operations Team works tirelessly to ensure every aspect of Hari Arunachala functions seamlessly. They are the backbone of our organization, ensuring that our products and services uphold the highest"
    },
     {
        title:'Customer Experience Specialists', 
        description:"Our Customer Experience Specialists are the friendly voices you encounter when you interact with us. They are dedicated to providing you with exceptional service, ensuring that your needs are met with warmth, care, and efficiency."
    },
     {
        title:'Spiritual Curators', 
        description:"In our Religious Store, our Spiritual Curators bring their deep understanding of spirituality and diverse faiths to curate a collection of sacred items that inspire and resonate with people from various beliefs."
    },
     {
        title:'Book Enthusiasts', 
        description:"Our Book Enthusiasts are passionate about the power of knowledge and literature. They carefully curate our diverse range of books, each one a gateway to new perspectives and profound insights."
    },
     {
        title:'Social Impact Coordinators', 
        description:"Leading our social initiatives, our Social Impact Coordinators are dedicated to making a positive impact in the lives of those in need. They spearhead our Subsidized Food program and other community-driven initiatives with compassion and dedication."
    },
]
  return (
    <center>
      <div className='ourteam'>
      <section className='team'>
      <h6>Our Team</h6>
      <h1>Meet the team</h1>
      <p>At Hari Arunachala, our team is a dedicated group of individuals brought together by a shared commitment to our vision of nourishing lives and enriching souls. We believe in the power of compassion, social responsibility, and a genuine desire to make a positive impact in the lives of others. Get to know the faces behind our mission:</p>
      </section>
      
        {items.map((item, index) => (
          <div key={index} className='points'>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      
      </div>
      <section className='team-end'>
        <h2>Thank You for Being a Part of Our Journey</h2>
        <p>We are grateful for the support and trust of our customers and partners, who empower us to serve with purpose and passion. Together, let's continue making a positive impact and nurturing a world filled with love, care, and positivity.</p>
      </section>
    </center>
  )
}

export default Team
