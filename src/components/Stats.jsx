import React, { useState, useEffect } from 'react';

const Stats = () => {
  const [counts, setCounts] = useState({
    customers: 0,
    devices: 0,
    payments: 0
  });

  const targetValues = {
    customers: 6832,
    devices: 43.2,
    payments: 189.8
  };

  const animateNumber = (start, end, duration, callback) => {
    let startTimestamp = null;
    
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Use easing function for smooth animation
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = start + (end - start) * easedProgress;
      
      callback(currentValue);
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate customers count
            animateNumber(0, targetValues.customers, 2000, (value) => {
              setCounts(prev => ({ ...prev, customers: Math.floor(value) }));
            });

            // Animate devices count (with decimal)
            animateNumber(0, targetValues.devices, 2500, (value) => {
              setCounts(prev => ({ ...prev, devices: parseFloat(value.toFixed(2)) }));
            });

            // Animate payments count
            animateNumber(0, targetValues.payments, 3000, (value) => {
              setCounts(prev => ({ ...prev, payments: Math.floor(value) }));
            });

            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    const element = document.querySelector('.stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-section">
      <div className="stats-container">
        <div className="stats-grid">
          <div className="stat-item">
            <h3 className="stat-title">Users</h3>
            <div className="stat-number">
              {counts.customers.toLocaleString()}
            </div>
          </div>
          
          <div className="stat-item">
            <h3 className="stat-title">Mortgage value processed</h3>
            <div className="stat-number">
              £{counts.devices}B+
            </div>
          </div>
          
          <div className="stat-item">
            <h3 className="stat-title">Hours saved</h3>
            <div className="stat-number">
              {counts.payments}M+
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
