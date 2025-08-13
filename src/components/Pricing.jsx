import React, { useState } from 'react';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = {
    monthly: [
      {
        name: "Starter",
        price: "£29",
        period: "/month",
        description: "Perfect for individual advisers starting out",
        features: [
          "Up to 50 cases per month",
          "Basic CRM functionality",
          "Email support",
          "Standard compliance checks",
          "Basic reporting"
        ],
        popular: false,
        cta: "Start Free Trial"
      },
      {
        name: "Professional",
        price: "£79",
        period: "/month",
        description: "Ideal for growing advisory businesses",
        features: [
          "Unlimited cases",
          "Advanced CRM & automation",
          "Priority phone support",
          "Advanced compliance suite",
          "Custom reporting & analytics",
          "API integrations",
          "Team collaboration tools"
        ],
        popular: true,
        cta: "Start Free Trial"
      },
      {
        name: "Enterprise",
        price: "Custom",
        period: "",
        description: "For large firms with complex needs",
        features: [
          "Everything in Professional",
          "Dedicated account manager",
          "Custom integrations",
          "White-label options",
          "Advanced security features",
          "SLA guarantees",
          "Custom training"
        ],
        popular: false,
        cta: "Contact Sales"
      }
    ],
    annual: [
      {
        name: "Starter",
        price: "£24",
        period: "/month",
        originalPrice: "£29",
        description: "Perfect for individual advisers starting out",
        features: [
          "Up to 50 cases per month",
          "Basic CRM functionality",
          "Email support",
          "Standard compliance checks",
          "Basic reporting"
        ],
        popular: false,
        cta: "Start Free Trial"
      },
      {
        name: "Professional",
        price: "£65",
        period: "/month",
        originalPrice: "£79",
        description: "Ideal for growing advisory businesses",
        features: [
          "Unlimited cases",
          "Advanced CRM & automation",
          "Priority phone support",
          "Advanced compliance suite",
          "Custom reporting & analytics",
          "API integrations",
          "Team collaboration tools"
        ],
        popular: true,
        cta: "Start Free Trial"
      },
      {
        name: "Enterprise",
        price: "Custom",
        period: "",
        description: "For large firms with complex needs",
        features: [
          "Everything in Professional",
          "Dedicated account manager",
          "Custom integrations",
          "White-label options",
          "Advanced security features",
          "SLA guarantees",
          "Custom training"
        ],
        popular: false,
        cta: "Contact Sales"
      }
    ]
  };

  const currentPlans = plans[billingCycle];

  return (
    <div className="pricing-page">
      {/* Header */}
      <div className="pricing-header">
        <div className="pricing-container">
          <h1>Choose Your Plan</h1>
          <p>Transparent pricing that scales with your business</p>
          
          {/* Billing Toggle */}
          <div className="billing-toggle">
            <span className={billingCycle === 'monthly' ? 'active' : ''}>Monthly</span>
            <div className="toggle-switch" onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}>
              <div className={`toggle-slider ${billingCycle === 'annual' ? 'active' : ''}`}></div>
            </div>
            <span className={billingCycle === 'annual' ? 'active' : ''}>
              Annual
              <span className="savings-badge">Save 18%</span>
            </span>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="pricing-container">
        <div className="pricing-grid">
          {currentPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`pricing-card ${plan.popular ? 'popular' : ''} ${selectedPlan === index ? 'selected' : ''}`}
              onClick={() => setSelectedPlan(index)}
            >
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              
              <div className="plan-header">
                <h3>{plan.name}</h3>
                <div className="price-section">
                  <div className="price">
                    {plan.originalPrice && (
                      <span className="original-price">{plan.originalPrice}</span>
                    )}
                    <span className="current-price">{plan.price}</span>
                    <span className="period">{plan.period}</span>
                  </div>
                  {billingCycle === 'annual' && plan.originalPrice && (
                    <div className="annual-note">Billed annually</div>
                  )}
                </div>
                <p className="plan-description">{plan.description}</p>
              </div>

              <div className="features-list">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="feature-item">
                    <svg className="check-icon" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`plan-cta ${plan.popular ? 'primary' : 'secondary'}`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="pricing-faq">
        <div className="pricing-container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>Can I change plans anytime?</h4>
              <p>Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
            </div>
            <div className="faq-item">
              <h4>Is there a free trial?</h4>
              <p>Yes, all plans come with a 14-day free trial. No credit card required to start.</p>
            </div>
            <div className="faq-item">
              <h4>What payment methods do you accept?</h4>
              <p>We accept all major credit cards, PayPal, and bank transfers for annual plans.</p>
            </div>
            <div className="faq-item">
              <h4>Is my data secure?</h4>
              <p>Absolutely. We're ISO 27001 certified and use bank-level encryption to protect your data.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
