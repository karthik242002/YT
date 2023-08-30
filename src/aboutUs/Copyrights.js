import React from 'react';
import logo from '../home/CSS/logo.png'

const Copyrights = () => {
  return (
    <footer className="footer-copyrights">
      <div className="copy-left">
        <img src={logo} alt="Logo" className="copy-logo" />
        <blockquote className="copy-quote">
          Nourishing Lives, Enriching Souls
        </blockquote>
      </div>
      <div className="copy-right">
        <p className="copyright">© 2023 Hari Arunachala. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Copyrights
