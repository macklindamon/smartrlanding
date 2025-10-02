import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPlatformFeatureBySlug } from '../data/platformFeatures';
import CustomerQuote from './CustomerQuote';
import { getRandomQuote } from '../data/customerQuotes';

const PlatformFeature = () => {
  const { slug } = useParams();
  const feature = getPlatformFeatureBySlug(slug);

  if (!feature) {
    return (
      <div className="section">
        <div className="container">
          <div className="hero-meta">
            <h1>Feature not found</h1>
            <p>The platform feature you're looking for doesn't exist.</p>
            <Link to="/" className="btn btn-primary">Back to Home</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="platform-feature-page">
      {/* Hero Section */}
      <section className="platform-feature-hero">
        <div className="container">
          <div className="platform-feature-hero-content">
            <div className="platform-feature-hero-text">
              <h1 className="platform-feature-title">{feature.title}</h1>
              <p className="platform-feature-subtitle">{feature.subtitle}</p>
              <p className="platform-feature-description">{feature.description}</p>
              <div className="platform-feature-cta">
                <button className="btn btn-primary">Get Started</button>
                <button className="btn btn-secondary">Book Demo</button>
              </div>
            </div>
            <div className="platform-feature-hero-image">
              <img src={feature.heroImage} alt={feature.title} />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="platform-feature-features">
        <div className="container">
          <h2>Key Features</h2>
          <div className="platform-feature-grid">
            {feature.features.map((featureItem, index) => (
              <div key={index} className="platform-feature-item">
                <div className="platform-feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#0071EF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>{featureItem}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="platform-feature-benefits bg-offwhite">
        <div className="container">
          <h2>Why Choose {feature.title}?</h2>
          <div className="platform-benefits-grid">
            {feature.benefits.map((benefit, index) => (
              <div key={index} className="platform-benefit-card">
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
                <div className="platform-benefit-read-more">
                  <span>Read more</span>
                  <div className="learn-more-arrow">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Quote */}
      <CustomerQuote {...getRandomQuote()} />

      {/* CTA Section */}
      <section className="platform-feature-cta">
        <div className="container">
          <div className="platform-cta-content">
            <h2>Ready to get started with {feature.title}?</h2>
            <p>Join thousands of mortgage professionals who trust our platform</p>
            <div className="platform-cta-buttons">
              <button className="btn btn-primary">Start Free Trial</button>
              <Link to="/pricing" className="btn btn-secondary">View Pricing</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlatformFeature;