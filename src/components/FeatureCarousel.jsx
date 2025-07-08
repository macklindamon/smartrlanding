import React, { useState, useEffect, useCallback } from 'react';

const FeatureCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(19); // Start in middle section (13 + 6)
  const [isTransitioning, setIsTransitioning] = useState(true);

  const baseFeatures = [
      {
      id: 'time-tracking',
      title: 'Smart Docs',
      subtitle: 'Smart and secure cloud based storage.',
      description: 'Store and organise all client documents with confidence. Version control, advanced search, and secure sharing built in.',
      details: 'Store and organise all client documents with confidence. Version control, advanced search, and secure sharing built in.',
      image: '/img/placeholder.png',
      screenshot: '/img/placeholder.png'
    },
    {
      id: 'time-tracking',
      title: 'Smart Docs',
      subtitle: 'Smart and secure cloud based storage.',
      description: 'Store and organise all client documents with confidence. Version control, advanced search, and secure sharing built in.',
      details: 'Store and organise all client documents with confidence. Version control, advanced search, and secure sharing built in.',
      image: '/img/placeholder.png',
      screenshot: '/img/placeholder.png'
    },
    {
      id: 'collaboration',
      title: 'Homebuyer App', 
      subtitle: 'A modern app experience for your clients.',
      description: 'Let homebuyers complete their smart fill their fact find, upload documents, and track progressl all in one easy-to-use app.',
      details: 'Let homebuyers complete their smart fill their fact find, upload documents, and track progressl all in one easy-to-use app.',
      image: '/img/placeholder.png',
      screenshot: '/img/placeholder.png'
    },
    {
      id: 'knowledge-management',
      title: 'Knowledge Management',
      subtitle: 'A central place for all your project knowledge.',
      description: 'Easily accessible for everyone on the team.',
      details: 'Always up to date and neatly organised.',
      image: '/img/placeholder.png', 
      screenshot: '/img/placeholder.png'
    },
    {
      id: 'case-management',
      title: 'Case Management',
      subtitle: 'Streamlined workflow processes.',
      description: 'Manage all cases from lead to completion.',
      details: 'Track progress, set reminders, and automate tasks.',
      image: '/img/placeholder.png',
      screenshot: '/img/placeholder.png'
    },
    {
      id: 'document-storage',
      title: 'Document Storage',
      subtitle: 'Secure cloud-based storage.',
      description: 'Store and organize all client documents.',
      details: 'Version control, search, and secure sharing.',
      image: '/img/placeholder.png',
      screenshot: '/img/placeholder.png'
    },
    {
      id: 'client-portal',
      title: 'Client Portal',
      subtitle: 'Enhanced client experience.',
      description: 'Branded portal for client interactions.',
      details: 'Document uploads, status updates, messaging.',
      image: '/img/placeholder.png',
      screenshot: '/img/placeholder.png'
    },
    {
      id: 'compliance-tools',
      title: 'Compliance Tools',
      subtitle: 'Stay regulatory compliant.',
      description: 'Built-in compliance and audit trails.',
      details: 'FCA requirements, GDPR ready, automated reporting.',
      image: '/img/placeholder.png',
      screenshot: '/img/placeholder.png'
    },
    {
      id: 'analytics-dashboard',
      title: 'Analytics Dashboard',
      subtitle: 'Data-driven insights.',
      description: 'Comprehensive business analytics.',
      details: 'Performance metrics, conversion tracking, ROI analysis.',
      image: '/img/placeholder.png',
      screenshot: '/img/placeholder.png'
    },
    {
      id: 'mobile-app',
      title: 'Mobile App',
      subtitle: 'Work from anywhere.',
      description: 'Full-featured mobile application.',
      details: 'iOS and Android apps with offline capabilities.',
      image: '/img/placeholder.png',
      screenshot: '/img/placeholder.png'
    },
    {
      id: 'api-integrations',
      title: 'API Integrations',
      subtitle: 'Connect your existing tools.',
      description: 'Seamless third-party integrations.',
      details: 'CRM, accounting, and marketing tool connections.',
      image: '/img/placeholder.png',
      screenshot: '/img/placeholder.png'
    },
    {
      id: 'automated-workflows',
      title: 'Automated Workflows',
      subtitle: 'Streamline repetitive tasks.',
      description: 'Custom automation and triggers.',
      details: 'Email automation, task assignments, notifications.',
      image: '/img/placeholder.png',
      screenshot: '/img/placeholder.png'
    },
    {
      id: 'lead-management',
      title: 'Lead Management',
      subtitle: 'Convert more prospects.',
      description: 'Intelligent lead tracking and nurturing.',
      details: 'Lead scoring, follow-up reminders, conversion analytics.',
      image: '/img/placeholder.png',
      screenshot: '/img/placeholder.png'
    },
    {
      id: 'team-management',
      title: 'Team Management',
      subtitle: 'Organize your workforce.',
      description: 'Role-based access and permissions.',
      details: 'User management, activity tracking, performance metrics.',
      image: '/img/placeholder.png',
      screenshot: '/img/placeholder.png'
    }
  ];

  // Create extended array for infinite loop
  const features = [...baseFeatures, ...baseFeatures, ...baseFeatures];
  const totalSlides = baseFeatures.length;

  const nextSlide = useCallback(() => {
    if (!isTransitioning) return;
    setCurrentSlide((prev) => prev + 1);
  }, [isTransitioning]);

  const prevSlide = () => {
    if (!isTransitioning) return;
    setCurrentSlide((prev) => prev - 1);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index + totalSlides); // Offset to middle section
  };

  // Handle infinite loop transitions
  useEffect(() => {
    if (currentSlide >= totalSlides * 2) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(totalSlides);
        setTimeout(() => setIsTransitioning(true), 50);
      }, 600);
    } else if (currentSlide <= 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(totalSlides);
        setTimeout(() => setIsTransitioning(true), 50);
      }, 600);
    }
  }, [currentSlide, totalSlides]);

  // Auto-advance carousel every 3 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="feature-carousel-section">
      <div className="feature-carousel-container">
        <div className="feature-carousel-track" style={{
          transform: `translateX(calc(-${currentSlide * 380}px + 50% - 190px))`,
          transition: isTransitioning ? 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none'
        }}>
          {features.map((feature, index) => (
            <div 
              key={`${feature.id}-${Math.floor(index / totalSlides)}`}
              className={`feature-card ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index % totalSlides)}
            >
              <div className="feature-card-content">
                <div className="feature-text">
                  <h3>{feature.title}</h3>
                  <p className="feature-subtitle">{feature.subtitle}</p>
                  <p className="feature-description">{feature.description}</p>
                  <p className="feature-details">{feature.details}</p>
                </div>
                <div className="feature-image">
                  <img src={feature.screenshot} alt={feature.title} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <button className="feature-carousel-arrow feature-carousel-prev" onClick={prevSlide}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className="feature-carousel-arrow feature-carousel-next" onClick={nextSlide}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Dots indicator */}
        <div className="feature-carousel-dots">
          {baseFeatures.map((_, index) => (
            <button
              key={index}
              className={`feature-carousel-dot ${(currentSlide % totalSlides) === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCarousel;
