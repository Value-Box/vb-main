import React,{ useState } from 'react'
import AccountSideBar from '../../Components/AccountSideBar'
import Logo from "../../Images/Logo.png";

function FindParcel() {
    const [orderNumber, setOrderNumber] = useState("");

    const handleSearch = () => {
      console.log("Searching for order:", orderNumber);
    };
  return (
    <div className='flex md:p-4 gap-3'>
        <div className='hidden md:block'>
        <AccountSideBar/>
        </div>
        <div className='hidden md:flex w-full flex-col items-center sm:px-5 bg-white'>
            <img className='w-[180px]' src={Logo} alt="" />
<div className='bg-natural-color w-full h-px'></div>
            <div className="flex flex-col items-center justify-center bg-gray-50 ">
      <div className="max-w-md w-full bg-white p-6 rounded-lg space-y-4">
        {/* Header */}
        <h2 className="text-lg font-semibold text-center">Enter your order number</h2>
        <p className="text-sm text-gray-600 text-center">
          To locate order, enter your order number (which was sent to your given email or WhatsApp number).
        </p>

        {/* Order Number Input */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Order number</label>
          <input
            type="text"
            placeholder="Enter your Phone number"
            value={orderNumber}
            onChange={(e) => setOrderNumber(e.target.value)}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none border-natural-gray"
          />
        </div>

        {/* Find Order Button */}
        <button
          onClick={handleSearch}
          className="w-full bg-dark-blue text-white rounded-lg py-2 flex items-center justify-center transition"
        >
          Find Order
        </button>

        {/* Alternative Search */}
        <div className="pt-4">
          <p className="text-sm font-medium text-natural-black">Try another way to find your order</p>
          <button className="w-full mt-2 border border-natural-gray rounded-lg py-2 flex items-center justify-between px-4 hover:bg-gray-100">
            <span className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M17 4H7C5.89543 4 5 4.89543 5 6V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V6C19 4.89543 18.1046 4 17 4Z" stroke="black" stroke-width="1.5"/>
  <path d="M9 9H15M9 13H15M9 17H13" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
</svg>
              <span>Tracking Number</span>
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M10 8L14 12L10 16" stroke="#1A1A1A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          </button>
        </div>
      </div>
    </div>
    
        </div>

        <div className='flex w-full flex-col items-center sm:px-5 bg-natural-color pb-15 pt-3'>
            <div className='bg-white w-full'>
            <img className='w-[180px] mx-auto' src={Logo} alt="" />
            </div>
<div className='bg-natural-color w-full h-px'></div>
            <div className="flex gap-3 flex-col items-center justify-center  ">
      <div className="w-full bg-white p-6 space-y-4">
        {/* Header */}
        <h2 className="text-lg font-semibold text-center">Enter your order number</h2>
        <p className="text-sm text-gray-600 text-center">
          To locate order, enter your order number (which was sent to your given email or WhatsApp number).
        </p>

        {/* Order Number Input */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Order number</label>
          <input
            type="text"
            placeholder="Enter your Phone number"
            value={orderNumber}
            onChange={(e) => setOrderNumber(e.target.value)}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none border-natural-gray"
          />
        </div>

        {/* Find Order Button */}
        <button
          onClick={handleSearch}
          className="w-full bg-dark-blue text-white rounded-lg py-2 flex items-center justify-center transition"
        >
          Find Order
        </button>

        {/* Alternative Search */}
       
      </div>
      <div className="pt-4 bg-white w-full p-6">
          <p className="text-sm font-medium text-natural-black">Try another way to find your order</p>
          <button className="w-full mt-2 border border-natural-gray rounded-lg py-2 flex items-center justify-between px-4 hover:bg-gray-100">
            <span className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M17 4H7C5.89543 4 5 4.89543 5 6V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V6C19 4.89543 18.1046 4 17 4Z" stroke="black" stroke-width="1.5"/>
  <path d="M9 9H15M9 13H15M9 17H13" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
</svg>
              <span>Tracking Number</span>
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M10 8L14 12L10 16" stroke="#1A1A1A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          </button>
        </div>
    </div>
    
        </div>
    </div>
  )
}

export default FindParcel