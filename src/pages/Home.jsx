// src/pages/Home.jsx
import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Video from '../components/Video';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const sections = containerRef.current.querySelectorAll('.section');

    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // Type 2: Page Load Animation for Hero
    gsap.from('.hero-title', {
      opacity: 0,
      y: -50,
      duration: 1,
      delay: 0.5,
      ease: 'power2.out',
    });

    // Type 3: Parallax Effect on Gallery
    gsap.to('.parallax-gallery', {
      yPercent: -20,
      scrollTrigger: {
        trigger: '.parallax-gallery',
        start: 'top bottom',
        scrub: true,
      },
    });

  }, []);

  return (
    <div ref={containerRef}>
      <div><Navbar /></div>
      <div className="section"><Hero /></div>
      <div className='section'><Video /></div>
      <div className="section"><Gallery /></div>
      <div className="section"><About /></div>
      <div className="section"><Contact /></div>
      <div ><Footer /></div>
    </div>
  );
};

export default Home;
