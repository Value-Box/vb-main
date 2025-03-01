import React, { useState, useRef, useEffect } from 'react';

import BundleDealCard from '../Cards/BundleDealCard';
import DetailProductCard from '../Cards/DetailProductCard';

const CardComponents={
    DetailProductCard:DetailProductCard,
    BundleDealCard:BundleDealCard,
}

export default function ProductsCarousel({products,CardType}) {
    const CardComponent=CardComponents[CardType] || DetailProductCard
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true); // Auto slide feature

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
    <div className="relative w-full"
     >
      {/* Left Button */}
      <button
        onClick={() => scroll("left")}
        className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-[rgba(26,26,26,0.80)]
             cursor-pointer h-20 text-white  rounded-full shadow-md `}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M14.2893 18.2929C13.8988 18.6834 13.2656 18.6834 12.8751 18.2929L7.9877 13.4006C7.2073 12.6195 7.2076 11.3537 7.9883 10.5729L12.8787 5.68254C13.2692 5.29202 13.9024 5.29202 14.2929 5.68254C14.6834 6.07307 14.6834 6.70623 14.2929 7.09676L10.1073 11.2824C9.7167 11.6729 9.7167 12.3061 10.1073 12.6966L14.2893 16.8787C14.6798 17.2692 14.6798 17.9023 14.2893 18.2929Z" fill="#FCFCFC"/>
</svg>
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
        <CardComponent products={products}/>
      </div>

      {/* Right Button */}
      <button
        onClick={() => scroll("right")}
        className={` absolute right-0 top-1/2 transform -translate-y-1/2 bg-[rgba(26,26,26,0.80)]
             cursor-pointer text-white h-20 rounded-full shadow-md`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z" fill="#FCFCFC"/>
</svg>
      </button>
    </div>
  )
}
