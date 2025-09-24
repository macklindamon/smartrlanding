import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { teamMembers } from '../data/team';

const TeamDetail = () => {
  const { slug } = useParams();
  const member = teamMembers.find((m) => m.slug === slug);

  if (!member) {
    return (
      <div className="container">
        <h1>Team member not found</h1>
        <p>The team member you're looking for does not exist.</p>
        <Link to="/team">Back to team</Link>
      </div>
    );
  }

  return (
    <div className="team-detail-page">


      <section className="case-study-hero team-hero">
        <div className="container case-study-hero-content">
          <div className="team-hero-meta-header case-study-meta-header">
            <div className="team-image-container large">
              <img src={member.image} alt={member.name} onError={(e)=>{e.target.src='/img/placeholder.png'}}/>
            </div>
            <div>
              <h1 className="case-study-hero-title">{member.name}</h1>
              <p className="case-study-hero-description team-role-hero">{member.role}</p>
              <div style={{marginTop:12}}>
                {member.linkedin && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="btn linkedin-btn" aria-label={`LinkedIn ${member.name}`}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{marginRight:8}}>
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span>View LinkedIn</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="case-study-content-section">
        <div className="container case-study-content">
          <div className="case-study-section">
            <h2 className="case-study-section-title">About {member.name}</h2>
            <div className="case-study-section-content">
              <p>{member.bio}</p>
            </div>
          </div>

          <div className="case-study-section">
            <h3 className="case-study-section-title">Contact & Links</h3>
            <div className="case-study-section-content">
              <p><strong>Email:</strong> <a href={`mailto:${member.email}`}>{member.email}</a></p>
              {member.linkedin && <p><strong>LinkedIn:</strong> <a href={member.linkedin} target="_blank" rel="noopener noreferrer">{member.linkedin}</a></p>}
              {member.twitter && <p><strong>Twitter:</strong> <a href={member.twitter} target="_blank" rel="noopener noreferrer">{member.twitter}</a></p>}
              {member.github && <p><strong>GitHub:</strong> <a href={member.github} target="_blank" rel="noopener noreferrer">{member.github}</a></p>}
              {member.dribbble && <p><strong>Dribbble:</strong> <a href={member.dribbble} target="_blank" rel="noopener noreferrer">{member.dribbble}</a></p>}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamDetail;
