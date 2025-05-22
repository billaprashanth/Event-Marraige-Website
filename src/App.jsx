import React from 'react';
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom";
import Birthday from '../src/components/Gallery-component/Birthday';
import Gates from '../src/components/Gallery-component/Gates';
import Haldi from '../src/components/Gallery-component/Haldi';
import Mandapam from '../src/components/Gallery-component/Mandapam';
import Reception from '../src/components/Gallery-component/Reception';
import SmallKids from '../src/components/Gallery-component/SmallKids';
import { FaWhatsapp } from 'react-icons/fa';

function App() { 
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/birthday" element={<Birthday />} />
        <Route path="/gates" element={<Gates />} />
        <Route path="/mangalashnanam" element={<Haldi />} />
        <Route path="/mandapam" element={<Mandapam />} />
        <Route path="/reception" element={<Reception />} />
        <Route path="/smallkids" element={<SmallKids />} />
      </Routes>
      {/* Floating WhatsApp Icon */}
      <a
        href="https://wa.me/919441701754"
        target="_blank"
        rel="noopener noreferrer" 
        className="fixed bottom-4 right-8  bg-green-500 text-white p-3 rounded-full shadow-lg z-50 hover:bg-green-600 hover:animate-pulse transition duration-300"
      >
        <FaWhatsapp size={40} />
      </a>
      </>
  );
}

export default App;

