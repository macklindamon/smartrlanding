import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';

const CaseStudyDetail = () => {
  const { slug } = useParams();
  const caseStudy = caseStudies.find(study => study.slug === slug);

  if (!caseStudy) {
    return (
      <div className="case-study-not-found">
        <div className="container">
          <h1>Case Study Not Found</h1>
          <p>The case study you're looking for doesn't exist.</p>
          <Link to="/case-studies" className="btn btn-primary">
            Back to Case Studies
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="case-study-detail-page">
      {/* Breadcrumb */}
      <section className="breadcrumb-section">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/case-studies" className="breadcrumb-link">Case Studies</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">{caseStudy.title}</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="case-study-hero">
        <div className="container">
          <div className="case-study-hero-content">
            <div className="case-study-meta-header">
              <span className="case-study-category">{caseStudy.category}</span>
              <span className="case-study-read-time">{caseStudy.readTime}</span>
            </div>
            
            <h1 className="case-study-hero-title">{caseStudy.title}</h1>
            <p className="case-study-hero-description">{caseStudy.shortDescription}</p>
            
            <div className="case-study-hero-image">
              <img src={caseStudy.image} alt={caseStudy.title} />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="case-study-content-section">
        <div className="container">
          <div className="case-study-content">
            
            {/* Challenge */}
            <div className="case-study-section">
              <h2 className="case-study-section-title">The Challenge</h2>
              <p className="case-study-section-content">{caseStudy.fullContent.challenge}</p>
            </div>

            {/* Solution */}
            <div className="case-study-section">
              <h2 className="case-study-section-title">The Solution</h2>
              <p className="case-study-section-content">{caseStudy.fullContent.solution}</p>
            </div>

            {/* Results */}
            <div className="case-study-section">
              <h2 className="case-study-section-title">The Results</h2>
              <ul className="case-study-results-list">
                {caseStudy.fullContent.results.map((result, index) => (
                  <li key={index} className="case-study-result-item">{result}</li>
                ))}
              </ul>
            </div>

            {/* Testimonial */}
            <div className="case-study-testimonial">
              <blockquote className="case-study-quote">
                "{caseStudy.fullContent.testimonial}"
              </blockquote>
              <cite className="case-study-author">
                — {caseStudy.fullContent.testimonialAuthor}
              </cite>
            </div>

            {/* CTA Section */}
            <div className="case-study-cta">
              <h3 className="case-study-cta-title">Ready to transform your mortgage business?</h3>
              <p className="case-study-cta-description">
                See how Smartr365 can help you achieve similar results.
              </p>
              <Link to="/pricing" className="btn btn-primary">
                Get Started Today
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="related-case-studies">
        <div className="container">
          <h2 className="related-title">More Case Studies</h2>
          <div className="related-grid">
            {caseStudies
              .filter(study => study.id !== caseStudy.id)
              .slice(0, 3)
              .map((study) => (
                <div key={study.id} className="related-card">
                  <img src={study.image} alt={study.title} className="related-image" />
                  <div className="related-content">
                    <span className="related-category">{study.category}</span>
                    <h4 className="related-title-small">{study.title}</h4>
                    <Link to={`/case-studies/${study.slug}`} className="related-link">
                      Read more →
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

export default CaseStudyDetail;