import React, { useState,useEffect,useRef  } from 'react'
import HorizentolCategories from '../Components/Categories/HorizentolCategories';
import VidCarousel from '../Components/Carousels/VidCarousel';
import ProductCard1 from '../Components/ProductCards/ProductCard1';
import InfoSection from '../Components/InfoSection';
import BundleDeal from '../Components/Deals/BundleDeal';
import FlashDeal from '../Components/Deals/FlashDeal';
import TrendyFashion from '../Components/Deals/TrendyFashion';
import OneDollarShop from '../Components/Deals/OneDollarShop';
import { NavLink } from 'react-router-dom';
import Input from '../Components/Input';
import FormButton from '../Components/FormButton';

function Home() {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
    const images = [
        "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
        "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
      ];
      const [showPassword, setShowPassword] = useState(false); 
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const goToPrevious = () => {
        setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
      };
    
      const goToNext = () => {
        setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
      };

      useEffect(()=>{
        const interval=setInterval(goToNext,4000);
        return ()=>clearInterval(interval)
      },[currentIndex])

      const [showModal, setShowModal] = useState(false);

      useEffect(() => {
        // Remove 'hasVisited' when project starts (not on reload)
        if (!sessionStorage.getItem("sessionStarted")) {
          localStorage.removeItem("hasVisited");
          sessionStorage.setItem("sessionStarted", "true");
        }
    
        const hasVisited = localStorage.getItem("hasVisited");
    
        if (!hasVisited) {
          setTimeout(() => {
            setShowModal(true);
            localStorage.setItem("hasVisited", "true"); // Store so modal doesn't show again
          }, 3000); // Show modal after 3 seconds
        }
      }, []);
    
      const [visible, setVisible] = useState(true);

    
  return (
    <div>
    <HorizentolCategories  />
    <div className="relative max-w-[1920px] w-full mx-auto mb-4">
    <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`carousel-image-${index}`}
              className="w-full flex-shrink-0 object-cover"
            />
          ))}
        </div>
      </div>
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4 py-2 text-white bg-dark-blue rounded-r-[5px] transition"
      >
        &#8592;
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 text-white bg-dark-blue rounded-l-[5px] transition"
      >
        &#8594;
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-[10px] h-[10px] rounded-full transition ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>

    <InfoSection/>
    <div className='flex flex-col md:flex-row gap-2 xl:gap-4 sm:px-4 py-0 max-w-[1920px] mx-auto mt-8'>
      <BundleDeal/>
      <FlashDeal/>
    </div>

    <div className='flex flex-col md:flex-row gap-2 xl:gap-4 sm:p-4 max-w-[1920px] mx-auto'>
      <TrendyFashion/>
      <OneDollarShop/>
    </div>

    <VidCarousel />
    <ProductCard1 />
   
    {visible && (
    <div className="fixed bottom-2 right-2 w-25 sm:w-30 bg-white p-2 rounded-xl shadow-lg border border-gray-300 z-9999">
      {/* Blue Box with GIF */}
      <div className="h-17 sm:h-20 bg-[#002882] rounded-lg flex justify-center items-center">
        <img
          src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXAzbDVrNjB0aDZ2YXUwaTcxcmd1NXlpYzAwcnJ5ZnpvN2FwdXd4NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/mIzhcjFBGFmOhkoVEn/giphy.gif"
          alt="GIF"
          className="w-4/4 h-4/4 object-cover rounded-lg"
        />
      </div>

      {/* Close Button */}
      <button
        className="flex justify-center items-center mx-auto mt-1 w-6 h-6"
        onClick={() => setVisible(false)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M12 1.81055C6.15 1.81055 1.5 6.46055 1.5 12.3105C1.5 18.1605 6.15 22.8105 12 22.8105C17.85 22.8105 22.5 18.1605 22.5 12.3105C22.5 6.46055 17.85 1.81055 12 1.81055ZM12 21.3105C7.05 21.3105 3 17.2605 3 12.3105C3 7.36055 7.05 3.31055 12 3.31055C16.95 3.31055 21 7.36055 21 12.3105C21 17.2605 16.95 21.3105 12 21.3105Z"
            fill="#F04438"
          />
          <path
            d="M16.05 17.5605L12 13.5105L7.95 17.5605L6.75 16.3605L10.8 12.3105L6.75 8.26055L7.95 7.06055L12 11.1105L16.05 7.06055L17.25 8.26055L13.2 12.3105L17.25 16.3605L16.05 17.5605Z"
            fill="#F04438"
          />
        </svg>
      </button>
    </div>
  )}
    {showModal && (
 <div 
 className="fixed inset-0 flex items-center p-4 md:p-6 2xl:p-10 justify-center bg-black/70 z-[9999]" 
 onClick={() => setShowModal(false)} // ❌ Background click closes modal
>
 <div 
   className="bg-[#FCFCFC] sm:p-4 2xl:p-7 rounded-lg shadow-lg max-w-full w-[550px] flex flex-col gap-5 relative"
   onClick={(e) => e.stopPropagation()} // ✅ Prevent closing on modal content click
 >
      <button 
        className="absolute -top-4 -right-4 w-10 h-10 flex items-center justify-center rounded-full bg-[#002882] text-white"
        onClick={() => setShowModal(false)} // 🛠️ Corrected Here!
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
          <g clipPath="url(#clip0_7135_111246)">
            <rect width="36" height="36" fill="url(#paint0_radial_7135_111246)"/>
            <path d="M18 0C7.97143 0 0 7.97143 0 18C0 28.0286 7.97143 36 18 36C28.0286 36 36 28.0286 36 18C36 7.97143 28.0286 0 18 0ZM24.9429 27L18 20.0571L11.0571 27L9 24.9429L15.9429 18L9 11.0571L11.0571 9L18 15.9429L24.9429 9L27 11.0571L20.0571 18L27 24.9429L24.9429 27Z" fill="#002882"/>
          </g>
          <defs>
            <radialGradient id="paint0_radial_7135_111246" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(18 18) rotate(90) scale(18)">
              <stop offset="0.80208" stopColor="white"/>
              <stop offset="1" stopColor="white" stopOpacity="0"/>
            </radialGradient>
            <clipPath id="clip0_7135_111246">
              <rect width="36" height="36" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </button>
      <div className="w-full flex items-center justify-center">
        <form className=" px-2 sm:px-5 md:px-2">
        <div className='hidden md:block'>
        <h2 className="text-2xl text-center font-bold">Register/Sign in</h2>
        <div className="py-2 text-center flex items-center justify-center gap-1">
  <div className="2xl:w-4 2xl:h-4 flex items-center justify-center bg-[#12B76A] rounded-full border border-[#12B76A]">
    <svg
      className="w-3 h-3 text-white"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  </div>
  <span className='text-sm 2xl:text-[16px]'>Your Information is Protected</span>
</div>
         
        </div>
         
          {!showPassword ? (
              <div className="mb-4">
                <label className="block text-blue-900">Email</label>
                <Input type="text" value={email} placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)} />
              </div>
            ) : (
              <div className="mb-4">
                <label className="block text-blue-900">Password</label>
                <Input type="password" value={password} placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)} />
              </div>
            )}

            <FormButton
              onClick={(e) => {
                e.preventDefault(); 
                setShowPassword(true); 
              }}
              className="bg-blue-900 text-white w-full mb-1 cursor-pointer"
            >
              Continue
            </FormButton>
            <p 
              className="mt-2 text-center text-sm 2xl:text-base cursor-pointer" 
              onClick={() => setIsModalOpen(true)}
            >
              Trouble Signing in?
            </p>
          <div className="flex items-center w-full mt-2">
      <div className="flex-1 h-px bg-gray-300"></div>
      <span className="px-3 text-gray-500 text-lg 2xl:text-xl">Or continue with</span>
       <div className="flex-1 h-px bg-gray-300"></div>
       </div>
       <div className='flex flex-col gap-1 mt-2'>
       <FormButton className="bg-white font-semibold text-black border border-gray-300 !rounded-full 2xl:py-2 px-4 w-full mb-1 cursor-pointer">
       <svg xmlns="http://www.w3.org/2000/svg" className='w-5 sm:w-6' viewBox="0 0 36 36" fill="none">
  <path d="M9.93 16.185C12.09 20.43 15.57 23.91 19.815 26.07L23.115 22.77C23.535 22.35 24.12 22.23 24.645 22.395C26.325 22.95 28.125 23.25 30 23.25C30.3978 23.25 30.7794 23.408 31.0607 23.6893C31.342 23.9706 31.5 24.3522 31.5 24.75V30C31.5 30.3978 31.342 30.7794 31.0607 31.0607C30.7794 31.342 30.3978 31.5 30 31.5C23.237 31.5 16.751 28.8134 11.9688 24.0312C7.1866 19.249 4.5 12.763 4.5 6C4.5 5.60218 4.65804 5.22064 4.93934 4.93934C5.22064 4.65804 5.60218 4.5 6 4.5H11.25C11.6478 4.5 12.0294 4.65804 12.3107 4.93934C12.592 5.22064 12.75 5.60218 12.75 6C12.75 7.875 13.05 9.675 13.605 11.355C13.77 11.88 13.65 12.465 13.23 12.885L9.93 16.185Z" fill="#1A1A1A"/>
