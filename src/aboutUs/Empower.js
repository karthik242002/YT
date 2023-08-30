import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch  } from '@fortawesome/free-solid-svg-icons';


const Empower = () => {
    const itemList = [
  {
    title: 'Subsidized Food Program',
    description: "Our social responsibility drives us to tackle hunger head-on. In partnership with a prominent social service organization, we've launched the Subsidized Food program. This endeavor offers affordable and nourishing meals to those experiencing financial challenges. Believing in the fundamental right to nutritious food, we're committed to erasing hunger within our community.",
  },
  {
    title: 'Sustainable Sourcing',
    description: "Preserving our planet for generations to come is paramount. Through sustainable sourcing, we prioritize ethically produced products that minimize environmental impact and uplift local communities. Our conscious choices work towards a greener, healthier world by reducing our carbon footprint.",
  },
  {
    title: 'Inclusivity and Respect',
    description: "At Hari Arunachala, we honor varied beliefs and traditions. Our Religious Store offers sacred items spanning faiths, fostering inclusivity and respect. Everyone is welcomed, as our offerings cater to diverse backgrounds and beliefs.",
  },
  {
    title: 'Empowering Others',
    description: "We're dedicated to nurturing physical, emotional, and spiritual growth. Our initiatives offer opportunities for development, from backing local artisans to affordable meals and literacy promotion through books. Our commitment resonates in our positive societal impact.",
  },
  {
    title: 'Spreading Awareness',
    description: "Social responsibility transcends deeds; it's about shedding light on vital community and global issues. Our platform champions causes dear to us, encouraging others to embark on a journey of compassion and positive transformation alongside us.",
  },
];

  return (
    <div>
      <div className="container">
      <div className="left-column">
        <h2>Empowering Communities, Creating Impact:</h2>
        <p>At Hari Arunachala, we firmly believe that businesses have a unique opportunity and responsibility to contribute to society positively. Our commitment to social responsibility is at the core of everything we do, and it drives us to make a meaningful impact in the lives of those around us.</p>
      </div>
      <div className="right-column">
        <ul className="item-list">
        {itemList.map((item, index) => (
          <li key={index}>
           
            <div className='desc'>
               <h4>{item.title}</h4>
               <p>{item.description}</p>
            </div> 
             <div className='icon'>
               
                <FontAwesomeIcon  icon={faCircleNotch} rotation={180} size="2x" />
                <div className='divider'></div>

            </div>
          </li>
        ))}
      </ul>
      </div>
    </div>
    </div>
  )
}

export default Empower