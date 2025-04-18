import React, { useEffect, useState } from 'react'
import AccountSideBar from '../../Components/AccountSideBar'
import DealCarousel2 from "/src/Images/DealCarousel2.png";
import Image2 from "/src/Images/Image2.png";
import Image3 from "/src/Images/Image3.png";
import ProductCardCrousal from "/src/Images/ProductCardCrousal.png";
import MoreToLove from '../../Components/MoreToLove'


const packages = [
    {
      id: 1,
      name: "Package 01",
      items: [
        {
          name: "WiFi Doorbell Camera Smart WiFi Video Intercom",
          brand: "KJK Brand",
          color: "Red+42",
          price: "PKR 8,500",
          quantity: 1,
          image: DealCarousel2,
          deal:'Welcome Deal'
        },
        {
          name: "WiFi Doorbell Camera Smart WiFi Video Intercom",
          brand: "KJK Brand",
          color: "Red+42",
          price: "PKR 8,500",
          quantity: 1,
          image: Image2,
        },
        {
          name: "WiFi Doorbell Camera Smart WiFi Video Intercom",
          brand: "KJK Brand",
          color: "Red+42",
          price: "PKR 8,500",
          quantity: 1,
          image: Image3,
        },
        {
          name: "WiFi Doorbell Camera Smart WiFi Video Intercom",
          brand: "KJK Brand",
          color: "Red+42",
          price: "PKR 8,500",
          quantity: 1,
          image: ProductCardCrousal,
        },
      ],
      trackingNumber: "CPCN789456123",
      estimatedDelivery: { start: "13 November 2024", end: "23 November 2024" },
      deliveryGuarantee: [
        "Refund if no delivery in 10 days",
        "Refund if items damaged",
        "Refund if package lost",
      ],
      valueboxAssurance: [
        "We provide safe and secure payment method",
        "We ensure your Security & Privacy.",
        "We provide buyers protection so that they get their money back.",
      ],
      shippingDetails: {
        status: "Order Shipped",
        date: "November 8, 2024, 12:45am",
        progress: [
          "In transit to airport warehouse",
          "Arrived at the airport for departure",
          "Departure from the airport",
          "Arrived and prepared to go through customs",
        ],
        timeline: [
            "Order Shipped",
            "Awaiting Shipment",
            "Order is being packed",
            "Order Paid Successfully",
            "Order Submitted",
          ],
      },
      address: "Farman Haris 135 - Mian House, Garden Town Lahore, Pakistan",
    },
    {
      id: 2,
      name: "Package 02",
      items: [
        {
          name: "WiFi Doorbell Camera Smart WiFi Video Intercom",
          brand: "KJK Brand",
          color: "Red+42",
          price: "PKR 8,500",
          quantity: 1,
          image: DealCarousel2,
        },
        {
          name: "WiFi Doorbell Camera Smart WiFi Video Intercom",
          brand: "KJK Brand",
          color: "Red+42",
          price: "PKR 8,500",
          quantity: 1,
          image: Image2,
        },
        {
          name: "WiFi Doorbell Camera Smart WiFi Video Intercom",
          brand: "KJK Brand",
          color: "Red+42",
          price: "PKR 8,500",
          quantity: 1,
          image: Image3,
        },
        
      ],
      trackingNumber: "CPCN789456124",
      estimatedDelivery: { start: "15 November 2024", end: "25 November 2024" },
      deliveryGuarantee: [
        "Refund if no delivery in 10 days",
        "Refund if items damaged",
      ],
      valueboxAssurance: [
        "We provide safe and secure payment method",
        "We ensure your Security & Privacy.",
      ],
      shippingDetails: {
        status: "In Transit",
        date: "November 9, 2024, 2:30pm",
        progress: [
            "In transit to airport warehouse",
            "Arrived at the airport for departure",
            "Departure from the airport",
            "Arrived and prepared to go through customs",
          ],
        timeline: [
            "Awaiting Shipment",
            "Order is being packed",
            "Order Paid Successfully",
            "Order Submitted",
          ],
      },
      address: "Ali Ahmed 200 - Main Road, Johar Town, Lahore, Pakistan",
    },
  ];
