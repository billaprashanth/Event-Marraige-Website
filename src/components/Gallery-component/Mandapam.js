import React, { useRef, useEffect } from "react";
import '../../css/gallery.css';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const importAll = (requireContext) => requireContext.keys().map(requireContext);
const images = importAll(
  require.context("../../../src/assets/Mandapam", false, /\.(png|jpe?g|svg)$/)
);

function Mandapam() {
  const galleryRef = useRef(null);

  useEffect(() => {
    const imgElements = galleryRef.current.querySelectorAll("img");

    gsap.fromTo(
      imgElements,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: galleryRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <div className="image-gallery" ref={galleryRef}>
      {images.map((image, index) => (
        <img key={index} src={image} alt="Not Found" />
      ))}
    </div>
  );
}

export default Mandapam;
