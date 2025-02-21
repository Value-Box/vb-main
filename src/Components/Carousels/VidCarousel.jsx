import React, { useState } from 'react'

function VidCarousel({ videos  }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
    };
  return (
    <div className="w-full max-w-6xl mx-auto p-4">
    <h2 className="text-lg font-semibold mb-2">📌 Featured in Videos</h2>
    <p className="text-gray-500 mb-4">See what creators are sharing</p>
    <div className="relative flex items-center ">
      <button onClick={prevSlide} className="absolute left-0 p-2 bg-white shadow rounded-full z-10">⬅</button>
      <div className="flex gap-4 overflow-x-auto no-scrollbar">
        {videos.map((video, index) => (
          <div
            key={video.id}
            className={`w-1/4 max-w-[250px] p-2 rounded-lg shadow-lg transition-opacity duration-500`}
          >
           <div className="w-full h-[150px] rounded-lg overflow-hidden">
  {video.vidUrl}
</div>

            <p className="text-sm text-gray-700 mt-2">@{video.username}</p>
            <div className="bg-gray-100 p-2 rounded mt-2">
              <p className="text-gray-900 font-bold">Rs. {video.price}</p>
              <p className="text-xs text-gray-600">{video.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={nextSlide} className="absolute right-0 p-2 bg-white shadow rounded-full z-10">➡</button>
    </div>
  </div>
  )
}

export default VidCarousel