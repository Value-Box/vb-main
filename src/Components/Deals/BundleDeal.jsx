import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import ProductImg from "/src/Images/ProductCard.png";
import HoddieImg from "/src/Images/Image2.png";
import MouseImg from "/src/Images/Image3.png";
import DealCarousel2 from '../Carousels/DealCarousel2';


function BundleDeal() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1140);
  
    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth <= 1140);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

  const dummyProductsList = [
      { id: 1, name: "Laptop", price: "999", img: ProductImg },
      { id: 2, name: "Keyboard", price: "49", img: HoddieImg },
      { id: 3, name: "Mouse", price: "29", img: MouseImg },
      { id: 4, name: "Laptop", price: "999", img: ProductImg },
      { id: 5, name: "Keyboard", price: "49", img: HoddieImg },
      { id: 6, name: "Mouse", price: "29", img: MouseImg },
  ];
  return (
    <div className='bg-[#FFF6DF] sm:rounded-2xl sm:p-4 w-full md:w-[50%] xl:w-full pb-4'>
        <Link to='/DealsPage' state={{ name: "Bundle Deals" }} >
        <div className='flex justify-between items-center mb-1 px-4 pt-2 sm:p-0'>
          <h3 className='text-[#1A1A1A] font-semibold 2xl:font-bold text-xl lg:text-2xl 2xl:text-3xl '>3 From 3000 PKR</h3>
          <span className='bg-[#FFEB71] rounded-full p-2 2xl:p-3 flex items-center justify-center h-full w-max'>
          <svg xmlns="http://www.w3.org/2000/svg" className='w-4 lg:w-5 2xl:w-6' viewBox="0 0 24 24" fill="none">
             <path d="M2 12H22M22 12L13 3M22 12L13 21" stroke="black" strokeWidth="2.5"/>
         </svg>
          </span>
        </div>
        <span className='hidden sm:inline-flex bg-[#002882] text-[#E6EAF3] text-sm 2xl:text-base font-semibold  md:ml-0 px-3 py-1 rounded '>Pick & Save</span>
        <span className='hidden sm:inline-flex text-[#333] text-lg lg:text-xl 2xl:text-2xl font-semibold ml-3'>3 From 3000 PKR</span>
        </Link>

        {/* Products */}
        {!isMobile?(<div className='mt-5 flex gap-2'>
          <div className='bg-[#FFF] p-2 w-fit rounded-xl flex flex-col h-[280px] 2xl:h-[350px]  '>
          <img src={ProductImg} alt="" className=" h-[190px] 2xl:h-[250px] rounded-lg object-cover" />
          <p className="w-full whitespace-normal break-words mt-2 text-sm">Men'S Other Running Shoes Korean Style</p>
            <p className='inline-flex items-center rounded-md bg-gradient-to-l from-white to-[#FFD2AE] mt-1 ml-2'>
              <svg xmlns="http://www.w3.org/2000/svg" className='relative left-[-10px]' width="21" height="35" viewBox="0 0 21 35" fill="none">
               <path d="M19.9661 15.3081L14.4253 17.3229L15.2085 1.48724C15.2421 0.809162 14.6655 0.317927 14.1256 0.56477L10.5 2.2232C9.9601 1.97639 10.4664 1.54513 10.5 2.2232C10.5 2.2232 10.7181 0.91438 10 1.5C5.77615 4.94452 6.57459 17.3229 6.57459 17.3229L1.03387 15.3081C0.321944 15.0491 -0.275344 15.978 0.133111 16.7091L9.83472 34.0784C10.1488 34.6405 10.8513 34.6405 11.1652 34.0784L20.867 16.7091C21.2753 15.9781 20.6781 15.0491 19.9661 15.3081Z" fill="url(#paint0_linear_11156_17119)"/>
               <defs>
                 <linearGradient id="paint0_linear_11156_17119" x1="10.5" y1="0.5" x2="10.5" y2="34.5" gradientUnits="userSpaceOnUse">
                   <stop stopColor="#FFD2AE"/>
                   <stop offset="1" stopColor="#FF9948"/>
                 </linearGradient>
               </defs>
              </svg>
              <span className="flex items-baseline font-semibold">
                <span className="text-xs">PKR</span>
                <span className="text-lg ml-[2px]">5,699</span>
              </span>

            </p>
          </div>
          <div className='bg-[#FFF] p-2 w-fit rounded-xl flex flex-col h-[280px] 2xl:h-[350px] '>
            <img src={HoddieImg} alt="" className=" h-[190px] 2xl:h-[250px] rounded-lg object-cover"/>
            <p className="w-full whitespace-normal break-words mt-2 text-sm">Men'S Other Running Shoes Korean Style</p>
            <p className='inline-flex items-center rounded-md bg-gradient-to-l from-white to-[#FFD2AE] mt-1 ml-2'>
              <svg xmlns="http://www.w3.org/2000/svg" className='relative left-[-10px]' width="21" height="35" viewBox="0 0 21 35" fill="none">
               <path d="M19.9661 15.3081L14.4253 17.3229L15.2085 1.48724C15.2421 0.809162 14.6655 0.317927 14.1256 0.56477L10.5 2.2232C9.9601 1.97639 10.4664 1.54513 10.5 2.2232C10.5 2.2232 10.7181 0.91438 10 1.5C5.77615 4.94452 6.57459 17.3229 6.57459 17.3229L1.03387 15.3081C0.321944 15.0491 -0.275344 15.978 0.133111 16.7091L9.83472 34.0784C10.1488 34.6405 10.8513 34.6405 11.1652 34.0784L20.867 16.7091C21.2753 15.9781 20.6781 15.0491 19.9661 15.3081Z" fill="url(#paint0_linear_11156_17119)"/>
               <defs>
                 <linearGradient id="paint0_linear_11156_17119" x1="10.5" y1="0.5" x2="10.5" y2="34.5" gradientUnits="userSpaceOnUse">
                   <stop stopColor="#FFD2AE"/>
                   <stop offset="1" stopColor="#FF9948"/>
                 </linearGradient>
               </defs>
              </svg>
              <span className="flex items-baseline font-semibold">
                <span className="text-xs">PKR</span>
                <span className="text-lg ml-[2px]">5,699</span>
              </span>

            </p>
          </div>
          <div className='bg-[#FFF] p-2 w-fit rounded-xl flex flex-col h-[280px] 2xl:h-[350px] '>
            <img src={MouseImg} alt="" className=" h-[190px] 2xl:h-[250px] rounded-lg object-cover"/>
            <p className="w-full whitespace-normal break-words mt-2 text-sm">Men'S Other Running Shoes Korean Style</p>
            <p className='inline-flex items-center rounded-md bg-gradient-to-l from-white to-[#FFD2AE] mt-1 ml-2'>
              <svg xmlns="http://www.w3.org/2000/svg" className='relative left-[-10px]' width="21" height="35" viewBox="0 0 21 35" fill="none">
               <path d="M19.9661 15.3081L14.4253 17.3229L15.2085 1.48724C15.2421 0.809162 14.6655 0.317927 14.1256 0.56477L10.5 2.2232C9.9601 1.97639 10.4664 1.54513 10.5 2.2232C10.5 2.2232 10.7181 0.91438 10 1.5C5.77615 4.94452 6.57459 17.3229 6.57459 17.3229L1.03387 15.3081C0.321944 15.0491 -0.275344 15.978 0.133111 16.7091L9.83472 34.0784C10.1488 34.6405 10.8513 34.6405 11.1652 34.0784L20.867 16.7091C21.2753 15.9781 20.6781 15.0491 19.9661 15.3081Z" fill="url(#paint0_linear_11156_17119)"/>
               <defs>
                 <linearGradient id="paint0_linear_11156_17119" x1="10.5" y1="0.5" x2="10.5" y2="34.5" gradientUnits="userSpaceOnUse">
                   <stop stopColor="#FFD2AE"/>
                   <stop offset="1" stopColor="#FF9948"/>
                 </linearGradient>
               </defs>
              </svg>
              <span className="flex items-baseline font-semibold">
                <span className="text-xs">PKR</span>
                <span className="text-lg ml-[2px]">5,699</span>
              </span>

            </p>
          </div>
        </div>):(<DealCarousel2 products={dummyProductsList} />)}
      </div>
  )
}

export default BundleDeal