function PackageDetail() {
const [activeTab,setActiveTab]=useState(0)
const [showToast,setShowToast]=useState(false)
const [copied, setCopied] = useState(false);
const phoneNumber = "92106425938";

const copyToClipboard = () => {
  navigator.clipboard.writeText(phoneNumber);
  setCopied(true);
  setTimeout(() => setCopied(false), 2000);
};

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

const { status, date, progress, timeline } = packages[activeTab].shippingDetails;

const copyTrackingNum=()=>{
    if(packages[activeTab]){
        window.navigator.clipboard.writeText(packages[activeTab].trackingNumber)
        setShowToast(true)
        setTimeout(() => {
            setShowToast(false)
        }, 2000);
    }
    
}

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

      const [openPopup, setOpenPopup] = useState(null);
      const [isAnimating, setIsAnimating] = useState(false);
      
      // Handle Open Popup
      const handleOpen = (popupName) => {
        if (openPopup === popupName) {
          handleClose(); // If same popup clicked, close it
        } else {
          setOpenPopup(popupName);
          setTimeout(() => setIsAnimating(true), 10);
        }
      };
      
      // Handle Close Popup
      const handleClose = () => {
        setIsAnimating(false);
        setTimeout(() => setOpenPopup(null), 300);
      };

      const [expanded, setExpanded] = useState(false);

      const trackingNumber = "CPCN789456123";

    
      const handleCopy = () => {
        navigator.clipboard.writeText(trackingNumber);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      };
  return (
    <>
    {!isMobile?(<div className='relative flex p-2 lg:p-4 xl:p-6 gap-2 lg:gap-4 xl:gap-5 max-w-[1920px] mx-auto'>
      <div>
      <AccountSideBar/>
      </div>
      <div className='w-full'>
      <div className="flex items-center gap-2 p-2 lg:p-4 border border-l-[10px] border-dark-blue rounded-md bg-[#FFF] text-gray-700">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<g clipPath="url(#clip0_7524_44702)">
  <path d="M11.9961 22.5C9.21132 22.5 6.5406 21.3938 4.57147 19.4246C2.60234 17.4555 1.49609 14.7848 1.49609 12C1.49609 9.21523 2.60234 6.54451 4.57147 4.57538C6.5406 2.60625 9.21132 1.5 11.9961 1.5C14.7809 1.5 17.4516 2.60625 19.4207 4.57538C21.3898 6.54451 22.4961 9.21523 22.4961 12C22.4961 14.7848 21.3898 17.4555 19.4207 19.4246C17.4516 21.3938 14.7809 22.5 11.9961 22.5ZM11.9961 24C15.1787 24 18.2309 22.7357 20.4814 20.4853C22.7318 18.2348 23.9961 15.1826 23.9961 12C23.9961 8.8174 22.7318 5.76516 20.4814 3.51472C18.2309 1.26428 15.1787 0 11.9961 0C8.8135 0 5.76125 1.26428 3.51081 3.51472C1.26038 5.76516 -0.00390625 8.8174 -0.00390625 12C-0.00390625 15.1826 1.26038 18.2348 3.51081 20.4853C5.76125 22.7357 8.8135 24 11.9961 24Z" fill="#002882"/>
  <path d="M13.391 9.882L9.95602 10.3125L9.83302 10.8825L10.508 11.007C10.949 11.112 11.036 11.271 10.94 11.7105L9.83302 16.9125C9.54202 18.258 9.99052 18.891 11.045 18.891C11.8625 18.891 12.812 18.513 13.2425 17.994L13.3745 17.37C13.0745 17.634 12.6365 17.739 12.3455 17.739C11.933 17.739 11.783 17.4495 11.8895 16.9395L13.391 9.882ZM13.496 6.75C13.496 7.14782 13.338 7.52936 13.0567 7.81066C12.7754 8.09196 12.3938 8.25 11.996 8.25C11.5982 8.25 11.2167 8.09196 10.9354 7.81066C10.6541 7.52936 10.496 7.14782 10.496 6.75C10.496 6.35218 10.6541 5.97064 10.9354 5.68934C11.2167 5.40804 11.5982 5.25 11.996 5.25C12.3938 5.25 12.7754 5.40804 13.0567 5.68934C13.338 5.97064 13.496 6.35218 13.496 6.75Z" fill="#002882"/>
</g>
<defs>
  <clipPath id="clip0_7524_44702">
    <rect width="24" height="24" fill="white"/>
  </clipPath>
</defs>
</svg>
    <p className="text-sm text-natural-black w-full">
      In order to get your items to you as soon as possible, we have split your
      order into <span className="font-medium">2 packages</span>. Split package will not
      affect the shipping fee, estimated delivery date, or any free shipping
      promotions.
    </p>
  </div>

  <div className="">
      <div className='flex justify-between gap-4 mt-3'>
      {packages.map((pkg,index)=>(
          <button key={pkg.id} className={` transition-all bg-[#FCFCFC] pb-3 mb-4 w-full rounded-[5px]
          ${activeTab===index?"border-t-[5px] border-dark-blue text-dark-blue"
          :"border-t-[5px] border-natural-gray-20 text-natural-gray-20"}`} onClick={()=>setActiveTab(index)}>
          {/* <Package className="text-blue-600 mr-2" /> */}
          <h2 className="text-lg font-semibold ">{pkg.name}</h2>
          <span className="ml-2">{pkg.items.length} Items in this package</span>
        </button>
      ))}

      </div>
    
      <div>
        
        <div className="xl:flex justify-between items-center text-gray-700 mb-4">
          {/* <Truck className="text-yellow-500 mr-2" /> */}
          <div className='flex gap-1 text-natural-black'>
          <p className='border border-natural-gray-20 p-1 rounded-[3px] '><img className='w-8 h-5' src="data:image/png;base64,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" alt="" /></p>
           <span className='text-natural-gray'>Tracking Number</span>: {packages[activeTab].trackingNumber} 
           <button className='flex py-0.5 px-2 items-center gap-1 text-xs border border-[#333] rounded-full' 
           onClick={()=>copyTrackingNum()}>
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
<path d="M6.08594 2.66659V10.6666C6.08594 11.0202 6.22641 11.3593 6.47646 11.6094C6.72651 11.8594 7.06565 11.9999 7.41927 11.9999H12.7526C13.1062 11.9999 13.4454 11.8594 13.6954 11.6094C13.9455 11.3593 14.0859 11.0202 14.0859 10.6666V4.82792C14.0859 4.65029 14.0504 4.47446 13.9815 4.31075C13.9126 4.14704 13.8116 3.99875 13.6846 3.87459L11.4746 1.71325C11.2255 1.46969 10.891 1.3333 10.5426 1.33325H7.41927C7.06565 1.33325 6.72651 1.47373 6.47646 1.72378C6.22641 1.97382 6.08594 2.31296 6.08594 2.66659Z" stroke="#EEA500" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.418 11.9998V13.3332C11.418 13.6868 11.2775 14.0259 11.0274 14.276C10.7774 14.526 10.4383 14.6665 10.0846 14.6665H4.7513C4.39768 14.6665 4.05854 14.526 3.80849 14.276C3.55844 14.0259 3.41797 13.6868 3.41797 13.3332V5.99984C3.41797 5.64622 3.55844 5.30708 3.80849 5.05703C4.05854 4.80698 4.39768 4.6665 4.7513 4.6665H6.08464" stroke="#EEA500" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
</svg> Copy</button>
{showToast && (
      <div className="fixed bottom-5 right-5 bg-dark-blue text-white px-4 py-2 rounded shadow-lg transition-opacity duration-300">
        Tracking number copied!
      </div>
    )}
           </div>
           <div className='flex gap-2 mt-2 xl:mt-0'>
              <button className='border-r border-natural-gray-20 px-2 flex items-center gap-1'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
<path d="M8.80769 11.5C8.80769 11.6597 8.76032 11.8159 8.67157 11.9487C8.58282 12.0816 8.45668 12.1851 8.30909 12.2462C8.16151 12.3073 7.99911 12.3233 7.84243 12.2922C7.68575 12.261 7.54183 12.1841 7.42888 12.0711C7.31592 11.9582 7.23899 11.8142 7.20783 11.6576C7.17666 11.5009 7.19266 11.3385 7.25379 11.1909C7.31492 11.0433 7.41845 10.9172 7.55127 10.8284C7.6841 10.7397 7.84026 10.6923 8 10.6923C8.21422 10.6923 8.41965 10.7774 8.57113 10.9289C8.7226 11.0803 8.80769 11.2858 8.80769 11.5ZM8 4.23077C6.51519 4.23077 5.30769 5.31779 5.30769 6.65385V6.92308C5.30769 7.06588 5.36443 7.20284 5.46541 7.30383C5.56639 7.40481 5.70335 7.46154 5.84616 7.46154C5.98897 7.46154 6.12592 7.40481 6.22691 7.30383C6.32789 7.20284 6.38462 7.06588 6.38462 6.92308V6.65385C6.38462 5.91346 7.10952 5.30769 8 5.30769C8.89048 5.30769 9.61539 5.91346 9.61539 6.65385C9.61539 7.39423 8.89048 8 8 8C7.85719 8 7.72023 8.05673 7.61925 8.15771C7.51827 8.25869 7.46154 8.39565 7.46154 8.53846V9.07692C7.46154 9.21973 7.51827 9.35669 7.61925 9.45767C7.72023 9.55865 7.85719 9.61538 8 9.61538C8.14281 9.61538 8.27977 9.55865 8.38075 9.45767C8.48173 9.35669 8.53846 9.21973 8.53846 9.07692V9.02846C9.76616 8.80298 10.6923 7.82365 10.6923 6.65385C10.6923 5.31779 9.48481 4.23077 8 4.23077ZM15 8C15 9.38447 14.5895 10.7378 13.8203 11.889C13.0511 13.0401 11.9579 13.9373 10.6788 14.4672C9.3997 14.997 7.99224 15.1356 6.63437 14.8655C5.2765 14.5954 4.02922 13.9287 3.05026 12.9497C2.07129 11.9708 1.4046 10.7235 1.13451 9.36563C0.86441 8.00776 1.00303 6.6003 1.53285 5.32122C2.06266 4.04213 2.95987 2.94888 4.11101 2.17971C5.26216 1.41054 6.61553 1 8 1C9.85592 1.00196 11.6353 1.74009 12.9476 3.05242C14.2599 4.36475 14.998 6.14409 15 8ZM13.9231 8C13.9231 6.82853 13.5757 5.68336 12.9249 4.70931C12.274 3.73527 11.349 2.97609 10.2667 2.52779C9.18436 2.07949 7.99343 1.96219 6.84447 2.19073C5.6955 2.41928 4.64011 2.98339 3.81175 3.81175C2.9834 4.64011 2.41928 5.6955 2.19074 6.84446C1.96219 7.99343 2.07949 9.18436 2.52779 10.2667C2.9761 11.349 3.73527 12.274 4.70932 12.9249C5.68336 13.5757 6.82853 13.9231 8 13.9231C9.57035 13.9213 11.0759 13.2967 12.1863 12.1863C13.2967 11.0759 13.9213 9.57035 13.9231 8Z" fill="#1A1A1A"/>
</svg> Can’t find your package?</button>
              <button className='border-r border-natural-gray-20 px-2 flex items-center gap-1'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
<g clipPath="url(#clip0_7525_45847)">
  <path d="M19.5 11H19V7.62187C19 7.225 18.8406 6.84375 18.5594 6.5625L15.4375 3.44062C15.1562 3.15937 14.775 3 14.3781 3H13V1.5C13 0.671875 12.3281 0 11.5 0H3.5C2.67188 0 2 0.671875 2 1.5V3H0.25C0.1125 3 0 3.1125 0 3.25V3.75C0 3.8875 0.1125 4 0.25 4H8.75C8.8875 4 9 4.1125 9 4.25V4.75C9 4.8875 8.8875 5 8.75 5H1.25C1.1125 5 1 5.1125 1 5.25V5.75C1 5.8875 1.1125 6 1.25 6H7.75C7.8875 6 8 6.1125 8 6.25V6.75C8 6.8875 7.8875 7 7.75 7H0.25C0.1125 7 0 7.1125 0 7.25V7.75C0 7.8875 0.1125 8 0.25 8H6.75C6.8875 8 7 8.1125 7 8.25V8.75C7 8.8875 6.8875 9 6.75 9H2V13C2 14.6562 3.34375 16 5 16C6.65625 16 8 14.6562 8 13H12C12 14.6562 13.3438 16 15 16C16.6562 16 18 14.6562 18 13H19.5C19.775 13 20 12.775 20 12.5V11.5C20 11.225 19.775 11 19.5 11ZM5 14.5C4.17188 14.5 3.5 13.8281 3.5 13C3.5 12.1719 4.17188 11.5 5 11.5C5.82812 11.5 6.5 12.1719 6.5 13C6.5 13.8281 5.82812 14.5 5 14.5ZM15 14.5C14.1719 14.5 13.5 13.8281 13.5 13C13.5 12.1719 14.1719 11.5 15 11.5C15.8281 11.5 16.5 12.1719 16.5 13C16.5 13.8281 15.8281 14.5 15 14.5ZM17.5 8H13V4.5H14.3781L17.5 7.62187V8Z" fill="#1A1A1A"/>
</g>
<defs>
  <clipPath id="clip0_7525_45847">
    <rect width="20" height="16" fill="white"/>
  </clipPath>
</defs>
</svg> View details on Leopards</button>
              <button className='px-2 flex items-center gap-1' onClick={()=>openModal('contactLeopards')}> 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
<g clipPath="url(#clip0_7525_45857)">
  <path d="M8.0026 5.33325H8.00794M8.0026 10.6666V7.33325M14.6693 7.99992C14.6693 11.6819 11.6846 14.6666 8.0026 14.6666C4.3206 14.6666 1.33594 11.6819 1.33594 7.99992C1.33594 4.31792 4.3206 1.33325 8.0026 1.33325C11.6846 1.33325 14.6693 4.31792 14.6693 7.99992Z" stroke="#1A1A1A" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
  <clipPath id="clip0_7525_45857">
    <rect width="16" height="16" fill="white"/>
  </clipPath>
</defs>
</svg>Contact Leopards</button>
           </div>

           {activeModal === "contactLeopards" && (
                   <div
                     className="fixed inset-0 bg-[#00000042] bg-opacity-50 flex justify-center items-center z-100"
                     onClick={closeModal} // Click outside to close modal
                   >
                     <div className={`${closing ? 'animate-flyout' : 'animate-wiggle'} relative bg-natural-0 p-6 rounded-lg shadow-lg `} onClick={(e) => e.stopPropagation()}>
                     <button
                         className="absolute -top-3 -right-3 bg-white rounded-full"
                         onClick={closeModal} // Close button inside modal
                       >
                         <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
             <path d="M15 0C6.64286 0 0 6.64286 0 15C0 23.3571 6.64286 30 15 30C23.3571 30 30 23.3571 30 15C30 6.64286 23.3571 0 15 0ZM20.7857 22.5L15 16.7143L9.21429 22.5L7.5 20.7857L13.2857 15L7.5 9.21429L9.21429 7.5L15 13.2857L20.7857 7.5L22.5 9.21429L16.7143 15L22.5 20.7857L20.7857 22.5Z" fill="#002882"/>
           </svg>
                       </button>
           
                 <div className="max-w-md text-natural-black">
    <h2 className="text-xl font-semibold ">Contact Leopards</h2>
    <p className="text-natural-gray text-sm mt-1">
      Contact with Leopards customer service representatives to help resolve
      your issues and get back on track.
    </p>

    {/* Phone Number */}
    <div className="mt-4">
      <label className="text-sm font-medium ">Phone Number</label>
      <div className="flex items-center border border-natural-gray-20 rounded-lg p-2 mt-1 bg-[#FFF]">
        <input
          type="text"
          value={phoneNumber}
          readOnly
          className="bg-transparent flex-grow outline-none"
        />
        <button onClick={copyToClipboard} className="text-gray-500 hover:text-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M8.00781 3.99976V15.9998C8.00781 16.5302 8.21853 17.0389 8.5936 17.414C8.96867 17.789 9.47738 17.9998 10.0078 17.9998H18.0078C18.5382 17.9998 19.047 17.789 19.422 17.414C19.7971 17.0389 20.0078 16.5302 20.0078 15.9998V7.24176C20.0078 6.97532 19.9545 6.71157 19.8511 6.466C19.7478 6.22043 19.5964 5.998 19.4058 5.81176L16.0908 2.56976C15.7172 2.20441 15.2154 1.99982 14.6928 1.99976H10.0078C9.47738 1.99976 8.96867 2.21047 8.5936 2.58554C8.21853 2.96061 8.00781 3.46932 8.00781 3.99976Z" stroke="#999999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.0039 17.9995V19.9995C16.0039 20.5299 15.7932 21.0387 15.4181 21.4137C15.043 21.7888 14.5343 21.9995 14.0039 21.9995H6.00391C5.47347 21.9995 4.96477 21.7888 4.58969 21.4137C4.21462 21.0387 4.00391 20.5299 4.00391 19.9995V8.99951C4.00391 8.46908 4.21462 7.96037 4.58969 7.5853C4.96477 7.21023 5.47347 6.99951 6.00391 6.99951H8.00391" stroke="#999999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
        </button>
      </div>
      {copied && <p className="text-green-600 text-xs mt-1">Copied!</p>}
    </div>

    {/* Hours of Operation */}
    <div className="mt-4">
      <label className="text-sm font-medium">Hours of operation</label>
      <p className="text-natural-gray text-sm mt-1">
        Monday - Saturday: 9:00AM - 06:00PM
      </p>
    </div>
  </div>
                
               </div>
                       
                     
                   </div>
                 )}
          {/* <ClipboardCopy className="w-4 h-4 text-gray-500 ml-2 cursor-pointer" /> */}
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-4 text-sm text-gray-700 border border-natural-color p-4 rounded-md">
        <div className=''>
<h3 className="text-gray-900 font-medium">Estimated Delivery:</h3>
<div className="flex items-center gap-2 bg-natural-0 border border-natural-color p-3 mt-3 rounded-[5px] text-mon-yellow text-lg font-semibold">
  <div className="flex items-center gap-1">
    <span className="text-3xl font-bold">{packages[activeTab]?.estimatedDelivery?.start.slice(0, 2)}</span>
    <span className="text-sm w-[70px]">{packages[activeTab]?.estimatedDelivery?.start.slice(3)}</span>
  </div>
  <span className="text-2xl font-bold">-</span>
  <div className="flex items-center gap-1">
    <span className="text-3xl font-bold">{packages[activeTab]?.estimatedDelivery?.end.slice(0, 2)}</span>
    <span className="text-sm w-[70px]">{packages[activeTab]?.estimatedDelivery?.end.slice(3)}</span>
  </div>
</div>
</div>

          <div className='flex'>
          <div className='border-r border-natural-color px-3'>
            <h3 className="text-gray-900 font-bold">Delivery Guarantee</h3>
            <ul className=" list-inside flex flex-col gap-1 text-[#666]">
              {packages[activeTab].deliveryGuarantee.map((item, index) => (
                <li key={index} className='flex gap-1 mt-1'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M5 10L8.53553 13.5356L15.6062 6.46448" stroke="#12B76A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg> {item}</li>
              ))}
            </ul>
          </div>
          <div className='px-3'>
            <h3 className="text-natural-black font-bold">Valuebox Assurance</h3>
            <ul className=" text-[#666]">
              {packages[activeTab].valueboxAssurance.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-gray-900 font-semibold flex gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" className='w-6' viewBox="0 0 30 24" fill="none">
<g clipPath="url(#clip0_8257_55349)">
  <path d="M29.25 16.5H28.5V11.4328C28.5 10.8375 28.2609 10.2656 27.8391 9.84375L23.1562 5.16094C22.7344 4.73906 22.1625 4.5 21.5672 4.5H19.5V2.25C19.5 1.00781 18.4922 0 17.25 0H5.25C4.00781 0 3 1.00781 3 2.25V4.5H0.375C0.16875 4.5 0 4.66875 0 4.875V5.625C0 5.83125 0.16875 6 0.375 6H13.125C13.3313 6 13.5 6.16875 13.5 6.375V7.125C13.5 7.33125 13.3313 7.5 13.125 7.5H1.875C1.66875 7.5 1.5 7.66875 1.5 7.875V8.625C1.5 8.83125 1.66875 9 1.875 9H11.625C11.8313 9 12 9.16875 12 9.375V10.125C12 10.3313 11.8313 10.5 11.625 10.5H0.375C0.16875 10.5 0 10.6687 0 10.875V11.625C0 11.8313 0.16875 12 0.375 12H10.125C10.3313 12 10.5 12.1687 10.5 12.375V13.125C10.5 13.3313 10.3313 13.5 10.125 13.5H3V19.5C3 21.9844 5.01562 24 7.5 24C9.98438 24 12 21.9844 12 19.5H18C18 21.9844 20.0156 24 22.5 24C24.9844 24 27 21.9844 27 19.5H29.25C29.6625 19.5 30 19.1625 30 18.75V17.25C30 16.8375 29.6625 16.5 29.25 16.5ZM7.5 21.75C6.25781 21.75 5.25 20.7422 5.25 19.5C5.25 18.2578 6.25781 17.25 7.5 17.25C8.74219 17.25 9.75 18.2578 9.75 19.5C9.75 20.7422 8.74219 21.75 7.5 21.75ZM22.5 21.75C21.2578 21.75 20.25 20.7422 20.25 19.5C20.25 18.2578 21.2578 17.25 22.5 17.25C23.7422 17.25 24.75 18.2578 24.75 19.5C24.75 20.7422 23.7422 21.75 22.5 21.75ZM26.25 12H19.5V6.75H21.5672L26.25 11.4328V12Z" fill="#1A1A1A"/>
</g>
<defs>
  <clipPath id="clip0_8257_55349">
    <rect width="30" height="24" fill="white"/>
  </clipPath>
</defs>
</svg> Ship to</h3>
          <p className="text-natural-gray">{packages[activeTab].address}</p>
        </div>
        <h1 className='text-natural-black font-medium text-lg mt-4'>Shipping Details:</h1>
       
    <div className="mt-3 p-2 lg:p-4 border border-natural-color xl:w-max rounded-lg">
      {/* Status */}
     
      <p className="text-sm text-gray-600">{date}</p>

      {/* Bottom-to-Top Timeline */}
      <div className="relative flex flex-col mt-2 lg:pl-6">
{timeline.map((step, index) => {
  const activeStep = timeline.length - 1;
  const stepIndex = timeline.length - 1 - index;
  const innerActiveStep=0;
  // Determine line color based on step status
  const lineColor =
    stepIndex === activeStep
      ? "before:bg-gray-400" // Active (Blue)
      : "before:bg-gray-400"; // Completed (Gray) 

  // ✅ Check karna hai ke sirf "Order Shipped" ke liye dikhaye
  const isOrderShipped = step === "Order Shipped"; 

  return (
    <div
      key={stepIndex}
      className={`relative min-h-[60px] flex items-start space-x-3 before:absolute before:left-[9px] before:top-0 before:bottom-0 before:w-0.5 last:before:hidden ${lineColor}`}
    >
      {/* Radio Button Indicator */}
      <input
        type="radio"
        checked={stepIndex === activeStep}
        readOnly
        className={`appearance-none w-5 h-5 rounded-full border-2 cursor-pointer relative mr-1 lg:mr-2
          ${
            stepIndex === activeStep
              ? "bg-white border-[6px] border-[#002882]" // Active (Blue)
              : "bg-white border-[6px] border-gray-400" // Completed (Gray)
          }
        `}
      />

      {/* Timeline Content */}
      <div>
        <p className={`${stepIndex === activeStep? "text-mon-yellow text-xl" : "text-natural-gray"} `}>{step}</p>
        <p className="text-xs text-gray-500">November 8, 2024, 12:45am</p>

        {/* ✅ Sirf jab step "Order Shipped" ho tabhi yeh dikhega */}
        {isOrderShipped && (
        <div className="relative flex items-center justify-between w-full my-2 border border-natural-color rounded-[5px] p-2 lg:p-4">
        {progress.map((step, index) => (
          <div key={index} className="relative w-30 lg:w-35 flex flex-col items-center ">
            {/* Line Between Steps (Only if not the first step) */}
            {index > 0 && (
              <div
                className={`absolute top-1.5 left-[-50%] h-[5px] w-full ${
                  index <= innerActiveStep+1 ? "bg-[#12B76A]" : "bg-gray-300"
                }`}
              ></div>
            )}
      
            {/* Step Indicator */}
            <div
              className={`w-5 h-5 flex items-center justify-center rounded-full border-2 text-white text-sm font-bold z-10 ${
                index <= innerActiveStep
                  ? "bg-white border-[6px] border-[#12B76A]" // Completed Step (Green)
                  : "bg-white border-[6px] border-[#CCC] text-gray-400" // Pending Step (Gray)
              }`}
            ></div>
      
            {/* Step Label */}
            <p
              className={`text-xs text-center mt-2 w-32 ${
                index <= innerActiveStep
                  ? "text-[#12B76A] font-medium"
                  : "text-gray-500"
              }`}
            >
              {step}
            </p>
          </div>
        ))}
      </div>
      

       
        )}
      </div>
    </div>
  );
})}
</div>



    </div>
    
    <div className="w-full max-w-6/10 my-4">
    <button className="flex items-center space-x-2 text-gray-700 mb-4">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M19.938 8.00002H21C21.5304 8.00002 22.0391 8.21074 22.4142 8.58581C22.7893 8.96088 23 9.46959 23 10V14C23 14.5305 22.7893 15.0392 22.4142 15.4142C22.0391 15.7893 21.5304 16 21 16H19.938C19.6944 17.9334 18.7535 19.7114 17.292 21.0003C15.8304 22.2891 13.9487 23.0002 12 23V21C13.5913 21 15.1174 20.3679 16.2426 19.2427C17.3679 18.1174 18 16.5913 18 15V9.00002C18 7.40872 17.3679 5.8826 16.2426 4.75738C15.1174 3.63216 13.5913 3.00002 12 3.00002C10.4087 3.00002 8.88258 3.63216 7.75736 4.75738C6.63214 5.8826 6 7.40872 6 9.00002V16H3C2.46957 16 1.96086 15.7893 1.58579 15.4142C1.21071 15.0392 1 14.5305 1 14V10C1 9.46959 1.21071 8.96088 1.58579 8.58581C1.96086 8.21074 2.46957 8.00002 3 8.00002H4.062C4.30603 6.06692 5.24708 4.2893 6.70857 3.0007C8.17007 1.7121 10.0516 1.0011 12 1.0011C13.9484 1.0011 15.8299 1.7121 17.2914 3.0007C18.7529 4.2893 19.694 6.06692 19.938 8.00002ZM3 10V14H4V10H3ZM20 10V14H21V10H20ZM7.76 15.785L8.82 14.089C9.77303 14.6862 10.8754 15.0019 12 15C13.1246 15.0019 14.227 14.6862 15.18 14.089L16.24 15.785C14.9693 16.5813 13.4996 17.0025 12 17C10.5004 17.0025 9.03067 16.5813 7.76 15.785Z" fill="#1A1A1A"/>
</svg>
      <h2 className="text-base xl:text-lg font-medium text-natural-black flex items-center">ValueBox Customer Service <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M10 8L14 12L10 16" stroke="#1A1A1A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
</svg></h2>
    </button>
    <p className="text-sm xl:text-base text-natural-gray">
      If you have any questions about delivery time or shipping updates, we are here to help.
    </p>
    <div className="border border-natural-color rounded-lg p-3 mt-3">
      
      <div className="flex items-center justify-between mt-2">
      <p className="text-sm font-medium">Shipping updates will be sent to</p>
        <button className="text-sm text-natural-gray hover:underline">Cancel</button>
      </div>
      <div className="flex items-center space-x-2 mt-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M4 6L10.108 10.612L10.11 10.614C10.788 11.111 11.127 11.36 11.499 11.456C11.8276 11.541 12.1724 11.541 12.501 11.456C12.873 11.36 13.213 11.111 13.893 10.612C13.893 10.612 17.81 7.606 20 6M3 15.8V8.2C3 7.08 3 6.52 3.218 6.092C3.41 5.715 3.715 5.41 4.092 5.218C4.52 5 5.08 5 6.2 5H17.8C18.92 5 19.48 5 19.907 5.218C20.284 5.41 20.59 5.715 20.782 6.092C21 6.519 21 7.079 21 8.197V15.804C21 16.922 21 17.48 20.782 17.908C20.59 18.2845 20.2837 18.5904 19.907 18.782C19.48 19 18.921 19 17.803 19H6.197C5.079 19 4.519 19 4.092 18.782C3.71569 18.5903 3.40974 18.2843 3.218 17.908C3 17.48 3 16.92 3 15.8Z" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
          <span className="text-sm text-gray-700">farmanharis66@gmail.com</span>
        </div>
    </div>
    <div className="flex items-center bg-[#FEF6E6] p-3 mt-3">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M21.9961 3.94012L11.9961 0.440125L1.99609 3.94012V12.0001C1.99609 16.1271 4.53009 19.0121 6.89209 20.8031C8.31817 21.8736 9.88231 22.7465 11.5421 23.3981C11.6554 23.4408 11.7694 23.4815 11.8841 23.5201L11.9961 23.5601L12.1101 23.5201C12.3287 23.4442 12.5455 23.3628 12.7601 23.2761C14.3058 22.6393 15.7642 21.8083 17.1001 20.8031C19.4631 19.0121 21.9961 16.1271 21.9961 12.0001V3.94012ZM10.9971 15.4151L6.75609 11.1721L8.17009 9.75712L10.9981 12.5861L16.6551 6.92912L18.0701 8.34312L10.9971 15.4151Z" fill="#12B76A"/>
</svg>
      <p className="text-sm ml-2">ValueBox does not ask customers for additional fees via SMS or email.</p>
      <button className="ml-auto bg-yelow-gradient text-natural-black px-3 py-1 rounded-full text-xs font-medium hover:bg-yellow-500">
        View
      </button>
    </div>
  </div>


    <div className='flex flex-col gap-3 '>
    <h2 className="text-lg font-semibold mb-2">Package Info</h2>
    {packages[activeTab].items.map((item,index)=>(
      <div key={index} className="p-3 bg-natural-0 border border-natural-color rounded-lg ">
    
    <div className="flex space-x-4 ">
      <img src={item.image} alt={item.name} className="w-20 h-20 rounded-lg object-cover" />
      <div className="flex-1 flex flex-col justify-between">
        <div className="flex items-center space-x-2">
          {item.deal&&<span className="bg-gradient-to-r from-[#DC2626] to-[#EA580C]
text-white text-xs 2xl:text-sm px-2 py-1 rounded">{item.deal}</span>}
          
          <p className="text-sm 2xl:text-base font-medium text-natural-black truncate">{item.name}</p>
        </div>
        <div className='flex items-center justify-between'>
        <p className="text-xs text-natural-gray">{item.color}</p>
        <p className="text-sm text-natural-gray">x{item.quantity}</p>
        </div>
        <div className='flex items-center justify-between'>
        <p className="text-xs text-natural-black">By {item.brand}</p>
        <p className="text-base font-semibold text-natural-black">{item.price}</p>
        </div>
        
        
      </div>
     
    </div>
  </div>
    ))}
    </div>

      </div>
    
  </div>
      </div>
  </div>):(<div className='bg-natural-color'>
    <div className="w-full bg-natural-0 p-2 sm:p-4 shadow-lg">
      {/* Search Bar */}
      <div className="flex items-center bg-gray-100px-4 py-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
  <path d="M21 12L15 18L21 24" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        <div className='flex items-center gap-1 border border-natural-black w-full p-1 sm:p-2 rounded-full'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M10.3536 9.64645C10.1583 9.45118 9.84171 9.45118 9.64645 9.64645C9.45118 9.84171 9.45118 10.1583 9.64645 10.3536L10.3536 9.64645ZM13.6464 14.3536C13.8417 14.5488 14.1583 14.5488 14.3536 14.3536C14.5488 14.1583 14.5488 13.8417 14.3536 13.6464L13.6464 14.3536ZM6.66667 10.8333C4.36548 10.8333 2.5 8.96785 2.5 6.66667H1.5C1.5 9.52014 3.8132 11.8333 6.66667 11.8333V10.8333ZM2.5 6.66667C2.5 4.36548 4.36548 2.5 6.66667 2.5V1.5C3.8132 1.5 1.5 3.8132 1.5 6.66667H2.5ZM6.66667 2.5C8.96785 2.5 10.8333 4.36548 10.8333 6.66667H11.8333C11.8333 3.8132 9.52014 1.5 6.66667 1.5V2.5ZM10.8333 6.66667C10.8333 8.96785 8.96785 10.8333 6.66667 10.8333V11.8333C9.52014 11.8333 11.8333 9.52014 11.8333 6.66667H10.8333ZM9.64645 10.3536L13.6464 14.3536L14.3536 13.6464L10.3536 9.64645L9.64645 10.3536Z" fill="#1A1A1A"/>
</svg>
        <input
          type="text"
          placeholder="Order ID, product or store name"
          className="bg-transparent outline-none flex-1 text-sm"
        />

        </div>
      </div>

      {/* Order Status */}
      <div className="flex justify-between items-center mt-4">
        <p className="text-lg font-medium text-natural-black">Order Paid Successfully</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M3.75 12.75V18.75C3.75 19.1478 3.90804 19.5294 4.18934 19.8107C4.47064 20.092 4.85218 20.25 5.25 20.25H18.75C19.1478 20.25 19.5294 20.092 19.8107 19.8107C20.092 19.5294 20.25 19.1478 20.25 18.75V12.75M12 15V2.625M16.5 6.75L12 2.25L7.5 6.75" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      </div>
    </div>

    <p className='mt-3 bg-yelow-gradient px-3 py-1 text-sm sm:text-base'>Estimated Delivery before 12:30 PM</p>
   
    <div className="w-full bg-natural-0 p-2 sm:p-4 ">
      {/* Order Status */}
      <p className="text-sm text-gray-600">
        Order claimed by Leopards rider and will be shipped at your door within 24 hours.
      </p>
      <p className="text-xs text-gray-500 mt-1">Nov 19, 2024, 11:57 am</p>

      {/* Action Buttons */}
      <div className="flex items-center justify-between mt-3 pt-2">
        <button className="flex items-center gap-2 text-sm text-gray-600">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M8.80769 11.5C8.80769 11.6597 8.76032 11.8159 8.67157 11.9487C8.58282 12.0816 8.45668 12.1851 8.30909 12.2462C8.16151 12.3073 7.99911 12.3233 7.84243 12.2922C7.68575 12.261 7.54183 12.1841 7.42888 12.0711C7.31592 11.9582 7.23899 11.8142 7.20783 11.6576C7.17666 11.5009 7.19266 11.3385 7.25379 11.1909C7.31492 11.0433 7.41845 10.9172 7.55127 10.8284C7.6841 10.7397 7.84026 10.6923 8 10.6923C8.21422 10.6923 8.41965 10.7774 8.57113 10.9289C8.7226 11.0803 8.80769 11.2858 8.80769 11.5ZM8 4.23077C6.51519 4.23077 5.30769 5.31779 5.30769 6.65385V6.92308C5.30769 7.06588 5.36443 7.20284 5.46541 7.30383C5.56639 7.40481 5.70335 7.46154 5.84616 7.46154C5.98897 7.46154 6.12592 7.40481 6.22691 7.30383C6.32789 7.20284 6.38462 7.06588 6.38462 6.92308V6.65385C6.38462 5.91346 7.10952 5.30769 8 5.30769C8.89048 5.30769 9.61539 5.91346 9.61539 6.65385C9.61539 7.39423 8.89048 8 8 8C7.85719 8 7.72023 8.05673 7.61925 8.15771C7.51827 8.25869 7.46154 8.39565 7.46154 8.53846V9.07692C7.46154 9.21973 7.51827 9.35669 7.61925 9.45767C7.72023 9.55865 7.85719 9.61538 8 9.61538C8.14281 9.61538 8.27977 9.55865 8.38075 9.45767C8.48173 9.35669 8.53846 9.21973 8.53846 9.07692V9.02846C9.76616 8.80298 10.6923 7.82365 10.6923 6.65385C10.6923 5.31779 9.48481 4.23077 8 4.23077ZM15 8C15 9.38447 14.5895 10.7378 13.8203 11.889C13.0511 13.0401 11.9579 13.9373 10.6788 14.4672C9.3997 14.997 7.99224 15.1356 6.63437 14.8655C5.2765 14.5954 4.02922 13.9287 3.05026 12.9497C2.07129 11.9708 1.4046 10.7235 1.13451 9.36563C0.86441 8.00776 1.00303 6.6003 1.53285 5.32122C2.06266 4.04213 2.95987 2.94888 4.11101 2.17971C5.26216 1.41054 6.61553 1 8 1C9.85592 1.00196 11.6353 1.74009 12.9476 3.05242C14.2599 4.36475 14.998 6.14409 15 8ZM13.9231 8C13.9231 6.82853 13.5757 5.68336 12.9249 4.70931C12.274 3.73527 11.349 2.97609 10.2667 2.52779C9.18436 2.07949 7.99343 1.96219 6.84447 2.19073C5.6955 2.41928 4.64011 2.98339 3.81175 3.81175C2.9834 4.64011 2.41928 5.6955 2.19074 6.84446C1.96219 7.99343 2.07949 9.18436 2.52779 10.2667C2.9761 11.349 3.73527 12.274 4.70932 12.9249C5.68336 13.5757 6.82853 13.9231 8 13.9231C9.57035 13.9213 11.0759 13.2967 12.1863 12.1863C13.2967 11.0759 13.9213 9.57035 13.9231 8Z" fill="#1A1A1A"/>
</svg> Can't find your package?
        </button>
        <span className="h-4 w-px bg-natural-black"></span> {/* Divider */}
        <button className="flex items-center gap-2 text-sm text-gray-600" onClick={() => handleOpen("contactLeopards")}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M8.5 11V7H6.5V8H7.5V11H6V12H10V11H8.5ZM8 4C7.85166 4 7.70666 4.04399 7.58332 4.1264C7.45999 4.20881 7.36386 4.32594 7.30709 4.46299C7.25032 4.60003 7.23547 4.75083 7.26441 4.89632C7.29335 5.0418 7.36478 5.17544 7.46967 5.28033C7.57456 5.38522 7.7082 5.45665 7.85368 5.48559C7.99917 5.51453 8.14997 5.49968 8.28701 5.44291C8.42406 5.38614 8.54119 5.29001 8.6236 5.16668C8.70601 5.04334 8.75 4.89834 8.75 4.75C8.75 4.55109 8.67098 4.36032 8.53033 4.21967C8.38968 4.07902 8.19891 4 8 4Z" fill="#1A1A1A"/>
  <path d="M8 15C6.61553 15 5.26216 14.5895 4.11101 13.8203C2.95987 13.0511 2.06266 11.9579 1.53285 10.6788C1.00303 9.3997 0.86441 7.99224 1.13451 6.63437C1.4046 5.2765 2.07129 4.02922 3.05026 3.05026C4.02922 2.07129 5.2765 1.4046 6.63437 1.13451C7.99224 0.86441 9.3997 1.00303 10.6788 1.53285C11.9579 2.06266 13.0511 2.95987 13.8203 4.11101C14.5895 5.26216 15 6.61553 15 8C15 9.85652 14.2625 11.637 12.9497 12.9497C11.637 14.2625 9.85652 15 8 15ZM8 2C6.81332 2 5.65328 2.3519 4.66658 3.01119C3.67989 3.67047 2.91085 4.60755 2.45673 5.7039C2.0026 6.80026 1.88378 8.00666 2.11529 9.17054C2.3468 10.3344 2.91825 11.4035 3.75736 12.2426C4.59648 13.0818 5.66558 13.6532 6.82946 13.8847C7.99335 14.1162 9.19975 13.9974 10.2961 13.5433C11.3925 13.0892 12.3295 12.3201 12.9888 11.3334C13.6481 10.3467 14 9.18669 14 8C14 6.4087 13.3679 4.88258 12.2426 3.75736C11.1174 2.63214 9.5913 2 8 2Z" fill="#1A1A1A"/>
</svg> Contact Leopards
        </button>

      </div>
    </div>
    

      {openPopup==='contactLeopards' && (
        <div
          className={`fixed inset-0 z-1050 bg-[rgba(0,0,0,0.3)]  bg-opacity-50
            flex items-end justify-center transition-opacity duration-300 ${
            isAnimating ? "opacity-100" : "opacity-0"
          }`}
          onClick={handleClose}
        >
          {/* Popup Content */}
           <div
            className={`w-full px-4 pt-3 bg-white rounded-t-2xl shadow-lg transform transition-transform duration-300 ${
              isAnimating ? "translate-y-0" : "translate-y-full"
            }`}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            
          >
            <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-bold text-center">contact Leopards</h2>
            <button
              onClick={handleClose}
              className=" text-white rounded-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path d="M15 0C6.64286 0 0 6.64286 0 15C0 23.3571 6.64286 30 15 30C23.3571 30 30 23.3571 30 15C30 6.64286 23.3571 0 15 0ZM20.7857 22.5L15 16.7143L9.21429 22.5L7.5 20.7857L13.2857 15L7.5 9.21429L9.21429 7.5L15 13.2857L20.7857 7.5L22.5 9.21429L16.7143 15L22.5 20.7857L20.7857 22.5Z" fill="#002882"/>
              </svg>
            </button>
            </div>
            <div className="p-4 space-y-4">
      {/* Tracking Number */}
      <div className="flex items-center justify-between text-gray-700 text-sm">
        <span>Tracking Number: <span className="font-bold text-black">{trackingNumber}</span></span>
        <button 
          onClick={handleCopy} 
          className="flex items-center space-x-1 border border-natural-black px-2 py-1 text-xs rounded-full hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
  <path d="M4 2V8C4 8.26522 4.10536 8.51957 4.29289 8.70711C4.48043 8.89464 4.73478 9 5 9H9C9.26522 9 9.51957 8.89464 9.70711 8.70711C9.89464 8.51957 10 8.26522 10 8V3.621C9.99998 3.48778 9.97335 3.35591 9.92166 3.23312C9.86997 3.11034 9.79427 2.99912 9.699 2.906L8.0415 1.285C7.85468 1.10233 7.60379 1.00003 7.3425 1H5C4.73478 1 4.48043 1.10536 4.29289 1.29289C4.10536 1.48043 4 1.73478 4 2Z" stroke="#EEA500" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8 9V10C8 10.2652 7.89464 10.5196 7.70711 10.7071C7.51957 10.8946 7.26522 11 7 11H3C2.73478 11 2.48043 10.8946 2.29289 10.7071C2.10536 10.5196 2 10.2652 2 10V4.5C2 4.23478 2.10536 3.98043 2.29289 3.79289C2.48043 3.60536 2.73478 3.5 3 3.5H4" stroke="#EEA500" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          <span className="text-gray-600">{copied ? "Copied" : "Copy"}</span>
        </button>
      </div>

      {/* View Details Button */}
      <button className="w-full border border-natural-black rounded-lg py-2 text-black font-medium hover:bg-gray-100">
        View details on Leopards
      </button>

      {/* Phone Number */}
      <button className="w-full border border-natural-black rounded-lg py-2 flex items-center justify-center space-x-2 text-black font-medium hover:bg-gray-100">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M16.6654 13.3335V16.6668C14.367 16.6668 12.4404 16.2543 10.832 15.5627C7.6312 14.186 5.68536 11.7043 4.58203 9.16683C3.66536 7.06016 3.33203 4.91516 3.33203 3.3335H6.66536L7.4987 6.66683L4.58203 9.16683C5.68536 11.7043 7.6312 14.186 10.832 15.5627L13.332 12.5002L16.6654 13.3335Z" fill="#1A1A1A"/>
  <path d="M10.832 15.5627C12.4404 16.2543 14.367 16.6668 16.6654 16.6668V13.3335L13.332 12.5002L10.832 15.5627ZM10.832 15.5627C7.6312 14.186 5.68536 11.7043 4.58203 9.16683M4.58203 9.16683C3.66536 7.06016 3.33203 4.91516 3.33203 3.3335H6.66536L7.4987 6.66683L4.58203 9.16683Z" stroke="#1A1A1A" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        <span>{phoneNumber}</span>
      </button>

      {/* Hours of Operation */}
      <div className="text-sm text-gray-600">
        <p className="font-semibold">Hours of operation</p>
        <p>Monday - Saturday: 9:00AM - 06:00PM</p>
      </div>
    </div>
    
          </div>
        </div>
      )}
    <div className="bg-natural-0 mt-3 p-4">
      {/* Shipping Address */}
      <div className="flex items-start gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
  <g clip-path="url(#clip0_7864_38341)">
    <path d="M19.5 11H19V7.62187C19 7.225 18.8406 6.84375 18.5594 6.5625L15.4375 3.44062C15.1562 3.15937 14.775 3 14.3781 3H13V1.5C13 0.671875 12.3281 0 11.5 0H3.5C2.67188 0 2 0.671875 2 1.5V3H0.25C0.1125 3 0 3.1125 0 3.25V3.75C0 3.8875 0.1125 4 0.25 4H8.75C8.8875 4 9 4.1125 9 4.25V4.75C9 4.8875 8.8875 5 8.75 5H1.25C1.1125 5 1 5.1125 1 5.25V5.75C1 5.8875 1.1125 6 1.25 6H7.75C7.8875 6 8 6.1125 8 6.25V6.75C8 6.8875 7.8875 7 7.75 7H0.25C0.1125 7 0 7.1125 0 7.25V7.75C0 7.8875 0.1125 8 0.25 8H6.75C6.8875 8 7 8.1125 7 8.25V8.75C7 8.8875 6.8875 9 6.75 9H2V13C2 14.6562 3.34375 16 5 16C6.65625 16 8 14.6562 8 13H12C12 14.6562 13.3438 16 15 16C16.6562 16 18 14.6562 18 13H19.5C19.775 13 20 12.775 20 12.5V11.5C20 11.225 19.775 11 19.5 11ZM5 14.5C4.17188 14.5 3.5 13.8281 3.5 13C3.5 12.1719 4.17188 11.5 5 11.5C5.82812 11.5 6.5 12.1719 6.5 13C6.5 13.8281 5.82812 14.5 5 14.5ZM15 14.5C14.1719 14.5 13.5 13.8281 13.5 13C13.5 12.1719 14.1719 11.5 15 11.5C15.8281 11.5 16.5 12.1719 16.5 13C16.5 13.8281 15.8281 14.5 15 14.5ZM17.5 8H13V4.5H14.3781L17.5 7.62187V8Z" fill="#1A1A1A"/>
  </g>
  <defs>
    <clipPath id="clip0_7864_38341">
      <rect width="20" height="16" fill="white"/>
    </clipPath>
  </defs>
</svg>
        <div>
          <p className="text-sm font-semibold">Ship to</p>
          <p className="text-sm text-gray-600">{packages.address}</p>
        </div>
      </div>

      {/* Tracking Number */}
      <div className="flex border-y justify-between items-center p-2 mt-3 border-natural-color">
        <span className="flex items-center gap-2 text-sm font-semibold text-gray-800">
          <p className='border border-natural-gray-20 p-1 rounded-[3px] '><img className='w-8 h-5' src="data:image/png;base64,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" alt="" /></p>
          {packages[0].trackingNumber}
        </span>
        <button className="text-sm text-mon-yellow">Contact ›</button>
      </div>

      {/* Shipment Status */}
      <div className='flex gap-2  relative before:absolute before:left-[7px] before:top-0 before:bottom-0 before:w-px last:before:hidden before:bg-[#CCC]'>
      <input
        type="radio"
        checked='true'
        readOnly
        className={`appearance-none w-4 h-4 rounded-full border-[5px] bg-white cursor-pointer relative border-mon-yellow `}
      />
      
      <div className="">
        <p className="text-sm font-semibold"> {packages[0].shippingDetails.status}</p>
        <p className="text-sm text-gray-600">{packages[0].address}</p>
        <p className="text-xs text-gray-500 mt-1">{packages[0].shippingDetails.date}</p>
      </div>
      </div>
      
      <button className="mt-2 text-sm mx-auto flex items-center" onClick={() => handleOpen("viewMore")}>
        View More
         <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
  <path d="M13.8327 8.33337L10.4993 11.6667L7.16602 8.33337" stroke="#1A1A1A" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      </button>

      {openPopup==='viewMore' && (
        <div
          className={`fixed inset-0 z-1050 bg-[rgba(0,0,0,0.3)]  bg-opacity-50
            flex items-end justify-center transition-opacity duration-300 ${
            isAnimating ? "opacity-100" : "opacity-0"
          }`}
          onClick={handleClose}
        >
          {/* Popup Content */}
           <div
            className={`w-full px-4 pt-3 bg-white rounded-t-2xl shadow-lg transform transition-transform duration-300 ${
              isAnimating ? "translate-y-0" : "translate-y-full"
            }`}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            
          >
            <div className="flex justify-between items-center mb-2">
            <h2 className="text-2xl font-bold text-center">Tracking Status</h2>
            <button
              onClick={handleClose}
              className=" text-white rounded-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path d="M15 0C6.64286 0 0 6.64286 0 15C0 23.3571 6.64286 30 15 30C23.3571 30 30 23.3571 30 15C30 6.64286 23.3571 0 15 0ZM20.7857 22.5L15 16.7143L9.21429 22.5L7.5 20.7857L13.2857 15L7.5 9.21429L9.21429 7.5L15 13.2857L20.7857 7.5L22.5 9.21429L16.7143 15L22.5 20.7857L20.7857 22.5Z" fill="#002882"/>
              </svg>
            </button>
            </div>
           <div className="w-full">
           <div className="relative flex flex-col mt-2 lg:pl-6">
{timeline.map((step, index) => {
  const activeStep = timeline.length - 1;
  const stepIndex = timeline.length - 1 - index;
  const innerActiveStep=0; 

  // ✅ Check karna hai ke sirf "Order Shipped" ke liye dikhaye
  const isOrderShipped = step === "Order Shipped"; 

  return (
    <div
      key={stepIndex}
      className={`relative min-h-[60px] flex items-start space-x-3 before:absolute before:left-[7px] before:top-0 before:bottom-0 before:w-px last:before:hidden before:bg-[#CCC]`}
    >
      {/* Radio Button Indicator */}
      <input
        type="radio"
        checked={stepIndex === activeStep}
        readOnly
        className={`appearance-none w-4 h-4 rounded-full border-2 cursor-pointer relative
          ${
            stepIndex === activeStep
              ? "bg-white border-[4px] border-[#002882]" // Active (Blue)
              : "bg-white border-[4px] border-gray-400" // Completed (Gray)
          }
        `}
      />

      {/* Timeline Content */}
      <div className='w-full'>
        <p className={`${stepIndex === activeStep? "text-mon-yellow text-xl" : "text-natural-gray"} `}>{step}</p>
        <p className="text-xs text-gray-500">November 8, 2024, 12:45am</p>

        {/* ✅ Sirf jab step "Order Shipped" ho tabhi yeh dikhega */}
        {isOrderShipped && (
        <div className="relative w-full items-center justify-between my-2 border border-natural-color rounded-[5px] p-2 lg:p-4">
        {progress.map((step, index) => (
          <div key={index} className="relative flex flex-col  w-full">
            {/* Line Between Steps (Only if not the first step) */}
            {index !== progress.length - 1 && (
              <div
                className={`absolute left-[8px] to-0 h-full w-[1px] ${
                  index <= innerActiveStep+1 ? "bg-natural-gray-20" : "bg-natural-gray-20"
                }`}
              ></div>
            )}
      
            <div className='flex gap-1'>
              {/* Step Indicator */}
            <div
              className={`w-4 h-4 flex items-center justify-center rounded-full border-2 text-white text-sm font-bold z-10 ${
                index <= innerActiveStep
                  ? "bg-white border-[4px] border-[#12B76A]" // Completed Step (Green)
                  : "bg-white border-[4px] border-[#CCC] text-gray-400" // Pending Step (Gray)
              }`}
            ></div>
      
            {/* Step Label */}
            <p className={`text-xs text-center mt-2 w-32 text-natural-black `}>
              {step}
            </p>
            </div>
          </div>
        ))}
      </div>
      

       
        )}
      </div>
    </div>
  );
})}
</div>

          </div>
    
          </div>
        </div>
      )}
    </div>

    <div className="bg-natural-0 mt-3 p-4">
    
      {/* Header */}
      <div className="flex text-natural-black justify-between items-center px-2 pb-3">
        <h2 className="font-semibold">Package Info</h2>
        <button className=" flex items-center gap-1">
          Order Details <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M10 8L14 12L10 16" stroke="#1A1A1A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </button>
      </div>

      {/* Images Row */}
      
      {expanded ? (
        <>
        {packages[activeTab].items.map((item,index)=>(
          <div key={index} className="bg-natural-0 pb-2 border-b border-natural-color rounded-lg ">
        
        <div className="flex gap-2 ">
          <img src={item.image} alt={item.name} className="w-15 h-15 rounded-lg object-cover m-0" />
          <div className="flex-1 min-w-0 flex flex-col justify-between">
            <div className="flex items-center space-x-2">
              {item.deal&&<span className="bg-gradient-to-r from-[#DC2626] to-[#EA580C] whitespace-nowrap
    text-white text-[10px] px-2 py-1 rounded">{item.deal}</span>}
              
              <p className="text-sm 2xl:text-base font-medium text-natural-black truncate">{item.name}</p>
            </div>
            <div className='flex items-center justify-between'>
            <p className="text-xs text-natural-gray">{item.color}</p>
            <p className="text-sm text-natural-gray">x{item.quantity}</p>
            </div>
            <div className='flex items-center justify-between'>
            <p className="text-xs text-natural-black">By {item.brand}</p>
            <p className="text-base font-semibold text-natural-black">{item.price}</p>
            </div>
            
            
          </div>
         
        </div>
      </div>
        ))}
        </>
      ):(<div className="flex gap-2 mt-3 overflow-x-auto scrollbar-hidden">
        {packages[activeTab].items.map((item, index) => (
          <img key={index} src={item.image} alt="Product" className="w-16 h-16 rounded-md" />
        ))}
      </div>)}

      {/* Show More Button */}
      <button
        className="flex items-center mx-auto mt-3 text-gray-600"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ?'Show Less':'Show more'} <svg className={`transition-all duration-500 ${expanded?'rotate-180':''}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M16 10L12 14L8 10" stroke="#1A1A1A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      </button>

    </div>

    <div className="bg-natural-0 mt-3 p-4">
    <button className="flex items-center space-x-2 text-gray-700 mb-4">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M19.938 8.00002H21C21.5304 8.00002 22.0391 8.21074 22.4142 8.58581C22.7893 8.96088 23 9.46959 23 10V14C23 14.5305 22.7893 15.0392 22.4142 15.4142C22.0391 15.7893 21.5304 16 21 16H19.938C19.6944 17.9334 18.7535 19.7114 17.292 21.0003C15.8304 22.2891 13.9487 23.0002 12 23V21C13.5913 21 15.1174 20.3679 16.2426 19.2427C17.3679 18.1174 18 16.5913 18 15V9.00002C18 7.40872 17.3679 5.8826 16.2426 4.75738C15.1174 3.63216 13.5913 3.00002 12 3.00002C10.4087 3.00002 8.88258 3.63216 7.75736 4.75738C6.63214 5.8826 6 7.40872 6 9.00002V16H3C2.46957 16 1.96086 15.7893 1.58579 15.4142C1.21071 15.0392 1 14.5305 1 14V10C1 9.46959 1.21071 8.96088 1.58579 8.58581C1.96086 8.21074 2.46957 8.00002 3 8.00002H4.062C4.30603 6.06692 5.24708 4.2893 6.70857 3.0007C8.17007 1.7121 10.0516 1.0011 12 1.0011C13.9484 1.0011 15.8299 1.7121 17.2914 3.0007C18.7529 4.2893 19.694 6.06692 19.938 8.00002ZM3 10V14H4V10H3ZM20 10V14H21V10H20ZM7.76 15.785L8.82 14.089C9.77303 14.6862 10.8754 15.0019 12 15C13.1246 15.0019 14.227 14.6862 15.18 14.089L16.24 15.785C14.9693 16.5813 13.4996 17.0025 12 17C10.5004 17.0025 9.03067 16.5813 7.76 15.785Z" fill="#1A1A1A"/>
</svg>
      <h2 className="text-base xl:text-lg font-medium text-natural-black flex items-center">ValueBox Customer Service <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M10 8L14 12L10 16" stroke="#1A1A1A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
</svg></h2>
    </button>
    <p className="text-sm xl:text-base text-natural-gray">
      If you have any questions about delivery time or shipping updates, we are here to help.
    </p>
    <div className="border border-natural-color rounded-lg p-3 mt-3">
      
      <div className="flex items-center justify-between mt-2">
      <p className="text-sm font-medium">Shipping updates will be sent to</p>
        <button className="text-sm text-natural-gray hover:underline">Cancel</button>
      </div>
      <div className="flex items-center space-x-2 mt-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M4 6L10.108 10.612L10.11 10.614C10.788 11.111 11.127 11.36 11.499 11.456C11.8276 11.541 12.1724 11.541 12.501 11.456C12.873 11.36 13.213 11.111 13.893 10.612C13.893 10.612 17.81 7.606 20 6M3 15.8V8.2C3 7.08 3 6.52 3.218 6.092C3.41 5.715 3.715 5.41 4.092 5.218C4.52 5 5.08 5 6.2 5H17.8C18.92 5 19.48 5 19.907 5.218C20.284 5.41 20.59 5.715 20.782 6.092C21 6.519 21 7.079 21 8.197V15.804C21 16.922 21 17.48 20.782 17.908C20.59 18.2845 20.2837 18.5904 19.907 18.782C19.48 19 18.921 19 17.803 19H6.197C5.079 19 4.519 19 4.092 18.782C3.71569 18.5903 3.40974 18.2843 3.218 17.908C3 17.48 3 16.92 3 15.8Z" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
          <span className="text-sm text-gray-700">farmanharis66@gmail.com</span>
        </div>
    </div>
    <div className="flex items-center bg-[#FEF6E6] p-3 mt-3">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M21.9961 3.94012L11.9961 0.440125L1.99609 3.94012V12.0001C1.99609 16.1271 4.53009 19.0121 6.89209 20.8031C8.31817 21.8736 9.88231 22.7465 11.5421 23.3981C11.6554 23.4408 11.7694 23.4815 11.8841 23.5201L11.9961 23.5601L12.1101 23.5201C12.3287 23.4442 12.5455 23.3628 12.7601 23.2761C14.3058 22.6393 15.7642 21.8083 17.1001 20.8031C19.4631 19.0121 21.9961 16.1271 21.9961 12.0001V3.94012ZM10.9971 15.4151L6.75609 11.1721L8.17009 9.75712L10.9981 12.5861L16.6551 6.92912L18.0701 8.34312L10.9971 15.4151Z" fill="#12B76A"/>
</svg>
      <p className="text-sm ml-2">ValueBox does not ask customers for additional fees via SMS or email.</p>
      <button className="ml-auto bg-yelow-gradient text-natural-black px-3 py-1 rounded-full text-xs font-medium hover:bg-yellow-500">
        View
      </button>
    </div>
  </div>
  </div>)}

  <div className='mt-3 bg-natural-0 pt-2'>
    <h1 className='text-center font-semibold mb-3 xl:text-2xl'>More To Love</h1>
    <MoreToLove/>
  </div>
  </>
  )
}

export default PackageDetail