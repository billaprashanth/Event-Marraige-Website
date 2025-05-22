import React from 'react';
import '../css/styles.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { TypeAnimation } from 'react-type-animation';


import Image1 from '../assets/Mandapam/001.jpg';
import Image2 from '../assets/Mandapam/2.jpg';  
import Image3 from '../assets/Mandapam/000000001.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen text-white Images">
      {/* Carousel Background */} 
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={1900}
        transitionTime={1000}
        swipeable
        emulateTouch
        className="absolute inset-0 z-0"
      >
        <div>
          <img src={Image3} alt="Event 1" className="h-screen object-cover w-full" />
        </div>
        <div>
          <img src={Image2} alt="Event 2" className="h-screen object-cover w-full" />
        </div>
        <div>
          <img src={Image1} alt="Event 3" className="h-screen object-cover w-full" />
        </div>
      </Carousel>

      {/* Overlay Text */}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center z-10">
        <div className="text-center px-4">
          <TypeAnimation
            sequence={[
              'WELCOME   TO   SRR   EVENTS', 1000,
              'MAKING   YOUR   CELEBRATIONS', 1000,
              'MEMORABLE', 1000,
            ]}
            speed={200}
            repeat={Infinity}
            className="text-4xl md:text-5xl font-bold mb-4"
          />
          <p className="text-xl md:text-2xl mt-2 animate-pulse">Making your celebrations memorable</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;