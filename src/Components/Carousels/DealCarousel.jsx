import React, { useState, useRef, useEffect } from 'react';
import ProductImg from "/src/Images/ProductCard.png";

const products = [
  { id: 1, name: "Men'S Other Running Shoes Korean Style", price: 5000, image: ProductImg },
  { id: 2, name: "Men'S Other Running Shoes Korean Style", price: 4500, image: ProductImg },
  { id: 3, name: "Men'S Other Running Shoes Korean Style", price: 4000, image: ProductImg },
  { id: 4, name: "Men'S Other Running Shoes Korean Style", price: 6000, image: ProductImg },
  { id: 3, name: "Men'S Other Running Shoes Korean Style", price: 4000, image: ProductImg },
  { id: 5, name: "Men'S Other Running Shoes Korean Style", price: 6000, image: ProductImg },
  { id: 6, name: "Men'S Other Running Shoes Korean Style", price: 4000, image: ProductImg },
  { id: 7, name: "Men'S Other Running Shoes Korean Style", price: 6000, image: ProductImg },
  { id: 8, name: "Men'S Other Running Shoes Korean Style", price: 5500, image: ProductImg }
];

const DealCarousel = () => {
    const visibleItems = 4;
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef(null);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex < products.length - visibleItems ? prevIndex + 1 : prevIndex));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
    };

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTo({
                left: currentIndex * (containerRef.current.offsetWidth / visibleItems),
                behavior: "smooth"
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
          {products.map((product) => (
              <div 
                  key={product.id} 
                  className="bg-white rounded-lg overflow-hidden w-[40%] min-w-[250px] xl:min-w-[15%] transition-transform duration-300 flex flex-col gap-2.5 items-center relative p-2.5"
              >
                  {/* Image Container */}
                  <div className="relative w-full">
                     <img src={ProductImg} alt="" className=" h-[200px] 2xl:h-[250px] rounded-lg object-cover" />

                      {/* Add to Cart Button */}
                      <button className="absolute bottom-4 right-5 bg-white p-2 rounded-[10px] shadow-md hover:bg-gray-200 transition">
                          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                              <path d="M18.5996 12.998H13.5996V17.998C13.5996 18.2633 13.4943 18.5176 13.3067 18.7052C13.1192 18.8927 12.8648 18.998 12.5996 18.998C12.3344 18.998 12.08 18.8927 11.8925 18.7052C11.705 18.5176 11.5996 18.2633 11.5996 17.998V12.998H6.59961C6.33439 12.998 6.08004 12.8927 5.8925 12.7052C5.70497 12.5176 5.59961 12.2633 5.59961 11.998C5.59961 11.7328 5.70497 11.4785 5.8925 11.2909C6.08004 11.1034 6.33439 10.998 6.59961 10.998H11.5996V5.99805C11.5996 5.73283 11.705 5.47848 11.8925 5.29094C12.08 5.1034 12.3344 4.99805 12.5996 4.99805C12.8648 4.99805 13.1192 5.1034 13.3067 5.29094C13.4943 5.47848 13.5996 5.73283 13.5996 5.99805V10.998H18.5996C18.8648 10.998 19.1192 11.1034 19.3067 11.2909C19.4943 11.4785 19.5996 11.7328 19.5996 11.998C19.5996 12.2633 19.4943 12.5176 19.3067 12.7052C19.1192 12.8927 18.8648 12.998 18.5996 12.998Z" fill="black"/>
                          </svg>
                      </button>
                  </div>

                  {/* Product Info */}
                  <div className='text-start w-full flex flex-col gap-2.5'>
                  <span className="text-sm font-normal">{product.name}</span>
                  <div className='flex justify-between'>
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
                    
                   <div className='flex flex-col gap-1'>
                    <span className='flex items-center text-xs font-medium'><svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
     <g clip-path="url(#clip0_11570_50159)">
     <path d="M7.47872 1.91193C7.55208 1.78603 7.65718 1.68158 7.78351 1.60897C7.90985 1.53637 8.05301 1.49817 8.19872 1.49817C8.34443 1.49817 8.48759 1.53637 8.61393 1.60897C8.74027 1.68158 8.84536 1.78603 8.91872 1.91193L10.7821 5.11059L14.4007 5.89459C14.5431 5.92552 14.6748 5.99322 14.7828 6.09095C14.8908 6.18867 14.9714 6.313 15.0164 6.45154C15.0613 6.59008 15.0692 6.738 15.0392 6.88054C15.0092 7.02308 14.9424 7.15527 14.8454 7.26392L12.3787 10.0246L12.7521 13.7079C12.7668 13.853 12.7432 13.9993 12.6837 14.1324C12.6241 14.2655 12.5307 14.3806 12.4128 14.4663C12.2949 14.552 12.1565 14.6052 12.0116 14.6207C11.8666 14.6362 11.7201 14.6134 11.5867 14.5546L8.19872 13.0613L4.81072 14.5546C4.67733 14.6134 4.53085 14.6362 4.38589 14.6207C4.24093 14.6052 4.10258 14.552 3.98464 14.4663C3.86669 14.3806 3.7733 14.2655 3.71377 14.1324C3.65424 13.9993 3.63066 13.853 3.64539 13.7079L4.01872 10.0246L1.55205 7.26459C1.45487 7.15594 1.38789 7.0237 1.3578 6.88107C1.3277 6.73844 1.33555 6.59041 1.38055 6.45176C1.42555 6.31311 1.50614 6.18869 1.61426 6.09092C1.72238 5.99316 1.85426 5.92546 1.99672 5.89459L5.61539 5.11059L7.47872 1.91193Z" fill="#F1B838"/>
     </g>
      <defs>
      <clipPath id="clip0_11570_50159">
      <rect width="16" height="16" fill="white" transform="translate(0.199219)"/>
       </clipPath>
  </defs>
</svg> 4.5</span>
                    <span className='text-xs font-medium text-[#999]'>250+ Sold</span>
                   </div>
                  </div>
                 
                  </div>
                
                
              </div>
          ))}
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
