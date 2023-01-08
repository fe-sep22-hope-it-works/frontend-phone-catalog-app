import React from 'react';
import './App.scss';
// import { Card } from './components/Card';
import { Footer } from './components/Footer';
import { Header } from './components/Header/Header';
import { RoutesList } from './components/RoutesList';

export function App() {
  return (
    <div className="app">
      <Header />
      <RoutesList />
      <Footer />
    </div>
  );
}

export default App;
