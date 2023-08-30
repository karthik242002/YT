import React from 'react';
import Copyrights from './Copyrights';

const Footer = () => {
    const  Links=[
        {
            tittle:"column one",
            link1:"link one",
            link2:"link two",
            link3:"link three",
            link4:"link four",
            link5:"link five",
        },
        {
            tittle:"column two",
            link1:"link one",
            link2:"link two",
            link3:"link three",
            link4:"link four",
            link5:"link five",
        },
        {
            tittle:"column three",
            link1:"link one",
            link2:"link two",
            link3:"link three",
            link4:"link four",
            link5:"link five",
        },
        {
            tittle:"column four",
            link1:"link one",
            link2:"link two",
            link3:"link three",
            link4:"link four",
            link5:"link five",
        },
    ]
  return (
    <div className=' about-footer'>
      <section className='footer-section'>
        
      <div className='footer-container'>
       
        
        {Links.map((item, index) => (
          <ul key={index} className='footer-links'>
            
            <h6>{item.tittle}</h6>
            <li> <a href="#">{item.link1}</a></li>
            <li> <a href="#">{item.link2}</a></li>
            <li> <a href="#">{item.link3}</a></li>
            <li> <a href="#">{item.link4}</a></li>
            <li> <a href="#">{item.link5}</a></li>
            
          </ul>
        ))}
      </div>
      <Copyrights></Copyrights>
      </section>
    </div>
  )
}

export default Footer
