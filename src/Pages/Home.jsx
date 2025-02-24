import React, { useState,useEffect,useRef  } from 'react'
import {Link} from 'react-router-dom'
import HorizentolCategories from '../Components/Categories/HorizentolCategories';
import ProductImg from "/src/Images/ProductCard.png";
import HoddieImg from "/src/Images/Image2.png";
import MouseImg from "/src/Images/Image3.png";
import electricity from "/src/Images/electricity.gif";
import VidCarousel from '../Components/Carousels/VidCarousel';
import useFetch from '../hooks/UseFetch';
import ProductCard1 from '../Components/ProductCards/ProductCard1';


// const options = {
//   method: "GET", // HTTP method (GET, POST, PUT, DELETE)
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: `Bearer YOUR_TOKEN_HERE`, // ✅ Token bhejna zaroori hai
//   },
// };

const url='http://182.176.166.222:8081/'
const fetchBrandData = async (options) => {
  return fetch(`${url}api/GetBrands/GetBrands`, options);
};
const fetchProductData = async (options) => {
  return fetch(`${url}api/ProductsInfoAPI/GetProducts`, options);
};
function Home() {
  const { data, loading, error } = useFetch({ apiFunc: fetchBrandData });
  const { data: ProData, loading: ProLoading, error: ProError } = useFetch({ apiFunc: fetchProductData });

  const [brands, setBrands] = useState([]);
  useEffect(() => {
    if (data?.data) {
      setBrands(data.data); // ✅ Sirf API se jo array aa raha hai woh set hoga
    }
    console.log("Data Updated:", data);
  }, [data]);

  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (ProData) {
      console.log("Full Product Data:", ProData); // 🔥 API se aane wala pura data dekho
      if (ProData.data) {
        setProducts(ProData.data);
        console.log("Product List Updated:", ProData.data); // ✅ Check karo ke array aa raha hai ya nahi
      }
    }
  }, [ProData]);
  

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
    <>
    <HorizentolCategories/>
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {brands.map((brand, index) => (
          <li key={index}>{brand.brandName}</li>
        ))}
      </ul>
    </div>
    <div className="relative w-full mx-auto">
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

    <div className='p-3 md:p-0 bg-[#FCFCFC]'>
    <div className='flex justify-between md:justify-start md:m-0 lg:justify-between flex-auto rounded-lg sm:flex-wrap flex-col sm:flex-row lg:flex-nowrap md:px-4 px-2 lg:px-8 
    2xl:px-20 py-4 gap-2 max-w-[1920px] mx-auto bg-[#FEF6E6] md:bg-white'>
      
        
          <div className='flex md:basis-2/4 gap-2 items-start'>
          <svg xmlns="http://www.w3.org/2000/svg" className='w-6 md:w-9'  viewBox="0 0 36 37" fill="none">
  <path d="M4.5 18.5H18V20.75H4.5V18.5ZM2.25 12.875H13.5V15.125H2.25V12.875Z" fill="#1A1A1A"/>
  <path d="M33.6582 19.1818L30.2832 11.3067C30.1964 11.1044 30.0522 10.932 29.8685 10.8108C29.6847 10.6896 29.4694 10.625 29.2493 10.625H25.8743V8.375C25.8743 8.07663 25.7558 7.79048 25.5448 7.57951C25.3338 7.36853 25.0476 7.25 24.7493 7.25H6.74928V9.5H23.6243V23.6255C23.112 23.9236 22.6636 24.3199 22.3049 24.7917C21.9462 25.2636 21.6842 25.8016 21.534 26.375H14.4645C14.1907 25.3145 13.5395 24.3903 12.633 23.7756C11.7265 23.1609 10.6269 22.8979 9.5404 23.0359C8.45386 23.1739 7.45495 23.7034 6.73092 24.5252C6.00688 25.3471 5.60742 26.4047 5.60742 27.5C5.60742 28.5953 6.00688 29.6529 6.73092 30.4748C7.45495 31.2966 8.45386 31.8261 9.5404 31.9641C10.6269 32.1021 11.7265 31.8391 12.633 31.2244C13.5395 30.6097 14.1907 29.6855 14.4645 28.625H21.534C21.7788 29.5905 22.3384 30.4469 23.1245 31.0586C23.9106 31.6703 24.8782 32.0024 25.8743 32.0024C26.8703 32.0024 27.8379 31.6703 28.624 31.0586C29.4101 30.4469 29.9698 29.5905 30.2145 28.625H32.6243C32.9226 28.625 33.2088 28.5065 33.4198 28.2955C33.6308 28.0845 33.7493 27.7984 33.7493 27.5V19.625C33.7492 19.4726 33.7182 19.3218 33.6582 19.1818ZM10.1243 29.75C9.67927 29.75 9.24426 29.618 8.87425 29.3708C8.50423 29.1236 8.21585 28.7722 8.04555 28.361C7.87525 27.9499 7.83069 27.4975 7.91751 27.061C8.00433 26.6246 8.21862 26.2237 8.53329 25.909C8.84796 25.5943 9.24887 25.38 9.68532 25.2932C10.1218 25.2064 10.5742 25.251 10.9853 25.4213C11.3964 25.5916 11.7479 25.88 11.9951 26.25C12.2423 26.62 12.3743 27.055 12.3743 27.5C12.3743 28.0967 12.1372 28.669 11.7153 29.091C11.2933 29.5129 10.721 29.75 10.1243 29.75ZM25.8743 12.875H28.5068L30.9188 18.5H25.8743V12.875ZM25.8743 29.75C25.4293 29.75 24.9943 29.618 24.6242 29.3708C24.2542 29.1236 23.9658 28.7722 23.7955 28.361C23.6253 27.9499 23.5807 27.4975 23.6675 27.061C23.7543 26.6246 23.9686 26.2237 24.2833 25.909C24.598 25.5943 24.9989 25.38 25.4353 25.2932C25.8718 25.2064 26.3242 25.251 26.7353 25.4213C27.1464 25.5916 27.4979 25.88 27.7451 26.25C27.9923 26.62 28.1243 27.055 28.1243 27.5C28.1243 28.0967 27.8872 28.669 27.4653 29.091C27.0433 29.5129 26.471 29.75 25.8743 29.75ZM31.4993 26.375H30.2145C29.9667 25.4114 29.4061 24.5572 28.6207 23.9464C27.8352 23.3356 26.8693 23.0028 25.8743 23V20.75H31.4993V26.375Z" fill="#1A1A1A"/>
</svg>
          <div>
          <span className='text-sm 2xl:text-base font-semibold'>Express Delivery</span>
          <p className='text-xs text-[#1A1A1A]'>Get your item from nearest store in less time</p>
          </div>
          </div>
          
        <p className='bg-[#EEA500] hidden sm:block md:hidden lg:block md:bg-[#CCC] w-[2px] md:w-[1px]'></p>
        
          <div className='hidden md:flex gap-2'>
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="37" viewBox="0 0 36 37" fill="none">
  <path d="M28.6875 7.25H7.3125C5.13788 7.25 3.375 9.01288 3.375 11.1875V25.8125C3.375 27.9871 5.13788 29.75 7.3125 29.75H28.6875C30.8621 29.75 32.625 27.9871 32.625 25.8125V11.1875C32.625 9.01288 30.8621 7.25 28.6875 7.25Z" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M3.375 14H32.625M9 21.5938H12.375V23H9V21.5938Z" stroke="#1A1A1A" strokeWidth="2.8125" strokeLinejoin="round"/>
</svg>
          <div>
          <span className='text-sm 2xl:text-base font-semibold'>Safe Payments</span>
          <p className='text-xs text-[#1A1A1A]'>Safe payment methods preferred by international shoppers</p>
          </div>
          </div>
          
       
        <p className='bg-[#CCC] w-[1px] hidden lg:block'></p>
        
          <div className='hidden md:flex basis-2/4 gap-2'>
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="37" viewBox="0 0 36 37" fill="none">
  <path d="M17.9992 3.5L30.975 8.04153V18.5C30.975 23.8551 27.6883 27.5987 24.6221 29.9226C22.7721 31.3123 20.7424 32.4451 18.5883 33.2898C18.5508 33.3044 18.5132 33.3186 18.4755 33.3327L18.443 33.3443L18.4339 33.3469L18.43 33.3482C18.4287 33.3482 18.4274 33.3482 17.9992 32.1246L17.5697 33.3495L17.5645 33.3469L17.5555 33.3443L17.523 33.3314C17.3497 33.2674 17.1775 33.2003 17.0066 33.1302C15.0012 32.3033 13.1089 31.225 11.3751 29.9213C8.3128 27.6 5.02344 23.8564 5.02344 18.5013V8.04153L17.9992 3.5ZM17.9992 32.1246L17.5697 33.3495L17.9992 33.5001L18.4287 33.3495L17.9992 32.1246ZM17.9992 30.7336L18.0109 30.7284C19.8066 29.9869 21.5013 29.0212 23.0546 27.8543C25.8288 25.7535 28.3799 22.6821 28.3799 18.5V9.88409L17.9992 6.25087L7.6186 9.88409V18.5C7.6186 22.6821 10.1696 25.7509 12.9439 27.8556C14.5006 29.0247 16.1992 29.9918 17.9992 30.7336ZM25.8781 13.7548L16.703 22.93L11.1973 17.4256L13.0334 15.5896L16.7017 19.2604L24.0421 11.92L25.8781 13.7548Z" fill="#1A1A1A"/>
</svg>
          <div>
          <span className='text-sm 2xl:text-base font-semibold'>Buyers Protection</span>
          <p className='text-xs text-[#1A1A1A]'>Get a refund if items arrive late or not as described</p>
          </div>
          </div>
          
        
        <p className='bg-[#CCC] w-[1px] hidden lg:block'></p>
        
          <div className='hidden md:flex gap-2'>
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="37" viewBox="0 0 36 37" fill="none">
  <path d="M24.4068 2.5H11.594C10.747 2.5 9.93469 2.83647 9.33577 3.43538C8.73686 4.0343 8.40039 4.8466 8.40039 5.6936V31.3048C8.40039 33.0696 9.83079 34.5 11.594 34.5H24.4052C25.2523 34.5 26.0648 34.1636 26.664 33.5647C27.2631 32.9658 27.6 32.1535 27.6004 31.3064V5.6936C27.6004 4.8466 27.2639 4.0343 26.665 3.43538C26.0661 2.83647 25.2538 2.5 24.4068 2.5ZM18.0004 32.9C16.8964 32.9 16.0004 32.1848 16.0004 31.3C16.0004 30.4152 16.8964 29.7 18.0004 29.7C19.1044 29.7 20.0004 30.4152 20.0004 31.3C20.0004 32.1848 19.1044 32.9 18.0004 32.9ZM24.4004 28.1H11.6004V5.7H24.4004V28.1Z" fill="#1A1A1A"/>
</svg>
          <div>
          <span className='text-sm 2xl:text-base font-semibold'>ValueBox App</span>
          <p className='text-xs text-[#1A1A1A]'>Download our app to Shop anywhere & anytime</p>
          </div>
          </div>
          
        
        <div className='flex md:hidden gap-2'>
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
  <path d="M11.35 8.99988C10.95 8.89988 10.55 8.69988 10.25 8.39988C9.95 8.29988 9.85 7.99988 9.85 7.79988C9.85 7.59988 9.95 7.29988 10.15 7.19988C10.45 6.99988 10.75 6.79988 11.05 6.89988C11.65 6.89988 12.15 7.19988 12.45 7.59988L13.35 6.39988C13.05 6.09988 12.75 5.89988 12.45 5.69988C12.15 5.49988 11.75 5.39988 11.35 5.39988V3.99988H10.15V5.39988C9.65 5.49988 9.15 5.79988 8.75 6.19988C8.35 6.69988 8.05 7.29988 8.15 7.89988C8.15 8.49988 8.35 9.09988 8.75 9.49988C9.25 9.99988 9.95 10.2999 10.55 10.5999C10.85 10.6999 11.25 10.8999 11.55 11.0999C11.75 11.2999 11.85 11.5999 11.85 11.8999C11.85 12.1999 11.75 12.4999 11.55 12.7999C11.25 13.0999 10.85 13.1999 10.55 13.1999C10.15 13.1999 9.65 13.0999 9.35 12.7999C9.05 12.5999 8.75 12.2999 8.55 11.9999L7.55 13.0999C7.85 13.4999 8.15 13.7999 8.55 14.0999C9.05 14.3999 9.65 14.6999 10.25 14.6999V15.9999H11.35V14.4999C11.95 14.3999 12.45 14.0999 12.85 13.6999C13.35 13.1999 13.65 12.3999 13.65 11.6999C13.65 11.0999 13.45 10.3999 12.95 9.99988C12.45 9.49988 11.95 9.19988 11.35 8.99988ZM10.75 1.99988C6.35 1.99988 2.75 5.59988 2.75 9.99988C2.75 14.3999 6.35 17.9999 10.75 17.9999C15.15 17.9999 18.75 14.3999 18.75 9.99988C18.75 5.59988 15.15 1.99988 10.75 1.99988ZM10.75 16.8999C6.95 16.8999 3.85 13.7999 3.85 9.99988C3.85 6.19988 6.95 3.09988 10.75 3.09988C14.55 3.09988 17.65 6.19988 17.65 9.99988C17.65 13.7999 14.55 16.8999 10.75 16.8999Z" fill="#1A1A1A"/>
</svg>
          <div>
          <span className='text-sm 2xl:text-base font-semibold'>Value-for-money</span>
          <p className='text-xs text-[#1A1A1A]'>We Offer Competitive prices on millions of items</p>
          </div>
          </div>
     
      
    </div>
    </div>

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
        <div className='mt-5 hidden xl:flex gap-2'>
          <div className='bg-[#FFF] p-2 w-fit rounded-xl flex flex-col h-[280px] 2xl:h-[350px]'>
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
          <div className='bg-[#FFF] p-2 w-fit rounded-xl flex flex-col h-[280px] 2xl:h-[350px]'>
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
          <div className='bg-[#FFF] p-2 w-fit rounded-xl flex flex-col h-[280px] 2xl:h-[350px]'>
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
        <div className="relative w-full block xl:hidden mx-auto mt-5">
      <div
        ref={carouselRef}
        className="flex gap-4 overflow-x-scroll scrollbar-hide cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {dummyProducts.map((product,index) => (
          
          
          <div key={index} className='bg-[#FFF] p-2 w-fit rounded-xl flex flex-col h-[280px] 2xl:h-[350px]'>
          <img src={product.img} alt="" className="min-w-[200px] sm:min-w-[230px] no-select pointer-events-none h-[190px] 2xl:h-[250px] rounded-lg object-cover" />
          <p className="w-full whitespace-normal break-words mt-2 text-sm">{product.name}</p>
            <p className='inline-flex items-center rounded-md bg-gradient-to-l from-white to-[#FFD2AE] mt-1 ml-2'>
              
              <svg xmlns="http://www.w3.org/2000/svg" className='relative left-[-10px]' width="22" height="35" viewBox="0 0 22 35" fill="none">
  <path d="M20.3 15.3081L14.7593 17.3229L15.5425 1.48724C15.5761 0.809162 14.9994 0.317927 14.4596 0.56477L10.834 2.2232C10.2941 1.97639 10.8003 1.54513 10.834 2.2232C10.834 2.2232 11.0521 0.91438 10.334 1.5C6.11014 4.94452 6.90858 17.3229 6.90858 17.3229L1.36785 15.3081C0.655928 15.0491 0.0586404 15.978 0.467096 16.7091L10.1687 34.0784C10.4827 34.6405 11.1853 34.6405 11.4992 34.0784L21.2009 16.7091C21.6092 15.9781 21.0121 15.0491 20.3 15.3081Z" fill="url(#paint0_linear_11256_1038)"/>
  <defs>
    <linearGradient id="paint0_linear_11256_1038" x1="10.834" y1="0.5" x2="10.834" y2="34.5" gradientUnits="userSpaceOnUse">
      <stop stopColor="#FFD2AE"/>
      <stop offset="1" stopColor="#FF9948"/>
    </linearGradient>
  </defs>
</svg>
              <span className="flex items-baseline font-semibold">
                <span className="text-xs">PKR</span>
                <span className="text-lg ml-[2px]">{product.price}</span>
              </span>

            </p>
          </div>
         
        ))}
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
        <div className='mt-5 hidden xl:flex gap-2 '>
        <div className="bg-[#FFF] p-2 w-fit rounded-xl flex flex-col h-[280px] 2xl:h-[350px]">
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
        </div>

        {/* Carousel */}
    <div className="relative w-full block xl:hidden mx-auto mt-5">
      <div
        ref={carouselRef}
        className="flex gap-4 overflow-x-scroll scrollbar-hide cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {dummyProducts.map((product,index) => (
          
          <div key={index} className="bg-[#FFF] p-2 w-fit rounded-xl flex flex-col h-[280px] 2xl:h-[350px]">
          <img src={product.img} alt="" className="min-w-[200px] sm:min-w-[230px] no-select pointer-events-none h-[190px] 2xl:h-[250px] rounded-lg object-cover" />
  
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
      </div>
      
    </div>

    <VidCarousel />
    <ProductCard1 />
    
    </>
  )
}

export default Home