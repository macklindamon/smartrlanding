import React, { useState, useEffect, useRef } from 'react';

const CustomerQuote = ({ quote, author, company }) => {
  const [visibleWords, setVisibleWords] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  
  const words = quote.split(' ');
  const totalWords = words.length;

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !containerRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Section should be active when it enters the viewport
      const sectionTop = sectionRect.top;
      const sectionBottom = sectionRect.bottom;
      
      // Calculate if section is in viewport
      const isInViewport = sectionTop < viewportHeight && sectionBottom > 0;
      
      if (isInViewport) {
        setIsActive(true);
        
        // Calculate scroll progress through the section
        // The section height should be enough to scroll through all words
        const sectionHeight = sectionRect.height;
        const scrollableHeight = sectionHeight - viewportHeight;
        
        if (scrollableHeight > 0) {
          // How far we've scrolled into the section (0 to 1)
          const scrollProgress = Math.max(0, Math.min(1, -sectionTop / scrollableHeight));
          
          // Map scroll progress to word count
          const wordIndex = Math.floor(scrollProgress * totalWords);
          setVisibleWords(Math.min(wordIndex, totalWords));
        } else {
          // If section is smaller than viewport, show all words
          setVisibleWords(totalWords);
        }
      } else {
        setIsActive(false);
        // Reset or maintain state based on scroll direction
        if (sectionTop > viewportHeight) {
          setVisibleWords(0); // Section is below viewport
        } else {
          setVisibleWords(totalWords); // Section is above viewport
        }
      }
    };

    // Initial check
    handleScroll();
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [totalWords]);

  return (
    <section 
      className="customer-quote-section" 
      ref={sectionRef}
      style={{ 
        height: `${Math.max(200, totalWords * 8)}vh`, // Dynamic height based on word count
        minHeight: '200vh' // Ensure enough scroll distance
      }}
    >
      <div className="customer-quote-sticky-container" ref={containerRef}>
        <div className="container">
          <div className="customer-quote-content">
            <div className="quote-mark">"</div>
            <blockquote className="customer-quote-text">
              {words.map((word, index) => (
                <span
                  key={index}
                  className={`quote-word ${index < visibleWords ? 'visible' : ''}`}
                >
                  {word}{' '}
                </span>
              ))}
            </blockquote>
            <div className="customer-quote-attribution">
              <div className="customer-name">{author}</div>
              <div className="customer-company">{company}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerQuote;