import React from 'react';
import TypewriterText from './TypewriterText';
import TabbedLottieSection from './TabbedLottieSection';

const Hero = () => {
  const typewriterTexts = [
    'Save hours on admin',
    'Impress every client',
    'Submit cases faster',
    'Stay fully compliant',
    'Capture every lead',
    'Manage cases easily'
  ];

  return (
    <main className="main-content">
      <div className="container">
        <div className="content-layout">
          {/* Centered Hero Content */}
          <div className="hero-content-center">
            {/* New Update Banner */}
            <div className="update-banner">
              <div className="update-badge">
                <div className="update-icon">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 0L10.472 5.528L16 8L10.472 10.472L8 16L5.528 10.472L0 8L5.528 5.528L8 0Z" fill="currentColor"/>
                  </svg>
                </div>
                <span>New update</span>
              </div>
              <div className="update-content">
                <span>SmartrFlow is here</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="arrow-icon">
                  <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            
            <h1>
              <TypewriterText texts={typewriterTexts} />
              <br />
              with <strong>Smartr365</strong>
            </h1>
            <p className="description">
              Join the most extensive mortgage & protection platform in the UK
            </p>
            
            <div className="button-group">
              <button className="btn btn-primary btn-large">Get started for FREE</button>
              <button className="btn btn-secondary btn-large">Book a demo</button>
            </div>
          </div>
          
          {/* Tabbed Lottie Animation Section */}
          <div className="lottie-section">
            <TabbedLottieSection />
          </div>
          
          {/* Trust Indicators */}
          <div className="trust-indicators">
            <div className="trust-item">
              <img src="/img/star.svg" alt="Star" className="trust-icon" />
              <span className="trust-text">99.9% uptime SLA</span>
            </div>
            <div className="trust-item">
              <img src="/img/star.svg" alt="Star" className="trust-icon" />
              <span className="trust-text">GDPR Compliant</span>
            </div>
            <div className="trust-item">
              <img src="/img/star.svg" alt="Star" className="trust-icon" />
              <span className="trust-text">Cloud based</span>
            </div>
            <div className="trust-item">
              <img src="/img/star.svg" alt="Star" className="trust-icon" />
              <span className="trust-text">Dedicated support</span>
            </div>
            <div className="trust-item">
              <img src="/img/star.svg" alt="Star" className="trust-icon" />
              <span className="trust-text">ISO 27001 certified</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
