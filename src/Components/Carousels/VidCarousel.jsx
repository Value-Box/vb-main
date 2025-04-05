import React, { useState, useRef, useEffect } from 'react';
import ProductCardCrousal from "/src/Images/ProductCardCrousal.png";

function VidCarousel() {
    const items = [
        "https://www.youtube.com/embed/6hksegA_x94?si=RLKTxfLQzye8PWap",
        "https://www.youtube.com/embed/6hksegA_x94?si=RLKTxfLQzye8PWap",
        "https://www.youtube.com/embed/6hksegA_x94?si=RLKTxfLQzye8PWap",
        "https://www.youtube.com/embed/6hksegA_x94?si=RLKTxfLQzye8PWap",
        "https://www.youtube.com/embed/6hksegA_x94?si=RLKTxfLQzye8PWap",
        "https://www.youtube.com/embed/6hksegA_x94?si=RLKTxfLQzye8PWap"
    ];
    
    const visibleItems = 5;
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef(null);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex < items.length - 1 ? prevIndex + 1 : prevIndex));
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
        <div className="relative w-full max-w-[1920px] mx-auto overflow-hidden px-5 mt-5">
            <div className='my-3'>
                <h1 className='flex items-center gap-2 text-natural-black text-xl md:text-3xl lg:text-4xl font-bold'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
  <path d="M32.625 29.25C32.625 29.5484 32.5065 29.8345 32.2955 30.0455C32.0845 30.2565 31.7984 30.375 31.5 30.375H4.5C4.20163 30.375 3.91548 30.2565 3.7045 30.0455C3.49353 29.8345 3.375 29.5484 3.375 29.25C3.375 28.9516 3.49353 28.6655 3.7045 28.4545C3.91548 28.2435 4.20163 28.125 4.5 28.125H31.5C31.7984 28.125 32.0845 28.2435 32.2955 28.4545C32.5065 28.6655 32.625 28.9516 32.625 29.25ZM32.625 7.875V23.625C32.625 24.2217 32.3879 24.794 31.966 25.216C31.544 25.6379 30.9717 25.875 30.375 25.875H5.625C5.02826 25.875 4.45597 25.6379 4.03401 25.216C3.61205 24.794 3.375 24.2217 3.375 23.625V7.875C3.375 7.27826 3.61205 6.70597 4.03401 6.28401C4.45597 5.86205 5.02826 5.625 5.625 5.625H30.375C30.9717 5.625 31.544 5.86205 31.966 6.28401C32.3879 6.70597 32.625 7.27826 32.625 7.875ZM23.0625 15.75C23.0624 15.5692 23.0188 15.3911 22.9354 15.2308C22.8519 15.0705 22.731 14.9326 22.583 14.8289L16.958 10.8914C16.7894 10.7733 16.5917 10.7037 16.3863 10.6902C16.181 10.6767 15.9758 10.7198 15.7933 10.8148C15.6107 10.9098 15.4577 11.053 15.3509 11.2289C15.2441 11.4049 15.1876 11.6067 15.1875 11.8125V19.6875C15.1876 19.8933 15.2441 20.0951 15.3509 20.2711C15.4577 20.447 15.6107 20.5902 15.7933 20.6852C15.9758 20.7802 16.181 20.8233 16.3863 20.8098C16.5917 20.7963 16.7894 20.7267 16.958 20.6086L22.583 16.6711C22.731 16.5674 22.8519 16.4295 22.9354 16.2692C23.0188 16.1089 23.0624 15.9308 23.0625 15.75Z" fill="url(#paint0_linear_5948_146548)"/>
  <defs>
    <linearGradient id="paint0_linear_5948_146548" x1="3.375" y1="18" x2="32.625" y2="18" gradientUnits="userSpaceOnUse">
      <stop stopColor="#0032A3"/>
      <stop offset="0.25" stopColor="#1A51CB"/>
      <stop offset="0.5" stopColor="#3B66C8"/>
      <stop offset="0.75" stopColor="#1A51CB"/>
      <stop offset="1" stopColor="#0032A3"/>
    </linearGradient>
  </defs>
