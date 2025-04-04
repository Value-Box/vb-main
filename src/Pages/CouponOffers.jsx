import React from 'react'
import { useState } from "react";
import AccountSideBar from '../Components/AccountSideBar'
import { NavLink } from 'react-router-dom';

export default function CouponOffers() {
 
 
 
 
    const [activeTab, setActiveTab] = useState("Unused");

    const tabs = [
        { label: "All" },
        { label: "Offer & coupons for ValueBox" },
        { label: "Coupons for specific items" },
      ];
    
  return (
    <>

<div className=" w-full flex flex-col md:hidden bg-white shadow-[0px_4px_8px_-2px_rgba(16,24,40,0.10),0px_2px_4px_-2px_rgba(16,24,40,0.06)]">
      {/* Search Bar */}
      <div className="flex  items-center p-4 pr-6 ">
      <NavLink to="/OrderDetails">
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
  <path d="M21 12L15 18L21 24" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      </NavLink>
        <div className="relative flex-1 items-center">
       <span className='text-[18px]'>Coupons & Offers</span>
        </div>
    </div>
   
    </div>    
      <div className="w-full mx-auto max-w-[1920px]  md:p-6 p-5 bg-[#FCFCFC] ">
    <div className="flex flex-col md:flex-row gap-5  w-full">
        {/* Left Section - Sidebar */}
  <div className="hidden md:flex">
    <AccountSideBar />
  </div>
 
  <div className="w-full flex-1 md:space-y-7.5 space-y-5">
    {/* Main Content */}
  <div className='flex justify-between items-center'>
  <div className="flex space-x-6">
      {["Unused", "Used", "Expired"].map((tab) => (
        <div
          key={tab}
          className={`cursor-pointer md:text-lg text-sm ${
            activeTab === tab ? "text-[#002882] font-semibold" : "text-gray-500"
          } relative`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
          {activeTab === tab && (
             <div className="absolute left-0 w-full h-[3px] mt-1 bg-gradient-to-r from-[#FFC136] via-[#FAC142] via-[#FFD168] via-[#F5BC3A] to-[#E09B00]"></div>
          )}
        </div>
      ))}
    </div>
    <span className='md:flex hidden text-lg font-semibold'>FAQs</span>
  </div>
  
    <div className="flex items-center space-x-2 md:w-1/2 w-full">
      <input
        type="text"
        placeholder="Enter coupon code"
        className="h-[50px] md:px-[20px] md:py-[12px] px-[10px] py-[10px] border border-[#CCC] bg-white rounded-[5px] text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 flex-grow"
      />
      <button className="h-[50px] bg-gray-100 text-gray-500 text-sm px-6 rounded-[5px] cursor-not-allowed">
        Apply
      </button>
    </div>
    <div className="flex md:space-x-3 space-x-1">
      {tabs.map((tab) => (
        <button
          key={tab.label}
          onClick={() => setActiveTab(tab.label)}
          className={`md:px-4 md:py-2 px-1 py-1 rounded-full border md:text-sm text-xs ${
            activeTab === tab.label
              ? "border-[#666] text-[#666] bg-[#FCFCFC]"
              : "border-[#F2F2F2] text-[#999] bg-[#FCFCFC]"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
    <div className="flex flex-col md:gap-5 gap-2.5">
      <h2 className="text-[20px] font-semibold">Coupon Offers</h2>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
        {/* Coupon Card - 1 */}
        <div className="border border-[#12B76A] rounded-lg p-3 relative bg-[#F6FEF9]">
          <div className="flex justify-between items-center">
            <span className="text-[#12B76A] font-bold text-lg">10% OFF</span>
            <span className="text-[#12B76A] text-sm">Expire on 28 Nov 2024</span>
          </div>
          <p className="text-[#12B76A] text-sm">Get Free Shipping over RS. 2,559 Order</p>
          <div className="flex justify-between mt-3">
            <button className="bg-[#D1FADF] text-[#12B76A] px-3 py-1 rounded-md text-sm">T&C</button>
            <button className="bg-green-500 text-[#D1FADF] px-4 py-1 rounded-md text-sm">Apply</button>
          </div>
          <div className="absolute top-1/2 -left-3 w-5 h-5 bg-[#FCFCFC] border-r-4 border-green-500 rounded-full"></div>
          <div className="absolute top-1/2 -right-3 w-5 h-5 bg-[#FCFCFC] border-l-4 border-green-500 rounded-full"></div>
        </div>

        {/* Coupon Card - 2 */}
        <div className="border border-[#12B76A] rounded-lg p-3 relative bg-[#F6FEF9]">
          <div className="flex justify-between items-center">
            <span className="text-[#12B76A] font-bold text-lg">10% OFF</span>
            <span className="text-[#12B76A] text-sm">Expire on 28 Nov 2024</span>
          </div>
          <p className="text-[#12B76A] text-sm">Get Free Shipping over RS. 2,559 Order</p>
          <div className="flex justify-between mt-3">
            <button className="bg-[#D1FADF] text-[#12B76A] px-3 py-1 rounded-md text-sm">T&C</button>
            <button className="bg-green-500 text-[#D1FADF] px-4 py-1 rounded-md text-sm">Apply</button>
          </div>
          <div className="absolute top-1/2 -left-3 w-5 h-5 bg-[#FCFCFC] border-r-4 border-green-500 rounded-full"></div>
          <div className="absolute top-1/2 -right-3 w-5 h-5 bg-[#FCFCFC] border-l-4 border-green-500 rounded-full"></div>
        </div>
         {/* Coupon Card - 3 */}
         <div className="border border-[#12B76A] rounded-lg p-3 relative bg-[#F6FEF9]">
          <div className="flex justify-between items-center">
            <span className="text-[#12B76A] font-bold text-lg">10% OFF</span>
            <span className="text-[#12B76A] text-sm">Expire on 28 Nov 2024</span>
          </div>
          <p className="text-[#12B76A] text-sm">Get Free Shipping over RS. 2,559 Order</p>
          <div className="flex justify-between mt-3">
            <button className="bg-[#D1FADF] text-[#12B76A] px-3 py-1 rounded-md text-sm">T&C</button>
            <button className="bg-green-500 text-[#D1FADF] px-4 py-1 rounded-md text-sm">Apply</button>
          </div>
          <div className="absolute top-1/2 -left-3 w-5 h-5 bg-[#FCFCFC] border-r-4 border-green-500 rounded-full"></div>
          <div className="absolute top-1/2 -right-3 w-5 h-5 bg-[#FCFCFC] border-l-4 border-green-500 rounded-full"></div>
        </div>
      </div>
    </div>
    <hr className="border-t-[1px] border-[#CCD1D2]" />
     
    <div className="flex flex-col md:gap-5 gap-2.5">
      <h2 className="text-[20px] font-semibold">Bank Offer</h2>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
        {/* Coupon Card - 1 */}
        <div className="border flex border-[#2E90FA] rounded-lg relative bg-[#D1E9FF] ">
      {/* Left Section */}
      <div className="p-4 flex flex-col justify-center items-center w-[150px]">
        <span className="text-[#175CD3] font-bold text-lg">10% OFF</span>
        <span className="text-[#175CD3] text-sm">No Min Spend</span>
      </div>

      {/* Dashed Divider */}
      <div className="flex flex-col items-center justify-between relative mx-3">
        <div className="absolute -top-3 w-5 h-5 bg-[#FCFCFC] border-b-4 border-[#2E90FA] rounded-full"></div>
        <div className="w-px h-full border-dashed border-l-[1px] border-[#0BA5EC]"></div>
        <div className="absolute -bottom-3 w-5 h-5 bg-[#FCFCFC] border-t-4 border-[#2E90FA] rounded-full"></div>
      </div>

      {/* Right Section */}
      <div className="flex justify-between md:p-3 p-2 w-full">
        <div className="flex flex-col md:gap-2">
          <span className="text-[#175CD3] font-semibold text-md">Bank Of Punjab</span>
          <p className="text-[#175CD3] text-sm">Extra 15% off. Applied automatically at checkout.</p>
          <p className="text-[#175CD3] text-xs mt-1">From: 26/11/2024 | To: 28/11/2024</p>
        </div>

        {/* T&C Button */}
        <div className='flex items-end'>
        <button className="bg-[#F5FAFF] text-[#2E90FA] px-3 py-1 rounded-md text-sm h-fit">T&C</button>
        </div>
      
      </div>
    </div>
    </div>
    </div>   
  </div>
    </div>
   </div>
    </>
  )
}
