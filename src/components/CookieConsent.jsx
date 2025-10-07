import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const STORAGE_KEY = 'cookie-consent-accepted-v1';

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const accepted = localStorage.getItem(STORAGE_KEY);
      if (!accepted) setVisible(true);
    } catch (e) {
      // If localStorage is blocked, still show banner
      setVisible(true);
    }
  }, []);

  const acceptAll = () => {
    try {
      localStorage.setItem(STORAGE_KEY, 'true');
    } catch (e) {
      // ignore write errors
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-consent" role="dialog" aria-live="polite" aria-label="Cookie consent">
      <div className="cookie-consent__container">
        <p className="cookie-consent__text">
          By clicking “Accept All Cookies”, you agree to the storing of cookies on your device to enhance site navigation, analyze site usage and assist in our marketing efforts.
        </p>
        <div className="cookie-consent__actions">
          <Link to="/cookies" className="cookie-consent__learn">
            Learn more <span aria-hidden>→</span>
          </Link>
          <button type="button" className="btn btn-primary" onClick={acceptAll} aria-label="Accept all cookies">
            Accept All Cookies
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
