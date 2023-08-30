import React from 'react'

const SocialInitiatives = () => {
     const items=[
        {
        title:'Subsidized Food Program', 
        description:"Our Subsidized Food program is a compassionate initiative in collaboration with a leading social service organization. We are dedicated to eradicating hunger by providing affordable and nutritious meals to individuals and families facing financial hardships. Our goal is to ensure that no one in the community goes hungry, promoting food security and well-being for all."
    },
     {
        title:'Empowering Local Artisans', 
        description:"We recognize the value of traditional craftsmanship and support local artisans in their journey to sustainability. Through our partnership with skilled artisans, we offer a range of handcrafted products that showcase their talent and preserve ancient techniques. By empowering local artisans, we contribute to the preservation of cultural heritage and create opportunities for growth."
    },
     {
        title:'Promoting Literacy and Education', 
        description:"Education is a powerful tool for empowerment. We are dedicated to promoting literacy and education in underserved communities. Through book donations, literacy programs, and educational resources, we aim to ignite a love for learning and knowledge among children and adults alike. Our efforts seek to unlock the potential of future generations and create a brighter tomorrow."
    },
     {
        title:'Environmental Stewardship', 
        description:"As custodians of the environment, we are committed to sustainable practices and reducing our carbon footprint. We prioritize eco-friendly sourcing, waste reduction, and responsible packaging to protect our planet for future generations. By promoting environmental stewardship, we strive to create a greener and more sustainable world."
    },
     
]
  return (
    <div>
      <center>
        <div className='social'> 
            <h2>Social Initiatives</h2>
            <p>At Hari Arunachala, social responsibility lies at the core of our values. We are committed to making a positive impact in the lives of individuals and communities through our various social initiatives. By extending compassion and care, we aim to create a world where sustenance, spirituality, and opportunities for growth are accessible to all. Explore our impactful initiatives below:</p>
        </div>
        {items.map((item, index) => (
          <div key={index} className='social-content'>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        ))}
        <div className='social-footer'>
            <h4>Join Us in Creating Lasting Impact</h4>
            <p>Our social initiatives are a testament to our belief in the transformative power of compassion and social responsibility. We are grateful for the support and trust of our customers and partners, as together, we create a lasting impact on the lives of those in need.</p>
        </div>
      </center>
    </div>
  )
}

export default SocialInitiatives
