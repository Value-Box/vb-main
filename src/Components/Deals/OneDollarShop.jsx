import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import HoddieImg from "/src/Images/Image2.png";
import MouseImg from "/src/Images/Image3.png";
import ProductImg from "/src/Images/ProductCard.png";
import DealCarousel2 from '../Carousels/DealCarousel2';

function OneDollarShop() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1140);
    const [isMobile2, setIsMobile2] = useState(window.innerWidth <= 640);
  
    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth <= 1140);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
    useEffect(() => {
      const handleResize = () => setIsMobile2(window.innerWidth <= 640);
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
    
    <div className='sm:bg-gradient-to-r from-[#FFC136] via-[#FFD168] to-[#E09B00] sm:rounded-2xl p-4 w-full md:w-[45%] '>
        <Link to='/OneDollarShopePage' state={{name:'One Dollar Shop'}}>
        <div className='flex justify-between items-center mb-1'>
          <h3 className='text-[#1A1A1A] font-semibold 2xl:font-bold text-xl lg:text-2xl 2xl:text-3xl flex'>
          <svg xmlns="http://www.w3.org/2000/svg" className='hidden sm:inline-flex' width="36" height="36" viewBox="0 0 36 36" fill="none">
  <path d="M6 28.5C6 29.2956 6.31607 30.0587 6.87868 30.6213C7.44129 31.1839 8.20435 31.5 9 31.5C9.79565 31.5 10.5587 31.1839 11.1213 30.6213C11.6839 30.0587 12 29.2956 12 28.5C12 27.7044 11.6839 26.9413 11.1213 26.3787C10.5587 25.8161 9.79565 25.5 9 25.5C8.20435 25.5 7.44129 25.8161 6.87868 26.3787C6.31607 26.9413 6 27.7044 6 28.5Z" stroke="#D92D20" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M19.5 25.5H9V4.5H6" stroke="#D92D20" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M9 7.5L30 9L29.1375 15.033M21.75 19.5H9M31.5 22.5H27.75C27.1533 22.5 26.581 22.7371 26.159 23.159C25.7371 23.581 25.5 24.1533 25.5 24.75C25.5 25.3467 25.7371 25.919 26.159 26.341C26.581 26.7629 27.1533 27 27.75 27H29.25C29.8467 27 30.419 27.2371 30.841 27.659C31.2629 28.081 31.5 28.6533 31.5 29.25C31.5 29.8467 31.2629 30.419 30.841 30.841C30.419 31.2629 29.8467 31.5 29.25 31.5H25.5M28.5 31.5V33M28.5 21V22.5" stroke="#D92D20" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
</svg> <span className='sm:text-[#D92D20] '>One Dollar Shop</span></h3>
          <span className='bg-[#E6EAF3] rounded-full p-2 2xl:p-3 hidden sm:flex items-center justify-center h-full w-max'>
          
         <svg xmlns="http://www.w3.org/2000/svg" className='w-4 lg:w-5 2xl:w-6' viewBox="0 0 24 25" fill="none">
  <path d="M2 12.5H22M22 12.5L13 3.5M22 12.5L13 21.5" stroke="#D92D20" strokeWidth="2.5"/>
</svg>
          </span>
          <span className='bg-gradient-to-r from-[#FFC136] via-[#FFD168] to-[#E09B00] rounded-full p-2 2xl:p-3 flex sm:hidden items-center justify-center h-full w-max'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M1.33398 8H14.6673M14.6673 8L8.66732 2M14.6673 8L8.66732 14" stroke="black" stroke-width="1.66667"/>
</svg>
          </span>
        </div>

        <span className='hidden sm:inline-flex text-[#333] text-sm 2xl:text-base font-semibold '>Big brands, Big Savings</span>
        </Link>

        {/* Products */}
       {!isMobile?( 
        <div className='mt-2 2xl:mt-5 flex gap-2'>
        <div className="bg-[#FFF] p-2 w-fit rounded-xl flex flex-col">
  <img src={ProductImg} alt="" className="h-[150px] 2xl:h-[200px] rounded-lg object-cover" />
  
  {/* Yeh div flexible space le raha hai */}
  <div className="flex flex-col flex-grow justify-between">
    {/* Product Name */}
    

    {/* Price aur Discount */}
    <p className="flex items-center justify-between rounded-md mt-1">
      
      <span className="flex items-baseline font-semibold">
        <span className="text-xs">PKR</span>
        <span className="text-lg ml-[2px]">5,699</span>
      </span>
      <span className="text-[#F04438] px-4 py-1 rounded-full text-sm relative">
      -52%</span>
    </p>
  </div>
        </div>

          <div className='bg-[#FFF] p-2 w-fit rounded-xl flex flex-col'>
            <img src={HoddieImg} alt="" className="h-[150px] 2xl:h-[200px] rounded-lg object-cover"/>
            <p className="flex items-center justify-between rounded-md mt-1">
      
      <span className="flex items-baseline font-semibold">
        <span className="text-xs">PKR</span>
        <span className="text-lg ml-[2px]">5,699</span>
      </span>
      <span className="text-[#F04438] px-4 py-1 rounded-full text-sm relative">
       -52%</span>
    </p>
          </div>
          <div className='bg-[#FFF] p-2 w-fit rounded-xl flex flex-col'>
            <img src={MouseImg} alt="" className="h-[150px] 2xl:h-[200px] rounded-lg object-cover"/>
            <p className="flex items-center justify-between rounded-md mt-1">
      
      <span className="flex items-baseline font-semibold">
        <span className="text-xs">PKR</span>
        <span className="text-lg ml-[2px]">5,699</span>
      </span>
      <span className="text-[#F04438] px-4 py-1 rounded-full text-sm relative">
       -52%</span>
    </p>
          </div>
        </div>):(<DealCarousel2 products={dummyProductsList} />)}
        
      </div>
  )
}

export default OneDollarShop