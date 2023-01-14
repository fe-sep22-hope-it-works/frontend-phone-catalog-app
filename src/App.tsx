import React from 'react';
import './App.scss';
import { Footer } from './components/Footer';
import { Header } from './components/Header/Header';
import { RoutesList } from './components/RoutesList';

export function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <div className="main__container">
          <RoutesList />
        </div>
      </main>
      <Footer />
    </div>
  );
}
