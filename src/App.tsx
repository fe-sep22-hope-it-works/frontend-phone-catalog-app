import React from 'react';
import './App.scss';
import { RoutesList } from './components/RoutesList';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="app">
      <RoutesList />

      <Footer />
    </div>
  );
}
