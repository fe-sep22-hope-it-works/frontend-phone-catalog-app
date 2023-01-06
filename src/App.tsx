import React from 'react';
import './App.scss';
import { Card } from './components/Card';
import { Footer } from './components/Footer';
import { ProductsList } from './components/ProductsList';
import { RoutesList } from './components/RoutesList';

export function App() {
  return (
    <div className="app">
      <RoutesList />
      <Card />
      
      <ProductsList />

      <Footer />
    </div>
  );
}

export default App;
