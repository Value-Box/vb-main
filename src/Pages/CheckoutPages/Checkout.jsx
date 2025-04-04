import React, { useEffect } from "react";
import { useState} from "react";
import { NavLink } from 'react-router-dom';

import FormButton from '../../Components/FormButton';
import Input from '../../Components/Input';
import CheckBox from '../../Components/CheckBox';
import SAsvg from "/src/Images/SAsvg.svg";
import jazzcash from "/src/Images/jazzcash.svg";
import CheckoutDt1 from "/src/Images/CheckoutDt1.png";
import CheckoutDt2 from "/src/Images/CheckoutDt2.png";
import CheckoutDt3 from "/src/Images/CheckoutDt3.png";
import Faysalbank from "/src/Images/faysalbank.png";
import Alfalahbank from "/src/Images/Alfalah.png";
import Meezanbank from "/src/Images/Meezanbank.png";
import Askaribank from "/src/Images/Askaribank.png";
import Select from "../../Components/Select";

function Checkout() {
  const [selectedValue, setSelectedValue] = useState(""); // State for selected value

  const handleChange = (event) => {
    setSelectedValue(event.target.value); // Update state on change
  };
  const [selectedOption, setSelectedOption] = useState("");

  const options = [
    { value: "option1", label: "Option1" },
    { value: "option2", label: "Option2" },
    { value: "option3", label: "Option3" },
  ];
  
  const [mapTrue,isMapTrue]=useState(false)
  const collectionPoint = {
    name: "ValueBox Shop Lahore - Model Town",
    address: "Aurangzeb Block New Garden Town, ValueBox Shop, Shop no. 79, Block B, Lahore - Faisal Town, Punjab",
    phone: "021-111-456132",
    openingHours: "11:00 - 20:00",
  };

 
  const [imageFront, setImageFront] = useState(null);
  const [imageBack, setImageBack] = useState(null);

  const handleImageChange = (event, setImage) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const removeImage = (setImage) => {
    setImage(null); // Remove the selected image
  };

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
      const [selected, setSelected] = useState(null);
      const [selectedPayment, setSelectedPayment] = useState(null);
      
      const handleCheckboxChange = (value) => {
        setSelected(value);
        setSelectedPayment(value === selectedPayment ? null : value);
      };
        const [cnic, setCnic] = useState("");
         
       
         const handleCnicChange = (e) => {
          const value = e.target.value.replace(/[^0-9-]/g, ""); // Sirf numbers aur dashes allow
          setCnic(value);
        };

        const [installmentPhone, setInstallmentPhone] = useState("");

        const handlePhoneChange = (e) => {
          let value = e.target.value.replace(/[^0-9+]/g, ""); // Sirf numbers aur "+" allow
          if (!value.startsWith("+92")) {
            value = "+92"; // Ensure ke hamesha "+92" se shuru ho
          }
          setInstallmentPhone(value);
        };
        
      // modal 1
      const [isModalOpen, setIsModalOpen] = useState(false);
      const collectionPoints = [
        {
          name: "ValueBox Shop Lahore - Model Town",
          address: "Aurangzeb Block New Garden Town, ValueBox Shop, Shop no. 79, Block B, Lahore - Faisal Town, Punjab",
          region: "Punjab, Lahore - Faisal Town, Block B",
          openingHours: "11:00:00 - 20:00:00",
          phone: "021-123-456789",
        },
        {
          name: "ValueBox Shop Lahore - Model Town",
          address: "Aurangzeb Block New Garden Town, ValueBox Shop, Shop no. 79, Block B, Lahore - Faisal Town, Punjab",
          region: "Punjab, Lahore - Faisal Town, Block B",
          openingHours: "11:00:00 - 20:00:00",
          phone: "021-123-456789",
        },
        {
          name: "ValueBox Shop Lahore - Model Town",
          address: "Aurangzeb Block New Garden Town, ValueBox Shop, Shop no. 79, Block B, Lahore - Faisal Town, Punjab",
          region: "Punjab, Lahore - Faisal Town, Block B",
          openingHours: "11:00:00 - 20:00:00",
          phone: "021-123-456789",
        },
      ];
// modal 2
const [isOpen, setIsOpen] = useState(false);

const [formOpen, setFormOpen] = useState(false);
// add address form
const [locationType, setLocationType] = useState("home");
  const [defaultShipping, setDefaultShipping] = useState(false);
  const [defaultBilling, setDefaultBilling] = useState(true);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  };
  // modal 3
const [isInstalmentModalOpen, setIsInstalmentModalOpen] = useState(false);
const [selectedBank, setSelectedBank] = useState("faysal"); // Default Bank

const bankData = {
  faysal: {
    name: "Faysal Bank Islami",
    plans: [
      { period: "Down Payment", interest: "-", fee: "PKR 12,000" },
      { period: "6", interest: "0%", fee: "PKR 6,000" },
      { period: "12", interest: "0%", fee: "PKR 6,000" },
      { period: "24", interest: "0%", fee: "PKR 6,000" },
      { period: "36", interest: "0%", fee: "PKR 6,000" },
    ],
  },
  alfalah: {
    name: "Bank Alfalah",
    plans: [
      { period: "Down Payment", interest: "-", fee: "PKR 10,000" },
      { period: "6", interest: "1%", fee: "PKR 5,500" },
      { period: "12", interest: "1%", fee: "PKR 5,500" },
      { period: "24", interest: "1%", fee: "PKR 5,500" },
      { period: "36", interest: "1%", fee: "PKR 5,500" },
    ],
  },
  meezan: {
    name: "Meezan",
    plans: [
      { period: "Down Payment", interest: "-", fee: "PKR 15,000" },
      { period: "6", interest: "0.5%", fee: "PKR 7,000" },
      { period: "12", interest: "0.5%", fee: "PKR 7,000" },
      { period: "24", interest: "0.5%", fee: "PKR 7,000" },
      { period: "36", interest: "0.5%", fee: "PKR 7,000" },
    ],
  },
  askari: {
    name: "Askari",
    plans: [
      { period: "Down Payment", interest: "-", fee: "PKR 15,000" },
      { period: "6", interest: "2.5%", fee: "PKR 7,000" },
      { period: "12", interest: "2.5%", fee: "PKR 7,000" },
      { period: "24", interest: "2.5%", fee: "PKR 7,000" },
      { period: "36", interest: "2.5%", fee: "PKR 7,000" },
    ],
  },
};
// modal 4
const [isCardModalOpen, setIsCardModalOpen] = useState(false);
 const [billingAddressOpen, setbillingAddressOpen] = useState(false);
// modal 5
const [showOffersModal, setShowOffersModal] = useState(false);
// mobile view
// delivery popup
 
