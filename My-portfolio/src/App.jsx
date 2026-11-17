import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router";
import { AnimatePresence } from 'framer-motion';
import './App.css';
import { PageLoader } from './Components/PageLoader/PageLoader';
import { Hero } from './Components/Hero';
import { Layout } from './Components/Layout/Layout';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* 1. PageLoader stays outside Routes so it covers the whole screen on initial load */}
      <AnimatePresence mode="wait">
        {isLoading && <PageLoader key="page-loader" />}
      </AnimatePresence>

      {/* 2. Layout wraps your routes and automatically provides Navbar + Footer */}
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Hero />} />
          {/* Future routes go here */}
        </Route>
      </Routes>
    </>
  );
}

export default App;