import React, { useState, useRef, useEffect } from "react";

function DealCarousel2({ products }) {
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true); // Auto slide feature
  const [showBtn,setShowbtn]=useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);
      
        useEffect(() => {
          const handleResize = () => setIsMobile(window.innerWidth <= 640);
          window.addEventListener('resize', handleResize);
          return () => window.removeEventListener('resize', handleResize);
        }, []);

//   useEffect(() => {
//     if (autoSlide) {
//       const interval = setInterval(() => {
//         scroll("right");
//       }, 3000); // Auto-slide every 3 seconds
//       return () => clearInterval(interval);
//     }
//   }, [autoSlide]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
    setAutoSlide(false); // Stop auto-slide when user interacts
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => {
    setIsDragging(false);
    setAutoSlide(true); // Resume auto-slide
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 250; // Smooth scroll amount
      carouselRef.current.scrollTo({
        left: carouselRef.current.scrollLeft + (direction === "left" ? -scrollAmount : scrollAmount),
        behavior: "smooth",
      });

      // Looping Effect: Jump to first item when reaching the end
      setTimeout(() => {
        if (direction === "right" && carouselRef.current.scrollLeft + carouselRef.current.clientWidth >= carouselRef.current.scrollWidth) {
          carouselRef.current.scrollTo({ left: 0, behavior: "instant" });
        }
        if (direction === "left" && carouselRef.current.scrollLeft <= 0) {
          carouselRef.current.scrollTo({ left: carouselRef.current.scrollWidth, behavior: "instant" });
        }
      }, 500); // Delay to ensure smooth transition
    }
  };

  return (
    <div className="relative w-full mt-2 md:mt-5"
     onMouseEnter={()=>setShowbtn(true)} onMouseLeave={()=>setShowbtn(false)}>
      {/* Left Button */}
      <button
        onClick={() => scroll("left")}
        className={`${showBtn?'opacity-100':'opacity-0'} absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700`}
      >
        ◀
      </button>

      {/* Carousel */}
      <div
        ref={carouselRef}
        className="flex gap-3 overflow-x-scroll scrollbar-hide cursor-grab active:cursor-grabbing scroll-smooth"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {products.map((product, index) => (
            !isMobile?(<div key={index} className="bg-white p-2 w-fit rounded-xl flex flex-col h-[280px] 2xl:h-[350px] shadow-md">
                <img src={product.img} alt="" className="min-w-[200px] sm:min-w-[180px] h-[190px] 2xl:h-[250px] rounded-lg object-cover user-select-none" />
                <p className="w-full whitespace-normal break-words mt-2 text-sm user-select-none">{product.name}</p>
                <p className="inline-flex items-center rounded-md  mt-1 ml-2">
                  <span className="flex items-baseline font-semibold">
                    <span className="text-xs user-select-none">PKR</span>
                    <span className="text-lg ml-[2px] user-select-none">{product.price}</span>
                  </span>
                </p>
              </div>):(
                <div key={index} className="w-fit flex flex-col ">
                <img src={product.img} alt="" className="min-w-[150px] h-[100px]  rounded-lg object-cover user-select-none" />                
                  <span className="flex items-baseline font-semibold text-[#F04438]">
                    <span className="text-xs user-select-none">PKR</span>
                    <span className="text-lg ml-[2px] user-select-none">{product.price}</span>
                  </span>
                <div className="flex text-xs sm:text-sm gap-1">
                <span>110k+ Orders</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
  <g clip-path="url(#clip0_6652_97019)">
    <path d="M6.82551 2.29244C6.89429 2.17441 6.99281 2.07648 7.11125 2.00842C7.22969 1.94036 7.36391 1.90454 7.50051 1.90454C7.63711 1.90454 7.77133 1.94036 7.88977 2.00842C8.00821 2.07648 8.10673 2.17441 8.17551 2.29244L9.92238 5.29119L13.3149 6.02619C13.4483 6.05519 13.5718 6.11866 13.6731 6.21027C13.7744 6.30189 13.8499 6.41844 13.892 6.54833C13.9342 6.67821 13.9416 6.81688 13.9135 6.95051C13.8854 7.08414 13.8227 7.20807 13.7318 7.30994L11.4193 9.89806L11.7693 13.3512C11.7831 13.4872 11.761 13.6244 11.7052 13.7491C11.6493 13.8739 11.5618 13.9818 11.4512 14.0622C11.3406 14.1425 11.2109 14.1924 11.075 14.2069C10.9391 14.2215 10.8018 14.2001 10.6768 14.1449L7.50051 12.7449L4.32426 14.1449C4.19921 14.2001 4.06188 14.2215 3.92598 14.2069C3.79008 14.1924 3.66037 14.1425 3.5498 14.0622C3.43923 13.9818 3.35167 13.8739 3.29587 13.7491C3.24006 13.6244 3.21795 13.4872 3.23176 13.3512L3.58176 9.89806L1.26926 7.31056C1.17815 7.2087 1.11536 7.08473 1.08714 6.95101C1.05893 6.8173 1.06628 6.67852 1.10847 6.54853C1.15066 6.41855 1.22621 6.30191 1.32758 6.21025C1.42894 6.11859 1.55257 6.05512 1.68613 6.02619L5.07863 5.29119L6.82551 2.29244Z" fill="#EEA500"/>
  </g>
  <defs>
    <clipPath id="clip0_6652_97019">
      <rect width="15" height="15" fill="white" transform="translate(0 0.5)"/>
    </clipPath>
  </defs>
</svg>
<span>4.9</span>
                </div>
              </div>
              )
          
        ))}
      </div>

      {/* Right Button */}
      <button
        onClick={() => scroll("right")}
        className={`${showBtn?'opacity-100':'opacity-0'} absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700`}
      >
        ▶
      </button>
    </div>
  );
}

export default DealCarousel2;