</svg>
  <span className="text-center text-sm 2xl:text-base flex-1">Phone</span>
</FormButton>
       <FormButton className="bg-white font-semibold text-black border border-gray-300 !rounded-full 2xl:py-2 px-4 w-full mb-1 cursor-pointer">
  <svg xmlns="http://www.w3.org/2000/svg" className='w-5 sm:w-6' viewBox="0 0 36 36" fill="none">
    <path d="M32.7083 15.0623H31.5V15H18V21H26.4773C25.2405 24.4928 21.9172 27 18 27C13.0297 27 9 22.9702 9 18C9 13.0297 13.0297 9 18 9C20.2943 9 22.3815 9.8655 23.9708 11.2792L28.2135 7.0365C25.5345 4.53975 21.951 3 18 3C9.71625 3 3 9.71625 3 18C3 26.2838 9.71625 33 18 33C26.2838 33 33 26.2838 33 18C33 16.9943 32.8965 16.0125 32.7083 15.0623Z" fill="#FFC107"/>
    <path d="M4.72656 11.0183L9.65481 14.6325C10.9883 11.331 14.2178 9 17.9971 9C20.2913 9 22.3786 9.8655 23.9678 11.2793L28.2106 7.0365C25.5316 4.53975 21.9481 3 17.9971 3C12.2356 3 7.23906 6.25275 4.72656 11.0183Z" fill="#FF3D00"/>
    <path d="M17.9983 32.9999C21.8728 32.9999 25.3933 31.5172 28.055 29.1059L23.4125 25.1774C21.8562 26.3617 19.954 27.002 17.9983 26.9999C14.0968 26.9999 10.784 24.5122 9.53603 21.0404L4.64453 24.8092C7.12703 29.6669 12.1685 32.9999 17.9983 32.9999Z" fill="#4CAF50"/>
    <path d="M32.7083 15.0623H31.5V15H18V21H26.4773C25.8857 22.6623 24.82 24.1149 23.412 25.1782L23.4142 25.1768L28.0568 29.1052C27.7283 29.4037 33 25.5 33 18C33 16.9943 32.8965 16.0125 32.7083 15.0623Z" fill="#1976D2"/>
  </svg>
  <span className="text-center text-sm 2xl:text-base flex-1">Google</span>
