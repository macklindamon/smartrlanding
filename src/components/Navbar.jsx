import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPlatformDropdownOpen, setIsPlatformDropdownOpen] = useState(false);
  const [isMobilePlatformOpen, setIsMobilePlatformOpen] = useState(false);
  const platformBtnRef = useRef(null);
  const [dropdownPos, setDropdownPos] = useState({ top: -9999, left: -9999 }); // Start off-screen
  const DROPDOWN_WIDTH = 550;

  // Solutions dropdown state
  const [isSolutionsDropdownOpen, setIsSolutionsDropdownOpen] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);
  const solutionsBtnRef = useRef(null);
  const [solutionsPos, setSolutionsPos] = useState({ top: -9999, left: -9999 }); // Start off-screen
  const SOLUTIONS_WIDTH = 550;

  // Resources dropdown state
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);
  const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false);
  const resourcesBtnRef = useRef(null);
  const [resourcesPos, setResourcesPos] = useState({ top: -9999, left: -9999 }); // Start off-screen
  const RESOURCES_WIDTH = 550;

  const isMobile = () => window.innerWidth <= 900;
  const closeTimeoutRef = useRef(null);
  const solutionsCloseTimeoutRef = useRef(null);
  const resourcesCloseTimeoutRef = useRef(null);

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
    const handleResize = () => {
      if (isPlatformDropdownOpen) computeDropdownPosition();
      if (isSolutionsDropdownOpen) computeSolutionsPosition();
      if (isResourcesDropdownOpen) computeResourcesPosition();
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
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
    // Close any open mobile submenus when toggling
    setIsMobilePlatformOpen(false);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobilePlatformOpen(false);
  };

  const computeDropdownPosition = () => {
    const margin = 12; // viewport margin
    const rect = platformBtnRef.current?.getBoundingClientRect();
    const topBase = (rect?.bottom || 72) + 8; // small gap under trigger
    // Align left edge under the Platform link, clamped to viewport
    const rawLeft = rect ? rect.left : (window.innerWidth - DROPDOWN_WIDTH) / 2;
    const clampedLeft = Math.max(margin, Math.min(rawLeft, window.innerWidth - DROPDOWN_WIDTH - margin));
    setDropdownPos({ top: topBase, left: clampedLeft });
  };

  const computeSolutionsPosition = () => {
    const margin = 12;
    const rect = solutionsBtnRef.current?.getBoundingClientRect();
    const topBase = (rect?.bottom || 72) + 8;
    const rawLeft = rect ? rect.left : (window.innerWidth - SOLUTIONS_WIDTH) / 2;
    const clampedLeft = Math.max(margin, Math.min(rawLeft, window.innerWidth - SOLUTIONS_WIDTH - margin));
    setSolutionsPos({ top: topBase, left: clampedLeft });
  };

  const computeResourcesPosition = () => {
    const margin = 12;
    const rect = resourcesBtnRef.current?.getBoundingClientRect();
    const topBase = (rect?.bottom || 72) + 8;
    const rawLeft = rect ? rect.left : (window.innerWidth - RESOURCES_WIDTH) / 2;
    const clampedLeft = Math.max(margin, Math.min(rawLeft, window.innerWidth - RESOURCES_WIDTH - margin));
    setResourcesPos({ top: topBase, left: clampedLeft });
  };

  const openPlatformDropdown = () => {
    if (isMobile()) return; // mobile uses accordion
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    computeDropdownPosition();
    setIsPlatformDropdownOpen(true);
  };

  const closePlatformDropdown = () => {
    if (isMobile()) return;
    // Delay close slightly to allow cursor to enter dropdown without flicker
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(() => {
      setIsPlatformDropdownOpen(false);
      closeTimeoutRef.current = null;
    }, 120);
  };

  const openSolutionsDropdown = () => {
    if (isMobile()) return;
    if (solutionsCloseTimeoutRef.current) {
      clearTimeout(solutionsCloseTimeoutRef.current);
      solutionsCloseTimeoutRef.current = null;
    }
    computeSolutionsPosition();
    setIsSolutionsDropdownOpen(true);
  };

  const closeSolutionsDropdown = () => {
    if (isMobile()) return;
    if (solutionsCloseTimeoutRef.current) clearTimeout(solutionsCloseTimeoutRef.current);
    solutionsCloseTimeoutRef.current = setTimeout(() => {
      setIsSolutionsDropdownOpen(false);
      solutionsCloseTimeoutRef.current = null;
    }, 120);
  };

  const openResourcesDropdown = () => {
    if (isMobile()) return;
    if (resourcesCloseTimeoutRef.current) {
      clearTimeout(resourcesCloseTimeoutRef.current);
      resourcesCloseTimeoutRef.current = null;
    }
    computeResourcesPosition();
    setIsResourcesDropdownOpen(true);
  };

  const closeResourcesDropdown = () => {
    if (isMobile()) return;
    if (resourcesCloseTimeoutRef.current) clearTimeout(resourcesCloseTimeoutRef.current);
    resourcesCloseTimeoutRef.current = setTimeout(() => {
      setIsResourcesDropdownOpen(false);
      resourcesCloseTimeoutRef.current = null;
    }, 120);
  };

  return (
    <>
      <nav className={`navbar ${isSticky ? 'navbar-expanded' : ''} ${isScrolled ? 'scrolled' : ''}`}>
        <div className={`nav-container ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          <div className="nav-brand">
            <Link to="/">
              <img src="/img/smartrlogo.svg" alt="Smartr365" className="logo-svg" />
            </Link>
          </div>
          <div className="nav-menu">
            <div 
              className={`nav-dropdown ${isPlatformDropdownOpen ? 'open' : ''}`}
              onMouseEnter={openPlatformDropdown}
              onMouseLeave={closePlatformDropdown}
            >
              {/* Desktop: hover shows dropdown; Mobile: click opens panel */}
              <button
                type="button"
                className="nav-link nav-button"
                ref={platformBtnRef}
                onClick={() => setIsMobilePlatformOpen((v) => !v)}
                aria-haspopup="true"
                aria-expanded={isPlatformDropdownOpen || isMobilePlatformOpen}
              >
                Platform
                <span className="chevron" aria-hidden="true">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
              {createPortal(
                <div
                  className={`platform-dropdown portal ${isPlatformDropdownOpen ? 'visible' : 'hidden'}`}
                  style={{ position: 'fixed', top: dropdownPos.top, left: dropdownPos.left, width: 900 }}
                  onMouseEnter={openPlatformDropdown}
                  onMouseLeave={closePlatformDropdown}
                >
                  <div className="dropdown-container-3col">
                    <div className="dropdown-column">
                      <div className="dropdown-section">
                        <div className="dropdown-section-header">
                          <h3 className="dropdown-section-title">Platform</h3>
                        </div>
                        <Link to="/platform/smartrconnect" className="dropdown-item">
                          <div className="dropdown-item-title">SmartrConnect <span className="dropdown-arrow">›</span></div>
                          <div className="dropdown-item-desc">Direct access to top lenders</div>
                        </Link>
                        <Link to="/platform/smartflow" className="dropdown-item">
                          <div className="dropdown-item-title">Smartflow <span className="dropdown-arrow">›</span></div>
                          <div className="dropdown-item-desc">Automating workflows for faster cases</div>
                        </Link>
                        <Link to="/platform/homebuyer" className="dropdown-item">
                          <div className="dropdown-item-title">HomeBuyer <span className="dropdown-arrow">›</span></div>
                          <div className="dropdown-item-desc">Fact Find app for clients</div>
                        </Link>
                        <Link to="/platform/smartrretain" className="dropdown-item">
                          <div className="dropdown-item-title">SmartrRetain <span className="dropdown-arrow">›</span></div>
                          <div className="dropdown-item-desc">Automated touchpoints with clients</div>
                        </Link>
                      </div>
                    </div>

                    <div className="dropdown-column">
                      <div className="dropdown-section">
                        <div className="dropdown-section-header">
                          <h3 className="dropdown-section-title">&nbsp;</h3>
                        </div>
                        <Link to="/platform/introducer-portal" className="dropdown-item">
                          <div className="dropdown-item-title">Introducer portal <span className="dropdown-arrow">›</span></div>
                          <div className="dropdown-item-desc">Streamlined lead capture and conversion</div>
                        </Link>
                        <Link to="/platform/protection" className="dropdown-item">
                          <div className="dropdown-item-title">Protection <span className="dropdown-arrow">›</span></div>
                          <div className="dropdown-item-desc">Integrated cover within every case</div>
                        </Link>
                        <Link to="/platform/admin" className="dropdown-item">
                          <div className="dropdown-item-title">Admin <span className="dropdown-arrow">›</span></div>
                          <div className="dropdown-item-desc">Simplify compliance and daily operations</div>
                        </Link>
                        <Link to="/platform/sourcing" className="dropdown-item">
                          <div className="dropdown-item-title">Sourcing <span className="dropdown-arrow">›</span></div>
                          <div className="dropdown-item-desc">Integrated systems for sourcing</div>
                        </Link>
                      </div>
                    </div>

                    <div className="dropdown-column dropdown-image-column">
                      <div className="dropdown-image-card">
                        <div className="dropdown-card-header">
                          <span className="dropdown-card-badge">New update</span>
                        </div>
                        <h4 className="dropdown-card-title">Introducing Agentic CS</h4>
                        <p className="dropdown-card-para">Real-time mortgage tracking with alerts on tasks and opportunities</p>
                        <a href="#" className="dropdown-card-link">
                          Learn more →
                        </a>
                        <div className="dropdown-card-image">
                          <img
                            src="/img/placeholder.png"
                            alt="Metric Trees Dashboard"
                            className="dropdown-image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>,
                document.body
              )}
            </div>
            <div
              className={`nav-dropdown ${isSolutionsDropdownOpen ? 'open' : ''}`}
              onMouseEnter={openSolutionsDropdown}
              onMouseLeave={closeSolutionsDropdown}
            >
              <button
                type="button"
                className="nav-link nav-button"
                ref={solutionsBtnRef}
                onClick={() => setIsMobileSolutionsOpen((v) => !v)}
                aria-haspopup="true"
                aria-expanded={isSolutionsDropdownOpen || isMobileSolutionsOpen}
              >
                Solutions
                <span className="chevron" aria-hidden="true">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
              {createPortal(
                <div
                  className={`platform-dropdown portal ${isSolutionsDropdownOpen ? 'visible' : 'hidden'}`}
                  style={{ position: 'fixed', top: solutionsPos.top, left: solutionsPos.left, width: SOLUTIONS_WIDTH }}
                  onMouseEnter={openSolutionsDropdown}
                  onMouseLeave={closeSolutionsDropdown}
                >
                  <div className="dropdown-container-2col">
                    <div className="dropdown-column">
                      <div className="dropdown-section">
                        <div className="dropdown-section-header">
                          <h3 className="dropdown-section-title">Solutions</h3>
                        </div>
                        <a href="#" className="dropdown-item"><div className="dropdown-item-title">For Advisers <span className="dropdown-arrow">›</span></div><div className="dropdown-item-desc">Comprehensive tools for mortgage advisers</div></a>
                        <a href="#" className="dropdown-item"><div className="dropdown-item-title">For Admins <span className="dropdown-arrow">›</span></div><div className="dropdown-item-desc">Streamline administrative processes</div></a>
                        <a href="#" className="dropdown-item"><div className="dropdown-item-title">For Managers <span className="dropdown-arrow">›</span></div><div className="dropdown-item-desc">Management tools and insights</div></a>
                        <a href="#" className="dropdown-item"><div className="dropdown-item-title">For Networks / Clubs <span className="dropdown-arrow">›</span></div><div className="dropdown-item-desc">Solutions for broker networks</div></a>
                      </div>
                    </div>
                    <div className="dropdown-column">
                      <div className="dropdown-section">
                        <div className="dropdown-section-header" style={{visibility:'hidden'}}>
                          <h3 className="dropdown-section-title">Solutions</h3>
                        </div>
                        <a href="#" className="dropdown-item"><div className="dropdown-item-title">For Homebuyers <span className="dropdown-arrow">›</span></div><div className="dropdown-item-desc">Tools to help homebuyers navigate mortgages</div></a>
                        <a href="#" className="dropdown-item"><div className="dropdown-item-title">For Estate Agents <span className="dropdown-arrow">›</span></div><div className="dropdown-item-desc">Integrate mortgage services seamlessly</div></a>
                        <a href="#" className="dropdown-item"><div className="dropdown-item-title">For Homebuilders <span className="dropdown-arrow">›</span></div><div className="dropdown-item-desc">Support new build mortgage processes</div></a>
                      </div>
                    </div>
                  </div>
                </div>,
                document.body
              )}
            </div>
            <div
              className={`nav-dropdown ${isResourcesDropdownOpen ? 'open' : ''}`}
              onMouseEnter={openResourcesDropdown}
              onMouseLeave={closeResourcesDropdown}
            >
              <button
                type="button"
                className="nav-link nav-button"
                ref={resourcesBtnRef}
                onClick={() => setIsMobileResourcesOpen((v) => !v)}
                aria-haspopup="true"
                aria-expanded={isResourcesDropdownOpen || isMobileResourcesOpen}
              >
                Resources
                <span className="chevron" aria-hidden="true">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
              {createPortal(
                <div
                  className={`platform-dropdown portal ${isResourcesDropdownOpen ? 'visible' : 'hidden'}`}
                  style={{ position: 'fixed', top: resourcesPos.top, left: resourcesPos.left, width: RESOURCES_WIDTH }}
                  onMouseEnter={openResourcesDropdown}
                  onMouseLeave={closeResourcesDropdown}
                >
                  <div className="dropdown-container-2col">
                    <div className="dropdown-column">
                      <div className="dropdown-section">
                        <div className="dropdown-section-header">
                          <h3 className="dropdown-section-title">Resources</h3>
                        </div>
                        <Link to="/case-studies" className="dropdown-item"><div className="dropdown-item-title">Case Studies <span className="dropdown-arrow">›</span></div><div className="dropdown-item-desc">Real-world success stories.</div></Link>
                        <Link to="/campaigns/bucket-list/" className="dropdown-item"><div className="dropdown-item-title">Videos <span className="dropdown-arrow">›</span></div><div className="dropdown-item-desc">Watch our latest content</div></Link>
                        <a href="#" className="dropdown-item"><div className="dropdown-item-title">Partners <span className="dropdown-arrow">›</span></div><div className="dropdown-item-desc">Our trusted partnerships</div></a>
                        <a href="#" className="dropdown-item"><div className="dropdown-item-title">Blog <span className="dropdown-arrow">›</span></div><div className="dropdown-item-desc">Industry insights and updates</div></a>
                      </div>
                    </div>
                    <div className="dropdown-column">
                      <div className="dropdown-section">
                        <div className="dropdown-section-header" style={{visibility:'hidden'}}>
                          <h3 className="dropdown-section-title">Resources</h3>
                        </div>
                        <a href="#" className="dropdown-item"><div className="dropdown-item-title">Help Center <span className="dropdown-arrow">›</span></div><div className="dropdown-item-desc">Get support and guidance</div></a>
                        <a href="https://api.smartr365.com/" target="_blank" rel="noopener noreferrer" className="dropdown-item"><div className="dropdown-item-title">API Docs <span className="dropdown-arrow">›</span></div><div className="dropdown-item-desc">Developer documentation and API reference.</div></a>
                        <Link to="/team" className="dropdown-item"><div className="dropdown-item-title">Team <span className="dropdown-arrow">›</span></div><div className="dropdown-item-desc">Meet our passionate team members.</div></Link>
                        <a href="#" className="dropdown-item"><div className="dropdown-item-title">Company <span className="dropdown-arrow">›</span></div><div className="dropdown-item-desc">Learn about our mission</div></a>
                        <a href="#" className="dropdown-item"><div className="dropdown-item-title">Contact <span className="dropdown-arrow">›</span></div><div className="dropdown-item-desc">Get in touch with us</div></a>
                        <div className="dropdown-item"><div className="dropdown-item-title">Contact <span className="dropdown-arrow">›</span></div><div className="dropdown-item-desc">Lorem ipsum dolor sit amet.</div></div>
                      </div>
                    </div>
                  </div>
                </div>,
                document.body
              )}
            </div>
            <Link to="/pricing" className="nav-link">Pricing</Link>
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
              {/* Mobile Platform expandable section */}
              <button
                type="button"
                className="mobile-nav-link"
                onClick={() => setIsMobilePlatformOpen((v) => !v)}
                aria-controls="mobile-platform-panel"
                aria-expanded={isMobilePlatformOpen}
              >
                Platform
                <span className="chevron" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
              {isMobilePlatformOpen && (
                <div id="mobile-platform-panel" className="mobile-submenu">
                  <div className="mobile-submenu-section">
                    <div className="mobile-submenu-header">Product</div>
                    <button className="mobile-submenu-item" onClick={closeMobileMenu}>Product Analytics</button>
                    <button className="mobile-submenu-item" onClick={closeMobileMenu}>Web Analytics</button>
                    <button className="mobile-submenu-item" onClick={closeMobileMenu}>Mobile Analytics</button>
                    <button className="mobile-submenu-item" onClick={closeMobileMenu}>Metric Trees</button>
                    <button className="mobile-submenu-item" onClick={closeMobileMenu}>Warehouse Connectors</button>
                    <button className="mobile-submenu-item" onClick={closeMobileMenu}>Session Replay</button>
                    <button className="mobile-submenu-item" onClick={closeMobileMenu}>Integrations</button>
                    <button className="mobile-submenu-item" onClick={closeMobileMenu}>Security & Privacy</button>
                  </div>
                  <div className="mobile-submenu-section">
                    <div className="mobile-submenu-header">Use Cases</div>
                    <button className="mobile-submenu-item" onClick={closeMobileMenu}>Acquire New Users</button>
                    <button className="mobile-submenu-item" onClick={closeMobileMenu}>Engage Your Users</button>
                    <button className="mobile-submenu-item" onClick={closeMobileMenu}>Grow Your Usership</button>
                    <button className="mobile-submenu-item" onClick={closeMobileMenu}>Empower Your Team</button>
                  </div>
                </div>
              )}
              {/* Mobile Solutions expandable section */}
              <button
                type="button"
                className="mobile-nav-link"
                onClick={() => setIsMobileSolutionsOpen((v) => !v)}
                aria-controls="mobile-solutions-panel"
                aria-expanded={isMobileSolutionsOpen}
              >
                Solutions
                <span className="chevron" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
              {isMobileSolutionsOpen && (
                <div id="mobile-solutions-panel" className="mobile-submenu">
                  <div className="mobile-submenu-section">
                    <button className="mobile-submenu-item" onClick={closeMobileMenu}>For Advisers</button>
                    <button className="mobile-submenu-item" onClick={closeMobileMenu}>For Admins</button>
                    <button className="mobile-submenu-item" onClick={closeMobileMenu}>For Managers</button>
                    <button className="mobile-submenu-item" onClick={closeMobileMenu}>For Networks / Clubs</button>
                    <button className="mobile-submenu-item" onClick={closeMobileMenu}>For Homebuyers</button>
                    <button className="mobile-submenu-item" onClick={closeMobileMenu}>For Estate Agents</button>
                    <button className="mobile-submenu-item" onClick={closeMobileMenu}>For Homebuilders</button>
                  </div>
                </div>
              )}
              {/* Mobile Resources expandable section */}
              <button
                type="button"
                className="mobile-nav-link"
                onClick={() => setIsMobileResourcesOpen((v) => !v)}
                aria-controls="mobile-resources-panel"
                aria-expanded={isMobileResourcesOpen}
              >
                Resources
                <span className="chevron" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
              {isMobileResourcesOpen && (
                <div id="mobile-resources-panel" className="mobile-submenu">
                  <div className="mobile-submenu-section">
                    <Link to="/case-studies" className="mobile-submenu-item" onClick={closeMobileMenu}>Case Studies</Link>
                    <Link to="/campaigns/bucket-list/" className="mobile-submenu-item" onClick={closeMobileMenu}>Videos</Link>
                    <button className="mobile-submenu-item" onClick={closeMobileMenu}>Partners</button>
                    <button className="mobile-submenu-item" onClick={closeMobileMenu}>Blog</button>
                    <button className="mobile-submenu-item" onClick={closeMobileMenu}>Help Center</button>
                    <a href="https://api.smartr365.com/" target="_blank" rel="noopener noreferrer" className="mobile-submenu-item" onClick={closeMobileMenu}>API Docs</a>
                    <Link to="/team" className="mobile-submenu-item" onClick={closeMobileMenu}>Team</Link>
                    <button className="mobile-submenu-item" onClick={closeMobileMenu}>Company</button>
                    <button className="mobile-submenu-item" onClick={closeMobileMenu}>Contact</button>
                  </div>
                </div>
              )}
              <Link to="/pricing" className="mobile-nav-link" onClick={closeMobileMenu}>Pricing</Link>
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
