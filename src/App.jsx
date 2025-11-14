import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import AboutSection from './components/AboutSection/AboutSection';
import WorkSection from './components/WorkSection/WorkSection';
import ContactSection from './components/ContactSection/ContactSection'; 

function App() {
  return (
    <div className="app-container">
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <WorkSection /> 
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
