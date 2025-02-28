import React, { useState, useRef, useEffect } from 'react';

import BundleDealCard from '../Cards/BundleDealCard';
import DetailProductCard from '../Cards/DetailProductCard';

const CardComponents={
    DetailProductCard:DetailProductCard,
    BundleDealCard:BundleDealCard,
}

const DealCarousel = ({products,CardType}) => {
    const CardComponent=CardComponents[CardType] || DetailProductCard
    const visibleItems = 6; // Maximum 6 products show karna hai
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < products.length - visibleItems ? prevIndex + 1 : prevIndex
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: currentIndex * (containerRef.current.offsetWidth / visibleItems),
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

    return (
      <div className="relative w-full max-w-[1920px] mx-auto overflow-hidden p-5">
            
      {/* Left Navigation Button */}
      <button 
          onClick={prevSlide} 
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700/80  text-white w-10 h-20 rounded-full flex items-center justify-center shadow-md hover:bg-gray-800 transition z-10"
      >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M14.2894 5.70711C13.8989 5.31658 13.2657 5.31658 12.8752 5.70711L7.98778 10.5994C7.20736 11.3805 7.20766 12.6463 7.98837 13.4271L12.8788 18.3175C13.2693 18.708 13.9025 18.708 14.293 18.3175C14.6836 17.927 14.6836 17.2938 14.293 16.9032L10.1074 12.7176C9.71684 12.3271 9.71684 11.6939 10.1074 11.3034L14.2894 7.12132C14.68 6.7308 14.68 6.09763 14.2894 5.70711Z" fill="#FCFCFC"/>
          </svg>
      </button>

      {/* Carousel Container */}
      <div ref={containerRef} className="flex gap-2.5 overflow-x-auto w-full scrollbar-hide">
      <CardComponent products={products}/>
      </div>

      {/* Right Navigation Button */}
      <button 
    onClick={nextSlide} 
    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700/80  text-white w-10 h-20 rounded-full flex items-center justify-center shadow-md hover:bg-gray-800 transition z-10"
>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M9.71057 18.2929C10.1011 18.6834 10.7343 18.6834 11.1248 18.2929L16.0122 13.4006C16.7926 12.6195 16.7923 11.3537 16.0116 10.5729L11.1212 5.68254C10.7307 5.29202 10.0975 5.29202 9.70696 5.68254C9.31643 6.07307 9.31643 6.70623 9.70696 7.09676L13.8926 11.2824C14.2832 11.6729 14.2832 12.3061 13.8926 12.6966L9.71057 16.8787C9.32004 17.2692 9.32004 17.9023 9.71057 18.2929Z" fill="#FCFCFC"/>
    </svg>
</button>

  </div>
  
    );
};

export default DealCarousel;
