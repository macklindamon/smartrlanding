import React from 'react';
import { Link } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';

const CaseStudies = () => {
  return (
    <div className="case-studies-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="page-hero-container">
          <h1 className="page-hero-title">Case Studies</h1>
          <p className="page-hero-description">
            Discover how mortgage brokers across the UK are transforming their businesses with Smartr365. 
            From efficiency gains to compliance improvements, see real results from real customers who've 
            revolutionized their operations with our platform.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="case-studies-grid-section">
        <div className="case-studies-container">
          <div className="case-studies-grid">
            {caseStudies.map((study) => (
              <div key={study.id} className="case-study-card">
                <div className="case-study-image-container">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="case-study-image"
                  />
                  <div className="case-study-category">{study.category}</div>
                </div>
                
                <div className="case-study-content">
                  <h3 className="case-study-title">{study.title}</h3>
                  <p className="case-study-description">
                    {study.shortDescription}
                  </p>
                  
                  <div className="case-study-meta">
                    <span className="case-study-read-time">{study.readTime}</span>
                  </div>
                  
                  <Link 
                    to={`/case-studies/${study.slug}`}
                    className="case-study-link"
                  >
                    <span>Read more</span>
                    <div className="learn-more-arrow">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;