import React from 'react';
import video from "../assets/VID-20250530-WA0002.mp4";

function Video() {
  return (
    <div className="px-4 py-8">
      <h2 className="text-3xl font-bold text-black text-center mb-6">Glimpse of the Grand Event</h2>
      <div className="w-full max-w-5xl mx-auto aspect-video">
        <video
          src={video}
          controls
          loop
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}

export default Video;
