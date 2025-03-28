import React, { useState } from 'react';
import { useRef } from "react";
import { motion } from "framer-motion"; 
import TrendyFashionHS from "/src/Images/TrendyFashionHS.png";
import TrendyFashionHS1 from "/src/Images/TrendyFashionHS1.png";
import ProductCard1 from '../Components/ProductCards/ProductCard1';
import TFcard1 from "/src/Images/TFcard1.png";
import TFcard2 from "/src/Images/TFcard2.png";
import TFcard3 from "/src/Images/TFcard3.png";
import TFcard4 from "/src/Images/TFcard4.png";
import TFcard5 from "/src/Images/TFcard5.png"; // Added Image
import TFmenswear1 from "/src/Images/TFmenswear1.png"
import TFkidswear1 from "/src/Images/TFkidswear1.png"
import TFkidswear from "/src/Images/TFkidswear.png"
import TFstore1 from "/src/Images/TFstore1.png"
import TFstore2 from "/src/Images/TFstore2.png"
import categoryImage from "/src/Images/categoryImage.png";
import DetailProductCard from '../Components/Cards/DetailProductCard';


const categories = [
  { name: "Tops", img: categoryImage },
  { name: "Pants", img: categoryImage },
  { name: "Shoes", img: categoryImage },
  { name: "Makeup", img: categoryImage },
  { name: "Jacket", img: categoryImage },
  { name: "Beauty", img: categoryImage },
  { name: "Fashion", img: categoryImage },
  { name: "Makeup", img: categoryImage },
  { name: "Jewelry", img: categoryImage },
  { name: "Sports", img: categoryImage },
  { name: "Books", img: categoryImage },
  { name: "Beauty", img: categoryImage },
  { name: "Fashion", img: categoryImage },
  { name: "Electronics", img: categoryImage },
  { name: "Dresses", img: categoryImage },
  { name: "Sports", img: categoryImage },
  { name: "Books", img: categoryImage },
  { name: "Beauty", img: categoryImage },
];
const products = [
  { id: 1, name: "Men'S Other Running Shoes Korean Style", price: 5000, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080' },
  { id: 2, name: "Men'S Other Running Shoes Korean Style", price: 4500, image: "https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8aGVhZHBob25lfGVufDB8MHx8fDE3MjEzMDM2OTB8MA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 3, name: "Men'S Other Running Shoes Korean Style", price: 4000, image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw0fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 4, name: "Men'S Other Running Shoes Korean Style", price: 6000, image: "https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 3, name: "Men'S Other Running Shoes Korean Style", price: 4000, image: "https://images.unsplash.com/photo-1528148343865-51218c4a13e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwzfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 5, name: "Men'S Other Running Shoes Korean Style", price: 6000, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080' },
  { id: 6, name: "Men'S Other Running Shoes Korean Style", price: 4000, image: "https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8aGVhZHBob25lfGVufDB8MHx8fDE3MjEzMDM2OTB8MA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 7, name: "Men'S Other Running Shoes Korean Style", price: 6000, image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw0fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 8, name: "Men'S Other Running Shoes Korean Style", price: 5500, image: "https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 9, name: "Men'S Other Running Shoes Korean Style", price: 5500, image: "https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080" }
];

const categoryTabs = [
  {
    id: 1,
    label: "For You",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 30 31" fill="none">
  <path d="M15 27.1029L13.1875 25.4529C6.75 19.6154 2.5 15.7529 2.5 11.0404C2.5 7.17791 5.525 4.16541 9.375 4.16541C11.55 4.16541 13.6375 5.17791 15 6.76541C16.3625 5.17791 18.45 4.16541 20.625 4.16541C24.475 4.16541 27.5 7.17791 27.5 11.0404C27.5 15.7529 23.25 19.6154 16.8125 25.4529L15 27.1029Z" fill="#F04438"/>
</svg>
    ),
  },
  {
    id: 2,
    label: "Today Deal",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 30 31" fill="none">
  <path d="M19.475 21.4154L15 18.5404L10.525 21.4154L11.875 16.2654L7.7625 12.9154L13.075 12.5904L15 7.66541L16.925 12.5904L22.2375 12.9154L18.125 16.2654M25 15.4154C25 14.7524 25.2634 14.1165 25.7322 13.6476C26.2011 13.1788 26.837 12.9154 27.5 12.9154V7.91541C27.5 7.25236 27.2366 6.61648 26.7678 6.14764C26.2989 5.6788 25.663 5.41541 25 5.41541H5C4.33696 5.41541 3.70107 5.6788 3.23223 6.14764C2.76339 6.61648 2.5 7.25236 2.5 7.91541V12.9154C3.16304 12.9154 3.79893 13.1788 4.26777 13.6476C4.73661 14.1165 5 14.7524 5 15.4154C5 16.0784 4.73661 16.7143 4.26777 17.1832C3.79893 17.652 3.16304 17.9154 2.5 17.9154V22.9154C2.5 23.5784 2.76339 24.2143 3.23223 24.6832C3.70107 25.152 4.33696 25.4154 5 25.4154H25C25.663 25.4154 26.2989 25.152 26.7678 24.6832C27.2366 24.2143 27.5 23.5784 27.5 22.9154V17.9154C26.837 17.9154 26.2011 17.652 25.7322 17.1832C25.2634 16.7143 25 16.0784 25 15.4154Z" fill="#EEA500"/>
</svg>
    ),
  },
  {
    id: 3,
    label: "Furniture",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 3L4 9v11h16V9l-8-6zm2 15h-4v-4h4v4zm4 0h-2v-6H8v6H6V9.5l6-4.5 6 4.5V18z"></path>
      </svg>
    ),
  },
  {
    id: 4,
    label: "New In",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 30 31" fill="none">
  <path d="M23.104 21.3742C21.3955 21.7845 19.6119 21.7646 17.9129 21.3164C16.2139 20.8682 14.6526 20.0056 13.3688 18.8059C12.085 17.6062 11.1188 16.1068 10.5567 14.442C9.99455 12.7773 9.85406 10.9991 10.1478 9.26672C10.1038 9.31059 10.0566 9.35112 10.0065 9.38797C9.65654 9.65422 9.21904 9.75297 8.34404 9.95047L7.55029 10.1305C4.47529 10.8267 2.93779 11.1742 2.57154 12.3505C2.20654 13.5255 3.25404 14.7517 5.35029 17.203L5.89279 17.8367C6.48779 18.533 6.78654 18.8817 6.92029 19.3117C7.05404 19.743 7.00904 20.208 6.91904 21.1367L6.83654 21.983C6.52029 25.2542 6.36154 26.8892 7.31904 27.6155C8.27654 28.3417 9.71654 27.6805 12.594 26.3542L13.3403 26.0117C14.1578 25.6342 14.5665 25.4467 15.0003 25.4467C15.434 25.4467 15.8428 25.6342 16.6615 26.0117L17.4053 26.3542C20.284 27.6792 21.724 28.3417 22.6803 27.6167C23.639 26.8892 23.4803 25.2542 23.164 21.983L23.104 21.3742Z" fill="url(#paint0_linear_6856_21209)"/>
  <path opacity="0.5" d="M11.4414 7.17541L11.0314 7.91041C10.5814 8.71791 10.3564 9.12166 10.0064 9.38791C10.0564 9.35041 10.1034 9.30999 10.1476 9.26665C9.85381 10.9992 9.99429 12.7775 10.5565 14.4424C11.1187 16.1073 12.085 17.6067 13.369 18.8065C14.6529 20.0062 16.2144 20.8687 17.9136 21.3169C19.6127 21.765 21.3965 21.7847 23.1051 21.3742L23.0801 21.1367C22.9914 20.2079 22.9464 19.7429 23.0801 19.3117C23.2139 18.8817 23.5114 18.5329 24.1076 17.8367L24.6501 17.2029C26.7464 14.7529 27.7939 13.5267 27.4276 12.3504C27.0626 11.1742 25.5251 10.8254 22.4501 10.1304L21.6551 9.95041C20.7814 9.7529 20.3439 9.65416 19.9926 9.38791C19.6426 9.12166 19.4176 8.71791 18.9676 7.91041L18.5589 7.17541C16.9751 4.33541 16.1839 2.91541 15.0001 2.91541C13.8164 2.91541 13.0251 4.33541 11.4414 7.17541Z" fill="url(#paint1_linear_6856_21209)"/>
  <defs>
    <linearGradient id="paint0_linear_6856_21209" x1="2.5" y1="18.591" x2="23.4083" y2="18.591" gradientUnits="userSpaceOnUse">
      <stop stop-color="#0032A3"/>
      <stop offset="0.25" stop-color="#1A51CB"/>
      <stop offset="0.5" stop-color="#3B66C8"/>
      <stop offset="0.75" stop-color="#1A51CB"/>
      <stop offset="1" stop-color="#0032A3"/>
    </linearGradient>
    <linearGradient id="paint1_linear_6856_21209" x1="9.99805" y1="12.2918" x2="27.4996" y2="12.2918" gradientUnits="userSpaceOnUse">
      <stop stop-color="#0032A3"/>
      <stop offset="0.25" stop-color="#1A51CB"/>
      <stop offset="0.5" stop-color="#3B66C8"/>
      <stop offset="0.75" stop-color="#1A51CB"/>
      <stop offset="1" stop-color="#0032A3"/>
    </linearGradient>
  </defs>
</svg>
    ),
  },
];
const images = [TFcard1, TFcard2, TFcard3, TFcard4, TFcard5];
function TrendyFashion() {
  

   const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < categories.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };
  const [activeTab, setActiveTab] = useState(categoryTabs[0].id);

  const carouselRef1 = useRef(null);
  const carouselRef2 = useRef(null);

  const handleNext1 = (carouselRef) => {
    if (carouselRef.current) {
      const { scrollWidth, clientWidth, scrollLeft } = carouselRef.current;

      if (scrollLeft + clientWidth >= scrollWidth - 1) {
        carouselRef.current.scrollTo({ left: 0, behavior: "smooth" }); // Loop back to start
      } else {
        carouselRef.current.scrollBy({ left: 200, behavior: "smooth" }); // Move to the next item
      }
    }
  };
  
  return (
    <div>
      <img src={TrendyFashionHS} alt="Trendy Fashion Header" className="w-full md:flex hidden" />
      <img src={TrendyFashionHS1} alt="Trendy Fashion Header" className="w-full md:hidden flex" />

      <div className="w-full bg-[#7CD4FD] p-10 overflow-hidden">
      {/* 🔹 Desktop View (Your Original Code - Unchanged) */}
      <div className="hidden md:flex w-full flex-nowrap justify-center gap-10">
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={`Trendy Fashion Card ${index + 1}`}
            className="w-[18%] h-auto origin-bottom"
            animate={{
              rotate: [0, 5, -5, 0], // Slight tilt effect
            }}
            transition={{
              duration: 2 + index * 0.5, // Slight delay per image
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* 🔹 Mobile View (Infinite Scrolling Images) */}
<div className="relative md:hidden w-full overflow-hidden">
  <motion.div
    className="flex w-max space-x-4"
    animate={{
      x: ["0%", "-100%", "0%"], // Moves left and back
    }}
    transition={{
      ease: "easeInOut",
      duration: 100, // Adjust speed for smooth movement
      repeat: Infinity,
      repeatType: "reverse",
    }}
  >
    {/* Duplicate images for seamless loop */}
    {[...images, ...images].map((image, index) => (
      <motion.img
        key={index}
        src={image}
        alt={`Trendy Fashion Card ${index % images.length + 1}`}
        className="flex-shrink-0"
        animate={{
          rotate: [0, 5, -5, 0], // Tilts images back and forth
        }}
        transition={{
          duration: 2 + (index % images.length) * 0.5, // Adds slight delay per image
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
    ))}
  </motion.div>
</div>

    </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:p-10 p-5 ">
      {/* Left Column */}
      <div className="bg-[#FF484B] h-[120px] md:h-auto flex items-center justify-between md:px-10 px-1 ps-4 rounded-[10px]">
       <div className="justify-center">
       <span className="text-[#FCFCFC] text-center font-outfit text-[32px] md:text-[48px] font-medium leading-normal">
       MENSWEAR
      </span>
        <button className="flex text-white">
        Shop Now <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
        <path d="M19 12.4154L13 18.4154M19 12.4154L13 6.41541M19 12.4154H5" stroke="#FCFCFC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </button>
       </div>
      
       <div className="self-end">
      <img src={TFmenswear1} alt="Menswear 1" className="" />
    </div>
 
    
      </div>

      {/* Right Column */}
      <div className="bg-[#FF484B] flex items-center justify-between md:h-auto h-[120px] md:px-10 px-2 ps-4 rounded-[10px]">
       <div className="justify-center">
       <span className="text-[#FCFCFC] text-center font-outfit text-[32px] md:text-[48px] font-medium leading-normal">
       KIDs WEAR
      </span>
        <button className="flex text-white">
        Shop Now <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
        <path d="M19 12.4154L13 18.4154M19 12.4154L13 6.41541M19 12.4154H5" stroke="#FCFCFC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </button>
       </div>
       <div className="self-end">
      <img src={TFkidswear1} alt="kidsswear 1" className=" hidden md:flex " />
      <img src={TFkidswear} alt="kidsswear " className=" md:hidden flex" />

 
     </div>
      </div>
    </div>
    <div className="bg-[#FEF6E6] p-5 md:p-10 flex flex-col gap-10">
        <span className="md:text-[36px] text-[30px] font-bold">EXPLORE OFFICIAL <span className="text-[#FF484B]">BRANDS STORES</span> </span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
       
       {/* Left Column */}
            <div className="bg-white hidden md:flex rounded-2xl">
             <img src={TFstore1} alt="" className='hidden md:flex w-full max-w-50 xl:max-w-70 2xl:max-w-100 h-auto  rounded-tl-2xl rounded-bl-2xl'/>
             <div className="p-7.5 w-full grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-5">
  {[...Array(6)].map((_, index) => (
    <div key={index} className="flex w-full flex-col items-start gap-5 rounded-lg bg-[#F2F2F2]">
      <span className="mt-auto text-sm flex justify-center bg-black text-white w-full rounded-b-lg py-2.5">
        UP TO 80% OFF
      </span>
    </div>
  ))}
</div>
    </div>
    <div className='md:hidden flex justify-between items-center '>
      <h2 className='text-[24px] font-bold'>Eastern Wear</h2>
      <button
  onClick={() => handleNext1(carouselRef1)}
  className="bg-gradient-to-r from-[#FFC136] via-[#FAC142] to-[#E09B00] 
             text-black w-12 h-12 flex items-center justify-center 
             rounded-full p-2 gap-[6.667px] shadow-md"
>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M1.3335 8H14.6668M14.6668 8L8.66683 2M14.6668 8L8.66683 14" stroke="black" stroke-width="1.66667"/>
</svg>
</button>

    </div>
   
    <div className="md:hidden flex overflow-hidden">
  <div
    ref={carouselRef1}
    className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar space-x-[10px]"
  >
    {[...Array(6)].map((_, index) => (
      <div
        key={index}
        className="flex flex-col items-start w-[180px] h-[152px] rounded-[10px] bg-[#F2F2F2] flex-shrink-0 snap-center"
      >
        <span className="mt-auto flex justify-center bg-black text-white w-full rounded-b-[10px] py-2.5">
          UP TO 80% OFF
        </span>
      </div>
    ))}
  </div>
</div>

    
      
            {/* Right Column */}
            <div className="bg-white hidden md:flex rounded-2xl">
            <img 
  src={TFstore2} 
  alt="" 
  className="hidden md:flex w-full max-w-50 xl:max-w-70 2xl:max-w-100 h-auto rounded-tl-2xl rounded-bl-2xl"
/>
             <div className="p-7.5 w-full grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-5">
  {[...Array(6)].map((_, index) => (
    <div key={index} className="flex w-full flex-col items-start gap-5 rounded-lg bg-[#F2F2F2]">
      <span className="mt-auto text-sm flex justify-center bg-black text-white w-full rounded-b-lg py-2.5">
        UP TO 80% OFF
      </span>
    </div>
  ))}
</div>


           


            </div>
    <div className='md:hidden flex justify-between items-center '>
      <h2 className='text-[24px] font-bold'>Western Wear</h2>
      <button
  onClick={() => handleNext1(carouselRef2)}
  className="bg-gradient-to-r from-[#FFC136] via-[#FAC142] to-[#E09B00] 
             text-black w-12 h-12 flex items-center justify-center 
             rounded-full p-2 gap-[6.667px] shadow-md"
>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M1.3335 8H14.6668M14.6668 8L8.66683 2M14.6668 8L8.66683 14" stroke="black" stroke-width="1.66667"/>
</svg>
</button>

    </div>
   
    <div className="md:hidden flex overflow-hidden">
  <div
    ref={carouselRef2}
    className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar space-x-[10px]"
  >
    {[...Array(6)].map((_, index) => (
      <div
        key={index}
        className="flex flex-col items-start w-[180px] h-[152px] rounded-[10px] bg-[#F2F2F2] flex-shrink-0 snap-center"
      >
        <span className="mt-auto flex justify-center bg-black text-white w-full rounded-b-[10px] py-2.5">
          UP TO 80% OFF
        </span>
      </div>
    ))}
  </div>
    </div>

          </div>
    </div>
   <div className="">
   <h2 className='text-[24px] font-bold md:hidden  md:px-10 px-5'>Categories</h2>
  <div className="relative w-full bg-[#FCFCFC] md:p-10 p-5">
    <div className="overflow-hidden">
      <div
        className="flex transition-transform duration-300"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {categories.length > 0 ? (
          categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-full max-w-[80%] justify-center px-4 mx-auto"
            >
              <div className="w-[120px] h-[120px] mb-4">
                <img
                  src={category.img}
                  alt={category.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <span className="text-center text-[14px] font-semibold">
                {category.name}
              </span>
            </div>
          ))
        ) : (
          <div className="w-full text-center text-xl font-semibold">
            No Categories Available
          </div>
        )}
      </div>
    </div>

    {/* Carousel Navigation Buttons */}
    {categories.length > 0 && (
      <>
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`absolute left-10 top-1/2 transform -translate-y-1/2 bg-gray-700/80 text-white w-10 h-20 rounded-full flex items-center justify-center shadow-md hover:bg-gray-800 transition z-10 hidden
            ${currentIndex === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-black text-white"}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M14.2894 5.70711C13.8989 5.31658 13.2657 5.31658 12.8752 5.70711L7.98778 10.5994C7.20736 11.3805 7.20766 12.6463 7.98837 13.4271L12.8788 18.3175C13.2693 18.708 13.9025 18.708 14.293 18.3175C14.6836 17.927 14.6836 17.2938 14.293 16.9032L10.1074 12.7176C9.71684 12.3271 9.71684 11.6939 10.1074 11.3034L14.2894 7.12132C14.68 6.7308 14.68 6.09763 14.2894 5.70711Z"
              fill="#FCFCFC"
            />
          </svg>
        </button>

        <button
          onClick={handleNext}
          disabled={currentIndex >= categories.length - 1}
          className={`absolute right-10 top-1/2 transform -translate-y-1/2 bg-gray-700/80 text-white w-10 h-20 rounded-full flex items-center justify-center shadow-md hover:bg-gray-800 transition z-10 hidden
            ${currentIndex >= categories.length - 1 ? "bg-gray-400 cursor-not-allowed" : "bg-black text-white"}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M9.71057 18.2929C10.1011 18.6834 10.7343 18.6834 11.1248 18.2929L16.0122 13.4006C16.7926 12.6195 16.7923 11.3537 16.0116 10.5729L11.1212 5.68254C10.7307 5.29202 10.0975 5.29202 9.70696 5.68254C9.31643 6.07307 9.31643 6.70623 9.70696 7.09676L13.8926 11.2824C14.2832 11.6729 14.2832 12.3061 13.8926 12.6966L9.71057 16.8787C9.32004 17.2692 9.32004 17.9023 9.71057 18.2929Z"
              fill="#FCFCFC"
            />
          </svg>
        </button>
      </>
    )}
  </div>
</div>

<div className="flex flex-wrap md:flex-nowrap md:gap-2.5 gap-1 p-4 md:p-10 bg-white shadow-lg rounded-lg overflow-x-auto">
  {categoryTabs.map((tab) => (
    <button
      key={tab.id}
      onClick={() => setActiveTab(tab.id)}
      className={`flex items-center md:gap-1 gap-0 px-2 md:px-5 py-1 rounded-full border text-xs md:text-sm font-semibold transition-all
        ${
          activeTab === tab.id
            ? "bg-[#002882] text-white border-[#002882]"
            : "bg-transparent text-[#CCC] border-[#CCC]"
        }`}
    >
      <span className="text-base ">{tab.icon}</span> {/* Icon */}
      <span className='text-[12px] md:text-[18px]'>{tab.label}</span> {/* Text */}
    </button>
  ))}
</div>



   <div className='flex flex-wrap py-10 bg-[#FCFCFC]'>
   <DetailProductCard products={products} style={`flex-wrap justify-center `}/>
   </div>
  
    </div>
  );
}

export default TrendyFashion;
