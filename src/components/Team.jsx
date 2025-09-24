import React from 'react';
import { Link } from 'react-router-dom';
import { teamMembers } from '../data/team';

const Team = () => {
  return (
    <><section className="team-page">
      <div className="page-hero">
        <div className="page-hero-container">
          <h1 class="page-hero-title">Meet the team</h1>
          <p class="page-hero-description">Our awesome team made up of talented individuals</p>
        </div>
      </div>
    </section><section className="team-page-section">
        <div className="team-grid">
          <div className="row">
            {teamMembers.map((member) => (
              <div key={member.id} className="col-6 col-md-3 mb-4">
                <Link to={`/team/${member.slug}`} className="team-card">
                  <div className="team-image-container">
                    <img src={member.image} alt={member.name} className="team-image" />
                  </div>
                  <div className="team-info">
                    <h3 className="team-name">{member.name}</h3>
                    <p className="team-role">{member.role}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section></>
  );
};

export default Team;
