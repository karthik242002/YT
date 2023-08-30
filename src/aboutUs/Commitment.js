import React from 'react'

const Commitment = () => {
    const items = [
    {
      image: 'https://via.placeholder.com/150',
      heading: 'Food Products',
      description: 'Our commitment to nourishment begins with our thoughtfully curated food products. We source sustainably, supporting local communities and bringing fresh, wholesome goodness to your table.',
    },
    {
      image: 'https://via.placeholder.com/150',
      heading: 'Religious Store',
      description: 'Description for Item Embrace spirituality and find solace in our Religious Store, offering sacred items and essentials that cater to diverse beliefs, fostering an environment of inclusivity and reverence.',
    },
    {
      image: 'https://via.placeholder.com/150',
      heading: 'Books',
      description: 'Enrich your mind and soul with knowledge and inspiration from our vast collection of books. Explore spirituality, personal growth, captivating fiction, and more, each book a gateway to new horizons.',
    },
    {
      image: 'https://via.placeholder.com/150',
      heading: 'Item Subsidized',
      description: ' Our Subsidized Food program embodies our core value of social responsibility. We strive to end hunger in our community by providing affordable and nourishing meals to those in need.',
    },
];
  return (
    <div className='commit'>
      <section>
      <h2>Our Commitment to Social Responsibility:</h2>
      <p>As a socially responsible organization, we understand the importance of giving back to the community. We take pride in our partnership with a leading social service organization, through which we offer subsidized food to those facing financial hardships. Our Subsidized Food program is a compassionate initiative aimed at ensuring that no one in the community goes hungry.</p>
      </section>
      <h2>The Essence of Our Offerings:</h2>
      <div className='offerings-container'>
        {items.map((item, index) => (
          <div key={index} className='offerings'>
            <img src={item.image} alt={item.heading} />
            <h4>{item.heading}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Commitment
