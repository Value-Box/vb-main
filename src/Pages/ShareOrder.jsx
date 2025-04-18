import React from 'react'
import ODproduct1 from "/src/Images/ODproduct1.png";
import ODproduct2 from "/src/Images/ODproduct2.png";
import ODproduct3 from "/src/Images/ODproduct3.png";
import Leopard from "/src/Images/Leopard.png";
import circleImage from "/src/Images/circleimage.png";
import AccountSideBar from '../Components/AccountSideBar'
import CheckBox from '../Components/CheckBox';
import DetailProductCard from '../Components/Cards/DetailProductCard';
import { NavLink } from 'react-router-dom';


const products = [
    { id: 1, name: "Men'S Other Running Shoes Korean Style", price: 5000, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080' },
    { id: 2, name: "Men'S Other Running Shoes Korean Style", price: 4500, image: "https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8aGVhZHBob25lfGVufDB8MHx8fDE3MjEzMDM2OTB8MA&ixlib=rb-4.0.3&q=80&w=1080" },
    { id: 3, name: "Men'S Other Running Shoes Korean Style", price: 4000, image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw0fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080" },
    { id: 4, name: "Men'S Other Running Shoes Korean Style", price: 6000, image: "https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080" },
    { id: 3, name: "Men'S Other Running Shoes Korean Style", price: 4000, image: "https://images.unsplash.com/photo-1528148343865-51218c4a13e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwzfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080" },
    { id: 5, name: "Men'S Other Running Shoes Korean Style", price: 6000, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080' },
    { id: 6, name: "Men'S Other Running Shoes Korean Style", price: 4000, image: "https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8aGVhZHBob25lfGVufDB8MHx8fDE3MjEzMDM2OTB8MA&ixlib=rb-4.0.3&q=80&w=1080" },
    { id: 7, name: "Men'S Other Running Shoes Korean Style", price: 6000, image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw0fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080" },
    { id: 8, name: "Men'S Other Running Shoes Korean Style", price: 5500, image: "https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080" },
    { id: 9, name: "Men'S Other Running Shoes Korean Style", price: 5500, image: "https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080" }
  ];
  
function ShareOrder() {


 const items = [
    {
      id: 1,
      img:  ODproduct3,
      deal: "Welcome Deal",
      name: "Wifi doorbell Camera Smart WI-FI Video Intercom FI Video Video Do...",
      color: "Red/42",
      brand: "By KKK Brand",
      price: "PKR 8,500",
      qty: "x1",
      brandImg: circleImage,
    },
    {
      id: 2,
      img:  ODproduct2,
      name: "Wifi doorbell Camera Smart WI-FI Video Intercom FI Video Video Do...",
      color: "Red/42",
      brand: "By KKK Brand",
      price: "PKR 8,500",
      qty: "x1",
      brandImg: circleImage ,
    },
    {
      id: 3,
      img: ODproduct1,
      name: "Wifi doorbell Camera Smart WI-FI Video Intercom FI Video Video Do...",
      color: "Red/42",
      brand: "By KKK Brand",
      price: "PKR 8,500",
      qty: "x1",
      brandImg:  circleImage,
    },
    {
      id: 4,
      img:  ODproduct3,
      name: "Wifi doorbell Camera Smart WI-FI Video Intercom FI Video Video Do...",
      color: "Red/42",
      brand: "By KKK Brand",
      price: "PKR 8,500",
      qty: "x1",
      brandImg:  circleImage,
    },
    {
      id: 5,
      img:  ODproduct2,
      name: "Wifi doorbell Camera Smart WI-FI Video Intercom FI Video Video Do...",
      color: "Red/42",
      brand: "By KKK Brand",
      price: "PKR 8,500",
      qty: "x1",
      brandImg:  circleImage,
    },
  ];
  


  return (
    <>
      <div className="w-full  md:p-6 p-0 bg-[#FCFCFC] ">
    <div className="flex flex-col md:flex-row gap-5 w-full max-w-[1920px] mx-auto">
        {/* Left Section - Sidebar */}
  <div className="hidden md:flex">
    <AccountSideBar />
  </div>
  <div className="w-full flex-1 space-y-5">
    {/* Main Content */}
    <main className=" flex flex-col gap-5 px-10">
      {/* Order Summary Section */}
      <div className="text-center flex flex-col gap-5 hidden md:flex">
      <h2 className="text-[36px] font-semibold">Share your order</h2>
      <div className="flex justify-center gap-4">
        {/* Instagram Button */}
        <button className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 shadow-md">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 36 36" fill="none">
  <g clip-path="url(#clip0_7530_51665)">
    <path d="M27.5625 0H8.4375C3.7776 0 0 3.7776 0 8.4375V27.5625C0 32.2224 3.7776 36 8.4375 36H27.5625C32.2224 36 36 32.2224 36 27.5625V8.4375C36 3.7776 32.2224 0 27.5625 0Z" fill="url(#paint0_radial_7530_51665)"/>
    <path d="M27.5625 0H8.4375C3.7776 0 0 3.7776 0 8.4375V27.5625C0 32.2224 3.7776 36 8.4375 36H27.5625C32.2224 36 36 32.2224 36 27.5625V8.4375C36 3.7776 32.2224 0 27.5625 0Z" fill="url(#paint1_radial_7530_51665)"/>
    <path d="M18.0013 3.9375C14.1822 3.9375 13.7028 3.95423 12.2029 4.02244C10.7058 4.09106 9.68386 4.32802 8.78977 4.67578C7.86473 5.03494 7.08019 5.51545 6.29859 6.29733C5.5163 7.07906 5.03578 7.86361 4.6755 8.78822C4.32675 9.68259 4.08952 10.7049 4.02216 12.2013C3.95508 13.7014 3.9375 14.1809 3.9375 18.0001C3.9375 21.8194 3.95438 22.2972 4.02244 23.7971C4.09134 25.2942 4.3283 26.3161 4.67578 27.2102C5.03522 28.1353 5.51573 28.9198 6.29761 29.7014C7.07906 30.4837 7.86361 30.9653 8.78794 31.3245C9.68273 31.6723 10.7048 31.9092 12.2016 31.9778C13.7017 32.046 14.1806 32.0628 17.9996 32.0628C21.8191 32.0628 22.2969 32.046 23.7968 31.9778C25.2939 31.9092 26.317 31.6723 27.2118 31.3245C28.1364 30.9653 28.9198 30.4837 29.7011 29.7014C30.4834 28.9198 30.9638 28.1353 31.3242 27.2107C31.6699 26.3161 31.9072 25.2939 31.9776 23.7974C32.0449 22.2975 32.0625 21.8194 32.0625 18.0001C32.0625 14.1809 32.0449 13.7017 31.9776 12.2016C31.9072 10.7045 31.6699 9.68273 31.3242 8.78864C30.9638 7.86361 30.4834 7.07906 29.7011 6.29733C28.919 5.51517 28.1367 5.03466 27.2109 4.67592C26.3145 4.32802 25.292 4.09092 23.7949 4.02244C22.2948 3.95423 21.8173 3.9375 17.9969 3.9375H18.0013ZM16.7397 6.4717C17.1142 6.47114 17.532 6.4717 18.0013 6.4717C21.7561 6.4717 22.201 6.4852 23.6838 6.55256C25.0549 6.61528 25.7991 6.84436 26.2948 7.03688C26.9511 7.29169 27.4189 7.59642 27.9108 8.08875C28.403 8.58094 28.7076 9.04964 28.9631 9.70594C29.1556 10.2009 29.385 10.9451 29.4474 12.3162C29.5148 13.7987 29.5294 14.2439 29.5294 17.9969C29.5294 21.7499 29.5148 22.1953 29.4474 23.6776C29.3847 25.0487 29.1556 25.7929 28.9631 26.288C28.7083 26.9443 28.403 27.4116 27.9108 27.9035C27.4186 28.3957 26.9513 28.7003 26.2948 28.9553C25.7996 29.1486 25.0549 29.3771 23.6838 29.4398C22.2013 29.5072 21.7561 29.5218 18.0013 29.5218C14.2463 29.5218 13.8012 29.5072 12.3189 29.4398C10.9478 29.3766 10.2036 29.1475 9.70748 28.955C9.05133 28.7 8.58248 28.3954 8.0903 27.9032C7.59811 27.411 7.29352 26.9435 7.038 26.2869C6.84548 25.7917 6.61613 25.0476 6.55369 23.6765C6.48633 22.194 6.47283 21.7488 6.47283 17.9934C6.47283 14.238 6.48633 13.7952 6.55369 12.3127C6.61641 10.9416 6.84548 10.1974 7.038 9.70172C7.29295 9.04542 7.59811 8.57672 8.09044 8.08453C8.58277 7.59234 9.05133 7.28761 9.70762 7.03223C10.2033 6.83888 10.9478 6.61036 12.3189 6.54736C13.6162 6.48872 14.1189 6.47114 16.7397 6.46819V6.4717ZM25.5078 8.80664C24.5762 8.80664 23.8203 9.5618 23.8203 10.4936C23.8203 11.4252 24.5762 12.1811 25.5078 12.1811C26.4395 12.1811 27.1953 11.4252 27.1953 10.4936C27.1953 9.56194 26.4395 8.80608 25.5078 8.80608V8.80664ZM18.0013 10.7783C14.0131 10.7783 10.7796 14.0119 10.7796 18.0001C10.7796 21.9884 14.0131 25.2204 18.0013 25.2204C21.9895 25.2204 25.2219 21.9884 25.2219 18.0001C25.2219 14.012 21.9893 10.7783 18.001 10.7783H18.0013ZM18.0013 13.3125C20.59 13.3125 22.6889 15.4111 22.6889 18.0001C22.6889 20.5889 20.59 22.6877 18.0013 22.6877C15.4125 22.6877 13.3138 20.5889 13.3138 18.0001C13.3138 15.4111 15.4124 13.3125 18.0013 13.3125Z" fill="white"/>
  </g>
  <defs>
    <radialGradient id="paint0_radial_7530_51665" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(9.5625 38.7727) rotate(-90) scale(35.6787 33.184)">
      <stop stop-color="#FFDD55"/>
      <stop offset="0.1" stop-color="#FFDD55"/>
      <stop offset="0.5" stop-color="#FF543E"/>
      <stop offset="1" stop-color="#C837AB"/>
    </radialGradient>
    <radialGradient id="paint1_radial_7530_51665" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-6.03014 2.59327) rotate(78.681) scale(15.9486 65.7405)">
      <stop stop-color="#3771C8"/>
      <stop offset="0.128" stop-color="#3771C8"/>
      <stop offset="1" stop-color="#6600FF" stop-opacity="0"/>
    </radialGradient>
    <clipPath id="clip0_7530_51665">
      <rect width="36" height="36" fill="white"/>
    </clipPath>
  </defs>
</svg>
        </button>

        {/* Facebook Button */}
        <button className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1877F2]">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
  <g clip-path="url(#clip0_7530_51670)">
    <path d="M36 18C36 8.05894 27.9411 0 18 0C8.05894 0 0 8.05894 0 18C0 26.9842 6.58237 34.431 15.1875 35.7813V23.2031H10.6172V18H15.1875V14.0344C15.1875 9.52312 17.8748 7.03125 21.9864 7.03125C23.9558 7.03125 26.0156 7.38281 26.0156 7.38281V11.8125H23.7459C21.5099 11.8125 20.8125 13.2 20.8125 14.6236V18H25.8047L25.0066 23.2031H20.8125V35.7813C29.4176 34.431 36 26.9844 36 18Z" fill="#1877F2"/>
    <path d="M25.0066 23.2031L25.8047 18H20.8125V14.6236C20.8125 13.1999 21.5099 11.8125 23.7459 11.8125H26.0156V7.38281C26.0156 7.38281 23.9558 7.03125 21.9863 7.03125C17.8748 7.03125 15.1875 9.52313 15.1875 14.0344V18H10.6172V23.2031H15.1875V35.7813C16.1179 35.9271 17.0582 36.0002 18 36C18.9418 36.0002 19.8821 35.9271 20.8125 35.7813V23.2031H25.0066Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_7530_51670">
      <rect width="36" height="36" fill="white"/>
    </clipPath>
  </defs>
</svg>
        </button>

        {/* Copy Link Button */}
        <button className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 ">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
  <path d="M13.7567 22.2434L22.2422 13.7579M10.5737 16.9394L8.45272 19.0604C7.89555 19.6176 7.45358 20.2791 7.15205 21.007C6.85051 21.735 6.69531 22.5152 6.69531 23.3032C6.69531 24.0911 6.85051 24.8714 7.15205 25.5993C7.45358 26.3273 7.89555 26.9888 8.45272 27.5459C9.00988 28.1031 9.67133 28.5451 10.3993 28.8466C11.1273 29.1481 11.9075 29.3033 12.6955 29.3033C13.4834 29.3033 14.2637 29.1481 14.9916 28.8466C15.7196 28.5451 16.3811 28.1031 16.9382 27.5459L19.0562 25.4249M16.9367 10.5749L19.0577 8.45394C19.6149 7.89677 20.2763 7.4548 21.0043 7.15327C21.7323 6.85173 22.5125 6.69653 23.3005 6.69653C24.0884 6.69653 24.8687 6.85173 25.5966 7.15327C26.3246 7.4548 26.9861 7.89677 27.5432 8.45394C28.1004 9.0111 28.5424 9.67256 28.8439 10.4005C29.1454 11.1285 29.3006 11.9087 29.3006 12.6967C29.3006 13.4846 29.1454 14.2649 28.8439 14.9928C28.5424 15.7208 28.1004 16.3823 27.5432 16.9394L25.4222 19.0604" stroke="#1A1A1A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </button>
      </div>
    </div>
    <div className="w-full  flex flex-col md:hidden bg-white shadow-[0px_4px_8px_-2px_rgba(16,24,40,0.10),0px_2px_4px_-2px_rgba(16,24,40,0.06)]">
      {/* Search Bar */}
      <div className="flex items-center p-4 pr-6 ">
      <NavLink to="/OrderDetails">
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
  <path d="M21 12L15 18L21 24" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      </NavLink>
        <div className="relative flex-1 items-center">
          <span className="absolute left-3 top-3 text-gray-400"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M10.3536 9.64645C10.1583 9.45118 9.84171 9.45118 9.64645 9.64645C9.45118 9.84171 9.45118 10.1583 9.64645 10.3536L10.3536 9.64645ZM13.6464 14.3536C13.8417 14.5488 14.1583 14.5488 14.3536 14.3536C14.5488 14.1583 14.5488 13.8417 14.3536 13.6464L13.6464 14.3536ZM6.66667 10.8333C4.36548 10.8333 2.5 8.96785 2.5 6.66667H1.5C1.5 9.52014 3.8132 11.8333 6.66667 11.8333V10.8333ZM2.5 6.66667C2.5 4.36548 4.36548 2.5 6.66667 2.5V1.5C3.8132 1.5 1.5 3.8132 1.5 6.66667H2.5ZM6.66667 2.5C8.96785 2.5 10.8333 4.36548 10.8333 6.66667H11.8333C11.8333 3.8132 9.52014 1.5 6.66667 1.5V2.5ZM10.8333 6.66667C10.8333 8.96785 8.96785 10.8333 6.66667 10.8333V11.8333C9.52014 11.8333 11.8333 9.52014 11.8333 6.66667H10.8333ZM9.64645 10.3536L13.6464 14.3536L14.3536 13.6464L10.3536 9.64645L9.64645 10.3536Z" fill="#1A1A1A"/>
</svg></span>
          <input
            type="text"
            placeholder="Order ID, product or store name"
            className="w-full pl-10 pr-4 py-2 rounded-full border focus:outline-none"
          />
        </div>
    </div>
    <hr className="border-t-[1px] border-[#F2F2F2]" />
   
    <div className="flex flex-col items-center gap-1 px-5 py-2.5 text-[18px] font-medium ">
   <span className='text-[18px] '>Share your Order</span>
   <span className='text-sm text-[#999]'>Deselect any details you don’t want to share</span>
    
    </div>
         </div>
<div className="flex flex-col gap-3">
      {/* Left Section - Payment Details */}
      <div className="bg-white md:p-6 p-2.5 rounded-lg border border-[#F2F2F2] flex flex-col md:gap-5 gap-3">
      {/* Logo */}
      <div className="flex justify-center">
      <h1 className="text-2xl font-bold">
        <svg xmlns="http://www.w3.org/2000/svg" width="186" height="48" viewBox="0 0 186 48" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M26.2207 17.936L20.5864 18.8403C20.5864 20.6488 21.9079 20.1271 21.9079 22.3473L15.6826 38.9198L9.17848 17.936L0.414062 18.8403C0.414062 20.4403 2.43137 19.9533 2.8835 20.8924L12.274 47.0118H14.778L26.1859 18.0753C26.2207 18.0405 26.2207 18.0056 26.2207 17.9708V17.936ZM34.3242 25.3789C26.6728 25.3789 23.786 28.2656 23.786 30.4914C23.786 32.0218 25.1076 32.648 26.4988 32.648C27.1597 32.648 27.8552 32.4739 28.4117 32.2304C28.7246 28.2656 30.9159 26.8744 33.0374 26.8744C35.7154 26.8744 36.1675 29.4828 36.1675 31.8478C36.1675 32.4739 36.1329 33.1 36.0981 33.6563C35.3676 33.0305 33.6635 32.4043 32.3767 32.4043C26.5336 32.4043 23.4383 36.5431 23.4383 40.4732C23.4383 43.9514 25.9075 47.2551 31.0549 47.2551C33.9765 47.2551 35.7154 46.1424 36.9676 44.1599C37.9415 45.9336 40.1325 47.0118 42.3584 47.0118H44.2365C44.2365 46.8726 44.2712 46.7685 44.2712 46.6641C44.2712 45.4466 43.0889 45.4466 42.602 44.9597C42.0802 44.438 41.941 43.2904 41.941 41.8645C41.941 40.0907 42.1498 37.8994 42.1498 35.6388C42.1498 30.561 41.1064 25.3789 34.3242 25.3789ZM35.8893 38.2126C35.9242 38.8037 35.9242 39.6386 35.9242 40.5081C35.9242 42.8383 34.9851 45.0641 32.7245 45.0641C29.6289 45.0641 29.8029 40.9602 29.8029 38.3516C29.8029 35.7432 31.4722 34.3868 32.9678 34.3868C34.4634 34.3868 35.8198 35.6736 35.8893 38.2126ZM52.0618 41.7369C52.0966 38.8908 52.0966 35.9751 52.0966 33.0305V17.936L43.7843 19.1184C43.7843 20.7125 45.9406 20.0864 45.9406 21.1299C45.9406 24.2544 45.9057 27.2687 45.9057 30.2192C45.9057 33.2042 45.9406 36.0795 45.9406 38.9604C45.9406 43.2267 47.4361 47.0118 52.9315 47.0118H55.053C55.053 44.5134 52.0618 47.0118 52.0618 41.7369ZM77.9035 47.0118C77.9035 45.4118 75.747 46.0032 75.747 44.9597C75.747 38.4445 75.921 32.068 75.8862 25.5528L67.5043 26.4281C67.5043 28.0626 69.6606 27.4365 69.6606 28.48C69.6606 32.7348 69.5909 37.0879 69.5561 41.4065C68.3041 43.5338 66.8782 44.7164 65.6262 44.7164C63.296 44.7164 63.0176 42.8731 62.9827 39.6676C62.9482 33.7435 62.9482 32.6304 62.9482 25.5528L54.74 26.4281C54.74 28.0626 56.8963 27.4365 56.8963 28.48V38.937C56.8963 43.2208 58.3223 47.2551 63.8177 47.2551C66.8434 47.2551 68.4781 45.7599 69.5216 44.3686V47.0118H77.9035ZM95.8151 40.0212C94.9109 41.2035 92.8936 42.1426 90.4937 42.1426C87.7462 42.1426 86.0769 40.4385 85.2768 37.7953C93.0676 37.7953 96.2325 34.1432 96.2325 30.8044C96.2325 28.022 93.9371 25.4485 88.8244 25.4485C82.1815 25.4485 78.8426 31.1524 78.8426 36.6127C78.8426 42.0733 82.077 47.2551 88.6156 47.2551C95.8151 47.2551 97.6932 42.5599 97.6932 40.1255C97.6932 39.6038 97.4152 39.3602 97.0323 39.3602C96.615 39.3602 96.0933 39.6386 95.8151 40.0212ZM88.5115 27.2918C89.9375 27.3265 90.7721 28.8221 90.7721 30.6306C90.7721 33.2042 89.0678 36.3346 84.9638 36.3346C84.8594 35.778 84.7898 35.0475 84.7898 34.2476C84.7898 31.2567 85.6596 27.2918 88.5115 27.2918Z" fill="#002882"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M184.163 46.7464L184.162 46.7467C182.883 47.8945 180.898 47.7869 179.75 46.5081L173.801 39.8789L167.975 46.3633C166.826 47.6416 164.841 47.7476 163.563 46.599L163.562 46.5987C162.284 45.4503 162.178 43.4652 163.327 42.1866L169.603 35.2012L162.945 27.7816C161.797 26.5025 161.904 24.5176 163.184 23.3697L163.184 23.3695C164.463 22.2219 166.448 22.3289 167.596 23.608L173.804 30.5262L180.144 23.4712C181.292 22.1932 183.278 22.0869 184.556 23.2356C185.834 24.3842 185.94 26.3699 184.792 27.6479L178.002 35.2039L184.401 42.3346C185.549 43.6134 185.441 45.5988 184.163 46.7464ZM100.734 11.8028V48L117.462 47.8722C118.729 47.8626 120.005 47.9274 121.258 47.7016C128.696 46.358 138.228 37.0716 128.989 28.6011C132.269 25.3631 133.065 16.5533 124.929 12.8752C122.213 11.6479 120.954 11.734 118.113 11.7436L100.734 11.8028ZM148.965 21.468C152.412 21.468 155.436 22.6822 158.036 25.1105C160.637 27.539 161.937 30.6332 161.937 34.3934C161.937 36.9941 161.264 39.3049 159.916 41.3259C158.569 43.3469 156.932 44.8353 155.005 45.7912C153.078 46.7469 151.096 47.2246 149.059 47.2246C146.96 47.2246 144.939 46.7156 142.996 45.6971C141.053 44.6789 139.416 43.1748 138.084 41.1851C136.753 39.1952 136.087 36.947 136.087 34.4404C136.087 30.6802 137.403 27.578 140.035 25.1342C142.667 22.6899 145.644 21.468 148.965 21.468ZM145.91 37.8008C146.913 38.5686 147.931 38.9524 148.965 38.9524C149.999 38.9524 151.033 38.5609 152.067 37.7774C153.101 36.9941 153.618 35.8348 153.618 34.2994C153.618 32.764 153.133 31.6204 152.161 30.8683C151.19 30.1163 150.109 29.7401 148.918 29.7401C147.853 29.7401 146.834 30.132 145.863 30.9153C144.892 31.6987 144.406 32.8423 144.406 34.3464C144.406 35.8818 144.907 37.0331 145.91 37.8008Z" fill="#EEA500"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M111.267 12.3507C107.41 11.0551 105.275 10.3344 102.522 5.49256C101.765 4.16299 101.579 2.67144 102.516 1.14185C103.33 -0.185034 105.29 -0.28547 107.083 0.480109C110.259 1.83598 111.098 5.13392 112.446 8.08738C114.268 4.89538 116.23 3.26061 119.405 4.04612C122.25 5.27288 122.147 7.47003 120.178 9.24717C118.344 10.8968 116.043 12.0526 113.376 12.4548L113.455 21.5207L131.303 21.5198C131.379 22.3006 131.31 22.924 131.242 23.6293H113.473L113.684 47.9012L111.576 47.9222L111.365 23.6293H100.734V21.5209H111.346L111.267 12.3507ZM111.023 10.671C110.704 8.01566 108.568 2.37045 105.471 1.93372C104.835 1.84422 104.213 1.99375 103.966 2.46793C102.793 4.71874 108.511 9.8879 111.023 10.671ZM113.272 10.917C113.934 8.60326 115.252 6.723 117.085 5.76856C118.573 4.95729 120.741 6.18056 119.035 8.03528C117.484 9.47536 115.574 10.6952 113.272 10.917Z" fill="#002882"/>
</svg>
        </h1>
      </div>

      {/* Order Summary Title */}
      <hr className="border-t-[1px] border-[#F2F2F2] " />
    <div className=" flex flex-col md:gap-5 gap-2.5">
      {/* Header */}
      <div className="flex justify-between items-center ">
        <h3 className="text-lg font-semibold">Order Summary</h3>
        <button className="text-[#002882] font-medium flex items-center gap-1">
          Share
         <CheckBox/>
        </button>
      </div>

      {/* Order Total */}
      <div className="flex justify-between items-center ">
        <p className="text-gray-600">Order total:</p>
        <p className="font-medium">2 Items, PKR 5,868</p>
      </div>

      {/* Shipping */}
      <div className="flex justify-between items-center ">
        <p className="text-gray-600">Shipping:</p>
       <p className="text-green-600 font-medium">FREE</p>
      </div>
    </div>
    <hr className="border-t-[1px] border-[#F2F2F2] " />
    <div className="flex flex-col md:gap-5 gap-2.5 ">
      {/* Header */}
      <div className="flex justify-between items-center gap-5">
        <h3 className="text-lg font-semibold">Shipping info</h3>
        <button className="text-[#002882] font-medium flex items-center gap-1">
          Share
         <CheckBox/>
        </button>
      </div>

      {/* Order Total */}
      <div className="flex justify-between items-center">
        <p className="text-gray-600">Courier Company:</p>
        <p className="flex gap-1 font-medium"> <img src={Leopard} alt="Leopards" /> Leopards</p>
      </div>

      {/* Shipping */}
      <div className="flex justify-between items-center">
        <p className="text-gray-600">Tracking Number:</p>
        <p className=" font-medium">CPC*********2PK</p>
      </div>
    </div>
    <hr className="border-t-[1px] border-[#F2F2F2] " />
        {/* Header */}
        <h2 className="text-lg font-semibold ">Items you want to share</h2>

<div className="flex gap-5">
  {/* Left: Items List */}
  <div className="flex-1 space-y-4">
    {items.map((item) => (
      <div
        key={item.id}
        className="flex items-center md:bg-[#FCFCFC] md:border border-b-1 border-[#F2F2F2] md:p-4 p-2 rounded-lg"
      >
        {/* Image */}
        <img
          src={item.img}
          alt="Product"
          className="w-20 h-20 object-cover rounded-lg"
        />

        {/* Product Details */}
        <div className="ml-4 flex-1 flex flex-col justify-between gap-2">
         <div className="flex items-center space-x-2 justify-between">
          <div  className='flex'>
          {item.deal && (
            <span className="md:flex hidden bg-gradient-to-r from-red-600 to-orange-500 text-white text-xs px-2 py-1 rounded">
            {item.deal}
          </span>
          
            )}
            <p className="md:text-sm text-[12px] font-medium">{item.name}</p>
          </div>
          
            <CheckBox />   
          </div>
          <div className='flex justify-between'>
          <p className="text-gray-500 md:text-xs text-[12px]">{item.color}</p>
          <p className="text-gray-500 md:text-sm text-[12px]">{item.qty}</p>
          </div>
        
           {/* Brand with Circular Image */}
           <div className='flex justify-between'> 
    <div className="flex items-center gap-2">
      <img
        src={item.brandImg} // 👈 Brand Image dynamically render ho raha hai
        alt="Brand"
        className="w-6 h-6 object-cover rounded-full"
      />
      <p className="text-xs">{item.brand}</p>
    </div>
      <p className="text-lg font-semibold">{item.price}</p>
    </div>
   </div>
      {/* Quantity & Price */}
        <hr />
      </div>
    ))}
  </div>
 </div>
    </div>
 </div>
   </main>
   
  </div>
    </div>
    
   </div>
   <div className="fixed bottom-0 left-0 w-full z-50 p-5 border border-white bg-white md:hidden flex">
             
    <button className="w-full flex items-center justify-center gap-2 rounded-[5px] text-white py-3 bg-[#002882]">
    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
  <path d="M3.625 10.625V15.625C3.625 15.9565 3.7567 16.2745 3.99112 16.5089C4.22554 16.7433 4.54348 16.875 4.875 16.875H16.125C16.4565 16.875 16.7745 16.7433 17.0089 16.5089C17.2433 16.2745 17.375 15.9565 17.375 15.625V10.625M10.5 12.5V2.1875M14.25 5.625L10.5 1.875L6.75 5.625" stroke="#FCFCFC" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    Share Order
  </button>
   
 
</div>
   <div className='flex flex-wrap max-w-[1920px] mx-auto py-10 bg-[#FCFCFC]'>
   <DetailProductCard products={products} style={`flex-wrap `}/>
   </div>
    </>
  )
}

export default ShareOrder
