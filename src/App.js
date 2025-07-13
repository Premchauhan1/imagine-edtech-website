import React, { useState, useEffect, Suspense, lazy } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';

// Lazy load components that are not immediately visible
const Services = lazy(() => import('./components/Services'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Preload critical resources
    const preloadResources = async () => {
      // Add any critical resources you want to preload
      const promises = [];
      
      // Simulate resource loading (you can replace with actual resource loading)
      promises.push(new Promise(resolve => setTimeout(resolve, 800)));
      
      await Promise.all(promises);
      
      // Start fade out animation
      setFadeOut(true);
      
      // Remove loading screen after animation
      setTimeout(() => {
        setIsLoading(false);
      }, 600);
    };

    preloadResources();
  }, []);

  if (isLoading) {
    return (
      <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
        <div className="loading-spinner">
          <div className="spinner"></div>
          <h2>Imagine EdTech</h2>
          <p>Preparing Amazing Experience...</p>
          <div className="loading-dots">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="App fade-in-progressive loaded">
      <Header />
      <main className="stagger-children">
        <Hero />
        <Suspense fallback={
          <div className="skeleton-card">
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-text"></div>
          </div>
        }>
          <Services />
        </Suspense>
        <Suspense fallback={
          <div className="skeleton-card">
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-text"></div>
          </div>
        }>
          <About />
        </Suspense>
        <Suspense fallback={
          <div className="skeleton-card">
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-text"></div>
          </div>
        }>
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={
        <div className="skeleton skeleton-text"></div>
      }>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;