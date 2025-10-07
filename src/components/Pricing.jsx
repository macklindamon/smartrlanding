import React, { useState } from 'react';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('yearly');
  const [userCount, setUserCount] = useState(1);

  const handleUserCountChange = (value) => {
    const count = Math.max(1, Math.min(10, parseInt(value) || 1));
    setUserCount(count);
  };

  // Pricing data based on the screenshot
  const pricingData = {
    1: { basic: { monthly: 82.0, annual: 80.0 }, pro: { monthly: 95.0, annual: 92.0 } },
    2: { basic: { monthly: 82.0, annual: 80.0 }, pro: { monthly: 95.0, annual: 92.0 } },
    3: { basic: { monthly: 82.0, annual: 80.0 }, pro: { monthly: 92.0, annual: 89.0 } },
    4: { basic: { monthly: 82.0, annual: 80.0 }, pro: { monthly: 92.0, annual: 89.0 } },
    5: { basic: { monthly: 82.0, annual: 80.0 }, pro: { monthly: 92.0, annual: 89.0 } },
    6: { basic: { monthly: 82.0, annual: 80.0 }, pro: { monthly: 88.0, annual: 85.0 } },
    7: { basic: { monthly: 82.0, annual: 80.0 }, pro: { monthly: 88.0, annual: 85.0 } },
    8: { basic: { monthly: 82.0, annual: 80.0 }, pro: { monthly: 88.0, annual: 85.0 } },
    9: { basic: { monthly: 82.0, annual: 80.0 }, pro: { monthly: 85.0, annual: 82.0 } },
    10: { basic: { monthly: 80.0, annual: 78.0 }, pro: { monthly: 80.0, annual: 77.5 } }
  };

  const getCurrentPricing = () => {
    return pricingData[userCount] || pricingData[1];
  };

  return (
    <div className="pricing-page">
      <div className="pricing-container">
        {/* Header Section */}
        <div className="pricing-header">
          <h1>Pricing</h1>
          <p className="pricing-subtitle">
            Full access. Fair pricing. And a plan that grows with you.
          </p>
          <p className="pricing-description">
            Start today, no credit card required.
          </p>
          <button className="try-free-btn" aria-label="Try Smartr365 for free - no credit card required">
            Try for Free
          </button>
        </div>

        {/* Plan Selection Section */}
        <div className="plan-selection-section">
          <div className="plan-selection-card">
            <h2>Choose the plan that fits your team</h2>
            <p>Smartr365 scales with you — from solo advisers to large firms and networks.</p>
            
            {/* User Count Selector */}
            <div className="user-selector">
              <div className="user-selector-header">
                <span className="users-icon">👥</span>
                <span>How many users do you have in you firm?</span>
              </div>
              
              <div className="slider-container">
                <div 
                  className="slider-track"
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const percent = (e.clientX - rect.left) / rect.width;
                    const newValue = Math.round(1 + percent * 9);
                    setUserCount(Math.max(1, Math.min(10, newValue)));
                  }}
                >
                  <div 
                    className="slider-fill"
                    style={{ width: `${((userCount - 1) / 9) * 100}%` }}
                  ></div>
                  <div 
                    className="slider-thumb"
                    style={{ left: `${((userCount - 1) / 9) * 100}%` }}
                    onMouseDown={(e) => {
                      const handleMouseMove = (e) => {
                        const rect = document.querySelector('.slider-track').getBoundingClientRect();
                        const percent = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
                        const newValue = Math.round(1 + percent * 9);
                        setUserCount(Math.max(1, Math.min(10, newValue)));
                      };
                      
                      const handleMouseUp = () => {
                        document.removeEventListener('mousemove', handleMouseMove);
                        document.removeEventListener('mouseup', handleMouseUp);
                      };
                      
                      document.addEventListener('mousemove', handleMouseMove);
                      document.addEventListener('mouseup', handleMouseUp);
                    }}
                  >
                    <div className="user-count-badge">
                      <input
                        type="number"
                        min="1"
                        max="10"
                        value={userCount}
                        onChange={(e) => handleUserCountChange(e.target.value)}
                        className="user-count-input-slider"
                        onClick={(e) => e.stopPropagation()}
                        onMouseDown={(e) => e.stopPropagation()}
                      />
                      <span>User{userCount !== 1 ? 's' : ''}</span>
                    </div>
                  </div>
                </div>
              </div>
              </div>

            {/* Billing Toggle */}
            <div className="billing-toggle">
              <span className={billingCycle === 'monthly' ? 'active' : ''}>Monthly</span>
              <div className="toggle-switch">
                <input
                  type="checkbox"
                  id="billing-toggle"
                  checked={billingCycle === 'yearly'}
                  onChange={(e) => setBillingCycle(e.target.checked ? 'yearly' : 'monthly')}
                />
                <label htmlFor="billing-toggle" className="toggle-label">
                  <div className="toggle-slider"></div>
                </label>
              </div>
              <span className={billingCycle === 'yearly' ? 'active' : ''}>Yearly</span>
            </div>
          </div>
        </div>

        {/* Pricing Tables */}
        <div className="pricing-tables">
          {/* Basic Plan */}
          <div className="pricing-card basic-plan">
            <div className="plan-header">
              <h3>Basic</h3>
              <p>Invite clients to fill their fact finds manually</p>
            </div>
            <div className="plan-price">
              <div className="plan-price-row">
                <span className="currency">£</span>
                <span className="amount">
                  {getCurrentPricing().basic[billingCycle === 'yearly' ? 'annual' : 'monthly']}
                </span>
              </div>
              <div className="price-details">
                <span>per user/month, billed {billingCycle === 'yearly' ? 'annually' : 'monthly'}</span>
                <span className="total-price">
                  £{getCurrentPricing().basic[billingCycle === 'yearly' ? 'annual' : 'monthly'] * (billingCycle === 'yearly' ? 12 : 1) * userCount} total per {billingCycle === 'yearly' ? 'year' : 'month'}
                </span>
              </div>
            </div>
            <button className="plan-button start-trial-btn">
              Start Free Trial
            </button>
            <p className="trial-info">Free 30 day trial. No credit card required.</p>
            
            <div className="plan-features">
              <div className="feature-item negative">
                <span className="feature-icon">✕</span>
                <div className="feature-content">
                  <h4>SmartrFill</h4>
                  <p>No credits included. Pay as you go credits required. <strong>£180 per bundle/year, billed annually</strong></p>
                </div>
              </div>
              
              <div className="feature-item positive">
                <span className="feature-icon">✓</span>
                <div className="feature-content">
                  <h4>SmartrConnect</h4>
                  <p>Access top-tier lenders for DIPs & FMAs</p>
                </div>
              </div>
              
              <div className="feature-item positive">
                <span className="feature-icon">✓</span>
                <div className="feature-content">
                  <h4>HomeBuyer App</h4>
                  <p>Clients complete their fact find, track progress, and manage their property</p>
                </div>
              </div>
              
              <div className="feature-item positive">
                <span className="feature-icon">✓</span>
                <div className="feature-content">
                  <h4>SmartrFlow</h4>
                  <p>Define mandatory tasks at each stage of the mortgage journey</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="pricing-card pro-plan featured">
            <div className="featured-badge">Most Popular</div>
            <div className="plan-header">
              <h3>Pro</h3>
              <p>Let clients pre-fill their fact finds with SmartrFill</p>
            </div>
            <div className="plan-price">
              <div className="plan-price-row">
                <span className="currency">£</span>
                <span className="amount">
                  {getCurrentPricing().pro[billingCycle === 'yearly' ? 'annual' : 'monthly']}
                </span>
                <div className="save-badge">Save 20%</div>
              </div>
              <div className="price-details">
                <span>per user/month, billed {billingCycle === 'yearly' ? 'annually' : 'monthly'}</span>
                <span className="total-price">
                  £{Math.round(getCurrentPricing().pro[billingCycle === 'yearly' ? 'annual' : 'monthly'] * (billingCycle === 'yearly' ? 12 : 1) * userCount)} total per {billingCycle === 'yearly' ? 'year' : 'month'}
                </span>
              </div>
            </div>
            <button className="plan-button start-trial-btn pro-btn">
              Start Free Trial
            </button>
            <p className="trial-info">Free 30 day trial. No credit card required.</p>
            
            <div className="plan-features">
              <div className="feature-item positive smartrfill-highlight">
                <span className="feature-icon">✓</span>
                <div className="feature-content">
                  <h4>SmartrFill</h4>
                  <p><strong>60 bundled credits per user/year included. £120 per bundle/year billed annually</strong></p>
                </div>
              </div>
              
              <div className="feature-item positive">
                <span className="feature-icon">✓</span>
                <div className="feature-content">
                  <h4>SmartrConnect</h4>
                  <p>Access top-tier lenders for DIPs & FMAs</p>
                </div>
              </div>
              
              <div className="feature-item positive">
                <span className="feature-icon">✓</span>
                <div className="feature-content">
                  <h4>HomeBuyer App</h4>
                  <p>Clients complete their fact find, track progress, and manage their property</p>
                </div>
              </div>
              
              <div className="feature-item positive">
                <span className="feature-icon">✓</span>
                <div className="feature-content">
                  <h4>SmartrFlow</h4>
                  <p>Define mandatory tasks at each stage of the mortgage journey</p>
                </div>
              </div>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="pricing-card enterprise-plan">
            <div className="plan-header">
              <h3>Enterprise</h3>
              <p>Tailored pricing for high volume teams</p>
            </div>
            <div className="plan-price">
              <div className="custom-pricing">
                <span className="custom-text">Custom</span>
                <span className="contact-text">Contact us for pricing</span>
              </div>
            </div>
            <button className="plan-button contact-sales-btn" aria-label="Contact sales for enterprise pricing">
              Contact Sales
            </button>
            
            <div className="plan-features">
              <div className="feature-item positive">
                <span className="feature-icon">✓</span>
                <span className="feature-text">Unlimited users</span>
              </div>
              
              <div className="feature-item positive">
                <span className="feature-icon">✓</span>
                <span className="feature-text">Firm wide case review</span>
              </div>
              
              <div className="feature-item positive">
                <span className="feature-icon">✓</span>
                <span className="feature-text">Custom integrations</span>
              </div>
              
              <div className="feature-item positive">
                <span className="feature-icon">✓</span>
                <span className="feature-text">Dedicated support</span>
              </div>
              
              <div className="feature-item positive">
                <span className="feature-icon">✓</span>
                <span className="feature-text">Isolated hosting environment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
