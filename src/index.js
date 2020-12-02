import React from 'react';
import ReactDOM from 'react-dom';
import './App';
import './styles/main.scss';

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
}

(async () => {
  if (process.env.NODE_ENV !== 'production') {
    const axe = await import('react-axe');
    axe(React, ReactDOM, 1000);
  }
})();
