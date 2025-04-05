import { useState, useEffect, useRef } from "react";
import AccountSideBar from '../Components/AccountSideBar'
import CheckBox from '../Components/CheckBox';
import { NavLink } from 'react-router-dom';
import circleImage from "/src/Images/circleimage.png";
import ODproduct1 from "/src/Images/ODproduct1.png";
import ODproduct2 from "/src/Images/ODproduct2.png";
import ODproduct3 from "/src/Images/ODproduct3.png";
import Leopard from "/src/Images/Leopard.png";
import DetailProductCard2 from '../Components/Cards/DetailProductCard';


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



function OrderDetails() {
    const packages = [
    {
      id: 1,
      type: "Express",
      items: [
        { id: 1, img: ODproduct1, price: "PKR 1,500" },
        { id: 2, img: ODproduct2, price: "PKR 1,500" },
        { id: 3, count: "+8", price: "PKR 1,500" },
      ],
    },
    {
      id: 2,
      type: "Standard",
      items: [
        { id: 4, img: ODproduct3, price: "PKR 1,500" },
        { id: 5, img: ODproduct1, price: "PKR 1,500" },
        { id: 6, count: "+32", price: "PKR 1,500" },
      ],
    },
    {
      id: 3,
      type: "Standard",
      items: [
        { id: 7, img:  ODproduct1, price: "PKR 1,500" },
        { id: 8, img: ODproduct3, price: "PKR 1,500" },
        { id: 9, count: "+32", price: "PKR 1,500" },
      ],
    },
  ];

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
       brandImg: circleImage,
    },
    {
      id: 3,
      img: ODproduct1,
      name: "Wifi doorbell Camera Smart WI-FI Video Intercom FI Video Video Do...",
      color: "Red/42",
      brand: "By KKK Brand",
      price: "PKR 8,500",
      qty: "x1",
       brandImg: circleImage,
    },
    {
      id: 4,
      img:  ODproduct3,
      name: "Wifi doorbell Camera Smart WI-FI Video Intercom FI Video Video Do...",
      color: "Red/42",
      brand: "By KKK Brand",
      price: "PKR 8,500",
      qty: "x1",
       brandImg: circleImage,
    },
    {
      id: 5,
      img:  ODproduct2,
      name: "Wifi doorbell Camera Smart WI-FI Video Intercom FI Video Video Do...",
      color: "Red/42",
      brand: "By KKK Brand",
      price: "PKR 8,500",
      qty: "x1",
       brandImg: circleImage,
    },
  ];
  
  const [isOpen, setIsOpen] = useState(false);
  const [selectedReasons, setSelectedReasons] = useState([]);

  const reasons = [
    "Change of Delivery",
    "Decide for alternative product",
    "Want to place a new order with more/different items",
    "Change payment method",
    "Found cheaper elsewhere",
    "Delivery time is too long",
    "Don’t want this order/item anymore",
    "Forgot to use voucher/voucher issue",
    "Duplicate order",
  ];

  const toggleReason = (reason) => {
    setSelectedReasons((prev) =>
      prev.includes(reason)
        ? prev.filter((r) => r !== reason)
        : [...prev, reason]
    );
  }
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Array of different product images
  const productImages = [
    ODproduct1,
    ODproduct2,
    ODproduct3,
    ODproduct1,
    ODproduct2,
    ODproduct3,
    ODproduct1,
    ODproduct2,
  ];

  const handleMouseDown = (e) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust sensitivity
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };
  const [cancelPopup, setCancelPopup] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (cancelPopup) {
      setTimeout(() => setShowPopup(true), 10); // Delay for smooth animation
    } else {
      setShowPopup(false);
    }
  }, [cancelPopup]);

