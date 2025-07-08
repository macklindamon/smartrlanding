import React, { useState } from 'react';

const TargetAudience = () => {
  const [selectedAudience, setSelectedAudience] = useState(0);

  const audiences = [
    {
      id: 'busy-brokers',
      title: 'Mortgage & Protection Advisers',
      description: "Close more cases, faster. Automate admin, streamline workflows, and focus on what matters — building relationships and securing the best outcomes for your clients. Scale confidently with tools built for busy brokers.",
      image: "/img/placeholder.png"
    },
    {
      id: 'homebuyers',
      title: 'Homebuyers',
      description: "Get mortgage-ready without the paperwork chaos. From fact find to offer, we simplify every step so you can move faster, stay in control, and make confident decisions with your broker by your side.",
      image: "/img/placeholder.png"
    },
    {
      id: 'introducers',
      title: 'Introducers',
      description: "Whether you're an estate agent or home builder, connect your clients with trusted brokers in just a few clicks. Track progress, stay informed, and deliver a joined-up experience that builds trust and drives completions.",
      image: "/img/placeholder.png"
    }
  ];

  return (
    <section className="target-audience-section">
      <div className="target-audience-container">
        <div className="target-audience-content">
          <div className="target-audience-text">
            {audiences.map((audience, index) => (
              <div 
                key={audience.id} 
                className={`audience-item ${index === selectedAudience ? 'active' : ''}`}
                onClick={() => setSelectedAudience(index)}
                style={{ cursor: 'pointer' }}
              >
                <h3 className="audience-title">{audience.title}</h3>
                <p className="audience-description">{audience.description}</p>
              </div>
            ))}
          </div>
          <div className="target-audience-image">
            <img 
              src={audiences[selectedAudience].image} 
              alt={`Professional working - ${audiences[selectedAudience].title}`} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
