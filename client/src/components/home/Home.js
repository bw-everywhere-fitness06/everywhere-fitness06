import React from 'react';
// import '../../App.css';
import Cards from './Cards';
import HeroSection from './HeroSection';
import Footer from './Footer';
import Contact from './Contact';
// import Team from './Team'

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      {/* <Team /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
