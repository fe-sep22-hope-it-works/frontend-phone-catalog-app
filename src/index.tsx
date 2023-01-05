import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { HashRouter as Router } from 'react-router-dom';
import { App } from './App';

// eslint-disable-next-line max-len
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement);

root.render(
  <Router>
    <App />
  </Router>,
);
