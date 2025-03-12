import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import ProductImg from "/src/Images/ProductCard.png";
import HoddieImg from "/src/Images/Image2.png";
import MouseImg from "/src/Images/Image3.png";
import electricity from "/src/Images/electricity.gif";
import DealCarousel2 from '../Carousels/DealCarousel2';
function FlashDeal() {
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
    <div className='bg-[#FFE3DF] sm:rounded-2xl sm:p-4 w-full md:w-[50%] xl:w-full pb-4'>
            <Link to='/FlashDealPage' state={{ name: "Flash Deals" }}>
            <div className='flex justify-between items-center mb-1 px-4 pt-2 sm:p-0'>
              <h3 className='text-[#1A1A1A] font-semibold 2xl:font-bold text-xl lg:text-2xl 2xl:text-3xl flex'><span className='flex gap-2'><img className='w-6' src={electricity} alt="" /> Flash</span><span className='text-[#F04438] '>Deals</span></h3>
              <span className='bg-[#FFC3B2] rounded-full p-2 2xl:p-3 flex items-center justify-center h-full w-max'>
              <svg xmlns="http://www.w3.org/2000/svg" className='w-4 lg:w-5 2xl:w-6' viewBox="0 0 24 24" fill="none">
                 <path d="M2 12H22M22 12L13 3M22 12L13 21" stroke="black" strokeWidth="2.5"/>
             </svg>
              </span>
            </div>
    
            <span className='hidden sm:inline-flex text-[#333] text-lg lg:text-xl 2xl:text-2xl font-semibold '>Limited time 70% off</span>
            </Link>
    
            {/* Products */}
            {!isMobile?(<div className='mt-5 hidden lg:flex gap-2'>
            <div className="bg-[#FFF] p-2 w-fit rounded-xl flex flex-col h-[280px] 2xl:h-[350px] ">
      <img src={ProductImg} alt="" className="h-[190px] 2xl:h-[250px] rounded-lg object-cover" />
      
      {/* Yeh div flexible space le raha hai */}
      <div className="flex flex-col flex-grow justify-between">
        {/* Product Name */}
        <p className="w-full whitespace-normal break-words mt-2 text-sm flex-grow">
          Men'S Other Running Shoes Korean Style
        </p>
    
        {/* Price aur Discount */}
        <p className="flex items-center justify-between rounded-md mt-1">
          <span className="text-[#F04438] bg-[#FEE4E2] px-4 py-1 rounded-full text-sm relative">
          <svg className='absolute  bottom-[-4px] left-0 ' xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
             <path d="M2.01618 12.5223C1.27261 12.7215 0.592195 12.0411 0.791433 11.2976L3.48116 1.25936C3.6804 0.515788 4.60986 0.26674 5.15419 0.811071L12.5027 8.15954C13.047 8.70387 12.7979 9.63333 12.0544 9.83257L2.01618 12.5223Z" fill="#FEE4E2"/>
          </svg> -52%</span>
          <span className="flex items-baseline font-semibold">
            <span className="text-xs">PKR</span>
            <span className="text-lg ml-[2px]">5,699</span>
          </span>
        </p>
      </div>
            </div>
    
              <div className='bg-[#FFF] p-2 w-fit rounded-xl flex flex-col h-[280px] 2xl:h-[350px]'>
                <img src={HoddieImg} alt="" className=" h-[190px] 2xl:h-[250px] rounded-lg object-cover"/>
                <p className="w-full whitespace-normal break-words mt-2 text-sm">Men'S Other Running Shoes Korean Style</p>
                <p className="flex items-center justify-between rounded-md mt-1">
          <span className="text-[#F04438] bg-[#FEE4E2] px-4 py-1 rounded-full text-sm relative">
          <svg className='absolute  bottom-[-4px] left-0 ' xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
             <path d="M2.01618 12.5223C1.27261 12.7215 0.592195 12.0411 0.791433 11.2976L3.48116 1.25936C3.6804 0.515788 4.60986 0.26674 5.15419 0.811071L12.5027 8.15954C13.047 8.70387 12.7979 9.63333 12.0544 9.83257L2.01618 12.5223Z" fill="#FEE4E2"/>
          </svg> -52%</span>
          <span className="flex items-baseline font-semibold">
            <span className="text-xs">PKR</span>
            <span className="text-lg ml-[2px]">5,699</span>
          </span>
        </p>
              </div>
              <div className='bg-[#FFF] p-2 w-fit rounded-xl flex flex-col h-[280px] 2xl:h-[350px]'>
                <img src={MouseImg} alt="" className=" h-[190px] 2xl:h-[250px] rounded-lg object-cover"/>
                <p className="w-full whitespace-normal break-words mt-2 text-sm">Men'S Other Running Shoes Korean Style</p>
                <p className="flex items-center justify-between rounded-md mt-1">
          <span className="text-[#F04438] bg-[#FEE4E2] px-4 py-1 rounded-full text-sm relative">
          <svg className='absolute  bottom-[-4px] left-0 ' xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
             <path d="M2.01618 12.5223C1.27261 12.7215 0.592195 12.0411 0.791433 11.2976L3.48116 1.25936C3.6804 0.515788 4.60986 0.26674 5.15419 0.811071L12.5027 8.15954C13.047 8.70387 12.7979 9.63333 12.0544 9.83257L2.01618 12.5223Z" fill="#FEE4E2"/>
          </svg> -52%</span>
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

export default FlashDeal