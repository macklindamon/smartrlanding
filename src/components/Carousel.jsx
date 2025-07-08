import React, { useState } from 'react';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      title: 'Streamline Your Workflow',
      description: 'Automate mortgage applications and reduce processing time by 60%',
      image: '/img/placeholder.png',
      features: ['Automated Processing', 'Real-time Updates', 'Client Portal']
    },
    {
      id: 2,
      title: 'Advanced Analytics',
      description: 'Get insights into your business performance with detailed analytics',
      image: '/img/placeholder.png',
      features: ['Performance Metrics', 'Custom Reports', 'Data Visualization']
    },
    {
      id: 3,
      title: 'Client Management',
      description: 'Manage all your clients in one centralized platform',
      image: '/img/placeholder.png',
      features: ['Contact Management', 'Communication Hub', 'Document Storage']
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="carousel-section">
      <div className="carousel-container">
        <div className="carousel-header">
          <h2>Why Choose Smartr365?</h2>
          <p>Discover the features that make us the leading mortgage platform</p>
        </div>
        
        <div className="carousel">
          <div className="carousel-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {slides.map((slide) => (
              <div key={slide.id} className="carousel-slide">
                <div className="slide-content">
                  <div className="slide-text">
                    <h3>{slide.title}</h3>
                    <p>{slide.description}</p>
                    <ul className="slide-features">
                      {slide.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                    <button className="slide-cta">Learn More</button>
                  </div>
                  <div className="slide-image">
                    <img src={slide.image} alt={slide.title} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation Arrows */}
          <button className="carousel-arrow carousel-arrow-prev" onClick={prevSlide}>
            ‹
          </button>
          <button className="carousel-arrow carousel-arrow-next" onClick={nextSlide}>
            ›
          </button>
        </div>
        
        {/* Dots Indicator */}
        <div className="carousel-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
