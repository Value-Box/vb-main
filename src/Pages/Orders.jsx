import React, { useEffect, useState, useRef } from 'react'
import MoreToLove from '../Components/MoreToLove';
import { h1 } from 'framer-motion/client';
import AccountSideBar from '../Components/AccountSideBar';
import jazzcash from "/src/Images/jazzcash.svg";
import mastercard from "/src/Images/mastercard.svg";
import easypaisa from "/src/Images/easypaisa.svg";
import visa from "/src/Images/visa.svg";
import jcb from "/src/Images/jcb.svg";
import applepay from "/src/Images/applepay.svg";
import googlepay from "/src/Images/googlepay.svg";
import Input from '../Components/Input';
import Select from '../Components/Select';
import { Link } from 'react-router-dom';


function Orders() {
    const [selectedOption, setSelectedOption] = useState("");
  
    const options = [
      { value: "option1", label: "Option1" },
      { value: "option2", label: "Option2" },
      { value: "option3", label: "Option3" },
    ];
  // const [cardNumber, setCardNumber] = useState("");
  // const [month, setMonth] = useState("");
  // const [year, setYear] = useState("");
  // const [cvv, setCvv] = useState("");

    const [activeTab, setActiveTab] = useState("View All");
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    const tabs = ["View All", "To Pay", "To Ship", "Shipped", "Returns"];


  
  const orderData = [
    {
      date: "Nov 4, 2024",
      expressDelivery: {
        trackingNumber: "892639834167654",
        stores: [
          {
            name: "Zahir Clothing",
            products: [
              { id: 1, name: "Shoes", price: "PKR 1,500", img: "https://plus.unsplash.com/premium_photo-1682125177822-63c27a3830ea?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2hvZXN8ZW58MHx8MHx8fDA%3D" },
              { id: 2, name: "Bag", price: "PKR 1,500", img: "https://images.unsplash.com/photo-1622560480654-d96214fdc887?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJhZ3xlbnwwfHwwfHx8MA%3D%3D" },
              { id: 3, name: "Jacket", price: "PKR 1,500", img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amFja2V0fGVufDB8fDB8fHww" },
            ],
          },
        ],
      },
      standardDelivery: {
        stores: [
          {
            name: "Zahir Clothing",
            products: [
              { id: 4, name: "Shoes", price: "PKR 1,500", img: "https://plus.unsplash.com/premium_photo-1682125177822-63c27a3830ea?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2hvZXN8ZW58MHx8MHx8fDA%3D" },
              { id: 5, name: "Bag", price: "PKR 1,500", img: "https://images.unsplash.com/photo-1622560480654-d96214fdc887?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJhZ3xlbnwwfHwwfHx8MA%3D%3D" },
            ],
          },
        ],
      },
    },
  ];

  const [activeModal, setActiveModal] = useState(null);
  const [closing, setClosing] = useState(false); // New state for closing animation
  // const openModal = (modalName) => setActiveModal(modalName);
  const openModal = (modalName) => {
    setActiveModal(modalName);
    setClosing(false); // Reset closing animation when opening a new modal
  };
  // const closeModal = () => setActiveModal(null);

  const closeModal = () => {
    setClosing(true); // Trigger closing animation
    setTimeout(() => {
      setActiveModal(null); // Close the modal after animation
      setClosing(false);
    }, 390); // Match the animation duration
  };

  const [activeModal2, setActiveModal2] = useState(null);
  const [closing2, setClosing2] = useState(false);
  const openModal2 = (modalName) => {
    setActiveModal2(modalName);
    setClosing2(false);
  }
  const closeModal2 = () => {
    setClosing2(true); // Trigger closing animation
    setTimeout(() => {
      setActiveModal2(null); // Close the modal after animation
      setClosing2(false);
    }, 390); // Match the animation duration
  }

  const [activeToolTip, setActiveToolTip] = useState(null);

  const openToolTip = (modalName) => {
    setActiveToolTip((prev) => (prev === modalName ? null : modalName));
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest(".tooltip-container")) {
      setActiveToolTip(null);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

const [country, setCountry] = useState("");
    const [province, setProvince] = useState("");
    const [street, setStreet] = useState("");
    const [apartment, setApartment] = useState("");
    const [landmark, setLandmark] = useState("");
    const [city, setCity] = useState("");
    const [area, setArea] = useState("");
    const [zip, setZip] = useState("");
    const [contactName, setContactName] = useState("");
    const [phone, setPhone] = useState("");

  return (
    <div className='bg-[#FCFCFC]'>
    {!isMobile?(
      <div className='relative flex p-4 xl:p-6 gap-4 xl:gap-5 items-start max-w-[1920px] mx-auto '>
      <AccountSideBar/>
        
        
        <div className='w-full'>
        <div className="bg-white p-4 border border-[#F2F2F2] rounded-lg flex flex-col">
      {/* Tabs Section */}
      <div className="flex space-x-6 ">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 relative transition ${
              activeTab === tab
                ? "text-[#333] font-medium after:absolute after:left-0 after:bottom-[-3px] after:w-full after:h-[3px] after:bg-yellow-400"
                : "text-[#999]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Search & Filters Section */}
      <div className="flex items-center justify-between mt-4 gap-2">
        {/* Left Side - Search */}
        <div className="flex items-center border border-[#CCC] rounded-md overflow-hidden">
            
          <select className="px-3 py-2 border-r border-[#CCC] text-[#666] focus:outline-none focus:ring-0">
            <option>Orders</option>
            
          </select>
          <input
            type="text"
            placeholder="Order ID, product or store name"
            className="px-4 py-2 outline-none flex-grow"
          />
          <button className="bg-blue-900 text-white px-4 py-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M16.0146 17.6099C14.2061 19.0137 11.9307 19.6755 9.65151 19.4606C7.3723 19.2458 5.26063 18.1705 3.74633 16.4536C2.23203 14.7366 1.42893 12.5072 1.5005 10.219C1.57207 7.93079 2.51294 5.75588 4.13158 4.13695C5.75051 2.51831 7.92542 1.57744 10.2136 1.50587C12.5018 1.4343 14.7313 2.2374 16.4482 3.7517C18.1651 5.266 19.2404 7.37768 19.4553 9.65688C19.6701 11.9361 19.0083 14.2115 17.6046 16.02L22.1646 20.58C22.3127 20.7175 22.4209 20.8924 22.4779 21.0862C22.535 21.2801 22.5386 21.4858 22.4886 21.6816C22.4385 21.8773 22.3366 22.056 22.1935 22.1987C22.0504 22.3414 21.8715 22.4429 21.6756 22.4924C21.48 22.5424 21.2746 22.5388 21.0809 22.4821C20.8872 22.4254 20.7123 22.3175 20.5746 22.1699L16.0146 17.6099ZM17.2446 10.5C17.2579 9.60536 17.0932 8.71704 16.7601 7.88668C16.427 7.05631 15.9321 6.30048 15.3042 5.66314C14.6763 5.02579 13.9279 4.51967 13.1026 4.17421C12.2773 3.82875 11.3915 3.65084 10.4968 3.65084C9.60214 3.65084 8.71638 3.82875 7.89107 4.17421C7.06576 4.51967 6.31739 5.02579 5.68948 5.66314C5.06157 6.30048 4.56666 7.05631 4.23354 7.88668C3.90042 8.71704 3.73574 9.60536 3.74908 10.5C3.7755 12.2721 4.49805 13.9628 5.76062 15.2067C7.0232 16.4506 8.72444 17.1478 10.4968 17.1478C12.2692 17.1478 13.9705 16.4506 15.233 15.2067C16.4956 13.9628 17.2182 12.2721 17.2446 10.5Z" fill="#E6EAF3"/>
</svg>
          </button>
        </div>

        {/* Right Side - Filters */}
        <div className="flex items-center space-x-4">
          
          <select className="px-3 py-2 border border-[#CCC] rounded-md text-[#999] focus:outline-none focus:ring-0 ">
            <option>All / Last Year</option>
          </select>
        </div>
      </div>


        </div>
          
        <div className=" mt-4 border border-[#F2F2F2] rounded-lg ">
        <div className="bg-[#F2F2F2] border-b border-[#F2F2F2] p-3 2xl:p-4 rounded-lg">
        <div className="flex justify-between items-center pb-2 gap-2">
          <div className='xl:flex gap-2 xl:gap-4'>
            <div>
            <p className="text-sm 2xl:text-base text-[#999] flex items-center ">Order ID: <span className="text-[#1A1A1A] ml-1"> PO-153-18976393841670452</span> 
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M8 4V16C8 16.5304 8.21071 17.0391 8.58579 17.4142C8.96086 17.7893 9.46957 18 10 18H18C18.5304 18 19.0391 17.7893 19.4142 17.4142C19.7893 17.0391 20 16.5304 20 16V7.242C20 6.97556 19.9467 6.71181 19.8433 6.46624C19.7399 6.22068 19.5885 5.99824 19.398 5.812L16.083 2.57C15.7094 2.20466 15.2076 2.00007 14.685 2H10C9.46957 2 8.96086 2.21071 8.58579 2.58579C8.21071 2.96086 8 3.46957 8 4Z" stroke="#EEA500" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16 18V20C16 20.5304 15.7893 21.0391 15.4142 21.4142C15.0391 21.7893 14.5304 22 14 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V9C4 8.46957 4.21071 7.96086 4.58579 7.58579C4.96086 7.21071 5.46957 7 6 7H8" stroke="#EEA500" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </p>
            <span className="text-[#1A1A1A] text-sm 2xl:text-base">PO-153-18976393841670452</span>
            </div>
            <p className='hidden xl:block bg-[#CCC] w-px self-stretch '></p>
            <p className="text-sm 2xl:text-base text-[#F04438] ">Processing</p>
          </div>
          <div className='xl:flex gap-2 2xl:gap-4'>
            <div>
            <p className="text-sm 2xl:text-base text-[#999]">Order Time: <span className="text-[#1A1A1A] ml-1">Nov 4, 2024 at 17:45:00</span></p>
            <p className="text-sm 2xl:text-base text-[#999]">Order Subtotal: <span className="text-[#1A1A1A] font-medium ml-1">PKR 41,200</span></p>
            </div>
            <p className='hidden xl:block bg-[#CCC] w-px self-stretch '></p>
            <Link className="text-base 2xl:text-lg text-[#002882] flex items-center" to="/OrderDetails">View Order Details 
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <path d="M12.5 10L17.5 15L12.5 20" stroke="#002882" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></Link>
          </div>
        
        </div>
      </div>
      
      {orderData.map((order, index) => (
        <div key={index} className="bg-white rounded-lg  mb-6" >
          <div className="relative flex justify-between m-4">
          {activeToolTip  && (
    <div
      className="fixed inset-0 bg-[#00000042] bg-opacity-20 z-50"
      onClick={() => setShowTooltip(false)} // Click karne se close hoga
    ></div>
  )}

          <button onClick={(e) => {
              e.stopPropagation();
              openToolTip('my');
            }}>
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
    <path d="M8.75 15C8.75 15.663 8.48661 16.2989 8.01777 16.7678C7.54893 17.2366 6.91304 17.5 6.25 17.5C5.58696 17.5 4.95107 17.2366 4.48223 16.7678C4.01339 16.2989 3.75 15.663 3.75 15C3.75 14.337 4.01339 13.7011 4.48223 13.2322C4.95107 12.7634 5.58696 12.5 6.25 12.5C6.91304 12.5 7.54893 12.7634 8.01777 13.2322C8.48661 13.7011 8.75 14.337 8.75 15ZM17.5 15C17.5 15.663 17.2366 16.2989 16.7678 16.7678C16.2989 17.2366 15.663 17.5 15 17.5C14.337 17.5 13.7011 17.2366 13.2322 16.7678C12.7634 16.2989 12.5 15.663 12.5 15C12.5 14.337 12.7634 13.7011 13.2322 13.2322C13.7011 12.7634 14.337 12.5 15 12.5C15.663 12.5 16.2989 12.7634 16.7678 13.2322C17.2366 13.7011 17.5 14.337 17.5 15ZM26.25 15C26.25 15.663 25.9866 16.2989 25.5178 16.7678C25.0489 17.2366 24.413 17.5 23.75 17.5C23.087 17.5 22.4511 17.2366 21.9822 16.7678C21.5134 16.2989 21.25 15.663 21.25 15C21.25 14.337 21.5134 13.7011 21.9822 13.2322C22.4511 12.7634 23.087 12.5 23.75 12.5C24.413 12.5 25.0489 12.7634 25.5178 13.2322C25.9866 13.7011 26.25 14.337 26.25 15Z" fill="#1A1A1A"/>
  </svg>
</button>
{activeToolTip ==='my' && (
    <div
    onClick={(e) => e.stopPropagation()}
      className="absolute bottom-full mt-2 z-1055 bg-[#FCFCFC]  text-sm px-3 py-1 rounded-md shadow-lg"
    >
      <button className='py-1'>
      Cancel Order
      </button>
      <div className="absolute left-3 transform -translate-x-1/2 -bottom-[3px] -z-1 w-3 h-3 bg-[#FCFCFC] rotate-45"></div>
    </div>
  )}
{/* Modal */}


            
            <div className="flex items-center space-x-3 ">
                <p className='text-[#F04438] flex text-sm 2xl:text-base'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='h-5 2xl:h-6 2xl:w-6' viewBox="0 0 24 24" fill="none">
  <path d="M12.75 7C12.75 6.80109 12.671 6.61032 12.5303 6.46967C12.3897 6.32902 12.1989 6.25 12 6.25C11.8011 6.25 11.6103 6.32902 11.4697 6.46967C11.329 6.61032 11.25 6.80109 11.25 7V12C11.2499 12.1272 11.2822 12.2522 11.3438 12.3635C11.4054 12.4747 11.4942 12.5685 11.602 12.636L14.602 14.511C14.7707 14.6166 14.9744 14.6508 15.1683 14.6061C15.2643 14.584 15.355 14.5433 15.4353 14.4861C15.5155 14.4289 15.5837 14.3565 15.636 14.273C15.6883 14.1895 15.7236 14.0965 15.7399 13.9993C15.7562 13.9022 15.7532 13.8027 15.7311 13.7067C15.709 13.6107 15.6683 13.52 15.6111 13.4397C15.5539 13.3595 15.4815 13.2913 15.398 13.239L12.75 11.584V7Z" fill="#F04438"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.25C9.67936 3.25 7.45376 4.17187 5.81282 5.81282C4.17187 7.45376 3.25 9.67936 3.25 12C3.25 14.3206 4.17187 16.5462 5.81282 18.1872C7.45376 19.8281 9.67936 20.75 12 20.75C14.3206 20.75 16.5462 19.8281 18.1872 18.1872C19.8281 16.5462 20.75 14.3206 20.75 12C20.75 9.67936 19.8281 7.45376 18.1872 5.81282C16.5462 4.17187 14.3206 3.25 12 3.25ZM4.75 12C4.75 11.0479 4.93753 10.1052 5.30187 9.22554C5.66622 8.34593 6.20025 7.5467 6.87348 6.87348C7.5467 6.20025 8.34593 5.66622 9.22554 5.30187C10.1052 4.93753 11.0479 4.75 12 4.75C12.9521 4.75 13.8948 4.93753 14.7745 5.30187C15.6541 5.66622 16.4533 6.20025 17.1265 6.87348C17.7997 7.5467 18.3338 8.34593 18.6981 9.22554C19.0625 10.1052 19.25 11.0479 19.25 12C19.25 13.9228 18.4862 15.7669 17.1265 17.1265C15.7669 18.4862 13.9228 19.25 12 19.25C10.0772 19.25 8.23311 18.4862 6.87348 17.1265C5.51384 15.7669 4.75 13.9228 4.75 12Z" fill="#F04438"/>
</svg> {order.date}</p>
            
            <button className="text-sm xl:text-base border border-[#002882] text-[#002882] px-2 xl:px-3 
            py-1 xl:py-2 rounded-[5px]" onClick={()=>openModal('editAddress')}>Edit Address</button>

            
            <button className="text-sm xl:text-base bg-[#002882] text-white px-2 xl:px-3 py-1 xl:py-2 
            rounded" onClick={()=>openModal('payNow')}>Pay Now</button>
          </div>
          
          </div>
          <div className="">
            <div className='p-2 bg-gradient-to-b from-[#FFE09E] to-[#FFFCF4] flex items-center justify-between'> 
            <h3 className="font-bold 2xl:text-lg flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className='w-5 2xl:w-7' viewBox="0 0 38 30" fill="none">
  <g clip-path="url(#clip0_7418_34969)">
    <path d="M36.5625 20.625H35.625V14.291C35.625 13.5469 35.3262 12.832 34.7988 12.3047L28.9453 6.45117C28.418 5.92383 27.7031 5.625 26.959 5.625H24.375V2.8125C24.375 1.25977 23.1152 0 21.5625 0H6.5625C5.00977 0 3.75 1.25977 3.75 2.8125V5.625H0.46875C0.210938 5.625 0 5.83594 0 6.09375V7.03125C0 7.28906 0.210938 7.5 0.46875 7.5H16.4062C16.6641 7.5 16.875 7.71094 16.875 7.96875V8.90625C16.875 9.16406 16.6641 9.375 16.4062 9.375H2.34375C2.08594 9.375 1.875 9.58594 1.875 9.84375V10.7812C1.875 11.0391 2.08594 11.25 2.34375 11.25H14.5312C14.7891 11.25 15 11.4609 15 11.7188V12.6562C15 12.9141 14.7891 13.125 14.5312 13.125H0.46875C0.210938 13.125 0 13.3359 0 13.5938V14.5312C0 14.7891 0.210938 15 0.46875 15H12.6562C12.9141 15 13.125 15.2109 13.125 15.4688V16.4062C13.125 16.6641 12.9141 16.875 12.6562 16.875H3.75V24.375C3.75 27.4805 6.26953 30 9.375 30C12.4805 30 15 27.4805 15 24.375H22.5C22.5 27.4805 25.0195 30 28.125 30C31.2305 30 33.75 27.4805 33.75 24.375H36.5625C37.0781 24.375 37.5 23.9531 37.5 23.4375V21.5625C37.5 21.0469 37.0781 20.625 36.5625 20.625ZM9.375 27.1875C7.82227 27.1875 6.5625 25.9277 6.5625 24.375C6.5625 22.8223 7.82227 21.5625 9.375 21.5625C10.9277 21.5625 12.1875 22.8223 12.1875 24.375C12.1875 25.9277 10.9277 27.1875 9.375 27.1875ZM28.125 27.1875C26.5723 27.1875 25.3125 25.9277 25.3125 24.375C25.3125 22.8223 26.5723 21.5625 28.125 21.5625C29.6777 21.5625 30.9375 22.8223 30.9375 24.375C30.9375 25.9277 29.6777 27.1875 28.125 27.1875ZM32.8125 15H24.375V8.4375H26.959L32.8125 14.291V15Z" fill="#1A1A1A"/>
  </g>
  <defs>
    <clipPath id="clip0_7418_34969">
      <rect width="37.5" height="30" fill="white"/>
    </clipPath>
  </defs>
</svg> Express Delivery
            </h3>
            {order.expressDelivery.trackingNumber && (
              <p className="text-sm">Tracking: {order.expressDelivery.trackingNumber}</p>
            )}
            </div>
            {order.expressDelivery.stores.map((store, idx) => (
              <div key={idx} className="mt-2 2xl:py-2 px-2 2xl:px-4">
                <div className='border border-[#F2F2F2] rounded-[10px] p-2 2xl:p-3 '>
                <h4 className="font-medium flex gap-1 text-[#1A1A1A] "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M3 21.0002H5M5 21.0002H19M5 21.0002V9.32824M21 21.0002H19M19 21.0002V9.32824M5 9.32824C4.96261 9.30677 4.92592 9.28409 4.89 9.26024L4.35 8.90024C3.96826 8.64562 3.68568 8.26746 3.54967 7.82921C3.41366 7.39096 3.43249 6.91926 3.603 6.49324L4.497 4.25724C4.64549 3.88615 4.90176 3.56806 5.23276 3.34401C5.56376 3.11995 5.9543 3.00022 6.354 3.00024H17.646C18.0457 3.00022 18.4362 3.11995 18.7672 3.34401C19.0982 3.56806 19.3545 3.88615 19.503 4.25724L20.397 6.49324C20.5675 6.91926 20.5863 7.39096 20.4503 7.82921C20.3143 8.26746 20.0317 8.64562 19.65 8.90024L19.11 9.26024C19.0741 9.28409 19.0374 9.30677 19 9.32824M5 9.32824C5.32305 9.51483 5.69184 9.60733 6.0647 9.59532C6.43757 9.5833 6.79964 9.46724 7.11 9.26024L9 8.00024L10.89 9.26024C11.2187 9.47952 11.6049 9.59654 12 9.59654C12.3951 9.59654 12.7813 9.47952 13.11 9.26024L15 8.00024L16.89 9.26024C17.2004 9.46724 17.5624 9.5833 17.9353 9.59532C18.3082 9.60733 18.677 9.51483 19 9.32824" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M13.998 21V16C13.998 15.4696 13.7873 14.9609 13.4123 14.5858C13.0372 14.2107 12.5285 14 11.998 14C11.4676 14 10.9589 14.2107 10.5838 14.5858C10.2088 14.9609 9.99805 15.4696 9.99805 16V21" stroke="#1A1A1A" stroke-width="1.5"/>
</svg> {store.name}</h4>
<div className='bg-[#F2F2F2] h-px my-3 '></div>
                <div className="flex gap-2 overflow-x-auto">
                  {store.products.map((product) => (
                    <div key={product.id} className="mt-2 2xl:w-32 text-center ">
                      <img src={product.img} alt={product.name} className="w-25 h-25 2xl:w-48 2xl:h-30 object-cover rounded-[10px]" />
                      <p className="text-sm mt-1">{product.price}</p>
                    </div>
                  ))}
                </div>
                </div>
              </div>
            ))}
          </div>
          <div className=" rounded-md mt-4">
            <h3 className="p-2 font-bold 2xl:text-lg flex items-center gap-1 bg-[#E6EAF3] ">
                <svg xmlns="http://www.w3.org/2000/svg" className='w-5 2xl:w-7' viewBox="0 0 30 30" fill="none">
  <path d="M16.0109 28.3931C16.0536 28.3839 16.095 28.3695 16.1342 28.3503C16.1749 28.3299 16.2159 28.3072 16.2574 28.2822L25.8954 22.7922C26.47 22.4637 26.907 22.0883 27.2063 21.6662C27.5063 21.243 27.6561 20.5844 27.6558 19.6905V10.1012C27.6558 9.72367 27.6229 9.41171 27.5572 9.16528L16.0109 15.7637V28.3931ZM14.3245 28.3931V15.7637L2.77826 9.16528C2.71254 9.41171 2.67969 9.72367 2.67969 10.1012V19.6905C2.67969 20.5851 2.83147 21.2437 3.13504 21.6662C3.43862 22.0887 3.87362 22.464 4.44004 22.7922L14.0904 28.2822C14.1311 28.3069 14.17 28.3296 14.2072 28.3503C14.2438 28.3702 14.2837 28.3846 14.3245 28.3931ZM15.1736 14.2862L20.4295 11.3076L8.77237 4.64814L4.25469 7.22064C3.97612 7.37671 3.74629 7.53671 3.56522 7.70064L15.1736 14.2862ZM22.1406 10.3347L26.7691 7.70064C26.5611 7.51707 26.3341 7.35616 26.092 7.22064L17.4022 2.27224C16.639 1.82903 15.8961 1.60742 15.1736 1.60742C14.4433 1.60742 13.6967 1.82885 12.9338 2.27171L10.4347 3.6876L22.1406 10.3347Z" fill="#002882"/>
</svg> Standard Delivery</h3>
            {order.standardDelivery.stores.map((store, idx) => (
              <div key={idx} className="mt-2 2xl:py-2 px-2 2xl:px-4">
                <div className='border border-[#F2F2F2] rounded-[10px] p-2   2xl:p-3 '>
                <h4 className="font-medium flex gap-1 text-[#1A1A1A] "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M3 21.0002H5M5 21.0002H19M5 21.0002V9.32824M21 21.0002H19M19 21.0002V9.32824M5 9.32824C4.96261 9.30677 4.92592 9.28409 4.89 9.26024L4.35 8.90024C3.96826 8.64562 3.68568 8.26746 3.54967 7.82921C3.41366 7.39096 3.43249 6.91926 3.603 6.49324L4.497 4.25724C4.64549 3.88615 4.90176 3.56806 5.23276 3.34401C5.56376 3.11995 5.9543 3.00022 6.354 3.00024H17.646C18.0457 3.00022 18.4362 3.11995 18.7672 3.34401C19.0982 3.56806 19.3545 3.88615 19.503 4.25724L20.397 6.49324C20.5675 6.91926 20.5863 7.39096 20.4503 7.82921C20.3143 8.26746 20.0317 8.64562 19.65 8.90024L19.11 9.26024C19.0741 9.28409 19.0374 9.30677 19 9.32824M5 9.32824C5.32305 9.51483 5.69184 9.60733 6.0647 9.59532C6.43757 9.5833 6.79964 9.46724 7.11 9.26024L9 8.00024L10.89 9.26024C11.2187 9.47952 11.6049 9.59654 12 9.59654C12.3951 9.59654 12.7813 9.47952 13.11 9.26024L15 8.00024L16.89 9.26024C17.2004 9.46724 17.5624 9.5833 17.9353 9.59532C18.3082 9.60733 18.677 9.51483 19 9.32824" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M13.998 21V16C13.998 15.4696 13.7873 14.9609 13.4123 14.5858C13.0372 14.2107 12.5285 14 11.998 14C11.4676 14 10.9589 14.2107 10.5838 14.5858C10.2088 14.9609 9.99805 15.4696 9.99805 16V21" stroke="#1A1A1A" stroke-width="1.5"/>
</svg> {store.name}</h4>
<div className='bg-[#F2F2F2] h-px my-3 '></div>
                <div className="flex gap-2 overflow-x-auto">
                  {store.products.map((product) => (
                    <div key={product.id} className="text-center 2xl:w-32">
                      <img src={product.img} alt={product.name} className=" w-25 h-25 2xl:w-48 2xl:h-30 object-cover rounded-[10px]" />
                      <p className="text-sm mt-1">{product.price}</p>
                    </div>
                  ))}
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>

    <div className=" mt-4 border border-[#F2F2F2] rounded-lg ">
        <div className="bg-[#F2F2F2] border-b border-[#F2F2F2] p-3 2xl:p-4 rounded-lg">
        <div className="flex justify-between items-center pb-2 gap-2">
          <div className='xl:flex gap-2 xl:gap-4'>
            <div>
            <p className="text-sm 2xl:text-base text-[#999] flex items-center ">Order ID: <span className="text-[#1A1A1A] ml-1"> PO-153-18976393841670452</span> 
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M8 4V16C8 16.5304 8.21071 17.0391 8.58579 17.4142C8.96086 17.7893 9.46957 18 10 18H18C18.5304 18 19.0391 17.7893 19.4142 17.4142C19.7893 17.0391 20 16.5304 20 16V7.242C20 6.97556 19.9467 6.71181 19.8433 6.46624C19.7399 6.22068 19.5885 5.99824 19.398 5.812L16.083 2.57C15.7094 2.20466 15.2076 2.00007 14.685 2H10C9.46957 2 8.96086 2.21071 8.58579 2.58579C8.21071 2.96086 8 3.46957 8 4Z" stroke="#EEA500" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16 18V20C16 20.5304 15.7893 21.0391 15.4142 21.4142C15.0391 21.7893 14.5304 22 14 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V9C4 8.46957 4.21071 7.96086 4.58579 7.58579C4.96086 7.21071 5.46957 7 6 7H8" stroke="#EEA500" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </p>
            <span className="text-[#1A1A1A] text-sm 2xl:text-base">PO-153-18976393841670452</span>
            </div>
            <p className='hidden xl:block bg-[#CCC] w-px self-stretch '></p>
            <p className="text-sm 2xl:text-base text-[#F04438] ">Processing</p>
          </div>
          <div className='xl:flex gap-2 2xl:gap-4'>
            <div>
            <p className="text-sm 2xl:text-base text-[#999]">Order Time: <span className="text-[#1A1A1A] ml-1">Nov 4, 2024 at 17:45:00</span></p>
            <p className="text-sm 2xl:text-base text-[#999]">Order Subtotal: <span className="text-[#1A1A1A] font-medium ml-1">PKR 41,200</span></p>
            </div>
            <p className='hidden xl:block bg-[#CCC] w-px self-stretch '></p>
            <Link className="text-base 2xl:text-lg text-[#002882] flex items-center" to="/OrderDetails">View Order Details 
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <path d="M12.5 10L17.5 15L12.5 20" stroke="#002882" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></Link>
          </div>
        
        </div>
      </div>
      
      {orderData.map((order, index) => (
        <div key={index} className="bg-white rounded-lg  mb-6">
          <div className="flex justify-between m-4">
            
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <path d="M8.75 15C8.75 15.663 8.48661 16.2989 8.01777 16.7678C7.54893 17.2366 6.91304 17.5 6.25 17.5C5.58696 17.5 4.95107 17.2366 4.48223 16.7678C4.01339 16.2989 3.75 15.663 3.75 15C3.75 14.337 4.01339 13.7011 4.48223 13.2322C4.95107 12.7634 5.58696 12.5 6.25 12.5C6.91304 12.5 7.54893 12.7634 8.01777 13.2322C8.48661 13.7011 8.75 14.337 8.75 15ZM17.5 15C17.5 15.663 17.2366 16.2989 16.7678 16.7678C16.2989 17.2366 15.663 17.5 15 17.5C14.337 17.5 13.7011 17.2366 13.2322 16.7678C12.7634 16.2989 12.5 15.663 12.5 15C12.5 14.337 12.7634 13.7011 13.2322 13.2322C13.7011 12.7634 14.337 12.5 15 12.5C15.663 12.5 16.2989 12.7634 16.7678 13.2322C17.2366 13.7011 17.5 14.337 17.5 15ZM26.25 15C26.25 15.663 25.9866 16.2989 25.5178 16.7678C25.0489 17.2366 24.413 17.5 23.75 17.5C23.087 17.5 22.4511 17.2366 21.9822 16.7678C21.5134 16.2989 21.25 15.663 21.25 15C21.25 14.337 21.5134 13.7011 21.9822 13.2322C22.4511 12.7634 23.087 12.5 23.75 12.5C24.413 12.5 25.0489 12.7634 25.5178 13.2322C25.9866 13.7011 26.25 14.337 26.25 15Z" fill="#1A1A1A"/>
</svg>
            
            
<Link to="/PackageDetail" className="text-sm xl:text-base bg-[#002882] text-white px-2 xl:px-3 py-1 xl:py-2 rounded flex items-center gap-1">
<svg xmlns="http://www.w3.org/2000/svg" className='w-4 xl:w-6' viewBox="0 0 24 24" fill="none">
  <path d="M19.0739 4.92988L17.6639 6.33988C18.4066 7.08338 18.9955 7.96592 19.397 8.93708C19.7985 9.90824 20.0047 10.949 20.0039 11.9999C20.0039 16.4199 16.4239 19.9999 12.0039 19.9999C7.58391 19.9999 4.00391 16.4199 4.00391 11.9999C4.00391 7.91988 7.05391 4.55988 11.0039 4.06988V6.08988C8.16391 6.56988 6.00391 9.02988 6.00391 11.9999C6.00391 15.3099 8.69391 17.9999 12.0039 17.9999C15.3139 17.9999 18.0039 15.3099 18.0039 11.9999C18.0039 10.3399 17.3339 8.83988 16.2439 7.75988L14.8339 9.16988C15.5539 9.89988 16.0039 10.8999 16.0039 11.9999C16.0039 14.2099 14.2139 15.9999 12.0039 15.9999C9.79391 15.9999 8.00391 14.2099 8.00391 11.9999C8.00391 10.1399 9.28391 8.58988 11.0039 8.13988V10.2799C10.4039 10.6299 10.0039 11.2599 10.0039 11.9999C10.0039 13.0999 10.9039 13.9999 12.0039 13.9999C13.1039 13.9999 14.0039 13.0999 14.0039 11.9999C14.0039 11.2599 13.6039 10.6199 13.0039 10.2799V1.99988H12.0039C6.48391 1.99988 2.00391 6.47988 2.00391 11.9999C2.00391 17.5199 6.48391 21.9999 12.0039 21.9999C17.5239 21.9999 22.0039 17.5199 22.0039 11.9999C22.0039 9.23988 20.8839 6.73988 19.0739 4.92988Z" fill="#E6EAF3"/>
</svg> Track Order</Link>
          </div>
          <div className="">
            <div className='p-2 bg-gradient-to-b from-[#FFE09E] to-[#FFFCF4] flex items-center justify-between'> 
            <h3 className="font-bold 2xl:text-lg flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className='w-5 2xl:w-7' viewBox="0 0 38 30" fill="none">
  <g clip-path="url(#clip0_7418_34969)">
    <path d="M36.5625 20.625H35.625V14.291C35.625 13.5469 35.3262 12.832 34.7988 12.3047L28.9453 6.45117C28.418 5.92383 27.7031 5.625 26.959 5.625H24.375V2.8125C24.375 1.25977 23.1152 0 21.5625 0H6.5625C5.00977 0 3.75 1.25977 3.75 2.8125V5.625H0.46875C0.210938 5.625 0 5.83594 0 6.09375V7.03125C0 7.28906 0.210938 7.5 0.46875 7.5H16.4062C16.6641 7.5 16.875 7.71094 16.875 7.96875V8.90625C16.875 9.16406 16.6641 9.375 16.4062 9.375H2.34375C2.08594 9.375 1.875 9.58594 1.875 9.84375V10.7812C1.875 11.0391 2.08594 11.25 2.34375 11.25H14.5312C14.7891 11.25 15 11.4609 15 11.7188V12.6562C15 12.9141 14.7891 13.125 14.5312 13.125H0.46875C0.210938 13.125 0 13.3359 0 13.5938V14.5312C0 14.7891 0.210938 15 0.46875 15H12.6562C12.9141 15 13.125 15.2109 13.125 15.4688V16.4062C13.125 16.6641 12.9141 16.875 12.6562 16.875H3.75V24.375C3.75 27.4805 6.26953 30 9.375 30C12.4805 30 15 27.4805 15 24.375H22.5C22.5 27.4805 25.0195 30 28.125 30C31.2305 30 33.75 27.4805 33.75 24.375H36.5625C37.0781 24.375 37.5 23.9531 37.5 23.4375V21.5625C37.5 21.0469 37.0781 20.625 36.5625 20.625ZM9.375 27.1875C7.82227 27.1875 6.5625 25.9277 6.5625 24.375C6.5625 22.8223 7.82227 21.5625 9.375 21.5625C10.9277 21.5625 12.1875 22.8223 12.1875 24.375C12.1875 25.9277 10.9277 27.1875 9.375 27.1875ZM28.125 27.1875C26.5723 27.1875 25.3125 25.9277 25.3125 24.375C25.3125 22.8223 26.5723 21.5625 28.125 21.5625C29.6777 21.5625 30.9375 22.8223 30.9375 24.375C30.9375 25.9277 29.6777 27.1875 28.125 27.1875ZM32.8125 15H24.375V8.4375H26.959L32.8125 14.291V15Z" fill="#1A1A1A"/>
  </g>
  <defs>
    <clipPath id="clip0_7418_34969">
      <rect width="37.5" height="30" fill="white"/>
    </clipPath>
  </defs>
</svg> Express Delivery
            </h3>
            {order.expressDelivery.trackingNumber && (
              <p className="text-sm">Tracking: {order.expressDelivery.trackingNumber}</p>
            )}
            </div>
            {order.expressDelivery.stores.map((store, idx) => (
              <div key={idx} className="mt-2 2xl:py-2 px-2 2xl:px-4">
                <div className='border border-[#F2F2F2] rounded-[10px] p-2 2xl:p-3 '>
                <h4 className="font-medium flex gap-1 text-[#1A1A1A] "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M3 21.0002H5M5 21.0002H19M5 21.0002V9.32824M21 21.0002H19M19 21.0002V9.32824M5 9.32824C4.96261 9.30677 4.92592 9.28409 4.89 9.26024L4.35 8.90024C3.96826 8.64562 3.68568 8.26746 3.54967 7.82921C3.41366 7.39096 3.43249 6.91926 3.603 6.49324L4.497 4.25724C4.64549 3.88615 4.90176 3.56806 5.23276 3.34401C5.56376 3.11995 5.9543 3.00022 6.354 3.00024H17.646C18.0457 3.00022 18.4362 3.11995 18.7672 3.34401C19.0982 3.56806 19.3545 3.88615 19.503 4.25724L20.397 6.49324C20.5675 6.91926 20.5863 7.39096 20.4503 7.82921C20.3143 8.26746 20.0317 8.64562 19.65 8.90024L19.11 9.26024C19.0741 9.28409 19.0374 9.30677 19 9.32824M5 9.32824C5.32305 9.51483 5.69184 9.60733 6.0647 9.59532C6.43757 9.5833 6.79964 9.46724 7.11 9.26024L9 8.00024L10.89 9.26024C11.2187 9.47952 11.6049 9.59654 12 9.59654C12.3951 9.59654 12.7813 9.47952 13.11 9.26024L15 8.00024L16.89 9.26024C17.2004 9.46724 17.5624 9.5833 17.9353 9.59532C18.3082 9.60733 18.677 9.51483 19 9.32824" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M13.998 21V16C13.998 15.4696 13.7873 14.9609 13.4123 14.5858C13.0372 14.2107 12.5285 14 11.998 14C11.4676 14 10.9589 14.2107 10.5838 14.5858C10.2088 14.9609 9.99805 15.4696 9.99805 16V21" stroke="#1A1A1A" stroke-width="1.5"/>
</svg> {store.name}</h4>
<div className='bg-[#F2F2F2] h-px my-3 '></div>
                <div className="flex gap-2 overflow-x-auto">
                  {store.products.map((product) => (
                    <div key={product.id} className="mt-2 2xl:w-32 text-center ">
                      <img src={product.img} alt={product.name} className="w-25 h-25 2xl:w-48 2xl:h-30 object-cover rounded-[10px]" />
                      <p className="text-sm mt-1">{product.price}</p>
                    </div>
                  ))}
                </div>
                </div>
              </div>
            ))}
          </div>
          <div className=" rounded-md mt-4">
            <h3 className="p-2 font-bold 2xl:text-lg flex items-center gap-1 bg-[#E6EAF3] ">
                <svg xmlns="http://www.w3.org/2000/svg" className='w-5 2xl:w-7' viewBox="0 0 30 30" fill="none">
  <path d="M16.0109 28.3931C16.0536 28.3839 16.095 28.3695 16.1342 28.3503C16.1749 28.3299 16.2159 28.3072 16.2574 28.2822L25.8954 22.7922C26.47 22.4637 26.907 22.0883 27.2063 21.6662C27.5063 21.243 27.6561 20.5844 27.6558 19.6905V10.1012C27.6558 9.72367 27.6229 9.41171 27.5572 9.16528L16.0109 15.7637V28.3931ZM14.3245 28.3931V15.7637L2.77826 9.16528C2.71254 9.41171 2.67969 9.72367 2.67969 10.1012V19.6905C2.67969 20.5851 2.83147 21.2437 3.13504 21.6662C3.43862 22.0887 3.87362 22.464 4.44004 22.7922L14.0904 28.2822C14.1311 28.3069 14.17 28.3296 14.2072 28.3503C14.2438 28.3702 14.2837 28.3846 14.3245 28.3931ZM15.1736 14.2862L20.4295 11.3076L8.77237 4.64814L4.25469 7.22064C3.97612 7.37671 3.74629 7.53671 3.56522 7.70064L15.1736 14.2862ZM22.1406 10.3347L26.7691 7.70064C26.5611 7.51707 26.3341 7.35616 26.092 7.22064L17.4022 2.27224C16.639 1.82903 15.8961 1.60742 15.1736 1.60742C14.4433 1.60742 13.6967 1.82885 12.9338 2.27171L10.4347 3.6876L22.1406 10.3347Z" fill="#002882"/>
</svg> Standard Delivery</h3>
            {order.standardDelivery.stores.map((store, idx) => (
              <div key={idx} className="mt-2 2xl:py-2 px-2 2xl:px-4">
                <div className='border border-[#F2F2F2] rounded-[10px] p-2   2xl:p-3 '>
                <h4 className="font-medium flex gap-1 text-[#1A1A1A] "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M3 21.0002H5M5 21.0002H19M5 21.0002V9.32824M21 21.0002H19M19 21.0002V9.32824M5 9.32824C4.96261 9.30677 4.92592 9.28409 4.89 9.26024L4.35 8.90024C3.96826 8.64562 3.68568 8.26746 3.54967 7.82921C3.41366 7.39096 3.43249 6.91926 3.603 6.49324L4.497 4.25724C4.64549 3.88615 4.90176 3.56806 5.23276 3.34401C5.56376 3.11995 5.9543 3.00022 6.354 3.00024H17.646C18.0457 3.00022 18.4362 3.11995 18.7672 3.34401C19.0982 3.56806 19.3545 3.88615 19.503 4.25724L20.397 6.49324C20.5675 6.91926 20.5863 7.39096 20.4503 7.82921C20.3143 8.26746 20.0317 8.64562 19.65 8.90024L19.11 9.26024C19.0741 9.28409 19.0374 9.30677 19 9.32824M5 9.32824C5.32305 9.51483 5.69184 9.60733 6.0647 9.59532C6.43757 9.5833 6.79964 9.46724 7.11 9.26024L9 8.00024L10.89 9.26024C11.2187 9.47952 11.6049 9.59654 12 9.59654C12.3951 9.59654 12.7813 9.47952 13.11 9.26024L15 8.00024L16.89 9.26024C17.2004 9.46724 17.5624 9.5833 17.9353 9.59532C18.3082 9.60733 18.677 9.51483 19 9.32824" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M13.998 21V16C13.998 15.4696 13.7873 14.9609 13.4123 14.5858C13.0372 14.2107 12.5285 14 11.998 14C11.4676 14 10.9589 14.2107 10.5838 14.5858C10.2088 14.9609 9.99805 15.4696 9.99805 16V21" stroke="#1A1A1A" stroke-width="1.5"/>
</svg> {store.name}</h4>
<div className='bg-[#F2F2F2] h-px my-3 '></div>
                <div className="flex gap-2 overflow-x-auto">
                  {store.products.map((product) => (
                    <div key={product.id} className="text-center 2xl:w-32">
                      <img src={product.img} alt={product.name} className=" w-25 h-25 2xl:w-48 2xl:h-30 object-cover rounded-[10px]" />
                      <p className="text-sm mt-1">{product.price}</p>
                    </div>
                  ))}
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>

    <div className=" mt-4 border border-[#F2F2F2] rounded-lg ">
        <div className="bg-[#F2F2F2] border-b border-[#F2F2F2] p-3 2xl:p-4 rounded-lg">
        <div className="flex justify-between items-center pb-2 gap-2">
          <div className='xl:flex gap-2 xl:gap-4'>
            <div>
            <p className="text-sm 2xl:text-base text-[#999] flex items-center ">Order ID: <span className="text-[#1A1A1A] ml-1"> PO-153-18976393841670452</span> 
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M8 4V16C8 16.5304 8.21071 17.0391 8.58579 17.4142C8.96086 17.7893 9.46957 18 10 18H18C18.5304 18 19.0391 17.7893 19.4142 17.4142C19.7893 17.0391 20 16.5304 20 16V7.242C20 6.97556 19.9467 6.71181 19.8433 6.46624C19.7399 6.22068 19.5885 5.99824 19.398 5.812L16.083 2.57C15.7094 2.20466 15.2076 2.00007 14.685 2H10C9.46957 2 8.96086 2.21071 8.58579 2.58579C8.21071 2.96086 8 3.46957 8 4Z" stroke="#EEA500" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16 18V20C16 20.5304 15.7893 21.0391 15.4142 21.4142C15.0391 21.7893 14.5304 22 14 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V9C4 8.46957 4.21071 7.96086 4.58579 7.58579C4.96086 7.21071 5.46957 7 6 7H8" stroke="#EEA500" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </p>
            <span className="text-[#1A1A1A] text-sm 2xl:text-base">PO-153-18976393841670452</span>
            </div>
            <p className='hidden xl:block bg-[#CCC] w-px self-stretch '></p>
            <p className="text-sm 2xl:text-base text-[#F04438] ">Processing</p>
          </div>
          <div className='xl:flex gap-2 2xl:gap-4'>
            <div>
            <p className="text-sm 2xl:text-base text-[#999]">Order Time: <span className="text-[#1A1A1A] ml-1">Nov 4, 2024 at 17:45:00</span></p>
            <p className="text-sm 2xl:text-base text-[#999]">Order Subtotal: <span className="text-[#1A1A1A] font-medium ml-1">PKR 41,200</span></p>
            </div>
            <p className='hidden xl:block bg-[#CCC] w-px self-stretch '></p>
             <Link className="text-base 2xl:text-lg text-[#002882] flex items-center" to="/OrderDetails">View Order Details 
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <path d="M12.5 10L17.5 15L12.5 20" stroke="#002882" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></Link>
          </div>
        
        </div>
      </div>
      
      {orderData.map((order, index) => (
        <div key={index} className="bg-white rounded-lg  mb-6">
          <div className="flex justify-between m-4">
            
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <path d="M8.75 15C8.75 15.663 8.48661 16.2989 8.01777 16.7678C7.54893 17.2366 6.91304 17.5 6.25 17.5C5.58696 17.5 4.95107 17.2366 4.48223 16.7678C4.01339 16.2989 3.75 15.663 3.75 15C3.75 14.337 4.01339 13.7011 4.48223 13.2322C4.95107 12.7634 5.58696 12.5 6.25 12.5C6.91304 12.5 7.54893 12.7634 8.01777 13.2322C8.48661 13.7011 8.75 14.337 8.75 15ZM17.5 15C17.5 15.663 17.2366 16.2989 16.7678 16.7678C16.2989 17.2366 15.663 17.5 15 17.5C14.337 17.5 13.7011 17.2366 13.2322 16.7678C12.7634 16.2989 12.5 15.663 12.5 15C12.5 14.337 12.7634 13.7011 13.2322 13.2322C13.7011 12.7634 14.337 12.5 15 12.5C15.663 12.5 16.2989 12.7634 16.7678 13.2322C17.2366 13.7011 17.5 14.337 17.5 15ZM26.25 15C26.25 15.663 25.9866 16.2989 25.5178 16.7678C25.0489 17.2366 24.413 17.5 23.75 17.5C23.087 17.5 22.4511 17.2366 21.9822 16.7678C21.5134 16.2989 21.25 15.663 21.25 15C21.25 14.337 21.5134 13.7011 21.9822 13.2322C22.4511 12.7634 23.087 12.5 23.75 12.5C24.413 12.5 25.0489 12.7634 25.5178 13.2322C25.9866 13.7011 26.25 14.337 26.25 15Z" fill="#1A1A1A"/>
</svg>
            
            
            <div className="flex items-center space-x-2 xl:space-x-3 ">
            <button className="text-sm xl:text-base border border-[#002882] text-[#002882] px-2 xl:px-3 py-1 xl:py-2 rounded-[5px] ">Buy this again</button>
            <button className="text-sm xl:text-base border border-[#002882] text-[#002882] px-2 xl:px-3 py-1 xl:py-2 rounded-[5px] ">Return / Refund</button>
            <button className="text-sm xl:text-base border border-[#002882] text-[#002882] px-2 xl:px-3
             py-1 xl:py-2 rounded-[5px]" onClick={() => openModal("leaveReview")}>Leave a Reivew</button>
            
            <Link to="/PackageDetail" className="text-sm xl:text-base bg-[#002882] text-white px-2 xl:px-3 py-1 xl:py-2 rounded flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className='w-4 xl:w-6' viewBox="0 0 24 24" fill="none">
  <path d="M19.0739 4.92988L17.6639 6.33988C18.4066 7.08338 18.9955 7.96592 19.397 8.93708C19.7985 9.90824 20.0047 10.949 20.0039 11.9999C20.0039 16.4199 16.4239 19.9999 12.0039 19.9999C7.58391 19.9999 4.00391 16.4199 4.00391 11.9999C4.00391 7.91988 7.05391 4.55988 11.0039 4.06988V6.08988C8.16391 6.56988 6.00391 9.02988 6.00391 11.9999C6.00391 15.3099 8.69391 17.9999 12.0039 17.9999C15.3139 17.9999 18.0039 15.3099 18.0039 11.9999C18.0039 10.3399 17.3339 8.83988 16.2439 7.75988L14.8339 9.16988C15.5539 9.89988 16.0039 10.8999 16.0039 11.9999C16.0039 14.2099 14.2139 15.9999 12.0039 15.9999C9.79391 15.9999 8.00391 14.2099 8.00391 11.9999C8.00391 10.1399 9.28391 8.58988 11.0039 8.13988V10.2799C10.4039 10.6299 10.0039 11.2599 10.0039 11.9999C10.0039 13.0999 10.9039 13.9999 12.0039 13.9999C13.1039 13.9999 14.0039 13.0999 14.0039 11.9999C14.0039 11.2599 13.6039 10.6199 13.0039 10.2799V1.99988H12.0039C6.48391 1.99988 2.00391 6.47988 2.00391 11.9999C2.00391 17.5199 6.48391 21.9999 12.0039 21.9999C17.5239 21.9999 22.0039 17.5199 22.0039 11.9999C22.0039 9.23988 20.8839 6.73988 19.0739 4.92988Z" fill="#E6EAF3"/>
</svg> Track Order</Link>

          </div>
          </div>
          <div className="">
            <div className='p-2 bg-gradient-to-b from-[#FFE09E] to-[#FFFCF4] flex items-center justify-between'> 
            <h3 className="font-bold 2xl:text-lg flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className='w-5 2xl:w-7' viewBox="0 0 38 30" fill="none">
  <g clip-path="url(#clip0_7418_34969)">
    <path d="M36.5625 20.625H35.625V14.291C35.625 13.5469 35.3262 12.832 34.7988 12.3047L28.9453 6.45117C28.418 5.92383 27.7031 5.625 26.959 5.625H24.375V2.8125C24.375 1.25977 23.1152 0 21.5625 0H6.5625C5.00977 0 3.75 1.25977 3.75 2.8125V5.625H0.46875C0.210938 5.625 0 5.83594 0 6.09375V7.03125C0 7.28906 0.210938 7.5 0.46875 7.5H16.4062C16.6641 7.5 16.875 7.71094 16.875 7.96875V8.90625C16.875 9.16406 16.6641 9.375 16.4062 9.375H2.34375C2.08594 9.375 1.875 9.58594 1.875 9.84375V10.7812C1.875 11.0391 2.08594 11.25 2.34375 11.25H14.5312C14.7891 11.25 15 11.4609 15 11.7188V12.6562C15 12.9141 14.7891 13.125 14.5312 13.125H0.46875C0.210938 13.125 0 13.3359 0 13.5938V14.5312C0 14.7891 0.210938 15 0.46875 15H12.6562C12.9141 15 13.125 15.2109 13.125 15.4688V16.4062C13.125 16.6641 12.9141 16.875 12.6562 16.875H3.75V24.375C3.75 27.4805 6.26953 30 9.375 30C12.4805 30 15 27.4805 15 24.375H22.5C22.5 27.4805 25.0195 30 28.125 30C31.2305 30 33.75 27.4805 33.75 24.375H36.5625C37.0781 24.375 37.5 23.9531 37.5 23.4375V21.5625C37.5 21.0469 37.0781 20.625 36.5625 20.625ZM9.375 27.1875C7.82227 27.1875 6.5625 25.9277 6.5625 24.375C6.5625 22.8223 7.82227 21.5625 9.375 21.5625C10.9277 21.5625 12.1875 22.8223 12.1875 24.375C12.1875 25.9277 10.9277 27.1875 9.375 27.1875ZM28.125 27.1875C26.5723 27.1875 25.3125 25.9277 25.3125 24.375C25.3125 22.8223 26.5723 21.5625 28.125 21.5625C29.6777 21.5625 30.9375 22.8223 30.9375 24.375C30.9375 25.9277 29.6777 27.1875 28.125 27.1875ZM32.8125 15H24.375V8.4375H26.959L32.8125 14.291V15Z" fill="#1A1A1A"/>
  </g>
  <defs>
    <clipPath id="clip0_7418_34969">
      <rect width="37.5" height="30" fill="white"/>
    </clipPath>
  </defs>
</svg> Express Delivery
            </h3>
            {order.expressDelivery.trackingNumber && (
              <p className="text-sm">Tracking: {order.expressDelivery.trackingNumber}</p>
            )}
            </div>
            {order.expressDelivery.stores.map((store, idx) => (
              <div key={idx} className="mt-2 2xl:py-2 px-2 2xl:px-4">
                <div className='border border-[#F2F2F2] rounded-[10px] p-2 2xl:p-3 '>
                <h4 className="font-medium flex gap-1 text-[#1A1A1A] "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M3 21.0002H5M5 21.0002H19M5 21.0002V9.32824M21 21.0002H19M19 21.0002V9.32824M5 9.32824C4.96261 9.30677 4.92592 9.28409 4.89 9.26024L4.35 8.90024C3.96826 8.64562 3.68568 8.26746 3.54967 7.82921C3.41366 7.39096 3.43249 6.91926 3.603 6.49324L4.497 4.25724C4.64549 3.88615 4.90176 3.56806 5.23276 3.34401C5.56376 3.11995 5.9543 3.00022 6.354 3.00024H17.646C18.0457 3.00022 18.4362 3.11995 18.7672 3.34401C19.0982 3.56806 19.3545 3.88615 19.503 4.25724L20.397 6.49324C20.5675 6.91926 20.5863 7.39096 20.4503 7.82921C20.3143 8.26746 20.0317 8.64562 19.65 8.90024L19.11 9.26024C19.0741 9.28409 19.0374 9.30677 19 9.32824M5 9.32824C5.32305 9.51483 5.69184 9.60733 6.0647 9.59532C6.43757 9.5833 6.79964 9.46724 7.11 9.26024L9 8.00024L10.89 9.26024C11.2187 9.47952 11.6049 9.59654 12 9.59654C12.3951 9.59654 12.7813 9.47952 13.11 9.26024L15 8.00024L16.89 9.26024C17.2004 9.46724 17.5624 9.5833 17.9353 9.59532C18.3082 9.60733 18.677 9.51483 19 9.32824" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M13.998 21V16C13.998 15.4696 13.7873 14.9609 13.4123 14.5858C13.0372 14.2107 12.5285 14 11.998 14C11.4676 14 10.9589 14.2107 10.5838 14.5858C10.2088 14.9609 9.99805 15.4696 9.99805 16V21" stroke="#1A1A1A" stroke-width="1.5"/>
</svg> {store.name}</h4>
<div className='bg-[#F2F2F2] h-px my-3 '></div>
                <div className="flex gap-2 overflow-x-auto">
                  {store.products.map((product) => (
                    <div key={product.id} className="mt-2 2xl:w-32 text-center ">
                      <img src={product.img} alt={product.name} className="w-25 h-25 2xl:w-48 2xl:h-30 object-cover rounded-[10px]" />
                      <p className="text-sm mt-1">{product.price}</p>
                    </div>
                  ))}
                </div>
                </div>
              </div>
            ))}
          </div>
          <div className=" rounded-md mt-4">
            <h3 className="p-2 font-bold 2xl:text-lg flex items-center gap-1 bg-[#E6EAF3] ">
                <svg xmlns="http://www.w3.org/2000/svg" className='w-5 2xl:w-7' viewBox="0 0 30 30" fill="none">
  <path d="M16.0109 28.3931C16.0536 28.3839 16.095 28.3695 16.1342 28.3503C16.1749 28.3299 16.2159 28.3072 16.2574 28.2822L25.8954 22.7922C26.47 22.4637 26.907 22.0883 27.2063 21.6662C27.5063 21.243 27.6561 20.5844 27.6558 19.6905V10.1012C27.6558 9.72367 27.6229 9.41171 27.5572 9.16528L16.0109 15.7637V28.3931ZM14.3245 28.3931V15.7637L2.77826 9.16528C2.71254 9.41171 2.67969 9.72367 2.67969 10.1012V19.6905C2.67969 20.5851 2.83147 21.2437 3.13504 21.6662C3.43862 22.0887 3.87362 22.464 4.44004 22.7922L14.0904 28.2822C14.1311 28.3069 14.17 28.3296 14.2072 28.3503C14.2438 28.3702 14.2837 28.3846 14.3245 28.3931ZM15.1736 14.2862L20.4295 11.3076L8.77237 4.64814L4.25469 7.22064C3.97612 7.37671 3.74629 7.53671 3.56522 7.70064L15.1736 14.2862ZM22.1406 10.3347L26.7691 7.70064C26.5611 7.51707 26.3341 7.35616 26.092 7.22064L17.4022 2.27224C16.639 1.82903 15.8961 1.60742 15.1736 1.60742C14.4433 1.60742 13.6967 1.82885 12.9338 2.27171L10.4347 3.6876L22.1406 10.3347Z" fill="#002882"/>
</svg> Standard Delivery</h3>
            {order.standardDelivery.stores.map((store, idx) => (
              <div key={idx} className="mt-2 2xl:py-2 px-2 2xl:px-4">
                <div className='border border-[#F2F2F2] rounded-[10px] p-2   2xl:p-3 '>
                <h4 className="font-medium flex gap-1 text-[#1A1A1A] "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M3 21.0002H5M5 21.0002H19M5 21.0002V9.32824M21 21.0002H19M19 21.0002V9.32824M5 9.32824C4.96261 9.30677 4.92592 9.28409 4.89 9.26024L4.35 8.90024C3.96826 8.64562 3.68568 8.26746 3.54967 7.82921C3.41366 7.39096 3.43249 6.91926 3.603 6.49324L4.497 4.25724C4.64549 3.88615 4.90176 3.56806 5.23276 3.34401C5.56376 3.11995 5.9543 3.00022 6.354 3.00024H17.646C18.0457 3.00022 18.4362 3.11995 18.7672 3.34401C19.0982 3.56806 19.3545 3.88615 19.503 4.25724L20.397 6.49324C20.5675 6.91926 20.5863 7.39096 20.4503 7.82921C20.3143 8.26746 20.0317 8.64562 19.65 8.90024L19.11 9.26024C19.0741 9.28409 19.0374 9.30677 19 9.32824M5 9.32824C5.32305 9.51483 5.69184 9.60733 6.0647 9.59532C6.43757 9.5833 6.79964 9.46724 7.11 9.26024L9 8.00024L10.89 9.26024C11.2187 9.47952 11.6049 9.59654 12 9.59654C12.3951 9.59654 12.7813 9.47952 13.11 9.26024L15 8.00024L16.89 9.26024C17.2004 9.46724 17.5624 9.5833 17.9353 9.59532C18.3082 9.60733 18.677 9.51483 19 9.32824" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M13.998 21V16C13.998 15.4696 13.7873 14.9609 13.4123 14.5858C13.0372 14.2107 12.5285 14 11.998 14C11.4676 14 10.9589 14.2107 10.5838 14.5858C10.2088 14.9609 9.99805 15.4696 9.99805 16V21" stroke="#1A1A1A" stroke-width="1.5"/>
</svg> {store.name}</h4>
<div className='bg-[#F2F2F2] h-px my-3 '></div>
                <div className="flex gap-2 overflow-x-auto">
                  {store.products.map((product) => (
                    <div key={product.id} className="text-center 2xl:w-32">
                      <img src={product.img} alt={product.name} className=" w-25 h-25 2xl:w-48 2xl:h-30 object-cover rounded-[10px]" />
                      <p className="text-sm mt-1">{product.price}</p>
                    </div>
                  ))}
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>

    <div className='bg-[#FCFCFC] pt-4'>
        <div className="text-xl md:text-2xl 2xl:text-4xl font-bold flex gap-1 justify-center mb-4">
  <span className="text-[#F04438]">MORE</span> 
  <span className="text-black">TO LOVE</span>
</div>
<MoreToLove/>
        </div>
        </div>
        
    </div>):(
      <div className='overflow-hidden bg-natural-color'>
        <div className="flex bg-[#fff] py-2 overflow-x-auto overflow-y-hidden scrollbar-hidden justify-between">
  {tabs.map((tab) => (
    <button
      key={tab}
      onClick={() => setActiveTab(tab)}
      className={`flex-grow text-sm text-center pb-2 relative transition min-w-[80px] ${
        activeTab === tab
          ? "text-[#333] font-medium after:absolute after:left-[30%] after:bottom-[0px] after:w-[20px] after:h-[3px] after:bg-[#1A1A1A]"
          : "text-natural-gray"
      }`}
    >
      {tab}
    </button>
  ))}
</div>


    <div className="flex justify-between bg-[#fff] gap-2 items-start py-3 px-4 mt-4 w-full">
      {/* Left Section (Order Details) */}
      <div>
        <h2 className="text-sm font-semibold text-gray-900">#PO-153-18926398341670452</h2>
        <p className="text-xs text-gray-500 mt-1">Order split into 2 packages:</p>
      </div>

      {/* Right Section (Date & Amount) */}
      <div className="text-right">
        <p className="text-xs text-gray-500">Nov 4, 2024 at 17:45:00</p>
        <p className="text-sm font-bold text-gray-900 mt-1">PKR 41,200</p>
      </div>
    </div>

    {orderData.map((order, index) => (
        <div key={index} className="bg-white rounded-lg  mb-6" >
          
          
            <div className='p-2 bg-gradient-to-b from-[#FFE9BB] to-[#FFFCF4 ] flex items-center justify-between'> 
            <h3 className="font-bold text-sm flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className='w-4' viewBox="0 0 38 30" fill="none">
  <g clip-path="url(#clip0_7418_34969)">
    <path d="M36.5625 20.625H35.625V14.291C35.625 13.5469 35.3262 12.832 34.7988 12.3047L28.9453 6.45117C28.418 5.92383 27.7031 5.625 26.959 5.625H24.375V2.8125C24.375 1.25977 23.1152 0 21.5625 0H6.5625C5.00977 0 3.75 1.25977 3.75 2.8125V5.625H0.46875C0.210938 5.625 0 5.83594 0 6.09375V7.03125C0 7.28906 0.210938 7.5 0.46875 7.5H16.4062C16.6641 7.5 16.875 7.71094 16.875 7.96875V8.90625C16.875 9.16406 16.6641 9.375 16.4062 9.375H2.34375C2.08594 9.375 1.875 9.58594 1.875 9.84375V10.7812C1.875 11.0391 2.08594 11.25 2.34375 11.25H14.5312C14.7891 11.25 15 11.4609 15 11.7188V12.6562C15 12.9141 14.7891 13.125 14.5312 13.125H0.46875C0.210938 13.125 0 13.3359 0 13.5938V14.5312C0 14.7891 0.210938 15 0.46875 15H12.6562C12.9141 15 13.125 15.2109 13.125 15.4688V16.4062C13.125 16.6641 12.9141 16.875 12.6562 16.875H3.75V24.375C3.75 27.4805 6.26953 30 9.375 30C12.4805 30 15 27.4805 15 24.375H22.5C22.5 27.4805 25.0195 30 28.125 30C31.2305 30 33.75 27.4805 33.75 24.375H36.5625C37.0781 24.375 37.5 23.9531 37.5 23.4375V21.5625C37.5 21.0469 37.0781 20.625 36.5625 20.625ZM9.375 27.1875C7.82227 27.1875 6.5625 25.9277 6.5625 24.375C6.5625 22.8223 7.82227 21.5625 9.375 21.5625C10.9277 21.5625 12.1875 22.8223 12.1875 24.375C12.1875 25.9277 10.9277 27.1875 9.375 27.1875ZM28.125 27.1875C26.5723 27.1875 25.3125 25.9277 25.3125 24.375C25.3125 22.8223 26.5723 21.5625 28.125 21.5625C29.6777 21.5625 30.9375 22.8223 30.9375 24.375C30.9375 25.9277 29.6777 27.1875 28.125 27.1875ZM32.8125 15H24.375V8.4375H26.959L32.8125 14.291V15Z" fill="#1A1A1A"/>
  </g>
  <defs>
    <clipPath id="clip0_7418_34969">
      <rect width="37.5" height="30" fill="white"/>
    </clipPath>
  </defs>
</svg> Express Delivery
            </h3>
            {order.expressDelivery.trackingNumber && (
              <p className="text-sm">Tracking: {order.expressDelivery.trackingNumber}</p>
            )}
            </div>
            {order.expressDelivery.stores.map((store, idx) => (
              <div key={idx} className="mt-2 2xl:py-2 px-2 2xl:px-4">
                <div className='border border-[#F2F2F2] rounded-[10px] p-2 2xl:p-3 '>
                <div className='flex justify-between'>
                <h4 className="font-medium flex gap-1 text-[#1A1A1A] ">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M3 21.0002H5M5 21.0002H19M5 21.0002V9.32824M21 21.0002H19M19 21.0002V9.32824M5 9.32824C4.96261 9.30677 4.92592 9.28409 4.89 9.26024L4.35 8.90024C3.96826 8.64562 3.68568 8.26746 3.54967 7.82921C3.41366 7.39096 3.43249 6.91926 3.603 6.49324L4.497 4.25724C4.64549 3.88615 4.90176 3.56806 5.23276 3.34401C5.56376 3.11995 5.9543 3.00022 6.354 3.00024H17.646C18.0457 3.00022 18.4362 3.11995 18.7672 3.34401C19.0982 3.56806 19.3545 3.88615 19.503 4.25724L20.397 6.49324C20.5675 6.91926 20.5863 7.39096 20.4503 7.82921C20.3143 8.26746 20.0317 8.64562 19.65 8.90024L19.11 9.26024C19.0741 9.28409 19.0374 9.30677 19 9.32824M5 9.32824C5.32305 9.51483 5.69184 9.60733 6.0647 9.59532C6.43757 9.5833 6.79964 9.46724 7.11 9.26024L9 8.00024L10.89 9.26024C11.2187 9.47952 11.6049 9.59654 12 9.59654C12.3951 9.59654 12.7813 9.47952 13.11 9.26024L15 8.00024L16.89 9.26024C17.2004 9.46724 17.5624 9.5833 17.9353 9.59532C18.3082 9.60733 18.677 9.51483 19 9.32824" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M13.998 21V16C13.998 15.4696 13.7873 14.9609 13.4123 14.5858C13.0372 14.2107 12.5285 14 11.998 14C11.4676 14 10.9589 14.2107 10.5838 14.5858C10.2088 14.9609 9.99805 15.4696 9.99805 16V21" stroke="#1A1A1A" stroke-width="1.5"/>
</svg> {store.name}</h4>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M10 8L14 12L10 16" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                </div>
<div className='bg-[#F2F2F2] h-px my-3 '></div>
                <div className="flex gap-2 overflow-x-auto">
                  {store.products.map((product) => (
                    <div key={product.id} className="mt-2 2xl:w-32 text-center ">
                      <img src={product.img} alt={product.name} className="w-20 h-20 2xl:w-48 2xl:h-30 object-cover rounded-[10px]" />
                      
                    </div>
                  ))}
                </div>
                </div>
              </div>
            ))}
          
          <div className=" rounded-md mt-4 pb-1">
            <h3 className="p-2 font-bold text-sm flex items-center gap-1 bg-[#E6EAF3] ">
                <svg xmlns="http://www.w3.org/2000/svg" className='w-4' viewBox="0 0 30 30" fill="none">
  <path d="M16.0109 28.3931C16.0536 28.3839 16.095 28.3695 16.1342 28.3503C16.1749 28.3299 16.2159 28.3072 16.2574 28.2822L25.8954 22.7922C26.47 22.4637 26.907 22.0883 27.2063 21.6662C27.5063 21.243 27.6561 20.5844 27.6558 19.6905V10.1012C27.6558 9.72367 27.6229 9.41171 27.5572 9.16528L16.0109 15.7637V28.3931ZM14.3245 28.3931V15.7637L2.77826 9.16528C2.71254 9.41171 2.67969 9.72367 2.67969 10.1012V19.6905C2.67969 20.5851 2.83147 21.2437 3.13504 21.6662C3.43862 22.0887 3.87362 22.464 4.44004 22.7922L14.0904 28.2822C14.1311 28.3069 14.17 28.3296 14.2072 28.3503C14.2438 28.3702 14.2837 28.3846 14.3245 28.3931ZM15.1736 14.2862L20.4295 11.3076L8.77237 4.64814L4.25469 7.22064C3.97612 7.37671 3.74629 7.53671 3.56522 7.70064L15.1736 14.2862ZM22.1406 10.3347L26.7691 7.70064C26.5611 7.51707 26.3341 7.35616 26.092 7.22064L17.4022 2.27224C16.639 1.82903 15.8961 1.60742 15.1736 1.60742C14.4433 1.60742 13.6967 1.82885 12.9338 2.27171L10.4347 3.6876L22.1406 10.3347Z" fill="#002882"/>
</svg> Standard Delivery</h3>
            {order.standardDelivery.stores.map((store, idx) => (
              <>
              <div key={idx} className="mt-2 2xl:py-2 px-2 2xl:px-4">
                <div className='border border-[#F2F2F2] rounded-[10px] p-2   2xl:p-3 '>
                <div className='flex justify-between'>
                <h4 className="font-medium flex gap-1 text-[#1A1A1A] ">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M3 21.0002H5M5 21.0002H19M5 21.0002V9.32824M21 21.0002H19M19 21.0002V9.32824M5 9.32824C4.96261 9.30677 4.92592 9.28409 4.89 9.26024L4.35 8.90024C3.96826 8.64562 3.68568 8.26746 3.54967 7.82921C3.41366 7.39096 3.43249 6.91926 3.603 6.49324L4.497 4.25724C4.64549 3.88615 4.90176 3.56806 5.23276 3.34401C5.56376 3.11995 5.9543 3.00022 6.354 3.00024H17.646C18.0457 3.00022 18.4362 3.11995 18.7672 3.34401C19.0982 3.56806 19.3545 3.88615 19.503 4.25724L20.397 6.49324C20.5675 6.91926 20.5863 7.39096 20.4503 7.82921C20.3143 8.26746 20.0317 8.64562 19.65 8.90024L19.11 9.26024C19.0741 9.28409 19.0374 9.30677 19 9.32824M5 9.32824C5.32305 9.51483 5.69184 9.60733 6.0647 9.59532C6.43757 9.5833 6.79964 9.46724 7.11 9.26024L9 8.00024L10.89 9.26024C11.2187 9.47952 11.6049 9.59654 12 9.59654C12.3951 9.59654 12.7813 9.47952 13.11 9.26024L15 8.00024L16.89 9.26024C17.2004 9.46724 17.5624 9.5833 17.9353 9.59532C18.3082 9.60733 18.677 9.51483 19 9.32824" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M13.998 21V16C13.998 15.4696 13.7873 14.9609 13.4123 14.5858C13.0372 14.2107 12.5285 14 11.998 14C11.4676 14 10.9589 14.2107 10.5838 14.5858C10.2088 14.9609 9.99805 15.4696 9.99805 16V21" stroke="#1A1A1A" stroke-width="1.5"/>
</svg> {store.name}</h4>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M10 8L14 12L10 16" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                </div>
<div className='bg-[#F2F2F2] h-px my-3 '></div>
                <div className="flex gap-2 overflow-x-auto">
                  {store.products.map((product) => (
                    <div key={product.id} className="text-center 2xl:w-32">
                      <img src={product.img} alt={product.name} className=" w-20 h-20 2xl:w-48 2xl:h-30 object-cover rounded-[10px]" />
              
                    </div>
                  ))}
                </div>
                </div>
              </div>

              <div className="relative flex justify-between m-2">
            
            <button onClick={() => openModal("availableOffers")}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 30 30" fill="none">
  <path d="M8.75 15C8.75 15.663 8.48661 16.2989 8.01777 16.7678C7.54893 17.2366 6.91304 17.5 6.25 17.5C5.58696 17.5 4.95107 17.2366 4.48223 16.7678C4.01339 16.2989 3.75 15.663 3.75 15C3.75 14.337 4.01339 13.7011 4.48223 13.2322C4.95107 12.7634 5.58696 12.5 6.25 12.5C6.91304 12.5 7.54893 12.7634 8.01777 13.2322C8.48661 13.7011 8.75 14.337 8.75 15ZM17.5 15C17.5 15.663 17.2366 16.2989 16.7678 16.7678C16.2989 17.2366 15.663 17.5 15 17.5C14.337 17.5 13.7011 17.2366 13.2322 16.7678C12.7634 16.2989 12.5 15.663 12.5 15C12.5 14.337 12.7634 13.7011 13.2322 13.2322C13.7011 12.7634 14.337 12.5 15 12.5C15.663 12.5 16.2989 12.7634 16.7678 13.2322C17.2366 13.7011 17.5 14.337 17.5 15ZM26.25 15C26.25 15.663 25.9866 16.2989 25.5178 16.7678C25.0489 17.2366 24.413 17.5 23.75 17.5C23.087 17.5 22.4511 17.2366 21.9822 16.7678C21.5134 16.2989 21.25 15.663 21.25 15C21.25 14.337 21.5134 13.7011 21.9822 13.2322C22.4511 12.7634 23.087 12.5 23.75 12.5C24.413 12.5 25.0489 12.7634 25.5178 13.2322C25.9866 13.7011 26.25 14.337 26.25 15Z" fill="#1A1A1A"/>
</svg>
            </button>
            {activeModal === "availableOffers" && (
             <div className="absolute bottom-8 flex left-0 bg-opacity-50 px-5 md:p-0 z-1050 "
             onClick={closeModal}
           >
                <div
                  className="bg-[#FCFCFC] border flex flex-col items-start gap-4 rounded-md shadow-lg relative"
                  onClick={(e) => e.stopPropagation()}
                >
      <button className='p-2'>Cancel Order </button>
      <svg xmlns="http://www.w3.org/2000/svg" className='absolute left-0 bottom-[-8px] w-3' viewBox="0 0 8 6" fill="none">
  <path d="M4 6L0.535898 6.52533e-07L7.4641 4.68497e-08L4 6Z" fill="#FCFCFC"/>
</svg>
                </div>
              </div>
            )}
            
            <div className="flex items-center space-x-2 ">
                <p className='text-[#F04438] flex text-sm'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='h-5 2xl:h-6 2xl:w-6' viewBox="0 0 24 24" fill="none">
  <path d="M12.75 7C12.75 6.80109 12.671 6.61032 12.5303 6.46967C12.3897 6.32902 12.1989 6.25 12 6.25C11.8011 6.25 11.6103 6.32902 11.4697 6.46967C11.329 6.61032 11.25 6.80109 11.25 7V12C11.2499 12.1272 11.2822 12.2522 11.3438 12.3635C11.4054 12.4747 11.4942 12.5685 11.602 12.636L14.602 14.511C14.7707 14.6166 14.9744 14.6508 15.1683 14.6061C15.2643 14.584 15.355 14.5433 15.4353 14.4861C15.5155 14.4289 15.5837 14.3565 15.636 14.273C15.6883 14.1895 15.7236 14.0965 15.7399 13.9993C15.7562 13.9022 15.7532 13.8027 15.7311 13.7067C15.709 13.6107 15.6683 13.52 15.6111 13.4397C15.5539 13.3595 15.4815 13.2913 15.398 13.239L12.75 11.584V7Z" fill="#F04438"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.25C9.67936 3.25 7.45376 4.17187 5.81282 5.81282C4.17187 7.45376 3.25 9.67936 3.25 12C3.25 14.3206 4.17187 16.5462 5.81282 18.1872C7.45376 19.8281 9.67936 20.75 12 20.75C14.3206 20.75 16.5462 19.8281 18.1872 18.1872C19.8281 16.5462 20.75 14.3206 20.75 12C20.75 9.67936 19.8281 7.45376 18.1872 5.81282C16.5462 4.17187 14.3206 3.25 12 3.25ZM4.75 12C4.75 11.0479 4.93753 10.1052 5.30187 9.22554C5.66622 8.34593 6.20025 7.5467 6.87348 6.87348C7.5467 6.20025 8.34593 5.66622 9.22554 5.30187C10.1052 4.93753 11.0479 4.75 12 4.75C12.9521 4.75 13.8948 4.93753 14.7745 5.30187C15.6541 5.66622 16.4533 6.20025 17.1265 6.87348C17.7997 7.5467 18.3338 8.34593 18.6981 9.22554C19.0625 10.1052 19.25 11.0479 19.25 12C19.25 13.9228 18.4862 15.7669 17.1265 17.1265C15.7669 18.4862 13.9228 19.25 12 19.25C10.0772 19.25 8.23311 18.4862 6.87348 17.1265C5.51384 15.7669 4.75 13.9228 4.75 12Z" fill="#F04438"/>
</svg> {order.date}</p>
            
            <button className="text-sm border border-[#002882] text-[#002882] px-2 xl:px-3 py-1 
            xl:py-2 rounded-[5px]" onClick={()=>openModal('editAddress')}>Edit Address</button>

            <button className="text-sm bg-[#002882] text-white px-2 xl:px-3 py-1 xl:py-2 rounded " 
            onClick={()=>openModal('payNow')}>Pay Now</button>
          </div>
          </div>
              </>
              
            ))}
          </div>
        </div>
      ))}
    <div className="flex justify-between bg-[#fff] gap-2 items-start py-3 px-4 mt-4 w-full">
      {/* Left Section (Order Details) */}
      <div>
        <h2 className="text-sm font-semibold text-gray-900">#PO-153-18926398341670452</h2>
        <p className="text-xs text-gray-500 mt-1">Order split into 2 packages:</p>
      </div>

      {/* Right Section (Date & Amount) */}
      <div className="text-right">
        <p className="text-xs text-gray-500">Nov 4, 2024 at 17:45:00</p>
        <p className="text-sm font-bold text-gray-900 mt-1">PKR 41,200</p>
      </div>
    </div>

    {orderData.map((order, index) => (
        <div key={index} className="bg-white rounded-lg  mb-6" >
          
          
            <div className='p-2 bg-gradient-to-b from-[#FFE9BB] to-[#FFFCF4 ] flex items-center justify-between'> 
            <h3 className="font-bold text-sm flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className='w-4' viewBox="0 0 38 30" fill="none">
  <g clip-path="url(#clip0_7418_34969)">
    <path d="M36.5625 20.625H35.625V14.291C35.625 13.5469 35.3262 12.832 34.7988 12.3047L28.9453 6.45117C28.418 5.92383 27.7031 5.625 26.959 5.625H24.375V2.8125C24.375 1.25977 23.1152 0 21.5625 0H6.5625C5.00977 0 3.75 1.25977 3.75 2.8125V5.625H0.46875C0.210938 5.625 0 5.83594 0 6.09375V7.03125C0 7.28906 0.210938 7.5 0.46875 7.5H16.4062C16.6641 7.5 16.875 7.71094 16.875 7.96875V8.90625C16.875 9.16406 16.6641 9.375 16.4062 9.375H2.34375C2.08594 9.375 1.875 9.58594 1.875 9.84375V10.7812C1.875 11.0391 2.08594 11.25 2.34375 11.25H14.5312C14.7891 11.25 15 11.4609 15 11.7188V12.6562C15 12.9141 14.7891 13.125 14.5312 13.125H0.46875C0.210938 13.125 0 13.3359 0 13.5938V14.5312C0 14.7891 0.210938 15 0.46875 15H12.6562C12.9141 15 13.125 15.2109 13.125 15.4688V16.4062C13.125 16.6641 12.9141 16.875 12.6562 16.875H3.75V24.375C3.75 27.4805 6.26953 30 9.375 30C12.4805 30 15 27.4805 15 24.375H22.5C22.5 27.4805 25.0195 30 28.125 30C31.2305 30 33.75 27.4805 33.75 24.375H36.5625C37.0781 24.375 37.5 23.9531 37.5 23.4375V21.5625C37.5 21.0469 37.0781 20.625 36.5625 20.625ZM9.375 27.1875C7.82227 27.1875 6.5625 25.9277 6.5625 24.375C6.5625 22.8223 7.82227 21.5625 9.375 21.5625C10.9277 21.5625 12.1875 22.8223 12.1875 24.375C12.1875 25.9277 10.9277 27.1875 9.375 27.1875ZM28.125 27.1875C26.5723 27.1875 25.3125 25.9277 25.3125 24.375C25.3125 22.8223 26.5723 21.5625 28.125 21.5625C29.6777 21.5625 30.9375 22.8223 30.9375 24.375C30.9375 25.9277 29.6777 27.1875 28.125 27.1875ZM32.8125 15H24.375V8.4375H26.959L32.8125 14.291V15Z" fill="#1A1A1A"/>
  </g>
  <defs>
    <clipPath id="clip0_7418_34969">
      <rect width="37.5" height="30" fill="white"/>
    </clipPath>
  </defs>
</svg> Express Delivery
            </h3>
            {order.expressDelivery.trackingNumber && (
              <p className="text-sm">Tracking: {order.expressDelivery.trackingNumber}</p>
            )}
            </div>
            {order.expressDelivery.stores.map((store, idx) => (
              <div key={idx} className="mt-2 2xl:py-2 px-2 2xl:px-4">
                <div className='border border-[#F2F2F2] rounded-[10px] p-2 2xl:p-3 '>
                <div className='flex justify-between'>
                <h4 className="font-medium flex gap-1 text-[#1A1A1A] ">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M3 21.0002H5M5 21.0002H19M5 21.0002V9.32824M21 21.0002H19M19 21.0002V9.32824M5 9.32824C4.96261 9.30677 4.92592 9.28409 4.89 9.26024L4.35 8.90024C3.96826 8.64562 3.68568 8.26746 3.54967 7.82921C3.41366 7.39096 3.43249 6.91926 3.603 6.49324L4.497 4.25724C4.64549 3.88615 4.90176 3.56806 5.23276 3.34401C5.56376 3.11995 5.9543 3.00022 6.354 3.00024H17.646C18.0457 3.00022 18.4362 3.11995 18.7672 3.34401C19.0982 3.56806 19.3545 3.88615 19.503 4.25724L20.397 6.49324C20.5675 6.91926 20.5863 7.39096 20.4503 7.82921C20.3143 8.26746 20.0317 8.64562 19.65 8.90024L19.11 9.26024C19.0741 9.28409 19.0374 9.30677 19 9.32824M5 9.32824C5.32305 9.51483 5.69184 9.60733 6.0647 9.59532C6.43757 9.5833 6.79964 9.46724 7.11 9.26024L9 8.00024L10.89 9.26024C11.2187 9.47952 11.6049 9.59654 12 9.59654C12.3951 9.59654 12.7813 9.47952 13.11 9.26024L15 8.00024L16.89 9.26024C17.2004 9.46724 17.5624 9.5833 17.9353 9.59532C18.3082 9.60733 18.677 9.51483 19 9.32824" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M13.998 21V16C13.998 15.4696 13.7873 14.9609 13.4123 14.5858C13.0372 14.2107 12.5285 14 11.998 14C11.4676 14 10.9589 14.2107 10.5838 14.5858C10.2088 14.9609 9.99805 15.4696 9.99805 16V21" stroke="#1A1A1A" stroke-width="1.5"/>
</svg> {store.name}</h4>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M10 8L14 12L10 16" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                </div>
<div className='bg-[#F2F2F2] h-px my-3 '></div>
                <div className="flex gap-2 overflow-x-auto">
                  {store.products.map((product) => (
                    <div key={product.id} className="mt-2 2xl:w-32 text-center ">
                      <img src={product.img} alt={product.name} className="w-20 h-20 2xl:w-48 2xl:h-30 object-cover rounded-[10px]" />
                      
                    </div>
                  ))}
                </div>
                </div>
              </div>
            ))}
          
          <div className=" rounded-md mt-4 pb-1">
            <h3 className="p-2 font-bold text-sm flex items-center gap-1 bg-[#E6EAF3] ">
                <svg xmlns="http://www.w3.org/2000/svg" className='w-4' viewBox="0 0 30 30" fill="none">
  <path d="M16.0109 28.3931C16.0536 28.3839 16.095 28.3695 16.1342 28.3503C16.1749 28.3299 16.2159 28.3072 16.2574 28.2822L25.8954 22.7922C26.47 22.4637 26.907 22.0883 27.2063 21.6662C27.5063 21.243 27.6561 20.5844 27.6558 19.6905V10.1012C27.6558 9.72367 27.6229 9.41171 27.5572 9.16528L16.0109 15.7637V28.3931ZM14.3245 28.3931V15.7637L2.77826 9.16528C2.71254 9.41171 2.67969 9.72367 2.67969 10.1012V19.6905C2.67969 20.5851 2.83147 21.2437 3.13504 21.6662C3.43862 22.0887 3.87362 22.464 4.44004 22.7922L14.0904 28.2822C14.1311 28.3069 14.17 28.3296 14.2072 28.3503C14.2438 28.3702 14.2837 28.3846 14.3245 28.3931ZM15.1736 14.2862L20.4295 11.3076L8.77237 4.64814L4.25469 7.22064C3.97612 7.37671 3.74629 7.53671 3.56522 7.70064L15.1736 14.2862ZM22.1406 10.3347L26.7691 7.70064C26.5611 7.51707 26.3341 7.35616 26.092 7.22064L17.4022 2.27224C16.639 1.82903 15.8961 1.60742 15.1736 1.60742C14.4433 1.60742 13.6967 1.82885 12.9338 2.27171L10.4347 3.6876L22.1406 10.3347Z" fill="#002882"/>
</svg> Standard Delivery</h3>
            {order.standardDelivery.stores.map((store, idx) => (
              <>
              <div key={idx} className="mt-2 2xl:py-2 px-2 2xl:px-4">
                <div className='border border-[#F2F2F2] rounded-[10px] p-2   2xl:p-3 '>
                <div className='flex justify-between'>
                <h4 className="font-medium flex gap-1 text-[#1A1A1A] ">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M3 21.0002H5M5 21.0002H19M5 21.0002V9.32824M21 21.0002H19M19 21.0002V9.32824M5 9.32824C4.96261 9.30677 4.92592 9.28409 4.89 9.26024L4.35 8.90024C3.96826 8.64562 3.68568 8.26746 3.54967 7.82921C3.41366 7.39096 3.43249 6.91926 3.603 6.49324L4.497 4.25724C4.64549 3.88615 4.90176 3.56806 5.23276 3.34401C5.56376 3.11995 5.9543 3.00022 6.354 3.00024H17.646C18.0457 3.00022 18.4362 3.11995 18.7672 3.34401C19.0982 3.56806 19.3545 3.88615 19.503 4.25724L20.397 6.49324C20.5675 6.91926 20.5863 7.39096 20.4503 7.82921C20.3143 8.26746 20.0317 8.64562 19.65 8.90024L19.11 9.26024C19.0741 9.28409 19.0374 9.30677 19 9.32824M5 9.32824C5.32305 9.51483 5.69184 9.60733 6.0647 9.59532C6.43757 9.5833 6.79964 9.46724 7.11 9.26024L9 8.00024L10.89 9.26024C11.2187 9.47952 11.6049 9.59654 12 9.59654C12.3951 9.59654 12.7813 9.47952 13.11 9.26024L15 8.00024L16.89 9.26024C17.2004 9.46724 17.5624 9.5833 17.9353 9.59532C18.3082 9.60733 18.677 9.51483 19 9.32824" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M13.998 21V16C13.998 15.4696 13.7873 14.9609 13.4123 14.5858C13.0372 14.2107 12.5285 14 11.998 14C11.4676 14 10.9589 14.2107 10.5838 14.5858C10.2088 14.9609 9.99805 15.4696 9.99805 16V21" stroke="#1A1A1A" stroke-width="1.5"/>
</svg> {store.name}</h4>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M10 8L14 12L10 16" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                </div>
<div className='bg-[#F2F2F2] h-px my-3 '></div>
                <div className="flex gap-2 overflow-x-auto">
                  {store.products.map((product) => (
                    <div key={product.id} className="text-center 2xl:w-32">
                      <img src={product.img} alt={product.name} className=" w-20 h-20 2xl:w-48 2xl:h-30 object-cover rounded-[10px]" />
              
                    </div>
                  ))}
                </div>
                </div>
              </div>

              <div className="relative flex justify-between m-2">
            
            <button onClick={() => openModal("availableOffers")}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 30 30" fill="none">
  <path d="M8.75 15C8.75 15.663 8.48661 16.2989 8.01777 16.7678C7.54893 17.2366 6.91304 17.5 6.25 17.5C5.58696 17.5 4.95107 17.2366 4.48223 16.7678C4.01339 16.2989 3.75 15.663 3.75 15C3.75 14.337 4.01339 13.7011 4.48223 13.2322C4.95107 12.7634 5.58696 12.5 6.25 12.5C6.91304 12.5 7.54893 12.7634 8.01777 13.2322C8.48661 13.7011 8.75 14.337 8.75 15ZM17.5 15C17.5 15.663 17.2366 16.2989 16.7678 16.7678C16.2989 17.2366 15.663 17.5 15 17.5C14.337 17.5 13.7011 17.2366 13.2322 16.7678C12.7634 16.2989 12.5 15.663 12.5 15C12.5 14.337 12.7634 13.7011 13.2322 13.2322C13.7011 12.7634 14.337 12.5 15 12.5C15.663 12.5 16.2989 12.7634 16.7678 13.2322C17.2366 13.7011 17.5 14.337 17.5 15ZM26.25 15C26.25 15.663 25.9866 16.2989 25.5178 16.7678C25.0489 17.2366 24.413 17.5 23.75 17.5C23.087 17.5 22.4511 17.2366 21.9822 16.7678C21.5134 16.2989 21.25 15.663 21.25 15C21.25 14.337 21.5134 13.7011 21.9822 13.2322C22.4511 12.7634 23.087 12.5 23.75 12.5C24.413 12.5 25.0489 12.7634 25.5178 13.2322C25.9866 13.7011 26.25 14.337 26.25 15Z" fill="#1A1A1A"/>
</svg>
            </button>
            {activeModal === "availableOffers" && (
             <div className="absolute bottom-8 flex left-0 bg-opacity-50 px-5 md:p-0 z-1050 "
             onClick={closeModal}
           >
                <div
                  className="bg-[#FCFCFC] border flex flex-col items-start gap-4 rounded-md shadow-lg relative"
                  onClick={(e) => e.stopPropagation()}
                >
      <button className='p-2'>Cancel Order </button>
      <svg xmlns="http://www.w3.org/2000/svg" className='absolute left-0 bottom-[-8px] w-3' viewBox="0 0 8 6" fill="none">
  <path d="M4 6L0.535898 6.52533e-07L7.4641 4.68497e-08L4 6Z" fill="#FCFCFC"/>
</svg>
                </div>
              </div>
            )}
            
            <div className="flex items-center space-x-3 ">
            <button className="text-sm xl:text-base bg-[#002882] text-white px-2 xl:px-3 py-1 xl:py-2 rounded flex items-center gap-1">
             Track Order</button>
          </div>
          </div>
              </>
              
            ))}
          </div>
        </div>
      ))}
       <div className='bg-[#FCFCFC] pt-4 '>
       <div className="text-xl text-natural-black md:text-2xl 2xl:text-4xl font-bold flex gap-1 justify-center mb-4">
  <span >MORE TO LOVE</span> 
</div>
<MoreToLove/>
        </div>
      </div>
    )}

{activeModal === "leaveReview" && (
        <div
          className="fixed inset-0 bg-[#00000042] bg-opacity-50 flex justify-center items-center p-3"
          onClick={closeModal} // Click outside to close modal
        >
          <div className={`${closing ? 'animate-flyout' : 'animate-wiggle'} relative bg-white p-3 sm:p-6 rounded-lg shadow-lg max-w-[800px] w-full`} onClick={(e) => e.stopPropagation()}>
          <button
              className="absolute -top-3 -right-3 bg-white rounded-full"
              onClick={closeModal} // Close button inside modal
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <path d="M15 0C6.64286 0 0 6.64286 0 15C0 23.3571 6.64286 30 15 30C23.3571 30 30 23.3571 30 15C30 6.64286 23.3571 0 15 0ZM20.7857 22.5L15 16.7143L9.21429 22.5L7.5 20.7857L13.2857 15L7.5 9.21429L9.21429 7.5L15 13.2857L20.7857 7.5L22.5 9.21429L16.7143 15L22.5 20.7857L20.7857 22.5Z" fill="#002882"/>
</svg>
            </button>

            <h2 className="text-[30px] font-semibold">Leave Review</h2>
        
            <div className='flex flex-col justify-between mt-4 gap-2'>
      <div className="flex items-start gap-2 border border-[#CCD1D2] p-2 rounded-[10px] ">

        <img className='w-20 h-20 rounded-lg' src='https://plus.unsplash.com/premium_photo-1682125177822-63c27a3830ea?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2hvZXN8ZW58MHx8MHx8fDA%3D' />
        <div className='w-full'>
          <h3>4K UHD DLED Smart Television 43Inch (2023 Model) 43A61K Black nch (2023 Model) 43A61K Black</h3>
          <input type='text' className='border border-[#CCD1D2] focus:outline-0 p-2 w-full rounded-lg' />
        </div>       
      </div>
              <div className="flex gap-4 ">
       <button type="submit" className="flex items-center gap-2 px-2 sm:px-10 py-2 bg-[#002882] text-white 
       rounded-md">
        Review</button>
       </div>
            </div>
    </div>
            
          
        </div>
      )}
      
{activeModal === "editAddress" && (
        <div
          className="fixed inset-0 bg-[#00000042] bg-opacity-50 flex justify-center items-center p-3"
          onClick={closeModal} // Click outside to close modal
        >
          <div className={`${closing ? 'animate-flyout' : 'animate-wiggle'} relative bg-white p-3 sm:p-6 rounded-lg shadow-lg max-w-[800px] w-full`} onClick={(e) => e.stopPropagation()}>
          <button
              className="absolute -top-3 -right-3 bg-white rounded-full"
              onClick={closeModal} // Close button inside modal
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <path d="M15 0C6.64286 0 0 6.64286 0 15C0 23.3571 6.64286 30 15 30C23.3571 30 30 23.3571 30 15C30 6.64286 23.3571 0 15 0ZM20.7857 22.5L15 16.7143L9.21429 22.5L7.5 20.7857L13.2857 15L7.5 9.21429L9.21429 7.5L15 13.2857L20.7857 7.5L22.5 9.21429L16.7143 15L22.5 20.7857L20.7857 22.5Z" fill="#002882"/>
</svg>
            </button>

            <h2 className="text-[30px] font-semibold">Shipping Address</h2>
        
            <div className='flex flex-col justify-between mt-4 gap-2'>
            <div className='min-h-[400px] 2xl:min-h-[500px] max-h-[400px] 2xl:max-h-[500px] h-full flex flex-col gap-3 overflow-y-scroll'>
      <div className=" flex justify-between border border-[#CCD1D2] p-2 rounded-[10px] ">
        <div className='flex gap-2'>
        <input type='radio' className='accent-[#002882] scale-125' checked={true}/>
        <div className="flex flex-col gap-2">
        <label className="block text-natural-black font-medium">Muhammad Ahmad <span className="text-gray-400 font-normal">
        +92 03155786545</span></label>
        <p className="text-gray-600 text-sm">farmanharis66@gmail.com</p>
        <p className="text-gray-600 text-sm">135- Mian House, Garden Town Lahore, Pakistan</p>
        </div>
        </div>
       <button className="flex gap-1 bg-transparent text-[#002882]"  >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M13 3C13.2549 3.00028 13.5 3.09788 13.6854 3.27285C13.8707 3.44782 13.9822 3.68695 13.9972 3.94139C14.0121 4.19584 13.9293 4.44638 13.7657 4.64183C13.6021 4.83729 13.3701 4.9629 13.117 4.993L13 5H5V19H19V11C19.0003 10.7451 19.0979 10.5 19.2728 10.3146C19.4478 10.1293 19.687 10.0178 19.9414 10.0028C20.1958 9.98789 20.4464 10.0707 20.6418 10.2343C20.8373 10.3979 20.9629 10.6299 20.993 10.883L21 11V19C21.0002 19.5046 20.8096 19.9906 20.4665 20.3605C20.1234 20.7305 19.6532 20.9572 19.15 20.995L19 21H5C4.49542 21.0002 4.00943 20.8096 3.63945 20.4665C3.26947 20.1234 3.04284 19.6532 3.005 19.15L3 19V5C2.99984 4.49542 3.19041 4.00943 3.5335 3.63945C3.87659 3.26947 4.34684 3.04284 4.85 3.005L5 3H13ZM19.243 3.343C19.423 3.16365 19.6644 3.05953 19.9184 3.05177C20.1723 3.04402 20.4197 3.13322 20.6103 3.30125C20.8008 3.46928 20.9203 3.70355 20.9444 3.95647C20.9685 4.2094 20.8954 4.46201 20.74 4.663L20.657 4.758L10.757 14.657C10.577 14.8363 10.3356 14.9405 10.0816 14.9482C9.82767 14.956 9.58029 14.8668 9.38972 14.6988C9.19916 14.5307 9.07969 14.2964 9.0556 14.0435C9.03151 13.7906 9.10459 13.538 9.26 13.337L9.343 13.243L19.243 3.343Z" fill="#002882"/>
        </svg> 
        Edit</button>
      </div>
      
      </div>
              <div className="flex gap-4 ">
       <button type="submit" className="flex items-center gap-2 px-2 sm:px-10 py-2 bg-[#002882] text-white 
       rounded-md" onClick={()=>openModal2('addNewAddress')}>
        <svg xmlns="http://www.w3.org/2000/svg" className='w-5' viewBox="0 0 20 20" fill="none">
  <path d="M15.0013 10.8334H10.8346V15.0001C10.8346 15.4584 10.4596 15.8334 10.0013 15.8334C9.54297 15.8334 9.16797 15.4584 9.16797 15.0001V10.8334H5.0013C4.54297 10.8334 4.16797 10.4584 4.16797 10.0001C4.16797 9.54175 4.54297 9.16675 5.0013 9.16675H9.16797V5.00008C9.16797 4.54175 9.54297 4.16675 10.0013 4.16675C10.4596 4.16675 10.8346 4.54175 10.8346 5.00008V9.16675H15.0013C15.4596 9.16675 15.8346 9.54175 15.8346 10.0001C15.8346 10.4584 15.4596 10.8334 15.0013 10.8334Z" fill="#FCFCFC"/>
</svg> Add a new address</button>
       </div>
            </div>
    </div>
            
          
        </div>
      )}

{activeModal2 === "addNewAddress" && (
        <div
          className="fixed inset-0 bg-[#00000042] bg-opacity-50 flex justify-center items-center p-3"
          onClick={closeModal2} // Click outside to close modal
        >
          <div className={`${closing2 ? 'animate-flyout' : 'animate-wiggle'} relative bg-white p-3 sm:p-6 rounded-lg shadow-lg`} onClick={(e) => e.stopPropagation()}>
          <button
              className="absolute -top-3 -right-3 bg-white rounded-full"
              onClick={closeModal2} // Close button inside modal
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <path d="M15 0C6.64286 0 0 6.64286 0 15C0 23.3571 6.64286 30 15 30C23.3571 30 30 23.3571 30 15C30 6.64286 23.3571 0 15 0ZM20.7857 22.5L15 16.7143L9.21429 22.5L7.5 20.7857L13.2857 15L7.5 9.21429L9.21429 7.5L15 13.2857L20.7857 7.5L22.5 9.21429L16.7143 15L22.5 20.7857L20.7857 22.5Z" fill="#002882"/>
</svg>
            </button>

            <h2 className="text-[30px] font-semibold">Add New Address</h2>
        
            <form className="flex flex-col flex-grow space-y-3">
      <div className="grid grid-cols-2 gap-2">
        <div className="w-full flex flex-col gap-1">
          <label className="text-gray-600 text-[16px] font-medium">Country/region</label>
          <Select options={options} placeholder="Please Select" value={country} onChange={(e) => setCountry(e.target.value)} />
        </div>
        <div className="w-full flex flex-col gap-1">
          <label className="text-gray-600 text-[16px] font-medium">Province</label>
          <Select options={options} placeholder="Please Select" value={province} onChange={(e) => setProvince(e.target.value)} />
        </div>
      </div>
      <hr className="border-t-[1px] my-3 border-[#F2F2F2]" />
    
      <label className="text-gray-600 text-[16px] font-medium">Address</label>
      <div className="grid grid-cols-3 gap-2">
        <Input type="text" placeholder="Street Address*" value={street} onChange={(e) => setStreet(e.target.value)} />
        <Input type="text" placeholder="Apt, Suite (Optional)" value={apartment} onChange={(e) => setApartment(e.target.value)} />
        <Input type="text" placeholder="Landmark (Optional)" value={landmark} onChange={(e) => setLandmark(e.target.value)} />
      </div>

      <div className="grid grid-cols-3 gap-2">
        <Select options={options} placeholder="Please Select" value={city} onChange={(e) => setCity(e.target.value)} />
        <Select options={options} placeholder="Select Area" value={area} onChange={(e) => setArea(e.target.value)} />
        <Input type="number" placeholder="ZIP Code*" value={zip} onChange={(e) => setZip(e.target.value)} className="border p-2 rounded" />
      </div>
      <hr className="border-t-[1px] my-3 border-[#F2F2F2]" />
    
      <label className="text-gray-600 text-[16px] font-medium">Contact Information</label>
      <div className="grid grid-cols-2 gap-2">
        <Input type="text" placeholder="Contact Name*" value={contactName} onChange={(e) => setContactName(e.target.value)} className="border p-2 rounded" />
        <Input type="number" placeholder="+92 Enter your Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} className="border p-2 rounded" />
      </div>
      <hr className="border-t-[1px] my-5 border-[#F2F2F2]" />
       <div className="flex gap-4 ">
       <button type="submit" className="flex items-center gap-2 px-2 sm:px-10 py-2 bg-[#002882] text-white rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" className='w-5' viewBox="0 0 20 20" fill="none">
  <path d="M15.0013 10.8334H10.8346V15.0001C10.8346 15.4584 10.4596 15.8334 10.0013 15.8334C9.54297 15.8334 9.16797 15.4584 9.16797 15.0001V10.8334H5.0013C4.54297 10.8334 4.16797 10.4584 4.16797 10.0001C4.16797 9.54175 4.54297 9.16675 5.0013 9.16675H9.16797V5.00008C9.16797 4.54175 9.54297 4.16675 10.0013 4.16675C10.4596 4.16675 10.8346 4.54175 10.8346 5.00008V9.16675H15.0013C15.4596 9.16675 15.8346 9.54175 15.8346 10.0001C15.8346 10.4584 15.4596 10.8334 15.0013 10.8334Z" fill="#FCFCFC"/>
</svg> Add a new address</button>
       <button className="px-2 sm:px-10 py-2 bg-gray-300 text-gray-700 rounded-md">Discard</button>
       </div>
      
    </form>
    </div>
            
          
        </div>
      )}

{activeModal === "payNow" && (
        <div
          className="fixed inset-0 bg-[#00000042] bg-opacity-50 flex justify-center items-center p-3"
          onClick={closeModal} // Click outside to close modal
        >
          <div className={`${closing ? 'animate-flyout' : 'animate-wiggle'} relative bg-white p-3 sm:p-6 rounded-lg shadow-lg max-w-[800px] w-full`} onClick={(e) => e.stopPropagation()}>
          <button
              className="absolute -top-3 -right-3 bg-white rounded-full"
              onClick={closeModal} // Close button inside modal
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <path d="M15 0C6.64286 0 0 6.64286 0 15C0 23.3571 6.64286 30 15 30C23.3571 30 30 23.3571 30 15C30 6.64286 23.3571 0 15 0ZM20.7857 22.5L15 16.7143L9.21429 22.5L7.5 20.7857L13.2857 15L7.5 9.21429L9.21429 7.5L15 13.2857L20.7857 7.5L22.5 9.21429L16.7143 15L22.5 20.7857L20.7857 22.5Z" fill="#002882"/>
</svg>
            </button>

            <h2 className="text-2xl 2xl:text-[30px] font-semibold text-center">Cards</h2>

<div className='flex flex-col justify-between mt-4 gap-2'>
      {/* Billing Address */}
      <div className='min-h-[400px] 2xl:min-h-[500px] max-h-[400px] 2xl:max-h-[500px] h-full flex flex-col gap-3 overflow-y-scroll'>
      <div className=" flex justify-between border border-[#CCD1D2] p-2 rounded-[10px] ">
        <div className='flex gap-2'>
        <input type='radio' className='accent-[#002882] scale-125' checked={true}/>
        <div className="flex flex-col gap-2">
        <label className="block text-natural-black font-medium"><img src={jazzcash} /> Muhammad Ahmad <span className="text-gray-400 font-normal">
        +92 03155786545</span></label>
        <p className="text-gray-600 text-sm">farmanharis66@gmail.com</p>
        <p className="text-gray-600 text-sm">135- Mian House, Garden Town Lahore, Pakistan</p>
        </div>
        </div>
       <button className="flex gap-1 bg-transparent text-[#002882]"  >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M13 3C13.2549 3.00028 13.5 3.09788 13.6854 3.27285C13.8707 3.44782 13.9822 3.68695 13.9972 3.94139C14.0121 4.19584 13.9293 4.44638 13.7657 4.64183C13.6021 4.83729 13.3701 4.9629 13.117 4.993L13 5H5V19H19V11C19.0003 10.7451 19.0979 10.5 19.2728 10.3146C19.4478 10.1293 19.687 10.0178 19.9414 10.0028C20.1958 9.98789 20.4464 10.0707 20.6418 10.2343C20.8373 10.3979 20.9629 10.6299 20.993 10.883L21 11V19C21.0002 19.5046 20.8096 19.9906 20.4665 20.3605C20.1234 20.7305 19.6532 20.9572 19.15 20.995L19 21H5C4.49542 21.0002 4.00943 20.8096 3.63945 20.4665C3.26947 20.1234 3.04284 19.6532 3.005 19.15L3 19V5C2.99984 4.49542 3.19041 4.00943 3.5335 3.63945C3.87659 3.26947 4.34684 3.04284 4.85 3.005L5 3H13ZM19.243 3.343C19.423 3.16365 19.6644 3.05953 19.9184 3.05177C20.1723 3.04402 20.4197 3.13322 20.6103 3.30125C20.8008 3.46928 20.9203 3.70355 20.9444 3.95647C20.9685 4.2094 20.8954 4.46201 20.74 4.663L20.657 4.758L10.757 14.657C10.577 14.8363 10.3356 14.9405 10.0816 14.9482C9.82767 14.956 9.58029 14.8668 9.38972 14.6988C9.19916 14.5307 9.07969 14.2964 9.0556 14.0435C9.03151 13.7906 9.10459 13.538 9.26 13.337L9.343 13.243L19.243 3.343Z" fill="#002882"/>
        </svg> 
        Edit</button>
      </div>
      
      </div>

      
      <button className="bg-dark-blue text-white w-full py-2 rounded-[5px]" onClick={()=>openModal2('addNewCard')}>
        Add New Card
      </button>
      </div>
    </div>
            
          
        </div>
      )}


{activeModal2 === "addNewCard" && (
        <div
          className="fixed inset-0 bg-[#00000042] bg-opacity-50 flex justify-center items-center p-3"
          onClick={closeModal2} // Click outside to close modal
        >
          <div className={`${closing2 ? 'animate-flyout' : 'animate-wiggle'} relative bg-white p-3 sm:p-6 rounded-lg shadow-lg `} onClick={(e) => e.stopPropagation()}>
          <button
              className="absolute -top-3 -right-3 bg-white rounded-full"
              onClick={closeModal2} // Close button inside modal
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <path d="M15 0C6.64286 0 0 6.64286 0 15C0 23.3571 6.64286 30 15 30C23.3571 30 30 23.3571 30 15C30 6.64286 23.3571 0 15 0ZM20.7857 22.5L15 16.7143L9.21429 22.5L7.5 20.7857L13.2857 15L7.5 9.21429L9.21429 7.5L15 13.2857L20.7857 7.5L22.5 9.21429L16.7143 15L22.5 20.7857L20.7857 22.5Z" fill="#002882"/>
</svg>
            </button>

            <h2 className="text-[30px] font-semibold">Add a new card</h2>
        <p className="text-green-600 text-[16px] font-medium flex items-center gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 17C12.5304 17 13.0391 16.7893 13.4142 16.4142C13.7893 16.0391 14 15.5304 14 15C14 14.4696 13.7893 13.9609 13.4142 13.5858C13.0391 13.2107 12.5304 13 12 13C11.4696 13 10.9609 13.2107 10.5858 13.5858C10.2107 13.9609 10 14.4696 10 15C10 15.5304 10.2107 16.0391 10.5858 16.4142C10.9609 16.7893 11.4696 17 12 17ZM18 8C18.5304 8 19.0391 8.21071 19.4142 8.58579C19.7893 8.96086 20 9.46957 20 10V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V10C4 9.46957 4.21071 8.96086 4.58579 8.58579C4.96086 8.21071 5.46957 8 6 8H7V6C7 4.67392 7.52678 3.40215 8.46447 2.46447C9.40215 1.52678 10.6739 1 12 1C12.6566 1 13.3068 1.12933 13.9134 1.3806C14.52 1.63188 15.0712 2.00017 15.5355 2.46447C15.9998 2.92876 16.3681 3.47995 16.6194 4.08658C16.8707 4.69321 17 5.34339 17 6V8H18ZM12 3C11.2044 3 10.4413 3.31607 9.87868 3.87868C9.31607 4.44129 9 5.20435 9 6V8H15V6C15 5.20435 14.6839 4.44129 14.1213 3.87868C13.5587 3.31607 12.7956 3 12 3Z" fill="#12B76A"/>
</svg> All Data is encrypted <svg xmlns="http://www.w3.org/2000/svg" width="12" height="24" viewBox="0 0 12 24" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.1569 12.7116L4.49994 18.3686L3.08594 16.9546L8.03594 12.0046L3.08594 7.05463L4.49994 5.64062L10.1569 11.2976C10.3444 11.4852 10.4497 11.7395 10.4497 12.0046C10.4497 12.2698 10.3444 12.5241 10.1569 12.7116Z" fill="#12B76A"/>
</svg>
      </p>  
      {/* Payment Icons */}
      <div className='flex gap-2 my-2'>
                  <span className='border border-[#F2F2F2] rounded-[3px] px-2'>
                  <img src={visa} className='w-7 aspect-square' />
                  </span>
                  <span className='border border-[#F2F2F2] rounded-[3px] px-2'>
                  <img src={mastercard} className='w-7 aspect-square' />
                  </span>
                  <span className='border border-[#F2F2F2] rounded-[3px] px-2'>
                  <img src={jcb} className='w-7 aspect-square' />
                  </span>
                  <span className='border border-[#F2F2F2] rounded-[3px] px-2'>
                  <img src={applepay} className='w-7 aspect-square' />
                  </span>
                  <span className='border border-[#F2F2F2] rounded-[3px] px-2'>
                  <img src={googlepay} className='w-7 aspect-square' />
                  </span>
                </div>

      {/* Card Number */}
      <div className="">
        <label className="block text-gray-700 font-medium">Card Number <span className="text-yellow-400">*</span></label>
        <Input
          type="text"
          className="w-full p-2 border rounded-md"
          placeholder="Enter Your Card Number"
        />
      </div>

      {/* Expiration & CVV */}
      <div className="flex gap-3 mt-4">
        {/* Expiry & CVV */}
      <div className="flex gap-2.5">
        <div className="w-1/2">
          <label className="block text-gray-700 font-medium">Expiration Date <span className="text-yellow-400">*</span></label>
          <div className="flex gap-2">
          <Select
        options={options}
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
        placeholder="Month"
           />
           <Select
        options={options}
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
        placeholder="Year"
           />
         </div>
        </div>
        <div className="w-1/2">
          <label className="block text-gray-700 font-medium">CVV <span className="text-yellow-400">*</span></label>
          <Input type="text" className="w-full p-2 border rounded-md" placeholder="3-4 digit code" />
        </div>
      </div>
      
        
      </div>
      
      <button className="mt-6 bg-dark-blue text-white w-full py-2 rounded-[5px] hover:bg-blue-700">
        Add your card
      </button>
      
      <hr className="border-t-[1px] border-[#CCD1D2] my-4" />
      {/* Security Info */}
      <div className=" text-sm flex flex-col gap-2.5">
        <span className="text-[16px] text-[#039855] flex gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M10 0.833496L2.5 4.16683V9.16683C2.5 13.7918 5.7 18.1168 10 19.1668C14.3 18.1168 17.5 13.7918 17.5 9.16683V4.16683L10 0.833496ZM10 7.4085C11.3333 7.4085 12.4083 8.4835 12.4083 9.81683C12.4083 11.1502 11.3333 12.2252 10 12.2252C8.66667 12.2252 7.59167 11.1418 7.59167 9.81683C7.59167 8.49183 8.675 7.4085 10 7.4085ZM10 5.00016L11.15 6.66683C10.8 6.51683 10.4167 6.44183 10 6.44183C9.375 6.44183 9.20833 6.51683 8.85 6.66683L10 5.00016ZM5.83333 7.4085L7.83333 7.24183C7.55 7.50016 7.28333 7.7835 7.08333 8.1335C6.875 8.4835 6.75 8.85016 6.66667 9.2335L5.83333 7.4085ZM5.83333 12.2252L6.69167 10.4168C6.75833 10.7752 6.89167 11.1502 7.08333 11.5002C7.29167 11.8585 7.55 12.1585 7.83333 12.4002L5.83333 12.2252ZM14.1667 7.4085L13.3333 9.2335C13.25 8.85016 13.1167 8.4835 12.9167 8.1335C12.7167 7.7835 12.4583 7.50016 12.1667 7.2335L14.1667 7.4085ZM14.1667 12.2252L12.1667 12.3918C12.45 12.1502 12.7083 11.8502 12.9167 11.5002C13.1167 11.1502 13.2417 10.7752 13.3083 10.4168L14.1667 12.2252ZM10 14.6252L8.84167 12.9752C9.2 13.1002 9.58333 13.1835 10 13.1835C10.4167 13.1835 10.7917 13.1002 11.1417 12.9752L10 14.6252Z" fill="#039855"/>
</svg> ValueBox protects your card information</span>
       <span className="flex gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M6 12L10.2426 16.2426L18.7275 7.75732" stroke="#12B76A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg> Card information is secure and uncompromised</span> 
       <span className="flex gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M6 12L10.2426 16.2426L18.7275 7.75732" stroke="#12B76A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
   </svg>  All data is encrypted</span>
        <span className="flex gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M6 12L10.2426 16.2426L18.7275 7.75732" stroke="#12B76A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg> ValueBox never sells your card information</span>
        </div>
    </div>
            
          
        </div>
      )}
    </div>
    
  )
}

export default Orders