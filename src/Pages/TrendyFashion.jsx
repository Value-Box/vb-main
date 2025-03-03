import React from "react";
import { motion } from "framer-motion"; 
import TrendyFashionHS from "/src/Images/TrendyFashionHS.png";
import TFcard1 from "/src/Images/TFcard1.png";
import TFcard2 from "/src/Images/TFcard2.png";
import TFcard3 from "/src/Images/TFcard3.png";
import TFcard4 from "/src/Images/TFcard4.png";
import TFcard5 from "/src/Images/TFcard5.png"; // Added Image
import TFmenswear1 from "/src/Images/TFmenswear1.png"
import TFkidswear from "/src/Images/TFkidswear.png"
import TFstore1 from "/src/Images/TFstore1.png"



function TrendyFashion() {
  return (
    <div>
      <img src={TrendyFashionHS} alt="Trendy Fashion Header" className="w-full" />

      <div className="flex w-full flex-nowrap justify-center gap-10 bg-[#7CD4FD] p-10 overflow-hidden">
        {[TFcard1, TFcard2, TFcard3, TFcard4, TFcard5].map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={`Trendy Fashion Card ${index + 1}`}
            className="w-[18%] h-auto origin-bottom" // Adjust width so all fit in one line
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-10">
      {/* Left Column */}
      <div className="bg-[#FF484B] flex items-center justify-between px-10 rounded-[10px]">
       <div className="justify-center">
       <span className="text-[#FCFCFC] text-center font-outfit text-[48px] font-medium leading-normal">
       MENSWEAR
      </span>
        <button className="flex text-white">
        Shop Now <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
        <path d="M19 12.4154L13 18.4154M19 12.4154L13 6.41541M19 12.4154H5" stroke="#FCFCFC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </button>
       </div>
       <div className="flex">
      <img src={TFmenswear1} alt="Menswear 1" className=" " />
 
     </div>
      </div>

      {/* Right Column */}
      <div className="bg-[#FF484B] flex items-center justify-between px-10 rounded-[10px]">
       <div className="justify-center">
       <span className="text-[#FCFCFC] text-center font-outfit text-[48px] font-medium leading-normal">
       KIDs WEAR
      </span>
        <button className="flex text-white">
        Shop Now <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
        <path d="M19 12.4154L13 18.4154M19 12.4154L13 6.41541M19 12.4154H5" stroke="#FCFCFC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </button>
       </div>
       <div className="flex">
      <img src={TFkidswear} alt="Menswear 1" className=" " />
 
     </div>
      </div>
    </div>
    <div className="bg-[#FEF6E6] p-10 flex flex-col gap-10">
        <span className="text-[36px] font-bold">EXPLORE OFFICIAL <span className="text-[#FF484B]">BRANDS STORES</span> </span>
        <div className="grid grid-cols-2 gap-4 ">
       
       {/* Left Column */}
            <div className="bg-white flex">
             <img src={TFstore1} alt="" />
             <div className="p-[30px] grid grid-cols-2 gap-x-[20px] gap-y-[20px]">
  {[...Array(6)].map((_, index) => (
    <div key={index} className="flex flex-col items-start w-[197px] h-[152px] gap-[10px] rounded-[10px] bg-[#F2F2F2]">
      <span className="mt-auto flex justify-center bg-black text-white w-full rounded-b-[10px] py-2.5">
        UP TO 80% OFF
      </span>
    </div>
  ))}
</div>

           


            </div>
      
            {/* Right Column */}
            <div className="bg-white p-6 flex items-center justify-center">
             
            </div>
          </div>
    </div>
   

    </div>
  );
}

export default TrendyFashion;
