import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="site-footer" role="contentinfo" aria-label="Site footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" aria-label="Smartr365 home">
              <img src="/img/smartrlogo.svg" alt="Smartr365" className="footer-logo" />
            </Link>
          </div>

          <div className="footer-columns">
            <div className="footer-col">
              <h4 className="footer-heading">Quick links</h4>
              <ul className="footer-links">
                <li><a className="footer-link" href="#platform">Platform</a></li>
                <li><a className="footer-link" href="#solutions">Solutions</a></li>
                <li><a className="footer-link" href="#resources">Resources</a></li>
                <li><Link className="footer-link" to="/pricing">Pricing</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Legal</h4>
              <ul className="footer-links">
                <li><Link className="footer-link" to="/terms">Terms & Conditions</Link></li>
                <li><Link className="footer-link" to="/privacy">Privacy Policy</Link></li>
                <li><Link className="footer-link" to="/cookies">Cookie Policy</Link></li>
                <li><Link className="footer-link" to="/diversity">D&I Statement</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Follow us</h4>
              <nav aria-label="Social media links">
                <ul className="footer-links social">
                <li>
                  <a className="footer-link" href="https://www.linkedin.com/company/smartr365/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M4.983 3.5C4.983 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.483 1.12 2.483 2.5zM.25 23.75h4.5V7.75H.25v16zM8.25 23.75h4.5v-8.75c0-2.085 2.5-2.25 2.5 0v8.75h4.5v-10.5c0-6.5-7.5-6.25-9.25-3.062V7.75h-2.25v16z" />
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.4 3.5 12 3.5 12 3.5s-7.4 0-9.4.6A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .6 5.8 3 3 0 0 0 2.1 2.1c2 .6 9.3.6 9.3.6s7.4 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.6-5.8zM9.75 15.5v-7L16 12l-6.25 3.5z"/>
                    </svg>
                    <span>YouTube</span>
                  </a>
                </li>
              </ul>
              </nav>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">© 2025 Smartr365™ Finance Limited - Company Number 10487227</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
