import React, { useMemo, useState } from 'react'
import AccountSideBar from '../Components/AccountSideBar'
import Image2 from "/src/Images/Image2.png";
import Image3 from "/src/Images/Image3.png";
import { Link } from 'react-router-dom';

const reviews = [
    {
      id: 1,
      badge: "Welcome Deal",
      product: "Wifi doorbell Camera Smart Wi-Fi Video Intercom F1 Video Video Doorbell",
      image: Image2,
      rating: "Red/42",
      brand: "KKX Brand",
      price: "PKR 8,500",
      status: "pending", // ابھی ریویو نہیں ہوا
    },
    {
      id: 2,
      product: "Wifi doorbell Camera Smart Wi-Fi Video Intercom F1 Video Video Doorbell",
      image: Image3,
      rating: "Red/42",
      brand: "KKX Brand",
      price: "PKR 8,500",
      status: "pending",
    },
    {
      id: 3,
      product: "Wifi doorbell Camera Smart Wi-Fi Video Intercom F1 Video Video Doorbell",
      image: Image3,
      rating: "Red/42",
      brand: "KKX Brand",
      price: "PKR 8,500",
      status: "pending",
    },
    {
      id: 4,
      badge: "Welcome Deal",
      product: "Smart Wireless Security Camera",
      image: Image2,
      rating: "Black/32",
      brand: "XYZ Brand",
      price: "PKR 7,200",
      status: "reviewed", // ریویو ہو چکا ہے
    },
  ];
  