// available offer
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
     
    // delivery type popup
    const [deliveryTypePopup, setDeliveryTypePopup] = useState(false);
  const [showShippingPopup, setShowShippingPopup] = useState(false);

  useEffect(() => {
    if (deliveryTypePopup) {
      setTimeout(() => setShowShippingPopup(true), 10); // Small delay for animation
    } else {
      setShowShippingPopup(false);
    }
  }, [deliveryTypePopup]);

   // invoice and contact info Code popup
   const [infoPopup, setinfoPopup] = useState(false);
   const [showShippingPopup2, setShowShippingPopup2] = useState(false);
 
   useEffect(() => {
     if (infoPopup) {
       setTimeout(() => setShowShippingPopup2(true), 10); // Small delay for animation
     } else {
       setShowShippingPopup2(false);
     }
   }, [infoPopup]);

    // Promo Code popup
    const [promoCodePopup, setpromoCodePopup] = useState(false);
    const [showShippingPopup1, setShowShippingPopup1] = useState(false);
  
    useEffect(() => {
      if (promoCodePopup) {
        setTimeout(() => setShowShippingPopup1(true), 10); // Small delay for animation
      } else {
        setShowShippingPopup1(false);
      }
    }, [promoCodePopup]);
    return (
    <>
 <div className="w-full p-7.5 bg-[#FCFCFC] hidden md:flex justify-center">
      <div className="flex  w-full flex-col items-start md:flex-row gap-10">
        {/* Left Section - col-9 */}
        <div className="w-full md:w-3/4 space-y-5">
          {/* Two Equal Columns inside col-9 */}
          <div className="flex flex-col md:flex-row gap-5">
            <div className="w-full md:w-1/2 flex flex-col bg-white p-5 rounded-[10px] border-1 border-[#CCC] gap-5">
              <h3 className="text-[24px] font-semibold">Shippind Address</h3>
              <div className="relative p-2.5 rounded-[10px] border-[1px] border-dashed border-gray-400 pl-5 space-y-[5px]">
              <div className="flex justify-between items-center">
              <span className="text-[16px] font-semibold">
              Farman Haris <span className="mx-2 text-[#999] font-normal">|</span> <span className="text-[#999] text-[14px] font-normal">+92123456789</span>
              </span>
              <button className="flex gap-1 bg-transparent text-[#002882]"  onClick={() => setIsOpen(true)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M13 3C13.2549 3.00028 13.5 3.09788 13.6854 3.27285C13.8707 3.44782 13.9822 3.68695 13.9972 3.94139C14.0121 4.19584 13.9293 4.44638 13.7657 4.64183C13.6021 4.83729 13.3701 4.9629 13.117 4.993L13 5H5V19H19V11C19.0003 10.7451 19.0979 10.5 19.2728 10.3146C19.4478 10.1293 19.687 10.0178 19.9414 10.0028C20.1958 9.98789 20.4464 10.0707 20.6418 10.2343C20.8373 10.3979 20.9629 10.6299 20.993 10.883L21 11V19C21.0002 19.5046 20.8096 19.9906 20.4665 20.3605C20.1234 20.7305 19.6532 20.9572 19.15 20.995L19 21H5C4.49542 21.0002 4.00943 20.8096 3.63945 20.4665C3.26947 20.1234 3.04284 19.6532 3.005 19.15L3 19V5C2.99984 4.49542 3.19041 4.00943 3.5335 3.63945C3.87659 3.26947 4.34684 3.04284 4.85 3.005L5 3H13ZM19.243 3.343C19.423 3.16365 19.6644 3.05953 19.9184 3.05177C20.1723 3.04402 20.4197 3.13322 20.6103 3.30125C20.8008 3.46928 20.9203 3.70355 20.9444 3.95647C20.9685 4.2094 20.8954 4.46201 20.74 4.663L20.657 4.758L10.757 14.657C10.577 14.8363 10.3356 14.9405 10.0816 14.9482C9.82767 14.956 9.58029 14.8668 9.38972 14.6988C9.19916 14.5307 9.07969 14.2964 9.0556 14.0435C9.03151 13.7906 9.10459 13.538 9.26 13.337L9.343 13.243L19.243 3.343Z" fill="#002882"/>
              </svg> Edit</button>
              </div>
              <p className="text-[#999] text-[14px] font-normal">135- Mian House, Garden Town Lahore </p>
              <p className="text-[#999] text-[14px] font-normal">Lahore - Garden Town, Punjab, Pakistan</p>
              <FormButton
              className="bg-[#F2F2F2] !w-1/5 text-[#999] cursor-pointer border-0"
            >
              Office
            </FormButton>
              </div>
              <div className="flex items-center gap-[10px] p-[10px_15px]  rounded-[5px] bg-[#FEF6E6] cursor-pointer"  onClick={() => setIsModalOpen(true)}>
              <span className="flex flex-col justify-center items-center gap-[10px] p-4 rounded-[5px] border border-[#667EB4] bg-[#FCFCFC]">
              <img src={SAsvg} alt="Icon"/>
              </span>
              <div className="flex flex-col gap-1-">
                <span className="text-[#002882] text-[16px] font-medium">Collect your parcels at a location close to you at a fraction of the delivery fee!</span>
                <span className="text-[#F1B733] text-[16px] font-medium">4 Suggested Collection Point(s) Nearby</span>
              </div>
           </div>
             </div>
           <div className="w-full md:w-1/2 flex flex-col bg-white p-5 rounded-[10px] border-1 border-[#CCC] gap-5">
              <h3 className="text-[20px] font-normal">Delivery Time: 7-11 Business Days</h3>
              <hr className="border-t-[1px] border-[#CCD1D2]" />
            <p className="flex gap-1 text-[18px] items-center font-semibold"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M0 3.75V5H11.875V14.375H8.0275C7.74875 13.3006 6.7825 12.5 5.625 12.5C4.4675 12.5 3.50125 13.3006 3.2225 14.375H2.5V11.25H1.25V15.625H3.2225C3.50125 16.6994 4.4675 17.5 5.625 17.5C6.7825 17.5 7.74875 16.6994 8.0275 15.625H13.2225C13.5013 16.6994 14.4675 17.5 15.625 17.5C16.7825 17.5 17.7488 16.6994 18.0275 15.625H20V10.5275L19.9606 10.4294L18.7106 6.67938L18.575 6.25H13.125V3.75H0ZM0.625 6.25V7.5H6.25V6.25H0.625ZM13.125 7.5H17.6756L18.75 10.7031V14.375H18.0275C17.7488 13.3006 16.7825 12.5 15.625 12.5C14.4675 12.5 13.5013 13.3006 13.2225 14.375H13.125V7.5ZM1.25 8.75V10H5V8.75H1.25ZM5.625 13.75C6.32312 13.75 6.875 14.3019 6.875 15C6.875 15.6981 6.32312 16.25 5.625 16.25C4.92688 16.25 4.375 15.6981 4.375 15C4.375 14.3019 4.92688 13.75 5.625 13.75ZM15.625 13.75C16.3231 13.75 16.875 14.3019 16.875 15C16.875 15.6981 16.3231 16.25 15.625 16.25C14.9269 16.25 14.375 15.6981 14.375 15C14.375 14.3019 14.9269 13.75 15.625 13.75Z" fill="#1A1A1A"/>
            </svg> Logistic Partners</p>
            <div className="flex gap-2.5">
            <span className="flex flex-col justify-center items-center gap-2.5 px-2.5 py-1 rounded-[5px] border border-[#CCC] bg-[#FCFCFC]">
            <img src={CheckoutDt1} alt=""/>
             </span>
             <span className="flex flex-col justify-center items-center gap-2.5 px-2.5 py-1 rounded-[5px] border border-[#CCC] bg-[#FCFCFC]">
            <img src={CheckoutDt2} alt=""/>
            </span>
            <span className="flex flex-col justify-center items-center gap-2.5 px-2.5 py-1 rounded-[5px] border border-[#CCC] bg-[#FCFCFC]">
            <img src={CheckoutDt3} alt=""/>
            </span>
            </div>
            <hr className="border-t-[1px] border-[#CCD1D2]" />
            <div className="flex flex-col gap-2.5">
            <p className="flex gap-1 text-[18px] items-center font-semibold"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 1.25L2.5 3.75V11.25C2.5 15.3926 5.85742 18.75 10 18.75C14.1426 18.75 17.5 15.3926 17.5 11.25V3.75L10 1.25ZM16.0938 11.25C16.0938 14.6152 13.3652 17.3438 10 17.3438C6.63477 17.3438 3.90625 14.6152 3.90625 11.25V4.80469L10 2.65625L16.0938 4.80469V11.25Z" fill="black"/>
            <path d="M7.39015 9.2793C7.32498 9.21383 7.24752 9.16188 7.16222 9.12643C7.07692 9.09099 6.98545 9.07274 6.89308 9.07274C6.80071 9.07274 6.70924 9.09099 6.62394 9.12643C6.53864 9.16188 6.46118 9.21383 6.39601 9.2793C6.33054 9.34447 6.27859 9.42193 6.24315 9.50723C6.2077 9.59253 6.18945 9.68399 6.18945 9.77637C6.18945 9.86874 6.2077 9.96021 6.24315 10.0455C6.27859 10.1308 6.33054 10.2083 6.39601 10.2734L8.92335 12.8008L8.96437 12.8418C9.02601 12.9036 9.09923 12.9526 9.17983 12.986C9.26043 13.0194 9.34684 13.0366 9.4341 13.0366C9.52136 13.0366 9.60776 13.0194 9.68836 12.986C9.76896 12.9526 9.84218 12.9036 9.90382 12.8418L14.2691 8.47656C14.3308 8.41492 14.3798 8.3417 14.4132 8.2611C14.4467 8.1805 14.4639 8.0941 14.4639 8.00684C14.4639 7.91958 14.4467 7.83317 14.4132 7.75257C14.3798 7.67197 14.3308 7.59875 14.2691 7.53711L14.2144 7.48242C14.1527 7.42066 14.0795 7.37167 13.9989 7.33824C13.9183 7.3048 13.8319 7.2876 13.7446 7.2876C13.6574 7.2876 13.571 7.3048 13.4904 7.33824C13.4098 7.37167 13.3366 7.42066 13.2749 7.48242L9.43312 11.3223L7.39015 9.2793Z" fill="black"/>
            </svg>Buy Now Pay Later</p>
            <p className="text-[#666] text-[16px] flex gap-1">
  Installment Offers available up to 36 months
  <a 
    href="#" 
    className="text-[#002882] underline" 
    onClick={(e) => { 
      e.preventDefault(); 
      setIsInstalmentModalOpen(true); 
    }}
  >
    View more details
  </a>
</p>
       </div>
         </div>
          </div>
          <div className="w-full flex flex-col bg-white p-5 rounded-[10px] border-1 border-[#CCC] gap-5">
          <h3 className="text-[24px] font-semibold">Payment Method</h3>
        
          <div className="flex gap-2.5 items-baseline">
           <CheckBox 
           checked={selected === "card"}
           onChange={() => handleCheckboxChange("card")}
           />
           <div className="flex flex-col gap-1">
           <div className="flex gap-2.5 items-center ">
           <span className="flex p-2.5 flex-col justify-center items-center gap-2.5 rounded-[5px] border border-[#CCC] bg-[#FCFCFC]">
           <svg xmlns="http://www.w3.org/2000/svg" width="34" height="24" viewBox="0 0 34 24" fill="none">
             <path d="M7.61331 23.8807V22.2922C7.61331 21.6832 7.24258 21.2861 6.60712 21.2861C6.28945 21.2861 5.94525 21.392 5.70694 21.7362C5.5217 21.445 5.25697 21.2861 4.85983 21.2861C4.59498 21.2861 4.33038 21.3655 4.11848 21.6567V21.3391H3.5625V23.8807H4.11848V22.4775C4.11848 22.0275 4.35679 21.8156 4.72753 21.8156C5.09802 21.8156 5.2835 22.0539 5.2835 22.4775V23.8807H5.83948V22.4775C5.83948 22.0275 6.10409 21.8156 6.44829 21.8156C6.81902 21.8156 7.00427 22.0539 7.00427 22.4775V23.8807H7.61331ZM15.847 21.3391H14.9469V20.5713H14.391V21.3391H13.8879V21.842H14.3908V23.007C14.3908 23.5895 14.6292 23.9336 15.2646 23.9336C15.5029 23.9336 15.7675 23.8543 15.953 23.7484L15.7941 23.2717C15.6352 23.3776 15.45 23.4042 15.3176 23.4042C15.0528 23.4042 14.9469 23.2453 14.9469 22.9805V21.842H15.847V21.3391ZM20.5597 21.286C20.242 21.286 20.0302 21.445 19.8978 21.6567V21.3391H19.3418V23.8807H19.8978V22.451C19.8978 22.0275 20.0831 21.7892 20.4273 21.7892C20.5332 21.7892 20.6656 21.8157 20.7715 21.8421L20.9303 21.3127C20.8244 21.2861 20.6656 21.2861 20.5597 21.2861M13.4378 21.551C13.173 21.3656 12.8024 21.2863 12.4052 21.2863C11.7699 21.2863 11.3463 21.6039 11.3463 22.107C11.3463 22.5306 11.664 22.7688 12.22 22.8483L12.4847 22.8748C12.776 22.9277 12.9348 23.0071 12.9348 23.1396C12.9348 23.3248 12.723 23.4572 12.3523 23.4572C11.9817 23.4572 11.6904 23.3248 11.5051 23.1925L11.2403 23.6161C11.5316 23.8278 11.9287 23.9337 12.3258 23.9337C13.0671 23.9337 13.4908 23.5897 13.4908 23.113C13.4908 22.6629 13.1466 22.4246 12.617 22.3453L12.3523 22.3187C12.114 22.2922 11.9287 22.2394 11.9287 22.0805C11.9287 21.8952 12.114 21.7893 12.4052 21.7893C12.723 21.7893 13.0407 21.9216 13.1995 22.0011L13.4378 21.551ZM28.2111 21.2863C27.8933 21.2863 27.6815 21.4451 27.5491 21.6569V21.3392H26.9931V23.8808H27.5491V22.4512C27.5491 22.0276 27.7345 21.7893 28.0786 21.7893C28.1846 21.7893 28.317 21.8158 28.4229 21.8422L28.5817 21.3128C28.4758 21.2863 28.317 21.2863 28.2111 21.2863ZM21.1157 22.61C21.1157 23.3778 21.6451 23.9337 22.4659 23.9337C22.8365 23.9337 23.1013 23.8544 23.366 23.6426L23.1013 23.1925C22.8895 23.3513 22.6777 23.4307 22.4394 23.4307C21.9893 23.4307 21.6716 23.113 21.6716 22.61C21.6716 22.1335 21.9893 21.8157 22.4394 21.7893C22.6777 21.7893 22.8895 21.8686 23.1013 22.0276L23.366 21.5775C23.1013 21.3656 22.8365 21.2863 22.4659 21.2863C21.6451 21.2863 21.1157 21.8422 21.1157 22.61ZM26.2519 22.61V21.3392H25.6959V21.6569C25.5106 21.4187 25.2458 21.2863 24.9016 21.2863C24.1868 21.2863 23.6308 21.8422 23.6308 22.61C23.6308 23.3778 24.1868 23.9337 24.9016 23.9337C25.2722 23.9337 25.5371 23.8014 25.6959 23.5631V23.8808H26.2519V22.61ZM24.2132 22.61C24.2132 22.1599 24.5045 21.7893 24.981 21.7893C25.4311 21.7893 25.7489 22.1335 25.7489 22.61C25.7489 23.0601 25.4311 23.4307 24.981 23.4307C24.5045 23.4042 24.2132 23.0601 24.2132 22.61ZM17.568 21.2863C16.8267 21.2863 16.2971 21.8157 16.2971 22.61C16.2971 23.4043 16.8265 23.9337 17.5944 23.9337C17.965 23.9337 18.3358 23.8278 18.627 23.5897L18.3622 23.1925C18.1504 23.3513 17.8857 23.4572 17.621 23.4572C17.2768 23.4572 16.9326 23.2984 16.8531 22.8482H18.7329V22.6365C18.7594 21.8157 18.2829 21.2863 17.568 21.2863ZM17.5679 21.7628C17.912 21.7628 18.1504 21.9747 18.2032 22.3718H16.8795C16.9324 22.0276 17.1707 21.7628 17.5679 21.7628ZM31.3615 22.61V20.3331H30.8055V21.6569C30.6201 21.4187 30.3554 21.2863 30.0112 21.2863C29.2964 21.2863 28.7404 21.8422 28.7404 22.61C28.7404 23.3778 29.2964 23.9337 30.0112 23.9337C30.382 23.9337 30.6467 23.8014 30.8055 23.5631V23.8808H31.3615V22.61ZM29.3229 22.61C29.3229 22.1599 29.6141 21.7893 30.0907 21.7893C30.5408 21.7893 30.8585 22.1335 30.8585 22.61C30.8585 23.0601 30.5408 23.4307 30.0907 23.4307C29.6141 23.4042 29.3229 23.0601 29.3229 22.61ZM10.7372 22.61V21.3392H10.1812V21.6569C9.99583 21.4187 9.7311 21.2863 9.3869 21.2863C8.67209 21.2863 8.11611 21.8422 8.11611 22.61C8.11611 23.3778 8.67209 23.9337 9.3869 23.9337C9.75764 23.9337 10.0224 23.8014 10.1812 23.5631V23.8808H10.7372V22.61ZM8.67209 22.61C8.67209 22.1599 8.96334 21.7893 9.43985 21.7893C9.88994 21.7893 10.2077 22.1335 10.2077 22.61C10.2077 23.0601 9.88994 23.4307 9.43985 23.4307C8.96334 23.4042 8.67209 23.0601 8.67209 22.61Z" fill="black"/>
             <path d="M13.252 2.03857H21.5917V17.0236H13.252V2.03857Z" fill="#FF5F00"/>
             <path d="M13.7816 9.53114C13.7816 6.48651 15.2112 3.78597 17.4086 2.03855C15.7937 0.767759 13.7552 0 11.5313 0C6.26247 0 2 4.26247 2 9.53114C2 14.7997 6.26247 19.0623 11.5311 19.0623C13.7551 19.0623 15.7936 18.2945 17.4086 17.0236C15.2112 15.3027 13.7816 12.5758 13.7816 9.53114Z" fill="#EB001B"/>
             <path d="M32.8422 9.53114C32.8422 14.7997 28.5797 19.0623 23.3111 19.0623C21.0871 19.0623 19.0486 18.2945 17.4336 17.0236C19.6575 15.2763 21.0607 12.5758 21.0607 9.53114C21.0607 6.48651 19.631 3.78597 17.4336 2.03855C19.0485 0.767759 21.0871 0 23.3111 0C28.5797 0 32.8422 4.28901 32.8422 9.53114Z" fill="#F79E1B"/>
            </svg>
            </span>
             <span className="text-[#666] text-[18px]">5590********2298</span>            

           </div>
           <div className="flex gap-2.5 items-center ">
           <span className="flex p-2.5 flex-col justify-center items-center gap-2.5 rounded-[5px] border border-[#CCC] bg-[#FCFCFC] cursor-pointer" onClick={() => setIsCardModalOpen(true)}>
           <svg xmlns="http://www.w3.org/2000/svg" width="34" height="24" viewBox="0 0 36 36" fill="none">
          <path d="M9 18H27M18 27L18 9" stroke="#999999" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
           </svg>
            </span>
             <span className="text-black text-[18px] font-medium cursor-pointer" onClick={() => setIsCardModalOpen(true)}>Add New Card</span>            

           </div>
           </div>
       </div>
           <div className="flex gap-2.5 items-center">
           <CheckBox
            checked={selected === "jazzcash"}
            onChange={() => handleCheckboxChange("jazzcash")}
           />
           <span className="flex p-2.5 flex-col justify-center items-center gap-2.5 rounded-[5px] border border-[#CCC] bg-[#FCFCFC]">
           <img src={jazzcash} className="w-[34px] h-[24px]" alt="Icon"/>
            </span>
            <span className="text-black text-[18px] font-medium">JazzCash</span>             

           </div>
           <div className="flex gap-2.5 items-center">
           <CheckBox
           checked={selected === "easypaisa"}
           onChange={() => handleCheckboxChange("easypaisa")}
           />
           <span className="flex p-2.5 flex-col justify-center items-center gap-2.5 rounded-[5px] border border-[#CCC] bg-[#FCFCFC]">
           <svg xmlns="http://www.w3.org/2000/svg" width="34" height="24" viewBox="0 0 32 36" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5461 0.747803C24.2681 0.747803 30.528 5.9315 30.528 12.3259C30.528 18.7203 24.2681 22.6131 16.5461 22.6131C8.93447 22.4587 3.62582 19.9768 0.620117 15.1673C2.24324 6.04772 7.5519 1.24122 16.5461 0.747803ZM16.0253 7.95075C11.5854 8.40012 8.86832 10.5137 7.87412 14.2915C9.2282 15.4859 11.9453 16.1487 16.0253 16.28C20.1242 16.2154 22.6077 15.0203 22.6566 12.2429C22.4007 9.17384 19.417 7.83483 16.0253 7.95075Z" fill="black"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.0380903 18.2151C2.32834 24.7864 8.64454 28.4434 15.1386 28.4434C20.5237 28.4434 24.0935 26.1128 25.9653 22.5953L32 26.3755C29.8966 31.5212 23.6599 35.2523 16.2933 35.2523C7.19955 35.2523 -0.587796 29.1238 0.0349543 18.4673C0.0349543 18.3824 0.0360028 18.2984 0.0380903 18.2151Z" fill="#00C252"/>
</svg>
            </span>
            <span className="text-black text-[18px] font-medium">Easypaisa</span>             

           </div>
           <hr className="border-t-[1px] border-[#CCD1D2]" />
           <div className="flex gap-2.5 items-center">
           <CheckBox
           checked={selected === "cashondelivery"}
           onChange={() => handleCheckboxChange("cashondelivery")}
           />
           <span className="flex p-2.5 flex-col justify-center items-center gap-2.5 rounded-[5px] border border-[#CCC] bg-[#FCFCFC]">
           <svg xmlns="http://www.w3.org/2000/svg" width="34" height="24" viewBox="0 0 36 36" fill="none">
  <path d="M27.75 21.015L27.765 20.9985M11.25 21.015L11.265 20.9985M6 27V15C6 14.2044 6.31607 13.4413 6.87868 12.8787C7.44129 12.3161 8.20435 12 9 12H30C30.7956 12 31.5587 12.3161 32.1213 12.8787C32.6839 13.4413 33 14.2044 33 15V27C33 27.7956 32.6839 28.5587 32.1213 29.1213C31.5587 29.6839 30.7956 30 30 30H9C8.20435 30 7.44129 29.6839 6.87868 29.1213C6.31607 28.5587 6 27.7956 6 27Z" stroke="#1A1A1A" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M6 24H4.5C3.70435 24 2.94129 23.6839 2.37868 23.1213C1.81607 22.5587 1.5 21.7956 1.5 21V9C1.5 8.20435 1.81607 7.44129 2.37868 6.87868C2.94129 6.31607 3.70435 6 4.5 6H25.5C26.2956 6 27.0587 6.31607 27.6213 6.87868C28.1839 7.44129 28.5 8.20435 28.5 9V12M19.5 24C18.7044 24 17.9413 23.6839 17.3787 23.1213C16.8161 22.5587 16.5 21.7956 16.5 21C16.5 20.2044 16.8161 19.4413 17.3787 18.8787C17.9413 18.3161 18.7044 18 19.5 18C20.2956 18 21.0587 18.3161 21.6213 18.8787C22.1839 19.4413 22.5 20.2044 22.5 21C22.5 21.7956 22.1839 22.5587 21.6213 23.1213C21.0587 23.6839 20.2956 24 19.5 24Z" stroke="#1A1A1A" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </span>
            <span className="text-black text-[18px] font-medium">Cash On Delivery</span>             

           </div>
           <hr className="border-t-[1px] border-[#CCD1D2]" />
           <div className="flex gap-2.5 items-center">
           <CheckBox
            checked={selectedPayment === "buynowpaylater"}
            onChange={() => handleCheckboxChange("buynowpaylater")}
           />
           <span className="flex p-2.5 flex-col justify-center items-center gap-2.5 rounded-[5px] border border-[#CCC] bg-[#FCFCFC]">
           <svg xmlns="http://www.w3.org/2000/svg" width="34" height="24" viewBox="0 0 36 36" fill="none">
  <path d="M21 27.75C21 27.75 22.5 27.75 24 30.75C24 30.75 28.7655 23.25 33 21.75M8.25 17.25H8.2365M16.5 29.25H15.75C10.1115 29.25 7.293 29.25 5.4105 27.765C5.11134 27.528 4.8333 27.2655 4.5795 26.9805C3 25.2105 3 22.5555 3 17.25C3 11.9445 3 9.291 4.5795 7.5195C4.8325 7.2355 5.1095 6.9745 5.4105 6.7365C7.293 5.25 10.1115 5.25 15.75 5.25H20.25C25.8885 5.25 28.707 5.25 30.588 6.735C30.89 6.975 31.1675 7.2365 31.4205 7.5195C32.844 9.1155 32.985 11.427 33 15.75V16.5" stroke="#1A1A1A" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M21.75 17.25C21.75 18.2446 21.3549 19.1984 20.6517 19.9017C19.9484 20.6049 18.9946 21 18 21C17.0054 21 16.0516 20.6049 15.3483 19.9017C14.6451 19.1984 14.25 18.2446 14.25 17.25C14.25 16.2554 14.6451 15.3016 15.3483 14.5983C16.0516 13.8951 17.0054 13.5 18 13.5C18.9946 13.5 19.9484 13.8951 20.6517 14.5983C21.3549 15.3016 21.75 16.2554 21.75 17.25Z" stroke="#1A1A1A" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </span>
            <span className="text-black text-[18px] font-medium">Buy Now Pay Later</span>              
           </div>
           {selectedPayment === "buynowpaylater" && (
            <div className="flex flex-col gap-5">
  <div className="flex justify-between gap-10">
           <div className="w-full flex flex-col gap-1">
                <label className="text-gray-600 text-[16px] font-medium">Choose an Installment Partner <span className="text-yellow-400">*</span></label>
                <Select
        options={options}
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
        placeholder="Please Select"
           />
              </div>
              <div className="w-full flex flex-col gap-1">
              <label className="text-gray-600 text-[16px] font-medium">Installment Duration <span className="text-yellow-400">*</span></label>
              <Select
        options={options}
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
        placeholder="Please Select"
      />
              </div>
           </div>
          
           <div className="flex justify-between gap-10">
           <div className="w-full flex flex-col gap-1">
           <label className="text-gray-600 text-[16px] font-medium">Customer CNIC<span className="text-yellow-400">*</span></label>
           <Input 
            type="text" 
            placeholder="XXXX-XXXXXXX-X" 
            value={cnic} 
            onChange={handleCnicChange} 
          />
              </div>
              <div className="w-full flex flex-col gap-1">
              <label className="text-gray-600 text-[16px] font-medium">Customer Phone Number  <span className="text-yellow-400">*</span></label>
              <Input 
  type="text" 
  placeholder="+92312-3456452" 
  value={installmentPhone} 
  onChange={handlePhoneChange} 
  maxLength={13} 
/>
              </div>
           </div>
      <div className="flex justify-between gap-10">
      {/* Front Side Upload */}
      <div className="flex flex-col gap-1 w-full">
        <label className="text-gray-600 text-[16px] font-medium">
          Upload ID Front Side <span className="text-yellow-400">*</span>
        </label>
        <input type="file" accept="image/*" onChange={(e) => handleImageChange(e, setImageFront)} className="hidden" id="file-upload-front" />

        {/* Custom Upload Button */}
        <label htmlFor="file-upload-front" className="flex h-[60px] px-5 py-3 justify-center items-center gap-3 self-stretch rounded-md border border-yellow-500 bg-white cursor-pointer text-[#002882] font-semibold">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
            <path d="M12.5 15V2M12.5 2L15.5 5.5M12.5 2L9.5 5.5" stroke="#002882" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.5 22H16.5C19.328 22 20.743 22 21.621 21.122C22.5 20.242 22.5 18.829 22.5 16V15C22.5 12.172 22.5 10.758 21.621 9.87895C20.853 9.11095 19.675 9.01395 17.5 9.00195M7.5 9.00195C5.325 9.01395 4.147 9.11095 3.379 9.87895C2.5 10.758 2.5 12.172 2.5 15V16C2.5 18.829 2.5 20.243 3.379 21.122C3.679 21.422 4.041 21.619 4.5 21.749" stroke="#002882" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          Upload Image
        </label>

        {/* Image Preview with Close Button */}
        {imageFront && (
          <div className="relative w-32 h-32 mt-3">
            <img src={imageFront} alt="Front Preview" className="w-full h-full rounded-md object-cover border border-gray-300" />
            <button
              className="absolute -top-2 -right-2 bg-[#002882] text-white w-6 h-6 rounded-full flex items-center justify-center shadow-md hover:bg-[#002882]"
              onClick={() => removeImage(setImageFront)}
            >
              ✖
            </button>
          </div>
        )}
      <p className="text-[#999] text-[14px] font-normal italic">Only PNG, JPG and WEBp with File size less then 500kb are accepted.</p>
      </div>

      {/* Back Side Upload */}
      <div className="flex flex-col gap-1 w-full">
        <label className="text-gray-600 text-[16px] font-medium">
          Upload ID Back Side <span className="text-yellow-400">*</span>
        </label>
        <input type="file" accept="image/*" onChange={(e) => handleImageChange(e, setImageBack)} className="hidden" id="file-upload-back" />

        {/* Custom Upload Button */}
        <label htmlFor="file-upload-back" className="flex h-[60px] px-5 py-3 justify-center items-center gap-3 self-stretch rounded-md border border-yellow-500 bg-white cursor-pointer text-[#002882] font-semibold">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
            <path d="M12.5 15V2M12.5 2L15.5 5.5M12.5 2L9.5 5.5" stroke="#002882" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.5 22H16.5C19.328 22 20.743 22 21.621 21.122C22.5 20.242 22.5 18.829 22.5 16V15C22.5 12.172 22.5 10.758 21.621 9.87895C20.853 9.11095 19.675 9.01395 17.5 9.00195M7.5 9.00195C5.325 9.01395 4.147 9.11095 3.379 9.87895C2.5 10.758 2.5 12.172 2.5 15V16C2.5 18.829 2.5 20.243 3.379 21.122C3.679 21.422 4.041 21.619 4.5 21.749" stroke="#002882" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          Upload Image
        </label>

        {/* Image Preview with Close Button */}
        {imageBack && (
          <div className="relative w-32 h-32 mt-3">
            <img src={imageBack} alt="Back Preview" className="w-full h-full rounded-md object-cover border border-gray-300" />
            <button
              className="absolute -top-2 -right-2 bg-[#002882] text-white w-6 h-6 rounded-full flex items-center justify-center shadow-md hover:bg-[#002882]"
              onClick={() => removeImage(setImageBack)}
            >
              ✖
            </button>
          </div>
        )}
         <p className="text-[#999] text-[14px] font-normal italic">Only PNG, JPG and WEBp with File size less then 500kb are accepted.</p>
      </div>
    </div>
    <p className="text-[#999] text-[16px] font-normal flex gap-1 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <g clip-path="url(#clip0_7110_93676)">
    <path d="M10 18.75C7.67936 18.75 5.45376 17.8281 3.81282 16.1872C2.17187 14.5462 1.25 12.3206 1.25 10C1.25 7.67936 2.17187 5.45376 3.81282 3.81282C5.45376 2.17187 7.67936 1.25 10 1.25C12.3206 1.25 14.5462 2.17187 16.1872 3.81282C17.8281 5.45376 18.75 7.67936 18.75 10C18.75 12.3206 17.8281 14.5462 16.1872 16.1872C14.5462 17.8281 12.3206 18.75 10 18.75ZM10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 7.34784 18.9464 4.8043 17.0711 2.92893C15.1957 1.05357 12.6522 0 10 0C7.34784 0 4.8043 1.05357 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C4.8043 18.9464 7.34784 20 10 20Z" fill="#999999"/>
    <path d="M11.1624 8.235L8.29994 8.59375L8.19744 9.06875L8.75994 9.1725C9.12744 9.26 9.19994 9.3925 9.11994 9.75875L8.19744 14.0938C7.95494 15.215 8.32869 15.7425 9.20744 15.7425C9.88869 15.7425 10.6799 15.4275 11.0387 14.995L11.1487 14.475C10.8987 14.695 10.5337 14.7825 10.2912 14.7825C9.94744 14.7825 9.82244 14.5413 9.91119 14.1163L11.1624 8.235ZM11.2499 5.625C11.2499 5.95652 11.1182 6.27446 10.8838 6.50888C10.6494 6.7433 10.3315 6.875 9.99994 6.875C9.66842 6.875 9.35048 6.7433 9.11606 6.50888C8.88164 6.27446 8.74994 5.95652 8.74994 5.625C8.74994 5.29348 8.88164 4.97554 9.11606 4.74112C9.35048 4.5067 9.66842 4.375 9.99994 4.375C10.3315 4.375 10.6494 4.5067 10.8838 4.74112C11.1182 4.97554 11.2499 5.29348 11.2499 5.625Z" fill="#999999"/>
  </g>
  <defs>
    <clipPath id="clip0_7110_93676">
      <rect width="20" height="20" fill="white"/>
    </clipPath>
  </defs>
</svg> Note: Installments are available for one product at a time during checkout</p>
            </div>
         
      )}
       
  
       </div>
            <div className="w-full flex flex-col bg-white p-5 rounded-[10px] border-1 border-[#CCC] gap-5">
            <div className="w-full flex flex-col gap-1">
           <label className="text-gray-600 text-[16px] font-medium">Order Note (Optional)<span className="text-yellow-400">*</span></label>
           <Input type="text" placeholder="Please Input" />
              </div>
             <div>
             <h3 className="text-[20px] font-semibold">ORDER ITEMS</h3>
             {cartData.map((store, index) => (
       <div key={index} >
     {store.items.map((item,storeIndex) => (
          <>
          <div key={item.id} className="flex items-center gap-2 xl:gap-4 mt-2 w-full">
            
         
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
          <div className='bg-[#CCC] h-px my-4'></div>
          </>
        ))}
      </div>
    ))}
    </div>
      </div>
        </div>

        {/* Right Section - col-3 */}
        <div className="sticky top-20 w-full md:w-1/4 flex flex-col bg-white p-5 rounded-[10px] border-1 border-[#CCC] gap-5 min-h-0 h-auto">
        <h1 className='text-md md:text-xl 2xl:text-2xl font-bold'>Order Summery</h1>
        
    <div className="flex items-center ">
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
  <div className="flex items-center justify-between border bg-[#E6EAF3] border-gray-300 rounded-md px-3 py-2 cursor-pointer"  onClick={() => setShowOffersModal(true)}>
    <div className="flex items-center space-x-2 cursor-pointer">
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
  </div>
  <div className="flex flex-col gap-5 text-sm">
    <div className="flex justify-between text-[#1A1A1A] font-medium">
      <span>Item(s) Total</span>
      <span className="line-through text-[#999] ">PKR 24,900</span>
    </div>
    <div className="flex justify-between ">
      <span className='font-medium'>Item(s) Discount</span>
      <span className='text-[#F04438]'>-PKR 4,900</span>
    </div>
    <div className="flex justify-between text-gray-800 ">
      <span className='font-medium'>Subtotal</span>
      <span>PKR 20,000</span>
    </div>
  </div>
 <hr className="border-t-[1px] border-[#CCD1D2]" />
 <div className="text-sm flex flex-col gap-2.5">
    <div className="flex justify-between">
      <span className="text-black font-semibold">Shipping Fee</span>
      <span className="text-[#12B76A] text-sm">FREE</span>
    </div>
    <p className="text-[#999] text-[14px] font-normal flex gap-2">
    <svg xmlns="http://www.w3.org/2000/svg" className='' width="30" height="30" viewBox="0 0 16 16" fill="none">
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
  <hr className="border-t-[1px] border-[#CCD1D2]" />
  <div className="text-sm flex flex-col gap-2.5">
    <div className="flex justify-between">
      <span className="text-black font-semibold">Plant with ValueBox</span>
   </div>
    <p className=" flex text-[#999] text-[14px] gap-2">
    <CheckBox/>
       We invite you to plant a tree for RS. 10
    </p>
  </div>
  <hr className="border-t-[1px] border-[#CCD1D2]" />
  <span className="flex gap-1 items-center bg-[#D1FADF] p-2.5 rounded-[5px] text-[#12B76A] text-base font-medium"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M7.1452 14.1603H16.9138C17.2398 14.1603 17.5245 13.8924 17.5245 13.5324C17.5245 13.1724 17.2398 12.9046 16.9138 12.9046H7.28734C6.8102 12.9046 6.51734 12.5696 6.44199 12.0592L6.30806 11.1803H16.9302C18.1523 11.1803 18.7802 10.4267 18.9559 9.22993L19.6256 4.80172C19.6435 4.69659 19.6547 4.59042 19.6591 4.48386C19.6591 4.08208 19.3577 3.80565 18.8973 3.80565H5.22842L5.06913 2.74279C4.98556 2.09815 4.75127 1.77136 3.8977 1.77136H0.959129C0.624487 1.77136 0.339844 2.06493 0.339844 2.39993C0.339844 2.74279 0.624487 3.03601 0.959487 3.03601H3.78842L5.1277 12.2267C5.30377 13.4153 5.93127 14.1603 7.1452 14.1603ZM18.2359 5.06958L17.6423 9.07922C17.5752 9.59815 17.2991 9.91636 16.8052 9.91636L6.12449 9.92458L5.4127 5.06958H18.2359ZM7.80663 18.2285C7.98512 18.23 8.16212 18.1959 8.32732 18.1283C8.49251 18.0607 8.64259 17.9608 8.76881 17.8346C8.89502 17.7084 8.99485 17.5583 9.06248 17.3931C9.13011 17.2279 9.16418 17.0509 9.1627 16.8724C9.1635 16.6941 9.12898 16.5174 9.06111 16.3525C8.99325 16.1877 8.89339 16.0378 8.76731 15.9118C8.64123 15.7857 8.49142 15.6858 8.32653 15.618C8.16164 15.5501 7.98494 15.5156 7.80663 15.5164C7.0452 15.5164 6.44234 16.1192 6.44234 16.8724C6.44234 17.6342 7.0452 18.2285 7.80663 18.2285ZM15.6331 18.2285C16.3948 18.2285 16.9973 17.6342 16.9973 16.8724C16.9973 16.1189 16.3948 15.5164 15.6331 15.5164C14.8798 15.5164 14.2688 16.1192 14.2688 16.8724C14.2688 17.6342 14.8798 18.2285 15.6331 18.2285Z" fill="#12B76A"/>
</svg> Hurray! You got cashback</span>
  <div className="text-lg font-bold flex justify-between">
    <span>Total</span>
    <span className="text-gray-800 text-lg 2xl:text-xl"><small className='text-xs 2xl:text-sm'>PKR</small> 20,000</span>
  </div>
  <NavLink to='/ThankYouPage'>
  <button className="w-full bg-[#002882] text-white font-bold py-3 rounded-md">
  Place Order
  </button>
  </NavLink>
 <p className="text-[#999] text-[14px] font-normal text-center">Upon clicking 'Place Order', I confirm I have read and acknowledged <a href="" className="text-[#002882] underline"> all terms and policies.</a></p>
        </div>
      </div>
      {/* Modal 1 */}
      {isModalOpen && (
        <div className=" fixed inset-0 flex items-center p-4 justify-center bg-black/70 backdrop-blur-sm" >
          <div className="relative bg-white rounded-2xl shadow-lg ">
            {/* Modal Header */}
            <div className="flex justify-end items-center">
            <button  className="absolute -top-4 -right-4 z-1050 w-10 h-10 flex items-center justify-center rounded-full bg-[#002882] text-white"
  onClick={() => {
    setIsModalOpen(false);
    isMapTrue(false); 
  }}
>
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
    <g clipPath="url(#clip0_7110_94001)">
      <rect width="36" height="36" fill="url(#paint0_radial_7110_94001)"/>
      <path d="M18 0C7.97143 0 0 7.97143 0 18C0 28.0286 7.97143 36 18 36C28.0286 36 36 28.0286 36 18C36 7.97143 28.0286 0 18 0ZM24.9429 27L18 20.0571L11.0571 27L9 24.9429L15.9429 18L9 11.0571L11.0571 9L18 15.9429L24.9429 9L27 11.0571L20.0571 18L27 24.9429L24.9429 27Z" fill="#002882"/>
    </g>
    <defs>
      <radialGradient id="paint0_radial_7110_94001" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(18 18) rotate(90) scale(18)">
        <stop offset="0.80208" stopColor="white"/>
        <stop offset="1" stopColor="white" stopOpacity="0"/>
      </radialGradient>
      <clipPath id="clip0_7110_94001">
        <rect width="36" height="36" fill="white"/>
      </clipPath>
    </defs>
  </svg>
</button>


            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto rounded-2xl border border-gray-300">
              {mapTrue?(
                <div className="flex  items-center justify-center">
                <div className="relative w-[1000px] bg-white shadow-lg rounded-lg">
                  {/* Google Maps Embed */}
                  <iframe
                    className="w-full h-[500px] rounded-t-lg "
                    src={`https://www.google.com/maps?q=${encodeURIComponent(collectionPoint.address)}&output=embed`}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
          
                  {/* Collection Point Details */}
                  <div className="">
                  <div className="flex justify-between absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-white w-[100%] max-w-[95%] p-5 rounded-2xl shadow-lg">
                     <div className="w-[50%]">
                     <h3 className="text-lg font-semibold flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M8.75391 10C8.75391 9.13805 9.09632 8.3114 9.70581 7.7019C10.3153 7.09241 11.142 6.75 12.0039 6.75C12.8659 6.75 13.6925 7.09241 14.302 7.7019C14.9115 8.3114 15.2539 9.13805 15.2539 10C15.2539 10.862 14.9115 11.6886 14.302 12.2981C13.6925 12.9076 12.8659 13.25 12.0039 13.25C11.142 13.25 10.3153 12.9076 9.70581 12.2981C9.09632 11.6886 8.75391 10.862 8.75391 10Z" fill="url(#paint0_linear_7298_123765)"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.77725 8.877C3.94358 6.86675 4.85947 4.99247 6.34321 3.62598C7.82695 2.2595 9.77013 1.50066 11.7872 1.5H12.2192C14.2364 1.50066 16.1795 2.2595 17.6633 3.62598C19.147 4.99247 20.0629 6.86675 20.2292 8.877C20.4138 11.1214 19.7209 13.3499 18.2962 15.094L13.5032 20.956C13.3216 21.1783 13.0928 21.3575 12.8333 21.4806C12.5739 21.6036 12.2904 21.6675 12.0032 21.6675C11.7161 21.6675 11.4326 21.6036 11.1732 21.4806C10.9137 21.3575 10.6849 21.1783 10.5032 20.956L5.71125 15.094C4.28621 13.3501 3.59294 11.1215 3.77725 8.877ZM12.0032 5.25C10.7435 5.25 9.53529 5.75045 8.64449 6.64124C7.75369 7.53204 7.25325 8.74022 7.25325 10C7.25325 11.2598 7.75369 12.468 8.64449 13.3588C9.53529 14.2496 10.7435 14.75 12.0032 14.75C13.263 14.75 14.4712 14.2496 15.362 13.3588C16.2528 12.468 16.7532 11.2598 16.7532 10C16.7532 8.74022 16.2528 7.53204 15.362 6.64124C14.4712 5.75045 13.263 5.25 12.0032 5.25Z" fill="url(#paint1_linear_7298_123765)"/>
                      <defs>
                        <linearGradient id="paint0_linear_7298_123765" x1="8.75391" y1="10" x2="15.2539" y2="10" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#0032A3"/>
                          <stop offset="0.25" stop-color="#1A51CB"/>
                          <stop offset="0.5" stop-color="#3B66C8"/>
                          <stop offset="0.75" stop-color="#1A51CB"/>
                          <stop offset="1" stop-color="#0032A3"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_7298_123765" x1="3.74805" y1="11.5837" x2="20.2585" y2="11.5837" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#0032A3"/>
                          <stop offset="0.25" stop-color="#1A51CB"/>
                          <stop offset="0.5" stop-color="#3B66C8"/>
                          <stop offset="0.75" stop-color="#1A51CB"/>
                          <stop offset="1" stop-color="#0032A3"/>
                        </linearGradient>
                      </defs>
                    </svg> {collectionPoint.name}
                    </h3>
                    <div className="flex gap-1 items-center">
                    <span className="w-3/6 flex px-[5px] py-[5px] justify-center items-center gap-[10px] rounded-full bg-gradient-to-r from-[#FFC136] via-[#FAC142] via-[#FFD168] via-[#F5BC3A] to-[#E09B00] text-black text-xs">
                    Collection Point
                    </span>

                    <p className="text-gray-600 text-sm">{collectionPoint.address}</p>
                    </div>
                   
                     </div>
                   <div className="mt-3 flex flex-col gap-2 text-sm text-gray-600">
                      <p className="text-[]18px[">{collectionPoint.phone}</p>
                      <p className="text-18px"> {collectionPoint.openingHours}</p>
                    </div>
                  </div>
                  </div>
                 
                </div>
              </div>
              ):(
                
                <div className="p-4">
                  <table className="w-[1000px] border-collapse rounded-2xl text-sm overflow-hidden">
                <thead className="bg-gray-200">
                  <tr className="border-b border-gray-300">
                    <th className="p-2 text-left rounded-tl-2xl">Full Name</th>
                    <th className="p-2 text-left">Address</th>
                    <th className="p-2 text-left">Region & Area</th>
                    <th className="p-2 text-left">Opening Hours</th>
                    <th className="p-2 text-left">Phone Number</th>
                    <th className="p-2 text-left rounded-tr-2xl">Location</th>
                  </tr>
                </thead>
                <tbody className="text-[#999]">
                  {collectionPoints.map((point, index) => (
                    <tr key={index} className="hover:bg-gray-100 border-b border-gray-300 last:border-none">
                      <td className="flex gap-2 p-3">{/* No column borders */}
                        <CheckBox />
                        {point.name}
                      </td>
                      <td className="p-2">{point.address}</td>
                      <td className="p-2">{point.region}</td>
                      <td className="p-2">{point.openingHours}</td>
                      <td className="p-2">{point.phone}</td>
                      <td className="w-[10%]">
                        <div className="bg-[#F2F2F2] rounded-[5px] flex gap-1 items-center p-2 cursor-pointer text-yellow-400 w-[50%]" onClick={()=>isMapTrue(true)}>  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.29688 8.33333C7.29688 7.61504 7.58222 6.92616 8.09013 6.41825C8.59804 5.91034 9.28691 5.625 10.0052 5.625C10.7235 5.625 11.4124 5.91034 11.9203 6.41825C12.4282 6.92616 12.7135 7.61504 12.7135 8.33333C12.7135 9.05163 12.4282 9.7405 11.9203 10.2484C11.4124 10.7563 10.7235 11.0417 10.0052 11.0417C9.28691 11.0417 8.59804 10.7563 8.09013 10.2484C7.58222 9.7405 7.29688 9.05163 7.29688 8.33333Z" fill="url(#paint0_linear_7298_123697)"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M3.14933 7.3975C3.28795 5.72229 4.05119 4.16039 5.28764 3.02165C6.52409 1.88292 8.1434 1.25055 9.82433 1.25H10.1843C11.8653 1.25055 13.4846 1.88292 14.721 3.02165C15.9575 4.16039 16.7207 5.72229 16.8593 7.3975C17.0132 9.26784 16.4357 11.125 15.2485 12.5783L11.2543 17.4633C11.1029 17.6486 10.9123 17.7979 10.6961 17.9005C10.4799 18.003 10.2436 18.0562 10.0043 18.0562C9.76506 18.0562 9.52878 18.003 9.3126 17.9005C9.09641 17.7979 8.90572 17.6486 8.75433 17.4633L4.761 12.5783C3.57347 11.1251 2.99575 9.26795 3.14933 7.3975ZM10.0043 4.375C8.95452 4.375 7.9477 4.79204 7.20537 5.53437C6.46304 6.2767 6.046 7.28352 6.046 8.33333C6.046 9.38315 6.46304 10.39 7.20537 11.1323C7.9477 11.8746 8.95452 12.2917 10.0043 12.2917C11.0541 12.2917 12.061 11.8746 12.8033 11.1323C13.5456 10.39 13.9627 9.38315 13.9627 8.33333C13.9627 7.28352 13.5456 6.2767 12.8033 5.53437C12.061 4.79204 11.0541 4.375 10.0043 4.375Z" fill="url(#paint1_linear_7298_123697)"/>
              <defs>
                <linearGradient id="paint0_linear_7298_123697" x1="7.29688" y1="8.33333" x2="12.7135" y2="8.33333" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#0032A3"/>
                  <stop offset="0.25" stop-color="#1A51CB"/>
                  <stop offset="0.5" stop-color="#3B66C8"/>
                  <stop offset="0.75" stop-color="#1A51CB"/>
                  <stop offset="1" stop-color="#0032A3"/>
                </linearGradient>
                <linearGradient id="paint1_linear_7298_123697" x1="3.125" y1="9.6531" x2="16.8837" y2="9.6531" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#0032A3"/>
                  <stop offset="0.25" stop-color="#1A51CB"/>
                  <stop offset="0.5" stop-color="#3B66C8"/>
                  <stop offset="0.75" stop-color="#1A51CB"/>
                  <stop offset="1" stop-color="#0032A3"/>
                </linearGradient>
                </defs>
                </svg> Map</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex justify-end mt-5 w-full">
  <div className="flex gap-2">
    <FormButton
      onClick={() => setIsModalOpen(false)}
      className="bg-gray-300 border-0 text-[#666]"
    >
      Cancel
    </FormButton>
    <FormButton className="bg-[#002882] text-white">
      Confirm
    </FormButton>
  </div>
</div>
                </div>
              )}
  
</div>






           {/* Modal Footer */}


          </div>
        </div>
      )}
      {/* Modal 2 */}
       {isOpen && (
       <div className="fixed inset-0 flex items-center p-10 justify-center bg-black/70 backdrop-blur-sm">
       {formOpen ? (  
      
      <div className="bg-[#FCFCFC] p-6 rounded-lg shadow-lg w-[700px] max-w-full min-h-[600px] flex flex-col gap-2 relative">
      <h2 className="text-[24px] font-semibold mb-2">Add New Address</h2>
    
      {/* Location Type */}
      <div className="mb-2 flex gap-2">
        <label className="flex items-center gap-1">
          <CheckBox value="home" checked={locationType === "home"} onChange={() => setLocationType("home")}/>
          Home
        </label>
        <label className="flex items-center gap-1">
          <CheckBox value="office" checked={locationType === "office"} onChange={() => setLocationType("office")}/>
          Office
        </label>
      </div>
      <hr className="border-t-[1px] border-[#CCD1D2]" />
    
      {/* Default Address Checkboxes */}
      <div className="flex flex-col gap-2">
        <label className="flex items-center gap-1">
          <CheckBox checked={defaultShipping} onChange={() => setDefaultShipping(!defaultShipping)}/>
          Default Shipping Address
        </label>
        <label className="flex items-center gap-1">
          <CheckBox checked={defaultBilling} onChange={() => setDefaultBilling(!defaultBilling)}/>
          Default Billing Address
        </label>
      </div>
    
      {/* Form Content */}
      <form onSubmit={handleSubmit} className="flex flex-col flex-grow space-y-2">
        <div className="grid grid-cols-2 gap-2">
          <div className="w-full flex flex-col gap-1">
            <label className="text-gray-600 text-[16px] font-medium">Country/region </label>
            <Select options={options} placeholder="Please Select" value={country} onChange={(e) => setCountry(e.target.value)} />
          </div>
          <div className="w-full flex flex-col gap-1">
            <label className="text-gray-600 text-[16px] font-medium">Province</label>
            <Select options={options} placeholder="Please Select" value={province} onChange={(e) => setProvince(e.target.value)} />
          </div>
        </div>
    
        <label className="text-gray-600 text-[16px] font-medium">Address</label>
        <div className="grid grid-cols-3 gap-2">
          <Input type="text" placeholder="Street Address*" value={street} onChange={(e) => setStreet(e.target.value)} />
          <Input type="text" placeholder="Apt, Suite (Optional)" value={apartment} onChange={(e) => setApartment(e.target.value)} />
          <Input type="text" placeholder="Landmark (Optional)" value={landmark} onChange={(e) => setLandmark(e.target.value)} />
        </div>
    
        <div className="grid grid-cols-3 gap-2">
          <Select options={options} placeholder="Please Select" value={city} onChange={(e) => setCity(e.target.value)} />
          <Select options={options} placeholder="Select Area" value={area} onChange={(e) => setArea(e.target.value)} />
          <Input type="text" placeholder="ZIP Code*" value={zip} onChange={(e) => setZip(e.target.value)} className="border p-2 rounded" />
        </div>
    
        <label className="text-gray-600 text-[16px] font-medium">Contact Information</label>
        <div className="grid grid-cols-2 gap-2">
          <Input type="text" placeholder="Contact Name*" value={contactName} onChange={(e) => setContactName(e.target.value)} className="border p-2 rounded" />
          <Input type="text" placeholder="+92 Enter your Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} className="border p-2 rounded" />
        </div>
    
        {/* Confirm Button (Always at Bottom) */}
        <button type="submit" className="bg-[#002882] text-white w-full py-2 rounded mt-auto">Confirm</button>
      </form>
    
      {/* Close Button */}
      <button 
        className="absolute -top-4 -right-4 w-10 h-10 flex items-center justify-center rounded-full bg-[#002882] text-white"
        onClick={() => { setIsOpen(false); setFormOpen(false) }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
          <g clip-path="url(#clip0_7135_111246)">
            <rect width="36" height="36" fill="url(#paint0_radial_7135_111246)"/>
            <path d="M18 0C7.97143 0 0 7.97143 0 18C0 28.0286 7.97143 36 18 36C28.0286 36 36 28.0286 36 18C36 7.97143 28.0286 0 18 0ZM24.9429 27L18 20.0571L11.0571 27L9 24.9429L15.9429 18L9 11.0571L11.0571 9L18 15.9429L24.9429 9L27 11.0571L20.0571 18L27 24.9429L24.9429 27Z" fill="#002882"/>
          </g>
          <defs>
            <radialGradient id="paint0_radial_7135_111246" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(18 18) rotate(90) scale(18)">
              <stop offset="0.80208" stop-color="white"/>
              <stop offset="1" stop-color="white" stop-opacity="0"/>
            </radialGradient>
            <clipPath id="clip0_7135_111246">
              <rect width="36" height="36" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </button>
    </div>
    
    ) : (
      <div className="bg-white p-6 rounded-lg shadow-lg w-[700px] max-w-full min-h-[500px] flex flex-col relative">
        
        {/* Close Button */}
        <button 
          className="absolute -top-4 -right-4 w-10 h-10 flex items-center justify-center rounded-full bg-[#002882] text-white"
          onClick={() => setIsOpen(false)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
  <g clip-path="url(#clip0_7135_111246)">
    <rect width="36" height="36" fill="url(#paint0_radial_7135_111246)"/>
    <path d="M18 0C7.97143 0 0 7.97143 0 18C0 28.0286 7.97143 36 18 36C28.0286 36 36 28.0286 36 18C36 7.97143 28.0286 0 18 0ZM24.9429 27L18 20.0571L11.0571 27L9 24.9429L15.9429 18L9 11.0571L11.0571 9L18 15.9429L24.9429 9L27 11.0571L20.0571 18L27 24.9429L24.9429 27Z" fill="#002882"/>
  </g>
  <defs>
    <radialGradient id="paint0_radial_7135_111246" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(18 18) rotate(90) scale(18)">
      <stop offset="0.80208" stop-color="white"/>
      <stop offset="1" stop-color="white" stop-opacity="0"/>
    </radialGradient>
    <clipPath id="clip0_7135_111246">
      <rect width="36" height="36" fill="white"/>
    </clipPath>
  </defs>
</svg>
        </button>

        {/* Modal Content */}
        <h2 className="text-[30px] font-semibold mb-4">Shipping Address</h2>

        {/* Scrollable Address List */}
        <div className="flex-grow overflow-y-auto space-y-4">
          <div className="flex gap-2 border border-gray-300 p-4 rounded-lg">
            <CheckBox />
            <div>
              <strong>Farman Haris</strong> | +92123456789
              <p className="text-gray-600">135- Mian House, Garden Town Lahore</p>
              <p className="text-gray-400 text-sm">Lahore - Garden Town, Punjab, Pakistan</p>
              <span className="inline-block bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded">Home</span>
              <span className="inline-block bg-red-100 text-red-500 px-2 py-1 text-xs rounded ml-2">Default</span>
            </div>
          </div>

          <div className="flex gap-2 border border-gray-300 p-4 rounded-lg">
            <CheckBox />
            <div>
              <strong>Farman Haris</strong> | +92123456789
              <p className="text-gray-600">135- Mian House, Garden Town Lahore</p>
              <p className="text-gray-400 text-sm">Lahore - Garden Town, Punjab, Pakistan</p>
              <span className="inline-block bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded">Office</span>
            </div>
          </div>
        </div>

        {/* Add New Address Button - Always at Bottom */}
        <FormButton 
          className="bg-[#002882] text-white w-full py-2 mt-4 rounded" 
          onClick={() => setFormOpen(true)}
        >
          Add New Address
        </FormButton>
      </div>
    )}
  </div>
      )}
       {/* Modal 3 */}
       {isInstalmentModalOpen && (
  <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm"  onClick={() => setIsInstalmentModalOpen(false)}>
    <div className="bg-[#FCFCFC] p-6 rounded-lg shadow-lg w-[700px] relative flex flex-col">
      
      {/* Close Button */}
      <button  className="absolute -top-4 -right-4 z-1050 w-10 h-10 flex items-center justify-center rounded-full bg-[#002882] text-white"
      onClick={() => setIsInstalmentModalOpen(false)} 
  
>
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
    <g clipPath="url(#clip0_7110_94001)">
      <rect width="36" height="36" fill="url(#paint0_radial_7110_94001)"/>
      <path d="M18 0C7.97143 0 0 7.97143 0 18C0 28.0286 7.97143 36 18 36C28.0286 36 36 28.0286 36 18C36 7.97143 28.0286 0 18 0ZM24.9429 27L18 20.0571L11.0571 27L9 24.9429L15.9429 18L9 11.0571L11.0571 9L18 15.9429L24.9429 9L27 11.0571L20.0571 18L27 24.9429L24.9429 27Z" fill="#002882"/>
    </g>
    <defs>
      <radialGradient id="paint0_radial_7110_94001" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(18 18) rotate(90) scale(18)">
        <stop offset="0.80208" stopColor="white"/>
        <stop offset="1" stopColor="white" stopOpacity="0"/>
      </radialGradient>
      <clipPath id="clip0_7110_94001">
        <rect width="36" height="36" fill="white"/>
      </clipPath>
    </defs>
  </svg>
</button>
      

      {/* Fixed Title */}
      <h2 className="text-[30px] font-semibold mb-2 sticky top-0 bg-white z-10">
        Easy Monthly Instalments
      </h2>

      {/* Bank Logos & Table in One Row */}
      <div className="flex w-full gap-4">
        
        {/* Left Side - Bank Logos (2/12 width) */}
        <div className="w-1/12 flex flex-col items-center gap-4">
          <img 
            src={Faysalbank} 
            alt="Faysal Bank" 
            className={`w-12 h-12 cursor-pointer bg-[#F0F0F0] p-1 rounded-[5px] ${selectedBank === "faysal" ? "border-1 border-yellow-400 rounded-2xl" : ""}`}
            onClick={() => setSelectedBank("faysal")}
          />
          <img 
            src={Alfalahbank} 
            alt="Bank Alfalah" 
            className={`w-12 h-12 cursor-pointer bg-[#F0F0F0] p-1 rounded-[5px] ${selectedBank === "alfalah" ? "border-1 border-yellow-400 rounded-2xl" : ""}`}
            onClick={() => setSelectedBank("alfalah")}
          />
          <img 
            src={Meezanbank}
            alt="Meezan Bank" 
            className={`w-12 h-12 cursor-pointer bg-[#F0F0F0] p-1 rounded-[5px] ${selectedBank === "meezan" ? "border-1 border-yellow-400 rounded-2xl" : ""}`}
            onClick={() => setSelectedBank("meezan")}
          />
          <img 
            src={Askaribank} 
            alt="Askari Bank" 
            className={`w-12 h-12 cursor-pointer bg-[#F0F0F0] p-1 rounded-[5px] ${selectedBank === "askari" ? "border-1 border-yellow-400 rounded-2xl" : ""}`}
            onClick={() => setSelectedBank("askari")}
          />
        </div>

        {/* Right Side - Table (10/12 width) */}
        <div className="w-11/12 overflow-y-auto max-h-[400px]">
          {/* Bank Title */}
          <p className="text-[20px] font-semibold">{bankData[selectedBank].name}</p>

          {/* Instalment Table */}
          <div className="w-full mt-2 font-medium overflow-hidden rounded-lg border border-[#DBDBDB]">
  <table className="w-full bg-white">
    <thead>
      <tr className="bg-[#F0F0F0] text-left text-black">
        <th className="p-3">Time Period</th>
        <th className="p-3">Interest</th>
        <th className="p-3">Processing Fee</th>
      </tr>
    </thead>
    <tbody>
      {bankData[selectedBank].plans.map((plan, index) => (
        <tr key={index} className="bg-white text-[#999] border-t border-gray-300">
          <td className="p-3 text-center">{plan.period}</td>
          <td className="p-3 text-center">{plan.interest}</td>
          <td className="p-3 text-center">{plan.fee}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

       

        </div>

      </div>
    </div>
  </div>
      )}
       {/* Modal 4 */}
       {isCardModalOpen && (
    <div className="fixed inset-0 flex items-center p-6 justify-center bg-black/70 backdrop-blur-sm">
    {billingAddressOpen ? (  
      
      <div className="bg-[#FCFCFC] p-6 rounded-lg shadow-lg w-[600px] max-w-full min-h-[500px] flex flex-col gap-2 relative">
      <h2 className="text-[24px] font-semibold">Billing Address</h2>
    
   
    
      {/* Form Content */}
      <form onSubmit={handleSubmit} className="flex flex-col flex-grow space-y-3">
      <div className="">
        <label className="block text-gray-700 font-medium">Email<span className="text-yellow-400">*</span></label>
        <Input
          type="text"
          className="w-full p-2 border rounded-md"
          placeholder="farmanharis66@gmail.com"
        />
      </div>
      <div className="">
        <label className="block text-gray-700 font-medium">Address<span className="text-yellow-400">*</span></label>
        <Select
        options={options}
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
        placeholder="135- Mian House, Garden Town Lahore, Lahore - Garden Town, Punjab, Pakistan"
           />
      </div>
      {/* Confirm Button (Always at Bottom) */}
        <button type="submit" className="bg-[#002882] text-white w-full py-2 rounded mt-auto">Update Billing Address</button>
      </form>
    
      {/* Close Button */}
      <button 
        className="absolute -top-4 -right-4 w-10 h-10 flex items-center justify-center rounded-full bg-[#002882] text-white"
        onClick={() => {setIsCardModalOpen(false); setbillingAddressOpen(false) }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
          <g clip-path="url(#clip0_7135_111246)">
            <rect width="36" height="36" fill="url(#paint0_radial_7135_111246)"/>
            <path d="M18 0C7.97143 0 0 7.97143 0 18C0 28.0286 7.97143 36 18 36C28.0286 36 36 28.0286 36 18C36 7.97143 28.0286 0 18 0ZM24.9429 27L18 20.0571L11.0571 27L9 24.9429L15.9429 18L9 11.0571L11.0571 9L18 15.9429L24.9429 9L27 11.0571L20.0571 18L27 24.9429L24.9429 27Z" fill="#002882"/>
          </g>
          <defs>
            <radialGradient id="paint0_radial_7135_111246" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(18 18) rotate(90) scale(18)">
              <stop offset="0.80208" stop-color="white"/>
              <stop offset="1" stop-color="white" stop-opacity="0"/>
            </radialGradient>
            <clipPath id="clip0_7135_111246">
              <rect width="36" height="36" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </button>
    </div>
    
    ) : (
      <div className="bg-white p-6 rounded-lg shadow-lg w-[600px] max-w-full flex flex-col relative gap-3">
        
        {/* Close Button */}
        <button 
          className="absolute -top-4 -right-4 w-10 h-10 flex items-center justify-center rounded-full bg-[#002882] text-white"
          onClick={() => setIsCardModalOpen(false)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
  <g clip-path="url(#clip0_7135_111246)">
    <rect width="36" height="36" fill="url(#paint0_radial_7135_111246)"/>
    <path d="M18 0C7.97143 0 0 7.97143 0 18C0 28.0286 7.97143 36 18 36C28.0286 36 36 28.0286 36 18C36 7.97143 28.0286 0 18 0ZM24.9429 27L18 20.0571L11.0571 27L9 24.9429L15.9429 18L9 11.0571L11.0571 9L18 15.9429L24.9429 9L27 11.0571L20.0571 18L27 24.9429L24.9429 27Z" fill="#002882"/>
  </g>
  <defs>
    <radialGradient id="paint0_radial_7135_111246" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(18 18) rotate(90) scale(18)">
      <stop offset="0.80208" stop-color="white"/>
      <stop offset="1" stop-color="white" stop-opacity="0"/>
    </radialGradient>
    <clipPath id="clip0_7135_111246">
      <rect width="36" height="36" fill="white"/>
    </clipPath>
  </defs>
</svg>
        </button>

        {/* Modal Content */}
        <h2 className="text-[30px] font-semibold">Add a new card</h2>
        <p className="text-green-600 text-[16px] font-medium flex items-center gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 17C12.5304 17 13.0391 16.7893 13.4142 16.4142C13.7893 16.0391 14 15.5304 14 15C14 14.4696 13.7893 13.9609 13.4142 13.5858C13.0391 13.2107 12.5304 13 12 13C11.4696 13 10.9609 13.2107 10.5858 13.5858C10.2107 13.9609 10 14.4696 10 15C10 15.5304 10.2107 16.0391 10.5858 16.4142C10.9609 16.7893 11.4696 17 12 17ZM18 8C18.5304 8 19.0391 8.21071 19.4142 8.58579C19.7893 8.96086 20 9.46957 20 10V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V10C4 9.46957 4.21071 8.96086 4.58579 8.58579C4.96086 8.21071 5.46957 8 6 8H7V6C7 4.67392 7.52678 3.40215 8.46447 2.46447C9.40215 1.52678 10.6739 1 12 1C12.6566 1 13.3068 1.12933 13.9134 1.3806C14.52 1.63188 15.0712 2.00017 15.5355 2.46447C15.9998 2.92876 16.3681 3.47995 16.6194 4.08658C16.8707 4.69321 17 5.34339 17 6V8H18ZM12 3C11.2044 3 10.4413 3.31607 9.87868 3.87868C9.31607 4.44129 9 5.20435 9 6V8H15V6C15 5.20435 14.6839 4.44129 14.1213 3.87868C13.5587 3.31607 12.7956 3 12 3Z" fill="#12B76A"/>
</svg> All Data is encrypted <svg xmlns="http://www.w3.org/2000/svg" width="12" height="24" viewBox="0 0 12 24" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.1569 12.7116L4.49994 18.3686L3.08594 16.9546L8.03594 12.0046L3.08594 7.05463L4.49994 5.64062L10.1569 11.2976C10.3444 11.4852 10.4497 11.7395 10.4497 12.0046C10.4497 12.2698 10.3444 12.5241 10.1569 12.7116Z" fill="#12B76A"/>
</svg>
      </p>

      {/* Card Logos */}
      <div className="flex justify-start gap-2">
      <span className="flex p-2.5 flex-col justify-center items-center gap-2.5 rounded-[5px] border border-[#CCC] bg-[#FCFCFC]">
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="12" viewBox="0 0 36 12" fill="none">
  <g clip-path="url(#clip0_7171_91263)">
    <path d="M18.6183 3.88031C18.5978 5.49975 20.0616 6.40341 21.1642 6.94073C22.2971 7.49198 22.6776 7.84552 22.6731 8.33855C22.6647 9.093 21.7695 9.426 20.9318 9.43894C19.4702 9.46158 18.6204 9.04434 17.9449 8.72878L17.4184 11.1924C18.0962 11.5047 19.3513 11.7771 20.6528 11.7891C23.7078 11.7891 25.7065 10.281 25.7174 7.94283C25.7293 4.97536 21.6128 4.81111 21.6409 3.48473C21.6506 3.08255 22.0344 2.65336 22.8753 2.54424C23.2916 2.48911 24.4406 2.44692 25.7434 3.04683L26.2547 0.663235C25.5541 0.408141 24.6537 0.163876 23.5326 0.163876C20.6571 0.163876 18.6346 1.69247 18.6183 3.88031ZM31.1678 0.369187C30.61 0.369187 30.1399 0.694593 29.9301 1.19395L25.566 11.614H28.6189L29.2264 9.93506H32.9569L33.3093 11.614H36L33.652 0.369187H31.1678ZM31.5949 3.40683L32.4759 7.62937H30.0631L31.5949 3.40683ZM14.9169 0.369328L12.5106 11.6138H15.4197L17.8249 0.369047L14.9169 0.369328ZM10.6134 0.369328L7.58545 8.02284L6.36061 1.51514C6.21689 0.788672 5.64933 0.369187 5.01905 0.369187H0.0693281L0 0.695719C1.01616 0.916219 2.17069 1.27186 2.87016 1.65239C3.29822 1.88484 3.42028 2.08805 3.56091 2.64042L5.8808 11.614H8.955L13.6682 0.369187L10.6134 0.369328Z" fill="url(#paint0_linear_7171_91263)"/>
  </g>
  <defs>
    <linearGradient id="paint0_linear_7171_91263" x1="1655.06" y1="35.1092" x2="1688.71" y2="-1158.81" gradientUnits="userSpaceOnUse">
      <stop stop-color="#222357"/>
      <stop offset="1" stop-color="#254AA5"/>
    </linearGradient>
    <clipPath id="clip0_7171_91263">
      <rect width="36" height="11.6719" fill="white" transform="translate(0 0.164062)"/>
    </clipPath>
  </defs>
</svg>
      </span>
      <span className="flex p-2.5 flex-col justify-center items-center gap-2.5 rounded-[5px] border border-[#CCC] bg-[#FCFCFC]">
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="28" viewBox="0 0 36 28" fill="none">
  <g clip-path="url(#clip0_7171_91266)">
    <path d="M6.5446 27.8533V26.0011C6.5446 25.291 6.11232 24.828 5.37137 24.828C5.00096 24.828 4.59962 24.9515 4.32174 25.3528C4.10574 25.0132 3.79707 24.828 3.33399 24.828C3.02518 24.828 2.71665 24.9205 2.46957 25.2602V24.8898H1.82129V27.8533H2.46957V26.2171C2.46957 25.6924 2.74745 25.4454 3.17973 25.4454C3.61173 25.4454 3.82801 25.7232 3.82801 26.2171V27.8533H4.47629V26.2171C4.47629 25.6924 4.78482 25.4454 5.18616 25.4454C5.61845 25.4454 5.83445 25.7232 5.83445 26.2171V27.8533H6.5446ZM16.1452 24.8898H15.0957V23.9945H14.4474V24.8898H13.8609V25.4762H14.4473V26.8346C14.4473 27.5138 14.7252 27.915 15.4661 27.915C15.744 27.915 16.0525 27.8225 16.2688 27.699L16.0835 27.1433C15.8983 27.2667 15.6823 27.2977 15.5279 27.2977C15.2192 27.2977 15.0957 27.1125 15.0957 26.8037V25.4762H16.1452V24.8898ZM21.6403 24.8279C21.2699 24.8279 21.0229 25.0132 20.8685 25.2602V24.8898H20.2202V27.8533H20.8685V26.1863C20.8685 25.6924 21.0845 25.4146 21.4859 25.4146C21.6093 25.4146 21.7637 25.4455 21.8872 25.4763L22.0724 24.859C21.9489 24.828 21.7637 24.828 21.6403 24.828M13.3361 25.1368C13.0273 24.9207 12.5951 24.8282 12.1321 24.8282C11.3912 24.8282 10.8974 25.1986 10.8974 25.7851C10.8974 26.2791 11.2678 26.5569 11.9161 26.6495L12.2247 26.6805C12.5643 26.7421 12.7495 26.8347 12.7495 26.9891C12.7495 27.2051 12.5026 27.3595 12.0703 27.3595C11.638 27.3595 11.2986 27.2051 11.0824 27.0509L10.7738 27.5448C11.1134 27.7917 11.5764 27.9152 12.0394 27.9152C12.9038 27.9152 13.3978 27.514 13.3978 26.9582C13.3978 26.4334 12.9965 26.1555 12.379 26.063L12.0703 26.032C11.7924 26.0011 11.5764 25.9395 11.5764 25.7543C11.5764 25.5382 11.7924 25.4147 12.1321 25.4147C12.5026 25.4147 12.873 25.569 13.0582 25.6616L13.3361 25.1368ZM30.5619 24.8282C30.1914 24.8282 29.9445 25.0134 29.7901 25.2603V24.8899H29.1418V27.8534H29.7901V26.1865C29.7901 25.6926 30.0062 25.4147 30.4074 25.4147C30.531 25.4147 30.6854 25.4456 30.8089 25.4764L30.9941 24.8591C30.8706 24.8282 30.6854 24.8282 30.5619 24.8282ZM22.2886 26.3717C22.2886 27.2669 22.9059 27.9152 23.863 27.9152C24.2951 27.9152 24.6038 27.8226 24.9125 27.5757L24.6038 27.0509C24.3569 27.2361 24.1099 27.3286 23.8321 27.3286C23.3072 27.3286 22.9368 26.9582 22.9368 26.3717C22.9368 25.816 23.3072 25.4455 23.8321 25.4147C24.1099 25.4147 24.3569 25.5072 24.6038 25.6926L24.9125 25.1678C24.6038 24.9207 24.2951 24.8282 23.863 24.8282C22.9059 24.8282 22.2886 25.4764 22.2886 26.3717ZM28.2775 26.3717V24.8899H27.6292V25.2603C27.4131 24.9826 27.1044 24.8282 26.7031 24.8282C25.8696 24.8282 25.2213 25.4764 25.2213 26.3717C25.2213 27.2669 25.8696 27.9152 26.7031 27.9152C27.1352 27.9152 27.444 27.7609 27.6292 27.483V27.8534H28.2775V26.3717ZM25.9004 26.3717C25.9004 25.8468 26.24 25.4147 26.7956 25.4147C27.3204 25.4147 27.6909 25.816 27.6909 26.3717C27.6909 26.8965 27.3204 27.3286 26.7956 27.3286C26.24 27.2977 25.9004 26.8965 25.9004 26.3717ZM18.1519 24.8282C17.2875 24.8282 16.67 25.4455 16.67 26.3717C16.67 27.2978 17.2874 27.9152 18.1827 27.9152C18.6149 27.9152 19.0471 27.7917 19.3868 27.514L19.0779 27.0509C18.831 27.2361 18.5223 27.3595 18.2137 27.3595C17.8123 27.3595 17.411 27.1743 17.3183 26.6494H19.5102V26.4026C19.5412 25.4455 18.9856 24.8282 18.1519 24.8282ZM18.1518 25.3838C18.553 25.3838 18.831 25.6308 18.8926 26.0939H17.3491C17.4108 25.6926 17.6887 25.3838 18.1518 25.3838ZM34.2354 26.3717V23.7168H33.5871V25.2603C33.3709 24.9826 33.0623 24.8282 32.6609 24.8282C31.8274 24.8282 31.1791 25.4764 31.1791 26.3717C31.1791 27.2669 31.8274 27.9152 32.6609 27.9152C33.0932 27.9152 33.4019 27.7609 33.5871 27.483V27.8534H34.2354V26.3717ZM31.8584 26.3717C31.8584 25.8468 32.1978 25.4147 32.7536 25.4147C33.2784 25.4147 33.6488 25.816 33.6488 26.3717C33.6488 26.8965 33.2784 27.3286 32.7536 27.3286C32.1978 27.2977 31.8584 26.8965 31.8584 26.3717ZM10.1871 26.3717V24.8899H9.53879V25.2603C9.32265 24.9826 9.01398 24.8282 8.61263 24.8282C7.77915 24.8282 7.13087 25.4764 7.13087 26.3717C7.13087 27.2669 7.77915 27.9152 8.61263 27.9152C9.04491 27.9152 9.35359 27.7609 9.53879 27.483V27.8534H10.1871V26.3717ZM7.77915 26.3717C7.77915 25.8468 8.11876 25.4147 8.67437 25.4147C9.19918 25.4147 9.56973 25.816 9.56973 26.3717C9.56973 26.8965 9.19918 27.3286 8.67437 27.3286C8.11876 27.2977 7.77915 26.8965 7.77915 26.3717Z" fill="black"/>
    <path d="M13.1201 2.38477H22.8443V19.8576H13.1201V2.38477Z" fill="#FF5F00"/>
    <path d="M13.7375 11.1213C13.7375 7.57119 15.4045 4.42231 17.9667 2.3848C16.0837 0.903031 13.7067 0.0078125 11.1136 0.0078125C4.97011 0.0078125 0 4.97792 0 11.1213C0 17.2646 4.97011 22.2347 11.1135 22.2347C13.7066 22.2347 16.0836 21.3395 17.9667 19.8576C15.4045 17.851 13.7375 14.6713 13.7375 11.1213Z" fill="#EB001B"/>
    <path d="M35.9647 11.1213C35.9647 17.2645 30.9946 22.2347 24.8513 22.2347C22.2581 22.2347 19.8812 21.3395 17.998 19.8576C20.5912 17.8202 22.2273 14.6713 22.2273 11.1213C22.2273 7.57119 20.5602 4.42231 17.998 2.3848C19.881 0.903031 22.2581 0.0078125 24.8513 0.0078125C30.9946 0.0078125 35.9647 5.00886 35.9647 11.1213Z" fill="#F79E1B"/>
  </g>
  <defs>
    <clipPath id="clip0_7171_91266">
      <rect width="36" height="27.9844" fill="white" transform="translate(0 0.0078125)"/>
    </clipPath>
  </defs>
</svg>
      </span>
      <span className="flex p-2.5 flex-col justify-center items-center gap-2.5 rounded-[5px] border border-[#CCC] bg-[#FCFCFC]">
      <svg xmlns="http://www.w3.org/2000/svg" width="72" height="12" viewBox="0 0 72 12" fill="none">
  <g clip-path="url(#clip0_7171_91272)">
    <path d="M37.7235 0.0507812C34.3772 0.0507812 31.6621 2.66497 31.6621 5.89129C31.6621 9.32162 34.2593 11.8857 37.7235 11.8857C41.1014 11.8857 43.7684 9.28757 43.7684 5.95869C43.7684 2.64948 41.1192 0.0507812 37.7235 0.0507812Z" fill="url(#paint0_linear_7171_91272)"/>
    <g filter="url(#filter0_i_7171_91272)">
      <path d="M37.7235 0.0507812C34.3772 0.0507812 31.6621 2.66497 31.6621 5.89129C31.6621 9.32162 34.2593 11.8857 37.7235 11.8857C41.1014 11.8857 43.7684 9.28757 43.7684 5.95869C43.7684 2.64948 41.1192 0.0507812 37.7235 0.0507812Z" fill="#FDE009"/>
    </g>
    <path d="M3.31325 0.264138H0.0546875V11.6298H3.29622C5.01613 11.6298 6.25994 11.2224 7.35111 10.3185C8.64571 9.24474 9.41343 7.62572 9.41343 5.95242C9.41343 2.59688 6.90669 0.264138 3.31325 0.264138ZM5.90469 8.80046C5.20408 9.43256 4.30199 9.70577 2.86841 9.70577H2.27287V2.18874H2.86841C4.30199 2.18874 5.16948 2.44465 5.90469 3.10856C6.67143 3.79032 7.12869 4.84605 7.12869 5.93623C7.12869 7.02879 6.67143 8.12135 5.90469 8.80046ZM10.4368 11.6298H12.6515V0.264138H10.4371L10.4368 11.6298ZM18.0732 4.62391C16.7422 4.13079 16.3505 3.80553 16.3505 3.19423C16.3505 2.47786 17.0479 1.93298 18.0039 1.93298C18.6685 1.93298 19.2138 2.20549 19.795 2.85111L20.9524 1.33674C19.998 0.499952 18.8565 0.0745102 17.6111 0.0745102C15.6021 0.0745102 14.0671 1.47265 14.0671 3.32846C14.0671 4.89767 14.7823 5.69791 16.8622 6.44972C17.7318 6.75488 18.1739 6.95846 18.396 7.09758C18.839 7.38739 19.0616 7.79498 19.0616 8.27177C19.0616 9.19353 18.328 9.87418 17.3382 9.87418C16.2813 9.87418 15.4302 9.34646 14.9186 8.35814L13.4887 9.74009C14.5092 11.2377 15.7366 11.9046 17.4255 11.9046C19.7262 11.9046 21.3442 10.3687 21.3442 8.17088C21.3442 6.36405 20.5963 5.54539 18.0732 4.62391ZM22.0427 5.95256C22.0427 9.29651 24.6682 11.8863 28.0436 11.8863C28.9979 11.8863 29.8158 11.6976 30.8224 11.2222V8.61335C29.935 9.50051 29.1508 9.85744 28.1447 9.85744C25.9127 9.85744 24.3266 8.238 24.3266 5.93623C24.3266 3.75586 25.9623 2.03428 28.0436 2.03428C29.0986 2.03428 29.9009 2.40893 30.8224 3.31214V0.703533C29.851 0.210975 29.0486 0.0078125 28.0942 0.0078125C24.736 0.0078125 22.0427 2.64991 22.0427 5.95256ZM48.7849 7.89879L45.751 0.264138H43.3306L48.1557 11.9202H49.3478L54.257 0.263999H51.8546L48.7849 7.89879ZM55.2649 11.63H61.553V9.70577H57.4801V6.63586H61.3972V4.71139H57.4801V2.1886H61.553V0.264278H55.2647L55.2649 11.63ZM70.3282 3.61842C70.3282 1.48925 68.8645 0.264138 66.3064 0.264138H63.0166V11.6298H65.2345V7.06186H65.5247L68.591 11.6298H71.3181L67.7366 6.84237C69.4094 6.50023 70.3282 5.35786 70.3282 3.61842ZM65.8796 5.49544H65.2345V2.05144H65.915C67.2985 2.05144 68.0481 2.6326 68.0481 3.7387C68.0481 4.87967 67.2985 5.49544 65.8796 5.49544Z" fill="#0B1015"/>
  </g>
  <defs>
    <filter id="filter0_i_7171_91272" x="31.6621" y="0.0507812" width="13.5855" height="13.314" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dx="3.62791" dy="3.90698"/>
      <feGaussianBlur stdDeviation="0.739535"/>
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
      <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.583333 0 0 0 0 0 0 0 0 1 0"/>
      <feBlend mode="normal" in2="shape" result="effect1_innerShadow_7171_91272"/>
    </filter>
    <linearGradient id="paint0_linear_7171_91272" x1="266.694" y1="107.311" x2="1084.71" y2="971.29" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F34F26"/>
      <stop offset="1" stop-color="#F69E35"/>
    </linearGradient>
    <clipPath id="clip0_7171_91272">
      <rect width="71.4419" height="12" fill="white"/>
    </clipPath>
  </defs>
</svg>
      </span>
      <span className="flex p-2.5 flex-col justify-center items-center gap-2.5 rounded-[5px] border border-[#CCC] bg-[#FCFCFC]">
      <svg xmlns="http://www.w3.org/2000/svg" width="37" height="36" viewBox="0 0 37 36" fill="none">
  <g clip-path="url(#clip0_7171_91277)">
    <path d="M24.4652 21.5685C24.4652 21.0881 24.2594 20.8249 23.9489 20.637C23.6327 20.4559 23.2514 20.4311 22.7294 20.4311H20.4152V24.6611H21.4289V23.121H22.5134C22.87 23.121 23.0939 23.157 23.2277 23.3089C23.4089 23.5024 23.3864 23.877 23.3864 24.1358V24.6578H24.3707V23.8253C24.3707 23.4506 24.3482 23.2628 24.2132 23.0513C24.0807 22.8927 23.9088 22.7716 23.7149 22.7003L23.743 22.6879C24.0186 22.5833 24.4652 22.2424 24.4652 21.5685ZM23.158 22.1771L23.1164 22.1715C22.9814 22.2536 22.8239 22.2604 22.618 22.2604H21.4064V21.3165H22.6427C22.8239 21.3165 22.9994 21.3165 23.1411 21.393C23.2119 21.4272 23.2709 21.4818 23.3103 21.5497C23.3498 21.6177 23.3681 21.6959 23.3627 21.7744C23.3627 21.9555 23.2919 22.095 23.1636 22.1783L23.158 22.1771ZM30.8867 23.7544H28.9416V24.6578H30.8991C31.9116 24.6578 32.4741 24.2404 32.4741 23.3336C32.4741 22.9106 32.3751 22.6586 32.194 22.4606C31.9656 22.2615 31.6011 22.167 31.0994 22.1501L30.5357 22.1265C30.3782 22.1265 30.2669 22.1265 30.1499 22.0804C30.0831 22.0595 30.025 22.0172 29.9846 21.9601C29.9441 21.903 29.9235 21.8342 29.926 21.7643C29.926 21.6293 29.9496 21.5179 30.061 21.4538C30.1861 21.3839 30.3285 21.3511 30.4716 21.3593H32.311V20.4581H30.2894C29.2352 20.4581 28.8539 21.114 28.8539 21.7181C28.8539 23.0715 30.0149 23.0006 30.9644 23.0243C31.1162 23.0243 31.2332 23.0468 31.2974 23.1109C31.3682 23.1593 31.42 23.2695 31.42 23.3809C31.42 23.4979 31.3671 23.6093 31.303 23.6509C31.2164 23.7319 31.0814 23.7555 30.8879 23.7555L30.8867 23.7544ZM0.440875 0V15.147L1.65475 12.3289H4.27937L4.618 13.0264V12.3289H7.6825L8.35637 13.8578L9.01337 12.3413H18.7694C19.2092 12.3413 19.6064 12.4279 19.9 12.6979V12.3514H22.5831V12.6979C23.0387 12.4403 23.608 12.3514 24.2582 12.3514H28.1654L28.5299 13.0489V12.3514H31.4065L31.7856 13.0489V12.3458H34.5756V18.2711H31.7451L31.2062 17.3678V18.2464H27.6726L27.2912 17.3025H26.4126L26.0087 18.2216H24.1919C23.4707 18.2216 22.9319 18.0698 22.5685 17.865V18.2216H18.2316V16.8986C18.2316 16.7175 18.1911 16.7175 18.0797 16.6928H17.9211V18.2453H9.5365V17.5309L9.22037 18.2453H7.47437L7.1695 17.5309V18.2273H3.78887L3.4075 17.2901H2.5345L2.15537 18.2273H0.4375V35.9989H36.1146V25.335C35.7107 25.5386 35.1955 25.6039 34.6555 25.6039H32.0725V25.2225C31.7564 25.4689 31.2175 25.6039 30.7011 25.6039H22.5032V24.2573C22.5032 24.0761 22.4729 24.0761 22.3221 24.0761H22.2107V25.6106H19.5096V24.012C19.0641 24.2179 18.5421 24.2336 18.1146 24.2179H17.7985V25.5893H14.5304L13.7159 24.6623L12.8597 25.5656H7.55087V19.6706H12.9655L13.744 20.574L14.5765 19.6706H18.1911C18.613 19.6706 19.2981 19.719 19.603 20.0115V19.6481H22.8666C23.1715 19.6481 23.8341 19.719 24.2256 19.9868V19.6301H29.1182V19.9868C29.3646 19.7404 29.8866 19.6301 30.3254 19.6301H33.1604V19.9868C33.454 19.7651 33.8579 19.6301 34.4204 19.6301H36.1844V0.001125L0.440875 0ZM32.1749 22.4291C32.1805 22.4415 32.1805 22.4528 32.1872 22.4595C32.2052 22.4696 32.2277 22.4696 32.2401 22.4876L32.176 22.4348L32.1749 22.4291ZM36.1832 19.6234H36.2834V20.4559H36.1832V19.6234ZM36.235 22.5461V22.5338C36.1945 22.4989 36.1709 22.4651 36.1236 22.4291C35.902 22.2008 35.5375 22.1063 34.9806 22.095L34.4361 22.0781C34.2606 22.0781 34.1492 22.0658 34.0322 22.032C33.9656 22.0109 33.9076 21.9686 33.8672 21.9116C33.8268 21.8545 33.8061 21.7858 33.8084 21.7159C33.8084 21.5809 33.8545 21.474 33.9434 21.4099C34.0547 21.3458 34.165 21.3345 34.3472 21.3345H36.1821L36.1832 20.4559H34.2606C33.2222 20.4559 32.8195 21.1118 32.8195 21.7159C32.8195 23.0625 33.9906 22.9984 34.9345 23.022C35.0931 23.022 35.2045 23.0389 35.2686 23.1086C35.3395 23.157 35.3856 23.2673 35.3856 23.3786C35.3848 23.4309 35.3722 23.4823 35.3488 23.529C35.3255 23.5757 35.2919 23.6166 35.2506 23.6486C35.1797 23.7296 35.0447 23.7533 34.8467 23.7533H32.9117V24.6611H34.8411C35.4722 24.6611 35.9425 24.4856 36.1945 24.1223H36.235C36.37 23.9164 36.4409 23.6711 36.4409 23.3381C36.4409 22.9736 36.37 22.752 36.235 22.5461ZM28.3375 21.3109V20.4379H24.985V24.6859H28.3375V23.8073H25.9806V22.9579H28.279V22.0793H25.9806V21.3176L28.3375 21.3109ZM20.7089 13.1771H21.7337V17.4026H20.7089V13.1771ZM20.1284 14.3145L20.116 14.3269C20.116 13.851 19.9225 13.5765 19.6064 13.3898C19.2835 13.2019 18.9044 13.1839 18.3947 13.1839H16.0862V17.4139H17.0987V15.8614H18.1776C18.5342 15.8614 18.7637 15.9075 18.91 16.0425C19.0934 16.2484 19.0686 16.6106 19.0686 16.8626V17.397H20.0822V16.5701C20.0822 16.1955 20.0586 16.0076 19.9169 15.7905C19.7845 15.6347 19.6156 15.5141 19.4252 15.4395C19.6419 15.3437 19.8252 15.1855 19.9516 14.9852C20.0781 14.7848 20.1419 14.5513 20.1351 14.3145H20.1284ZM18.8459 14.9074H18.8279C18.6872 14.9884 18.5342 14.994 18.3295 14.994H17.0931V14.0569H18.3295C18.5106 14.0569 18.6861 14.0625 18.8211 14.1334C18.9561 14.1919 19.0495 14.3269 19.0495 14.508C19.0495 14.6891 18.9786 14.8365 18.8459 14.9074ZM24.3235 14.0569H25.2674V13.1603H24.2999C23.608 13.1603 23.0984 13.3189 22.771 13.6541C22.3435 14.1041 22.231 14.6903 22.231 15.3236C22.231 16.092 22.4121 16.5713 22.771 16.929C23.1164 17.2856 23.7374 17.3981 24.2234 17.3981H25.3967L25.7781 16.4543H27.8627L28.2554 17.3981H30.2939V14.2335L32.2052 17.3981H33.6351V13.1783H32.6035V16.1257L30.835 13.1839H29.305V17.0978L27.6051 13.1141H26.0987L24.6869 16.4486H24.2357C23.9736 16.4486 23.6912 16.4025 23.5337 16.2428C23.3459 16.0211 23.2581 15.7039 23.2581 15.2528C23.2581 14.8252 23.3751 14.4844 23.545 14.3089C23.7441 14.103 23.9556 14.0569 24.319 14.0569H24.3235ZM26.8255 13.8994L27.5174 15.5745V15.5801H26.1224L26.8255 13.8994ZM4.00937 16.4531L4.39075 17.397H6.44162V14.0929L7.90075 17.397H8.77375L10.2317 14.0929L10.2554 17.397H11.2915V13.1839H9.61637L8.40925 16.0369L7.09187 13.1783H5.45725V17.1742L3.74612 13.1783H2.25212L0.46 17.3981H1.53662L1.92362 16.461H4.0105L4.00937 16.4531ZM2.97775 13.8994L3.66962 15.5745L3.664 15.5801H2.29262L2.97775 13.8994ZM18.2237 20.4311H15.0141L13.7361 21.8138L12.4997 20.4311H8.46325V24.6611H12.4412L13.7237 23.2616L14.9612 24.6566H16.9109V23.2493H18.1709C19.0675 23.2493 19.9225 23.0029 19.9225 21.8318L19.9169 21.8261C19.9169 20.655 19.0214 20.4311 18.2237 20.4311ZM11.9485 23.778H9.47012V22.9399H11.6717V22.0793H9.47012V21.3176H11.989L13.0915 22.5473L11.9429 23.7836L11.9485 23.778ZM15.9085 24.2764L14.3616 22.5529L15.9085 20.8958V24.2764ZM18.235 22.3886H16.9109V21.3098H18.235C18.5984 21.3098 18.8684 21.4571 18.8684 21.8261C18.8684 22.1951 18.6467 22.3886 18.235 22.3886ZM15.3944 14.0569V13.1783H12.0362V17.4038H15.3944V16.5308H13.0375V15.6859H15.3291V14.8185H13.0375V14.0569H15.3944Z" fill="#0BA5EC"/>
  </g>
  <defs>
    <clipPath id="clip0_7171_91277">
      <rect width="36" height="36" fill="white" transform="translate(0.441406)"/>
    </clipPath>
  </defs>
</svg>
      </span>
      <span className="flex p-2.5 flex-col justify-center items-center gap-2.5 rounded-[5px] border border-[#CCC] bg-[#FCFCFC]">
      <svg xmlns="http://www.w3.org/2000/svg" width="37" height="28" viewBox="0 0 37 28" fill="none">
  <g clip-path="url(#clip0_7171_91280)">
    <path d="M36.4414 22.215C36.4414 25.2957 33.9328 27.8043 30.8521 27.8043H0.441406V5.66741C0.441406 2.58673 2.95002 0.078125 6.03069 0.078125H36.4414V22.215Z" fill="white"/>
    <path d="M26.5391 16.5378H28.8495C28.9156 16.5378 29.0696 16.5158 29.1357 16.5158C29.5759 16.4278 29.9499 16.0317 29.9499 15.4815C29.9499 14.9535 29.5759 14.5573 29.1357 14.4474C29.0696 14.4253 28.9377 14.4253 28.8497 14.4253H26.5392L26.5391 16.5378Z" fill="url(#paint0_linear_7171_91280)"/>
    <path d="M28.5855 1.94824C26.385 1.94824 24.5805 3.7308 24.5805 5.95324V10.1122H30.2359C30.368 10.1122 30.5219 10.1122 30.6319 10.1342C31.9082 10.2003 32.8545 10.8604 32.8545 12.0045C32.8545 12.9067 32.2163 13.6769 31.028 13.8311V13.8749C32.3263 13.963 33.3166 14.6891 33.3166 15.8113C33.3166 17.0217 32.2163 17.8138 30.764 17.8138H24.5586V25.9557H30.4339C32.6344 25.9557 34.4389 24.1733 34.4389 21.9507V1.94824H28.5855Z" fill="url(#paint1_linear_7171_91280)"/>
    <path d="M29.6638 12.2691C29.6638 11.7409 29.2897 11.3888 28.8495 11.3227C28.8057 11.3227 28.6955 11.3008 28.6296 11.3008H26.5391V13.2372H28.6296C28.6957 13.2372 28.8276 13.2372 28.8497 13.2152C29.2898 13.1492 29.6639 12.7972 29.6639 12.269" fill="url(#paint2_linear_7171_91280)"/>
    <path d="M6.44881 1.94824C4.24831 1.94824 2.44381 3.7308 2.44381 5.95324V15.8336C3.56614 16.3835 4.73234 16.7357 5.89869 16.7357C7.28497 16.7357 8.03309 15.8995 8.03309 14.7552V10.0901H11.4659V14.7332C11.4659 16.5375 10.3437 18.012 6.53684 18.012C4.22638 18.012 2.42188 17.5057 2.42188 17.5057V25.9337H8.29719C10.4977 25.9337 12.3022 24.1512 12.3022 21.9287V1.94852L6.44881 1.94824Z" fill="url(#paint3_linear_7171_91280)"/>
    <path d="M17.5177 1.94824C15.3172 1.94824 13.5127 3.7308 13.5127 5.95324V11.1904C14.5251 10.3322 16.2854 9.78204 19.1241 9.91409C20.6424 9.98018 22.2707 10.3983 22.2707 10.3983V12.0926C21.4565 11.6746 20.4884 11.3004 19.234 11.2123C17.0775 11.0584 15.7793 12.1146 15.7793 13.963C15.7793 15.8334 17.0775 16.8896 19.234 16.7136C20.4884 16.6256 21.4566 16.2296 22.2707 15.8334V17.5278C22.2707 17.5278 20.6643 17.9459 19.1241 18.012C16.2854 18.1439 14.5251 17.5938 13.5128 16.7357V25.9777H19.3881C21.5886 25.9777 23.393 24.1953 23.393 21.9727V1.94852L17.5177 1.94824Z" fill="url(#paint4_linear_7171_91280)"/>
  </g>
  <defs>
    <linearGradient id="paint0_linear_7171_91280" x1="-169.677" y1="120.311" x2="819.192" y2="120.311" gradientUnits="userSpaceOnUse">
      <stop stop-color="#007940"/>
      <stop offset="0.2285" stop-color="#00873F"/>
      <stop offset="0.7433" stop-color="#40A737"/>
      <stop offset="1" stop-color="#5CB531"/>
    </linearGradient>
    <linearGradient id="paint1_linear_7171_91280" x1="26.3667" y1="1201.36" x2="1015.29" y2="1201.36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#007940"/>
      <stop offset="0.2285" stop-color="#00873F"/>
      <stop offset="0.7433" stop-color="#40A737"/>
      <stop offset="1" stop-color="#5CB531"/>
    </linearGradient>
    <linearGradient id="paint2_linear_7171_91280" x1="-169.706" y1="107.846" x2="819.217" y2="107.846" gradientUnits="userSpaceOnUse">
      <stop stop-color="#007940"/>
      <stop offset="0.2285" stop-color="#00873F"/>
      <stop offset="0.7433" stop-color="#40A737"/>
      <stop offset="1" stop-color="#5CB531"/>
    </linearGradient>
    <linearGradient id="paint3_linear_7171_91280" x1="4.16081" y1="1201.36" x2="1008.32" y2="1201.36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#1F286F"/>
      <stop offset="0.4751" stop-color="#004E94"/>
      <stop offset="0.8261" stop-color="#0066B1"/>
      <stop offset="1" stop-color="#006FBC"/>
    </linearGradient>
    <linearGradient id="paint4_linear_7171_91280" x1="7.82164" y1="1201.35" x2="983.097" y2="1201.35" gradientUnits="userSpaceOnUse">
      <stop stop-color="#6C2C2F"/>
      <stop offset="0.1735" stop-color="#882730"/>
      <stop offset="0.5731" stop-color="#BE1833"/>
      <stop offset="0.8585" stop-color="#DC0436"/>
      <stop offset="1" stop-color="#E60039"/>
    </linearGradient>
    <clipPath id="clip0_7171_91280">
      <rect width="36" height="27.8438" fill="white" transform="translate(0.441406 0.078125)"/>
    </clipPath>
  </defs>
</svg>
      </span>
      <span className="flex p-2.5 flex-col justify-center items-center gap-2.5 rounded-[5px] border border-[#CCC] bg-[#FCFCFC]">
      <svg xmlns="http://www.w3.org/2000/svg" width="49" height="48" viewBox="0 0 49 48" fill="none">
  <path d="M14.6869 22.3918C14.7109 24.5998 16.6909 25.3318 16.7069 25.3418C16.6909 25.3898 16.3889 26.3918 15.6649 27.4198C15.0369 28.3078 14.3849 29.1958 13.3589 29.2118C12.3469 29.2278 12.0209 28.6318 10.8729 28.6318C9.7149 28.6318 9.3569 29.1958 8.4029 29.2278C7.4089 29.2598 6.6589 28.2678 6.0229 27.3778C4.7269 25.5698 3.7429 22.2598 5.0709 20.0278C5.7309 18.9198 6.9109 18.2178 8.1909 18.1938C9.1609 18.1778 10.0829 18.8298 10.6769 18.8298C11.2709 18.8298 12.3889 18.0478 13.5609 18.1618C14.0509 18.1778 15.4369 18.3578 16.3169 19.6118C16.2429 19.6518 14.6709 20.5418 14.6869 22.3918ZM12.7869 16.9638C13.3169 16.3438 13.6669 15.4878 13.5709 14.6318C12.8109 14.6658 11.8909 15.1218 11.3529 15.7418C10.8649 16.2878 10.4409 17.1598 10.5529 17.9978C11.4029 18.0638 12.2669 17.5818 12.7869 16.9638ZM20.4109 15.9038C20.7989 15.8398 21.2369 15.7838 21.7069 15.7278C22.1776 15.6732 22.6942 15.6465 23.2569 15.6478C24.0636 15.6492 24.7589 15.7425 25.3429 15.9278C25.9269 16.1218 26.4049 16.3878 26.7849 16.7518C27.1076 17.0678 27.3609 17.4412 27.5449 17.8718C27.7262 18.3052 27.8169 18.8038 27.8169 19.3678C27.8169 20.0518 27.6929 20.6505 27.4449 21.1638C27.2107 21.6662 26.8637 22.1076 26.4309 22.4538C25.9759 22.8123 25.4546 23.0773 24.8969 23.2338C24.2662 23.4107 23.6139 23.4983 22.9589 23.4938C22.4249 23.5004 21.8916 23.4535 21.3669 23.3538V29.0258H20.4209V15.9058L20.4109 15.9038ZM21.3589 22.5258C21.5909 22.5912 21.8469 22.6372 22.1269 22.6638C22.4096 22.6878 22.7116 22.7012 23.0329 22.7038C24.2422 22.7052 25.1796 22.4285 25.8449 21.8738C26.5116 21.3245 26.8442 20.5165 26.8429 19.4498C26.8429 18.9352 26.7549 18.4892 26.5789 18.1118C26.4147 17.7432 26.1602 17.422 25.8389 17.1778C25.4941 16.9246 25.1046 16.7387 24.6909 16.6298C24.2093 16.5031 23.7129 16.4413 23.2149 16.4458C22.7869 16.4458 22.4156 16.4618 22.1009 16.4938C21.853 16.5193 21.6062 16.554 21.3609 16.5978L21.3589 22.5258ZM35.3529 26.7778C35.3542 27.1605 35.3596 27.5418 35.3689 27.9218C35.3849 28.3032 35.4262 28.6712 35.4929 29.0258H34.6029L34.4629 27.6898H34.4209C34.2892 27.8896 34.1341 28.0729 33.9589 28.2358C33.7629 28.4292 33.5456 28.5958 33.3069 28.7358C33.0432 28.8968 32.7576 29.0187 32.4589 29.0978C32.1456 29.1885 31.7989 29.2345 31.4189 29.2358C30.9496 29.2358 30.5376 29.1605 30.1829 29.0098C29.8545 28.8755 29.5571 28.6754 29.3089 28.4218C29.0773 28.1846 28.9022 27.8982 28.7969 27.5838C28.6852 27.2822 28.6264 26.9635 28.6229 26.6418C28.6229 25.5245 29.1042 24.6652 30.0669 24.0638C31.0282 23.4598 32.4769 23.1698 34.4129 23.1938V22.9358C34.4129 22.6892 34.3882 22.4052 34.3389 22.0838C34.293 21.7602 34.1865 21.448 34.0249 21.1638C33.8499 20.8635 33.5997 20.614 33.2989 20.4398C32.9776 20.2438 32.5409 20.1445 31.9889 20.1418C31.15 20.1426 30.3297 20.3887 29.6289 20.8498L29.3249 20.1578C29.7542 19.8698 30.1969 19.6632 30.6529 19.5378C31.1062 19.4165 31.5842 19.3545 32.0869 19.3518C32.7616 19.3518 33.3082 19.4652 33.7269 19.6918C34.1469 19.9158 34.4869 20.2058 34.7269 20.5598C34.9642 20.9145 35.1289 21.3118 35.2209 21.7518C35.3102 22.1945 35.3542 22.6325 35.3529 23.0658V26.7778ZM34.4049 23.9678C33.8709 23.956 33.3367 23.9747 32.8049 24.0238C32.2449 24.0798 31.7309 24.1952 31.2629 24.3698C30.8159 24.5332 30.4142 24.8006 30.0909 25.1498C29.7856 25.4925 29.6322 25.9472 29.6309 26.5138C29.6309 27.1832 29.8256 27.6738 30.2149 27.9858C30.6016 28.3018 31.0389 28.4605 31.5269 28.4618C31.9162 28.4605 32.2649 28.4072 32.5729 28.3018C32.8796 28.1952 33.1489 28.0525 33.3809 27.8738C33.6102 27.6952 33.8029 27.4938 33.9589 27.2698C34.1085 27.0568 34.2276 26.8238 34.3129 26.5778C34.3675 26.3915 34.401 26.1996 34.4129 26.0058L34.4049 23.9678ZM37.1989 19.5698L39.6569 25.7158C39.9214 26.3903 40.1576 27.0756 40.3649 27.7698H40.4069C40.6296 27.068 40.8717 26.3724 41.1329 25.6838L43.4329 19.5778H44.4389L41.6349 26.5138C41.3522 27.2472 41.0856 27.9125 40.8349 28.5098C40.6065 29.0609 40.3536 29.6014 40.0769 30.1298C39.8448 30.5695 39.5857 30.9943 39.3009 31.4018C39.0518 31.7591 38.7589 32.0836 38.4289 32.3678C38.0489 32.6985 37.7022 32.9378 37.3889 33.0858C37.1831 33.1913 36.9714 33.2848 36.7549 33.3658L36.4329 32.6018C36.6729 32.4978 36.9422 32.3612 37.2409 32.1918C37.5382 32.0198 37.8269 31.7965 38.1069 31.5218C38.3482 31.2885 38.6149 30.9772 38.9069 30.5878C39.1936 30.2025 39.4516 29.7325 39.6809 29.1778C39.7404 29.0473 39.7821 28.9094 39.8049 28.7678C39.7885 28.6248 39.7465 28.486 39.6809 28.3578L36.1929 19.5938H37.1989V19.5698Z" fill="black"/>
</svg>
      </span>
      <span className="flex p-2.5 flex-col justify-center items-center gap-2.5 rounded-[5px] border border-[#CCC] bg-[#FCFCFC]">
      <svg xmlns="http://www.w3.org/2000/svg" width="51" height="20" viewBox="0 0 51 20" fill="none">
  <g clip-path="url(#clip0_7171_91291)">
    <path d="M36.0221 5.39772C37.402 5.39772 38.4684 5.77409 39.2839 6.52683C40.0993 7.27948 40.4755 8.28311 40.4755 9.53762V15.5592H38.7193V14.1794H38.6565C37.9039 15.3085 36.8375 15.873 35.583 15.873C34.5166 15.873 33.5757 15.5593 32.8231 14.9321C32.1331 14.3049 31.694 13.4267 31.694 12.4859C31.694 11.4822 32.0704 10.6667 32.8231 10.0395C33.5757 9.41223 34.6421 9.16134 35.8966 9.16134C37.0256 9.16134 37.9039 9.34958 38.5938 9.7886V9.34958C38.5938 8.76409 38.3753 8.1787 37.9381 7.79723L37.841 7.7187C37.3393 7.27958 36.712 7.0287 36.0221 7.0287C34.9558 7.0287 34.1403 7.46778 33.5757 8.34595L31.945 7.34213C32.9485 6.02487 34.2657 5.39772 36.0221 5.39772ZM27.1778 1.13232C28.3033 1.13232 29.3729 1.52399 30.2281 2.25438L30.3768 2.38674C31.255 3.13948 31.694 4.2686 31.694 5.46036C31.694 6.65213 31.255 7.7185 30.3768 8.53389C29.4987 9.34928 28.4323 9.7884 27.1778 9.7884L24.167 9.72566V15.5592H22.2852V1.13232H27.1778ZM36.2729 10.6666C35.5202 10.6666 34.893 10.8548 34.3912 11.2311C33.8894 11.5447 33.6385 11.9838 33.6385 12.5483C33.6385 13.0502 33.8895 13.4892 34.2657 13.7402C34.7049 14.0538 35.2066 14.2419 35.7085 14.2419C36.4109 14.2419 37.1135 13.9687 37.663 13.4733L37.7784 13.3638C38.4056 12.7993 38.7193 12.1093 38.7193 11.3565C38.1548 10.9175 37.3393 10.6665 36.273 10.6665M27.3034 2.8885H24.1671V7.90683H27.3034C27.9933 7.90683 28.6833 7.65595 29.1224 7.15419C30.1259 6.2133 30.1259 4.64517 29.1852 3.70419L29.1224 3.64144C28.6205 3.13968 27.9933 2.82605 27.3033 2.88879M50.6371 5.71134L44.4273 19.9501H42.5455L44.8663 14.9948L40.7892 5.77409H42.7964L45.7445 12.862H45.8072L48.6926 5.77409H50.6371V5.71134Z" fill="#5F6368"/>
    <path d="M16.7033 8.47136C16.7033 7.90685 16.6405 7.34234 16.5778 6.77783H8.7373V9.97685H13.1907C13.0026 10.9804 12.4381 11.9213 11.56 12.4859V14.5558H14.2571C15.8252 13.1131 16.7034 10.9804 16.7034 8.47146" fill="#4285F4"/>
    <path d="M8.73653 16.5627C10.9946 16.5627 12.8763 15.81 14.2563 14.5555L11.5592 12.4856C10.8064 12.9873 9.86555 13.301 8.73653 13.301C6.60378 13.301 4.72202 11.8583 4.09476 9.85107H1.33496V11.9837C2.77761 14.8064 5.60026 16.5627 8.73653 16.5627Z" fill="#34A853"/>
    <path d="M4.09511 9.8512C3.71883 8.84757 3.71883 7.71855 4.09511 6.65218V4.51953H1.3353C0.143441 6.84041 0.143441 9.60032 1.3353 11.9838L4.09511 9.8512Z" fill="#FBBC04"/>
    <path d="M8.73638 3.26513C9.92815 3.26513 11.0572 3.70425 11.9354 4.51964L14.3189 2.13611C12.8134 0.756112 10.8063 -0.0592803 8.79903 0.00336671C5.66276 0.00336671 2.77746 1.75974 1.39746 4.58239L4.15736 6.71503C4.72187 4.70778 6.60364 3.26513 8.73638 3.26513Z" fill="#EA4335"/>
  </g>
  <defs>
    <clipPath id="clip0_7171_91291">
      <rect width="50.1961" height="20" fill="white" transform="translate(0.441406)"/>
    </clipPath>
  </defs>
</svg>
      </span>
      </div>

      {/* Card Number Input */}
      <div className="">
        <label className="block text-gray-700 font-medium">Card Number <span className="text-yellow-400">*</span></label>
        <Input
          type="text"
          className="w-full p-2 border rounded-md"
          placeholder="Enter Your Card Number"
        />
      </div>

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
      <hr className="border-t-[1px] border-[#CCD1D2]" />
      {/* Billing Address */}
      <div className=" flex justify-between">
        <div className="flex flex-col gap-2">
        <label className="block text-gray-700 font-medium">Billing Address <span className="text-red-500">*</span></label>
        <p className="text-gray-600 text-sm">farmanharis66@gmail.com</p>
        <p className="text-gray-600 text-sm">135- Mian House, Garden Town Lahore, Pakistan</p>
        </div>
       <button className="flex gap-1 bg-transparent text-[#002882]"  onClick={() => setbillingAddressOpen(true)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M13 3C13.2549 3.00028 13.5 3.09788 13.6854 3.27285C13.8707 3.44782 13.9822 3.68695 13.9972 3.94139C14.0121 4.19584 13.9293 4.44638 13.7657 4.64183C13.6021 4.83729 13.3701 4.9629 13.117 4.993L13 5H5V19H19V11C19.0003 10.7451 19.0979 10.5 19.2728 10.3146C19.4478 10.1293 19.687 10.0178 19.9414 10.0028C20.1958 9.98789 20.4464 10.0707 20.6418 10.2343C20.8373 10.3979 20.9629 10.6299 20.993 10.883L21 11V19C21.0002 19.5046 20.8096 19.9906 20.4665 20.3605C20.1234 20.7305 19.6532 20.9572 19.15 20.995L19 21H5C4.49542 21.0002 4.00943 20.8096 3.63945 20.4665C3.26947 20.1234 3.04284 19.6532 3.005 19.15L3 19V5C2.99984 4.49542 3.19041 4.00943 3.5335 3.63945C3.87659 3.26947 4.34684 3.04284 4.85 3.005L5 3H13ZM19.243 3.343C19.423 3.16365 19.6644 3.05953 19.9184 3.05177C20.1723 3.04402 20.4197 3.13322 20.6103 3.30125C20.8008 3.46928 20.9203 3.70355 20.9444 3.95647C20.9685 4.2094 20.8954 4.46201 20.74 4.663L20.657 4.758L10.757 14.657C10.577 14.8363 10.3356 14.9405 10.0816 14.9482C9.82767 14.956 9.58029 14.8668 9.38972 14.6988C9.19916 14.5307 9.07969 14.2964 9.0556 14.0435C9.03151 13.7906 9.10459 13.538 9.26 13.337L9.343 13.243L19.243 3.343Z" fill="#002882"/>
              </svg> Edit</button>
      </div>

     
      <FormButton 
          className="bg-[#002882] text-white w-full py-2 mt-2 rounded" 
         
        >
          Add Your Card
        </FormButton>

      {/* Security Information */}
      <div className=" text-sm flex flex-col gap-1">
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
    )}
  </div>
      )}
      {/* Modal 5 */}
      {showOffersModal && (
        <div className="fixed inset-0 flex items-center p-6 justify-center bg-black/70 backdrop-blur-sm"  onClick={() => {setShowOffersModal(false) }}>
          <div className="bg-white p-6 rounded-lg shadow-lg w-[430px] relative">
           <div className="max-w-lg mx-auto ">
            {/* Close Button */}
      <button 
        className="absolute -top-4 -right-4 w-10 h-10 flex items-center justify-center rounded-full bg-[#002882] text-white"
        onClick={() => {setShowOffersModal(false) }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
          <g clip-path="url(#clip0_7135_111246)">
            <rect width="36" height="36" fill="url(#paint0_radial_7135_111246)"/>
            <path d="M18 0C7.97143 0 0 7.97143 0 18C0 28.0286 7.97143 36 18 36C28.0286 36 36 28.0286 36 18C36 7.97143 28.0286 0 18 0ZM24.9429 27L18 20.0571L11.0571 27L9 24.9429L15.9429 18L9 11.0571L11.0571 9L18 15.9429L24.9429 9L27 11.0571L20.0571 18L27 24.9429L24.9429 27Z" fill="#002882"/>
          </g>
          <defs>
            <radialGradient id="paint0_radial_7135_111246" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(18 18) rotate(90) scale(18)">
              <stop offset="0.80208" stop-color="white"/>
              <stop offset="1" stop-color="white" stop-opacity="0"/>
            </radialGradient>
            <clipPath id="clip0_7135_111246">
              <rect width="36" height="36" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </button>
           <h2 className="text-2xl font-bold text-center">Available Offers</h2>
           <p className="text-gray-500 text-center italic">Download ValueBox App to get more offers</p>

      {/* Coupon Offers */}
      <div className="mt-2">
        <h3 className="font-semibold text-lg">Coupon Offers</h3>

        <div className="border border-[#12B76A] rounded-lg p-3 mt-2 relative bg-[#F6FEF9]">
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

        <div className="border border-[#12B76A] rounded-lg p-3 mt-2 relative bg-[#F6FEF9] ">
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
      <div className="mt-2">
        <h3 className="font-semibold text-lg">Bank Offers</h3>

        <div className="border flex border-[#2E90FA] rounded-lg mt-2 relative bg-[#D1E9FF] ">
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
</div>
{/* Mobile View */}
 <div className="flex md:hidden">
 <div className="max-w-md mx-auto bg-[#F2F2F2] shadow-lg rounded-lg border">
      {/* Header */}
      <div className="flex items-center border-b border-[#F2F2F2] bg-[#FCFCFC] px-2 py-4">
        <button className="mr-2 text-gray-600 text-xl"> <NavLink to="/AddToCart">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
     <path d="M21 12L15 18L21 24" stroke="#333333" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
       </svg></NavLink></button>
        <h2 className="text-[20px] font-semibold">Checkout</h2>
      </div>

      {/* User Info */}
      <div className="flex flex-col gap-2 px-4 pb-4 pt-2 border-b border-gray-200 bg-[#FCFCFC]">
      <div className="flex justify-between items-center">
      <div className="flex flex-col gap-2">
       <span className="flex items-center gap-2 font-semibold text-black text-[16px]">Farman Haris, <span className="text-[#999] font-normal">+92123456789</span> 
          <span className="flex px-3 py-1 rounded bg-gradient-to-r from-[#0032A3] via-[#1A51CB] to-[#0032A3] text-white text-sm">
            Office
          </span>
          </span>
          <span className="text-gray-600 text-sm">135-Mian House, Garden Town, Lahore</span>
        <span className="text-gray-600 text-sm">Lahore - Garden Town, Punjab</span>
        </div>
        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M10 8L14 12L10 16" stroke="#1A1A1A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>
      </div>
       
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-1">
          <span className="text-[#002882] text-sm font-medium">
          Collect your parcels at a location close to you at a fraction of the delivery fee!
        </span>
        <span className="text-gray-600 text-sm">
        4 Suggested Collection Point(s) Nearby
        </span>
          </div>
      <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M10 8L14 12L10 16" stroke="#1A1A1A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span> 
       </div>
      </div>

      {/* Product List */}
      <div className=" border-b border-gray-200 bg-[#F2F2F2]">
     {cartData.map((store, index) => (
                 store.items.some(item=>item.delivery==='Standard')&&(
                   <div key={index} className="bg-white w-full px-4 py-2 mt-2.5">
                   <div className='flex justify-between'>
                   <h3 className="font-semibold text-gray-700 flex gap-1.5 items-center">
                     
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
                   <div className="pb-4"  onClick={() => setDeliveryTypePopup(true)}>
{/* Delivery Type Heading */}
<h3 className="text-[16px] font-semibold text-black">Delivery Type</h3>
  <div className="px-2 py-1 mt-2 bg-white rounded-md border border-gray-200">
      
      

      {/* Bundle Offer */}
      <div className="flex items-center gap-2 mt-2 p-3 rounded-md bg-[#D1FADF]">
        <span className="text-green-700 text-sm font-medium">
          Enjoy Bundle & Save shipping promotion RS. 149
        </span>
      </div>

      {/* Standard Delivery */}
      <div className="mt-2">
        <div className="flex items-center justify-between mt-2">
        <h4 className="text-[15px] font-medium text-black">Standard Delivery</h4>
          {/* Truck Icon + Pricing */}
          <div className="flex items-center gap-2 text-[#12B76A] text-sm font-medium">
            {/* Truck SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
  <g clip-path="url(#clip0_7228_113897)">
    <path d="M19.5 11H19V7.62187C19 7.225 18.8406 6.84375 18.5594 6.5625L15.4375 3.44062C15.1562 3.15937 14.775 3 14.3781 3H13V1.5C13 0.671875 12.3281 0 11.5 0H3.5C2.67188 0 2 0.671875 2 1.5V3H0.25C0.1125 3 0 3.1125 0 3.25V3.75C0 3.8875 0.1125 4 0.25 4H8.75C8.8875 4 9 4.1125 9 4.25V4.75C9 4.8875 8.8875 5 8.75 5H1.25C1.1125 5 1 5.1125 1 5.25V5.75C1 5.8875 1.1125 6 1.25 6H7.75C7.8875 6 8 6.1125 8 6.25V6.75C8 6.8875 7.8875 7 7.75 7H0.25C0.1125 7 0 7.1125 0 7.25V7.75C0 7.8875 0.1125 8 0.25 8H6.75C6.8875 8 7 8.1125 7 8.25V8.75C7 8.8875 6.8875 9 6.75 9H2V13C2 14.6562 3.34375 16 5 16C6.65625 16 8 14.6562 8 13H12C12 14.6562 13.3438 16 15 16C16.6562 16 18 14.6562 18 13H19.5C19.775 13 20 12.775 20 12.5V11.5C20 11.225 19.775 11 19.5 11ZM5 14.5C4.17188 14.5 3.5 13.8281 3.5 13C3.5 12.1719 4.17188 11.5 5 11.5C5.82812 11.5 6.5 12.1719 6.5 13C6.5 13.8281 5.82812 14.5 5 14.5ZM15 14.5C14.1719 14.5 13.5 13.8281 13.5 13C13.5 12.1719 14.1719 11.5 15 11.5C15.8281 11.5 16.5 12.1719 16.5 13C16.5 13.8281 15.8281 14.5 15 14.5ZM17.5 8H13V4.5H14.3781L17.5 7.62187V8Z" fill="#12B76A"/>
  </g>
  <defs>
    <clipPath id="clip0_7228_113897">
      <rect width="20" height="16" fill="white"/>
    </clipPath>
  </defs>
</svg>

            {/* Pricing */}
            <span className="line-through text-gray-400">RS. 149</span>
            <span className="text-[#12B76A]">RS. 0</span>
          </div>
</div>
  {/* Delivery Time */}
  <div className="mt-2 flex items-center gap-1 text-blue-600 text-sm">
            {/* Clock SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M10.0013 1.66663C8.90695 1.66663 7.82332 1.88217 6.81227 2.30096C5.80123 2.71975 4.88257 3.33358 4.10875 4.1074C2.54594 5.67021 1.66797 7.78982 1.66797 9.99996C1.66797 12.2101 2.54594 14.3297 4.10875 15.8925C4.88257 16.6663 5.80123 17.2802 6.81227 17.699C7.82332 18.1177 8.90695 18.3333 10.0013 18.3333C12.2114 18.3333 14.3311 17.4553 15.8939 15.8925C17.4567 14.3297 18.3346 12.2101 18.3346 9.99996C18.3346 8.90561 18.1191 7.82198 17.7003 6.81093C17.2815 5.79988 16.6677 4.88122 15.8939 4.1074C15.12 3.33358 14.2014 2.71975 13.1903 2.30096C12.1793 1.88217 11.0957 1.66663 10.0013 1.66663ZM13.5013 13.5L9.16797 10.8333V5.83329H10.418V10.1666L14.168 12.4166L13.5013 13.5Z" fill="#002882"/>
</svg>

            {/* Date Text */}
            <span className="text-[#002882]">Get it by <strong>06 - 16 DEC</strong></span>
          </div>
      </div>
    </div>
                   </div>
                       {/* Popup Overlay & Modal */}
                       {deliveryTypePopup && (
        <div
          className={`fixed inset-0 z-[9999] bg-[rgba(0,0,0,0.3)] bg-opacity-50 flex items-end justify-center transition-opacity duration-300 ${
            deliveryTypePopup ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => {
            setShowShippingPopup(false); // First hide with animation
            setTimeout(() => setDeliveryTypePopup(false), 300); // Then remove from DOM
          }}
        >
          <div
            className={`bg-white w-full max-w-md h-[80vh] rounded-t-2xl p-4 shadow-lg transform transition-transform duration-500 ease-out ${
              showShippingPopup ? "translate-y-0" : "translate-y-full"
            }`}
          >
            {/* Close Button */}
            <button
              className="absolute right-4 top-4 w-8 h-8 flex items-center justify-center rounded-full bg-[#002882] text-white"
              onClick={() => {
                setShowShippingPopup(false); // First hide with animation
                setTimeout(() => setDeliveryTypePopup(false), 300); // Then remove from DOM
              }}
            >
              ✖
            </button>

            {/* Header */}
            <h3 className="text-[20px] font-semibold text-black mb-2">Shipping</h3>

            <div className="max-w-md mx-auto bg-white">
              {/* Ship to Section */}
              <div className="mb-3">
                <h3 className="text-sm text-gray-500">Ship to Pakistan</h3>
                <button className="w-full flex items-center justify-between p-3 rounded-lg bg-gray-100">
                  <span className="flex items-center gap-2">
                  <span>Johar town, Lahore</span>
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M10 8L14 12L10 16"
                      stroke="#1A1A1A"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              {/* Shipping Method Section */}
              <h3 className="text-sm text-gray-500 mt-2">Shipping Method</h3>
              <div className="mt-2 space-y-3">
                <label className="block p-4 rounded-lg bg-gray-100 cursor-pointer">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold">Free shipping over PKR 2,570</h4>
                      <p className="text-sm text-gray-600">
                        Standard Delivery: <span className="font-bold">DEC 06 - 16</span>
                      </p>
                    </div>
                <CheckBox name="shipping"/>
                  </div>

                  {/* Tracking Available */}
                  <button
                    className="mt-2 px-3 py-1 text-sm bg-gray-200 text-gray-600 rounded-md"
                    disabled
                  >
                    Tracking Available
                  </button>
                </label>

                <label className="block p-4 rounded-lg bg-gray-100 cursor-pointer">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold">Express Delivery</h4>
                      <p className="text-sm text-gray-600">
                        Standard Delivery: <span className="font-bold">24 Hours Delivery</span>
                      </p>
                    </div>
                    <CheckBox name="shipping"/>
                   
                  </div>

                  {/* Tracking Available */}
                  <button
                    className="mt-2 px-3 py-1 text-sm bg-gray-200 text-gray-600 rounded-md"
                    disabled
                  >
                    Tracking Available
                  </button>
                </label>
              </div>
            </div>
          </div>
        </div>
      )}

                 </div>
                 
                 )
                 
               ))}
      </div>

      {/* Summary */}
      <div className="relative p-5 my-2.5 bg-white border border-gray-200">
  {/* Heading */}
  <h3 className="text-[20px] font-semibold text-black">Summery</h3>

  {/* Subtotal */}
  <div className="flex justify-between items-center py-3 border-b border-gray-300">
    <span className="text-sm text-black">Subtotal</span>
    <span className="text-sm font-medium text-black">PKR 20,000</span>
  </div>

  {/* Item(s) Total */}
  <div className="flex justify-between items-center py-3 border-b border-gray-300">
    <span className="text-sm text-black">Item(s) Total</span>
    <span className="text-sm text-gray-400 line-through">PKR 24,900</span>
  </div>

  {/* Bundle & Save Promotion */}
  <div className="flex justify-between items-center py-3 border-b border-gray-300">
    <span className="text-sm text-black">Bundle & Save Promotion</span>
    <span className="flex text-sm font-medium text-red-500" onClick={() => handleOpen("availableOffers")}>-PKR 4,900 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M8.33301 6.66671L11.6663 10L8.33301 13.3334" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>
  </div>

  {/* Promo Codes */}
  <div className="flex justify-between items-center py-3 border-b border-gray-300">
    <span className="text-sm text-black" >Promo Codes</span>


<div className="flex items-center gap-1">
      <span className="flex text-sm font-medium text-black"  onClick={() => setpromoCodePopup(true)}>Enter <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M8.33301 6.66671L11.6663 10L8.33301 13.3334" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>
     {/* Popup Overlay & Modal */}
  {promoCodePopup && (
        <div
          className={`fixed inset-0 z-[9999] bg-[rgba(0,0,0,0.3)] bg-opacity-50 flex items-end justify-center transition-opacity duration-300 ${
            promoCodePopup ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => {
            setShowShippingPopup1(false); // First hide with animation
            setTimeout(() => setpromoCodePopup(false), 300); // Then remove from DOM
          }}
        >
          <div
            className={`bg-white w-full max-w-md h-[40vh] rounded-t-2xl p-4 shadow-lg transform transition-transform duration-500 ease-out ${
              showShippingPopup1 ? "translate-y-0" : "translate-y-full"
            }`}
          >
            {/* Close Button */}
            <button
              className="absolute right-4 top-4 w-8 h-8 flex items-center justify-center rounded-full bg-[#002882] text-white"
              onClick={() => {
                setShowShippingPopup1(false); // First hide with animation
                setTimeout(() => setpromoCodePopup(false), 300); // Then remove from DOM
              }}
            >
              ✖
            </button>

            {/* Header */}
            <h2 className="text-2xl font-bold text-gray-900">Promo Codes</h2>

{/* Description */}
<p className="text-[#999] text-sm mt-2">
  Promo codes are made up of case-sensitive letters and numbers without any spaces. Keep in mind that they
  come with limitations and expiration dates, so they might not work if they’ve expired or already reached
  their usage limit.
</p>

{/* Input Field */}
<div className="mt-4">
  <Input
    type="text"
    placeholder="Enter Code"
    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#002882]"
  />
</div>
          </div>
        </div>
      )}
    </div>
  </div>

  {/* Shipping Fee */}
  <div className="flex justify-between items-center py-3">
    <span className="text-sm text-black">Shipping Fee</span>
    <span className="text-sm font-medium text-black">PKR 500</span>
  </div>

  {/* Zigzag Border */}
  <div className="absolute bottom-[-10px] left-0 w-full">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 11" fill="none" className="w-full h-[11px]">
      <path d="M11 11L0.174683 -0.25H21.8253L11 11Z" fill="#F2F2F2" />
    </svg>
  </div>
</div>

{/* Invoice and Contact Info */}
       <div className="flex  justify-between items-center gap-2  p-5 my-2.5 bg-white border border-gray-200 cursor-pointer" onClick={() => setinfoPopup(true)}>
        {/* Invoice Icon */}
     
        <span className="flex gap-1 text-sm font-medium text-black">   <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-black"
        >
          <path d="M4 21v-4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"></path>
          <path d="M16 3h3a2 2 0 0 1 2 2v4"></path>
          <path d="M4 11V5a2 2 0 0 1 2-2h3"></path>
          <rect x="8" y="11" width="8" height="5" rx="1"></rect>
        </svg> Invoice and Contact Info </span>
        <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M8.33301 6.66671L11.6663 10L8.33301 13.3334" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>
      </div>
      {infoPopup && (
        <div
          className={`fixed inset-0 z-[9999] bg-[rgba(0,0,0,0.3)] bg-opacity-50 flex items-end justify-center transition-opacity duration-300 ${
            infoPopup ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => {
            setShowShippingPopup2(false); // First hide with animation
            setTimeout(() => setinfoPopup(false), 300); // Then remove from DOM
          }}
        >
          <div
            className={`bg-white w-full max-w-md h-[40vh] rounded-t-2xl p-4 shadow-lg transform transition-transform duration-500 ease-out ${
              showShippingPopup2 ? "translate-y-0" : "translate-y-full"
            }`}
          >
            {/* Close Button */}
            <button
              className="absolute right-4 top-4 w-8 h-8 flex items-center justify-center rounded-full bg-[#002882] text-white"
              onClick={() => {
                setShowShippingPopup2(false); // First hide with animation
                setTimeout(() => setinfoPopup(false), 300); // Then remove from DOM
              }}
            >
              ✖
            </button>

            {/* Header */}
            <h2 className="text-2xl font-bold text-gray-900">Billing Address</h2>

{/* Email Section */}
<div className="mt-4">
  <label className="text-sm font-medium text-gray-800 flex items-center">
    Email: <span className="text-yellow-500 ml-1">*</span>
  </label>
  <Input
    type="email"
    value="farmanharis66@gmail.com"
    placeholder="farmanharis66@gmail.com"
    readOnly
  />
  <p className="text-sm text-gray-500 mt-1">
    Enter your email to get delivery status updates
  </p>
</div>

{/* Billing Address Section */}
<div className="mt-4">
  <label className="text-sm font-medium text-gray-800 flex items-center">
    Billing Address: <span className="text-yellow-500 ml-1">*</span>
  </label>
  <Input
  placeholder="  135- Mian House, Garden Town Lahore Lahore - Garden Town, Punjab, Pakistan"
  />
  
 
  <p className="text-sm text-gray-500 mt-1">
    Please edit your billing address
  </p>
</div>
          </div>
        </div>
      )}




      {/* Place Order Button */}
      <div className="fixed bottom-0 left-0 w-full bg-white shadow-md border-t border-gray-300  z-50">
      {/* Discount Section */}
      <button className="bg-red-100 text-red-600 w-full text-sm font-semibold px-4 py-2 text-center" onClick={() => handleOpen("availableOffers")}>
        Total Discount : <span className="font-bold">PKR 3,000</span>
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
            className={`w-full p-5 bg-white rounded-t-2xl shadow-lg transform transition-transform duration-300 ${
              isAnimating ? "translate-y-0" : "translate-y-full"
            }`}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            
          >
            <div className="flex justify-between items-center mb-2">
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
      <div className="mt-2">
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
      {/* Order Details */}
      <div className="flex justify-between p-5">
      <div className="">
<h3 className="text-lg font-semibold text-black mb-1">
          Total : <span className="text-[#002882]">PKR 20,000</span>
        </h3>
        <p className="text-xs text-gray-500">Tax Excluded, add if applicable.</p>
      </div>

     <div>
      <NavLink to='/ThankYouPage'>
      <FormButton className=" bg-[#002882] text-white py-2 rounded-md text-lg font-semibold">
        Place Order
      </FormButton>
      </NavLink>
    
     </div>
     
      </div>
     
    </div>
    </div>
 </div>

</>

  );
}

export default Checkout;
