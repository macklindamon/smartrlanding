import React, { useState, useEffect, useRef } from 'react';

const FeatureStepsCarousel = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isScrollTriggered, setIsScrollTriggered] = useState(false);
  const sectionRef = useRef(null);
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef(null);

  const steps = [
    {
      id: 'track',
      title: 'Track',
      description: 'Stay in control of every lead, client, and case. Smartr365 gives you full visibility from first contact to completion — no more lost data, missed updates, or double entry.',
      features: [
        'Unified client and case management',
        'Live case tracking across advisers and introducers',
        'Custom reporting and pipeline visibility'
      ],
      icon: '📊'
    },
    {
      id: 'verify',
      title: 'Verify',
      description: 'Build trust and cut admin with seamless verification. Smartr365 automates the checks that used to take hours — so you and your clients can move faster.',
      features: [
        'Identity verification with Yoti',
        'Credit checks and Open Banking fact finds',
        'Secure document upload and storage'
      ],
      icon: '✅'
    },
    {
      id: 'source',
      title: 'Source',
      description: 'Find the right mortgage in seconds. Smartr365 integrates directly with leading sourcing tools, so you always have the best products at your fingertips.',
      features: [
        'Real-time lender product data',
        'Integration with Twenty7Tec, Ignite, Mortgage Brain',
        'Smarter filters and comparisons for advisers'
      ],
      icon: '🔍'
    },
    {
      id: 'comply',
      title: 'Comply',
      description: 'Stay compliant without slowing down. Every action in Smartr365 is logged, audited, and FCA-ready — so you can protect your business while focusing on clients.',
      features: [
        'Automatic compliance logging',
        'Full audit trails for every case',
        'Built-in risk and suitability checks'
      ],
      icon: '🛡️'
    },
    {
      id: 'apply',
      title: 'Apply',
      description: 'Submit applications seamlessly to lenders. Smartr365 automates the application process, reducing errors and speeding up approvals for your clients.',
      features: [
        'Direct lender integrations',
        'Automated application submission',
        'Real-time status updates'
      ],
      icon: '🚀'
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || isScrollTriggered) return;

    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isScrollTriggered, steps.length]);

  // Scroll-triggered navigation with parallax effect
  useEffect(() => {
    const handleScroll = throttle(() => {
      const section = document.querySelector('.feature-steps-section');
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;
      
      // Calculate scroll progress through the section
      const scrollStart = rect.top;
      const scrollEnd = rect.bottom - viewportHeight;
      
      console.log('Scroll debug:', {
        scrollStart: scrollStart.toFixed(2),
        scrollEnd: scrollEnd.toFixed(2),
        sectionHeight,
        viewportHeight
      });
      
      // Only activate when section is in view
      if (scrollStart <= 0 && scrollEnd >= 0) {
        setIsScrollTriggered(true);
        setIsAutoPlaying(false);
        
        const scrollProgress = Math.abs(scrollStart) / (sectionHeight - viewportHeight);
        const clampedProgress = Math.max(0, Math.min(1, scrollProgress));
        
        // Map progress to steps (5 steps: 0-4)
        const stepIndex = Math.floor(clampedProgress * 4.99); // 4.99 to ensure we don't exceed index 4
        
        console.log('Progress:', clampedProgress.toFixed(3), 'Step:', stepIndex);
        
        if (stepIndex !== currentStep) {
          setCurrentStep(stepIndex);
        }
      } else {
        setIsScrollTriggered(false);
        if (!isAutoPlaying) setIsAutoPlaying(true);
      }
    }, 8);

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentStep, isAutoPlaying]);

  // Throttle function for better performance
  function throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    }
  }

  const handleStepClick = (index) => {
    setCurrentStep(index);
    setIsAutoPlaying(false);
    setIsScrollTriggered(false);
    
    // Resume auto-play after 10 seconds
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 10000);
  };

  return (
    <section className="feature-steps-section" ref={sectionRef}>
      <div className="feature-steps-container">
        <div className="feature-steps-header">
          <h2>Accelerate test case generation</h2>
          <p>Complete mortgage lifecycle management in one platform</p>
        </div>

        <div className="feature-steps-carousel">
          {/* Scroll Progress Indicator */}
          {isScrollTriggered && (
            <div className="scroll-progress-indicator">
              <div 
                className="scroll-progress-bar"
                style={{ 
                  width: `${((currentStep + 1) / steps.length) * 100}%` 
                }}
              />
            </div>
          )}
          
          {/* Navigation Steps */}
          <div className="steps-navigation" data-active={currentStep}>
            {steps.map((step, index) => (
              <button
                key={step.id}
                className={`step-nav-item ${index === currentStep ? 'active' : ''}`}
                onClick={() => handleStepClick(index)}
              >
                <div className="step-title">{step.title}</div>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="steps-content">
            {/* Code Editor Section */}
            <div className="code-editor-section">
              <div className="code-editor">
                <div className="code-line-numbers">
                  {Array.from({ length: 15 }, (_, i) => (
                    <div key={i + 228} className="line-number">{228 + i}</div>
                  ))}
                </div>
                <div className="code-content">
                  <div className="code-line">
                    <span className="code-bracket">{'}'}</span>
                  </div>
                  <div className="code-line">
                    <span className="code-comment">/**</span>
                  </div>
                  <div className="code-line">
                    <span className="code-comment"> * Method under test:</span>
                  </div>
                  <div className="code-line">
                    <span className="code-comment"> * </span>
                    <span className="code-link">@link</span>
                    <span className="code-text"> OwnerController</span>
                    <span className="code-method">#processFindForm</span>
                    <span className="code-text">(int, Owner, Binding</span>
                  </div>
                  <div className="code-line">
                    <span className="code-comment"> */</span>
                  </div>
                  <div className="code-line">
                    <span className="code-annotation">@Test</span>
                  </div>
                  <div className="code-line">
                    <span className="code-keyword">void</span>
                    <span className="code-method"> testProcessFindForm</span>
                    <span className="code-text">() </span>
                    <span className="code-keyword">throws</span>
                    <span className="code-text"> Exception </span>
                    <span className="code-bracket">{'{'}</span>
                  </div>
                  <div className="code-line">
                    <span className="code-comment">    // Arrange</span>
                  </div>
                  <div className="code-line">
                    <span className="code-text">    when(ownerRepository.findByLastName(Mockito.&lt;-&gt; any().</span>
                  </div>
                  <div className="code-line">
                    <span className="code-text">        .thenReturn(</span>
                    <span className="code-keyword">new</span>
                    <span className="code-text"> PageImpl&lt;&gt;(</span>
                    <span className="code-keyword">new</span>
                    <span className="code-text"> ArrayList&lt;&gt;()));</span>
                  </div>
                  <div className="code-line">
                    <span className="code-text">    MockHttpServletRequestBuilder getResult = MockMvcRequest</span>
                  </div>
                  <div className="code-line">
                    <span className="code-text">    MockHttpServletRequestBuilder requestBuilder = getResult</span>
                  </div>
                  <div className="code-line">
                    <span className="code-comment">    // Act and Assert</span>
                  </div>
                  <div className="code-line">
                    <span className="code-text">    MockMvcBuilders.standaloneSetup(ownerController).Sandalo</span>
                  </div>
                  <div className="code-line">
                    <span className="code-text">        .build() MockMvc</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content Section */}
            <div className="text-content-section">
              <h3>{steps[currentStep].title}</h3>
              <p className="step-description">{steps[currentStep].description}</p>
              <ul className="step-features">
                {steps[currentStep].features.map((feature, index) => (
                  <li key={index} className="feature-item">
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureStepsCarousel;
