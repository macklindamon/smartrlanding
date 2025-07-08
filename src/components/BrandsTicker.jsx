import React from 'react';

const BrandsTicker = () => {
  const brands = [
    { name: 'Altura', logo: '/img/brands/altura.png' },
    { name: 'Capricorn', logo: '/img/brands/capricorn.png' },
    { name: 'JMD', logo: '/img/brands/jmd.png' },
    { name: 'L&G', logo: '/img/brands/landg.png' },
    { name: 'We Do Mortgages', logo: '/img/brands/we-do.png' },
    { name: 'SBG', logo: '/img/brands/sbg.png' },
    { name: 'Yellowbrick', logo: '/img/brands/yellowbrick.png' }
  ];

  return (
    <div className="brands-ticker-section">
      {/* Brands Header */}
      <div className="brands-header">
        <h2>Trusted by leading broker firms and mortgage networks across the UK</h2>
      </div>
      
      <div className="brands-ticker">
        <div className="brands-track">
          {/* First set of brands */}
          {brands.map((brand, index) => (
            <div key={`first-${index}`} className="brand-item">
              <img 
                src={brand.logo} 
                alt={brand.name}
                className="brand-logo"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {brands.map((brand, index) => (
            <div key={`second-${index}`} className="brand-item">
              <img 
                src={brand.logo} 
                alt={brand.name}
                className="brand-logo"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandsTicker;
