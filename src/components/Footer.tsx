import React from 'react';
import { useLocation } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <footer className={`footer ${isHomePage ? 'footer-fixed-home' : ''}`}>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Social</h3>
          <ul>
            <li><a href="https://github.com/Rebeljoka" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/your-next-jfssd-habib/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p><a href="mailto:habib.u99@googlemail.com">habib.u99@googlemail.com</a></p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Habib 'Rebel Joka' Ullah. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
