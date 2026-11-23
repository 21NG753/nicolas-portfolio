import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles.css';

const motionPreference = window.matchMedia('(prefers-reduced-motion: no-preference)');
const syncMotionClass = () => {
  document.documentElement.classList.toggle('motion-ready', motionPreference.matches && 'IntersectionObserver' in window);
};
syncMotionClass();
motionPreference.addEventListener('change', syncMotionClass);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
