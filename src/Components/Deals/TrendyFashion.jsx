import React, { useEffect, useState } from 'react';
import BudleDealsBg from "/src/Images/BudleDealsBg.png";
import TrendyFashionImg from "/src/Images/TrendyFesshionImg.png";
import { Link } from 'react-router-dom';
import ProductImg from "/src/Images/ProductCard.png";
import DealCarousel2 from '../Carousels/DealCarousel2';
import MouseImg from "/src/Images/Image3.png";
import HoddieImg from "/src/Images/Image2.png";

function TrendyFashion() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1140);
  const [isMobile2, setIsMobile2] = useState(window.innerWidth <= 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1140);
      setIsMobile2(window.innerWidth <= 640);
    };
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
    <div className='sm:rounded-2xl p-4 w-full md:w-[55%] h-fit' style={ !isMobile2 ? { backgroundImage: `url(${BudleDealsBg})`, backgroundSize: "cover", backgroundPosition: "center" } : {} }>
      <Link to='/DealsPage'>
        <div className='flex justify-between items-center mb-1'>
          <h3 className='sm:text-[#FCFCFC] font-semibold 2xl:font-bold text-xl lg:text-2xl 2xl:text-3xl hidden sm:inline-block'>#Trendy Fashion</h3>
          <h3 className='sm:text-[#FCFCFC] font-semibold 2xl:font-bold text-xl lg:text-2xl 2xl:text-3xl sm:hidden inline-block'>
            <span className=' text-sm rounded-sm px-1 h-fit inline-block text-white bg-gradient-to-r from-[#FFC136] via-[#FFD168] to-[#E09B00] sm:bg-white'>#</span> Trendy Fashion</h3>
          
          <span className='bg-[#F04438] sm:bg-[#7A5A43] rounded-full p-2 2xl:p-3 flex items-center justify-center h-full w-max'>
            <svg xmlns="http://www.w3.org/2000/svg" className='w-4 lg:w-5 2xl:w-6' viewBox="0 0 24 25" fill="none">
              <path d="M2 12.5H22M22 12.5L13 3.5M22 12.5L13 21.5" stroke="#FCFCFC" strokeWidth="2.5" />
            </svg>
          </span>
        </div>
        <span className='hidden sm:flex text-[#FCFCFC] text-sm 2xl:text-base font-semibold'>Stay up to date with latest trends!</span>
      </Link>

      {/* Products */}
      {!isMobile ? (  // 1024px se upar carousel hide hoga
  <div className='mt-2 2xl:mt-5 flex gap-2'>
    <div className='w-fit rounded-xl flex flex-col'>
      <img src={TrendyFashionImg} alt="Trendy Fashion Banner" className="max-w-[200px] h-full 2xl:max-w-[350px] rounded-lg object-cover" />
    </div>
    {dummyProductsList.slice(0, 3).map((product) => (
      <div key={product.id} className='bg-[#FFF] p-2 w-fit rounded-xl flex flex-col'>
        <img src={product.img} alt={product.name} className="h-[150px] 2xl:h-[200px] rounded-lg object-cover" loading="lazy" />
        <p className='inline-flex items-center rounded-md mt-1 ml-2'>
          <span className="flex items-baseline font-semibold">
            <span className="text-xs">PKR</span>
            <span className="text-lg ml-[2px]">{product.price}</span>
          </span>
          <span className="text-[#F04438] py-1 rounded-full text-sm relative">-52%</span>
        </p>
      </div>
    ))}
  </div>
) : (
  <DealCarousel2 products={dummyProductsList} /> // 1024px se niche sirf carousel show hoga
)}

    </div>
  );
}

export default TrendyFashion;
