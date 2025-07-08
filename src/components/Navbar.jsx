import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      console.log('Scroll Y:', scrollY); // Debug log
      
      // Detect when navbar should become sticky (scrolled past initial position)
      if (scrollY > 50) {
        console.log('Setting sticky to true'); // Debug log
        setIsScrolled(true);
        setIsSticky(true);
      } else {
        console.log('Setting sticky to false'); // Debug log
        setIsScrolled(false);
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation effect for mobile menu items
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Add animation classes with staggered delays
      const menuLinks = document.querySelectorAll('.mobile-nav-link');
      const footer = document.querySelector('.mobile-menu-footer');
      
      menuLinks.forEach((link, index) => {
        setTimeout(() => {
          link.classList.add('animate-in');
        }, 100 * (index + 1));
      });

      if (footer) {
        setTimeout(() => {
          footer.classList.add('animate-in');
        }, 100 * (menuLinks.length + 1));
      }
    } else {
      // Remove animation classes when menu closes
      const animatedElements = document.querySelectorAll('.animate-in');
      animatedElements.forEach(element => {
        element.classList.remove('animate-in');
      });
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${isSticky ? 'navbar-expanded' : ''} ${isScrolled ? 'scrolled' : ''}`}>
        <div className={`nav-container ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          <div className="nav-brand">
            <img src="/img/smartrlogo.svg" alt="Smartr365" className="logo-svg" />
          </div>
          <div className="nav-menu">
            <a href="#" className="nav-link">Platform</a>
            <a href="#" className="nav-link">Solutions</a>
            <a href="#" className="nav-link">Resources</a>
            <a href="#" className="nav-link">Pricing</a>
            <a href="#" className="nav-link">Company</a>
          </div>
          <div className="nav-buttons">
            <button className="btn btn-primary">Get started for FREE</button>
          </div>
          <button 
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            aria-label="Toggle mobile menu"
            onClick={toggleMobileMenu}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
        
        {/* Mobile menu overlay */}
        <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}>
          <div className="mobile-menu-content">
            <nav className="mobile-nav">
              <a href="#" className="mobile-nav-link" onClick={closeMobileMenu}>Platform</a>
              <a href="#" className="mobile-nav-link" onClick={closeMobileMenu}>Solutions</a>
              <a href="#" className="mobile-nav-link" onClick={closeMobileMenu}>Resources</a>
              <a href="#" className="mobile-nav-link" onClick={closeMobileMenu}>Pricing</a>
              <a href="#" className="mobile-nav-link" onClick={closeMobileMenu}>Company</a>
            </nav>
            
            <div className="mobile-menu-footer">
              <div className="mobile-contact">
               
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
