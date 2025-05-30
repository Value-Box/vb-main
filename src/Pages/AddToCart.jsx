import React, { useEffect, useState } from 'react'
import CheckBox from '../Components/CheckBox';
import MoreToLove from '../Components/MoreToLove';
import { NavLink } from 'react-router-dom';

function AddToCart() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    const [cartData, setCartData] = useState([
      {
        store: "Zahir Clothing",
        items: [
          {
            id: 1,
            name: "Wifi doorbell Camera Smart WI-FI Video Intercom",
            price: 8500,
            oldPrice: 11000,
            discount: 5999,
            label: "Welcome Deal",
            warranty: "One Year Warranty",
            installment: "Installment Offers available up to 36 months",
            delivery: "Standard", // 👈 Added delivery type
            image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080'
          },
          {
            id: 2,
            name: "Wifi doorbell Camera Smart WI-FI Video Intercom",
            price: 8500,
            oldPrice: 11000,
            discount: 5999,
            label: "Welcome Deal",
            warranty: "One Year Warranty",
            installment: "Installment Offers available up to 36 months",
            delivery: "Standard", // 👈 Added delivery type
            image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080'
          },
          {
            id: 3,
            name: "Wifi doorbell Camera Smart WI-FI Video Intercom",
            price: 8500,
            oldPrice: 11000,
            discount: 5999,
            delivery: "Express", // 👈 Added delivery type
            image: "https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8aGVhZHBob25lfGVufDB8MHx8fDE3MjEzMDM2OTB8MA&ixlib=rb-4.0.3&q=80&w=1080"
          },
        ],
      },
      {
        store: "Arshad Electronics",
        items: [
          {
            id: 4,
            name: "Wifi doorbell Camera Smart WI-FI Video Intercom",
            price: 8500,
            oldPrice: 11000,
            discount: 5999,
            label: "Flash Sale",
            delivery: "Express", // 👈 Added delivery type
            image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw0fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
          },
          {
            id: 5,
            name: "Wifi doorbell Camera Smart WI-FI Video Intercom",
            price: 8500,
            oldPrice: 11000,
            discount: 5999,
            label: "Flash Sale",
            delivery: "Standard", // 👈 Added delivery type
            image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw0fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
          },
        ],
      },
    ])
  
  
  useEffect(() => {
    setCartData((prevData) =>
      prevData.map((store) => ({
        ...store,
        items: store.items.map((item) =>
          item.quantity === undefined ? { ...item, quantity: 1 } : item
        ),
      }))
    );
  }, []);

const increaseQuantity=(id)=>{
  console.log(id)
setCartData((prevData)=>
prevData.map((store)=>({
  ...store,items:store.items.map((item)=>
  item.id===id?{...item,quantity:item.quantity+1}:item
  ),
})))
}  
const decreaseQuantity=(id)=>{
  setCartData((prevData)=>
  prevData.map((store)=>({
    ...store,items:store.items.map((item)=>
    item.id===id && item.quantity>1 ?{...item,quantity:item.quantity-1}:item
    ),
  })))
}  


const [selectedItems, setSelectedItems] = useState({}); // Store-wise selected items

// ✅ Handle Store CheckBox (Fixed Version)
const handleStoreCheckboxChange = (storeIndex) => {
  setCartData((prevCartData) =>
    prevCartData.map((store, index) => {
      if (index === storeIndex) {
        // Saare items ko check/uncheck karna
        const allChecked = store.items.every(item => item.checked);
        return {
          ...store,
          items: store.items.map(item => ({
            ...item,
            checked: !allChecked, // Sab items ko toggle karo
          })),
        };
      }
      return store;
    })
  );
};

// ✅ Handle Delivery CheckBox
const handleDeliveryCheckBox = (storeIndex, deliveryType, checked) => {
  setCartData((prevCartData) =>
    prevCartData.map((store, sIndex) => {
      if (sIndex === storeIndex) {
        return {
          ...store,
          items: store.items.map((item) => {
            if (item.delivery === deliveryType) {
              return { ...item, checked: checked };
            }
            return item;
          }),
        };
      }
      return store;
    })
  );
};



