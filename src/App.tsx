import React from 'react';
import './App.scss';
import { Footer } from './components/Footer';
import { RoutesList } from './components/RoutesList';

export function App() {
  return (
    <div className="app">
      <RoutesList />

      <Footer />
    </div>
  );
}

export default App;
