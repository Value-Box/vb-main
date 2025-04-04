import React, { useMemo, useState } from 'react'
import AccountSideBar from '../Components/AccountSideBar'
import Image2 from "/src/Images/Image2.png";
import Image3 from "/src/Images/Image3.png";

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

    console.log(FilteringReview.length)
  return (
    <div className='flex gap-2 sm:gap-4 md:p-4 max-w-full mx-auto'>
        <div className='hidden md:block'><AccountSideBar/></div>
        <div className="w-full">
      {/* Tabs */}
      <div className="hidden sm:flex pb-2 gap-4 p-4">
        
      <button
  onClick={() => setActiveTab("pending")}
  className={`relative pb-2 font-semibold ${activeTab === "pending" ? "text-dark-blue" : "text-[#666]"}
   before:absolute before:left-0 before:bottom-0 before:w-full before:h-1 before:bg-gradient-to-r before:from-[#FFC136] before:via-[#FFD168] before:to-[#E09B00] before:transition-all before:duration-300 ${
    activeTab === "pending" ? "before:opacity-100" : "before:opacity-0"
  }`}
>
  Ready for review <span className="text-white bg-dark-blue w-5 p-0.5 rounded-full text-xs inline-block">{pendingCount}</span>
</button>

        <button onClick={()=>setActiveTab('reviewed')} className={`relative pb-2 font-semibold ${activeTab === "reviewed" ? "text-dark-blue" : "text-[#666]"}
   before:absolute before:left-0 before:bottom-0 before:w-full before:h-1 before:bg-gradient-to-r before:from-[#FFC136] before:via-[#FFD168] before:to-[#E09B00] before:transition-all before:duration-300 ${
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
      <div className='md:border border-[#F2F2F2] p-4 sm:rounded-[10px]'>
      <button className='flex justify-between'>
      <p className="md:text-lg font-semibold ">Quick Review All Items Below</p>
      <p className="md:text-lg font-semibold pl-1 flex items-center"> Review <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M10 8L14 12L10 16" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg></p>
      </button>

{/* Review Items */}
<div className="mt-4 space-y-4">

  {FilteringReview.length>0 ?(
  
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
              <button className="bg-dark-blue text-white px-4 py-2 rounded-md text-sm">
                Leave a Review
              </button>
              <p className="text-gray-800 font-semibold mt-2">{review.price}</p>
            </div>
          </div>
        ))
        
  ):(<p className="text-gray-500 mt-4">No items found.</p>)}

</div>
      </div>
    </div>
    </div>
  )
}

export default Reviews