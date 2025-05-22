import React from "react";
import MandapamImg from "../assets/Mandapam/0.jpg";   // IMG-20210318-WA0021.jpg
import BirthdayImg from "../assets/BALOON DECORATION/5.jpg";
import HaldiImg from "../assets/Haldi/0.jpg";
import ReceptionImg from "../assets/Reception/IMG_20180412_070333.jpg";
import KidsImg from "../assets/SmallKids/IMG-20221222-WA0026.jpg";
import GateImgs from "../assets/ENTRY/FB_IMG_1542036778652.jpg";

function Gallery() {
  const galleryItems = [
    {
      title: "Wedding Ceremony",
      description:
        "Elegant mandapam adorned with flowers, golden drapes, and lights creating a stunning atmosphere.",
      image: MandapamImg,
      link: "/mandapam",
    },
    {
      title: "Birthday Parties",
      description:
        "Colorful balloons, twinkling lights, and floral arrangements create a magical birthday vibe with full of Happiness.",
      image: BirthdayImg,
      link: "/birthday",
    },
    {
      title: "Haldi",
      description:
        "Marigold garlands, colorful drapes, brass pots, and traditional accents for a vibrant and joyous Haldi ceremony.",
      image: HaldiImg,
      link: "/mangalashnanam",
    },
    {
      title: "Reception",
      description:
        "Drapes, chandeliers, and stage lights to create an elegant reception experience.",
      image: ReceptionImg,
      link: "/reception",
    },
    {
      title: "Naming Ceremony",
      description:
        "Pastel drapes, delicate flowers, and a soft setup for baby’s 21st day celebration.",
      image: KidsImg,
      link: "/smallkids",
    },
    {
      title: "Welcome Arch",
      description:
        "Floral arches, fairy lights, and lush greenery for a grand welcome at the entrance.",
      image: GateImgs,
      link: "/gates",
    },
  ];
// bg-gray-100
  return (
    <div id="gallery" className="w-full min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 py-12 px-4">
      <h2 className="text-3xl font-bold text-center text-primary mb-10">
        Gallery Categories
      </h2>
      <div className="max-w-7xl  mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  ">
        {galleryItems.map((item, index) => (
          <div 
            key={index}
            className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col transition duration-500 hover:scale-105 hover:cursor-pointer hover:animate-shake"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-4 flex-1">
              <h4 className="text-xl font-semibold text-blue-600 mb-2">
                {item.title}
              </h4>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <a href={item.link}>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                  View {item.title} Images 
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
