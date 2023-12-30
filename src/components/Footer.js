import React from 'react';
import './styles/footer.css'; // Create a separate CSS file for styling if needed

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container" id="footer-container">
        <p className='footer-p'>&copy; {currentYear} Abhinaba Chakraborty. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