</svg> Featured in Videos</h1>
<p className='text-lg text-natural-gray xl:text-2xl'>See what creators are sharing</p>
            </div>
            <div
                ref={containerRef}
                className="bg-white flex gap-5 overflow-x-auto w-full scrollbar-hide"
            >
                {items.map((item, index) => (
                    <div 
                        key={index} 
                        className={`bg-white rounded-lg overflow-hidden w-[30%] min-w-[250px] xl:min-w-[20%] transition-transform duration-300 ${index === currentIndex ? 'border border-[#CCD1D2]' : 'scale-100'}`}
                    >
                        <div className="relative">
                            <iframe
                                src={`${item}`}
                                className="h-[350px] w-full rounded-t-lg"
                                allow="autoplay"
                            ></iframe>
                            
                        </div>
                        <div className="bg-[#F2F2F2] rounded-b-lg p-2 xl:p-4 flex flex-row items-center gap-2.5">
                            <img className="w-[50px] xl:w-[80px] xl:h-[80px] rounded-lg object-contain" src={ProductCardCrousal} alt="Product" />
                            <div className="flex flex-col xl:gap-2">
                                <span className="text-xs font-semibold text-gray-900">PKR <span className='text-base'>5000</span></span>
                                <span className="text-sm text-black">Men's Other Running Shoes Korean Style</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="flex flex-row items-center rounded-full bg-[#F2F2F2] p-[5px] px-[10px] gap-2.5 mt-4 w-[25%] mb-2.5">
                <span className="text-lg font-semibold">{currentIndex + 1}/{items.length}</span>
                <div className="w-full bg-white h-1 relative">
                    <div
                        className="bg-[#333] h-1"
                        style={{ width: `${((currentIndex + 1) / items.length) * 100}%` }}
                    ></div>
                </div>
                <div className="flex justify-center items-center gap-2.5">
                    <button onClick={prevSlide}><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
  <path d="M33.75 18C33.75 21.115 32.8263 24.1601 31.0956 26.7502C29.365 29.3403 26.9052 31.359 24.0273 32.5511C21.1493 33.7431 17.9825 34.055 14.9273 33.4473C11.8721 32.8396 9.06575 31.3396 6.86307 29.1369C4.66039 26.9342 3.16035 24.1278 2.55263 21.0726C1.94492 18.0174 2.25682 14.8506 3.4489 11.9727C4.64098 9.09475 6.65969 6.63494 9.24977 4.90431C11.8398 3.17368 14.8849 2.24995 18 2.24995C22.1772 2.24995 26.1832 3.90932 29.1369 6.86302C32.0906 9.81672 33.75 13.8228 33.75 18ZM27 16.875H13.3313L19.6088 10.5671L18 8.99995L9 18L18 27L19.6088 25.3946L13.3313 19.125H27V16.875Z" fill="url(#paint0_linear_5948_146659)"/>
  <defs>
    <linearGradient id="paint0_linear_5948_146659" x1="33.75" y1="18" x2="2.24999" y2="18" gradientUnits="userSpaceOnUse">
      <stop stopColor="#0032A3"/>
      <stop offset="0.25" stopColor="#1A51CB"/>
      <stop offset="0.5" stopColor="#3B66C8"/>
      <stop offset="0.75" stopColor="#1A51CB"/>
      <stop offset="1" stopColor="#0032A3"/>
    </linearGradient>
  </defs>
</svg></button>
                    <button onClick={nextSlide}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
  <path d="M2.25 18C2.25 21.115 3.17372 24.1601 4.90435 26.7502C6.63499 29.3403 9.0948 31.359 11.9727 32.5511C14.8507 33.7431 18.0175 34.055 21.0727 33.4473C24.1279 32.8396 26.9343 31.3396 29.1369 29.1369C31.3396 26.9342 32.8397 24.1278 33.4474 21.0726C34.0551 18.0174 33.7432 14.8506 32.5511 11.9727C31.359 9.09475 29.3403 6.63494 26.7502 4.90431C24.1602 3.17368 21.1151 2.24995 18 2.24995C13.8228 2.24995 9.81677 3.90932 6.86307 6.86302C3.90937 9.81672 2.25 13.8228 2.25 18ZM9 16.875H22.6687L16.3912 10.5671L18 8.99995L27 18L18 27L16.3912 25.3946L22.6687 19.125H9V16.875Z" fill="url(#paint0_linear_5948_146662)"/>
  <defs>
    <linearGradient id="paint0_linear_5948_146662" x1="2.25" y1="18" x2="33.75" y2="18" gradientUnits="userSpaceOnUse">
      <stop stopColor="#0032A3"/>
      <stop offset="0.25" stopColor="#1A51CB"/>
      <stop offset="0.5" stopColor="#3B66C8"/>
      <stop offset="0.75" stopColor="#1A51CB"/>
      <stop offset="1" stopColor="#0032A3"/>
    </linearGradient>
  </defs>
</svg>
</button>
                </div>
            </div>
        </div>
    );
}

export default VidCarousel;
