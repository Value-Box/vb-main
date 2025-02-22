import React, { useState,useRef, useEffect} from 'react'

function VidCarousel() {
    const items = [
        "https://www.youtube.com/embed/6hksegA_x94?si=RLKTxfLQzye8PWap",
        "https://www.youtube.com/embed/6hksegA_x94?si=RLKTxfLQzye8PWap",
        "https://www.youtube.com/embed/6hksegA_x94?si=RLKTxfLQzye8PWap",
        "https://www.youtube.com/embed/6hksegA_x94?si=RLKTxfLQzye8PWap",
        "https://www.youtube.com/embed/6hksegA_x94?si=RLKTxfLQzye8PWap",
        "https://www.youtube.com/embed/6hksegA_x94?si=RLKTxfLQzye8PWap"
    ];

    const [visibleItems, setVisibleItems] = useState(3);
    const [autoScroll, setAutoScroll] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(1);
    const [mutedVideos, setMutedVideos] = useState(items.map(() => true));
    const containerRef = useRef(null);

    useEffect(() => {
        if (!autoScroll) return;
        const interval = setInterval(() => {
          nextSlide();
        }, 3000);
        return () => clearInterval(interval);
      }, [autoScroll]);
    
      const updateIndex = () => {
        if (containerRef.current) {
          const index =
            Math.round(containerRef.current.scrollLeft / (containerRef.current.offsetWidth / visibleItems)) + 1;
          setCurrentIndex(Math.min(index, items.length));
        }
      };

    const nextSlide = () => {
        if (containerRef.current) {
            containerRef.current.scrollLeft += containerRef.current.offsetWidth / visibleItems;
            updateIndex();
        }
    };

    const prevSlide = () => {
        if (containerRef.current) {
            containerRef.current.scrollLeft -= containerRef.current.offsetWidth / visibleItems;
            updateIndex();
        }
    };

    // Mute/Unmute Function
  const toggleMute = (index) => {
    setMutedVideos((prevMuted) =>
      prevMuted.map((muted, i) => (i === index ? !muted : true)) // Sirf aik video ka sound on hoga
    );
  };

  return (
    <>
    <div className="relative w-full mx-auto overflow-hidden px-5">
                <div
                    ref={containerRef}
                    className="flex gap-7 overflow-x-auto scroll-smooth snap-x snap-mandatory w-full"
                    style={{ scrollBehavior: "smooth" }}
                    onScroll={updateIndex}
                >
                    {items.map((item, index) => (
                        // <img
                        //     key={index}
                        //     src={item}
                        //     className="snap-start object-cover transition-all duration-300 ease-in-out"
                        //     style={{ width: `calc(100% / ${visibleItems})` }}
                        // />
                        <div key={index} className="relative rounded-b-lg">
              <iframe
                src={`${item}${mutedVideos[index] ? "&mute=1" : "&mute=0"}`}
                className="h-[350px] w-[250px] rounded-t-lg"
                allow="autoplay"
              ></iframe>

              {/* Mute/Unmute Button */}
              <button
                onClick={() => toggleMute(index)}
                className="absolute bottom-4 right-4 bg-black bg-opacity-50 p-2 rounded-full"
              >
                {mutedVideos[index] ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M16.5 12L22 16V8L16.5 12ZM14 3V21L8.5 15H3V9H8.5L14 3Z"></path>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M14 21V3L8.5 9H3V15H8.5L14 21ZM18 12L22 16V8L18 12Z"></path>
                  </svg>
                )}
              </button>
            </div>
                    ))}
                </div>
                <div className="text-center flex items-center gap-5 mt-2 text-lg font-semibold bg-[rgba(224, 224, 224, 0.50)] rounded-full ">
                    <span>{currentIndex}/{items.length}</span>
                    <div className="flex justify-center space-x-2 ">
                    {items.map((_, index) => (
                        <span key={index} className="w-4 h-1 bg-gray-400 rounded-md"></span>
                    ))}
                </div>
                <div className="flex justify-center space-x-4 ">
                    <button onClick={prevSlide} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
  <path d="M33.75 18C33.75 21.115 32.8263 24.1601 31.0956 26.7502C29.365 29.3403 26.9052 31.359 24.0273 32.5511C21.1493 33.7431 17.9825 34.055 14.9273 33.4473C11.8721 32.8396 9.06575 31.3396 6.86307 29.1369C4.66039 26.9342 3.16035 24.1278 2.55263 21.0726C1.94492 18.0174 2.25682 14.8506 3.4489 11.9727C4.64098 9.09475 6.65969 6.63494 9.24977 4.90431C11.8398 3.17368 14.8849 2.24995 18 2.24995C22.1772 2.24995 26.1832 3.90932 29.1369 6.86302C32.0906 9.81672 33.75 13.8228 33.75 18ZM27 16.875H13.3313L19.6088 10.5671L18 8.99995L9 18L18 27L19.6088 25.3946L13.3313 19.125H27V16.875Z" fill="url(#paint0_linear_5948_146659)"/>
  <defs>
    <linearGradient id="paint0_linear_5948_146659" x1="33.75" y1="18" x2="2.24999" y2="18" gradientUnits="userSpaceOnUse">
      <stop stopColor="#0032A3"/>
      <stop offset="0.25" stopColor="#1A51CB"/>
      <stop offset="0.5" stopColor="#3B66C8"/>
      <stop offset="0.75" stopColor="#1A51CB"/>
      <stop offset="1" stopColor="#0032A3"/>
    </linearGradient>
  </defs>
</svg>
                    </button>
                    <button onClick={nextSlide} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
  <path d="M2.25 18C2.25 21.115 3.17372 24.1601 4.90435 26.7502C6.63499 29.3403 9.0948 31.359 11.9727 32.5511C14.8507 33.7431 18.0175 34.055 21.0727 33.4473C24.1279 32.8396 26.9343 31.3396 29.1369 29.1369C31.3396 26.9342 32.8397 24.1278 33.4474 21.0726C34.0551 18.0174 33.7432 14.8506 32.5511 11.9727C31.359 9.09475 29.3403 6.63494 26.7502 4.90431C24.1602 3.17368 21.1151 2.24995 18 2.24995C13.8228 2.24995 9.81677 3.90932 6.86307 6.86302C3.90937 9.81672 2.25 13.8228 2.25 18ZM9 16.875H22.6687L16.3912 10.5671L18 8.99995L27 18L18 27L16.3912 25.3946L22.6687 19.125H9V16.875Z" fill="url(#paint0_linear_5948_146662)"/>
  <defs>
    <linearGradient id="paint0_linear_5948_146662" x1="2.25" y1="18" x2="33.75" y2="18" gradientUnits="userSpaceOnUse">
      <stop stopColor="#0032A3"/>
      <stop offset="0.25" stopColor="#1A51CB"/>
      <stop offset="0.5" stopColor="#3B66C8"/>
      <stop offset="0.75" stopColor="#1A51CB"/>
      <stop offset="1" stopColor="#0032A3"/>
    </linearGradient>
  </defs>
</svg>
                    </button>
                </div>
                </div>
                
                
            </div>
</>
  )
}

export default VidCarousel