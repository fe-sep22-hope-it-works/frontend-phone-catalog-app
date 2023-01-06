import React from 'react';
import './App.scss';
// import { Card } from './components/Card';
import { Footer } from './components/Footer';
import { RoutesList } from './components/RoutesList';

export function App() {
  return (
    <div className="app">
      <RoutesList />
      {/* <Card /> */}
      <Footer />
    </div>
  );
}

export default App;
