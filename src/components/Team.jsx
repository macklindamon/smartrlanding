import React from 'react';
import { Link } from 'react-router-dom';
import { teamMembers } from '../data/team';

const Team = () => {
  return (
    <><section className="team-page">
      <div className="page-hero">
        <div className="page-hero-container">
          <h1 className="page-hero-title">Meet the team</h1>
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
                    <p className="team-bio-preview">
                      {member.bio.split(' ').slice(0, 10).join(' ')}...
                    </p>
                    <div className="team-read-more">
                      <span>Read more</span>
                      <div className="learn-more-arrow">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
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
