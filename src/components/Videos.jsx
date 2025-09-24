import React, { useState } from 'react';
import { videos } from '../data/videos';

const Videos = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const openVideo = (video) => {
    setSelectedVideo(video);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeVideo = () => {
    setSelectedVideo(null);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  return (
    <div className="videos-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="page-hero-container">
          <h1 className="page-hero-title">Video Library</h1>
          <p className="page-hero-description">
            Watch detailed product demonstrations, tutorials, and customer success stories. 
            Learn how Smartr365 can transform your mortgage business through our comprehensive 
            video guides and real-world examples.
          </p>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="videos-grid-section">
        <div className="videos-container">
          <div className="videos-grid">
            {videos.map((video) => (
              <div 
                key={video.id} 
                className="video-card"
                onClick={() => openVideo(video)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && openVideo(video)}
              >
                <div className="video-thumbnail-container">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="video-thumbnail"
                  />
                  <div className="video-play-overlay">
                    <div className="video-play-button">
                      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                        <circle cx="24" cy="24" r="24" fill="rgba(255, 255, 255, 0.9)"/>
                        <path d="M20 16L32 24L20 32V16Z" fill="#0071EF"/>
                      </svg>
                    </div>
                  </div>
                  <div className="video-duration">{video.duration}</div>
                  <div className="video-category">{video.category}</div>
                </div>
                
                <div className="video-content">
                  <h3 className="video-title">{video.title}</h3>
                  <p className="video-description">
                    {video.shortDescription}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="video-modal-overlay" onClick={closeVideo}>
          <div className="video-modal" onClick={(e) => e.stopPropagation()}>
            <button 
              className="video-modal-close"
              onClick={closeVideo}
              aria-label="Close video"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            
            <div className="video-modal-content">
              <div className="video-embed-container">
                <iframe
                  src={selectedVideo.videoUrl}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              <div className="video-modal-info">
                <div className="video-modal-meta">
                  <span className="video-modal-category">{selectedVideo.category}</span>
                  <span className="video-modal-duration">{selectedVideo.duration}</span>
                </div>
                <h2 className="video-modal-title">{selectedVideo.title}</h2>
                <p className="video-modal-description">{selectedVideo.shortDescription}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Videos;