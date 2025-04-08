import React, { useEffect, useRef, useState } from 'react'
import AccountSideBar from '../Components/AccountSideBar'
import CheckBox from '../Components/CheckBox'
import Image2 from "/src/Images/Image2.png";
import reviewicon from "/src/Images/reviewicon.png";
import { div, iframe } from 'framer-motion/client';
import { useNavigate } from 'react-router-dom';

function EditReview() {
  
  const [reviewImages,setReviewImages]=useState([])
  const [reviewVideo,setReviewvideo]=useState(null)
  const [activeModal, setActiveModal] = useState(null);
  const [closing, setClosing] = useState(false); // New state for closing animation
    
  const openModal = (modalName) => {
    if (rating.productquality >= 1 && rating.shippingservice >= 1 && rating.sellerservice >= 1) { // Ensure at least 1 star is selected
      setActiveModal(modalName);
      setClosing(false);
    }else{
      return false
    }
  };
  const closeModal = () => {
    setClosing(true); // Trigger closing animation
    setTimeout(() => {
      setActiveModal(null); // Close the modal after animation
      setClosing(false);
    }, 390); // Match the animation duration
  };
  const [rating, setRating] = useState({
    productquality: 0,
    shippingservice: 0,
    sellerservice: 0,
  });

  const handleRating = (category, star) => {
    setRating((prev) => ({
      ...prev,
      [category]: star,
    }));
  };
     useEffect(()=>{
      console.log(rating)
     },[rating]) 
      const uploadReviewPhotos = (event) => {
        const allowedTypes = ["image/png", "image/jpeg", "image/jpg", "application/pdf"];
        console.log(event);
        
          for (let i = 0; i < event.length; i++) {
            const file=event[i]
            if(allowedTypes.includes(file.type)){
              
              if(file.type==="application/pdf"){
                let fileUrl=URL.createObjectURL(file)
                setReviewImages((prev)=>[...prev,fileUrl])
              }else{
                compressImage(event[i], (compressedBlob) => {
                  let imageUrl = URL.createObjectURL(compressedBlob);
                  setReviewImages((prev) => [...prev, imageUrl]);
                });
              }
            }else{
              alert('Please upload a JPEG, PNG, JPG, or PDF file.')
            }
            
            
          }
        
        
       
      };
      
      // Compress Image Function
      const compressImage = (file, callback) => {
        
        const reader = new FileReader();
        reader.readAsDataURL(file);
      
        reader.onload = function (event) {
          const img = new Image();
          img.src = event.target.result;
      
          img.onload = function () {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            const maxWidth = 1024; // Adjust maximum width
            const maxHeight = 1024; // Adjust maximum height
            let width = img.width;
            let height = img.height;
      
            if (width > maxWidth || height > maxHeight) {
              if (width > height) {
                height *= maxWidth / width;
                width = maxWidth;
              } else {
                width *= maxHeight / height;
                height = maxHeight;
              }
            }
      
            canvas.width = width;
            canvas.height = height;
            ctx.drawImage(img, 0, 0, width, height);
      
            function attemptCompression(quality) {
              canvas.toBlob((blob) => {
                if (blob.size <= 500 * 1024) {
                  callback(blob);
                } else if (quality > 0.1) {
                  attemptCompression(quality - 0.1);
                }
              }, "image/jpeg", quality);
            }
      
            attemptCompression(0.8);
          };
        };
      };
      

      const removeImage=(i)=>{
        const filterImages=reviewImages.filter((item,index)=>index!==i)
        setReviewImages(filterImages)
      }
      
      const videoInputRef=useRef(null);
      const uploadReviewVideo=(event)=>{
        if (event.length > 0) {
          let videoUrl  = URL.createObjectURL(event[0]); // First file ko process karo
          setReviewvideo(videoUrl );
      }
      }
      
      const removeVideo=()=>{
        URL.revokeObjectURL(reviewVideo);
        setReviewvideo(null)
        if (videoInputRef.current) {
          videoInputRef.current.value = "";
        }
      }

      const navigate=useNavigate();

      const submitReview = (e) => {
        e.preventDefault(); // Prevent page reload
        if (rating.productquality >= 1 && rating.shippingservice >= 1 && rating.sellerservice >= 1) {
          setTimeout(() => {
            navigate('/Reviews'); // 3 seconds baad navigate karega
          }, 3000);
        }else{
          alert("Please select at least 1 star before submitting.");
        }
        
      };
  return (
    <div className='sm:flex gap-2 sm:gap-4 sm:p-4'>
      <h2 className="flex items-center bg-natural-0 py-2 border-b border-natural-color sm:hidden text-lg font-semibold"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
  <path d="M21 12L15 18L21 24" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg> Leave a review</h2>
      <div className="flex sm:hidden min-w-0 gap-2 px-3 sm:p-4 mt-3 rounded-lg">
        <img
          src={Image2}
          alt="Product"
          className="w-15 h-15 rounded-md"
        />
        <div>
          <p className="text-xs text-[#333] truncate">Wifi doorbell Camera</p>
          <p className="font-semibold text-[10px] text-gray-500">White and gray / 8</p>
        </div>
      </div>
        <div className='hidden md:block'><AccountSideBar/></div>
        <div className='px-3 sm:px-0'>
        
        <h2 className="hidden sm:block text-lg font-semibold">Leave a review</h2>
      {/* Product Section */}
      <form onSubmit={submitReview} className='flex mt-3 gap-4'>
      <div className="hidden sm:block items-center min-w-0 gap-4 border border-natural-color p-4 rounded-lg">
        <img
          src={Image2}
          alt="Product"
          className="w-32 h-32 rounded-md"
        />
        <div>
          <p className="font-semibold truncate">Wifi doorbell Camera</p>
          <p className="text-sm text-gray-500">White and gray / 8</p>
          <p className="text-sm text-gray-500">QTY: 01</p>
        </div>
      </div>
      <div className="w-full sm:p-4 border-natural-color border-y sm:border sm:rounded-lg bg-white">
      
      
      {/* Content Section */}
      <h3 className="sm:mt-4 font-medium">Content</h3>
      <div className='flex gap-4 mt-2'>
      <div className="w-[50%] ">
        {/* Upload Photo */}
        <label htmlFor='uploadReviewPhoto' className="border-dashed border border-natural-gray py-1 sm:py-2 w-max px-2 sm:px-4 rounded-lg flex flex-col items-center cursor-pointer ">
        <svg xmlns="http://www.w3.org/2000/svg" className='w-6 sm:w-9' viewBox="0 0 36 37" fill="none">
          <path d="M17.9969 10.3998C17.9969 12.5481 17.1435 14.6083 15.6244 16.1274C14.1054 17.6464 12.0451 18.4998 9.89688 18.4998C7.74862 18.4998 5.68835 17.6464 4.16931 16.1274C2.65027 14.6083 1.79688 12.5481 1.79688 10.3998C1.79688 8.25155 2.65027 6.19128 4.16931 4.67224C5.68835 3.1532 7.74862 2.2998 9.89688 2.2998C12.0451 2.2998 14.1054 3.1532 15.6244 4.67224C17.1435 6.19128 17.9969 8.25155 17.9969 10.3998ZM10.7969 6.7998C10.7969 6.56111 10.7021 6.33219 10.5333 6.16341C10.3645 5.99463 10.1356 5.8998 9.89688 5.8998C9.65818 5.8998 9.42926 5.99463 9.26048 6.16341C9.0917 6.33219 8.99688 6.56111 8.99688 6.7998V9.4998H6.29688C6.05818 9.4998 5.82926 9.59463 5.66048 9.76341C5.4917 9.93219 5.39688 10.1611 5.39688 10.3998C5.39688 10.6385 5.4917 10.8674 5.66048 11.0362C5.82926 11.205 6.05818 11.2998 6.29688 11.2998H8.99688V13.9998C8.99688 14.2385 9.0917 14.4674 9.26048 14.6362C9.42926 14.805 9.65818 14.8998 9.89688 14.8998C10.1356 14.8998 10.3645 14.805 10.5333 14.6362C10.7021 14.4674 10.7969 14.2385 10.7969 13.9998V11.2998H13.4969C13.7356 11.2998 13.9645 11.205 14.1333 11.0362C14.3021 10.8674 14.3969 10.6385 14.3969 10.3998C14.3969 10.1611 14.3021 9.93219 14.1333 9.76341C13.9645 9.59463 13.7356 9.4998 13.4969 9.4998H10.7969V6.7998ZM25.1969 7.6998H19.4243C19.2478 7.07816 19.0109 6.47528 18.7169 5.8998H25.1969C26.629 5.8998 28.0026 6.46873 29.0153 7.48143C30.028 8.49412 30.5969 9.86764 30.5969 11.2998V25.6998C30.5969 27.132 30.028 28.5055 29.0153 29.5182C28.0026 30.5309 26.629 31.0998 25.1969 31.0998H10.7969C9.36471 31.0998 7.9912 30.5309 6.9785 29.5182C5.9658 28.5055 5.39688 27.132 5.39688 25.6998V19.2198C5.96808 19.5126 6.56808 19.7484 7.19688 19.9272V25.6998C7.19688 26.3712 7.38048 26.9994 7.70088 27.5358L16.1051 19.2774C16.6099 18.7816 17.2893 18.5038 17.9969 18.5038C18.7045 18.5038 19.3838 18.7816 19.8887 19.2774L28.2947 27.5358C28.6238 26.9799 28.7972 26.3458 28.7969 25.6998V11.2998C28.7969 10.345 28.4176 9.42935 27.7425 8.75422C27.0673 8.07909 26.1517 7.6998 25.1969 7.6998ZM25.1969 13.9998C25.1969 14.3544 25.127 14.7055 24.9914 15.0331C24.8557 15.3606 24.6568 15.6583 24.4061 15.909C24.1553 16.1597 23.8577 16.3586 23.5301 16.4943C23.2025 16.63 22.8514 16.6998 22.4969 16.6998C22.1423 16.6998 21.7912 16.63 21.4636 16.4943C21.1361 16.3586 20.8384 16.1597 20.5877 15.909C20.337 15.6583 20.1381 15.3606 20.0024 15.0331C19.8667 14.7055 19.7969 14.3544 19.7969 13.9998C19.7969 13.2837 20.0813 12.597 20.5877 12.0906C21.094 11.5843 21.7808 11.2998 22.4969 11.2998C23.213 11.2998 23.8997 11.5843 24.4061 12.0906C24.9124 12.597 25.1969 13.2837 25.1969 13.9998ZM23.3969 13.9998C23.3969 13.7611 23.3021 13.5322 23.1333 13.3634C22.9645 13.1946 22.7356 13.0998 22.4969 13.0998C22.2582 13.0998 22.0293 13.1946 21.8605 13.3634C21.6917 13.5322 21.5969 13.7611 21.5969 13.9998C21.5969 14.2385 21.6917 14.4674 21.8605 14.6362C22.0293 14.805 22.2582 14.8998 22.4969 14.8998C22.7356 14.8998 22.9645 14.805 23.1333 14.6362C23.3021 14.4674 23.3969 14.2385 23.3969 13.9998ZM8.97528 28.8066C9.52781 29.1301 10.1566 29.3003 10.7969 29.2998H25.1969C25.8629 29.2998 26.4839 29.1198 27.0185 28.8066L18.6269 20.5626C18.4586 20.3977 18.2325 20.3053 17.9969 20.3053C17.7613 20.3053 17.5351 20.3977 17.3669 20.5626L8.97528 28.8066Z" fill="#1A1A1A"/>
        </svg> <p className='text-sm sm:text-base'>Photo</p>
        </label>
        <input type="file" onChange={(e)=>uploadReviewPhotos(e.target.files)} multiple accept="image/png, image/jpeg, image/jpg, application/pdf" id='uploadReviewPhoto' className='hidden' />
        <div className='flex flex-wrap gap-2 mt-2'>
          {reviewImages && reviewImages.map((images,index)=>(
            <div key={index} className='relative'>
              <img  src={images} className='w-15 sm:w-20 rounded-lg object-cover aspect-square' />
              <button className='absolute -top-1 -right-1 bg-white' onClick={()=>removeImage(index)}>
              <svg xmlns="http://www.w3.org/2000/svg"  width="16" height="16" viewBox="0 0 36 36" fill="none">
                <path d="M18 0C7.97143 0 0 7.97143 0 18C0 28.0286 7.97143 36 18 36C28.0286 36 36 28.0286 36 18C36 7.97143 28.0286 0 18 0ZM24.9429 27L18 20.0571L11.0571 27L9 24.9429L15.9429 18L9 11.0571L11.0571 9L18 15.9429L24.9429 9L27 11.0571L20.0571 18L27 24.9429L24.9429 27Z" fill="#002882"/>
              </svg>
              </button>
            </div>
          ))}
        </div>
        {/* Upload Video */}
        

      </div>
      <div className="w-[50%] ">
      <label htmlFor='uploadReviewVideo' className=" border-dashed border border-natural-gray py-1 sm:py-2 px-2 sm:px-4 rounded-lg w-max flex flex-col items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className='w-6 sm:w-9' viewBox="0 0 36 37" fill="none">
  <path d="M8.99688 5.90015C7.56471 5.90015 6.1912 6.46907 5.1785 7.48177C4.1658 8.49447 3.59688 9.86798 3.59688 11.3001V18.9627C4.15208 18.5043 4.75565 18.1077 5.39688 17.7801V11.3001C5.39688 10.3454 5.77616 9.42969 6.45129 8.75456C7.12642 8.07943 8.0421 7.70015 8.99688 7.70015H17.9969C18.9517 7.70015 19.8673 8.07943 20.5425 8.75456C21.2176 9.42969 21.5969 10.3454 21.5969 11.3001V22.1001C21.5969 22.7496 21.4212 23.3869 21.0885 23.9446C20.7558 24.5023 20.2784 24.9597 19.7069 25.2681C19.7927 25.9082 19.8168 26.5549 19.7789 27.1995C20.8364 26.8299 21.7527 26.1404 22.401 25.2267C23.0492 24.3131 23.3973 23.2204 23.3969 22.1001V21.5223L28.8635 25.2969C29.2012 25.53 29.5962 25.6663 30.0059 25.691C30.4155 25.7158 30.824 25.628 31.1874 25.4373C31.5507 25.2465 31.8549 24.9601 32.0672 24.6089C32.2794 24.2577 32.3915 23.8551 32.3915 23.4447V9.95375C32.3912 9.54355 32.2788 9.14122 32.0665 8.79028C31.8541 8.43934 31.5498 8.15313 31.1866 7.9626C30.8233 7.77207 30.4149 7.68447 30.0054 7.70928C29.596 7.73409 29.2011 7.87035 28.8635 8.10335L23.3969 11.8761V11.3001C23.3969 9.86798 22.8279 8.49447 21.8153 7.48177C20.8026 6.46907 19.429 5.90015 17.9969 5.90015H8.99688ZM23.3969 14.0649L29.8859 9.58295C29.9534 9.53631 30.0325 9.50905 30.1144 9.50412C30.1964 9.49919 30.2781 9.51677 30.3508 9.55496C30.4235 9.59316 30.4843 9.6505 30.5268 9.7208C30.5692 9.79109 30.5916 9.87165 30.5915 9.95375V23.4447C30.5916 23.5268 30.5692 23.6074 30.5268 23.6777C30.4843 23.748 30.4235 23.8053 30.3508 23.8435C30.2781 23.8817 30.1964 23.8993 30.1144 23.8944C30.0325 23.8894 29.9534 23.8622 29.8859 23.8155L23.3969 19.3335V14.0649ZM17.9969 26.6001C17.9969 28.7484 17.1435 30.8087 15.6244 32.3277C14.1054 33.8468 12.0451 34.7001 9.89688 34.7001C7.74862 34.7001 5.68835 33.8468 4.16931 32.3277C2.65027 30.8087 1.79688 28.7484 1.79688 26.6001C1.79688 24.4519 2.65027 22.3916 4.16931 20.8726C5.68835 19.3535 7.74862 18.5001 9.89688 18.5001C12.0451 18.5001 14.1054 19.3535 15.6244 20.8726C17.1435 22.3916 17.9969 24.4519 17.9969 26.6001ZM10.7969 23.0001C10.7969 22.7615 10.7021 22.5325 10.5333 22.3638C10.3645 22.195 10.1356 22.1001 9.89688 22.1001C9.65818 22.1001 9.42926 22.195 9.26048 22.3638C9.0917 22.5325 8.99688 22.7615 8.99688 23.0001V25.7001H6.29688C6.05818 25.7001 5.82926 25.795 5.66048 25.9638C5.4917 26.1325 5.39688 26.3615 5.39688 26.6001C5.39688 26.8388 5.4917 27.0678 5.66048 27.2365C5.82926 27.4053 6.05818 27.5001 6.29688 27.5001H8.99688V30.2001C8.99688 30.4388 9.0917 30.6678 9.26048 30.8365C9.42926 31.0053 9.65818 31.1001 9.89688 31.1001C10.1356 31.1001 10.3645 31.0053 10.5333 30.8365C10.7021 30.6678 10.7969 30.4388 10.7969 30.2001V27.5001H13.4969C13.7356 27.5001 13.9645 27.4053 14.1333 27.2365C14.3021 27.0678 14.3969 26.8388 14.3969 26.6001C14.3969 26.3615 14.3021 26.1325 14.1333 25.9638C13.9645 25.795 13.7356 25.7001 13.4969 25.7001H10.7969V23.0001Z" fill="#1A1A1A"/>
</svg> <p className='text-sm sm:text-base'>Video</p>
        </label>
        <input type="file" ref={videoInputRef} onChange={(e)=>uploadReviewVideo(e.target.files)} multiple accept="video/*" id='uploadReviewVideo' className='hidden' />

        <div className='mt-2'>
          {reviewVideo && (
            <div className='relative max-w-[250px]'>
              <video controls className='rounded-[10px]'>
            <source src={reviewVideo} className='w-full' type="video/mp4" />
            
          </video>
          <button className='absolute -top-1 -right-1 ' onClick={()=>removeVideo()}>
            <svg xmlns="http://www.w3.org/2000/svg" className='bg-white rounded-full'  width="16" height="16" viewBox="0 0 36 36" fill="none">
                <path d="M18 0C7.97143 0 0 7.97143 0 18C0 28.0286 7.97143 36 18 36C28.0286 36 36 28.0286 36 18C36 7.97143 28.0286 0 18 0ZM24.9429 27L18 20.0571L11.0571 27L9 24.9429L15.9429 18L9 11.0571L11.0571 9L18 15.9429L24.9429 9L27 11.0571L20.0571 18L27 24.9429L24.9429 27Z" fill="#002882"/>
              </svg>
          </button>
            </div>
          )}
        </div>
      </div>
      </div>
      {/* Tags */}
      <div className="hidden sm:flex flex-wrap gap-2 mt-4">
        {["Fine", "Very happy with items", "Good, Value for money", "Perfect! thanks valuebox", "really comfortable", "really nice"].map(
          (tag, index) => (
            <span
              key={index}
              className="flex gap-2 items-center px-1 py-1 border border-natural-gray-20 rounded-full text-sm cursor-pointer"
            >
             <img className='w-7 h-7 rounded-full' src={Image2} alt="" /> <span className='px-1'>{tag}</span>
            </span>
          )
        )}
      </div>
      
      {/* Review Input */}
      <textarea
        placeholder="Share your thoughts or select a brief review above."
        className="w-full mt-4 p-3 border border-natural-gray-20 rounded-lg "
        rows={4}
      ></textarea>
      
      {/* Ratings */}
      <div className="mt-4">
      {["Product Quality", "Shipping Service", "Seller Service"].map(
        (category, index) => {
          const key = category.toLowerCase().split(" ").join(""); // Removing spaces
          return (
            <div key={index} className="flex items-center mt-2">
              <span className="flex w-full max-w-[200px] gap-1">
                {category} <p className="text-mon-yellow">*</p>
              </span>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className="text-xl cursor-pointer"
                    onClick={() => handleRating(key, star)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      {/* Gradient Define */}
                      <defs>
                        <linearGradient id="star-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#FFC136" />
                          <stop offset="20%" stopColor="#FAC142" />
                          <stop offset="50%" stopColor="#FFD168" />
                          <stop offset="80%" stopColor="#F5BC3A" />
                          <stop offset="100%" stopColor="#E09B00" />
                        </linearGradient>
                      </defs>

                      {/* Star Path */}
                      <path
                        d="M10.7125 0.834866L7.78319 7.04035L1.22918 8.03866C0.053853 8.21677 -0.417174 9.73064 0.435161 10.5977L5.17683 15.4253L4.05534 22.2447C3.85347 23.4774 5.09609 24.4007 6.13683 23.8242L12 20.6043L17.8632 23.8242C18.9039 24.396 20.1465 23.4774 19.9447 22.2447L18.8232 15.4253L23.5648 10.5977C24.4172 9.73064 23.9461 8.21677 22.7708 8.03866L16.2168 7.04035L13.2875 0.834866C12.7626 -0.271247 11.2419 -0.285308 10.7125 0.834866Z"
                        fill={rating[key] >= star ? "url(#star-gradient)" : ""} stroke="url(#star-gradient)" strokeWidth="1"
                      />
                    </svg>
                    
                  </span>
                ))}
              </div>
              <span className="ml-3 text-natural-gray ">
          {rating[key] === 3 ? "Satisfactory" : rating[key] === 4 ? "Good" : rating[key] === 5 ? "Excellent" : ""}
        </span>
            </div>
          );
        }
      )}
    </div>

      <div className="flex items-center flex-col py-4 text-gray-600 text-sm space-y-2">
      <p>
        Please follow the <a href="#" className="text-dark-blue">Review Guideline</a> when writing reviews
      </p>
      <label className="flex items-center space-x-2 cursor-pointer select-none">
        <CheckBox/>
        <span>Hide your profile photo and name as</span>
        <span className="flex items-center space-x-1 text-gray-500">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C10.6008 3.99974 9.22593 4.36649 8.01273 5.06363C6.79952 5.76077 5.79038 6.76392 5.08603 7.97295C4.38168 9.18199 4.00675 10.5546 3.99868 11.9538C3.9906 13.3531 4.34966 14.7299 5.04001 15.947C5.50662 15.3406 6.10644 14.8496 6.7931 14.512C7.47975 14.1744 8.23485 13.9992 9.00001 14H15C15.7652 13.9992 16.5203 14.1744 17.2069 14.512C17.8936 14.8496 18.4934 15.3406 18.96 15.947C19.6504 14.7299 20.0094 13.3531 20.0013 11.9538C19.9933 10.5546 19.6183 9.18199 18.914 7.97295C18.2096 6.76392 17.2005 5.76077 15.9873 5.06363C14.7741 4.36649 13.3993 3.99974 12 4ZM19.943 18.076C20.0683 17.9127 20.1883 17.7453 20.303 17.574C21.4116 15.9267 22.0026 13.9856 22 12C22 6.477 17.523 2 12 2C6.47701 2 2.00001 6.477 2.00001 12C1.99686 14.1968 2.72005 16.3329 4.05701 18.076L4.05201 18.094L4.40701 18.507C5.3449 19.6035 6.50939 20.4836 7.82024 21.0866C9.13109 21.6897 10.5571 22.0013 12 22C12.216 22 12.4307 21.9933 12.644 21.98C14.4484 21.8662 16.1877 21.2629 17.675 20.235C18.3863 19.7443 19.031 19.1635 19.593 18.507L19.948 18.094L19.943 18.076ZM12 6C11.2044 6 10.4413 6.31607 9.87869 6.87868C9.31608 7.44129 9.00001 8.20435 9.00001 9C9.00001 9.79565 9.31608 10.5587 9.87869 11.1213C10.4413 11.6839 11.2044 12 12 12C12.7957 12 13.5587 11.6839 14.1213 11.1213C14.6839 10.5587 15 9.79565 15 9C15 8.20435 14.6839 7.44129 14.1213 6.87868C13.5587 6.31607 12.7957 6 12 6Z" fill="#999999"/>
