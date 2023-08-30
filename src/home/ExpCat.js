import React from 'react';
import './CSS/ExpCat.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faOm, faBook, faBowlRice } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const ExpCat = () => {
  const productList = [
    {
      icon: <FontAwesomeIcon icon={faUtensils} />,
      name: 'Food Products',
      description: 'Discover sustainable, premium food products - from fresh produce to pantry essentials - designed to nourish and delight your senses.',
    },
    {
      icon: <FontAwesomeIcon icon={faOm} />,
      name: 'Religious Store',
      description: 'Explore our Religious Store, celebrating diverse beliefs with sacred items and essentials. Discover divine idols, prayer accessories, and religious texts to enrich your spiritual journey and create a sacred space at home.',
    },
    {
      icon: <FontAwesomeIcon icon={faBook} />,
      name: 'Books',
      description: 'Discover enlightenment in our diverse book collection spanning spirituality, self-help, fiction, and knowledge. Each book opens doors to new perspectives and profound insights, enriching your journey.',
    },
    {
      icon: <FontAwesomeIcon icon={faBowlRice} />,
      name: 'Subsidized Food',
      description: 'Experience our Subsidized Food program, a symbol of social responsibility. Access affordable, nourishing meals crafted with care, ensuring no one in the community faces hunger. Your choice supports positive change in the lives of others.',
    },
  ];
  return (
    <div className='container1-home'>

      <center >
        <h1 className='head1-home'>Explore Categories</h1>
        <p className='desc1-home'>we believe in providing a holistic experience, encompassing nourishment, spirituality, knowledge, and social impact. Explore our categories below and embark on a journey of enrichment</p>
      </center>
      <center className='list1-home'>
        <div className="product-list-home">
          {productList.map((product, index) => (
            <div key={index} className="product1-home">
              <div className='wrap1-home'>
                <div className="icon1-home">{product.icon}</div>
                <div className='shopnow-home'>
                  {/* Use Link to navigate to respective category page */}
                  <Link to={`/${product.name.toLowerCase().replace(' ', '')}`}>
                    <button >Shop Now</button>
                  </Link>
                </div>

              </div>

              <div className="details1-home">
                <h5>{product.name}</h5>
                <p>{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </center>
      <center>
        <p className='bot1-home'> Discover more than products – our categories embody our vision to nourish lives and enrich souls. Join us in creating a world where compassion and sustenance unite.</p>
      </center>
    </div>

  )
}

export default ExpCat