// view more information
 const [showOrderDetails, setShowOrderDetails] = useState(false);
 // view paymentDetails information
 const [showPaymentDetails, setPaymentDetails] = useState(false);
 // track order 
 const [showTrackOrder, setTrackOrder] = useState(false);


 const trackingData = [
  {
    id: 1,
    status: "Order Claimed by leopards Rider",
    description:
      "Order claimed by leopards rider and will be shipped at your door within 24 hours.",
    time: "Before 12:30 PM",
    trackingId: "#CPCN789456123",
    images: [ODproduct2, ODproduct2, ODproduct2, ODproduct2],
    extraImagesCount: 8,
  },
  {
    id: 2,
    status: "Order Shipped and claimed by leopards courier",
    description:
      "Shipped and claimed by Karachi leopards office. You may contact leopards courier via 03456789123, Pcs 1",
    time: "Nov 19, 2024, 11:57 am",
    trackingId: "#CPCN789456123",
    images: [ODproduct1, ODproduct1,ODproduct1, ODproduct1],
    extraImagesCount: 8,
  },
  {
    id: 3,
    status: "Order Shipped and claimed by leopards courier",
    description:
      "Shipped and claimed by Karachi leopards office. You may contact leopards courier via 03456789123, Pcs 1",
    time: "Nov 19, 2024, 11:57 am",
    trackingId: "#CPCN789456123",
    images: [ODproduct3, ODproduct3,ODproduct3, ODproduct3],
    extraImagesCount: 8,
  },
];
const [showTooltip, setShowTooltip] = useState(false);
const tooltipRef = useRef(null);

  // Close tooltip when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
        setShowTooltip(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);



  return (
    <div className="bg-[#FCFCFC]">
      <div className="w-full max-w-[1920px] mx-auto p-6 hidden md:flex ">
     
      <div className="flex flex-col md:flex-row gap-5 w-full">
  {/* Left Section - Sidebar */}
  <div className="">
    <AccountSideBar />
  </div>

  {/* Right Section - Full Width */}
  <div className="w-full flex-1 space-y-5">
    {/* Main Content */}
    <main className=" flex flex-col gap-10">
      {/* Order Summary Section */}
      <div className="flex flex-col gap-3 rounded-lg">
        <div className="flex justify-between">
        <h2 className="text-[30px] font-semibold">Order Placed Successfully</h2>
        <NavLink to="/ShareOrder"> <button className="ml-2 text-black px-5 py-2.5 border rounded-full flex gap-1 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M3.75 12.75V18.75C3.75 19.1478 3.90804 19.5294 4.18934 19.8107C4.47064 20.092 4.85218 20.25 5.25 20.25H18.75C19.1478 20.25 19.5294 20.092 19.8107 19.8107C20.092 19.5294 20.25 19.1478 20.25 18.75V12.75M12 15V2.625M16.5 6.75L12 2.25L7.5 6.75" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg> Share</button>
     </NavLink>
        </div>
      
        <div className="text-[#999] text-[16px] flex items-center gap-2 ">
          <p>Order time: <span className="font-medium text-black">Nov 4, 2024 at 17:45:00</span></p>
          <span>|</span>
          <p className='flex items-center gap-1'>Order ID: <span className="text-black">PO-153-18926398341670452</span> 
            <button className="ml-2 text-black px-2.5 py-1 border rounded-full flex gap-1 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M5.33594 2.66659V10.6666C5.33594 11.0202 5.47641 11.3593 5.72646 11.6094C5.97651 11.8594 6.31565 11.9999 6.66927 11.9999H12.0026C12.3562 11.9999 12.6954 11.8594 12.9454 11.6094C13.1955 11.3593 13.3359 11.0202 13.3359 10.6666V4.82792C13.3359 4.65029 13.3004 4.47446 13.2315 4.31075C13.1626 4.14704 13.0616 3.99875 12.9346 3.87459L10.7246 1.71325C10.4755 1.46969 10.141 1.3333 9.7926 1.33325H6.66927C6.31565 1.33325 5.97651 1.47373 5.72646 1.72378C5.47641 1.97382 5.33594 2.31296 5.33594 2.66659Z" stroke="#EEA500" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10.668 11.9998V13.3332C10.668 13.6868 10.5275 14.0259 10.2774 14.276C10.0274 14.526 9.68826 14.6665 9.33464 14.6665H4.0013C3.64768 14.6665 3.30854 14.526 3.05849 14.276C2.80844 14.0259 2.66797 13.6868 2.66797 13.3332V5.99984C2.66797 5.64622 2.80844 5.30708 3.05849 5.05703C3.30854 4.80698 3.64768 4.6665 4.0013 4.6665H5.33464" stroke="#EEA500" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
            </svg> Copy</button>
            <NavLink to="/Recipt"> <button className="ml-2 text-black px-2.5 py-1 border rounded-full flex gap-1 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M3.75 2C3.28587 2 2.84075 2.18437 2.51256 2.51256C2.18437 2.84075 2 3.28587 2 3.75V11.5C2 12.163 2.26339 12.7989 2.73223 13.2678C3.20107 13.7366 3.83696 14 4.5 14H11.5C12.163 14 12.7989 13.7366 13.2678 13.2678C13.7366 12.7989 14 12.163 14 11.5V10H11V3.75C11 3.28587 10.8156 2.84075 10.4874 2.51256C10.1592 2.18437 9.71413 2 9.25 2H3.75ZM11 11H13V11.5C13 11.8978 12.842 12.2794 12.5607 12.5607C12.2794 12.842 11.8978 13 11.5 13H11V11ZM3 3.75C3 3.55109 3.07902 3.36032 3.21967 3.21967C3.36032 3.07902 3.55109 3 3.75 3H9.25C9.44891 3 9.63968 3.07902 9.78033 3.21967C9.92098 3.36032 10 3.55109 10 3.75V13H4.5C4.10218 13 3.72064 12.842 3.43934 12.5607C3.15804 12.2794 3 11.8978 3 11.5V3.75ZM4.5 5.5C4.5 5.36739 4.55268 5.24021 4.64645 5.14645C4.74021 5.05268 4.86739 5 5 5H8C8.13261 5 8.25979 5.05268 8.35355 5.14645C8.44732 5.24021 8.5 5.36739 8.5 5.5C8.5 5.63261 8.44732 5.75979 8.35355 5.85355C8.25979 5.94732 8.13261 6 8 6H5C4.86739 6 4.74021 5.94732 4.64645 5.85355C4.55268 5.75979 4.5 5.63261 4.5 5.5ZM4.5 8C4.5 7.86739 4.55268 7.74021 4.64645 7.64645C4.74021 7.55268 4.86739 7.5 5 7.5H8C8.13261 7.5 8.25979 7.55268 8.35355 7.64645C8.44732 7.74021 8.5 7.86739 8.5 8C8.5 8.13261 8.44732 8.25979 8.35355 8.35355C8.25979 8.44732 8.13261 8.5 8 8.5H5C4.86739 8.5 4.74021 8.44732 4.64645 8.35355C4.55268 8.25979 4.5 8.13261 4.5 8ZM5 10C4.86739 10 4.74021 10.0527 4.64645 10.1464C4.55268 10.2402 4.5 10.3674 4.5 10.5C4.5 10.6326 4.55268 10.7598 4.64645 10.8536C4.74021 10.9473 4.86739 11 5 11H6.5C6.63261 11 6.75979 10.9473 6.85355 10.8536C6.94732 10.7598 7 10.6326 7 10.5C7 10.3674 6.94732 10.2402 6.85355 10.1464C6.75979 10.0527 6.63261 10 6.5 10H5Z" fill="#1A1A1A"/>
</svg> View receipt</button>
     </NavLink>
          </p>
        </div>
        <p className="text-black">Order confirmation was sent on Nov 4, 2024 to farmanaharis66@gmail.com and +92123456786</p>
      </div>
      <div className="bg-gray-100 p-5 rounded-lg flex ">
  {/* Shipping Details */}
  <div className="w-1/2 pr-4 flex flex-col gap-2">
    <h3 className="text-lg font-semibold">Shipping to</h3>
    <div className='text-[16px] text-[#999] flex flex-col gap-1'>
    <span >Farman Haris</span>
    <span>
      135- Mian House, Garden Town Lahore, Lahore - Garden Town, Punjab, Pakistan
    </span>
    </div>
  
  </div>

  {/* Vertical Line Separator */}
  <div className="w-px bg-gray-300 h-25"></div>

  {/* Delivery Details */}
  <div className="w-1/2 pl-4">
    <h3 className="text-lg font-semibold">Delivery Time</h3>
    <p className="text-black text-[16px]">Estimated Delivery on Nov 13 - Nov 21</p>
  </div>
</div>
<div className="w-full">
  <h2 className="text-lg font-semibold mb-3">Order split into 03 packages:</h2>
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
    {packages.map((pkg) => (
      <div key={pkg.id} className="bg-white p-5 rounded-lg border-1 border-[#F2F2F2] w-full">
        {/* Package Header */}
      <NavLink to="/PackageDetail">
      <div className="flex items-center justify-between mb-2">
          <p className="font-medium">Package 01</p>
          <p
            className={`text-sm font-medium flex ${
              pkg.type === "Express" ? "text-yellow-500" : "text-[#002882]"
            }`}
          >
            {pkg.type} <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M10 8L14 12L10 16" stroke="#1A1A1A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          </p>
        </div>
        </NavLink>  
     
        <hr className="border-t-[1px] border-[#CCD1D2] mb-3" />
        {/* Product Images - Full Width Inside Container */}
        <div className="grid grid-cols-3 gap-2 w-full">
          {pkg.items.map((item, index) => {
            const nextImage = pkg.items[index - 1]?.img || "/placeholder.jpg"; // Use previous image if available
           
            return (
              <div key={item.id} className="relative w-full">
                {item.img ? (
                  <img
                    src={item.img}
                    alt="Product"
                    className="w-full h-24 object-cover rounded-lg"
                  />
                ) : (
                  <div
                    className="w-full h-24 flex items-center justify-center text-white font-medium rounded-lg bg-cover bg-center relative"
                    style={{
                      backgroundImage: `url(${nextImage})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
                    <span className="relative z-10">{item.count}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Product Prices - Full Width Text */}
        <div className="grid grid-cols-3 gap-2 mt-2 w-full">
          {pkg.items.map((item) => (
            <p key={item.id} className="text-sm text-gray-600 text-center w-full">
              {item.price}
            </p>
          ))}
        </div>
      </div>
    ))}
  </div>
</div>
<div className="bg-white p-5 lg border-1 border-[#F2F2F2]">
      {/* Header */}
      <h2 className="text-lg font-semibold mb-4">Item Details (08)</h2>

      <div className="flex gap-5">
        {/* Left: Items List */}
        <div className="flex-1 space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center bg-[#FCFCFC] border border-[#F2F2F2] p-4 rounded-lg"
            >
              {/* Image */}
              <img
                src={item.img}
                alt="Product"
                className="w-20 h-20 object-cover rounded-lg"
              />

              {/* Product Details */}
              <div className="ml-4 flex-1 flex flex-col gap-2">
                <div className="flex items-center space-x-2">
                  {item.deal && (
                  <span className="bg-gradient-to-r from-red-600 to-orange-500 text-white text-xs px-2 py-1 rounded">
                  {item.deal}
                </span>
                
                  )}
                  <p className="text-sm font-medium">{item.name}</p>
                </div>
                <p className="text-gray-500 text-xs">{item.color}</p>
                   {/* Brand with Circular Image */}
                         <div className="flex items-center gap-2">
                           <img
                             src={item.brandImg} // 👈 Brand Image dynamically render ho raha hai
                             alt="Brand"
                             className="w-6 h-6 object-cover rounded-full"
                           />
                           <p className="text-xs">{item.brand}</p>
                         </div>
              </div>

              {/* Quantity & Price */}
              <div className="text-right flex flex-col gap-2">
                <p className="text-gray-500 text-sm">{item.qty}</p>
                <p className="text-lg font-semibold">{item.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Action Buttons */}
        <div className=" flex flex-col space-y-2 w-1/5">
        <NavLink to="/PackageDetail" ><button className="bg-[#002882] w-full text-white lg:text-[16px] text-[14px] lg:px-6 py-2 rounded-lg">
            Track Order
          </button></NavLink>
          <button className="border border-[#002882] text-[#002882] lg:text-[16px] text-[14px] lg:px-6 py-2 rounded-lg">
            Edit Address
          </button>
          <button 
  className="border border-gray-300 text-gray-500 lg:text-[16px] text-[14px] lg:px-6 py-2 rounded-lg" 
  onClick={() => setIsOpen(true)} // ✅ Opens the modal
>
  Cancel Order
</button>

        </div>
      </div>
    </div>
    
    <div className="grid grid-cols-2 gap-5">
      {/* Left Section - Payment Details */}
      <div className='bg-white p-5 rounded-lg border-1 border-[#F2F2F2] flex flex-col gap-2.5'>
        <h2 className="text-[24px] font-semibold mb-2">Payment Details</h2>
        <p className="text-sm text-green-600 flex items-center">
          <span className="mr-1">🔒</span> All Data is encrypted
        </p>
        <span className=' text-sm font-bold'>Order Total:</span>
        <span  className=' text-[30px] font-bold'>PKR 20,000</span>
        <hr className="border-t-[1px] border-[#F2F2F2]" />
        <div className="mt-3 space-y-2 text-sm flex flex-col gap-2">
          <div className="flex justify-between">
            <span className="">Item(s) Total</span>
            <span className="text-[#999]">PKR 24,900</span>
          </div>
          <div className="flex justify-between">
            <span className="">Item(s) Discount</span>
            <span className="text-red-500">-PKR 4,900</span>
          </div>
          <div className="flex justify-between">
            <span className="">Coupon Discount</span>
            <span className="text-red-500">-PKR 200</span>
          </div>
          <div className="flex justify-between font-semibold">
            <span className="">Subtotal</span>
            <span className="text-gray-800">PKR 20,000</span>
          </div>
          <div className="flex justify-between">
            <span className="">Shipping Fee</span>
            <span className="text-green-600">FREE</span>
          </div>
          <div className="flex justify-between font-bold text-lg mt-2">
            <span className="">Order Total</span>
            <span className="text-gray-900">PKR 20,000</span>
          </div>
          <div className="flex justify-between text-red-600 font-medium">
            <span>You Saved</span>
            <span>-PKR 4,900</span>
          </div>
        </div>
      </div>

      {/* Right Section - Payment Method */}
      <div className='bg-white p-5 rounded-lg border-1 border-[#F2F2F2] flex flex-col gap-2.5 justify-around'>
        <h2 className="text-[24px] font-semibold mb-2">Payment Method</h2>
        <hr className="border-t-[1px] border-[#F2F2F2]" />
        <div className="flex gap-2">
        <div
  className="flex w-[68px] h-[48px] p-[10px] flex-col justify-center items-center gap-[10px] rounded-[5px] border border-[#CCC] bg-[#FCFCFC]"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="56"
    height="19"
    viewBox="0 0 56 19"
    fill="none"
  >
    <g clipPath="url(#clip0_7524_42535)">
      <path
        d="M28.9509 6.03122C28.9192 8.52866 31.1766 9.92225 32.8771 10.7509C34.6241 11.601 35.211 12.1462 35.204 12.9066C35.191 14.0701 33.8105 14.5836 32.5186 14.6036C30.2647 14.6385 28.9541 13.995 27.9123 13.5084L27.1004 17.3077C28.1457 17.7893 30.0812 18.2094 32.0883 18.2278C36.7998 18.2278 39.8821 15.9022 39.8988 12.2963C39.9172 7.71996 33.5689 7.46666 33.6122 5.42117C33.6272 4.80093 34.219 4.13905 35.5159 3.97076C36.1578 3.88575 37.9298 3.82069 39.9389 4.74584L40.7274 1.06994C39.647 0.676544 38.2584 0.299845 36.5295 0.299845C32.095 0.299845 28.976 2.65719 28.9509 6.03122ZM48.3044 0.616472C47.444 0.616472 46.7191 1.1183 46.3955 1.8884L39.6654 17.9578H44.3734L45.3103 15.3687H51.0633L51.6068 17.9578H55.7564L52.1353 0.616472H48.3044ZM48.963 5.30103L50.3217 11.8129H46.6006L48.963 5.30103ZM23.2427 0.616688L19.5317 17.9576H24.018L27.7273 0.616255L23.2427 0.616688ZM16.6059 0.616688L11.9363 12.4197L10.0474 2.38373C9.82578 1.26339 8.9505 0.616472 7.9785 0.616472H0.345197L0.238281 1.12004C1.80537 1.46008 3.58585 2.00854 4.66455 2.59539C5.32469 2.95387 5.51293 3.26724 5.7298 4.1191L9.30746 17.9578H14.0484L21.3169 0.616472L16.6059 0.616688Z"
        fill="url(#paint0_linear_7524_42535)"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_7524_42535"
        x1="2552.63"
        y1="54.1914"
        x2="2604.52"
        y2="-1787.04"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#222357" />
        <stop offset="1" stopColor="#254AA5" />
      </linearGradient>
      <clipPath id="clip0_7524_42535">
        <rect
          width="55.5181"
          height="18"
          fill="white"
          transform="translate(0.240234 0.299988)"
        />
      </clipPath>
    </defs>
  </svg>
</div>

          <div className='flex flex-col'>
          <span className="text-gray-800 font-bold">VISA....4181</span>
          <span className="text-[#999] text-sm">Paid on Nov 4, 2024</span>
          </div>
          
        </div>

        {/* Billing Address */}
        <div className="mt-4 text-sm text-[#999] flex flex-col gap-2">
          <p>
            <span className="font-semibold">Billing Address:</span> Farman Haris |
            +92123456789
          </p>
          <p>135- Mian House, Garden Town Lahore</p>
          <p>Lahore - Garden Town, Punjab, Pakistan</p>
        </div>
        <hr className="border-t-[1px] border-[#F2F2F2]" />
        {/* Security Assurance */}
        <div className="mt-4 text-sm flex flex-col gap-2">
          <p className="text-[#12B76A] flex items-center font-medium text-[20px]">
            <span className="mr-1"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M18.3307 3.28334L9.9974 0.366669L1.66406 3.28334V10C1.66406 13.4392 3.77573 15.8433 5.74406 17.3358C6.93246 18.2279 8.23591 18.9553 9.61906 19.4983C9.71351 19.5339 9.80851 19.5678 9.90406 19.6L9.9974 19.6333L10.0924 19.6C10.2746 19.5367 10.4552 19.4689 10.6341 19.3967C11.9222 18.866 13.1375 18.1735 14.2507 17.3358C16.2199 15.8433 18.3307 13.4392 18.3307 10V3.28334ZM9.1649 12.8458L5.63073 9.31L6.80906 8.13084L9.16573 10.4883L13.8799 5.77417L15.0591 6.9525L9.1649 12.8458Z" fill="#12B76A"/>
</svg></span> Security Assurance
          </p>
          <p className="text-[#999]">
            ValueBox prioritizes the security of your payment information. We
            adhere to PCI DSS standards, implement advanced encryption technologies,
            and conduct regular system audits to ensure your data remains private
            and secure.
          </p>
        </div>
      </div>
    </div>
    
    </main>
  </div>
  
</div>
{isOpen && (
        <div
          className="fixed inset-0 flex items-center p-6 justify-center bg-black/70 backdrop-blur-sm z-999 "
          onClick={() => setIsOpen(false)}
        >
          {/* Modal Box */}
          <div
            className="bg-white p-7 rounded-lg shadow-lg w-[500px] relative flex flex-col gap-3"
            onClick={(e) => e.stopPropagation()} // Prevents closing modal when clicking inside
          >
            {/* Close Button */}
            <button 
        className="absolute -top-4 -right-4 w-10 h-10 flex items-center justify-center rounded-full bg-[#002882] text-white"
        onClick={() => setIsOpen(false)}
      >
        ✖
            </button>

            {/* Modal Header */}
            <h2 className="text-[24px] font-bold text-center mb-2">Cancel Order</h2>

            {/* Reasons List */}
            <div className="flex flex-col gap-3">
              {reasons.map((reason, index) => (
                <label key={index} className="flex items-center justify-between space-x-2 cursor-pointer">
                 
                  <span className="text-[18px]">{reason}</span>
                  <CheckBox
                    checked={selectedReasons.includes(reason)}
                    onChange={() => toggleReason(reason)}
                    className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                </label>
              ))}
            </div>

            {/* Confirm Button */}
            <button
              className="w-full bg-[#002882] text-white py-2 mt-2 rounded-md transition"
              onClick={() => {
                setIsOpen(false);
                console.log("Selected Reasons:", selectedReasons);
              }}
            >
              Confirm
            </button>
          </div>
        </div>
      )}
   
      </div>
     {!showTrackOrder && !showPaymentDetails ? (
       <div className="flex flex-col gap-5 md:hidden bg-[#FCFCFC] ">
        <div className="w-full bg-white shadow-[0px_4px_8px_-2px_rgba(16,24,40,0.10),0px_2px_4px_-2px_rgba(16,24,40,0.06)]">
      {/* Search Bar */}
      <div className="flex items-center p-4 pr-6 ">
      <NavLink to="/Orders">
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
   
    <div className="flex justify-between px-5 py-2.5 text-[18px] font-medium ">
    {!showOrderDetails ? (
    <span>Order Placed Successfully</span>
    ) : (
    <span>Order Paid Successfully</span>
    )}
   <NavLink to="/ShareOrder">
   <button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M3.75 12.75V18.75C3.75 19.1478 3.90804 19.5294 4.18934 19.8107C4.47064 20.092 4.85218 20.25 5.25 20.25H18.75C19.1478 20.25 19.5294 20.092 19.8107 19.8107C20.092 19.5294 20.25 19.1478 20.25 18.75V12.75M12 15V2.625M16.5 6.75L12 2.25L7.5 6.75" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg></button>
    </NavLink> 
   
    </div>
         </div>
         <div className="w-full flex flex-col gap-5 bg-[#FFF] shadow-[0px_4px_8px_-2px_rgba(16,24,40,0.10),0px_2px_4px_-2px_rgba(16,24,40,0.06)] px-5 py-2.5">
          <div className="flex justify-between items-center">
          <p className="text-[14px] font-semibold">#PO-153-18926398341670452</p>
         <NavLink to="/Recipt"> <button className="ml-2 text-black px-2.5 py-1 border rounded-full flex gap-1 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M3.75 2C3.28587 2 2.84075 2.18437 2.51256 2.51256C2.18437 2.84075 2 3.28587 2 3.75V11.5C2 12.163 2.26339 12.7989 2.73223 13.2678C3.20107 13.7366 3.83696 14 4.5 14H11.5C12.163 14 12.7989 13.7366 13.2678 13.2678C13.7366 12.7989 14 12.163 14 11.5V10H11V3.75C11 3.28587 10.8156 2.84075 10.4874 2.51256C10.1592 2.18437 9.71413 2 9.25 2H3.75ZM11 11H13V11.5C13 11.8978 12.842 12.2794 12.5607 12.5607C12.2794 12.842 11.8978 13 11.5 13H11V11ZM3 3.75C3 3.55109 3.07902 3.36032 3.21967 3.21967C3.36032 3.07902 3.55109 3 3.75 3H9.25C9.44891 3 9.63968 3.07902 9.78033 3.21967C9.92098 3.36032 10 3.55109 10 3.75V13H4.5C4.10218 13 3.72064 12.842 3.43934 12.5607C3.15804 12.2794 3 11.8978 3 11.5V3.75ZM4.5 5.5C4.5 5.36739 4.55268 5.24021 4.64645 5.14645C4.74021 5.05268 4.86739 5 5 5H8C8.13261 5 8.25979 5.05268 8.35355 5.14645C8.44732 5.24021 8.5 5.36739 8.5 5.5C8.5 5.63261 8.44732 5.75979 8.35355 5.85355C8.25979 5.94732 8.13261 6 8 6H5C4.86739 6 4.74021 5.94732 4.64645 5.85355C4.55268 5.75979 4.5 5.63261 4.5 5.5ZM4.5 8C4.5 7.86739 4.55268 7.74021 4.64645 7.64645C4.74021 7.55268 4.86739 7.5 5 7.5H8C8.13261 7.5 8.25979 7.55268 8.35355 7.64645C8.44732 7.74021 8.5 7.86739 8.5 8C8.5 8.13261 8.44732 8.25979 8.35355 8.35355C8.25979 8.44732 8.13261 8.5 8 8.5H5C4.86739 8.5 4.74021 8.44732 4.64645 8.35355C4.55268 8.25979 4.5 8.13261 4.5 8ZM5 10C4.86739 10 4.74021 10.0527 4.64645 10.1464C4.55268 10.2402 4.5 10.3674 4.5 10.5C4.5 10.6326 4.55268 10.7598 4.64645 10.8536C4.74021 10.9473 4.86739 11 5 11H6.5C6.63261 11 6.75979 10.9473 6.85355 10.8536C6.94732 10.7598 7 10.6326 7 10.5C7 10.3674 6.94732 10.2402 6.85355 10.1464C6.75979 10.0527 6.63261 10 6.5 10H5Z" fill="#1A1A1A"/>
</svg> View receipt</button>
     </NavLink>
          </div>
       
      <p className="text-sm mt-2.5">Estimated Delivery on Nov 13 - Nov 21</p>
      <hr className="border-t-[1px] border-[#F2F2F2]" />
      <div className="">
        <h3 className="text-lg font-medium">Delivery Guarantee</h3>
        <ul className="text-sm  space-y-2 mt-2">
          <li className="flex items-center gap-2">
            <span className=" text-lg"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M6 12L10.2426 16.2426L18.7275 7.75732" stroke="#12B76A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>
            Refund if no delivery in 30 days
          </li>
          <li className="flex items-center gap-2">
            <span className=" text-lg"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M6 12L10.2426 16.2426L18.7275 7.75732" stroke="#12B76A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>
            Refund if items damaged
          </li>
          <li className="flex items-center gap-2">
            <span className=" text-lg"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M6 12L10.2426 16.2426L18.7275 7.75732" stroke="#12B76A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>
            Refund if package lost
          </li>
        </ul>
      </div>

      <button className="w-full bg-[#002882] text-white py-2 rounded-lg" onClick={() => setTrackOrder(true)}>Track Order</button>
      <hr className="border-t-[1px] border-[#F2F2F2]" />
       
      <div className="flex flex-col gap-2.5">
      <h3 className="text-lg font-medium">Order split into 03 packages:</h3>
      
      <div className="flex flex-col gap-2.5">
        {/* Package 01 */}
        <div className="border border-[#F2F2F2] p-2 rounded-lg flex justify-between items-center">
          <div>
          <div className="text-sm font-semibold flex items-center">
      <span className="text-[12px]">Package 01</span>
      <span className="border-l border-gray-300 px-1 ml-1 text-yellow-500 text-[12px]">Express</span>
      <span className="border-l border-gray-300 px-1 text-[12px]">Pending</span>
      <span className=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M6.66602 5.33329L9.33268 7.99996L6.66602 10.6666" stroke="#1A1A1A" stroke-width="1.06667" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>
         </div>
            <p className="text-xs text-gray-500">Shipped within 24 hours</p>
          </div>
          <div className="flex space-x-2">
            <img src={ODproduct1} alt="Sneaker" className="w-10 h-10 rounded-md" />
            <img src={ODproduct1} alt="Sneaker" className="w-10 h-10 rounded-md" />
            <div className="w-10 h-10 flex items-center justify-center bg-gray-500 text-white text-sm rounded-md">+8</div>
          </div>
        </div>
        
        {/* Package 02 */}
        <div className="border border-[#F2F2F2] p-2 rounded-lg flex justify-between items-center">
          <div>
      <NavLink to="/PackageDetail"> <div className="text-sm font-semibold flex items-center">
      <span className="text-[12px]">Package 02</span>
      <span className="border-l border-gray-300 px-1 ml-1 text-[#002882] text-[12px]">Standard</span>
      <span className="border-l border-gray-300 px-1 text-[12px]">Pending</span>
      <span className=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M6.66602 5.33329L9.33268 7.99996L6.66602 10.6666" stroke="#1A1A1A" stroke-width="1.06667" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>
        </div>
        </NavLink> 
        
            <p className="text-xs text-gray-500">Estimated Delivery on Nov 13 - Nov 21</p>
          </div>
          <div className="flex space-x-2">
            <img src={ODproduct1} alt="Sneaker" className="w-10 h-10 rounded-md" />
            <img src={ODproduct1} alt="Sneaker" className="w-10 h-10 rounded-md" />
            <div className="w-10 h-10 flex items-center justify-center bg-gray-500 text-white text-sm rounded-md">+8</div>
          </div>
        </div>
      </div>
    </div>
    <hr className="border-t-[1px] border-[#F2F2F2]" />
 <div className="text-left flex flex-col gap-1">
      <h3 className="text-lg font-semibold">Ship to Farman Haris</h3>
      <p className="text-[#999] text-sm">135- Mian House, Garden Town Lahore</p>
      <p className="text-[#999] text-sm">Lahore - Garden Town, Punjab, Pakistan</p>
    </div>
 </div>
 {!showOrderDetails ? (
 <div className="w-full flex flex-col gap-5 bg-white shadow-md px-5 py-2.5">
      <h3 className="text-sm font-semibold mb-2">Purchased Items (08)</h3>

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="flex space-x-2 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing p-2"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {/* Item List with Different Images */}
        {productImages.map((image, index) => (
          <div
            key={index}
            className="w-16 h-16 rounded-lg overflow-hidden shadow-md bg-gray-200 flex-shrink-0"
          >
            <img
              src={image}
              alt={`Purchased Item ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <div className="flex items-center justify-between ">
      <div className="relative" ref={tooltipRef}>
      {/* Three-dot icon */}
      <span
        className="text-lg cursor-pointer"
        onClick={() => setShowTooltip(!showTooltip)}
      >
        •••
      </span>

      {/* Tooltip (Visible only when state is true) */}
      {showTooltip && (
       <div className="absolute left-3/2 -translate-x-1/3 bottom-full bg-white text-black text-xs px-2 py-1 rounded-md shadow-lg whitespace-nowrap">
       Cancel Order
     </div>
     
      )}
    </div>
        <button className="border border-gray-300 text-gray-500 px-3 py-1 rounded-md text-sm"  onClick={() => setCancelPopup(true)}>
          Cancel Order
        </button>
        {/* Popup Overlay & Modal */}
 {/* Popup Overlay & Modal */}
 {cancelPopup && (
        <div
          className={`fixed inset-0 z-[9999] bg-[rgba(0,0,0,0.3)] bg-opacity-50 flex items-end justify-center transition-opacity duration-300 ${
            cancelPopup ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={`bg-white w-full max-w-md rounded-t-2xl p-4 shadow-lg transform transition-transform duration-500 ease-out ${
              showPopup ? "translate-y-0" : "translate-y-full"
            }`}
          >
            {/* Close Button */}
            <button
              className="absolute right-2 top-4 w-8 h-8 flex items-center justify-center rounded-full bg-[#002882] text-white"
              onClick={() => {
                setShowPopup(false);
                setTimeout(() => setCancelPopup(false), 300);
              }}
            >
              ✖
            </button>

            {/* Header */}
            <h2 className="text-[24px] font-bold text-center mb-4">Cancel Order</h2>
 {/* Action Buttons */}
            <div className="flex flex-col gap-5">
              {reasons.map((reason, index) => (
                <label key={index} className="flex items-center justify-between space-x-2 cursor-pointer">
                 
                  <span className="text-[14px]">{reason}</span>
                  <CheckBox
                    checked={selectedReasons.includes(reason)}
                    onChange={() => toggleReason(reason)}
                    className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                </label>
              ))}
            </div>

            {/* Confirm Button */}
            <button
              className="w-full bg-[#002882] text-white py-2 mt-4 rounded-md transition"
              onClick={() => {
                setIsOpen(false);
                console.log("Selected Reasons:", selectedReasons);
              }}
            >
              Confirm
            </button>
          </div>
        </div>
      )}
      </div>
 
    <hr className="border-t-[1px] border-[#F2F2F2] " />
      <div className="flex justify-center items-center ">
        <span className="text-sm font-medium" onClick={() => setShowOrderDetails(true)}>Show more order information</span>
        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M16 10L12 14L8 10" stroke="#1A1A1A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>
      </div>


    </div>
     ) : (
      <div>
            <div className="bg-white p-4 rounded-[5px] border-1 border-[#F2F2F2]">
      {/* Header */}
      <h2 className="text-lg font-semibold ">Item Details (08)</h2>

      <div className="flex gap-2">
        {/* Left: Items List */}
        <div className="flex-1 space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center bg-[#FCFCFC] rounded-lg"
            >
              {/* Image */}
              <img
                src={item.img}
                alt="Product"
                className="w-20 h-20 object-cover rounded-lg"
              />

              {/* Product Details */}
              <div className="ml-4 flex-1 flex flex-col gap-2">
                <div className="flex items-center space-x-2">
                  {item.deal && (
                  <span className="bg-gradient-to-r from-red-600 to-orange-500 text-white text-[8px] px-1 py-1 rounded">
                  {item.deal}
                </span>
                
                  )}
                  <p className="text-xs font-medium">{item.name}</p>
                </div>
                <div  className="flex justify-between">
                <p className="text-gray-500 text-xs">{item.color}</p>
                <p className="text-gray-500 text-sm">{item.qty}</p>
                </div>
                
                 {/* Brand with Circular Image */}
                 <div className="flex justify-between">
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
              <div className="text-right flex flex-col gap-2">
               
              
              </div>
              <hr className="border-t-[1px] border-[#F2F2F2] py-2.5 " />
            </div>
            ))}
        </div>
         </div>
    
    </div>
    <div className="w-full flex flex-col mt-5 gap-5 bg-[#FFF] shadow-[0px_4px_8px_-2px_rgba(16,24,40,0.10),0px_2px_4px_-2px_rgba(16,24,40,0.06)] px-5 py-2.5" >
    <div className="flex flex-col  text-[14px] font-medium">
      <div className="flex justify-between" onClick={() => setPaymentDetails(true)}>
      <span className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path d="M1.5 9C1.5 6.17175 1.5 4.75725 2.379 3.879C3.258 3.00075 4.67175 3 7.5 3H10.5C13.3282 3 14.7427 3 15.621 3.879C16.4992 4.758 16.5 6.17175 16.5 9C16.5 11.8282 16.5 13.2427 15.621 14.121C14.742 14.9992 13.3282 15 10.5 15H7.5C4.67175 15 3.25725 15 2.379 14.121C1.50075 13.242 1.5 11.8282 1.5 9Z" stroke="#1A1A1A" stroke-width="1.125"/>
  <path d="M7.5 12H4.5M10.5 12H9.375M1.5 7.5H16.5" stroke="#1A1A1A" stroke-width="1.125" stroke-linecap="round"/>
</svg> Payment Details</span>
<span className="flex gap-1">08 items total:PKR 5,789 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M10 8L14 12L10 16" stroke="#1A1A1A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>
      </div>
      
<hr className="border-t-[1px] border-[#F2F2F2] my-2.5" />
<div className="flex justify-between">
  <div className="flex flex-col gap-1">
  <span className="flex gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path d="M7.5 10.725L8.49975 11.625L10.5 9.375" stroke="#1A1A1A" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M6.75255 4.5V3.75C6.75255 3.15326 6.98961 2.58097 7.41156 2.15901C7.83352 1.73705 8.40582 1.5 9.00255 1.5C9.59929 1.5 10.1716 1.73705 10.5935 2.15901C11.0155 2.58097 11.2526 3.15326 11.2526 3.75V4.5M15.1706 9.3945C14.7311 7.05375 14.5121 5.883 13.6781 5.1915C12.8463 4.5 11.6553 4.5 9.27255 4.5H8.73255C6.35055 4.5 5.15955 4.5 4.3263 5.1915C3.49305 5.883 3.27405 7.05375 2.83455 9.3945C2.2173 12.6862 1.90905 14.3318 2.80905 15.4163C3.70905 16.5008 5.38305 16.5 8.7318 16.5H9.2733C12.6221 16.5 14.2968 16.5 15.1961 15.4163C15.7181 14.7863 15.8336 13.9688 15.7181 12.75" stroke="#1A1A1A" stroke-width="1.125" stroke-linecap="round"/>
</svg> Order confirmation sent to</span>
<span>farmanharis66@gmail.com and 923106425938</span>
  </div>
  <span className="flex justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
  <path d="M10 8.5L14 12.5L10 16.5" stroke="#1A1A1A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>
  
</div>
    </div>
    </div>
      </div>
  
   
   
   )}
       
    
    </div>
  ) : showPaymentDetails ? (

    <div className="flex flex-col gap-5 md:hidden bg-[#FCFCFC] ">
    <div className="w-full bg-white shadow-[0px_4px_8px_-2px_rgba(16,24,40,0.10),0px_2px_4px_-2px_rgba(16,24,40,0.06)]">
    <div className=" flex flex-col ">
      {/* Back Button & Header */}
      <div className="flex items-center gap-2">
      <button onClick={() => setPaymentDetails(false)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="37" viewBox="0 0 36 37" fill="none">
       <path d="M21 12.5L15 18.5L21 24.5" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </button>
      <div className="flex flex-col gap-2 ">
       <h2 className="text-[20px] font-semibold">Payment Details</h2>
        <p className="text-sm text-[#12B76A] flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
  <path d="M6 8.5C6.26522 8.5 6.51957 8.39464 6.70711 8.20711C6.89464 8.01957 7 7.76522 7 7.5C7 7.23478 6.89464 6.98043 6.70711 6.79289C6.51957 6.60536 6.26522 6.5 6 6.5C5.73478 6.5 5.48043 6.60536 5.29289 6.79289C5.10536 6.98043 5 7.23478 5 7.5C5 7.76522 5.10536 8.01957 5.29289 8.20711C5.48043 8.39464 5.73478 8.5 6 8.5ZM9 4C9.26522 4 9.51957 4.10536 9.70711 4.29289C9.89464 4.48043 10 4.73478 10 5V10C10 10.2652 9.89464 10.5196 9.70711 10.7071C9.51957 10.8946 9.26522 11 9 11H3C2.73478 11 2.48043 10.8946 2.29289 10.7071C2.10536 10.5196 2 10.2652 2 10V5C2 4.73478 2.10536 4.48043 2.29289 4.29289C2.48043 4.10536 2.73478 4 3 4H3.5V3C3.5 2.33696 3.76339 1.70107 4.23223 1.23223C4.70107 0.763392 5.33696 0.5 6 0.5C6.3283 0.5 6.65339 0.564664 6.95671 0.690301C7.26002 0.815938 7.53562 1.00009 7.76777 1.23223C7.99991 1.46438 8.18406 1.73998 8.3097 2.04329C8.43534 2.34661 8.5 2.6717 8.5 3V4H9ZM6 1.5C5.60218 1.5 5.22064 1.65804 4.93934 1.93934C4.65804 2.22064 4.5 2.60218 4.5 3V4H7.5V3C7.5 2.60218 7.34196 2.22064 7.06066 1.93934C6.77936 1.65804 6.39782 1.5 6 1.5Z" fill="#12B76A"/>
</svg> Your Payment information is safe with us
      </p>
      </div>
      </div>
      <hr className="border-t-[1px] border-[#CCD1D2] mt-3" /> 
     
   
      
<div className="flex flex-col gap-3 p-5">
  {/* Order Total */}
  <div className="flex flex-col gap-1">
      <span className="text-gray-900 text-center text-sm font-bold">Order Total</span>
      <span className="text-center text-2xl font-bold text-black">PKR 5,789</span>
       </div>
       <hr className="border-t-[1px] border-[#CCD1D2]" />
     

      {/* Order Breakdown */}
      <div className="space-y-2 text-sm">
      <div className="flex justify-between">
        <span>Item(s) Total</span>
        <span className="text-gray-400 line-through">PKR 24,900</span>
      </div>

      {/* Item(s) Discount */}
      <div className="flex justify-between">
        <span>Item(s) Discount</span>
        <span className="text-red-500">-PKR 4,900</span>
      </div>

      {/* Coupon Discount */}
      <div className="flex justify-between">
        <span>Coupon Discount</span>
        <span className="text-red-500">-PKR 4,900</span>
      </div>

      {/* Subtotal */}
      <div className="flex justify-between ">
        <span>Subtotal</span>
        <span>PKR 20,000</span>
      </div>
      </div>
      <hr className="border-t-[1px] border-[#CCD1D2]" />
      <div className="flex justify-between ">
        <span>Shipping Fee</span>
        <span className="text-[#12B76A]">Free</span>
      </div>
      <hr className="border-t-[1px] border-[#CCD1D2]" />
      <div>
      <div className="flex justify-between">
        <span>Order Total</span>
        <span>PKR 20,000</span>
      </div>
      <div className="flex justify-between text-red-500">
        <span>You Saved</span>
        <span>-PKR 4,900</span>
      </div>
      </div>
      {/* Final Total */}
   

     
    
</div>
    
    </div>
      </div>
      <div className='bg-white px-5 py-2.5 flex flex-col gap-2.5 justify-around shadow-[0px_4px_8px_-2px_rgba(16,24,40,0.10),0px_2px_4px_-2px_rgba(16,24,40,0.06)]'>
        <h2 className="text-[24px] font-semibold mb-2">Payment Method</h2>
        <hr className="border-t-[1px] border-[#F2F2F2]" />
        <div className="flex gap-2">
        <div
  className="flex w-[68px] h-[48px] p-[10px] flex-col justify-center items-center gap-[10px] rounded-[5px] border border-[#CCC] bg-[#FCFCFC]"
>
 <svg xmlns="http://www.w3.org/2000/svg" width="43" height="15" viewBox="0 0 43 15" fill="none">
  <g clip-path="url(#clip0_7680_54749)">
    <path d="M22.2161 5.04845C22.1923 6.92154 23.8854 7.96673 25.1607 8.58822C26.471 9.22581 26.9112 9.63471 26.906 10.205C26.8962 11.0776 25.8608 11.4627 24.8919 11.4777C23.2014 11.5039 22.2185 11.0213 21.4372 10.6563L20.8282 13.5058C21.6122 13.867 23.0638 14.1821 24.5692 14.1959C28.1027 14.1959 30.4145 12.4517 30.427 9.74727C30.4408 6.31501 25.6796 6.12504 25.7121 4.59092C25.7233 4.12574 26.1672 3.62933 27.1399 3.50311C27.6213 3.43935 28.9503 3.39056 30.4571 4.08442L31.0485 1.3275C30.2382 1.03245 29.1967 0.749923 27.9001 0.749923C24.5742 0.749923 22.235 2.51793 22.2161 5.04845ZM36.7312 0.987392C36.086 0.987392 35.5422 1.36377 35.2995 1.94134L30.252 13.9934H33.783L34.4856 12.0515H38.8004L39.208 13.9934H42.3202L39.6044 0.987392H36.7312ZM37.2252 4.50081L38.2442 9.38472H35.4534L37.2252 4.50081ZM17.935 0.987556L15.1517 13.9933H18.5164L21.2984 0.98723L17.935 0.987556ZM12.9574 0.987556L9.45518 9.83981L8.03849 2.31283C7.87226 1.47258 7.2158 0.987392 6.4868 0.987392H0.761827L0.681641 1.36507C1.85695 1.6201 3.19232 2.03145 4.00134 2.47158C4.49645 2.74044 4.63763 2.97547 4.80028 3.61436L7.48353 13.9934H11.0392L16.4906 0.987392L12.9574 0.987556Z" fill="url(#paint0_linear_7680_54749)"/>
  </g>
  <defs>
    <linearGradient id="paint0_linear_7680_54749" x1="1914.97" y1="41.1686" x2="1953.89" y2="-1339.76" gradientUnits="userSpaceOnUse">
      <stop stop-color="#222357"/>
      <stop offset="1" stop-color="#254AA5"/>
    </linearGradient>
    <clipPath id="clip0_7680_54749">
      <rect width="41.6386" height="13.5" fill="white" transform="translate(0.681641 0.75)"/>
    </clipPath>
  </defs>
</svg>
</div>

          <div className='flex flex-col'>
          <span className="text-gray-800 font-bold">VISA....4181</span>
          <span className="text-[#999] text-sm">Paid on Nov 4, 2024</span>
          </div>
          
        </div>

        {/* Billing Address */}
        <div className="mt-4 text-sm text-[#999] flex flex-col gap-2">
          <p>
            <span className="font-semibold">Billing Address:</span> Farman Haris |
            +92123456789
          </p>
          <p>135- Mian House, Garden Town Lahore</p>
          <p>Lahore - Garden Town, Punjab, Pakistan</p>
        </div>
      
      
       
      </div>
      <div className="bg-white px-5 py-2.5 flex flex-col gap-2.5 justify-around mb-5 shadow-[0px_4px_8px_-2px_rgba(16,24,40,0.10),0px_2px_4px_-2px_rgba(16,24,40,0.06)]">
      <div className="mt-4 text-sm flex flex-col gap-2">
          <p className="text-[#12B76A] flex items-center font-medium text-[20px]">
            <span className="mr-1"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M18.3307 3.28334L9.9974 0.366669L1.66406 3.28334V10C1.66406 13.4392 3.77573 15.8433 5.74406 17.3358C6.93246 18.2279 8.23591 18.9553 9.61906 19.4983C9.71351 19.5339 9.80851 19.5678 9.90406 19.6L9.9974 19.6333L10.0924 19.6C10.2746 19.5367 10.4552 19.4689 10.6341 19.3967C11.9222 18.866 13.1375 18.1735 14.2507 17.3358C16.2199 15.8433 18.3307 13.4392 18.3307 10V3.28334ZM9.1649 12.8458L5.63073 9.31L6.80906 8.13084L9.16573 10.4883L13.8799 5.77417L15.0591 6.9525L9.1649 12.8458Z" fill="#12B76A"/>
</svg></span> Security Assurance
          </p>
          <p className="text-[#999]">
            ValueBox prioritizes the security of your payment information. We
            adhere to PCI DSS standards, implement advanced encryption technologies,
            and conduct regular system audits to ensure your data remains private
            and secure.
          </p>
        </div>
      </div>





</div>
) : showTrackOrder ? (
  <div className="flex flex-col gap-5 md:hidden bg-[#FCFCFC] ">
    <div className="w-full bg-white shadow-[0px_4px_8px_-2px_rgba(16,24,40,0.10),0px_2px_4px_-2px_rgba(16,24,40,0.06)]">
    <div className="flex items-center p-4 pr-6 ">
     <span onClick={() => setTrackOrder(false)}><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
  <path d="M21 12L15 18L21 24" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>  
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
   
    <div className="flex justify-between items-center px-5 py-2.5 text-[16px] font-medium ">
    <span>#PO-153-18926398341670452</span>
 <NavLink to="/Orders"><span className="flex items-center text-[14px]" >Order Details <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
  <path d="M15 24L21 18L15 12" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span></NavLink>  
    </div>
    </div>
    <div className="w-full flex flex-col gap-5 mb-5 p-5  bg-white shadow-[0px_4px_8px_-2px_rgba(16,24,40,0.10),0px_2px_4px_-2px_rgba(16,24,40,0.06)]">
     <div className="flex items-start border-l-4 border-blue-600 bg-blue-50 p-4 max-w-xl rounded-md">
      {/* Icon */}
      <div className="mr-3 text-blue-600">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <g clip-path="url(#clip0_7681_55751)">
    <path d="M7.99609 15C6.13958 15 4.3591 14.2625 3.04635 12.9497C1.73359 11.637 0.996094 9.85652 0.996094 8C0.996094 6.14348 1.73359 4.36301 3.04635 3.05025C4.3591 1.7375 6.13958 1 7.99609 1C9.85261 1 11.6331 1.7375 12.9458 3.05025C14.2586 4.36301 14.9961 6.14348 14.9961 8C14.9961 9.85652 14.2586 11.637 12.9458 12.9497C11.6331 14.2625 9.85261 15 7.99609 15ZM7.99609 16C10.1178 16 12.1527 15.1571 13.6529 13.6569C15.1532 12.1566 15.9961 10.1217 15.9961 8C15.9961 5.87827 15.1532 3.84344 13.6529 2.34315C12.1527 0.842855 10.1178 0 7.99609 0C5.87436 0 3.83953 0.842855 2.33924 2.34315C0.838949 3.84344 -0.00390625 5.87827 -0.00390625 8C-0.00390625 10.1217 0.838949 12.1566 2.33924 13.6569C3.83953 15.1571 5.87436 16 7.99609 16Z" fill="#002882"/>
    <path d="M8.92605 6.588L6.63605 6.875L6.55405 7.255L7.00405 7.338C7.29805 7.408 7.35605 7.514 7.29205 7.807L6.55405 11.275C6.36005 12.172 6.65905 12.594 7.36205 12.594C7.90705 12.594 8.54005 12.342 8.82705 11.996L8.91505 11.58C8.71505 11.756 8.42305 11.826 8.22905 11.826C7.95405 11.826 7.85405 11.633 7.92505 11.293L8.92605 6.588ZM8.99605 4.5C8.99605 4.76522 8.89069 5.01957 8.70315 5.20711C8.51562 5.39464 8.26126 5.5 7.99605 5.5C7.73083 5.5 7.47648 5.39464 7.28894 5.20711C7.1014 5.01957 6.99605 4.76522 6.99605 4.5C6.99605 4.23478 7.1014 3.98043 7.28894 3.79289C7.47648 3.60536 7.73083 3.5 7.99605 3.5C8.26126 3.5 8.51562 3.60536 8.70315 3.79289C8.89069 3.98043 8.99605 4.23478 8.99605 4.5Z" fill="#002882"/>
  </g>
  <defs>
    <clipPath id="clip0_7681_55751">
      <rect width="16" height="16" fill="white"/>
    </clipPath>
  </defs>
</svg>
        </div>

      {/* Message */}
      <p className="text-sm text-gray-700">
        In order to get your items to you as soon as possible, we have split
        your order into 2 packages. Split package will not affect the shipping
        fee, estimated delivery date, or any free shipping promotions.
      </p>
    </div>
    <NavLink to="/PackageDetail">
    {trackingData.map((data) => (
        <div key={data.id} className="bg-white rounded-lg border border-gray-300">
          {/* Header */}
          <div className="flex justify-between items-center p-1.5 px-2.5 w-full bg-gradient-to-r from-[#FFC136] via-[#FAC142] via-[#FFD168] via-[#F5BC3A] to-[#E09B00] rounded-t-lg">
  <div className="flex items-center space-x-2">
    <div className="flex h-6 px-1 py-0.5 flex-col justify-center items-center gap-1 rounded-sm  bg-[#FCFCFC]">
      <img src={Leopard} alt="Leopards" className="h-full" />
    </div>
    <span className=" font-medium">Leopards</span>
  </div>
  <span className=" font-medium">{data.trackingId}</span>
</div>

           <div className="p-2.5">
   {/* Status */}
   <h3 className="font-bold">{data.status}</h3>
          <p className="text-sm">{data.description}</p>
          <p className="text-[#999] text-xs mt-1">{data.time}</p>

          {/* Images */}
          <div className="flex items-center  space-x-2 mt-3">
            {data.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Product"
                className="w-12 h-12 object-cover rounded-md"
              />
            ))}
            {data.extraImagesCount > 0 && (
              <div className="w-12 h-12 flex items-center justify-center bg-gray-300 text-gray-700 font-semibold rounded-md">
                +{data.extraImagesCount}
              </div>
            )}
          </div>

          {/* Footer */}
          <p className="text-[#999] text-sm mt-2 cursor-pointer hover:underline">
            12 Items in this package &gt;
          </p>
           </div>
       
        </div>
      ))}
    </NavLink>
   
    </div>
  

  </div>
) : null}

         
         {!showTrackOrder && !showPaymentDetails ? (
  <div className=" bg-[#FCFCFC] pb-10 px-10">
  <DetailProductCard2 products={products} style="flex-wrap justify-center !px-0 sm:px-0" />
</div>
) : showTrackOrder ? (
  <span></span>
) : showPaymentDetails ? (
  <span></span>
) : null}
    </div>
  )
}

export default OrderDetails
