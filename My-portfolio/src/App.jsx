import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router";
import { AnimatePresence } from 'framer-motion';
import './App.css';
import { Navbar } from './Components/Navbar';
import { PageLoader } from './Components/PageLoader/PageLoader';
import { Hero } from './Components/Hero';
import { ContactSection } from './Components/Contact Us/Contact';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (e.g., 1.5 seconds) or wait for assets to load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* AnimatePresence handles the exit animation when isLoading becomes false */}
      <AnimatePresence mode="wait">
        {isLoading && <PageLoader key="page-loader" />}
      </AnimatePresence>

      {/* Main Portfolio Content */}
      <div className="min-h-screen bg-[#0b1120] text-white">
        <Navbar />
        {/* Your other sections (Hero, About, Projects, Contact, etc.) go here */}
        
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/contact' element={<ContactSection />} />
        </Routes>
      </div>
    </>
  );
}

export default App;