// ✅ Handle Individual Item CheckBox
const handleItemCheckboxChange = (storeIndex, itemIndex) => {
  setCartData((prevCartData) =>
    prevCartData.map((store, sIndex) => {
      if (sIndex === storeIndex) {
        return {
          ...store,
          items: store.items.map((item, iIndex) => {
            if (iIndex === itemIndex) {
              return { ...item, checked: !item.checked };
            }
            return item;
          }),
        };
      }
      return store;
    })
  );
};

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
  return (
    <div className='bg-[#FCFCFC] '>
      {!isMobile?(
        <div className='flex flex-col lg:flex-row gap-6 p-4 xl:p-8 max-w-full mx-auto'>
        <div className='w-full lg:w-[70%]'>
        <div class="bg-white p-4 rounded-lg border border-[#CCD1D2] ">
           <h2 class="font-semibold text-lg">Shopping Cart (04)</h2>
           <div class="flex items-center space-x-4 mt-2 md:mt-3 2xl:mt-5">
            <CheckBox id='selectAllItems' />
            <label htmlFor='selectAllItems' className="text-gray-600 select-none">Select all Items</label>
             <p className='bg-[#CCC] w-px h-[20px] '></p>
             <button class="text-[#F04438] font-medium hover:underline cursor-pointer">Delete Selected Items</button>
           </div>
        </div>

        <div className="mt-4 min-h-screen">
  <div className="bg-white rounded-lg border border-[#CCD1D2] overflow-hidden">
    <div className='flex items-center gap-1.5 bg-[#F2F2F2] p-2 '>
    <CheckBox id='stantardDelItems'  checked={cartData.every(store => 
        store.items.filter(item => item.delivery === "Standard").every(item => item.checked)
      )}
      onChange={(e) => {
        cartData.forEach((_, index) => handleDeliveryCheckBox(index, "Standard", e.target.checked));
      }} />
    <label className="text-xl 2xl:text-2xl font-medium flex items-center gap-2 select-none" htmlFor='stantardDelItems'>Standard Delivery <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<g clip-path="url(#clip0_7110_91286)">
<path d="M10 18.75C7.67936 18.75 5.45376 17.8281 3.81282 16.1872C2.17187 14.5462 1.25 12.3206 1.25 10C1.25 7.67936 2.17187 5.45376 3.81282 3.81282C5.45376 2.17187 7.67936 1.25 10 1.25C12.3206 1.25 14.5462 2.17187 16.1872 3.81282C17.8281 5.45376 18.75 7.67936 18.75 10C18.75 12.3206 17.8281 14.5462 16.1872 16.1872C14.5462 17.8281 12.3206 18.75 10 18.75ZM10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 7.34784 18.9464 4.8043 17.0711 2.92893C15.1957 1.05357 12.6522 0 10 0C7.34784 0 4.8043 1.05357 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C4.8043 18.9464 7.34784 20 10 20Z" fill="#667479"/>
<path d="M11.1624 8.235L8.29994 8.59375L8.19744 9.06875L8.75994 9.1725C9.12744 9.26 9.19994 9.3925 9.11994 9.75875L8.19744 14.0938C7.95494 15.215 8.32869 15.7425 9.20744 15.7425C9.88869 15.7425 10.6799 15.4275 11.0387 14.995L11.1487 14.475C10.8987 14.695 10.5337 14.7825 10.2912 14.7825C9.94744 14.7825 9.82244 14.5413 9.91119 14.1163L11.1624 8.235ZM11.2499 5.625C11.2499 5.95652 11.1182 6.27446 10.8838 6.50888C10.6494 6.7433 10.3315 6.875 9.99994 6.875C9.66842 6.875 9.35048 6.7433 9.11606 6.50888C8.88164 6.27446 8.74994 5.95652 8.74994 5.625C8.74994 5.29348 8.88164 4.97554 9.11606 4.74112C9.35048 4.5067 9.66842 4.375 9.99994 4.375C10.3315 4.375 10.6494 4.5067 10.8838 4.74112C11.1182 4.97554 11.2499 5.29348 11.2499 5.625Z" fill="#667479"/>
</g>
<defs>
<clipPath id="clip0_7110_91286">
  <rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg></label>
    </div>
    <div className='p-3 2xl:p-6 flex flex-col gap-4 2xl:gap-6'>
    {cartData.map((store, index) => (
      store.items.some(item=>item.delivery==='Standard')&&(
      <div key={index} className="bg-[#FCFCFC] border border-[#F2F2F2] rounded-[10px] p-4">
        <h3 className="font-semibold text-gray-700 flex gap-1.5 items-center">
        <CheckBox 
  id={store.id} 
  checked={store.items.every(item => item.checked)} // Sab checked hain to store bhi checked hoga
      onChange={() => handleStoreCheckboxChange(index)}
/> 
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M3 21.0002H5M5 21.0002H19M5 21.0002V9.32824M21 21.0002H19M19 21.0002V9.32824M5 9.32824C4.96261 9.30677 4.92592 9.28409 4.89 9.26024L4.35 8.90024C3.96826 8.64562 3.68568 8.26746 3.54967 7.82921C3.41366 7.39096 3.43249 6.91926 3.603 6.49324L4.497 4.25724C4.64549 3.88615 4.90176 3.56806 5.23276 3.34401C5.56376 3.11995 5.9543 3.00022 6.354 3.00024H17.646C18.0457 3.00022 18.4362 3.11995 18.7672 3.34401C19.0982 3.56806 19.3545 3.88615 19.503 4.25724L20.397 6.49324C20.5675 6.91926 20.5863 7.39096 20.4503 7.82921C20.3143 8.26746 20.0317 8.64562 19.65 8.90024L19.11 9.26024C19.0741 9.28409 19.0374 9.30677 19 9.32824M5 9.32824C5.32305 9.51483 5.69184 9.60733 6.0647 9.59532C6.43757 9.5833 6.79964 9.46724 7.11 9.26024L9 8.00024L10.89 9.26024C11.2187 9.47952 11.6049 9.59654 12 9.59654C12.3951 9.59654 12.7813 9.47952 13.11 9.26024L15 8.00024L16.89 9.26024C17.2004 9.46724 17.5624 9.5833 17.9353 9.59532C18.3082 9.60733 18.677 9.51483 19 9.32824" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M13.998 20.9999V15.9999C13.998 15.4694 13.7873 14.9607 13.4123 14.5857C13.0372 14.2106 12.5285 13.9999 11.998 13.9999C11.4676 13.9999 10.9589 14.2106 10.5838 14.5857C10.2088 14.9607 9.99805 15.4694 9.99805 15.9999V20.9999" stroke="#1A1A1A" stroke-width="1.5"/>
        </svg> {store.store}</h3>
     <div className='bg-[#CCC] h-px my-4'></div>
        {store.items.filter(stItem=>stItem.delivery==='Standard').map((item,storeIndex,filteredItems) => (
          <>
          <div key={item.id} className="flex items-center gap-2 xl:gap-4 mt-2 w-full">
            
          <CheckBox 
    key={item.id}
    id={item.id} 
    checked={item.checked || false}
          onChange={() => handleItemCheckboxChange(storeIndex, index)} 
  />
            <img src={item.image} className='w-20 h-20 lg:w-25 lg:h-25 2xl:w-32 2xl:h-32 rounded-lg select-none' alt="" />
            <div className="flex-1 flex flex-col gap-3 select-none min-w-0">
            <div className="flex gap-2 justify-between overflow-hidden w-full min-w-0">
              <div className="flex items-center space-x-2 w-full overflow-hidden min-w-0">
                {item.label && (
                  <span className="text-xs bg-red-500 text-white px-2 py-1 rounded shrink-0">
                    {item.label}
                  </span>
                )}
                <p className="w-full min-w-0 overflow-hidden text-ellipsis whitespace-nowrap">
                  {item.name}
                </p>
              </div>
              
              <div className='flex gap-1'>
              <button className='cursor-pointer'>
              <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 2xl:w-6 2xl:h-6' viewBox="0 0 24 24" fill="none">
                <path d="M20.5 6H3.5M9.5 11L10 16M14.5 11L14 16" stroke="#666666" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M6.5 6H6.61C7.01245 5.98972 7.40242 5.85822 7.72892 5.62271C8.05543 5.3872 8.30325 5.05864 8.44 4.68L8.474 4.577L8.571 4.286C8.654 4.037 8.696 3.913 8.751 3.807C8.85921 3.59939 9.01451 3.41999 9.20448 3.28316C9.39444 3.14633 9.6138 3.05586 9.845 3.019C9.962 3 10.093 3 10.355 3H13.645C13.907 3 14.038 3 14.155 3.019C14.3862 3.05586 14.6056 3.14633 14.7955 3.28316C14.9855 3.41999 15.1408 3.59939 15.249 3.807C15.304 3.913 15.346 4.037 15.429 4.286L15.526 4.577C15.6527 4.99827 15.9148 5.36601 16.2717 5.62326C16.6285 5.88051 17.0603 6.01293 17.5 6" stroke="#666666" stroke-width="1.5"/>
                <path d="M18.374 15.4C18.197 18.054 18.108 19.381 17.243 20.19C16.378 20.999 15.048 21 12.387 21H11.613C8.95299 21 7.62299 21 6.75699 20.19C5.89199 19.381 5.80399 18.054 5.62699 15.4L5.16699 8.5M18.833 8.5L18.633 11.5" stroke="#666666" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
              </button>
              <button className='cursor-pointer'>
              <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 2xl:w-6 2xl:h-6' viewBox="0 0 24 24" fill="none">
                <path d="M20.0009 13.3096L13.6274 19.735C13.2049 20.1608 12.6318 20.4 12.0344 20.4C11.4369 20.4 10.8638 20.1608 10.4413 19.735L4.06781 13.3107C3.54096 12.7843 3.12245 12.1582 2.8363 11.4683C2.55016 10.7784 2.40203 10.0383 2.4004 9.29056C2.39878 8.5428 2.5437 7.80209 2.82684 7.11093C3.10998 6.41978 3.52577 5.79181 4.05033 5.26307C4.57489 4.73432 5.1979 4.31522 5.88359 4.02982C6.56927 3.74442 7.30413 3.59835 8.04597 3.59999C8.78781 3.60163 9.52203 3.75094 10.2065 4.03936C10.8909 4.32779 11.5121 4.74963 12.0344 5.28069C13.0952 4.23803 14.5208 3.65863 16.0024 3.66799C17.4841 3.67734 18.9024 4.27471 19.9502 5.33068C20.9979 6.38665 21.5908 7.8162 21.6003 9.30964C21.6098 10.8031 21.0351 12.2402 20.0009 13.3096Z" stroke="#666666" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              </button>
              </div>
            </div>
            <div className='flex gap-2'>
                <span className='text-[#999] bg-[#F2F2F2] px-4 rounded-[5px] inline-block '>Red/42</span>
                <span className='text-[#999] bg-[#F2F2F2] px-4 rounded-[5px] inline-block '>Free Delivery</span>
            </div>

            <div className='flex gap-3'>
            <div className='flex xl:flex-row gap-1 items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" className='w-4 h-4 xl:w-5 xl:h-5' viewBox="0 0 20 20" fill="none">
              <path d="M6.69034 10H4.03644C3.83149 10.0003 3.63122 10.0591 3.46088 10.169C3.29053 10.2789 3.15773 10.435 3.07921 10.6175C3.00069 10.8 2.97996 11.0009 3.01964 11.1948C3.05932 11.3887 3.15763 11.5669 3.30218 11.707L9.74041 18L16.1776 11.707C16.2742 11.6143 16.3509 11.5042 16.4033 11.3829C16.4556 11.2615 16.4825 11.1314 16.4825 11C16.4825 10.8686 16.4556 10.7385 16.4033 10.6171C16.3509 10.4958 16.2742 10.3857 16.1776 10.293C15.9831 10.1055 15.7194 10.0001 15.4444 10H12.8631C12.9336 7.25 13.4501 4.245 17 2H15.9629C11.1581 2 7.20681 5.5 6.69034 10Z" fill="#F04438"/>
            </svg>
            <span className='text-[#F04438] text-sm xl:text-base'>Save PKR 5,999</span>
            </div>
            <p className='bg-[#CCC] h-5 w-px '></p>
            <div className='flex gap-1 items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" className='w-4 h-4 xl:w-5 xl:h-5' viewBox="0 0 20 20" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 15.7144C0 16.8972 0.957143 17.8572 2.14 17.8572H17.86C19.0429 17.8572 20 16.8972 20 15.7144V12.8087C20.0001 12.6517 19.9486 12.4991 19.8533 12.3744C19.758 12.2496 19.6243 12.1598 19.4729 12.1187C19.008 11.9921 18.5976 11.7161 18.3051 11.3332C18.0125 10.9504 17.854 10.4819 17.854 10.0001C17.854 9.51826 18.0125 9.04981 18.3051 8.66696C18.5976 8.28411 19.008 8.00811 19.4729 7.88152C19.6243 7.84039 19.758 7.75053 19.8533 7.62581C19.9486 7.50109 20.0001 7.34846 20 7.19152V4.2858C20 3.10294 19.0429 2.14294 17.86 2.14294H2.14C0.957143 2.14294 0 3.10294 0 4.2858V7.1858C0.000189937 7.3435 0.0525637 7.49671 0.148953 7.62152C0.245342 7.74634 0.380328 7.83575 0.532857 7.8758C1.00268 7.99866 1.41852 8.2738 1.7153 8.65817C2.01209 9.04255 2.17308 9.51447 2.17308 10.0001C2.17308 10.4857 2.01209 10.9576 1.7153 11.342C1.41852 11.7264 1.00268 12.0015 0.532857 12.1244C0.380328 12.1644 0.245342 12.2538 0.148953 12.3787C0.0525637 12.5035 0.000189937 12.6567 0 12.8144L0 15.7144ZM7.08857 14.2029L14.2314 7.06009C14.3908 6.89119 14.4782 6.66682 14.4749 6.4346C14.4716 6.20237 14.3779 5.98057 14.2138 5.81625C14.0497 5.65193 13.828 5.55804 13.5958 5.55449C13.3635 5.55094 13.1391 5.63801 12.97 5.79723L5.82714 12.9401C5.74017 13.022 5.67052 13.1205 5.62231 13.2298C5.57411 13.3391 5.54833 13.457 5.5465 13.5764C5.54467 13.6959 5.56684 13.8145 5.61168 13.9252C5.65652 14.036 5.72313 14.1366 5.80755 14.2211C5.89198 14.3056 5.99251 14.3723 6.10319 14.4173C6.21387 14.4623 6.33245 14.4846 6.4519 14.4829C6.57135 14.4812 6.68925 14.4555 6.79861 14.4074C6.90797 14.3594 7.00657 14.2898 7.08857 14.2029ZM5.74429 7.14294C5.74429 6.76406 5.8948 6.4007 6.1627 6.13279C6.43061 5.86488 6.79398 5.71437 7.17286 5.71437C7.55174 5.71437 7.9151 5.86488 8.18301 6.13279C8.45092 6.4007 8.60143 6.76406 8.60143 7.14294C8.60143 7.52182 8.45092 7.88519 8.18301 8.1531C7.9151 8.42101 7.55174 8.57152 7.17286 8.57152C6.79398 8.57152 6.43061 8.42101 6.1627 8.1531C5.8948 7.88519 5.74429 7.52182 5.74429 7.14294ZM11.4586 12.8572C11.4586 12.4783 11.6091 12.115 11.877 11.8471C12.1449 11.5792 12.5083 11.4287 12.8871 11.4287C13.266 11.4287 13.6294 11.5792 13.8973 11.8471C14.1652 12.115 14.3157 12.4783 14.3157 12.8572C14.3157 13.2361 14.1652 13.5995 13.8973 13.8674C13.6294 14.1353 13.266 14.2858 12.8871 14.2858C12.5083 14.2858 12.1449 14.1353 11.877 13.8674C11.6091 13.5995 11.4586 13.2361 11.4586 12.8572Z" fill="#F04438"/>
</svg>
            <span className='text-sm xl:text-base text-[#F04438]'>Coupons applicable</span>
            </div>
            <p className='bg-[#CCC] h-5 w-px '></p>
            <div className='flex gap-1 items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" className='w-4 h-4 xl:w-5 xl:h-5' viewBox="0 0 18 20" fill="none">
<path d="M16.0096 6.66755V8.43408C16.0096 10.6361 15.6173 12.5459 14.8437 14.11C14.2331 15.3442 13.3823 16.3714 12.3147 17.1627C11.3571 17.8725 10.3955 18.2606 9.75741 18.4612C9.20382 18.6352 8.78993 18.7027 8.6392 18.7235C8.48847 18.7027 8.07458 18.6352 7.521 18.4612C6.88291 18.2606 5.92129 17.8725 4.96371 17.1627C3.89614 16.3714 3.04527 15.3442 2.43472 14.11C1.66113 12.5459 1.26881 10.6361 1.26881 8.43408V5.3558C2.31888 5.12853 3.34433 4.80878 4.32436 4.40262C5.23778 4.02399 6.11415 3.56974 6.92898 3.05254C7.7046 2.56021 8.27735 2.10418 8.6392 1.78975C9.00107 2.10418 9.57381 2.56021 10.3494 3.05254C11.0243 3.48091 11.7415 3.86614 12.4867 4.20086L13.2331 3.14301C12.4762 2.8169 11.7492 2.4351 11.0687 2.00622C9.78621 1.19769 9.10486 0.4927 9.09902 0.48649L8.64187 0L8.18027 0.485594C8.17354 0.4927 7.49219 1.19769 6.20968 2.00622C5.4588 2.4795 4.65121 2.89544 3.80948 3.24236C2.75929 3.67542 1.65199 4.00178 0.518432 4.21254L0 4.30898V8.43409C0 10.8518 0.443327 12.9645 1.31766 14.7134C2.02743 16.1327 3.01825 17.3133 4.2627 18.2222C6.38008 19.7687 8.49012 19.9858 8.57894 19.9942L8.6392 20L8.69947 19.9942C8.78829 19.9858 10.8983 19.7687 13.0157 18.2222C14.2602 17.3133 15.251 16.1327 15.9606 14.7134C16.8351 12.9645 17.2784 10.8518 17.2784 8.43409V4.86905L16.0096 6.66755Z" fill="#33539B"/>
<path d="M10.3521 3.05254C9.57837 2.56135 9.00652 2.10633 8.64453 1.79204V0L9.10168 0.48649C9.10752 0.492712 9.78887 1.1977 11.0714 2.00622C11.7519 2.4351 12.4789 2.8169 13.2357 3.14301L12.4894 4.20086C11.7441 3.86614 11.027 3.48091 10.3521 3.05254Z" fill="#002882"/>
<path d="M17.2811 4.86914V8.43418C17.2811 10.8519 16.8378 12.9646 15.9633 14.7135C15.2536 16.1328 14.2628 17.3134 13.0184 18.2223C10.901 19.7688 8.79095 19.9859 8.70213 19.9943L8.64453 19.9998V18.7232C8.79743 18.702 9.20966 18.6343 9.76007 18.4613C10.3982 18.2607 11.3598 17.8726 12.3174 17.1628C13.3849 16.3715 14.2358 15.3443 14.8463 14.1101C15.6199 12.546 16.0123 10.6362 16.0123 8.43417V6.66764L17.2811 4.86914Z" fill="#002882"/>
<path d="M8.11644 15.165L4.40004 12.0903C4.09559 11.8384 4.05296 11.3874 4.30483 11.0829L5.13718 10.0768C5.38905 9.77232 5.84004 9.72969 6.14448 9.98157L8.17914 11.6649L14.6499 2.4923C14.8777 2.16942 15.3241 2.09232 15.647 2.32012L16.7139 3.07289C17.0368 3.30069 17.1139 3.7471 16.8861 4.06998L9.15711 15.0262C8.91686 15.3667 8.43755 15.4307 8.11644 15.165Z" fill="#EEA500"/>
</svg>
            <span className='text-sm xl:text-base'>One Year Warranty</span>
            </div>
            </div>
              <div className='flex justify-between'>
              <div className='flex gap-2'>
              <p className="text-[#002882] font-bold text-xl 2xl:text-3xl">
                <small className='text-xs 2xl:text-sm font-medium'>PKR</small> {item.price}</p>
              <small className="line-through text-gray-400 flex items-center">PKR {item.oldPrice}</small>
              </div>
              <div className="flex items-center border border-[#CCD1D2] rounded-full ">
              <button className="px-1 py-1 cursor-pointer" onClick={()=>decreaseQuantity(item.id)}>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-4 h-4 2xl:w-5 2xl:h-5' viewBox="0 0 20 20" fill="none">
                <path d="M16.6654 10H3.33203" stroke="#999999" stroke-width="1.66667" stroke-linecap="round"/>
              </svg></button>
              <span className="px-4">{item.quantity}</span>
              <button className="px-1 py-1 cursor-pointer" onClick={()=>increaseQuantity(item.id)}>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-4 h-4 2xl:w-5 2xl:h-5' viewBox="0 0 20 20" fill="none">
                <path d="M14.9974 10.8333H10.8307V15C10.8307 15.4583 10.4557 15.8333 9.9974 15.8333C9.53906 15.8333 9.16406 15.4583 9.16406 15V10.8333H4.9974C4.53906 10.8333 4.16406 10.4583 4.16406 9.99996C4.16406 9.54163 4.53906 9.16663 4.9974 9.16663H9.16406V4.99996C9.16406 4.54163 9.53906 4.16663 9.9974 4.16663C10.4557 4.16663 10.8307 4.54163 10.8307 4.99996V9.16663H14.9974C15.4557 9.16663 15.8307 9.54163 15.8307 9.99996C15.8307 10.4583 15.4557 10.8333 14.9974 10.8333Z" fill="#1A1A1A"/>
              </svg></button>
            </div> 
              </div>
            </div>
            
          </div>
          {storeIndex!==filteredItems.length-1 &&(
            <div className='bg-[#CCC] h-px my-4'>
            
            </div>
          )}
          
          </>
        ))}
      </div>
    )))}
    </div>
  </div>

  <div className="bg-white rounded-lg border border-[#CCD1D2] overflow-hidden mt-3">
    <div className='flex items-center gap-1.5 bg-gradient-to-b from-[#FFE09E] to-[#FFFCF4] p-2 '>
    <CheckBox id='expressDelItems' checked={cartData.every(store => 
        store.items.filter(item => item.delivery === "Express").every(item => item.checked)
      )}
      onChange={(e) => {
        cartData.forEach((_, index) => handleDeliveryCheckBox(index, "Express", e.target.checked));
      }} />
    

    <label className="text-xl 2xl:text-2xl font-medium flex items-center gap-2 select-none" htmlFor='expressDelItems'>
    <span className="bg-gradient-to-r from-[#0032A3] via-[#1A51CB] to-[#0032A3] text-white text-xs font-semibold px-2 py-1 rounded-md">
  VB MALL
</span> Express Delivery <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<g clip-path="url(#clip0_7110_91286)">
<path d="M10 18.75C7.67936 18.75 5.45376 17.8281 3.81282 16.1872C2.17187 14.5462 1.25 12.3206 1.25 10C1.25 7.67936 2.17187 5.45376 3.81282 3.81282C5.45376 2.17187 7.67936 1.25 10 1.25C12.3206 1.25 14.5462 2.17187 16.1872 3.81282C17.8281 5.45376 18.75 7.67936 18.75 10C18.75 12.3206 17.8281 14.5462 16.1872 16.1872C14.5462 17.8281 12.3206 18.75 10 18.75ZM10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 7.34784 18.9464 4.8043 17.0711 2.92893C15.1957 1.05357 12.6522 0 10 0C7.34784 0 4.8043 1.05357 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C4.8043 18.9464 7.34784 20 10 20Z" fill="#667479"/>
<path d="M11.1624 8.235L8.29994 8.59375L8.19744 9.06875L8.75994 9.1725C9.12744 9.26 9.19994 9.3925 9.11994 9.75875L8.19744 14.0938C7.95494 15.215 8.32869 15.7425 9.20744 15.7425C9.88869 15.7425 10.6799 15.4275 11.0387 14.995L11.1487 14.475C10.8987 14.695 10.5337 14.7825 10.2912 14.7825C9.94744 14.7825 9.82244 14.5413 9.91119 14.1163L11.1624 8.235ZM11.2499 5.625C11.2499 5.95652 11.1182 6.27446 10.8838 6.50888C10.6494 6.7433 10.3315 6.875 9.99994 6.875C9.66842 6.875 9.35048 6.7433 9.11606 6.50888C8.88164 6.27446 8.74994 5.95652 8.74994 5.625C8.74994 5.29348 8.88164 4.97554 9.11606 4.74112C9.35048 4.5067 9.66842 4.375 9.99994 4.375C10.3315 4.375 10.6494 4.5067 10.8838 4.74112C11.1182 4.97554 11.2499 5.29348 11.2499 5.625Z" fill="#667479"/>
</g>
<defs>
<clipPath id="clip0_7110_91286">
  <rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg></label>
    </div>
    <div className='p-3 2xl:p-6 flex flex-col gap-4 2xl:gap-6'>
    {cartData.map((store, index) => (
      store.items.some(item=>item.delivery==='Express')&&(
      <div key={index} className="bg-[#FCFCFC] border border-[#F2F2F2] rounded-[10px] p-4">
        <h3 className="font-semibold text-gray-700 flex gap-1.5 items-center">
        <CheckBox 
  id={store.id} 
  checked={store.items.every(item => item.checked)} // Sab checked hain to store bhi checked hoga
      onChange={() => handleStoreCheckboxChange(index)}
/> 
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M3 21.0002H5M5 21.0002H19M5 21.0002V9.32824M21 21.0002H19M19 21.0002V9.32824M5 9.32824C4.96261 9.30677 4.92592 9.28409 4.89 9.26024L4.35 8.90024C3.96826 8.64562 3.68568 8.26746 3.54967 7.82921C3.41366 7.39096 3.43249 6.91926 3.603 6.49324L4.497 4.25724C4.64549 3.88615 4.90176 3.56806 5.23276 3.34401C5.56376 3.11995 5.9543 3.00022 6.354 3.00024H17.646C18.0457 3.00022 18.4362 3.11995 18.7672 3.34401C19.0982 3.56806 19.3545 3.88615 19.503 4.25724L20.397 6.49324C20.5675 6.91926 20.5863 7.39096 20.4503 7.82921C20.3143 8.26746 20.0317 8.64562 19.65 8.90024L19.11 9.26024C19.0741 9.28409 19.0374 9.30677 19 9.32824M5 9.32824C5.32305 9.51483 5.69184 9.60733 6.0647 9.59532C6.43757 9.5833 6.79964 9.46724 7.11 9.26024L9 8.00024L10.89 9.26024C11.2187 9.47952 11.6049 9.59654 12 9.59654C12.3951 9.59654 12.7813 9.47952 13.11 9.26024L15 8.00024L16.89 9.26024C17.2004 9.46724 17.5624 9.5833 17.9353 9.59532C18.3082 9.60733 18.677 9.51483 19 9.32824" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M13.998 20.9999V15.9999C13.998 15.4694 13.7873 14.9607 13.4123 14.5857C13.0372 14.2106 12.5285 13.9999 11.998 13.9999C11.4676 13.9999 10.9589 14.2106 10.5838 14.5857C10.2088 14.9607 9.99805 15.4694 9.99805 15.9999V20.9999" stroke="#1A1A1A" stroke-width="1.5"/>
        </svg> {store.store}</h3>
     <div className='bg-[#CCC] h-px my-4'></div>
        {store.items.filter(stItem=>stItem.delivery==='Express').map((item,storeIndex,filteredItems) => (
        
          <>
          <div key={item.id} className="flex items-center gap-2 xl:gap-4 mt-2 w-full">
            
            <CheckBox id={item.id} checked={item.checked || false}
          onChange={() => handleItemCheckboxChange(storeIndex, itemIndex)}
             />
            <img src={item.image} className='w-20 h-20 lg:w-25 lg:h-25 2xl:w-32 2xl:h-32 rounded-lg select-none' alt="" />
            <div className="flex-1 flex flex-col gap-3 select-none min-w-0">
            <div className="flex gap-2 justify-between overflow-hidden w-full min-w-0">
              <div className="flex items-center space-x-2 w-full overflow-hidden min-w-0">
                {item.label && (
                  <span className="text-xs bg-red-500 text-white px-2 py-1 rounded shrink-0">
                    {item.label}
                  </span>
                )}
                <p className="w-full min-w-0 overflow-hidden text-ellipsis whitespace-nowrap">
                  {item.name}
                </p>
              </div>
              
              <div className='flex gap-1'>
              <button className='cursor-pointer'>
              <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 2xl:w-6 2xl:h-6' viewBox="0 0 24 24" fill="none">
                <path d="M20.5 6H3.5M9.5 11L10 16M14.5 11L14 16" stroke="#666666" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M6.5 6H6.61C7.01245 5.98972 7.40242 5.85822 7.72892 5.62271C8.05543 5.3872 8.30325 5.05864 8.44 4.68L8.474 4.577L8.571 4.286C8.654 4.037 8.696 3.913 8.751 3.807C8.85921 3.59939 9.01451 3.41999 9.20448 3.28316C9.39444 3.14633 9.6138 3.05586 9.845 3.019C9.962 3 10.093 3 10.355 3H13.645C13.907 3 14.038 3 14.155 3.019C14.3862 3.05586 14.6056 3.14633 14.7955 3.28316C14.9855 3.41999 15.1408 3.59939 15.249 3.807C15.304 3.913 15.346 4.037 15.429 4.286L15.526 4.577C15.6527 4.99827 15.9148 5.36601 16.2717 5.62326C16.6285 5.88051 17.0603 6.01293 17.5 6" stroke="#666666" stroke-width="1.5"/>
                <path d="M18.374 15.4C18.197 18.054 18.108 19.381 17.243 20.19C16.378 20.999 15.048 21 12.387 21H11.613C8.95299 21 7.62299 21 6.75699 20.19C5.89199 19.381 5.80399 18.054 5.62699 15.4L5.16699 8.5M18.833 8.5L18.633 11.5" stroke="#666666" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
              </button>
              <button className='cursor-pointer'>
              <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 2xl:w-6 2xl:h-6' viewBox="0 0 24 24" fill="none">
                <path d="M20.0009 13.3096L13.6274 19.735C13.2049 20.1608 12.6318 20.4 12.0344 20.4C11.4369 20.4 10.8638 20.1608 10.4413 19.735L4.06781 13.3107C3.54096 12.7843 3.12245 12.1582 2.8363 11.4683C2.55016 10.7784 2.40203 10.0383 2.4004 9.29056C2.39878 8.5428 2.5437 7.80209 2.82684 7.11093C3.10998 6.41978 3.52577 5.79181 4.05033 5.26307C4.57489 4.73432 5.1979 4.31522 5.88359 4.02982C6.56927 3.74442 7.30413 3.59835 8.04597 3.59999C8.78781 3.60163 9.52203 3.75094 10.2065 4.03936C10.8909 4.32779 11.5121 4.74963 12.0344 5.28069C13.0952 4.23803 14.5208 3.65863 16.0024 3.66799C17.4841 3.67734 18.9024 4.27471 19.9502 5.33068C20.9979 6.38665 21.5908 7.8162 21.6003 9.30964C21.6098 10.8031 21.0351 12.2402 20.0009 13.3096Z" stroke="#666666" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              </button>
              </div>
            </div>
            <div className='flex gap-2'>
                <span className='text-[#999] bg-[#F2F2F2] px-4 rounded-[5px] inline-block '>Red/42</span>
                <span className='text-[#999] bg-[#F2F2F2] px-4 rounded-[5px] inline-block '>Free Delivery</span>
            </div>

            <div className='flex gap-3'>
            <div className='flex xl:flex-row gap-1 items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" className='w-4 h-4 xl:w-5 xl:h-5' viewBox="0 0 20 20" fill="none">
              <path d="M6.69034 10H4.03644C3.83149 10.0003 3.63122 10.0591 3.46088 10.169C3.29053 10.2789 3.15773 10.435 3.07921 10.6175C3.00069 10.8 2.97996 11.0009 3.01964 11.1948C3.05932 11.3887 3.15763 11.5669 3.30218 11.707L9.74041 18L16.1776 11.707C16.2742 11.6143 16.3509 11.5042 16.4033 11.3829C16.4556 11.2615 16.4825 11.1314 16.4825 11C16.4825 10.8686 16.4556 10.7385 16.4033 10.6171C16.3509 10.4958 16.2742 10.3857 16.1776 10.293C15.9831 10.1055 15.7194 10.0001 15.4444 10H12.8631C12.9336 7.25 13.4501 4.245 17 2H15.9629C11.1581 2 7.20681 5.5 6.69034 10Z" fill="#F04438"/>
            </svg>
            <span className='text-[#F04438] text-sm xl:text-base'>Save PKR 5,999</span>
            </div>
            <p className='bg-[#CCC] h-5 w-px '></p>
            <div className='flex gap-1 items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" className='w-4 h-4 xl:w-5 xl:h-5' viewBox="0 0 20 20" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 15.7144C0 16.8972 0.957143 17.8572 2.14 17.8572H17.86C19.0429 17.8572 20 16.8972 20 15.7144V12.8087C20.0001 12.6517 19.9486 12.4991 19.8533 12.3744C19.758 12.2496 19.6243 12.1598 19.4729 12.1187C19.008 11.9921 18.5976 11.7161 18.3051 11.3332C18.0125 10.9504 17.854 10.4819 17.854 10.0001C17.854 9.51826 18.0125 9.04981 18.3051 8.66696C18.5976 8.28411 19.008 8.00811 19.4729 7.88152C19.6243 7.84039 19.758 7.75053 19.8533 7.62581C19.9486 7.50109 20.0001 7.34846 20 7.19152V4.2858C20 3.10294 19.0429 2.14294 17.86 2.14294H2.14C0.957143 2.14294 0 3.10294 0 4.2858V7.1858C0.000189937 7.3435 0.0525637 7.49671 0.148953 7.62152C0.245342 7.74634 0.380328 7.83575 0.532857 7.8758C1.00268 7.99866 1.41852 8.2738 1.7153 8.65817C2.01209 9.04255 2.17308 9.51447 2.17308 10.0001C2.17308 10.4857 2.01209 10.9576 1.7153 11.342C1.41852 11.7264 1.00268 12.0015 0.532857 12.1244C0.380328 12.1644 0.245342 12.2538 0.148953 12.3787C0.0525637 12.5035 0.000189937 12.6567 0 12.8144L0 15.7144ZM7.08857 14.2029L14.2314 7.06009C14.3908 6.89119 14.4782 6.66682 14.4749 6.4346C14.4716 6.20237 14.3779 5.98057 14.2138 5.81625C14.0497 5.65193 13.828 5.55804 13.5958 5.55449C13.3635 5.55094 13.1391 5.63801 12.97 5.79723L5.82714 12.9401C5.74017 13.022 5.67052 13.1205 5.62231 13.2298C5.57411 13.3391 5.54833 13.457 5.5465 13.5764C5.54467 13.6959 5.56684 13.8145 5.61168 13.9252C5.65652 14.036 5.72313 14.1366 5.80755 14.2211C5.89198 14.3056 5.99251 14.3723 6.10319 14.4173C6.21387 14.4623 6.33245 14.4846 6.4519 14.4829C6.57135 14.4812 6.68925 14.4555 6.79861 14.4074C6.90797 14.3594 7.00657 14.2898 7.08857 14.2029ZM5.74429 7.14294C5.74429 6.76406 5.8948 6.4007 6.1627 6.13279C6.43061 5.86488 6.79398 5.71437 7.17286 5.71437C7.55174 5.71437 7.9151 5.86488 8.18301 6.13279C8.45092 6.4007 8.60143 6.76406 8.60143 7.14294C8.60143 7.52182 8.45092 7.88519 8.18301 8.1531C7.9151 8.42101 7.55174 8.57152 7.17286 8.57152C6.79398 8.57152 6.43061 8.42101 6.1627 8.1531C5.8948 7.88519 5.74429 7.52182 5.74429 7.14294ZM11.4586 12.8572C11.4586 12.4783 11.6091 12.115 11.877 11.8471C12.1449 11.5792 12.5083 11.4287 12.8871 11.4287C13.266 11.4287 13.6294 11.5792 13.8973 11.8471C14.1652 12.115 14.3157 12.4783 14.3157 12.8572C14.3157 13.2361 14.1652 13.5995 13.8973 13.8674C13.6294 14.1353 13.266 14.2858 12.8871 14.2858C12.5083 14.2858 12.1449 14.1353 11.877 13.8674C11.6091 13.5995 11.4586 13.2361 11.4586 12.8572Z" fill="#F04438"/>
</svg>
            <span className='text-sm xl:text-base text-[#F04438]'>Coupons applicable</span>
            </div>
            <p className='bg-[#CCC] h-5 w-px '></p>
            <div className='flex gap-1 items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" className='w-4 h-4 xl:w-5 xl:h-5' viewBox="0 0 18 20" fill="none">
<path d="M16.0096 6.66755V8.43408C16.0096 10.6361 15.6173 12.5459 14.8437 14.11C14.2331 15.3442 13.3823 16.3714 12.3147 17.1627C11.3571 17.8725 10.3955 18.2606 9.75741 18.4612C9.20382 18.6352 8.78993 18.7027 8.6392 18.7235C8.48847 18.7027 8.07458 18.6352 7.521 18.4612C6.88291 18.2606 5.92129 17.8725 4.96371 17.1627C3.89614 16.3714 3.04527 15.3442 2.43472 14.11C1.66113 12.5459 1.26881 10.6361 1.26881 8.43408V5.3558C2.31888 5.12853 3.34433 4.80878 4.32436 4.40262C5.23778 4.02399 6.11415 3.56974 6.92898 3.05254C7.7046 2.56021 8.27735 2.10418 8.6392 1.78975C9.00107 2.10418 9.57381 2.56021 10.3494 3.05254C11.0243 3.48091 11.7415 3.86614 12.4867 4.20086L13.2331 3.14301C12.4762 2.8169 11.7492 2.4351 11.0687 2.00622C9.78621 1.19769 9.10486 0.4927 9.09902 0.48649L8.64187 0L8.18027 0.485594C8.17354 0.4927 7.49219 1.19769 6.20968 2.00622C5.4588 2.4795 4.65121 2.89544 3.80948 3.24236C2.75929 3.67542 1.65199 4.00178 0.518432 4.21254L0 4.30898V8.43409C0 10.8518 0.443327 12.9645 1.31766 14.7134C2.02743 16.1327 3.01825 17.3133 4.2627 18.2222C6.38008 19.7687 8.49012 19.9858 8.57894 19.9942L8.6392 20L8.69947 19.9942C8.78829 19.9858 10.8983 19.7687 13.0157 18.2222C14.2602 17.3133 15.251 16.1327 15.9606 14.7134C16.8351 12.9645 17.2784 10.8518 17.2784 8.43409V4.86905L16.0096 6.66755Z" fill="#33539B"/>
<path d="M10.3521 3.05254C9.57837 2.56135 9.00652 2.10633 8.64453 1.79204V0L9.10168 0.48649C9.10752 0.492712 9.78887 1.1977 11.0714 2.00622C11.7519 2.4351 12.4789 2.8169 13.2357 3.14301L12.4894 4.20086C11.7441 3.86614 11.027 3.48091 10.3521 3.05254Z" fill="#002882"/>
<path d="M17.2811 4.86914V8.43418C17.2811 10.8519 16.8378 12.9646 15.9633 14.7135C15.2536 16.1328 14.2628 17.3134 13.0184 18.2223C10.901 19.7688 8.79095 19.9859 8.70213 19.9943L8.64453 19.9998V18.7232C8.79743 18.702 9.20966 18.6343 9.76007 18.4613C10.3982 18.2607 11.3598 17.8726 12.3174 17.1628C13.3849 16.3715 14.2358 15.3443 14.8463 14.1101C15.6199 12.546 16.0123 10.6362 16.0123 8.43417V6.66764L17.2811 4.86914Z" fill="#002882"/>
<path d="M8.11644 15.165L4.40004 12.0903C4.09559 11.8384 4.05296 11.3874 4.30483 11.0829L5.13718 10.0768C5.38905 9.77232 5.84004 9.72969 6.14448 9.98157L8.17914 11.6649L14.6499 2.4923C14.8777 2.16942 15.3241 2.09232 15.647 2.32012L16.7139 3.07289C17.0368 3.30069 17.1139 3.7471 16.8861 4.06998L9.15711 15.0262C8.91686 15.3667 8.43755 15.4307 8.11644 15.165Z" fill="#EEA500"/>
</svg>
            <span className='text-sm xl:text-base'>One Year Warranty</span>
            </div>
            </div>
              <div className='flex justify-between'>
              <div className='flex gap-2'>
              <p className="text-[#002882] font-bold text-xl 2xl:text-3xl">
                <small className='text-xs 2xl:text-sm font-medium'>PKR</small> {item.price}</p>
              <small className="line-through text-gray-400 flex items-center">PKR {item.oldPrice}</small>
              </div>
              <div className="flex items-center border border-[#CCD1D2] rounded-full ">
              <button className="px-1 py-1 cursor-pointer" onClick={()=>decreaseQuantity(item.id)}>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-4 h-4 2xl:w-5 2xl:h-5' viewBox="0 0 20 20" fill="none">
                <path d="M16.6654 10H3.33203" stroke="#999999" stroke-width="1.66667" stroke-linecap="round"/>
              </svg></button>
              <span className="px-4">{item.quantity}</span>
              <button className="px-1 py-1 cursor-pointer" onClick={()=>increaseQuantity(item.id)}>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-4 h-4 2xl:w-5 2xl:h-5' viewBox="0 0 20 20" fill="none">
                <path d="M14.9974 10.8333H10.8307V15C10.8307 15.4583 10.4557 15.8333 9.9974 15.8333C9.53906 15.8333 9.16406 15.4583 9.16406 15V10.8333H4.9974C4.53906 10.8333 4.16406 10.4583 4.16406 9.99996C4.16406 9.54163 4.53906 9.16663 4.9974 9.16663H9.16406V4.99996C9.16406 4.54163 9.53906 4.16663 9.9974 4.16663C10.4557 4.16663 10.8307 4.54163 10.8307 4.99996V9.16663H14.9974C15.4557 9.16663 15.8307 9.54163 15.8307 9.99996C15.8307 10.4583 15.4557 10.8333 14.9974 10.8333Z" fill="#1A1A1A"/>
              </svg></button>
            </div> 
              </div>
            </div>
            
          </div>
          {storeIndex  !== filteredItems.length-1 &&(
            <div className='bg-[#CCC] h-px my-4'>
            
            </div>
          )}
          
          </>
        ))}
      </div>
    )))}
    </div>
  </div>
</div>
        </div>
        <div className='flex-1  relative'>
            <div className='sticky top-[8%] flex flex-col gap-4'>
            <div className=' border border-[#CCD1D2] rounded-lg bg-white p-3 2xl:p-4'>
            <h1 className='text-md md:text-xl 2xl:text-2xl font-bold'>Order Summery</h1>
            
{/* Coupon Input */}
<div className="flex items-center mt-3">
<input
  type="text"
  placeholder="Enter Coupon Code"
  className="w-full p-2 outline-none text-sm border-y-1 rounded-l-md border-l-1 border-gray-300"
/>
<button className="bg-[#002882] text-white px-4 py-2 text-sm font-medium rounded-r-md border-y-1 border-r-1 border-[#002882]">
  Apply
</button>
</div>
{/* Offers Section */}
<button className="flex items-center justify-between mt-4 border bg-[#E6EAF3] border-gray-300 rounded-md px-3 py-2 cursor-pointer w-full" onClick={() => openModal("availableOffers")}>
<div className="flex items-center space-x-2 " >
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<g clip-path="url(#clip0_7213_113152)">
<path d="M7.75913 16.2412L16.3306 7.66978M9.99455 1.71092C10.5739 1.23954 11.298 0.982178 12.0448 0.982178C12.7917 0.982178 13.5158 1.23954 14.0951 1.71092L14.666 2.17549L15.3911 2.05892C16.1287 1.94016 16.8846 2.07922 17.5316 2.45267C18.1786 2.82613 18.6771 3.41115 18.9431 4.1092L19.2037 4.79492L19.8911 5.0572C20.5895 5.32296 21.1749 5.82134 21.5487 6.46835C21.9225 7.11537 22.0618 7.87146 21.9431 8.6092L21.8266 9.33435L22.2894 9.9052C22.7608 10.4845 23.0182 11.2086 23.0182 11.9555C23.0182 12.7024 22.7608 13.4264 22.2894 14.0058L21.8266 14.5766L21.9431 15.3018C22.0619 16.0393 21.9228 16.7952 21.5494 17.4422C21.1759 18.0892 20.5909 18.5877 19.8928 18.8538L19.2071 19.1161L18.9448 19.8018C18.6788 20.4998 18.1803 21.0849 17.5333 21.4583C16.8863 21.8318 16.1304 21.9708 15.3928 21.8521L14.6677 21.7355L14.0968 22.2001C13.5175 22.6714 12.7934 22.9288 12.0466 22.9288C11.2997 22.9288 10.5756 22.6714 9.99627 22.2001L9.42541 21.7372L8.70027 21.8521C7.96273 21.9708 7.20681 21.8318 6.55982 21.4583C5.91283 21.0849 5.41432 20.4998 5.14827 19.8018L4.88598 19.1161L4.20027 18.8538C3.50222 18.5877 2.91719 18.0892 2.54374 17.4422C2.17028 16.7952 2.03122 16.0393 2.14998 15.3018L2.26655 14.5766L1.80198 14.0058C1.3306 13.4264 1.07324 12.7024 1.07324 11.9555C1.07324 11.2086 1.3306 10.4845 1.80198 9.9052L2.26484 9.33435L2.14998 8.6092C2.03111 7.87188 2.16993 7.11612 2.54305 6.46916C2.91618 5.8222 3.50082 5.32356 4.19855 5.0572L4.88427 4.79663L5.14656 4.1092C5.41231 3.41083 5.91069 2.82543 6.5577 2.45165C7.20472 2.07786 7.96081 1.93856 8.69855 2.0572L9.4237 2.17378L9.99455 1.71092Z" stroke="#002882" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.61691 9.38396C8.84424 9.38396 9.06225 9.29366 9.223 9.13291C9.38375 8.97217 9.47405 8.75415 9.47405 8.52682C9.47405 8.29949 9.38375 8.08147 9.223 7.92073C9.06225 7.75998 8.84424 7.66968 8.61691 7.66968C8.38958 7.66968 8.17156 7.75998 8.01082 7.92073C7.85007 8.08147 7.75977 8.29949 7.75977 8.52682C7.75977 8.75415 7.85007 8.97217 8.01082 9.13291C8.17156 9.29366 8.38958 9.38396 8.61691 9.38396ZM15.4741 16.2411C15.7014 16.2411 15.9194 16.1508 16.0801 15.9901C16.2409 15.8293 16.3312 15.6113 16.3312 15.384C16.3312 15.1566 16.2409 14.9386 16.0801 14.7779C15.9194 14.6171 15.7014 14.5268 15.4741 14.5268C15.2467 14.5268 15.0287 14.6171 14.868 14.7779C14.7072 14.9386 14.6169 15.1566 14.6169 15.384C14.6169 15.6113 14.7072 15.8293 14.868 15.9901C15.0287 16.1508 15.2467 16.2411 15.4741 16.2411Z" stroke="#002882" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_7213_113152">
  <rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
  <span className="text-sm font-medium text-[#002882]">
    View Available Offers
  </span>
</div>

<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M10 8L14 12L10 16" stroke="#002882" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>
{activeModal === "availableOffers" && (
             <div className="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.4)] 
             bg-opacity-50 px-5 md:p-0 z-1050"
             onClick={closeModal}
           >
                <div
                  className={`${closing ? 'animate-flyout' : 'animate-wiggle'} bg-[#FCFCFC] w-[600px] p-5 flex flex-col items-start gap-4 rounded-2xl shadow-lg relative`}
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close Button */}
                  <button
                    className="absolute -top-4 -right-4 text-white cursor-pointer"
                    onClick={closeModal}
                  >
                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#002882] text-white">
                      ✖
                    </span>
                  </button>
                  {/* Modal Content */}
      <div className="w-full">
      <div className="max-w-lg mx-auto">
      {/* Heading */}
      <h2 className="text-2xl font-bold text-center">Available Offers</h2>
      <p className="text-gray-500 text-center italic">Download ValueBox App to get more offers</p>

      {/* Coupon Offers */}
      <div className="mt-4">
        <h3 className="font-semibold text-lg">Coupon Offers</h3>

        <div className="border border-[#12B76A] rounded-lg p-3 mt-3 relative bg-[#F6FEF9]">
          <div className="flex justify-between items-center">
            <span className="text-[#12B76A] font-bold text-lg">10% OFF</span>
            <span className="text-[#12B76A] text-sm">Expire on 28 Nov 2024</span>
          </div>
          <p className="text-[#12B76A] text-sm">Get Free Shipping over RS. 2,559 Order</p>
          <div className="flex justify-between mt-3">
            <button className=" bg-[#D1FADF] text-[#12B76A] px-3 py-1 rounded-md text-sm">T&C</button>
            <button className="bg-green-500 text-[#D1FADF] px-4 py-1 rounded-md text-sm">Apply</button>
          </div>
          <div className="absolute top-1/2 -left-3 w-5 h-5 bg-[#FCFCFC] border-r-4 border-green-500 rounded-full"></div>
          <div className="absolute top-1/2 -right-3 w-5 h-5 bg-[#FCFCFC] border-l-4 border-green-500 rounded-full"></div>
        </div>

        <div className="border border-[#12B76A] rounded-lg p-3 mt-3 relative bg-[#F6FEF9] ">
          <div className="flex justify-between items-center">
            <span className="text-[#12B76A] font-bold text-lg">Free Ship</span>
            <span className="text-[#12B76A] text-sm">Expire on 28 Nov 2024</span>
          </div>
          <p className="text-[#12B76A] text-sm">Get Free Shipping over RS. 2,559 Order</p>
          <div className="flex justify-between mt-3">
          <button className=" bg-[#D1FADF] text-[#12B76A] px-3 py-1 rounded-md text-sm">T&C</button>
          <button className="bg-green-500 text-[#D1FADF] px-4 py-1 rounded-md text-sm">Apply</button>
          </div>
          <div className="absolute top-1/2 -left-3 w-5 h-5 bg-[#FCFCFC] border-r-4 border-green-500 rounded-full"></div>
          <div className="absolute top-1/2 -right-3 w-5 h-5 bg-[#FCFCFC] border-l-4 border-green-500 rounded-full"></div>
        </div>
      </div>

      {/* Bank Offers */}
      <div className="mt-6">
        <h3 className="font-semibold text-lg">Bank Offers</h3>

        <div className="border flex border-[#2E90FA] rounded-lg mt-3 relative bg-[#D1E9FF] ">
        <div className='p-3 flex flex-col justify-center'>
        <span className="text-[#175CD3] font-bold text-lg ">10% OFF</span>
        <span className="text-[#175CD3] text-sm">No Min Spend</span>
        </div>
         <div className='flex flex-col items-center justify-between relative mx-3'>
           <div className="absolute -top-3  w-5 h-5 bg-[#FCFCFC] border-b-4 border-[#2E90FA] rounded-full"></div>
           <div className='w-px h-full border-dashed border-l-[1px] border-[#0BA5EC]'></div>
           <div className="absolute -bottom-3  w-5 h-5 bg-[#FCFCFC] border-t-4 border-[#2E90FA] rounded-full"></div>
         </div>
          <div className="flex justify-between p-3 items-end">
            
          <div className="flex flex-col justify-between mt-3">
          <span className="text-[#175CD3] text-sm">Bank Of Punjab</span>
            <p className="text-[#175CD3] text-sm">Extra 15% off. Applied automatically at checkout.</p>
          <p className="text-[#175CD3] text-xs">From: 26/11/2024 | To: 28/11/2024</p>
          </div>
          <button className="bg-[#F5FAFF] text-[#2E90FA] px-3 py-1 rounded-md text-sm">T&C</button>
          </div>
          
          
        </div>
      </div>
    </div>
                  </div>
                </div>
              </div>
            )}
{/* Pricing Details */}
<div className="mt-4 text-sm">
<div className="flex justify-between text-[#1A1A1A] font-medium">
  <span>Item(s) Total</span>
  <span className="line-through text-[#999] ">PKR 24,900</span>
</div>
<div className="flex justify-between mt-2">
  <span className='font-medium'>Item(s) Discount</span>
  <span className='text-[#F04438]'>-PKR 4,900</span>
</div>
<div className="flex justify-between text-gray-800 mt-2">
  <span className='font-medium'>Subtotal</span>
  <span>PKR 20,000</span>
</div>
</div>
{/* Shipping Fee */}
<div className="mt-4 border-t border-[#CCC] pt-3 text-sm">
<div className="flex justify-between">
  <span className="text-gray-600 font-semibold">Shipping Fee</span>
  <span className="text-[#12B76A] text-sm">FREE</span>
</div>
<p className="text-gray-500 text-xs mt-1 flex gap-2">
<svg xmlns="http://www.w3.org/2000/svg" className='w-5' width="16" height="16" viewBox="0 0 16 16" fill="none">
<g clip-path="url(#clip0_7129_97056)">
<path d="M8 15C6.14348 15 4.36301 14.2625 3.05025 12.9497C1.7375 11.637 1 9.85652 1 8C1 6.14348 1.7375 4.36301 3.05025 3.05025C4.36301 1.7375 6.14348 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8C15 9.85652 14.2625 11.637 12.9497 12.9497C11.637 14.2625 9.85652 15 8 15ZM8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16Z" fill="#999999"/>
<path d="M8.92995 6.588L6.63995 6.875L6.55795 7.255L7.00795 7.338C7.30195 7.408 7.35995 7.514 7.29595 7.807L6.55795 11.275C6.36395 12.172 6.66295 12.594 7.36595 12.594C7.91095 12.594 8.54395 12.342 8.83095 11.996L8.91895 11.58C8.71895 11.756 8.42695 11.826 8.23295 11.826C7.95795 11.826 7.85795 11.633 7.92895 11.293L8.92995 6.588ZM8.99995 4.5C8.99995 4.76522 8.8946 5.01957 8.70706 5.20711C8.51952 5.39464 8.26517 5.5 7.99995 5.5C7.73474 5.5 7.48038 5.39464 7.29285 5.20711C7.10531 5.01957 6.99995 4.76522 6.99995 4.5C6.99995 4.23478 7.10531 3.98043 7.29285 3.79289C7.48038 3.60536 7.73474 3.5 7.99995 3.5C8.26517 3.5 8.51952 3.60536 8.70706 3.79289C8.8946 3.98043 8.99995 4.23478 8.99995 4.5Z" fill="#999999"/>
</g>
<defs>
<clipPath id="clip0_7129_97056">
  <rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg> Free shipping over PKR 3,000 is a limited-time offer, please submit
  order as soon as possible.
</p>
</div>
{/* Total Amount */}
<div className="mt-4 border-t border-[#CCC] pt-3 text-lg font-bold flex justify-between">
<span>Total</span>
<span className="text-gray-800 text-lg 2xl:text-xl"><small className='text-xs 2xl:text-sm'>PKR</small> 20,000</span>
</div>
{/* Checkout Button */}

<NavLink to='/Checkout' className="block text-center mt-4 w-full bg-[#002882] text-white font-bold py-3 rounded-md">
  CHECKOUT (03)
</NavLink>
            </div>

            <div className=" bg-white p-4  rounded-md border border-[#CCD1D2] ">
{/* Pay With Section */}
<h2 className="text-lg font-semibold mb-2">Pay With</h2>
<div className="flex flex-wrap gap-2 mb-4 w-full">
<img
  src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
  alt="Visa"
  className="h-10 border p-2 rounded-md bg-[#FCFCFC] border-[#CCC]"
/>
<img
  src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg"
  alt="Mastercard"
  className="h-10 border p-2 rounded-md bg-[#FCFCFC] border-[#CCC]"
/>
<img
  src="data:image/png;base64,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"
  alt="Discover"
  className="h-10 border p-2 rounded-md bg-[#FCFCFC] border-[#CCC]"
/>
<img
  src="data:image/png;base64,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"
  alt="American Express"
  className="h-10 border p-2 rounded-md bg-[#FCFCFC] border-[#CCC]"
/>
<img
  src="data:image/jpeg;base64,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"
  alt="JCB"
  className="h-10 border p-2 rounded-md bg-[#FCFCFC] border-[#CCC]"
/>
</div>
<div className="flex gap-2 mb-4">
<img
  src="data:image/png;base64,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"
  alt="Apple Pay"
  className="h-10 border p-2 rounded-md bg-[#FCFCFC] border-[#CCC]"
/>
<img
  src="data:image/png;base64,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"
  alt="Google Pay"
  className="h-10 border p-2 rounded-md bg-[#FCFCFC] border-[#CCC]"
/>
</div>
<hr class="my-4 border-t-[1px] border-[#CCC]" />

{/* Delivery Guarantee Section */}
<h2 className="text-lg font-semibold">Delivery Guarantee</h2>
<ul className="mt-2 text-sm text-gray-700">
<li className="flex items-center">
  <span className="text-green-600 text-lg mr-2">✔</span> Refund if no
  delivery in 30 days
</li>
<li className="flex items-center">
  <span className="text-green-600 text-lg mr-2">✔</span> Refund if items
  damaged
</li>
<li className="flex items-center">
  <span className="text-green-600 text-lg mr-2">✔</span> Refund if package
  lost
</li>
</ul>
            </div>
            </div>
            

        </div>
    </div>
      ):(
        
            <div >
            <div class="bg-white p-4 mt-3">
              <div className='flex justify-between gap-4 min-w-0'>
              <h2 class="font-semibold text-lg flex-1 whitespace-nowrap flex-shrink-0">Cart (04)</h2>
              <div className='flex items-center gap-2 min-w-0'>
              
              <p className='flex items-center max-w-[300px] truncate'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <g clip-path="url(#clip0_7192_111526)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1.66675C11.9891 1.66675 13.8968 2.45692 15.3033 3.86345C16.7098 5.26997 17.5 7.17762 17.5 9.16675C17.5 11.7284 16.1033 13.8251 14.6317 15.3292C13.8963 16.0725 13.094 16.7464 12.235 17.3426L11.88 17.5842L11.7133 17.6951L11.3992 17.8951L11.1192 18.0659L10.7725 18.2676C10.5371 18.4016 10.2709 18.472 10 18.472C9.72913 18.472 9.46291 18.4016 9.2275 18.2676L8.88083 18.0659L8.4475 17.7992L8.2875 17.6951L7.94583 17.4676C7.01915 16.8404 6.15589 16.1242 5.36833 15.3292C3.89667 13.8242 2.5 11.7284 2.5 9.16675C2.5 7.17762 3.29018 5.26997 4.6967 3.86345C6.10322 2.45692 8.01088 1.66675 10 1.66675ZM10 3.33341C8.4529 3.33341 6.96917 3.948 5.87521 5.04196C4.78125 6.13592 4.16667 7.61965 4.16667 9.16675C4.16667 11.1017 5.22667 12.8001 6.55917 14.1634C7.13218 14.7433 7.75145 15.2756 8.41083 15.7551L8.7925 16.0267C8.91583 16.1126 9.03417 16.1926 9.14833 16.2667L9.47333 16.4751L9.75917 16.6492L10 16.7901L10.3792 16.5659L10.685 16.3742C10.8475 16.2709 11.0225 16.1551 11.2075 16.0267L11.5892 15.7551C12.2485 15.2756 12.8678 14.7433 13.4408 14.1634C14.7733 12.8009 15.8333 11.1017 15.8333 9.16675C15.8333 7.61965 15.2188 6.13592 14.1248 5.04196C13.0308 3.948 11.5471 3.33341 10 3.33341ZM10 5.83342C10.8841 5.83342 11.7319 6.1846 12.357 6.80973C12.9821 7.43485 13.3333 8.28269 13.3333 9.16675C13.3333 10.0508 12.9821 10.8987 12.357 11.5238C11.7319 12.1489 10.8841 12.5001 10 12.5001C9.11594 12.5001 8.2681 12.1489 7.64298 11.5238C7.01786 10.8987 6.66667 10.0508 6.66667 9.16675C6.66667 8.28269 7.01786 7.43485 7.64298 6.80973C8.2681 6.1846 9.11594 5.83342 10 5.83342ZM10 7.50008C9.55797 7.50008 9.13405 7.67568 8.82149 7.98824C8.50893 8.3008 8.33333 8.72472 8.33333 9.16675C8.33333 9.60878 8.50893 10.0327 8.82149 10.3453C9.13405 10.6578 9.55797 10.8334 10 10.8334C10.442 10.8334 10.866 10.6578 11.1785 10.3453C11.4911 10.0327 11.6667 9.60878 11.6667 9.16675C11.6667 8.72472 11.4911 8.3008 11.1785 7.98824C10.866 7.67568 10.442 7.50008 10 7.50008Z" fill="#1A1A1A"/>
  </g>
  <defs>
    <clipPath id="clip0_7192_111526">
      <rect width="20" height="20" fill="white"/>
    </clipPath>
  </defs>
</svg> Lahore-Johar Town, Block C</p>
              <button className='cursor-pointer'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 2xl:w-6 2xl:h-6' viewBox="0 0 24 24" fill="none">
                    <path d="M20.5 6H3.5M9.5 11L10 16M14.5 11L14 16" stroke="#666666" stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M6.5 6H6.61C7.01245 5.98972 7.40242 5.85822 7.72892 5.62271C8.05543 5.3872 8.30325 5.05864 8.44 4.68L8.474 4.577L8.571 4.286C8.654 4.037 8.696 3.913 8.751 3.807C8.85921 3.59939 9.01451 3.41999 9.20448 3.28316C9.39444 3.14633 9.6138 3.05586 9.845 3.019C9.962 3 10.093 3 10.355 3H13.645C13.907 3 14.038 3 14.155 3.019C14.3862 3.05586 14.6056 3.14633 14.7955 3.28316C14.9855 3.41999 15.1408 3.59939 15.249 3.807C15.304 3.913 15.346 4.037 15.429 4.286L15.526 4.577C15.6527 4.99827 15.9148 5.36601 16.2717 5.62326C16.6285 5.88051 17.0603 6.01293 17.5 6" stroke="#666666" stroke-width="1.5"/>
                    <path d="M18.374 15.4C18.197 18.054 18.108 19.381 17.243 20.19C16.378 20.999 15.048 21 12.387 21H11.613C8.95299 21 7.62299 21 6.75699 20.19C5.89199 19.381 5.80399 18.054 5.62699 15.4L5.16699 8.5M18.833 8.5L18.633 11.5" stroke="#666666" stroke-width="1.5" stroke-linecap="round"/>
                  </svg>
                  </button>
                  <button className='cursor-pointer'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 2xl:w-6 2xl:h-6' viewBox="0 0 24 24" fill="none">
                    <path d="M20.0009 13.3096L13.6274 19.735C13.2049 20.1608 12.6318 20.4 12.0344 20.4C11.4369 20.4 10.8638 20.1608 10.4413 19.735L4.06781 13.3107C3.54096 12.7843 3.12245 12.1582 2.8363 11.4683C2.55016 10.7784 2.40203 10.0383 2.4004 9.29056C2.39878 8.5428 2.5437 7.80209 2.82684 7.11093C3.10998 6.41978 3.52577 5.79181 4.05033 5.26307C4.57489 4.73432 5.1979 4.31522 5.88359 4.02982C6.56927 3.74442 7.30413 3.59835 8.04597 3.59999C8.78781 3.60163 9.52203 3.75094 10.2065 4.03936C10.8909 4.32779 11.5121 4.74963 12.0344 5.28069C13.0952 4.23803 14.5208 3.65863 16.0024 3.66799C17.4841 3.67734 18.9024 4.27471 19.9502 5.33068C20.9979 6.38665 21.5908 7.8162 21.6003 9.30964C21.6098 10.8031 21.0351 12.2402 20.0009 13.3096Z" stroke="#666666" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  </button>
              </div>
              </div>
               <div class="flex items-center gap-2 mt-3">
                <CheckBox id='selectAllItems' />
                <label htmlFor='selectAllItems' className="text-gray-600 select-none">Select all Items</label>
                 <p className='bg-[#CCC] w-px h-[20px] '></p>
                 <button class="text-[#F04438] font-medium hover:underline cursor-pointer">Delete Selected Items</button>
               </div>
            </div>

            <div className="mt-4 min-h-screen">
            
      <div className=" mt-4">
        
        <div className='p-0 2xl:p-6 flex flex-col gap-4 2xl:gap-6'>
        <div className='flex items-center gap-1.5 bg-[#E6EAF3] p-2 '>
           <CheckBox id='stantardDelItems' checked={cartData.every(store => 
        store.items.filter(item => item.delivery === "Standard").every(item => item.checked)
      )}
      onChange={(e) => {
        cartData.forEach((_, index) => handleDeliveryCheckBox(index, "Standard", e.target.checked));
      }} />
           <label className="text-xl font-medium flex items-center gap-2 select-none" htmlFor='stantardDelItems'>Standard Delivery 
             </label>
           </div>
        {cartData.map((store, index) => (
          store.items.some(item=>item.delivery==='Standard')&&(
            <div key={index} className="bg-white p-3">
            <div className='flex justify-between'>
            <h3 className="font-semibold text-gray-700 flex gap-1.5 items-center">
              <CheckBox id='stStoreSelect' checked={store.items.every(item => item.checked)} // Sab checked hain to store bhi checked hoga
      onChange={() => handleStoreCheckboxChange(index)} />
              <label htmlFor="stStoreSelect" className='flex gap-1.5 items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 21.0002H5M5 21.0002H19M5 21.0002V9.32824M21 21.0002H19M19 21.0002V9.32824M5 9.32824C4.96261 9.30677 4.92592 9.28409 4.89 9.26024L4.35 8.90024C3.96826 8.64562 3.68568 8.26746 3.54967 7.82921C3.41366 7.39096 3.43249 6.91926 3.603 6.49324L4.497 4.25724C4.64549 3.88615 4.90176 3.56806 5.23276 3.34401C5.56376 3.11995 5.9543 3.00022 6.354 3.00024H17.646C18.0457 3.00022 18.4362 3.11995 18.7672 3.34401C19.0982 3.56806 19.3545 3.88615 19.503 4.25724L20.397 6.49324C20.5675 6.91926 20.5863 7.39096 20.4503 7.82921C20.3143 8.26746 20.0317 8.64562 19.65 8.90024L19.11 9.26024C19.0741 9.28409 19.0374 9.30677 19 9.32824M5 9.32824C5.32305 9.51483 5.69184 9.60733 6.0647 9.59532C6.43757 9.5833 6.79964 9.46724 7.11 9.26024L9 8.00024L10.89 9.26024C11.2187 9.47952 11.6049 9.59654 12 9.59654C12.3951 9.59654 12.7813 9.47952 13.11 9.26024L15 8.00024L16.89 9.26024C17.2004 9.46724 17.5624 9.5833 17.9353 9.59532C18.3082 9.60733 18.677 9.51483 19 9.32824" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M13.998 20.9999V15.9999C13.998 15.4694 13.7873 14.9607 13.4123 14.5857C13.0372 14.2106 12.5285 13.9999 11.998 13.9999C11.4676 13.9999 10.9589 14.2106 10.5838 14.5857C10.2088 14.9607 9.99805 15.4694 9.99805 15.9999V20.9999" stroke="#1A1A1A" stroke-width="1.5"/>
            </svg> {store.store}  
              </label> </h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M10 8L14 12L10 16" stroke="#1A1A1A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </div>
            
            <div className='bg-[#CCC] h-px my-4'></div>
            {store.items.filter(stItem=>stItem.delivery==='Standard').map(item => (
              <>
              <div key={item.id} className="flex items-center gap-2 xl:gap-4 mt-2 w-full">
                
                <CheckBox id={item.id} checked={item.checked || false}
          onChange={() => handleItemCheckboxChange(storeIndex, itemIndex)}
                 />
                <img src={item.image} className='w-18 h-18 sm:w-20 sm:h-20 rounded-lg select-none' alt="" />
                <div className="flex-1 flex flex-col gap-3 select-none min-w-0">
                <p className="text-sm w-full min-w-0 overflow-hidden text-ellipsis whitespace-nowrap">
                      {item.name}
                    </p>
                <div className='flex gap-2'>
                    <span className='text-xs text-[#999] bg-[#F2F2F2] px-4 py-1 rounded-[5px] inline-block '>Red/42</span>
                    <span className='text-xs text-[#999] bg-[#F2F2F2] px-4 py-1 rounded-[5px] inline-block '>{item.delivery}</span>
                </div>

                <div className='flex gap-1'>
                <div className='flex xl:flex-row gap-1 items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <g clip-path="url(#clip0_7192_111265)">
    <path d="M13.6126 1.33317C11.6215 2.96428 10.4918 4.41273 10.2233 5.6785C9.95487 6.94428 9.91432 8.14939 10.1017 9.29384L13.6673 9.29384L7.84898 14.6665L2.33398 9.29384L5.72298 9.29384C5.73965 7.17762 6.49887 5.3785 8.00065 3.8965C9.50243 2.41473 11.3731 1.56028 13.6126 1.33317Z" stroke="#F04438" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_7192_111265">
      <rect width="16" height="16" fill="white" transform="translate(0 16) rotate(-90)"/>
    </clipPath>
  </defs>
</svg>
                <span className='text-[#F04438] text-[10px] md:text-xs'>Save PKR 5,999</span>
                </div>
                <p className='bg-[#CCC] h-5 w-px '></p>
                <div className='flex gap-1 items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M6.33424 9.66683L9.66757 6.3335M6.33424 6.3335H6.34157M9.66024 9.66683H9.66757M1.64357 6.2295C1.47824 6.2295 1.32691 6.09483 1.33424 5.9195C1.37891 4.8915 1.50424 4.22216 1.85424 3.69283C2.05388 3.39118 2.30425 3.12638 2.59424 2.91016C3.37091 2.3335 4.46757 2.3335 6.66224 2.3335H9.33824C11.5329 2.3335 12.6296 2.3335 13.4076 2.91016C13.6949 3.1235 13.9456 3.38816 14.1469 3.69283C14.4969 4.22216 14.6222 4.8915 14.6669 5.9195C14.6742 6.09483 14.5229 6.2295 14.3569 6.2295C13.4329 6.2295 12.6836 7.02216 12.6836 8.00016C12.6836 8.97816 13.4329 9.77083 14.3569 9.77083C14.5229 9.77083 14.6742 9.9055 14.6669 10.0815C14.6222 11.1088 14.4969 11.7782 14.1469 12.3082C13.9472 12.6096 13.6968 12.8741 13.4069 13.0902C12.6296 13.6668 11.5329 13.6668 9.33824 13.6668H6.66291C4.46824 13.6668 3.37157 13.6668 2.59357 13.0902C2.30382 12.8739 2.05368 12.6091 1.85424 12.3075C1.50424 11.7782 1.37891 11.1088 1.33424 10.0808C1.32691 9.9055 1.47824 9.77083 1.64357 9.77083C2.56757 9.77083 3.31691 8.97816 3.31691 8.00016C3.31691 7.02216 2.56757 6.2295 1.64357 6.2295Z" stroke="#F04438" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                <span className='text-[10px] md:text-xs text-[#F04438]'>Coupons applicable</span>
                </div>
                
                </div>
                  <div className='flex justify-between'>
                  <div className='flex gap-2'>
                  <p className="text-[#002882] font-bold text-xl 2xl:text-3xl">
                    <small className='text-xs md:text-sm font-medium'>PKR</small> {item.price}</p>
                  <small className="line-through text-gray-400 flex items-center">PKR {item.oldPrice}</small>
                  </div>
                  <div className="flex items-center bg-[#FDFDFD] border border-[#CCD1D2] rounded-full ">
                  <button className="px-1 py-1 cursor-pointer" onClick={()=>decreaseQuantity(item.id)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path d="M11.6654 7H2.33203" stroke="#999999" stroke-width="1.16667" stroke-linecap="round"/>
</svg>
                    </button>
                  <span className="px-0 text-sm">{item.quantity}</span>
                  <button className="px-1 py-1 cursor-pointer" onClick={()=>increaseQuantity(item.id)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path d="M10.4993 7.58317H7.58268V10.4998C7.58268 10.8207 7.32018 11.0832 6.99935 11.0832C6.67852 11.0832 6.41602 10.8207 6.41602 10.4998V7.58317H3.49935C3.17852 7.58317 2.91602 7.32067 2.91602 6.99984C2.91602 6.679 3.17852 6.4165 3.49935 6.4165H6.41602V3.49984C6.41602 3.179 6.67852 2.9165 6.99935 2.9165C7.32018 2.9165 7.58268 3.179 7.58268 3.49984V6.4165H10.4993C10.8202 6.4165 11.0827 6.679 11.0827 6.99984C11.0827 7.32067 10.8202 7.58317 10.4993 7.58317Z" fill="#1A1A1A"/>
</svg>
                  </button>
                </div> 
                  </div>
                </div>
                
              </div>
              <div className='bg-[#CCC] h-px my-4'>
                
              </div>
              </>
            ))}
          </div>
          
          )
          
        ))}

<div className=' bg-gradient-to-b from-[#FFE09E] to-[#FFFCF4] p-3 '>
           <div className='flex items-center gap-1.5 '>
           <CheckBox id='expressDelItems' checked={cartData.every(store => 
        store.items.filter(item => item.delivery === "Express").every(item => item.checked)
      )}
      onChange={(e) => {
        cartData.forEach((_, index) => handleDeliveryCheckBox(index, "Express", e.target.checked));
      }} />
           <label className="text-xl font-medium flex items-center gap-2 select-none" htmlFor='expressDelItems'>Express Delivery 
             </label>
           </div>
             <div className='bg-[#FCFCFC] flex justify-between border border-[#FCEDCD] mb-2 px-2 py-1 rounded-[5px] '>
             <p className="text-gray-800 text-sm">
  To save <span className="text-[#002882] font-medium">PKR 552</span> shipping fee shop 
  <span className="text-[#002882] font-medium"> PKR 1,075</span> more
</p>

              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M10 8L14 12L10 16" stroke="#1A1A1A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
             </div>
           </div>
        {cartData.map((store, index) => (
          store.items.some(item=>item.delivery==='Express')&&(
            <div key={index} className="p-3 mt-3">
            <div className='flex justify-between'>
            <h3 className="font-semibold text-gray-700 flex gap-1.5 items-center">
              <CheckBox id='exStoreSelect' checked={store.items.every(item => item.checked)} // Sab checked hain to store bhi checked hoga
      onChange={() => handleStoreCheckboxChange(index)} />
              <label htmlFor="exStoreSelect" className='flex gap-1.5 items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 21.0002H5M5 21.0002H19M5 21.0002V9.32824M21 21.0002H19M19 21.0002V9.32824M5 9.32824C4.96261 9.30677 4.92592 9.28409 4.89 9.26024L4.35 8.90024C3.96826 8.64562 3.68568 8.26746 3.54967 7.82921C3.41366 7.39096 3.43249 6.91926 3.603 6.49324L4.497 4.25724C4.64549 3.88615 4.90176 3.56806 5.23276 3.34401C5.56376 3.11995 5.9543 3.00022 6.354 3.00024H17.646C18.0457 3.00022 18.4362 3.11995 18.7672 3.34401C19.0982 3.56806 19.3545 3.88615 19.503 4.25724L20.397 6.49324C20.5675 6.91926 20.5863 7.39096 20.4503 7.82921C20.3143 8.26746 20.0317 8.64562 19.65 8.90024L19.11 9.26024C19.0741 9.28409 19.0374 9.30677 19 9.32824M5 9.32824C5.32305 9.51483 5.69184 9.60733 6.0647 9.59532C6.43757 9.5833 6.79964 9.46724 7.11 9.26024L9 8.00024L10.89 9.26024C11.2187 9.47952 11.6049 9.59654 12 9.59654C12.3951 9.59654 12.7813 9.47952 13.11 9.26024L15 8.00024L16.89 9.26024C17.2004 9.46724 17.5624 9.5833 17.9353 9.59532C18.3082 9.60733 18.677 9.51483 19 9.32824" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M13.998 20.9999V15.9999C13.998 15.4694 13.7873 14.9607 13.4123 14.5857C13.0372 14.2106 12.5285 13.9999 11.998 13.9999C11.4676 13.9999 10.9589 14.2106 10.5838 14.5857C10.2088 14.9607 9.99805 15.4694 9.99805 15.9999V20.9999" stroke="#1A1A1A" stroke-width="1.5"/>
            </svg> {store.store}  
              </label> </h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M10 8L14 12L10 16" stroke="#1A1A1A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </div>
            
         <div className='bg-[#CCC] h-px my-4'></div>
            {store.items.filter(stItem=>stItem.delivery==='Express').map(item => (
              <>
              <div key={item.id} className="flex items-center gap-2 xl:gap-4 mt-2 w-full">
                
                <CheckBox id={item.id} checked={item.checked || false}
          onChange={() => handleItemCheckboxChange(storeIndex, itemIndex)}
                 />
                <img src={item.image} className='w-18 h-18 sm:w-20 sm:h-20 rounded-lg select-none' alt="" />
                <div className="flex-1 flex flex-col gap-3 select-none min-w-0">
                <p className="text-sm w-full min-w-0 overflow-hidden text-ellipsis whitespace-nowrap">
                      {item.name}
                    </p>
                <div className='flex gap-2'>
                    <span className='text-xs text-[#999] bg-[#F2F2F2] px-4 py-1 rounded-[5px] inline-block '>Red/42</span>
                    <span className='text-xs text-[#999] bg-[#F2F2F2] px-4 py-1 rounded-[5px] inline-block '>{item.delivery}</span>
                </div>

                <div className='flex gap-1'>
                <div className='flex xl:flex-row gap-1 items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <g clip-path="url(#clip0_7192_111265)">
    <path d="M13.6126 1.33317C11.6215 2.96428 10.4918 4.41273 10.2233 5.6785C9.95487 6.94428 9.91432 8.14939 10.1017 9.29384L13.6673 9.29384L7.84898 14.6665L2.33398 9.29384L5.72298 9.29384C5.73965 7.17762 6.49887 5.3785 8.00065 3.8965C9.50243 2.41473 11.3731 1.56028 13.6126 1.33317Z" stroke="#F04438" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_7192_111265">
      <rect width="16" height="16" fill="white" transform="translate(0 16) rotate(-90)"/>
    </clipPath>
  </defs>
</svg>
                <span className='text-[#F04438] text-[10px] md:text-xs'>Save PKR 5,999</span>
                </div>
                <p className='bg-[#CCC] h-5 w-px '></p>
                <div className='flex gap-1 items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M6.33424 9.66683L9.66757 6.3335M6.33424 6.3335H6.34157M9.66024 9.66683H9.66757M1.64357 6.2295C1.47824 6.2295 1.32691 6.09483 1.33424 5.9195C1.37891 4.8915 1.50424 4.22216 1.85424 3.69283C2.05388 3.39118 2.30425 3.12638 2.59424 2.91016C3.37091 2.3335 4.46757 2.3335 6.66224 2.3335H9.33824C11.5329 2.3335 12.6296 2.3335 13.4076 2.91016C13.6949 3.1235 13.9456 3.38816 14.1469 3.69283C14.4969 4.22216 14.6222 4.8915 14.6669 5.9195C14.6742 6.09483 14.5229 6.2295 14.3569 6.2295C13.4329 6.2295 12.6836 7.02216 12.6836 8.00016C12.6836 8.97816 13.4329 9.77083 14.3569 9.77083C14.5229 9.77083 14.6742 9.9055 14.6669 10.0815C14.6222 11.1088 14.4969 11.7782 14.1469 12.3082C13.9472 12.6096 13.6968 12.8741 13.4069 13.0902C12.6296 13.6668 11.5329 13.6668 9.33824 13.6668H6.66291C4.46824 13.6668 3.37157 13.6668 2.59357 13.0902C2.30382 12.8739 2.05368 12.6091 1.85424 12.3075C1.50424 11.7782 1.37891 11.1088 1.33424 10.0808C1.32691 9.9055 1.47824 9.77083 1.64357 9.77083C2.56757 9.77083 3.31691 8.97816 3.31691 8.00016C3.31691 7.02216 2.56757 6.2295 1.64357 6.2295Z" stroke="#F04438" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                <span className='text-[10px] md:text-xs text-[#F04438]'>Coupons applicable</span>
                </div>
                
                </div>
                  <div className='flex justify-between'>
                  <div className='flex gap-2'>
                  <p className="text-[#002882] font-bold text-xl 2xl:text-3xl">
                    <small className='text-xs md:text-sm font-medium'>PKR</small> {item.price}</p>
                  <small className="line-through text-gray-400 flex items-center">PKR {item.oldPrice}</small>
                  </div>
                  <div className="flex items-center bg-[#FDFDFD] border border-[#CCD1D2] rounded-full ">
                  <button className="px-1 py-1 cursor-pointer" onClick={()=>decreaseQuantity(item.id)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path d="M11.6654 7H2.33203" stroke="#999999" stroke-width="1.16667" stroke-linecap="round"/>
</svg>
                    </button>
                  <span className="px-0 text-sm">{item.quantity}</span>
                  <button className="px-1 py-1 cursor-pointer" onClick={()=>increaseQuantity(item.id)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path d="M10.4993 7.58317H7.58268V10.4998C7.58268 10.8207 7.32018 11.0832 6.99935 11.0832C6.67852 11.0832 6.41602 10.8207 6.41602 10.4998V7.58317H3.49935C3.17852 7.58317 2.91602 7.32067 2.91602 6.99984C2.91602 6.679 3.17852 6.4165 3.49935 6.4165H6.41602V3.49984C6.41602 3.179 6.67852 2.9165 6.99935 2.9165C7.32018 2.9165 7.58268 3.179 7.58268 3.49984V6.4165H10.4993C10.8202 6.4165 11.0827 6.679 11.0827 6.99984C11.0827 7.32067 10.8202 7.58317 10.4993 7.58317Z" fill="#1A1A1A"/>
</svg>
                  </button>
                </div> 
                  </div>
                </div>
                
              </div>
              <div className='bg-[#CCC] h-px my-4'>
                
              </div>
              </>
            ))}
          </div>
          )
          
        ))}
        </div>
      </div>
    </div>
    <div className='p-2 fixed bottom-0 bg-white w-full z-1050'>
    <button className="flex items-center justify-between mt-4 border bg-[#E6EAF3] border-gray-300 rounded-md px-3 py-2 cursor-pointer w-full" onClick={() => handleOpen("availableOffers")}>
<div className="flex items-center space-x-2 " >
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<g clip-path="url(#clip0_7213_113152)">
<path d="M7.75913 16.2412L16.3306 7.66978M9.99455 1.71092C10.5739 1.23954 11.298 0.982178 12.0448 0.982178C12.7917 0.982178 13.5158 1.23954 14.0951 1.71092L14.666 2.17549L15.3911 2.05892C16.1287 1.94016 16.8846 2.07922 17.5316 2.45267C18.1786 2.82613 18.6771 3.41115 18.9431 4.1092L19.2037 4.79492L19.8911 5.0572C20.5895 5.32296 21.1749 5.82134 21.5487 6.46835C21.9225 7.11537 22.0618 7.87146 21.9431 8.6092L21.8266 9.33435L22.2894 9.9052C22.7608 10.4845 23.0182 11.2086 23.0182 11.9555C23.0182 12.7024 22.7608 13.4264 22.2894 14.0058L21.8266 14.5766L21.9431 15.3018C22.0619 16.0393 21.9228 16.7952 21.5494 17.4422C21.1759 18.0892 20.5909 18.5877 19.8928 18.8538L19.2071 19.1161L18.9448 19.8018C18.6788 20.4998 18.1803 21.0849 17.5333 21.4583C16.8863 21.8318 16.1304 21.9708 15.3928 21.8521L14.6677 21.7355L14.0968 22.2001C13.5175 22.6714 12.7934 22.9288 12.0466 22.9288C11.2997 22.9288 10.5756 22.6714 9.99627 22.2001L9.42541 21.7372L8.70027 21.8521C7.96273 21.9708 7.20681 21.8318 6.55982 21.4583C5.91283 21.0849 5.41432 20.4998 5.14827 19.8018L4.88598 19.1161L4.20027 18.8538C3.50222 18.5877 2.91719 18.0892 2.54374 17.4422C2.17028 16.7952 2.03122 16.0393 2.14998 15.3018L2.26655 14.5766L1.80198 14.0058C1.3306 13.4264 1.07324 12.7024 1.07324 11.9555C1.07324 11.2086 1.3306 10.4845 1.80198 9.9052L2.26484 9.33435L2.14998 8.6092C2.03111 7.87188 2.16993 7.11612 2.54305 6.46916C2.91618 5.8222 3.50082 5.32356 4.19855 5.0572L4.88427 4.79663L5.14656 4.1092C5.41231 3.41083 5.91069 2.82543 6.5577 2.45165C7.20472 2.07786 7.96081 1.93856 8.69855 2.0572L9.4237 2.17378L9.99455 1.71092Z" stroke="#002882" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.61691 9.38396C8.84424 9.38396 9.06225 9.29366 9.223 9.13291C9.38375 8.97217 9.47405 8.75415 9.47405 8.52682C9.47405 8.29949 9.38375 8.08147 9.223 7.92073C9.06225 7.75998 8.84424 7.66968 8.61691 7.66968C8.38958 7.66968 8.17156 7.75998 8.01082 7.92073C7.85007 8.08147 7.75977 8.29949 7.75977 8.52682C7.75977 8.75415 7.85007 8.97217 8.01082 9.13291C8.17156 9.29366 8.38958 9.38396 8.61691 9.38396ZM15.4741 16.2411C15.7014 16.2411 15.9194 16.1508 16.0801 15.9901C16.2409 15.8293 16.3312 15.6113 16.3312 15.384C16.3312 15.1566 16.2409 14.9386 16.0801 14.7779C15.9194 14.6171 15.7014 14.5268 15.4741 14.5268C15.2467 14.5268 15.0287 14.6171 14.868 14.7779C14.7072 14.9386 14.6169 15.1566 14.6169 15.384C14.6169 15.6113 14.7072 15.8293 14.868 15.9901C15.0287 16.1508 15.2467 16.2411 15.4741 16.2411Z" stroke="#002882" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_7213_113152">
  <rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
  <span className="text-sm font-medium text-[#002882]">
    View Available Offers
  </span>
</div>

<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M10 8L14 12L10 16" stroke="#002882" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>
{openPopup==='availableOffers' && (
        <div
          className={`fixed inset-0 z-1050 bg-[rgba(0,0,0,0.3)]  bg-opacity-50
            flex items-end justify-center transition-opacity duration-300 ${
            isAnimating ? "opacity-100" : "opacity-0"
          }`}
          onClick={handleClose}
        >
          {/* Popup Content */}
          
          <div
            className={`w-full p-6 bg-white rounded-t-2xl shadow-lg transform transition-transform duration-300 ${
              isAnimating ? "translate-y-0" : "translate-y-full"
            }`}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            
          >
            <div className="flex justify-between items-center mb-3">
            <h2 className="text-2xl font-bold text-center">Available Offers</h2>
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
      <div className="mt-4">
        <h3 className="font-semibold text-lg">Coupon Offers</h3>

        <div className="border border-[#12B76A] rounded-lg p-3 mt-3 relative bg-[#F6FEF9]">
          <div className="flex justify-between items-center">
            <span className="text-[#12B76A] font-bold text-lg">10% OFF</span>
            <span className="text-[#12B76A] text-sm">Expire on 28 Nov 2024</span>
          </div>
          <p className="text-[#12B76A] text-sm">Get Free Shipping over RS. 2,559 Order</p>
          <div className="flex justify-between mt-3">
            <button className=" bg-[#D1FADF] text-[#12B76A] px-3 py-1 rounded-md text-sm">T&C</button>
            <button className="bg-green-500 text-[#D1FADF] px-4 py-1 rounded-md text-sm">Apply</button>
          </div>
          <div className="absolute top-1/2 -left-3 w-5 h-5 bg-[#FCFCFC] border-r-4 border-green-500 rounded-full"></div>
          <div className="absolute top-1/2 -right-3 w-5 h-5 bg-[#FCFCFC] border-l-4 border-green-500 rounded-full"></div>
        </div>

        <div className="border border-[#999] rounded-lg  mt-3 relative bg-[#F2F2F2] ">
          <div className="flex justify-between items-center px-3 pt-3">
            <span className="text-[#999] font-bold text-lg">Free Ship</span>
            <span className="text-[#999] text-sm">Expire on 28 Nov 2024</span>
          </div>
          <p className="text-[#999] text-sm px-3 pb-3">Get Free Shipping over RS. 2,559 Order</p>
          <div className="flex justify-between mt-3">
          
          <button className="bg-[#999] text-[#FCFCFC] px-4 py-1 rounded-md text-sm flex gap-2 items-center w-full"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path d="M8.375 8.375L8.40917 8.35833C8.51602 8.30495 8.63594 8.2833 8.75472 8.29596C8.8735 8.30862 8.98616 8.35505 9.07937 8.42976C9.17258 8.50446 9.24242 8.60432 9.28064 8.71749C9.31885 8.83066 9.32384 8.95242 9.295 9.06833L8.705 11.4317C8.67595 11.5476 8.68078 11.6695 8.71891 11.7828C8.75704 11.8961 8.82687 11.9961 8.92011 12.071C9.01336 12.1458 9.12611 12.1923 9.245 12.205C9.36388 12.2177 9.4839 12.196 9.59083 12.1425L9.625 12.125M16.5 9C16.5 9.98491 16.306 10.9602 15.9291 11.8701C15.5522 12.7801 14.9997 13.6069 14.3033 14.3033C13.6069 14.9997 12.7801 15.5522 11.8701 15.9291C10.9602 16.306 9.98491 16.5 9 16.5C8.01509 16.5 7.03982 16.306 6.12987 15.9291C5.21993 15.5522 4.39314 14.9997 3.6967 14.3033C3.00026 13.6069 2.44781 12.7801 2.0709 11.8701C1.69399 10.9602 1.5 9.98491 1.5 9C1.5 7.01088 2.29018 5.10322 3.6967 3.6967C5.10322 2.29018 7.01088 1.5 9 1.5C10.9891 1.5 12.8968 2.29018 14.3033 3.6967C15.7098 5.10322 16.5 7.01088 16.5 9ZM9 5.875H9.00667V5.88167H9V5.875Z" stroke="#FCFCFC" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg> This voucher is not applicable on selected items</button>
          </div>
          <div className="absolute top-1/2 -left-3 w-5 h-5 bg-[#FCFCFC] border-r-4 border-green-500 rounded-full"></div>
          <div className="absolute top-1/2 -right-3 w-5 h-5 bg-[#FCFCFC] border-l-4 border-green-500 rounded-full"></div>
        </div>
      </div>

      {/* Bank Offers */}
      <div className="mt-6">
        <h3 className="font-semibold text-lg">Bank Offers</h3>

        <div className="border flex border-[#2E90FA] rounded-lg mt-3 relative bg-[#D1E9FF] ">
        <div className='p-3 flex flex-col justify-center'>
        <span className="text-[#175CD3] font-bold text-lg ">10% OFF</span>
        <span className="text-[#175CD3] text-sm">No Min Spend</span>
        </div>
         <div className='flex flex-col items-center justify-between relative mx-3'>
           <div className="absolute -top-3  w-5 h-5 bg-[#FCFCFC] border-b-4 border-[#2E90FA] rounded-full"></div>
           <div className='w-px h-full border-dashed border-l-[1px] border-[#0BA5EC]'></div>
           <div className="absolute -bottom-3  w-5 h-5 bg-[#FCFCFC] border-t-4 border-[#2E90FA] rounded-full"></div>
         </div>
          <div className="flex justify-between p-3 items-end">
            
          <div className="flex flex-col justify-between mt-3">
          <span className="text-[#175CD3] text-sm">Bank Of Punjab</span>
            <p className="text-[#175CD3] text-sm">Extra 15% off. Applied automatically at checkout.</p>
          <p className="text-[#175CD3] text-xs">From: 26/11/2024 | To: 28/11/2024</p>
          </div>
          <button className="bg-[#F5FAFF] text-[#2E90FA] px-3 py-1 rounded-md text-sm">T&C</button>
          </div>
          
          
        </div>
      </div>

    </div>
    
          </div>
        </div>
      )}
      <div className='flex gap-1 justify-between mt-3'>
        <div className='flex gap-1.5 items-center'>
          <CheckBox id='mobAll' />
          <label htmlFor='mobAll' className='select-none'>All</label>
        </div>
        <div className='flex gap-3 items-center'>
          <button className='text-[#1A1A1A] text-xl flex items-center' onClick={()=>handleOpen("summery")}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M16 10L12 14L8 10" stroke="#1A1A1A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg> PKR 20,000
          </button>
        
          
          <NavLink to='/Checkout' className='bg-[#002882] text-white px-4 py-1 rounded-[5px] text-sm'>Checkout</NavLink>
        </div>
        {openPopup==='summery' && (
        <div
          className={`fixed inset-0 z-1050 bg-[rgba(0,0,0,0.3)]  bg-opacity-50
            flex items-end justify-center transition-opacity duration-300 ${
            isAnimating ? "opacity-100" : "opacity-0"
          }`}
          onClick={handleClose}
        >
          {/* Popup Content */}
          
          <div
            className={`w-full p-6 bg-white rounded-t-2xl shadow-lg transform transition-transform duration-300 ${
              isAnimating ? "translate-y-0" : "translate-y-full"
            }`}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            
          >
            <div className="flex justify-between items-center mb-3">
            <h2 className="text-2xl font-bold text-center">Summery</h2>
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
           <div className="mt-4 text-sm">
           <div className="flex justify-between text-gray-800 mt-2 ">
  <span className='font-medium'>Subtotal</span>
  <span>PKR 20,000</span>
</div>
<div className="flex justify-between text-[#1A1A1A] font-medium">
  <span>Item(s) Total</span>
  <span className="line-through text-[#999] ">PKR 24,900</span>
</div>
<div className="flex justify-between mt-2">
  <span className='font-medium'>Item(s) Discount</span>
  <span className='text-[#F04438]'>-PKR 4,900</span>
</div>
<div className="flex justify-between text-gray-800 mt-2 text-base font-semibold">
  <span>Total</span>
  <span>PKR 20,000</span>
</div>
</div>
    </div>
    
          </div>
        </div>
      )}
      </div>
    </div>
            </div>
            
        
      )}
        
        <div class="text-xl md:text-2xl 2xl:text-4xl font-bold flex gap-1 justify-center mb-4">
  <span class="text-[#F04438]">MORE</span> 
  <span class="text-black">TO LOVE</span>
</div>
<MoreToLove/>
    </div>
  )
}

export default AddToCart