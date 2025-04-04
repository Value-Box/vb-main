import React, { useState } from 'react'
import AccountSideBar from '../Components/AccountSideBar'
import Input from '../Components/Input';

const sections = [
    {
      title: "Promotions",
      description: "Be the first to know about sales, daily deals, and special discounts just for you!",
      status: "On: Email | Off: SMS",
    },
    {
      title: "Order updates",
      description: "Get quick updates about your order confirmation and delivery status.",
      status: "On: Email, SMS",
    },
    {
      title: "Customers' activity",
      description: "Stay updated on the newest shopping trends.",
      status: "On: Showing others shopping activities",
    },
    {
      title: "Avatar and username sharing",
      description: "Share your profile avatar and username with other users when adding items to your cart, making a purchase, or joining a promotion or event.",
      status: "On: Share",
    },
  ];

export default function Notification() {
    const [smsNotifiNumber,setSmsNotifiNumber]=useState('')
        const [activeModal, setActiveModal] = useState(null);
        const openModal = (modalName) => setActiveModal(modalName);
        const closeModal = () => setActiveModal(null);

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

    const [smsEnabled, setSmsEnabled] = useState(false);
    const [emailEnabled, setEmailEnabled] = useState(false);
    const [customerActivity, setCustomerActivity] = useState(false);
    const [userInfoSharing, setUserInfoSharing] = useState(false);

  return (
    <div className='sm:flex mx-auto justify-center gap-2 sm:gap-4 sm:p-6 bg-[#F2F2F2] sm:bg-[#FCFCFC]'>
            <div className='hidden md:block'><AccountSideBar/></div>
        <div className='flex flex-col-reverse sm:flex-col xl:flex-row gap-4 items-start'>
        <div className="w-full p-4 sm:border border-[#F2F2F2] sm:rounded-[10px] bg-white">
      {/* Notification Banner */}
      <div className="mb-4 p-4 flex items-center justify-between bg-[#FEF6E6] rounded-[10px] border border-gray-200">
        <div className="flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M22 3.94019L12 0.440186L2 3.94019V12.0002C2 16.1272 4.534 19.0122 6.896 20.8032C8.32208 21.8736 9.88622 22.7465 11.546 23.3982C11.6593 23.4409 11.7733 23.4815 11.888 23.5202L12 23.5602L12.114 23.5202C12.3326 23.4442 12.5494 23.3629 12.764 23.2762C14.3097 22.6393 15.7681 21.8083 17.104 20.8032C19.467 19.0122 22 16.1272 22 12.0002V3.94019ZM11.001 15.4152L6.76 11.1722L8.174 9.75719L11.002 12.5862L16.659 6.92919L18.074 8.34319L11.001 15.4152Z" fill="#12B76A"/>
</svg>
          <span className="text-sm font-medium">
            ValueBox does not ask customer for additional fee via SMS or email
          </span>
        </div>
        <button className="bg-yelow-gradient text-natural-black px-4 py-1 rounded-lg text-sm">View</button>
      </div>

      {/* Settings Sections */}
      {sections.map((section, index) => (
        <div key={index} className="mb-4 p-4 border-b border-natural-color">
          <h3 className="sm:text-lg font-semibold">{section.title}</h3>
          <p className="text-sm text-natural-gray">{section.description}</p>
          <div className='flex items-center justify-between'>
          <p className="text-sm mt-2">{section.status}</p>
          <button className="hidden sm:block mt-2 float-right border border-natural-black px-5 py-1 rounded-full 
          text-sm" onClick={()=>openModal(section.title)}>
            Edit
          </button>
          <button className="block sm:hidden mt-2 float-right border border-natural-black px-5 py-1 rounded-full 
          text-sm" onClick={() => handleOpen(section.title)}>
            Edit
          </button>
          </div>
        </div>
      ))}

      {activeModal === "Order updates" && (
                   <div
                     className="fixed inset-0 bg-[#00000042] bg-opacity-50 flex justify-center p-3 items-center"
                     onClick={closeModal} // Click outside to close modal
                   >
                     <div className="relative bg-natural-0 p-3 sm:p-6 rounded-[10px] sm:rounded-[15px] shadow-lg " onClick={(e) => e.stopPropagation()}>
                     <button
                         className="absolute -top-3 -right-3 bg-white rounded-full"
                         onClick={closeModal} // Close button inside modal
                       >
                         <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
             <path d="M15 0C6.64286 0 0 6.64286 0 15C0 23.3571 6.64286 30 15 30C23.3571 30 30 23.3571 30 15C30 6.64286 23.3571 0 15 0ZM20.7857 22.5L15 16.7143L9.21429 22.5L7.5 20.7857L13.2857 15L7.5 9.21429L9.21429 7.5L15 13.2857L20.7857 7.5L22.5 9.21429L16.7143 15L22.5 20.7857L20.7857 22.5Z" fill="#002882"/>
           </svg>
                       </button>
           
                       
      <div className=" rounded-2xl  max-w-[600px]">
      <div className="max-w-md mx-auto">
      <h3 className="text-lg font-semibold">Order updates</h3>
      <p className="text-sm text-natural-gray">
        Receive notifications about order confirmations and shipment updates.
      </p>

      {/* SMS Section */}
      <div className="flex items-center justify-between mt-4">
        <div>
          <p className="text-sm font-medium">SMS</p>
          <p className="text-xs text-natural-gray">
            Seems you don’t have a phone number in your account,
            <a href="#" className="text-mon-yellow ml-1 flex items-center gap-1">
              add a phone number to get notified <svg xmlns="http://www.w3.org/2000/svg" width="8" height="16" viewBox="0 0 8 16" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.76869 8.4745L2.99735 12.2458L2.05469 11.3032L5.35469 8.00316L2.05469 4.70316L2.99735 3.7605L6.76869 7.53183C6.89367 7.65685 6.96388 7.82639 6.96388 8.00317C6.96388 8.17994 6.89367 8.34948 6.76869 8.4745Z" fill="#EEA500"/>
</svg>
            </a>
          </p>
        </div>
        <label className="relative inline-flex items-center cursor-pointer pl-2">
          <button
        onClick={() => setSmsEnabled(!smsEnabled)}
        className={`relative w-12 h-6 rounded-full transition-colors duration-300 
        ${smsEnabled ? "bg-dark-blue" : "border-gray-300 border"}`}
      >
        <span
          className={`absolute left-1 top-1 w-4 h-4 rounded-full shadow-md transition-transform duration-300 
          ${smsEnabled ? "translate-x-6 bg-white" : "translate-x-0 bg-natural-gray"}`}
        ></span>
      </button>
        </label>
      </div>

      {/* Email Section */}
      <div className="flex items-center justify-between mt-4">
        <div>
          <p className="text-sm font-medium">Email</p>
          <p className="text-xs text-natural-black">muhammadarshad799@gmail.com</p>
          <p className="text-xs text-natural-gray">
            If you didn’t receive the email, please check your promotions or
            spam folder.
          </p>
        </div>
        <label className="relative inline-flex items-center cursor-pointer pl-2">
          
          <button
        onClick={() => setEmailEnabled(!emailEnabled)}
        className={`relative w-12 h-6 rounded-full transition-colors duration-300 
        ${emailEnabled ? "bg-dark-blue" : "border-gray-300 border"}`}
      >
        <span
          className={`absolute left-1 top-1 w-4 h-4  rounded-full shadow-md transition-transform duration-300 
          ${emailEnabled ? "translate-x-6 bg-white" : "translate-x-0 bg-natural-gray"}`}
        ></span>
      </button>
        </label>
      </div>
    </div>
      </div>
   
                
               </div>
                       
                     
                   </div>
                 )}
                 {openPopup==='Order updates' && (
        <div
          className={`fixed inset-0 z-1050 bg-[rgba(0,0,0,0.3)]  bg-opacity-50
            flex items-end justify-center transition-opacity duration-300 ${
            isAnimating ? "opacity-100" : "opacity-0"
          }`}
          onClick={handleClose}
        >
          {/* Popup Content */}
          
          <div
            className={`w-full p-4 bg-white rounded-t-2xl shadow-lg transform transition-transform duration-300 ${
              isAnimating ? "translate-y-0" : "translate-y-full"
            }`}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            
          >
            <div className="flex justify-between items-center mb-3">
            <h2 className="text-2xl font-bold text-center">Order updates</h2>
            <button
              onClick={handleClose}
              className=" text-white rounded-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <path d="M15 0C6.64286 0 0 6.64286 0 15C0 23.3571 6.64286 30 15 30C23.3571 30 30 23.3571 30 15C30 6.64286 23.3571 0 15 0ZM20.7857 22.5L15 16.7143L9.21429 22.5L7.5 20.7857L13.2857 15L7.5 9.21429L9.21429 7.5L15 13.2857L20.7857 7.5L22.5 9.21429L16.7143 15L22.5 20.7857L20.7857 22.5Z" fill="#002882"/>
</svg>
            </button>
    </div>
    <div className="">
      
      <p className="text-sm text-natural-gray">
        Receive notifications about order confirmations and shipment updates.
      </p>

      {/* SMS Section */}
      <div className="flex items-center justify-between mt-4">
        <div>
          <p className="text-sm font-medium">SMS</p>
          <p className="text-xs text-natural-gray">
            Seems you don’t have a phone number in your account,
            <a href="#" className="text-mon-yellow ml-1 flex items-center gap-1">
              add a phone number to get notified <svg xmlns="http://www.w3.org/2000/svg" width="8" height="16" viewBox="0 0 8 16" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.76869 8.4745L2.99735 12.2458L2.05469 11.3032L5.35469 8.00316L2.05469 4.70316L2.99735 3.7605L6.76869 7.53183C6.89367 7.65685 6.96388 7.82639 6.96388 8.00317C6.96388 8.17994 6.89367 8.34948 6.76869 8.4745Z" fill="#EEA500"/>
</svg>
            </a>
          </p>
        </div>
        <label className="relative inline-flex items-center cursor-pointer pl-2">
          <button
        onClick={() => setSmsEnabled(!smsEnabled)}
        className={`relative w-12 h-6 rounded-full transition-colors duration-300 
        ${smsEnabled ? "bg-dark-blue" : "border-gray-300 border"}`}
      >
        <span
          className={`absolute left-1 top-1 w-4 h-4 rounded-full shadow-md transition-transform duration-300 
          ${smsEnabled ? "translate-x-6 bg-white" : "translate-x-0 bg-natural-gray"}`}
        ></span>
      </button>
        </label>
      </div>

      {/* Email Section */}
      <div className="flex items-center justify-between mt-4">
        <div>
          <p className="text-sm font-medium">Email</p>
          <p className="text-xs text-natural-black">muhammadarshad799@gmail.com</p>
          <p className="text-xs text-natural-gray">
            If you didn’t receive the email, please check your promotions or
            spam folder.
          </p>
        </div>
        <label className="relative inline-flex items-center cursor-pointer pl-2">
          
          <button
        onClick={() => setEmailEnabled(!emailEnabled)}
        className={`relative w-12 h-6 rounded-full transition-colors duration-300 
        ${emailEnabled ? "bg-dark-blue" : "border-gray-300 border"}`}
      >
        <span
          className={`absolute left-1 top-1 w-4 h-4  rounded-full shadow-md transition-transform duration-300 
          ${emailEnabled ? "translate-x-6 bg-white" : "translate-x-0 bg-natural-gray"}`}
        ></span>
      </button>
        </label>
      </div>
    </div>
    
          </div>
        </div>
      )}

      {activeModal === "Customers' activity" && (
                   <div
                     className="fixed inset-0 bg-[#00000042] bg-opacity-50 flex justify-center p-3 items-center"
                     onClick={closeModal} // Click outside to close modal
                   >
                     <div className="relative bg-natural-0 p-3 sm:p-6 rounded-[10px] sm:rounded-[15px] shadow-lg " onClick={(e) => e.stopPropagation()}>
                     <button
                         className="absolute -top-3 -right-3 bg-white rounded-full"
                         onClick={closeModal} // Close button inside modal
                       >
                         <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
             <path d="M15 0C6.64286 0 0 6.64286 0 15C0 23.3571 6.64286 30 15 30C23.3571 30 30 23.3571 30 15C30 6.64286 23.3571 0 15 0ZM20.7857 22.5L15 16.7143L9.21429 22.5L7.5 20.7857L13.2857 15L7.5 9.21429L9.21429 7.5L15 13.2857L20.7857 7.5L22.5 9.21429L16.7143 15L22.5 20.7857L20.7857 22.5Z" fill="#002882"/>
           </svg>
                       </button>
           
                       
      <div className=" rounded-2xl min-w-[350px] max-w-[600px]">
      <div className="max-w-md mx-auto">
      <h3 className="text-lg font-semibold">Customers' activity</h3>
      <p className="text-sm text-natural-gray">
      Keep up with the latest shopping trends.
      </p>

      {/* SMS Section */}
      <div className="flex items-center justify-between mt-4">
        <div>
          <p className="text-sm font-medium">Customers' activity</p>
          <p className="text-xs text-natural-gray">
          Showing others' shopping activities.
          </p>
        </div>
        <label className="relative inline-flex items-center cursor-pointer pl-2">
          <button
        onClick={() => setCustomerActivity(!customerActivity)}
        className={`relative w-12 h-6 rounded-full transition-colors duration-300 
        ${customerActivity ? "bg-dark-blue" : "border-gray-300 border"}`}
      >
        <span
          className={`absolute left-1 top-1 w-4 h-4 rounded-full shadow-md transition-transform duration-300 
          ${customerActivity ? "translate-x-6 bg-white" : "translate-x-0 bg-natural-gray"}`}
        ></span>
      </button>
        </label>
      </div>

    </div>
      </div>
   
                
               </div>
                       
                     
                   </div>
                 )}

{openPopup==="Customers' activity" && (
        <div
          className={`fixed inset-0 z-1050 bg-[rgba(0,0,0,0.3)]  bg-opacity-50
            flex items-end justify-center transition-opacity duration-300 ${
            isAnimating ? "opacity-100" : "opacity-0"
          }`}
          onClick={handleClose}
        >
          {/* Popup Content */}
          
          <div
            className={`w-full p-4 bg-white rounded-t-2xl shadow-lg transform transition-transform duration-300 ${
              isAnimating ? "translate-y-0" : "translate-y-full"
            }`}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            
          >
            <div className="flex justify-between items-center mb-3">
            <h2 className="text-2xl font-bold text-center">Customers' activity</h2>
            <button
              onClick={handleClose}
              className=" text-white rounded-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <path d="M15 0C6.64286 0 0 6.64286 0 15C0 23.3571 6.64286 30 15 30C23.3571 30 30 23.3571 30 15C30 6.64286 23.3571 0 15 0ZM20.7857 22.5L15 16.7143L9.21429 22.5L7.5 20.7857L13.2857 15L7.5 9.21429L9.21429 7.5L15 13.2857L20.7857 7.5L22.5 9.21429L16.7143 15L22.5 20.7857L20.7857 22.5Z" fill="#002882"/>
</svg>
            </button>
    </div>
    <div className="">
      
      <p className="text-sm text-natural-gray">
      Keep up with the latest shopping trends.
      </p>

      {/* SMS Section */}
      <div className="flex items-center justify-between mt-4">
        <div>
          <p className="text-sm font-medium">Customers' activity</p>
          <p className="text-xs text-natural-gray">
          Showing others' shopping activities.
          </p>
        </div>
        <label className="relative inline-flex items-center cursor-pointer pl-2">
          <button
        onClick={() => setCustomerActivity(!customerActivity)}
        className={`relative w-12 h-6 rounded-full transition-colors duration-300 
        ${customerActivity ? "bg-dark-blue" : "border-gray-300 border"}`}
      >
        <span
          className={`absolute left-1 top-1 w-4 h-4 rounded-full shadow-md transition-transform duration-300 
          ${customerActivity ? "translate-x-6 bg-white" : "translate-x-0 bg-natural-gray"}`}
        ></span>
      </button>
        </label>
      </div>

    </div>
    
          </div>
        </div>
      )}

      {activeModal === "Avatar and username sharing" && (
                   <div
                     className="fixed inset-0 bg-[#00000042] bg-opacity-50 flex justify-center p-3 items-center"
                     onClick={closeModal} // Click outside to close modal
                   >
                     <div className="relative bg-natural-0 p-3 sm:p-6 rounded-[10px] sm:rounded-[15px] shadow-lg " onClick={(e) => e.stopPropagation()}>
                     <button
                         className="absolute -top-3 -right-3 bg-white rounded-full"
                         onClick={closeModal} // Close button inside modal
                       >
                         <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
             <path d="M15 0C6.64286 0 0 6.64286 0 15C0 23.3571 6.64286 30 15 30C23.3571 30 30 23.3571 30 15C30 6.64286 23.3571 0 15 0ZM20.7857 22.5L15 16.7143L9.21429 22.5L7.5 20.7857L13.2857 15L7.5 9.21429L9.21429 7.5L15 13.2857L20.7857 7.5L22.5 9.21429L16.7143 15L22.5 20.7857L20.7857 22.5Z" fill="#002882"/>
           </svg>
                       </button>
           
                       
      <div className=" rounded-2xl min-w-[350px] max-w-[600px]">
      <div className="max-w-md mx-auto">
      <h3 className="text-lg font-semibold">Avatar and username sharing</h3>
      <p className="text-sm text-natural-gray">
      Share your user profile avatar and username with other users when you add a product to cart, purchase a product, or participate in a promotion and event, but it won‘t affect your reviews for product.
      </p>

      {/* SMS Section */}
      <div className="flex items-center justify-between mt-4">
        <div>
          <p className="text-sm font-medium">Avatar and username sharing</p>
          <p className="text-xs text-natural-gray">
          To prevent others from viewing your avatar and username, you can opt out of Avatar and username sharing.
          </p>
        </div>
        <label className="relative inline-flex items-center cursor-pointer pl-2">
          <button
        onClick={() => setUserInfoSharing(!userInfoSharing)}
        className={`relative w-12 h-6 rounded-full transition-colors duration-300 
        ${userInfoSharing ? "bg-dark-blue" : "border-gray-300 border"}`}
      >
        <span
          className={`absolute left-1 top-1 w-4 h-4 rounded-full shadow-md transition-transform duration-300 
          ${userInfoSharing ? "translate-x-6 bg-white" : "translate-x-0 bg-natural-gray"}`}
        ></span>
      </button>
        </label>
      </div>

    </div>
      </div>
   
                
               </div>
                       
                     
                   </div>
                 )}
                 {openPopup==="Avatar and username sharing" && (
        <div
          className={`fixed inset-0 z-1050 bg-[rgba(0,0,0,0.3)]  bg-opacity-50
            flex items-end justify-center transition-opacity duration-300 ${
            isAnimating ? "opacity-100" : "opacity-0"
          }`}
          onClick={handleClose}
        >
          {/* Popup Content */}
          
          <div
            className={`w-full p-4 bg-white rounded-t-2xl shadow-lg transform transition-transform duration-300 ${
              isAnimating ? "translate-y-0" : "translate-y-full"
            }`}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            
          >
            <div className="flex justify-between items-center mb-3">
            <h2 className="text-2xl font-bold text-center">Avatar and username sharing</h2>
            <button
              onClick={handleClose}
              className=" text-white rounded-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <path d="M15 0C6.64286 0 0 6.64286 0 15C0 23.3571 6.64286 30 15 30C23.3571 30 30 23.3571 30 15C30 6.64286 23.3571 0 15 0ZM20.7857 22.5L15 16.7143L9.21429 22.5L7.5 20.7857L13.2857 15L7.5 9.21429L9.21429 7.5L15 13.2857L20.7857 7.5L22.5 9.21429L16.7143 15L22.5 20.7857L20.7857 22.5Z" fill="#002882"/>
</svg>
            </button>
    </div>
    <div className="">
      
      <p className="text-sm text-natural-gray">
      Share your user profile avatar and username with other users when you add a product to cart, purchase a product, or participate in a promotion and event, but it won‘t affect your reviews for product.
      </p>

      {/* SMS Section */}
      <div className="flex items-center justify-between mt-4">
        <div>
          <p className="text-sm font-medium">Avatar and username sharing</p>
          <p className="text-xs text-natural-gray">
          To prevent others from viewing your avatar and username, you can opt out of Avatar and username sharing.
          </p>
        </div>
        <label className="relative inline-flex items-center cursor-pointer pl-2">
          <button
        onClick={() => setUserInfoSharing(!userInfoSharing)}
        className={`relative w-12 h-6 rounded-full transition-colors duration-300 
        ${userInfoSharing ? "bg-dark-blue" : "border-gray-300 border"}`}
      >
        <span
          className={`absolute left-1 top-1 w-4 h-4 rounded-full shadow-md transition-transform duration-300 
          ${userInfoSharing ? "translate-x-6 bg-white" : "translate-x-0 bg-natural-gray"}`}
        ></span>
      </button>
        </label>
      </div>

    </div>
    
          </div>
        </div>
      )}

    </div>
    <div className="xl:max-w-sm mx-auto max-w-[1920px] sm:border border-[#F2F2F2] sm:rounded-lg p-4 bg-white">
      <h3 className="text-lg font-semibold">
        Receive SMS notifications about your order updates
      </h3>
      <p className="text-sm text-natural-gray mt-2">
        Message and data rates may apply. Message frequency varies. Click the
        link in the message to unsubscribe.{" "}
        <a href="#" className="text-natural-black underline">
          Terms of Use and Privacy
        </a>{" "}
        &{" "}
        <a href="#" className="text-natural-black underline">
          Cookie Policy
        </a>.
      </p>

      <div className="mt-4 flex border border-natural-gray-20 rounded-[5px] overflow-hidden">
        <span className="px-3 border-r border-natural-gray-20 text-natural-black flex items-center">
          +92
        </span>
        <Input value={smsNotifiNumber} onChange={(e)=>setSmsNotifiNumber(e.target.value)}
          type="text"
          placeholder="Enter your Phone number"
          className="border-0 pl-2"
        />
        
      </div>

      <div className="flex items-center text-[#12B76A] text-sm mt-3">
        <span className="mr-1"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M10.0026 14.1668C10.4446 14.1668 10.8686 13.9912 11.1811 13.6787C11.4937 13.3661 11.6693 12.9422 11.6693 12.5002C11.6693 12.0581 11.4937 11.6342 11.1811 11.3217C10.8686 11.0091 10.4446 10.8335 10.0026 10.8335C9.56058 10.8335 9.13665 11.0091 8.82409 11.3217C8.51153 11.6342 8.33594 12.0581 8.33594 12.5002C8.33594 12.9422 8.51153 13.3661 8.82409 13.6787C9.13665 13.9912 9.56058 14.1668 10.0026 14.1668ZM15.0026 6.66683C15.4446 6.66683 15.8686 6.84242 16.1811 7.15498C16.4937 7.46755 16.6693 7.89147 16.6693 8.3335V16.6668C16.6693 17.1089 16.4937 17.5328 16.1811 17.8453C15.8686 18.1579 15.4446 18.3335 15.0026 18.3335H5.0026C4.56058 18.3335 4.13665 18.1579 3.82409 17.8453C3.51153 17.5328 3.33594 17.1089 3.33594 16.6668V8.3335C3.33594 7.89147 3.51153 7.46755 3.82409 7.15498C4.13665 6.84242 4.56058 6.66683 5.0026 6.66683H5.83594V5.00016C5.83594 3.89509 6.27492 2.83529 7.05633 2.05388C7.83773 1.27248 8.89754 0.833496 10.0026 0.833496C10.5498 0.833496 11.0916 0.94127 11.5971 1.15066C12.1026 1.36006 12.562 1.66697 12.9489 2.05388C13.3358 2.4408 13.6427 2.90013 13.8521 3.40565C14.0615 3.91117 14.1693 4.45299 14.1693 5.00016V6.66683H15.0026ZM10.0026 2.50016C9.33956 2.50016 8.70368 2.76355 8.23484 3.2324C7.766 3.70124 7.5026 4.33712 7.5026 5.00016V6.66683H12.5026V5.00016C12.5026 4.33712 12.2392 3.70124 11.7704 3.2324C11.3015 2.76355 10.6656 2.50016 10.0026 2.50016Z" fill="#12B76A"/>
</svg></span> Your information will be kept safe and
        secure.
      </div>

      <button className="mt-4 w-full bg-dark-blue text-white py-2 rounded-md hover:bg-blue-800">
        Submit
      </button>
    </div>
        </div>
    </div>
  )
}
