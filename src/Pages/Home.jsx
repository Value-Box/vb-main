import React, { useState,useEffect,useRef  } from 'react'
import HorizentolCategories from '../Components/Categories/HorizentolCategories';
import VidCarousel from '../Components/Carousels/VidCarousel';
import ProductCard1 from '../Components/ProductCards/ProductCard1';
import InfoSection from '../Components/InfoSection';
import BundleDeal from '../Components/Deals/BundleDeal';
import FlashDeal from '../Components/Deals/FlashDeal';
import TrendyFashion from '../Components/Deals/TrendyFashion';
import OneDollarShop from '../Components/Deals/OneDollarShop';

function Home() {
    const images = [
        "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
        "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const goToPrevious = () => {
        setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
      };
    
      const goToNext = () => {
        setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
      };

  return (
    <div>
    <HorizentolCategories  />
    <div className="relative max-w-[1920px]  w-full mx-auto">
      <div className="overflow-hidden">
        <img
          src={images[currentIndex]}
          alt={`carousel-image-${currentIndex}`}
          className="w-full lg:h-[600px]"
        />
      </div>
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4 py-2 text-white bg-black opacity-50 hover:opacity-100 transition"
      >
        &#8592;
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 text-white bg-black opacity-50 hover:opacity-100 transition"
      >
        &#8594;
      </button>
    </div>

    <InfoSection/>
    <div className='flex flex-col md:flex-row gap-2 xl:gap-4 sm:px-4 py-0 max-w-[1920px] mx-auto'>
      <BundleDeal/>
      <FlashDeal/>
    </div>

    <div className='flex flex-col md:flex-row gap-2 xl:gap-4 sm:p-4 max-w-[1920px] mx-auto'>
      <TrendyFashion/>
      <OneDollarShop/>
    </div>

    <VidCarousel />
    <ProductCard1 />
    
    </div>
  )
}

export default Home