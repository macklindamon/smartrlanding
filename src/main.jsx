import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Parallax scroll handler
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  document.querySelectorAll('.parallax-bg').forEach(el => {
    el.style.transform = `translateY(${scrollY * 0.2}px)`;
  });
  document.querySelectorAll('.parallax-img').forEach(el => {
    el.style.transform = `translateY(${scrollY * 0.4}px)`;
  });
  document.querySelectorAll('.parallax-card').forEach(el => {
    el.style.transform = `translateY(${scrollY * 0.1}px)`;
  });
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
