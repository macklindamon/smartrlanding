import React, { useState, useEffect } from 'react';

const TabbedCardSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Real content from SolutionsForEachStep carousel
  const tabsData = [
    {
      id: 'smartflow',
      label: 'Smartflow',
      subtitle: 'Automate Tasks',
      title: 'Smartflow',
      description: 'Our workflow tool reduces manual admin, improves accuracy and speeds up case progression.',
      details: 'Advisers gain more client time, streamlined processes, and fewer errors, helping them focus on advice instead of paperwork.',
      image: '/img/placeholder.png'
    },
    {
      id: 'smartr-retain',
      label: 'SmartrRetain', 
      subtitle: 'Client loyalty',
      title: 'SmartrRetain',
      description: 'Automates follow-ups, reviews and renewals. Stay front of mind, build repeat business.',
      details: 'Generate referrals through consistent, value-driven communication and build lasting client relationships.',
      image: '/img/placeholder.png'
    },
    {
      id: 'introducer-portal',
      label: 'Introducer Portal',
      subtitle: 'Grow lead pipeline',
      title: 'Introducer Portal',
      description: 'Capture, track and convert leads within Smartr365. Manage business contacts and tasks.',
      details: 'Manage client history in one place to ensure opportunities are maximised and relationships strengthened.',
      image: '/img/placeholder.png'
    },
    {
      id: 'protection',
      label: 'Protection',
      subtitle: 'Client cover',
      title: 'Protection',
      description: 'Offer life, critical illness, and income protection with ease.',
      details: 'Smartr365 integrates protection into every case, helping advisers provide security and reassurance to clients and their families.',
      image: '/img/placeholder.png'
    },
    {
      id: 'admin',
      label: 'Admin',
      subtitle: 'Simplified operations', 
      title: 'Admin',
      description: 'Centralises compliance, onboarding, and documentation.',
      details: 'Reduce back-office complexity and keep your firm running smoothly while freeing time for revenue-generating activities.',
      image: '/img/placeholder.png'
    },
    {
      id: 'sourcing',
      label: 'Sourcing',
      subtitle: 'Seamless integrations',
      title: 'Sourcing',
      description: 'Connect Smartr365 with CRMs, lenders, compliance platforms and insurers.',
      details: 'Reduce duplication, keep data accurate and let information flow automatically across your systems.',
      image: '/img/placeholder.png'
    }
  ];

  const nextSlide = () => {
    setActiveTab((prev) => (prev + 1) % tabsData.length);
  };

  const prevSlide = () => {
    setActiveTab((prev) => (prev - 1 + tabsData.length) % tabsData.length);
  };

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <section className="tabbed-card-section">
      <div className="tabbed-card-container">
        {/* Header */}


        {/* Tab Navigation */}
        <div className="tabbed-card-tabs">
          {tabsData.map((tab, index) => (
            <button
              key={tab.id}
              className={`tabbed-card-tab ${index === activeTab ? 'active' : ''}`}
              onClick={() => handleTabClick(index)}
            >
              <span className="tab-label">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="tabbed-card-content">
          {/* Card Container */}
          <div className="tabbed-card-wrapper">
            <div className="tabbed-card-slide">
              <div className="card-content">
                <div className="card-right">
                  <div className="card-image-container">
                    <img 
                      src={tabsData[activeTab].image} 
                      alt={tabsData[activeTab].title}
                      className="card-image"
                    />
                  </div>
                </div>
                <div className="card-left">
                  {/* Desktop Navigation Arrows - moved above heading */}
                  <div className="tabbed-card-arrows desktop-only">
                    <button 
                      className="tabbed-card-arrow tabbed-card-arrow-left" 
                      onClick={prevSlide}
                      aria-label="Previous slide"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M15 18L9 12L15 6" />
                      </svg>
                    </button>
                    <button 
                      className="tabbed-card-arrow tabbed-card-arrow-right" 
                      onClick={nextSlide}
                      aria-label="Next slide"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 18L15 12L9 6" />
                      </svg>
                    </button>
                  </div>

                  <h3 className="card-title">{tabsData[activeTab].title}</h3>
                  <p className="card-description">{tabsData[activeTab].description}</p>
                  <p className="card-placeholder-text">
                    {tabsData[activeTab].details}
                  </p>
                  <button className="card-cta">
                    Learn more →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabbedCardSection;