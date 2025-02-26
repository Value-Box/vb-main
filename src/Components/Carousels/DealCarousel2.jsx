import React, { useState, useRef, useEffect } from "react";

function DealCarousel2({ products }) {
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true); // Auto slide feature
  const [showBtn,setShowbtn]=useState(false)

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
    <div className="relative w-full mx-auto mt-5 group"
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
          <div key={index} className="bg-white p-2 w-fit rounded-xl flex flex-col h-[280px] 2xl:h-[350px] shadow-md">
            <img src={product.img} alt="" className="min-w-[200px] sm:min-w-[180px] h-[190px] 2xl:h-[250px] rounded-lg object-cover user-select-none" />
            <p className="w-full whitespace-normal break-words mt-2 text-sm user-select-none">{product.name}</p>
            <p className="inline-flex items-center rounded-md  mt-1 ml-2">
              <span className="flex items-baseline font-semibold">
                <span className="text-xs user-select-none">PKR</span>
                <span className="text-lg ml-[2px] user-select-none">{product.price}</span>
              </span>
            </p>
          </div>
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
