import { Route, Routes } from 'react-router-dom';
import './App.css';
import React, { useState } from 'react';

import Artwork from './pages/Artwork/Artwork';
import MainHeader from './components/MainHeader';
import Home from './pages/Home/Home';
import About from './pages/About/About'
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

function App() {

  const location = useLocation();
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={'home'}>
        <motion.div initial={{y: -100}} animate={{ y: 0 }} transition={{duration: 1}}>
            <MainHeader/>
        </motion.div>
      <main>
        <AnimatePresence exitBeforeEnter onExitComplete={() => setShowModal(false)}>
          <Routes path = "/" location={location} key={location.key}>
            <Route path='' element={<Home />} />
            <Route path='artwork' element={<Artwork />} />
            <Route path='about' element={<About />} />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component
// our-domain.com/product-detail/a-book