</FormButton>
<FormButton className="bg-white font-semibold text-black border border-gray-300 !rounded-full 2xl:py-2 px-4 w-full mb-1 cursor-pointer">
<svg xmlns="http://www.w3.org/2000/svg" className='w-5 sm:w-6' viewBox="0 0 36 36" fill="none">
  <g clip-path="url(#clip0_11160_31316)">
    <path d="M36 18C36 8.05894 27.9411 0 18 0C8.05894 0 0 8.05894 0 18C0 26.9842 6.58237 34.431 15.1875 35.7813V23.2031H10.6172V18H15.1875V14.0344C15.1875 9.52312 17.8748 7.03125 21.9864 7.03125C23.9558 7.03125 26.0156 7.38281 26.0156 7.38281V11.8125H23.7459C21.5099 11.8125 20.8125 13.2 20.8125 14.6236V18H25.8047L25.0066 23.2031H20.8125V35.7813C29.4176 34.431 36 26.9844 36 18Z" fill="#1877F2"/>
    <path d="M25.0066 23.2031L25.8047 18H20.8125V14.6236C20.8125 13.1999 21.5099 11.8125 23.7459 11.8125H26.0156V7.38281C26.0156 7.38281 23.9558 7.03125 21.9863 7.03125C17.8748 7.03125 15.1875 9.52313 15.1875 14.0344V18H10.6172V23.2031H15.1875V35.7813C16.1179 35.9271 17.0582 36.0002 18 36C18.9418 36.0002 19.8821 35.9271 20.8125 35.7813V23.2031H25.0066Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_11160_31316">
      <rect width="36" height="36" fill="white"/>
    </clipPath>
  </defs>
</svg>
  <span className="text-center text-sm 2xl:text-base flex-1">Facebook</span>
</FormButton>
<FormButton className="bg-white font-semibold text-black border border-gray-300 !rounded-full 2xl:py-2 px-4 w-full mb-1 cursor-pointer">
<svg xmlns="http://www.w3.org/2000/svg" className='w-5 sm:w-6' viewBox="0 0 36 36" fill="none">
  <path d="M25.5728 30.42C24.1028 31.845 22.4978 31.62 20.9528 30.945C19.3178 30.255 17.8178 30.225 16.0928 30.945C13.9328 31.875 12.7928 31.605 11.5028 30.42C4.1828 22.875 5.26281 11.385 13.5728 10.965C15.5978 11.07 17.0078 12.075 18.1928 12.165C19.9628 11.805 21.6578 10.77 23.5478 10.905C25.8128 11.085 27.5228 11.985 28.6478 13.605C23.9678 16.41 25.0778 22.575 29.3678 24.3C28.5128 26.55 27.4028 28.785 25.5578 30.435L25.5728 30.42ZM18.0428 10.875C17.8178 7.53 20.5328 4.77 23.6528 4.5C24.0878 8.37 20.1428 11.25 18.0428 10.875Z" fill="black"/>
</svg>
  <span className="text-center text-sm 2xl:text-base flex-1">Apple</span>
</FormButton>
       </div>
     
       <p className="text-center mt-3 text-gray-500 text-sm 2xl:text-base">
  By continuing, you confirm that you‘re an adult and you’ve read and accepted our   
  <a href="#" className="underline text-gray mx-1">AliExpress</a>
  <a href="#" className="underline text-gray mx-1">Membership Agreement</a> and 
  <a href="#" className="underline text-gray mx-1">Privacy Policy</a>.
</p>
   <p className='text-center mt-1 text-gray-500'>Why choose a location?</p>

        </form>
      </div>
    </div>
  </div>
)}

    </div>
  )
}

export default Home