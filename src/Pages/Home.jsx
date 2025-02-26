import React, { useState,useEffect,useRef  } from 'react'
import {Link} from 'react-router-dom'
import HorizentolCategories from '../Components/Categories/HorizentolCategories';
import ProductImg from "/src/Images/ProductCard.png";
import HoddieImg from "/src/Images/Image2.png";
import MouseImg from "/src/Images/Image3.png";
import BudleDealsBg from "/src/Images/BudleDealsBg.png";
import TrendyFesshionImg from "/src/Images/TrendyFesshionImg.png";
import electricity from "/src/Images/electricity.gif";
import VidCarousel from '../Components/Carousels/VidCarousel';
import {useFetch} from '../hooks/UseFetch';
import ProductCard1 from '../Components/ProductCards/ProductCard1';
import InfoSection from '../Components/InfoSection';


// const url='http://182.176.166.222:8081/'
// const fetchBrandData = async (options) => {
//   return fetch(`${url}api/GetBrands/GetBrands`, options);
// };

function Home() {
  // const { data, loading, error } = useFetch({ apiFunc: fetchBrandData });

  // const [brands, setBrands] = useState([]);
  // useEffect(() => {
  //   if (data?.data) {
  //     setBrands(data.data); // ✅ Sirf API se jo array aa raha hai woh set hoga
  //   }
  //   console.log("Data Updated:", data);
  // }, [data]);


  

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

      const dummyProducts = [
        { id: 1, name: "Laptop", price: "999", img: ProductImg },
        { id: 2, name: "Keyboard", price: "49", img: HoddieImg },
        { id: 3, name: "Mouse", price: "29", img: MouseImg },
        { id: 4, name: "Headphones", price: "89", img: ProductImg },
        { id: 5, name: "Monitor", price: "199", img: MouseImg },
        { id: 6, name: "SSD", price: "119", img: HoddieImg },
      ];

      const featuredVideo=[
        {
          id:1,vid:'https://www.youtube.com/shorts/UdBYTbk4sd0',img:ProductImg,price: "999",description:"Men'S Other Running Shoes Korean Style"
        },
        {
          id:1,vid:'https://www.youtube.com/shorts/52ErK8RTr9E',img:HoddieImg,price: "49",description:"Men'S Other Running Shoes Korean Style"
        },
        {
          id:1,vid:'https://www.youtube.com/shorts/UdBYTbk4sd0',img:MouseImg,price: "199",description:"Men'S Other Running Shoes Korean Style"
        },
        {
          id:1,vid:'https://www.youtube.com/shorts/52ErK8RTr9E',img:ProductImg,price: "9999",description:"Men'S Other Running Shoes Korean Style"
        }
      ]
      const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Mouse Down (Start Dragging)
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  // Mouse Leave (Stop Dragging)
  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Mouse Up (Stop Dragging)
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Mouse Move (Drag Action)
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll Speed
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };
  return (
    <div>
    <HorizentolCategories  />

    {/* <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {brands.map((brand, index) => (
          <li key={index}>{brand.brandName}</li>
        ))}
      </ul>
    </div> */}
    <div className="relative max-w-[1920px] w-full mx-auto">
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
{/* Carousel */}
    <div className="relative w-full max-w-5xl mx-auto hidden">
      <div className="flex gap-4 overflow-x-scroll scrollbar-hide cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {dummyProducts.map((product,index) => (
          
          <div key={index} className="bg-[#FFF] p-2 w-fit rounded-xl flex flex-col h-[280px] 2xl:h-[350px]">
          <img src={product.img} alt="" className="min-w-[230px] no-select pointer-events-none h-[190px] 2xl:h-[250px] rounded-lg object-cover" />
  
  {/* Yeh div flexible space le raha hai */}
  <div className="flex flex-col flex-grow justify-between">
    {/* Product Name */}
    <p className="w-full whitespace-normal break-words mt-2 text-sm flex-grow">
    {product.name}
    </p>

    {/* Price aur Discount */}
    <p className="flex items-center justify-between rounded-md mt-1">
      <span className="text-[#F04438] bg-[#FEE4E2] px-4 py-1 rounded-full text-sm relative">
      <svg className='absolute  bottom-[-4px] left-0 ' xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
         <path d="M2.01618 12.5223C1.27261 12.7215 0.592195 12.0411 0.791433 11.2976L3.48116 1.25936C3.6804 0.515788 4.60986 0.26674 5.15419 0.811071L12.5027 8.15954C13.047 8.70387 12.7979 9.63333 12.0544 9.83257L2.01618 12.5223Z" fill="#FEE4E2"/>
      </svg> -52%</span>
      <span className="flex items-baseline font-semibold">
        <span className="text-xs">PKR</span>
        <span className="text-lg ml-[2px]">{product.price}</span>
      </span>
    </p>
  </div>
</div>
         
          
        ))}
      </div>
    </div>

    <div className='flex flex-wrap sm:flex-nowrap gap-4 sm:p-4 max-w-[1920px] mx-auto'>
      <div className='bg-[#FFF6DF] sm:rounded-2xl p-4 w-full sm:w-[50%] xl:w-full'>
        <Link>
        <div className='flex justify-between items-center mb-1'>
          <h3 className='text-[#1A1A1A] font-semibold 2xl:font-bold text-xl lg:text-2xl 2xl:text-3xl '>Bundle Deals</h3>
          <span className='bg-[#FFEB71] rounded-full p-2 2xl:p-3 flex items-center justify-center h-full w-max'>
          <svg xmlns="http://www.w3.org/2000/svg" className='w-4 lg:w-5 2xl:w-6' viewBox="0 0 24 24" fill="none">
             <path d="M2 12H22M22 12L13 3M22 12L13 21" stroke="black" strokeWidth="2.5"/>
         </svg>
          </span>
        </div>
        <span className='bg-[#002882] text-[#E6EAF3] text-sm 2xl:text-base font-semibold px-3 py-1 rounded '>Pick & Save</span>
        <span className='text-[#333] text-lg lg:text-xl 2xl:text-2xl font-semibold ml-3'>3 From 3000 PKR</span>
        </Link>

        {/* Products */}
        <div className='mt-5 flex xl:overflow-hidden overflow-x-auto gap-2 w-full scrollbar-hidden'>
          <div className='bg-[#FFF] p-2 w-fit rounded-xl flex flex-col h-[280px] 2xl:h-[350px] min-w-[200px] xl:min-w-auto '>
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
          <div className='bg-[#FFF] p-2 w-fit rounded-xl flex flex-col h-[280px] 2xl:h-[350px] min-w-[200px] xl:min-w-auto'>
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
          <div className='bg-[#FFF] p-2 w-fit rounded-xl flex flex-col h-[280px] 2xl:h-[350px] min-w-[200px] xl:min-w-auto'>
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
        </div>

       
      </div>
      
      <div className='bg-[#FFE3DF] sm:rounded-2xl p-4 w-full sm:w-[50%] xl:w-full'>
        <Link>
        <div className='flex justify-between items-center mb-1'>
          <h3 className='text-[#1A1A1A] font-semibold 2xl:font-bold text-xl lg:text-2xl 2xl:text-3xl flex'><span className='flex gap-2'><img className='w-6' src={electricity} alt="" /> Flash</span><span className='text-[#F04438] '>Deals</span></h3>
          <span className='bg-[#FFC3B2] rounded-full p-2 2xl:p-3 flex items-center justify-center h-full w-max'>
          <svg xmlns="http://www.w3.org/2000/svg" className='w-4 lg:w-5 2xl:w-6' viewBox="0 0 24 24" fill="none">
             <path d="M2 12H22M22 12L13 3M22 12L13 21" stroke="black" strokeWidth="2.5"/>
         </svg>
          </span>
        </div>

        <span className='text-[#333] text-lg lg:text-xl 2xl:text-2xl font-semibold '>Limited time 70% off</span>
        </Link>

        {/* Products */}
        <div className='mt-5 flex xl:overflow-hidden overflow-x-auto gap-2 w-full scrollbar-hidden'>
        <div className="bg-[#FFF] p-2 w-fit rounded-xl flex flex-col h-[280px] 2xl:h-[350px] min-w-[200px] xl:min-w-auto">
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

          <div className='bg-[#FFF] p-2 w-fit rounded-xl flex flex-col h-[280px] 2xl:h-[350px] min-w-[200px] xl:min-w-auto'>
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
          <div className='bg-[#FFF] p-2 w-fit rounded-xl flex flex-col h-[280px] 2xl:h-[350px] min-w-[200px] xl:min-w-auto'>
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
        </div>

        
      </div>
      
    </div>

    <div className='flex flex-wrap sm:flex-nowrap gap-4 sm:p-4 max-w-[1920px] mx-auto'>
      <div className=' sm:rounded-2xl p-4 w-full sm:w-[55%]'style={{ backgroundImage: `url(${BudleDealsBg})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <Link>
        <div className='flex justify-between items-center mb-1'>
          <h3 className='text-[#FCFCFC] font-semibold 2xl:font-bold text-xl lg:text-2xl 2xl:text-3xl '>Bundle Deals</h3>
          <span className='bg-[#7A5A43] rounded-full p-2 2xl:p-3 flex items-center justify-center h-full w-max'>
          
         <svg xmlns="http://www.w3.org/2000/svg" className='w-4 lg:w-5 2xl:w-6' viewBox="0 0 24 25" fill="none">
           <path d="M2 12.5H22M22 12.5L13 3.5M22 12.5L13 21.5" stroke="#FCFCFC" strokeWidth="2.5"/>
        </svg>
          </span>
        </div>
        <span className='text-[#FCFCFC] text-sm 2xl:text-base font-semibold'>Stay up to date with latest trends!</span>
        </Link>

        {/* Products */}
        <div className='mt-2 2xl:mt-5 flex xl:overflow-hidden overflow-x-auto gap-2 w-full scrollbar-hidden'>
          <div className=' w-fit rounded-xl flex flex-col '>
          <img src={TrendyFesshionImg} alt="" className="max-w-[200px] h-full 2xl:max-w-[350px] rounded-lg object-cover" />
            
          </div>
          <div className='bg-[#FFF] p-2 w-fit rounded-xl flex flex-col min-w-[200px] xl:min-w-auto '>
          <img src={ProductImg} alt="" className=" h-[150px] 2xl:h-[200px] rounded-lg object-cover" />
            <p className='inline-flex items-center rounded-md mt-1 ml-2'>
              
              <span className="flex items-baseline font-semibold">-
                <span className="text-xs">PKR</span>
                <span className="text-lg ml-[2px]">5,699</span>
              </span>
              <span className="text-[#F04438] py-1 rounded-full text-sm relative">
              -52%</span>
            </p>
          </div>
          <div className='bg-[#FFF] p-2 w-fit rounded-xl flex flex-col min-w-[200px] xl:min-w-auto '>
          <img src={ProductImg} alt="" className="h-[150px] 2xl:h-[200px] rounded-lg object-cover" />
            <p className='inline-flex items-center rounded-md mt-1 ml-2'>
              
              <span className="flex items-baseline font-semibold">
                <span className="text-xs">PKR</span>
                <span className="text-lg ml-[2px]">5,699</span>
              </span>
              <span className="text-[#F04438] py-1 rounded-full text-sm relative">
              -52%</span>
            </p>
          </div>
          <div className='bg-[#FFF] p-2 w-fit rounded-xl flex flex-col min-w-[200px] xl:min-w-auto '>
          <img src={ProductImg} alt="" className=" h-[150px] 2xl:h-[200px] rounded-lg object-cover" />
            <p className='inline-flex items-center rounded-md mt-1 ml-2'>
              
              <span className="flex items-baseline font-semibold">
                <span className="text-xs">PKR</span>
                <span className="text-lg ml-[2px]">5,699</span>
              </span>
              <span className="text-[#F04438] py-1 rounded-full text-xs xl:text-sm relative">
              -52%</span>
            </p>
          </div>
        </div>

       
      </div>
      
      <div className='bg-gradient-to-r from-[#FFC136] via-[#FFD168] to-[#E09B00] sm:rounded-2xl p-4 w-full sm:w-[45%] '>
        <Link>
        <div className='flex justify-between items-center mb-1'>
          <h3 className='text-[#1A1A1A] font-semibold 2xl:font-bold text-xl lg:text-2xl 2xl:text-3xl flex'><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
  <path d="M6 28.5C6 29.2956 6.31607 30.0587 6.87868 30.6213C7.44129 31.1839 8.20435 31.5 9 31.5C9.79565 31.5 10.5587 31.1839 11.1213 30.6213C11.6839 30.0587 12 29.2956 12 28.5C12 27.7044 11.6839 26.9413 11.1213 26.3787C10.5587 25.8161 9.79565 25.5 9 25.5C8.20435 25.5 7.44129 25.8161 6.87868 26.3787C6.31607 26.9413 6 27.7044 6 28.5Z" stroke="#D92D20" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M19.5 25.5H9V4.5H6" stroke="#D92D20" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M9 7.5L30 9L29.1375 15.033M21.75 19.5H9M31.5 22.5H27.75C27.1533 22.5 26.581 22.7371 26.159 23.159C25.7371 23.581 25.5 24.1533 25.5 24.75C25.5 25.3467 25.7371 25.919 26.159 26.341C26.581 26.7629 27.1533 27 27.75 27H29.25C29.8467 27 30.419 27.2371 30.841 27.659C31.2629 28.081 31.5 28.6533 31.5 29.25C31.5 29.8467 31.2629 30.419 30.841 30.841C30.419 31.2629 29.8467 31.5 29.25 31.5H25.5M28.5 31.5V33M28.5 21V22.5" stroke="#D92D20" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
</svg> <span className='text-[#D92D20] '>One Dollar Shop</span></h3>
          <span className='bg-[#E6EAF3] rounded-full p-2 2xl:p-3 flex items-center justify-center h-full w-max'>
          
         <svg xmlns="http://www.w3.org/2000/svg" className='w-4 lg:w-5 2xl:w-6' viewBox="0 0 24 25" fill="none">
  <path d="M2 12.5H22M22 12.5L13 3.5M22 12.5L13 21.5" stroke="#D92D20" strokeWidth="2.5"/>
</svg>
          </span>
        </div>

        <span className='text-[#333] text-sm 2xl:text-base font-semibold '>Big brands, Big Savings</span>
        </Link>

        {/* Products */}
        <div className='mt-2 2xl:mt-5 flex xl:overflow-hidden overflow-x-auto gap-2 w-full scrollbar-hidden'>
        <div className="bg-[#FFF] p-2 w-fit rounded-xl flex flex-col min-w-[200px] xl:min-w-auto">
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

          <div className='bg-[#FFF] p-2 w-fit rounded-xl flex flex-col  min-w-[200px] xl:min-w-auto'>
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
          <div className='bg-[#FFF] p-2 w-fit rounded-xl flex flex-col  min-w-[200px] xl:min-w-auto'>
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
        </div>

        
      </div>
      
    </div>

    <VidCarousel />
    <ProductCard1 />
    
    </div>
  )
}

export default Home