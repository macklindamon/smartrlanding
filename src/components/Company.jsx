import React from 'react';

const Company = () => {
  return (
    <div className="company-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="page-hero-container">
          <h1 className="page-hero-title">About Smartr365</h1>
          <p className="page-hero-description">We believe in the power of innovation to transform the mortgage and protection journey for brokers.</p>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="company-section">
        <div className="container">
          <div className="company-content">
            <h2 className="company-section-title">Our Commitment</h2>
            <div className="company-commitments">
              <div className="commitment-item">
                <h3>Customer-Obsessed Approach</h3>
                <p>Our clients are at the heart of everything we do. We are passionate about delighting our customers.</p>
              </div>
              <div className="commitment-item">
                <h3>Innovation</h3>
                <p>We are committed to pushing the boundaries of what's possible in the mortgage industry. Through continuous innovation, we strive to provide our clients with smart, efficient, and user-friendly solutions that simplify the mortgage journey.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Smartr365 Section */}
      <section className="company-section bg-offwhite">
        <div className="container">
          <div className="company-content">
            <h2 className="company-section-title">Why Smartr365</h2>
            <div className="why-smartr-grid">
              <div className="why-smartr-item">
                <h3>Technology at the Core</h3>
                <p>We leverage state-of-the-art technology to streamline and enhance the mortgage experience, making it faster, smarter, and more accessible for everyone.</p>
              </div>
              <div className="why-smartr-item">
                <h3>Expertise You Can Trust</h3>
                <p>Our team is dedicated to providing guidance and support at every step of the journey. You can trust us to navigate the complexities and ensure a smooth process.</p>
              </div>
              <div className="why-smartr-item">
                <h3>Future-Ready Solutions</h3>
                <p>The mortgage landscape is constantly evolving, and so are we. By staying ahead of the curve, we offer future-ready solutions that anticipate and adapt to the changing needs of our clients.</p>
              </div>
            </div>
            <div className="company-description">
              <p>Smartr365™ is an end-to-end mortgage and protection platform connecting advisors, estate agents and home buyers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="company-cta-section">
        <div className="container">
          <div className="company-cta-content">
            <h2>Ready to get started?</h2>
            <p>Join thousands of mortgage professionals who trust our platform</p>
            <div className="company-cta-buttons">
              <button className="btn btn-primary">Book a demo</button>
              <button className="btn btn-secondary">Get started for FREE</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Company;