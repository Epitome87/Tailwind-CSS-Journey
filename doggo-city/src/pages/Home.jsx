import React from 'react';
import Header from '../features/header/Header';
import Hero from '../features/header/Hero';
import Features from '../features/header/Features';
import Footer from '../features/header/Footer';

function Home() {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <Features />
      <Footer />
    </React.Fragment>
  );
}

export default Home;
