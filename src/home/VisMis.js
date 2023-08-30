import React from 'react';
import './CSS/VisMis.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';


const VisMis = () => {
  const itemList = [
    {
      title: 'Nourish Lives',
      description: "We're committed to enriching lives through a varied selection of sustainably sourced, high-quality food products. Believing in the fundamental right to nutritious food, our offerings are dedicated to promoting well-being and vitality.",
    },
    {
      title: 'Enrich Souls',
      description: "Our mission goes beyond the physical, aiming to uplift souls through our Religious Store and Books section. Embracing diverse spiritual paths, we provide sacred items and literature to inspire and elevate individuals on their unique spiritual journeys.",
    },
    {
      title: 'Social Responsibility',
      description: "Social responsibility defines us at Hari Arunachala. Through our partnership with a prominent service organization, we're resolute in addressing hunger via the Subsidized Food program. We're proud to stand as a reliable partner, striving to bring positivity to the lives of those facing financial hardships.",
    },
    {
      title: 'Inclusivity and Respect',
      description: "We welcome people from all walks of life and various faiths. Our commitment to inclusivity and respect is reflected in the range of products we offer, catering to diverse needs and beliefs. We aim to create an environment where everyone feels valued and respected.",
    },
    {
      title: 'Sustainability and Consciousness',
      description: "As environmental stewards, we actively adopt sustainable practices in product sourcing, waste reduction, and carbon footprint minimization. Our operations are driven by conscious consumption and responsible choices, reflecting our commitment to the planet's well-being.",
    },
    {
      title: 'Empowering the Community',
      description: "Our vision is to empower individuals and communities to flourish physically, emotionally, and spiritually. Through cultivating togetherness and compassion, we strive to shape a world where everyone realizes their potential and lives purposeful, fulfilling lives.",
    },
  ];

  return (
    <div>
      <div className="container-home">
        <div className="left-column-home">
          <h2>Our Vision and Mission</h2>
          <p>Guided by compassion and social responsibility, we aspire to be a beacon in offering accessible and affordable high-quality food, products, and services. Our vision is a world free from hunger, fostering spiritual growth and nurturing the well-being of every individual.</p>
        </div>
        <div className="right-column-home">
          <ul className="item-list-home">
            {itemList.map((item, index) => (
              <li key={index} className='icon-text'>
                <div className='icon-home'>

                  <FontAwesomeIcon icon={faCircleNotch} rotation={180} size="2x" />
                  <div className='divider'> </div>

                </div>
                <div className='desc-home'>
                  <h6>{item.title}</h6>
                  <p>{item.description}</p>
                </div>

              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default VisMis