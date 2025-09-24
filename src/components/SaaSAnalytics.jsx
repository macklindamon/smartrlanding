import React, { useEffect, useRef, useState } from 'react';
import AgenticCS from './AgenticCS';
// Services Section (Sonovate-style)

export const ServicesSection = () => (
  <section className="services-section">
    <div className="services-container">
      <div className="services-label">Services</div>
      <h2 className="services-title">Smartr365’s services let you focus on your clients rather than admin</h2>
      <div className="services-cards">
        <div className="service-card">
          <div className="service-icon">
            <svg width="32" height="32" viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="#00E1FF"/><path d="M8 24V10h16v14" stroke="#222" strokeWidth="2" strokeLinejoin="round"/><path d="M12 18v-4M16 20v-6M20 22v-8" stroke="#222" strokeWidth="2" strokeLinecap="round"/></svg>
          </div>
          <div className="service-title">Save time</div>
          <div className="service-desc">Smartr365 automates repetitive admin tasks, freeing brokers to focus on advising clients and winning more business with less effort.</div>
          <a href="#" className="service-link">Learn more</a>
        </div>
        <div className="service-card">
          <div className="service-icon">
            <svg width="32" height="32" viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="#00E1B2"/><path d="M10 16h12M16 10v12" stroke="#222" strokeWidth="2" strokeLinecap="round"/></svg>
          </div>
          <div className="service-title">Funding</div>
          <div className="service-desc">Get fast, flexible funding for any type of mortgage placement. Whether it’s purchase, remortgage, or buy-to-let, Smartr365 fits your business.</div>
          <a href="#" className="service-link">Explore funding</a>
        </div>
        <div className="service-card">
          <div className="service-icon">
            <svg width="32" height="32" viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="#FFD600"/><text x="16" y="21" textAnchor="middle" fontSize="16" fill="#222">£</text></svg>
          </div>
          <div className="service-title">Payments</div>
          <div className="service-desc">Run your commissions and payments as and when you need with our self-serve portal. Set your own schedule, we’ve got you covered.</div>
          <a href="#" className="service-link">Explore payments</a>
        </div>
      </div>
    </div>
  </section>
);

