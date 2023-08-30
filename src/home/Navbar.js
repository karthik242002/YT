import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CSS/Navbar.css';
import logo from './CSS/logo.png';
import { FaAngleDown } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [products, setProducts] = useState([
    { name: 'Food Products', description: 'Lorem ipsum dolor sit amet consectetur elit', link: "/foodproducts" },
    { name: 'Religious Store', description: 'Lorem ipsum dolor sit amet consectetur elit', link: "/ReligiousStore" },
    { name: 'Books', description: 'Lorem ipsum dolor sit amet consectetur elit', link: "/Books" },
    { name: 'Subsidized Food', description: 'Lorem ipsum dolor sit amet consectetur elit', link: "/SubsidizedFood" }
  ]);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="quote">
        <p>Nourishing Lives, Enriching Souls</p>
      </div>
      <div className="menu">
        <ul className="list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><a href="#">Contact Us</a></li>
          <li className={`dropdown-item ${isDropdownOpen ? 'open' : ''}`}>
            <a href="#" onClick={toggleDropdown}>
              Products   <FaAngleDown />
            </a>


            {isDropdownOpen && (
              <div className="dropdown-content">
                <h4 className='product'>Products</h4>
                {/* Map over the products array to display the list of products */}
                {products.map((product, index) => (
                  <div className="prod-details" key={index}>

                    <Link to={product.link}>
                      <div className='prod-name-icon'>
                        <div className='icon-products'><FontAwesomeIcon icon={faCircleNotch} rotation={180} size="12x" /></div>

                        <h4 className='product-name-nav'>{product.name}</h4>

                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            )}

          </li>

          <button className='login'>Login</button>
        </ul>
      </div>
    </nav>
  );

  // Function to apply responsive styles
  function applyResponsiveStyles() {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 768) {
      // Apply mobile styles
      document.querySelector('.navbar').style.padding = '10px 20px';
      // Adjust other styles as needed
    } else {
      // Apply desktop styles
      document.querySelector('.navbar').style.padding = '10px 70px';
      // Adjust other styles as needed
    }
  }

  // Initial call to apply responsive styles
  applyResponsiveStyles();

  // Event listener for window resize
  window.addEventListener('resize', applyResponsiveStyles);

}

export default Navbar;
