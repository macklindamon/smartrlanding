import React, { useEffect, useRef, useState } from 'react';
import TabbedCardSection from './TabbedCardSection';

const AgenticCS = () => {
  const containerRef = useRef(null);
  const [currentCardSet, setCurrentCardSet] = useState(0);
  const [cardPositions, setCardPositions] = useState([]);

  // Card sets for rotation
  const cardSets = [
    ['/img/darlington-card.svg', '/img/nationwide.svg'],
    ['/img/barclays-card.svg', '/img/halifax-card.svg']
  ];

  // Generate random positions for cards
  const generateRandomPositions = () => {
    return [
      {
        // Card 1 - random position around the edges
        left: Math.random() > 0.5 ? `${Math.random() * 40 - 30}px` : 'auto',
        right: Math.random() > 0.5 ? `${Math.random() * 40 - 30}px` : 'auto',
        top: `${Math.random() * 60 + 10}px`,
      },
      {
        // Card 2 - random position on opposite side
        left: Math.random() > 0.5 ? `${Math.random() * 40 - 30}px` : 'auto',
        right: Math.random() > 0.5 ? `${Math.random() * 40 - 30}px` : 'auto',
        top: `${Math.random() * 60 + 80}px`,
      }
    ];
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Apply parallax-visible class to all toast images
            const toastImages = entry.target.querySelectorAll('.notification-image');
            toastImages.forEach((img, index) => {
              setTimeout(() => {
                img.classList.add('parallax-visible');
              }, index * 200); // Stagger the appearance by 200ms each
            });
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    observer.observe(container);

    return () => {
      if (container) {
        observer.unobserve(container);
      }
    };
  }, []);

  // Card rotation effect
  useEffect(() => {
    // Generate initial positions
    setCardPositions(generateRandomPositions());

    const interval = setInterval(() => {
      setCurrentCardSet(prev => (prev + 1) % cardSets.length);
      // Generate new random positions on each rotation
      setCardPositions(generateRandomPositions());
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (


    <section className="agentic-cs-section">
      <div className="agentic-cs-container">
        <div className="section-subtitle">Platform</div>
        <h2 className="section-title">Solutions across the mortgage journey</h2>
        <p className="section-description">
          Our platform supports the full mortgage journey from lead capture to completion, giving brokers efficient tools to manage cases, ensure compliance, and deliver a smoother experience for every client.
        </p>
        <div className="agentic-cs-callout">
          <div className="agentic-cs-graphic">
            <div className="smartr-assist-notification" ref={containerRef}>
              <img 
                src="/img/ai-toast-fact-find.png" 
                alt="Smartr Assist notification showing AI-powered mortgage assistance" 
                className="notification-image toast-primary"
              />
              <img 
                src="/img/ai-toast-processing.png" 
                alt="AI processing notification" 
                className="notification-image toast-processing"
              />
              <img 
                src="/img/ai-toast-follow-up.png" 
                alt="AI follow-up notification" 
                className="notification-image toast-follow-up"
              />
            </div>
          </div>
          <div className="agentic-cs-content">
            <img src="/img/ai-agents.svg" alt="AI Agents" className="ai-agents-icon" />
            <h2 className="agentic-cs-title">Assistance through nudging</h2>
            <p className="agentic-cs-description">
             Never miss tasks. Realtime mortgage assistant boosting efficiency and revenue.
            </p>
            <div class="section-buttons">
            <button className="btn btn-primary" aria-label="Explore AI Agents for mortgage automation">
              Explore AI Agents
            </button>
            </div>
          </div>
        </div>
        
        {/* Platform cards moved inside agentic-cs section */}
        <div className="platform-cards-container">
          {/* HomeBuyer Card */}
          <div className="platform-card">
            <div className="platform-card-image">
              <img src="/img/placeholder.png" alt="HomeBuyer interface" />
            </div>
            <img src="/img/homebuyer-icon.svg" alt="SmartrConnect interface" className="smartr-connect-icon" />
            <h3 className="platform-card-title">
              Client app
            </h3>
            <p className="platform-card-description">
              Guide first-time buyers and movers from affordability through to completion. Smartr365's HomeBuyer experience brings clarity, reassurance and simple digital tools that support every step towards owning a home.
            </p>
            <div className="platform-card-read-more">
              <span>Read more</span>
              <div className="learn-more-arrow">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          {/* SmartrConnect Card with Dark Blue Callout */}
          <div className="platform-card smartr-connect-callout">
            <div className="platform-card-image smartr-connect-image">
              {/* Lender images removed */}
            </div>
            <img src="/img/smartr-connect-icon.svg" alt="SmartrConnect interface" className="smartr-connect-icon" />
            <h3 className="platform-card-title">
              Top tier lenders
            </h3>
                        <p className="platform-card-description">
              Connect to 60+ lenders instantly.
            </p>
            <div className="platform-card-read-more">
              <span>Read more</span>
              <div className="learn-more-arrow">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgenticCS;