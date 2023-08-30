import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch  } from '@fortawesome/free-solid-svg-icons';

const CorevalueList = () => {

    const itemList = [
  {
    title: 'Compassion and Empathy',
    description: "We believe in the transformative power of compassion and empathy. We treat every individual with kindness and understanding, recognizing that each person's journey is unique. Our commitment to compassion drives us to make a positive impact on the lives of others, nurturing a world filled with care and support.",
  },
  {
    title: 'Inclusivity and Respect',
    description: "We embrace the diversity of beliefs, cultures, and backgrounds. At Hari Arunachala, inclusivity is paramount, and we strive to create an environment where everyone feels valued and respected. We uphold the principle of respect in all our interactions, fostering a sense of belonging and acceptance.",
  },
  {
    title: 'Social Responsibility',
    description: "As a socially responsible organization, we believe in giving back to the community and making a meaningful difference. Our initiatives are driven by a genuine desire to address social issues, promote well-being, and empower individuals and communities to thrive.",
  },
  {
    title: 'Sustainability and Conscious Consumption',
    description: "We are stewards of the environment and actively promote sustainability. Our commitment to conscious consumption influences our sourcing practices, waste reduction efforts, and eco-friendly initiatives. By treading lightly on the planet, we aim to preserve it for future generations.",
  },
  {
    title: 'Integrity and Transparency',
    description: "Integrity is the cornerstone of our relationships with customers, partners, and the community. We uphold ethical practices, honesty, and transparency in all our endeavours. Our commitment to integrity fosters trust and confidence in our brand.",
  },
  {
    title: 'Continuous Growth and Innovation',
    description: "We believe in continuous growth and the power of innovation. We constantly strive to improve our offerings, services, and social initiatives. Our thirst for knowledge and exploration drives us to discover new ways to create a positive impact in the world.",
  },
  {
    title: 'Empowerment and Personal Fulfilment',
    description: "At Hari Arunachala, we are committed to empowering individuals to thrive physically, emotionally, and spiritually. We believe in the importance of personal fulfilment and growth. Through our products, services, and social initiatives, we aim to support individuals in their journey of self-discovery and well-being.",
  },
];

  return (
    <center>
      <div className="corevalue-list">
        {itemList.map((item, index) => (
          <div key={index}>
           
            <div className='core-right'>
               <h4>{item.title}</h4>
               <p>{item.description}</p>
            </div> 
             <div className='core-left'>
               
                <FontAwesomeIcon  icon={faCircleNotch} rotation={180} size="2x" />
                <div className='divider'></div>

            </div>
          </div>
        ))}
      </div>
    </center>
  )
}

export default CorevalueList