function Reviews() {
    const [activeTab,setActiveTab]=useState('pending')
    const FilteringReview=useMemo(()=>reviews.filter((item)=>item.status===activeTab),[activeTab])
    const pendingCount=useMemo(()=>reviews.filter((item)=>item.status==='pending').length,[])
    const reviewedCount=useMemo(()=>reviews.filter((item)=>item.status==='reviewed').length,[])

    console.log(activeTab)
  return (
    <div className='flex gap-2 sm:gap-4 md:p-6 max-w-[1920px] mx-auto'>
        <div className='hidden md:block'><AccountSideBar/></div>
        <div className="w-full">
      {/* Tabs */}
      <div className="hidden sm:flex pb-2 gap-4 p-4">
        
      <button
  onClick={() => setActiveTab("pending")}
  className={`relative pb-2 font-semibold ${activeTab === "pending" ? "text-dark-blue" : "text-[#666]"}
   before:absolute before:left-0 before:bottom-0 before:w-full before:h-1 before:bg-gradient-to-r before:from-[#FFC136] before:via-[#FFD168] before:to-[#E09B00] before:transition-all before:duration-300 before:rounded-full ${
    activeTab === "pending" ? "before:opacity-100" : "before:opacity-0"
  }`}
>
  Ready for review <span className="text-white bg-dark-blue w-5 p-0.5 rounded-full text-xs inline-block">{pendingCount}</span>
</button>

        <button onClick={()=>setActiveTab('reviewed')} className={`relative pb-2 font-semibold ${activeTab === "reviewed" ? "text-dark-blue" : "text-[#666]"}
   before:absolute before:left-0 before:bottom-0 before:w-full before:h-1 before:bg-gradient-to-r before:from-[#FFC136] before:via-[#FFD168] before:to-[#E09B00] before:transition-all before:duration-300 before:rounded-full ${
    activeTab === "reviewed" ? "before:opacity-100" : "before:opacity-0"
  }`}>
        Reviewed <span className='text-white bg-dark-blue w-5 p-0.5 rounded-full text-xs inline-block'>{reviewedCount}</span>
        </button>
        
      </div>
      <div className="flex sm:hidden pb-2 gap-4 p-4">
        
      <button
  onClick={() => setActiveTab("pending")}
  className={`relative pb-2 font-semibold ${activeTab === "pending" ? "text-natural-black" : "text-[#666]"}
   before:absolute before:left-5 before:bottom-0 before:w-[50%] before:mx-auto before:h-1 before:bg-[#1A1A1A] before:transition-all before:duration-300 ${
    activeTab === "pending" ? "before:opacity-100" : "before:opacity-0"
  }`}
>
  Ready for review 
</button>

        <button onClick={()=>setActiveTab('reviewed')} className={`relative pb-2 font-semibold ${activeTab === "reviewed" ? "text-natural-black" : "text-[#666]"}
   before:absolute before:left-5 before:bottom-0 before:w-[50%] before:mx-auto before:h-1 before:bg-[#1A1A1A] before:transition-all before:duration-300 ${
    activeTab === "reviewed" ? "before:opacity-100" : "before:opacity-0"
  }`}>
        Reviewed 
        </button>
        
      </div>

      {/* Title */}
      <div className={`${activeTab==='pending'?'md:border border-[#F2F2F2] p-4':''} sm:rounded-lg`}>
      {activeTab==='pending' && (
        <Link to='/EditReview' className='flex justify-between w-full'>
        <p className="md:text-lg font-semibold ">Quick Review All Items Below</p>
        <p className="md:text-lg font-semibold pl-2 flex items-center"> Review <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M10 8L14 12L10 16" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg></p>
        </Link>
      )}
      

{/* Review Items */}
<div className="mt-4 space-y-4">

  {FilteringReview.length>0 ?(
  activeTab==='pending'?(
    FilteringReview.map((review) => (
      <div key={review.id} className="flex w-full items-center gap-4 py-2 sm:p-4 border-y sm:border sm:rounded-md border-[#F2F2F2]">
        {/* Image */}
        <img src={review.image} alt="Product" className="w-16 h-16 rounded-md" />

        {/* Product Details */}
        <div className="flex-1 min-w-0 w-full">
          <div className="flex items-center gap-2">
            {review.badge && (
              <span className="text-xs bg-red-500 text-nowrap text-white px-2 py-1 rounded-md">
                {review.badge}
              </span>
            )}
            <h4 className="font-semibold truncate  md:max-w-[250px] lg:max-w-[400px]">
{review.product}
</h4>

          </div>
          <p className="text-gray-500 text-sm">{review.rating}</p>
          <p className="text-gray-600 text-sm">By {review.brand}</p>
        </div>

        {/* Review Button & Price */}
        <div className="flex flex-col items-end">
        {activeTab==='pending'?(
          <Link to='/EditReview' className="bg-dark-blue text-white px-4 py-2 rounded-md text-sm">
          Leave a Review
          </Link>
        ):(
          <Link to='/EditReview' className="bg-dark-blue text-white px-4 py-2 rounded-md text-sm">
          Edit Review
          </Link>
        )}
          
          <p className="text-gray-800 font-semibold mt-2">{review.price}</p>
        </div>
      </div>
    ))
  ):(
    FilteringReview.map((review) => (
      <div key={review.id} className=" w-full items-center gap-4 border-y sm:border sm:rounded-md border-[#F2F2F2]">
        <div className='flex w-full items-center gap-4 py-2 sm:p-4 bg-natural-color'>
          {/* Image */}
        <img src={review.image} alt="Product" className="w-16 h-16 rounded-md" />

{/* Product Details */}
<div className="flex-1 min-w-0 w-full">
  <div className="flex items-center gap-2">
    {review.badge && (
      <span className="text-xs bg-red-500 text-nowrap text-white px-2 py-1 rounded-md">
        {review.badge}
      </span>
    )}
    <h4 className="font-semibold truncate  md:max-w-[250px] lg:max-w-[400px]">
{review.product}
</h4>

  </div>
  <p className="text-gray-500 text-sm">{review.rating}</p>
  <p className="text-gray-600 text-sm">By {review.brand}</p>
</div>

{/* Review Button & Price */}
<div className="flex flex-col items-end">
{/* {activeTab==='pending'?(
  <Link to='/EditReview' className="bg-dark-blue text-white px-4 py-2 rounded-md text-sm">
  Leave a Review
  </Link>
):(
  <Link to='/EditReview' className="bg-dark-blue text-white px-4 py-2 rounded-md text-sm">
  Edit Review
  </Link>
)} */}
  
  <p className="text-gray-800 font-semibold mt-2">{review.price}</p>
</div>
        </div>
        <div className='px-2 sm:px-4'>
        <div className="flex items-center justify-between space-x-1 mt-3">
                      <div className="flex items-center space-x-1 mt-1">
                      {Array.from({ length: review.rating }, (_, i) => (
                        <span key={i} className="text-natural-black">
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-[15px] sm:w-[18px]' viewBox="0 0 24 24" fill="none">
                        <path d="M10.7125 0.834866L7.78319 7.04035L1.22918 8.03866C0.053853 8.21677 -0.417174 9.73064 0.435161 10.5977L5.17683 15.4253L4.05534 22.2447C3.85347 23.4774 5.09609 24.4007 6.13683 23.8242L12 20.6043L17.8632 23.8242C18.9039 24.396 20.1465 23.4774 19.9447 22.2447L18.8232 15.4253L23.5648 10.5977C24.4172 9.73064 23.9461 8.21677 22.7708 8.03866L16.2168 7.04035L13.2875 0.834866C12.7626 -0.271247 11.2419 -0.285308 10.7125 0.834866Z" fill="#1A1A1A"/>
                      </svg></span>
                      ))}
                      {Array.from({ length: 5 }, (_, i) => (
                        <span key={i} className="text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-[15px] sm:w-[18px]' viewBox="0 0 24 24" fill="none">
                        <path d="M8.46018 7.94876L7.93377 8.02895L1.37976 9.02726L1.379 9.02738C1.22157 9.05123 1.08756 9.16079 1.02679 9.35645C0.965647 9.55331 1.00804 9.75401 1.14831 9.8967L1.14858 9.89699L5.89026 14.7245L6.24595 15.0867L6.16358 15.5875L5.0422 22.4063C5.04217 22.4065 5.04214 22.4067 5.04211 22.4069C5.0421 22.4069 5.04209 22.407 5.04209 22.407C5.00468 22.6368 5.09731 22.8129 5.2316 22.914C5.3645 23.0141 5.51162 23.0274 5.65228 22.9494L5.65547 22.9477L11.5186 19.7278L12 19.4634L12.4814 19.7278L18.3445 22.9477L18.3447 22.9478C18.4867 23.0258 18.6358 23.0119 18.7691 22.9117C18.9032 22.811 18.9954 22.6361 18.9578 22.4065C18.9578 22.4064 18.9578 22.4064 18.9578 22.4063L17.8364 15.5875L17.7541 15.0867L18.1097 14.7245L22.8514 9.89699L22.8517 9.8967C22.992 9.75401 23.0344 9.55331 22.9732 9.35645C22.9124 9.16079 22.7784 9.05123 22.621 9.02738L22.6202 9.02726L16.0662 8.02895L15.5398 7.94876L15.3125 7.46723L12.384 1.26356C12.3839 1.26333 12.3838 1.26311 12.3837 1.26288C12.2932 1.07272 12.1415 1.00049 11.9983 1C11.8581 0.999521 11.7089 1.06727 11.6168 1.26175L8.46018 7.94876ZM8.46018 7.94876L8.68749 7.46723L11.6167 1.26212L8.46018 7.94876Z" stroke="#1A1A1A" strokeWidth="2"/>
                      </svg></span>
                      ))}
                      <span className="text-gray-500 text-sm ml-1">{review.status}</span>
                      </div>
                      <div className='hidden sm:flex gap-2 text-natural-gray'>
                        <img className='w-6 h-6 rounded-full' src={Image2} alt="" />
                        <p>Muhammad Arshad on Dec 06, 2024</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mt-2">{review.reviewText}</p>
                    
                    <div className='flex justify-between items-center'>
                    <div className='flex gap-1 sm:gap-2 my-4 text-natural-gray text-sm sm:text-base'>
                      <p className='flex items-center gap-1'><svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
                        <rect width="21.5385" height="20" fill="white"/>
                        <path d="M6.70312 15.2918L9.48518 17.2918C9.84415 17.6251 10.6518 17.7918 11.1903 17.7918H14.6006C15.6775 17.7918 16.8442 17.0418 17.1134 16.0418L19.2672 9.95847C19.7159 8.7918 18.9083 7.7918 17.5621 7.7918H13.9724C13.4339 7.7918 12.9852 7.37514 13.0749 6.7918L13.5236 4.12514C13.7031 3.37514 13.1647 2.5418 12.357 2.2918C11.639 2.0418 10.7416 2.37514 10.3826 2.87514L6.70312 7.95847" fill="#999999"/>
                        <path d="M2.125 15.2917V7.12508C2.125 5.95841 2.66346 5.54175 3.91987 5.54175H4.81731C6.07372 5.54175 6.61218 5.95841 6.61218 7.12508V15.2917C6.61218 16.4584 6.07372 16.8751 4.81731 16.8751H3.91987C2.66346 16.8751 2.125 16.4584 2.125 15.2917Z" fill="#999999"/>
                      </svg> 2.5k</p>
                      <p className='bg-natural-gray-20 w-px'></p>
                      <p>Replay</p>
                      <p className='bg-natural-gray-20 w-px'></p>
                      <p>Delete</p>
                      <p className='bg-natural-gray-20 w-px hidden sm:block'></p>
                      <button className='hidden sm:block'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                        <path d="M6.3724 10C6.3724 10.4421 6.1968 10.866 5.88424 11.1786C5.57168 11.4911 5.14776 11.6667 4.70573 11.6667C4.2637 11.6667 3.83978 11.4911 3.52722 11.1786C3.21466 10.866 3.03906 10.4421 3.03906 10C3.03906 9.55801 3.21466 9.13409 3.52722 8.82153C3.83978 8.50897 4.2637 8.33337 4.70573 8.33337C5.14776 8.33337 5.57168 8.50897 5.88424 8.82153C6.1968 9.13409 6.3724 9.55801 6.3724 10ZM12.2057 10C12.2057 10.4421 12.0301 10.866 11.7176 11.1786C11.405 11.4911 10.9811 11.6667 10.5391 11.6667C10.097 11.6667 9.67311 11.4911 9.36055 11.1786C9.04799 10.866 8.8724 10.4421 8.8724 10C8.8724 9.55801 9.04799 9.13409 9.36055 8.82153C9.67311 8.50897 10.097 8.33337 10.5391 8.33337C10.9811 8.33337 11.405 8.50897 11.7176 8.82153C12.0301 9.13409 12.2057 9.55801 12.2057 10ZM18.0391 10C18.0391 10.4421 17.8635 10.866 17.5509 11.1786C17.2383 11.4911 16.8144 11.6667 16.3724 11.6667C15.9304 11.6667 15.5064 11.4911 15.1939 11.1786C14.8813 10.866 14.7057 10.4421 14.7057 10C14.7057 9.55801 14.8813 9.13409 15.1939 8.82153C15.5064 8.50897 15.9304 8.33337 16.3724 8.33337C16.8144 8.33337 17.2383 8.50897 17.5509 8.82153C17.8635 9.13409 18.0391 9.55801 18.0391 10Z" fill="#1A1A1A"/>
                      </svg>
                      </button>
                    </div>
                    
                    <button className='flex items-center gap-1 text-sm sm:text-base sm:border border-[#666] py-1 px-1 sm:px-2 rounded-full'>
                      <svg xmlns="http://www.w3.org/2000/svg" className='w-4 sm:w-5' viewBox="0 0 20 20" fill="none">
          <path d="M3.125 10.625V15.625C3.125 15.9565 3.2567 16.2745 3.49112 16.5089C3.72554 16.7433 4.04348 16.875 4.375 16.875H15.625C15.9565 16.875 16.2745 16.7433 16.5089 16.5089C16.7433 16.2745 16.875 15.9565 16.875 15.625V10.625M10 12.5V2.1875M13.75 5.625L10 1.875L6.25 5.625" stroke="#1A1A1A" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        </svg> Share</button>
                    </div>
                    <div className="flex space-x-2 mt-2">
                      
                        <img src={Image3} alt="" className="w-17 h-17 rounded-md" />
                      
                    </div>
                    <p className="text-gray-400 text-xs mt-2">{review.date}</p>
        </div>
        <div>
        </div>
      </div>
    ))
  )
      
        
  ):(<p className="text-gray-500 mt-4">No items found.</p>)}

</div>
      </div>
    </div>
    </div>
  )
}

export default Reviews