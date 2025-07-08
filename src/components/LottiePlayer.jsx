import React, { useEffect, useRef, useState } from 'react';
import lottie from 'lottie-web';

const LottiePlayer = ({ 
  src, 
  loop = false, 
  autoplay = true, 
  width = null, 
  height = null,
  className = '',
  fallbackImage = null,
  allowReplay = false // Add prop to allow replaying
}) => {
  console.log('🎬 LottiePlayer rendering with src:', src, 'loop:', loop, 'width:', width, 'allowReplay:', allowReplay);
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isInViewport, setIsInViewport] = useState(false);

  // Check if src is an iframe URL
  const isIframeUrl = typeof src === 'string' && 
    (src.includes('lottielab.com') || src.includes('iframe') || src.includes('.html'));

  // Intersection Observer to detect when component is in viewport
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        const inViewport = entry.isIntersecting;
        console.log('👁️ Lottie viewport status:', inViewport);
        setIsInViewport(inViewport);
      },
      {
        threshold: 0.1, // Trigger when 10% of the component is visible
        rootMargin: '50px' // Start detection a bit earlier
      }
    );

    observer.observe(containerRef.current);
    
    // Check initial visibility
    const rect = containerRef.current.getBoundingClientRect();
    const isInitiallyVisible = rect.top < window.innerHeight && rect.bottom > 0;
    if (isInitiallyVisible) {
      console.log('🎯 Component initially visible on mount');
      setIsInViewport(true);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Control animation playback based on viewport visibility and autoplay setting
  useEffect(() => {
    if (!animationRef.current || loading) return;

    if (autoplay && isInViewport) {
      console.log('▶️ Playing animation - autoplay enabled and in viewport');
      setTimeout(() => {
        if (animationRef.current) {
          animationRef.current.goToAndPlay(0, true);
        }
      }, 100);
    }
  }, [isInViewport, loading, autoplay]);

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
          autoplay: autoplay, // Use the autoplay prop directly
          animationData: animationData,
        });

        animationRef.current.addEventListener('DOMLoaded', () => {
          console.log('🎬 Animation DOM loaded and', autoplay ? 'autoplaying' : 'paused');
          setLoading(false);
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
  }, [src, loop, autoplay, isIframeUrl]); // Removed complex dependencies

  if (error) {
    return (
      <div 
        className={`lottie-error ${className}`}
        style={{ 
          ...(width && { width }),
          ...(height && { height }),
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center' 
        }}
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
        style={{ 
          ...(width && { width }),
          ...(height && { height }),
          position: 'relative' 
        }}
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
      style={{ 
        ...(width && { width }),
        ...(height && { height }),
        position: 'relative' 
      }}
    >
      {loading && (
        <div className="lottie-loading-spinner">
          <div className="lottie-spinner"></div>
        </div>
      )}
      <div 
        ref={containerRef} 
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default LottiePlayer;