</svg>
          <span>Fa****is</span>
        </span>
      </label>
    </div>
      {/* Submit Button */}
      <button className="w-full bg-dark-blue text-white py-2 mt-6 rounded-lg" onClick={()=>openModal('submitReview')}>
        Submit
      </button>

      {activeModal === "submitReview" && (
          <div
            className="fixed inset-0 bg-[#00000042] bg-opacity-50 flex justify-center p-3 items-center"
             // Click outside to close modal
          >
            <div className={`${closing ? 'animate-flyout' : 'animate-wiggle'} relative bg-natural-0 p-3 sm:p-6 rounded-[10px] sm:rounded-[15px] shadow-lg `} 
            onClick={(e) => e.stopPropagation()}>
            
                 
                             <div className="flex flex-col items-center justify-center">
      <div className=" w-full text-center">
        <div className="flex flex-col items-center">
          <div className="text-4xl mb-2"><img src={reviewicon} className='w-15 sm:w-20' alt="" /></div>
          <h2 className="text-xl text-natural-black font-medium">Reviewed successfully</h2>
          <p className="flex text-gray-600 mt-2 text-sm">
            You have submitted <span className="font-bold text-mon-yellow px-0.5"> 1 </span> review(s).{' '}
            <a href="#" className="flex text-natural-gray">Go to your reviews <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
  <path d="M10.5 8L14.5 12L10.5 16" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></a>
          </p>
        </div>
        <button variant="outline" className="mt-4 flex items-center px-2 py-1 mx-auto gap-2 border border-[#666] rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
  <path d="M3.625 10.625V15.625C3.625 15.9565 3.7567 16.2745 3.99112 16.5089C4.22554 16.7433 4.54348 16.875 4.875 16.875H16.125C16.4565 16.875 16.7745 16.7433 17.0089 16.5089C17.2433 16.2745 17.375 15.9565 17.375 15.625V10.625M10.5 12.5V2.1875M14.25 5.625L10.5 1.875L6.75 5.625" stroke="#666666" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg> Share
        </button>
      </div>
      
      <div className="w-full mt-4 flex items-center gap-4 bg-natural-color p-2 rounded-[10px]">
        <img
          src={Image2}
          alt="Profile"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex flex-col flex-grow">
          <h3 className="text-sm font-semibold">Zahir || Men’s Clothing</h3>
          <p className="text-xs font-medium text-dark-blue whitespace-nowrap">
            <span className="">67 Reviews</span> | {' '}
            <span className="">97% Positive rating</span> | {' '}
            <span className="">221 followers</span>
          </p>
        </div>
        <button variant="default" className="p-2 rounded-full text-natural-0 bg-dark-blue whitespace-nowrap flex"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
  <path d="M18 13.5H13V18.5C13 19.05 12.55 19.5 12 19.5C11.45 19.5 11 19.05 11 18.5V13.5H6C5.45 13.5 5 13.05 5 12.5C5 11.95 5.45 11.5 6 11.5H11V6.5C11 5.95 11.45 5.5 12 5.5C12.55 5.5 13 5.95 13 6.5V11.5H18C18.55 11.5 19 11.95 19 12.5C19 13.05 18.55 13.5 18 13.5Z" fill="#FCFCFC"/>
</svg>  Follow Shop</button>
      </div>
    </div>
                      
                     </div>
                             
                           
                         </div>
                       )}

    </div>
        </form>
       
      </div>
      
    </div>
  )
}

export default EditReview