const SaaSAnalytics = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60) {
        setVisible(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className={`saas-analytics-section scroll-in-up${visible ? ' visible' : ''}`}> 
      <div className="saas-analytics-container">
        <div className="section-1-grid">
          {/* Left Panel - Smartr365 Description */}
          <div className="content-panel">
            <h2 className="section-title">What is Smartr365?</h2>
            <div className="section-subheader">
              All in one platform for mortgage brokers
            </div>
            <p className="section-description">
              Smartr365 is the <strong>#1 mortgage broker platform</strong> that streamlines the entire mortgage journey. From client onboarding and digital fact finds to compliance checks and lender submissions, it connects brokers, homebuyers, and lenders in one seamless platform. By cutting repetitive admin and manual data entry, Smartr365 helps brokers focus on building relationships and closing more cases.
            </p>
              <a href="#" className="learn-more-link">
                Learn more about Smartr
                <span className="learn-more-arrow">&rarr;</span>
              </a>
              <div className="section-buttons">
                <button type="button" className="btn btn-primary">
                  Get started for FREE
                </button>
              </div>
          </div>

          {/* Right Panel - Placeholder Image */}
          <div className="image-panel">
            <div className="graphic-laser-frame">
              <img 
                src="/img/product-shot.png" 
                alt="Smartr365 platform placeholder"
                className="dashboard-image image-card"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


// New section: Why do brokers love Smartr?
export const WhyBrokersLoveSmartr = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const sectionRef = useRef(null);
  const carouselRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  
  const baseImageUrls = [
    '/img/richard-office',
    '/img/aisha-office',
    '/img/clive-office', 
    '/img/helen-office'
  ];
  
  // Use mobile-specific images on mobile, regular images on tablet/desktop
  const imageUrls = baseImageUrls.map(url => 
    isMobile ? `${url}.png` : `${url}.png`
  );
  
  const names = [
    'Richard',
    'Aisha',
    'Clive', 
    'Helen'
  ];

  const videoUrls = [
    'https://vimeo.com/1062812082/21c0386e28', // Richard
    'https://vimeo.com/1062812082/21c0386e28', // Aisha - placeholder
    'https://vimeo.com/1062812082/21c0386e28', // Clive - placeholder
    'https://vimeo.com/1062812082/21c0386e28'  // Helen - placeholder
  ];

  const handleImagePanelClick = () => {
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
  };

  // Check device type
  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 993);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // Touch handlers for swipe functionality
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    const maxIndex = isMobile ? imageUrls.length - 1 : imageUrls.length - 2;

    if (isLeftSwipe && carouselIndex < maxIndex) {
      setCarouselIndex(prev => prev + 1);
    }
    if (isRightSwipe && carouselIndex > 0) {
      setCarouselIndex(prev => prev - 1);
    }
    
    // Reset touch coordinates
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  // Navigation handlers
  const goToPrevious = () => {
    if (carouselIndex > 0) {
      setCarouselIndex(prev => prev - 1);
    }
  };

  const goToNext = () => {
    const maxIndex = isMobile ? imageUrls.length - 1 : imageUrls.length - 2;
    console.log('goToNext called:', { carouselIndex, maxIndex, isMobile, imageUrlsLength: imageUrls.length });
    if (carouselIndex < maxIndex) {
      setCarouselIndex(prev => {
        console.log('Setting carousel index from', prev, 'to', prev + 1);
        return prev + 1;
      });
    }
  };

  const goToSlide = (index) => {
    const maxIndex = isMobile ? imageUrls.length - 1 : imageUrls.length - 2;
    setCarouselIndex(Math.min(index, maxIndex));
  };

  useEffect(() => {
    // Only apply scroll-based image switching on desktop
    if (isMobile || isTablet) return;
    
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const imagePanel = sectionRef.current.querySelector('.why-love-image-panel');
      if (!imagePanel) return;
      
      const imagePanelRect = imagePanel.getBoundingClientRect();
      const stickyTopPosition = 130; // CSS top: 130px when sticky
      
      // Check if the image panel is in sticky position (top is at sticky position)
      const isSticky = imagePanelRect.top <= stickyTopPosition + 130; // +10px tolerance
      
      if (!isSticky) {
        // Before sticky position, use image 1
        if (currentImageIndex !== 0) {
          setCurrentImageIndex(0);
          console.log('Image index changed to: 0 (before sticky)');
        }
        return;
      }
      
      // Calculate scroll distance since becoming sticky
      const scrollDistance = window.scrollY - (sectionRef.current.offsetTop - stickyTopPosition);
      
      let newIndex = 0;
      if (scrollDistance > 450) {
        newIndex = 1; // Image 2 after 300px scroll
      }
      if (scrollDistance > 800) {
        newIndex = 2; // Image 3 after 470px scroll (300px + 170px)
      }
      if (scrollDistance > 1250) {
        newIndex = 3; // Image 4 after 640px scroll (300px + 170px + 170px)
      }
      
      // Clamp the index to valid range
      const clampedIndex = Math.max(0, Math.min(imageUrls.length - 1, newIndex));
      
      if (clampedIndex !== currentImageIndex) {
        setCurrentImageIndex(clampedIndex);
        console.log('Image index changed to:', clampedIndex, 'Scroll distance since sticky:', scrollDistance);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentImageIndex, imageUrls.length, isMobile, isTablet]);

  return (
    <section ref={sectionRef} className="why-love-section">
      <div className="why-love-container">
        <h2 className="section-title">Why do brokers love Smartr365?</h2>
        <div className="why-love-main-grid">
          {/* Desktop: Single image panel with scroll-based switching */}
          {!isMobile && !isTablet && (
            <div 
              className="why-love-image-panel"
              style={{
                backgroundImage: `url(${imageUrls[currentImageIndex]})`,
                transition: 'opacity 0.5s ease-in-out',
                cursor: 'pointer'
              }}
              onClick={handleImagePanelClick}
            >
              <div className="why-love-video-cta">
                <span className="why-love-play">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="14" cy="14" r="14" fill="none" />
                    <polygon points="10,8 22,14 10,20" fill="#fff" />
                  </svg>
                </span>
                <span className="why-love-video-text">
                  Listen to why {names[currentImageIndex]} love's Smartr365
                </span>
              </div>
            </div>
          )}

          {/* Mobile & Tablet: Carousel */}
          {(isMobile || isTablet) && (
            <div className="why-love-carousel-container">
              {/* Navigation arrows */}

              <div 
                className="why-love-carousel"
                ref={carouselRef}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <div 
                  className="carousel-track"
                  style={{
                    transform: `translateX(-${isMobile 
                      ? (carouselIndex === 0 ? 0 : (carouselIndex * 87.5)) 
                      : (carouselIndex * 50)
                    }%)`,
                    transition: 'transform 0.3s'
                  }}
                >
                  {imageUrls.map((imageUrl, index) => (
                    <div 
                      key={index}
                      className={`carousel-slide ${isMobile ? 'mobile-slide' : 'tablet-slide'}`}
                      style={{
                        backgroundImage: `url(${imageUrl})`,
                        cursor: 'pointer'
                      }}
                      onClick={() => {
                        setCurrentImageIndex(index);
                        handleImagePanelClick();
                      }}
                    >
                      <div className="why-love-video-cta">
                        <span className="why-love-play">
                          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="14" cy="14" r="14" fill="none" />
                            <polygon points="10,8 22,14 10,20" fill="#fff" />
                          </svg>
                        </span>
                        <span className="why-love-video-text">
                          Listen to why {names[index]} love's Smartr365
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mini navigation dots */}
              <div className="carousel-minimap">
                {Array.from({ length: isMobile ? imageUrls.length : imageUrls.length - 1 }).map((_, index) => (
                  <button
                    key={index}
                    className={`minimap-dot ${index === carouselIndex ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                  />
                ))}
              </div>
            </div>
          )}
        <div className="why-love-features-grid">
          <div className="why-love-feature-card" onClick={() => console.log('Clicked Save time')}>
            <img src="/img/time.svg" alt="Open icon" className="why-love-feature-svg" />
            <div>
              <div className="why-love-feature-title">Save time</div>
              <div className="why-love-feature-desc">Smartr365 automates repetitive admin tasks, freeing brokers to focus on advising clients and winning more business with less effort.</div>
              <a href="#" className="learn-more-link">
                Learn more
                <span className="learn-more-arrow">&rarr;</span>
              </a>
            </div>
          </div>

          <div className="why-love-feature-card" onClick={() => console.log('Clicked Confidence in compliance')}>
            <img src="/img/check.svg" alt="Open icon" className="why-love-feature-svg" />
            <div>
              <div className="why-love-feature-title">Confidence in compliance</div>
              <div className="why-love-feature-desc">Built-in compliance checks reduce regulatory risk, giving brokers peace of mind that every case is audit-ready and fully documented.</div>
              <a href="#" className="learn-more-link">
                Learn more
                <span className="learn-more-arrow">&rarr;</span>
              </a>
            </div>
          </div>

          <div className="why-love-feature-card" onClick={() => console.log('Clicked All in one place')}>
            <img src="/img/one-place.svg" alt="Open icon" className="why-love-feature-svg" />
            <div>
              <div className="why-love-feature-title">All in one place</div>
              <div className="why-love-feature-desc">The platform supports the entire mortgage process, from lead to completion, ensuring brokers manage everything seamlessly without system switching.</div>
              <a href="#" className="learn-more-link">
                Learn more
                <span className="learn-more-arrow">&rarr;</span>
              </a>
            </div>
          </div>

                    <div className="why-love-feature-card" onClick={() => console.log('Clicked Build client trust')}>
            <img src="/img/trust.svg" alt="Open icon" className="why-love-feature-svg" />
            <div>
              <div className="why-love-feature-title">Build client trust</div>
              <div className="why-love-feature-desc">Professional tools and our branded Homebuyer app reassure clients, strengthening relationships and making brokers appear modern, reliable, and technology forward.</div>
              <a href="#" className="learn-more-link">
                Learn more
                <span className="learn-more-arrow">&rarr;</span>
              </a>
            </div>
          </div>

            <div className="why-love-feature-card" onClick={() => console.log('Clicked Convert more leads')}>
            <img src="/img/lead.svg" alt="Open icon" className="why-love-feature-svg" />
            <div>
              <div className="why-love-feature-title">Convert more leads</div>
              <div className="why-love-feature-desc">Automated reminders, streamlined fact finds, and client nudges reduce drop-off, helping brokers convert more leads into successful cases.</div>
              <a href="#" className="learn-more-link">
                Learn more
                <span className="learn-more-arrow">&rarr;</span>
              </a>
            </div>
          </div>

                    <div className="why-love-feature-card" onClick={() => console.log('Clicked Autofill data from 3rd parties')}>
            <img src="/img/app.svg" alt="Open icon" className="why-love-feature-svg" />
            <div>
              <div className="why-love-feature-title">Autofill data from 3rd parties</div>
              <div className="why-love-feature-desc">IDV, Open Banking, credit reports, and property data integrations create faster fact finds, cutting delays and make managing cases simpler.</div>
              <a href="#" className="learn-more-link">
                Learn more
                <span className="learn-more-arrow">&rarr;</span>
              </a>
            </div>
          </div>

                    <div className="why-love-feature-card" onClick={() => console.log('Clicked Grow their business')}>
            <img src="/img/certification.svg" alt="Open icon" className="why-love-feature-svg" />
            <div>
              <div className="why-love-feature-title">Grow their business</div>
              <div className="why-love-feature-desc">Reporting and analytics highlight opportunities, enabling brokers to scale smarter, track performance, and grow their business with real data.</div>
              <a href="#" className="learn-more-link">
              Learn more
                <span className="learn-more-arrow">&rarr;</span>
              </a>
            </div>
          </div>

          <div className="why-love-feature-card" onClick={() => console.log('Clicked Feel in control')}>
            <img src="/img/trophy.svg" alt="Open icon" className="why-love-feature-svg" />
            <div>
              <div className="why-love-feature-title">Feel in control</div>
              <div className="why-love-feature-desc">By removing admin burden and complexity, Smartr365 lets brokers reclaim balance, focus on clients, and feel in control again.</div>
              <a href="#" className="learn-more-link">
                Learn more
                <span className="learn-more-arrow">&rarr;</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>

    {/* Video Modal */}
    {isVideoModalOpen && (
      <div className="video-modal-overlay" onClick={closeVideoModal}>
        <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="video-modal-close" onClick={closeVideoModal}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <iframe
            src={`${videoUrls[isMobile || isTablet ? carouselIndex : currentImageIndex]}?autoplay=1`}
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title={`${names[isMobile || isTablet ? carouselIndex : currentImageIndex]}'s Story`}
          ></iframe>
        </div>
      </div>
    )}
  </section>
  );
};


// New section: Solutions for every step of the mortgage journey
export const SolutionsForEachStep = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const carouselRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const solutions = [

     {
      subheader: "Automate Tasks",
      title: "Smartflow",
      paragraph: "Our workflow tool reduces manual admin, improves accuracy and speeds up case progression. Advisers gain more client time, streamlined processes, and fewer errors, helping them focus on advice instead of paperwork."
    },
    {
      subheader: "Client loyalty",
      title: "SmartrRetain",
      paragraph: "Automates follow-ups, reviews and renewals. Stay front of mind, build repeat business, and generate referrals through consistent, value-driven communication."
    },
    {
      subheader: "Grow lead pipeline",
      title: "Introducer portal",
      paragraph: "Capture, track and convert leads within Smartr365. Manage business contacts, tasks and client history in one place to ensure opportunities are maximised and relationships strengthened."
    },
    {
      subheader: "Client cover",
      title: "Protection",
      paragraph: "Offer life, critical illness, and income protection with ease. Smartr365 integrates protection into every case, helping advisers provide security and reassurance to clients and their families."
    },
    {
      subheader: "Simplified operations",
      title: "Admin",
      paragraph: "Centralises compliance, onboarding, and documentation. Reduce back-office complexity and keep your firm running smoothly while freeing time for revenue-generating activities."
    },
    {
      subheader: "Seamless integrations",
      title: "Sourcing",
      paragraph: "Connect Smartr365 with CRMs, lenders, compliance platforms and insurers. Reduce duplication, keep data accurate and let information flow automatically across your systems."
    },


  ];

  // Check device type
  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 993);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // Touch handlers for swipe functionality
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    const slidesToShow = isMobile ? 1 : isTablet ? 2 : 3;
    const maxIndex = solutions.length - slidesToShow;

    if (isLeftSwipe && carouselIndex < maxIndex) {
      setCarouselIndex(prev => prev + 1);
    }
    if (isRightSwipe && carouselIndex > 0) {
      setCarouselIndex(prev => prev - 1);
    }
    
    // Reset touch coordinates
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  // Navigation handlers
  const goToPrevious = () => {
    if (carouselIndex > 0) {
      setCarouselIndex(prev => prev - 1);
    }
  };

  const goToNext = () => {
    const slidesToShow = isMobile ? 1 : isTablet ? 2 : 3;
    const maxIndex = solutions.length - slidesToShow;
    if (carouselIndex < maxIndex) {
      setCarouselIndex(prev => prev + 1);
    }
  };

  const goToSlide = (index) => {
    const slidesToShow = isMobile ? 1 : isTablet ? 2 : 3;
    const maxIndex = solutions.length - slidesToShow;
    setCarouselIndex(Math.min(index, maxIndex));
  };

  const slidesToShow = isMobile ? 1 : isTablet ? 2 : 3;
  const slideWidth = 100 / slidesToShow;

  return (
    <section className="solutions-carousel-section">
      <div className="solutions-carousel-container">
        <div className="section-subtitle">Platform</div>
        <h2 className="section-title">Solutions for every step of the mortgage journey</h2>
        <p className="section-description">
          Our platform supports the full mortgage journey from lead capture to completion, giving brokers efficient tools to manage cases, ensure compliance, and deliver a smoother experience for every client.
        </p>
        
        {/* AgenticCS section integrated under the title */}

        
        <div className="solutions-carousel-wrapper">
          <div 
            className="solutions-carousel"
            ref={carouselRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="solutions-carousel-track"
              style={{
                transform: `translateX(-${carouselIndex * slideWidth}%)`,
                transition: 'transform 0.3s ease-in-out'
              }}
            >
              {solutions.map((solution, index) => (
                <div 
                  key={index}
                  className="solutions-slide"
                  style={{
                    width: `${slideWidth}%`,
                    flex: `0 0 ${slideWidth}%`
                  }}
                >
                  <div className="solutions-card" onClick={() => console.log(`Clicked on ${solution.title}`)}>
                    <div className="solutions-content">
                      <div className="solutions-subheader">{solution.subheader}</div>
                      <h2 className="solutions-title">{solution.title}</h2>
                      <p className="solutions-paragraph">{solution.paragraph}</p>
                      <a href="#" className="learn-more-link">
                        Learn more
                        <span className="learn-more-arrow">&rarr;</span>
                      </a>
                    </div>
                    <div className="solutions-image">
                      <img 
                        src="/img/placeholder.png" 
                        alt={`${solution.title} illustration`}
                        className="solutions-placeholder"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        {/* Mini navigation dots */}
        <div className="carousel-minimap">
          {Array.from({ length: solutions.length - slidesToShow + 1 }).map((_, index) => (
            <button
              key={index}
              className={`minimap-dot ${index === carouselIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};



// Animated Reviews Section

const reviewsCol1 = [
  {
    title: "Saves hours every week!",
    text: "Smartr365.com has transformed my workflow. I can manage all my clients in one place and spend way less time on admin.",
    rating: 5,
  },
  {
    title: "Compliance made easy",
    text: "I used to worry about keeping up with compliance. Smartr365 keeps everything up to date and makes audits stress-free.",
    rating: 4,
  },
  {
    title: "Best sourcing tool for brokers",
    text: "The sourcing and DIP features are a game changer. I can find the best deals and get DIPs done in minutes.",
    rating: 5,
  },
  {
    title: "Clients love the journey",
    text: "My clients get updates at every stage and feel confident. The FMA and protection finder are super useful.",
    rating: 4,
  },
  {
    title: "All-in-one platform",
    text: "From onboarding to completion, Smartr365.com covers everything. I don’t need any other tools.",
    rating: 5,
  },
  {
    title: "Support is fantastic",
    text: "Whenever I have a question, the Smartr365 team is quick to help. Highly recommend for any mortgage broker!",
    rating: 4,
  },
];

const reviewsCol2 = [
  {
    title: "Protection finder saves deals",
    text: "I can instantly find the right protection for my clients. It’s helped me close more cases and keep clients happy.",
    rating: 4,
  },
  {
    title: "Easy client management",
    text: "Tracking cases and documents is so simple now. Smartr365.com keeps everything organised and secure.",
    rating: 5,
  },
  {
    title: "DIP and FMA in minutes",
    text: "Submitting DIPs and FMAs is so fast. I can focus on helping clients instead of paperwork.",
    rating: 4,
  },
  {
    title: "Great for growing my business",
    text: "Smartr365.com helped me scale up and take on more clients without extra admin headaches.",
    rating: 5,
  },
  {
    title: "Client portal is a winner",
    text: "My clients love logging in and seeing their progress. It makes the mortgage journey transparent and easy.",
    rating: 4,
  },
  {
    title: "Automated reminders rock",
    text: "I never forget a deadline now. Smartr365 sends reminders for everything, so I stay on top of my cases.",
    rating: 5,
  },
];

const reviewsCol3 = [
  {
    title: "Best broker software!",
    text: "I’ve tried other platforms but Smartr365.com is by far the most complete and easiest to use.",
    rating: 4,
  },
  {
    title: "Instant document uploads",
    text: "Clients can upload docs securely and I get notified instantly. No more chasing paperwork!",
    rating: 5,
  },
  {
    title: "Sourcing is so fast",
    text: "I can compare products and source the best deals for my clients in seconds.",
    rating: 4,
  },
  {
    title: "Great for compliance",
    text: "All my compliance checks are logged and easy to access. Audits are a breeze now.",
    rating: 5,
  },
  {
    title: "Pipeline management is simple",
    text: "I can see all my cases at a glance and know exactly what needs attention.",
    rating: 4,
  },
  {
    title: "Fantastic support team",
    text: "Whenever I need help, the Smartr365 support team is there for me. Couldn’t ask for more!",
    rating: 5,
  },
];

export const AnimatedReviews = () => {
  const directions = ['up', 'down', 'up'];
  const columns = [reviewsCol1, reviewsCol2, reviewsCol3];

  return (
    <section className="animated-reviews-section">
      <div className="animated-reviews-gradient-top" />
      <div className="animated-reviews-container">
        {columns.map((reviews, colIdx) => (
          <div
            className={`reviews-column reviews-marquee-${directions[colIdx]}`}
            key={colIdx}
          >
            {[...reviews, ...reviews].map((review, idx) => (
              <div className="review-card" key={colIdx + '-' + idx} style={{ animationDelay: `${(idx % reviews.length) * 0.3 + colIdx * 0.2}s` }}>
                <div className="review-rating">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>
                <div className="review-title">{review.title}</div>
                <div className="review-text">{review.text}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="animated-reviews-gradient-bottom" />
    </section>
  );
};

export default SaaSAnalytics;
