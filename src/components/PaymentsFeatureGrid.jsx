import React from "react";
import '../styles.css';

export default function PaymentsFeatureGrid() {
  return (
    <section className="payment-features-section">
      <div className="features-grid">
        {/* Card 1 */}
        <div className="feature-card">
          <h2>Accelerate your global strategy</h2>
          <p>Switch on new payment services in seconds, not months.</p>
          <div className="feature-icons-row">
            {/* Example: currency, flag, smiley icons */}
            <div className="icon-tile">$</div>
            <div className="icon-tile">£</div>
            <div className="icon-tile">€</div>
            <div className="icon-tile">Rp.</div>
            <div className="icon-tile">R$</div>
            <div className="icon-tile">Fr.</div>
            <div className="icon-tile"><span role="img" aria-label="flag">🇪🇸</span></div>
            <div className="icon-tile"><span role="img" aria-label="flag">🇬🇧</span></div>
            <div className="icon-tile"><span role="img" aria-label="smile">😊</span></div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="feature-card">
          <h2>Reduce payment fraud</h2>
          <p>Deploy fraud prevention tools across your end-to-end payment flows.</p>
          <div className="feature-shield">
            {/* SVG shield with layered background */}
            <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
              <g filter="url(#shadow)">
                <path d="M45 10 Q70 20 70 40 Q70 70 45 80 Q20 70 20 40 Q20 20 45 10 Z" fill="#fff" stroke="#eee" strokeWidth="2"/>
                <path d="M45 20 Q62 28 62 42 Q62 64 45 72 Q28 64 28 42 Q28 28 45 20 Z" fill="#f7f7f7"/>
              </g>
              <defs>
                <filter id="shadow" x="0" y="0" width="90" height="90" filterUnits="userSpaceOnUse">
                  <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#eee"/>
                </filter>
              </defs>
            </svg>
          </div>
        </div>
        {/* Card 3 */}
        <div className="feature-card feature-card-wide">
          <h2>Manage payments with precision</h2>
          <p>Crack open the black box and get unrivaled insights into your performance across all payment providers.</p>
          <div className="feature-table">
            <div className="table-row">
              <span className="status authorized">Authorized</span>
              <span>€ 244.22</span>
              <span>Worldpay</span>
              <span>Amex</span>
            </div>
            <div className="table-row">
              <span className="status authorized">Authorized</span>
              <span>$ 139.00</span>
              <span>Worldline</span>
              <span>Visa</span>
            </div>
            <div className="table-row">
              <span className="status fallback">Fallback</span>
              <span>€ 1100.00</span>
              <span>Cybersource</span>
              <span>Apple Pay</span>
            </div>
            <div className="table-row">
              <span className="status authorized">Authorized</span>
              <span>£ 139.00</span>
              <span>Stripe</span>
              <span>Mastercard</span>
            </div>
            <div className="table-row">
              <span className="status authorized">Authorized</span>
              <span>€ 619.00</span>
              <span>Worldpay</span>
              <span>Mastercard</span>
            </div>
          </div>
        </div>
        {/* Card 4 */}
        <div className="feature-card">
          <h2>Improve checkout conversion</h2>
          <p>Build brilliant payment experiences, tailored to your customers.</p>
          <div className="feature-bubbles">
            <div className="bubble">🔗</div>
            <div className="bubble">🍏</div>
            <div className="bubble">💳</div>
            <div className="bubble">K.</div>
          </div>
        </div>
        {/* Card 5 */}
        <div className="feature-card">
          <h2>Boost payment performance</h2>
          <p>Crush your KPIs with intelligent tools designed to maximize payment success.</p>
          <div className="feature-chart">
            <div className="chart-bar" style={{height: '60px'}}></div>
            <div className="chart-bar" style={{height: '40px'}}></div>
            <div className="chart-bar" style={{height: '70px'}}></div>
            <div className="chart-bar" style={{height: '50px'}}></div>
            <div className="stat-card">
              <div className="stat-label">Total recovered payment value</div>
              <div className="stat-value">$24.6M</div>
              <div className="stat-trend up">↑ 4.5%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
);
}
