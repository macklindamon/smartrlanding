import React, { useState, useEffect, useRef } from 'react';
import LottiePlayer from './LottiePlayer';

const TabbedLottieSection = () => {
  const [activeTab, setActiveTab] = useState('CasesClients');
  const tabsRef = useRef(null);
  
  const tabs = [
    { 
      id: 'CasesClients', 
      label: 'Cases & Clients',
      subtitle: 'All data in one view',
      icon: '/img/cases-clients.svg'
    },
    { 
      id: 'Workflow', 
      label: 'Workflow',
      subtitle: 'Tailored processes',
      icon: '/img/view_kanban.svg'
    },
    { 
      id: 'TaskManagement', 
      label: 'Task management',
      subtitle: 'Timely actions and reminders',
      icon: '/img/add_task.svg'
    },
    { 
      id: 'Reporting', 
      label: 'Reporting',
      subtitle: 'Insight to your firm',
      icon: '/img/finance.svg'
    },
    { 
      id: 'Notifications', 
      label: 'Notifications',
      subtitle: 'Stay informed instantly',
      icon: '/img/notification_sound.svg'
    }
  ];

  // Update slider position and width when active tab changes
  useEffect(() => {
    const updateSliderPosition = () => {
      if (tabsRef.current) {
        const activeTabElement = tabsRef.current.querySelector(`[data-tab-id="${activeTab}"]`);
        if (activeTabElement) {
          const tabsContainer = tabsRef.current;
          const containerRect = tabsContainer.getBoundingClientRect();
          const tabRect = activeTabElement.getBoundingClientRect();
          
          const offsetLeft = tabRect.left - containerRect.left;
          const tabWidth = tabRect.width;
          
          // Update CSS custom properties for the sliding selector
          tabsContainer.style.setProperty('--slider-left', `${offsetLeft}px`);
          tabsContainer.style.setProperty('--slider-width', `${tabWidth}px`);
        }
      }
    };

    // Update position immediately
    updateSliderPosition();
    
    // Also update on window resize
    window.addEventListener('resize', updateSliderPosition);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', updateSliderPosition);
    };
  }, [activeTab]);

  // Set initial position on mount
  useEffect(() => {
    // Use setTimeout to ensure DOM is fully rendered
    const timer = setTimeout(() => {
      if (tabsRef.current) {
        const activeTabElement = tabsRef.current.querySelector(`[data-tab-id="${activeTab}"]`);
        if (activeTabElement) {
          const tabsContainer = tabsRef.current;
          const containerRect = tabsContainer.getBoundingClientRect();
          const tabRect = activeTabElement.getBoundingClientRect();
          
          const offsetLeft = tabRect.left - containerRect.left;
          const tabWidth = tabRect.width;
          
          // Update CSS custom properties for the sliding selector
          tabsContainer.style.setProperty('--slider-left', `${offsetLeft}px`);
          tabsContainer.style.setProperty('--slider-width', `${tabWidth}px`);
        }
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <div className="tabbed-lottie-section">
      {/* Tab Navigation */}
      <div className="lottie-tabs" ref={tabsRef}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            data-tab-id={tab.id}
            className={`lottie-tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <img src={tab.icon} alt={tab.label} className="tab-icon" />
            <div className="tab-content">
              <span className="tab-label">{tab.label}</span>
              <span className="tab-subtitle">{tab.subtitle}</span>
            </div>
          </button>
        ))}
      </div>
      
      {/* Lottie Animation Container */}
      <div className="lottie-container-fixed">
        <LottiePlayer 
          key={activeTab} // Force remount and replay when tab changes
          src="/img/lottie/cases.json"
          loop={false}
          autoplay={true}
          allowReplay={true} // Allow replaying when tabs change
          className="lottie-player-hero"
        />
      </div>
    </div>
  );
};

export default TabbedLottieSection;
