import React from 'react';
import './styles/footer.css';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const colorStyle={
    color: '#ffffff'
  }
  const contactDetails = [
    {
      text:"email",
      link:"mailto:cabhinaba3@gmail.com"
    },
    {
      text:"LinkedIn",
      link:"https://www.linkedin.com/in/cabhisr4/"
    },
    {
      text:"Facebook",
      link:"https://www.facebook.com"
    },
    {
      text:"GitHub",
      link:"https://github.com/cohitherewer"
    }
  ]
  return (
    <footer className="container footer justify-content-center">
      <div class="container">
        <div class="contact-section">
          <div class="contact-details d-flex flex-wrap justify-content-center">
            {contactDetails.map((contact,i)=>(
              <div class="contact-item">
                <span><a href={contact.link} className='btn btn-light btn-outline-secondary contact-item-btn'>
                  <h5 className='footer-contact-h5'>{contact.text}</h5>
                </a></span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container" id="footer-container">
        <p className='footer-p'>&copy; {currentYear} Abhinaba Chakraborty. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
