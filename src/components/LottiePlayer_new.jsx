import React, { useEffect, useRef, useState } from 'react';
import lottie from 'lottie-web';

const LottiePlayer = ({ 
  src, 
  loop = false, 
  autoplay = true, 
  width = '100%', 
  height = '100%',
  className = '',
  fallbackImage = null 
}) => {
  console.log('🎬 LottiePlayer rendering with src:', src, 'at', new Date().toLocaleTimeString());
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Check if src is an iframe URL
  const isIframeUrl = typeof src === 'string' && 
    (src.includes('lottielab.com') || src.includes('iframe') || src.includes('.html'));

  useEffect(() => {
    if (!containerRef.current || !src) return;

    // If it's an iframe URL, don't load with lottie-web
    if (isIframeUrl) {
      setLoading(false);
      return;
    }

    const loadAnimation = async () => {
      try {
        setLoading(true);
        setError(null);

        // Clear any existing animation
        if (animationRef.current) {
          animationRef.current.destroy();
          animationRef.current = null;
        }

        let animationData;

        if (typeof src === 'string') {
          // If src is a URL or path
          if (src.startsWith('http') || src.startsWith('/')) {
            const response = await fetch(src);
            if (!response.ok) {
              throw new Error(`Failed to load animation: ${response.statusText}`);
            }
            animationData = await response.json();
          } else {
            throw new Error('Invalid src format');
          }
        } else {
          // If src is already an object
          animationData = src;
        }

        console.log('🎨 Loading animation with data:', animationData);

        // Load the animation
        animationRef.current = lottie.loadAnimation({
          container: containerRef.current,
          renderer: 'svg',
          loop: loop,
          autoplay: autoplay,
          animationData: animationData,
        });

        console.log('✅ Animation loaded successfully');
        setLoading(false);

      } catch (err) {
        console.error('❌ Error loading animation:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    loadAnimation();

    return () => {
      if (animationRef.current) {
        animationRef.current.destroy();
        animationRef.current = null;
      }
    };
  }, [src, loop, autoplay, isIframeUrl]);

  if (error) {
    return (
      <div 
        className={`lottie-error ${className}`}
        style={{ width, height, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        {fallbackImage ? (
          <img src={fallbackImage} alt="Fallback" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        ) : (
          <div style={{ textAlign: 'center', color: '#666' }}>
            <p>Animation failed to load</p>
            <p style={{ fontSize: '14px', marginTop: '8px' }}>{error}</p>
          </div>
        )}
      </div>
    );
  }

  // Render iframe for external animations
  if (isIframeUrl) {
    // Add loop=false parameter to iframe URL if loop is disabled
    let iframeSrc = src;
    if (!loop && !src.includes('loop=')) {
      const separator = src.includes('?') ? '&' : '?';
      iframeSrc = `${src}${separator}loop=false&autoplay=true`;
    }

    return (
      <div 
        className={`lottie-container lottie-iframe-container ${className}`}
        style={{ width, height, position: 'relative' }}
      >
        <iframe 
          src={iframeSrc}
          className="lottie-iframe"
          style={{ width: '100%', height: '100%', border: 'none' }}
          frameBorder="0"
          allowFullScreen
          title="Lottie Animation"
        />
      </div>
    );
  }

  return (
    <div 
      className={`lottie-container ${className}`}
      style={{ width, height, position: 'relative' }}
    >
      {loading && (
        <div 
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 10
          }}
        >
          <div style={{ 
            width: '40px', 
            height: '40px', 
            border: '3px solid #f3f3f3',
            borderTop: '3px solid #3498db',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
          }}></div>
        </div>
      )}
      <div 
        ref={containerRef} 
        style={{ width: '100%', height: '100%' }}
      />
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default LottiePlayer;
