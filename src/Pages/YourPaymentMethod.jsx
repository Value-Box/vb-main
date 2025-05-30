import React, { useState } from 'react'
import { useRef } from "react";
import AccountSideBar from '../Components/AccountSideBar'
import Select from '../Components/Select';
import Input from '../Components/Input';
import mastercard from "/src/Images/mastercard.svg";
import visa from "/src/Images/logos_visa.svg";

const paymentMethod = [
    {
      id: 1,
      name: "Muhammad Abdullah",
      accountNumber: "72345896532574",
      Expiry: "6/2027",
      cvv: "627",
      cardImage:visa,
    },
    {
        id: 2,
        name: "Muhammad Abdullah",
        accountNumber: "72345896532574",
        Expiry: "6/2028",
        cvv: "457",
        cardImage:mastercard,
    },
    {
        id: 3,
        name: "Muhammad Abdullah",
        accountNumber: "72345896532574",
        Expiry: "6/2027",
        cvv: "627",
        cardImage:mastercard,
    },
  ];
  

function YourPaymentMethod() {
    const [addPayment,setAddPayment]=useState(false)
    const [isToggled, setIsToggled] = useState(false);

    const [updatePayment,setUpdatePayment]=useState(null)
  const [activeModal, setActiveModal] = useState(null);
  const [closing, setClosing] = useState(false); // New state for closing animation
  const openModal = (modalName) => {
    setActiveModal(modalName);
    setClosing(false); // Reset closing animation when opening a new modal
  };

  const closeModal = () => {
    setClosing(true); // Trigger closing animation
    setTimeout(() => {
      setActiveModal(null); // Close the modal after animation
      setClosing(false);
    }, 390); // Match the animation duration
  };

    const options = [
        { value: "punjab", label: "Punjab" },
        { value: "kpk", label: "Kpk" },
        { value: "sindh", label: "Sindh" },
        { value: "blochistan", label: "Blochistan" },
      ];
      const formRef = useRef(null);

      const scrollToForm = () => {
        formRef.current?.scrollIntoView({ behavior: "smooth" });
      };
    
  return (
    <>
    {addPayment?(
        <>
        <button onClick={()=>setAddPayment(false)} className="flex p-2 items-center w-full bg-natural-0 text-lg font-semibold border-b border-natural-color mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
            <path d="M21 12L15 18L21 24" stroke="#333333" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
           </svg> 
         <div className='flex flex-col  items-start'>
           <p>Choose Payment  Method</p>
           <p className="text-[#12B76A] text-xs flex gap-1 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
             <path d="M6 8.5C6.26522 8.5 6.51957 8.39464 6.70711 8.20711C6.89464 8.01957 7 7.76522 7 7.5C7 7.23478 6.89464 6.98043 6.70711 6.79289C6.51957 6.60536 6.26522 6.5 6 6.5C5.73478 6.5 5.48043 6.60536 5.29289 6.79289C5.10536 6.98043 5 7.23478 5 7.5C5 7.76522 5.10536 8.01957 5.29289 8.20711C5.48043 8.39464 5.73478 8.5 6 8.5ZM9 4C9.26522 4 9.51957 4.10536 9.70711 4.29289C9.89464 4.48043 10 4.73478 10 5V10C10 10.2652 9.89464 10.5196 9.70711 10.7071C9.51957 10.8946 9.26522 11 9 11H3C2.73478 11 2.48043 10.8946 2.29289 10.7071C2.10536 10.5196 2 10.2652 2 10V5C2 4.73478 2.10536 4.48043 2.29289 4.29289C2.48043 4.10536 2.73478 4 3 4H3.5V3C3.5 2.33696 3.76339 1.70107 4.23223 1.23223C4.70107 0.763392 5.33696 0.5 6 0.5C6.3283 0.5 6.65339 0.564664 6.95671 0.690301C7.26002 0.815938 7.53562 1.00009 7.76777 1.23223C7.99991 1.46438 8.18406 1.73998 8.3097 2.04329C8.43534 2.34661 8.5 2.6717 8.5 3V4H9ZM6 1.5C5.60218 1.5 5.22064 1.65804 4.93934 1.93934C4.65804 2.22064 4.5 2.60218 4.5 3V4H7.5V3C7.5 2.60218 7.34196 2.22064 7.06066 1.93934C6.77936 1.65804 6.39782 1.5 6 1.5Z" fill="#12B76A"/>
           </svg> Your Payment information is safe with us</p>
         </div>
       </button>
        <div className="h-[80vh] gap-10 mt-4 p-3 bg-white">
                 
        <div className='w-full'>
        <h2 className="text-lg font-semibold mb-4">Add a new card</h2>
        <p className="text-[#12B76A] mb-5 hidden sm:flex gap-1 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10.0026 14.1668C10.4446 14.1668 10.8686 13.9912 11.1811 13.6787C11.4937 13.3661 11.6693 12.9422 11.6693 12.5002C11.6693 12.0581 11.4937 11.6342 11.1811 11.3217C10.8686 11.0091 10.4446 10.8335 10.0026 10.8335C9.56058 10.8335 9.13665 11.0091 8.82409 11.3217C8.51153 11.6342 8.33594 12.0581 8.33594 12.5002C8.33594 12.9422 8.51153 13.3661 8.82409 13.6787C9.13665 13.9912 9.56058 14.1668 10.0026 14.1668ZM15.0026 6.66683C15.4446 6.66683 15.8686 6.84242 16.1811 7.15498C16.4937 7.46755 16.6693 7.89147 16.6693 8.3335V16.6668C16.6693 17.1089 16.4937 17.5328 16.1811 17.8453C15.8686 18.1579 15.4446 18.3335 15.0026 18.3335H5.0026C4.56058 18.3335 4.13665 18.1579 3.82409 17.8453C3.51153 17.5328 3.33594 17.1089 3.33594 16.6668V8.3335C3.33594 7.89147 3.51153 7.46755 3.82409 7.15498C4.13665 6.84242 4.56058 6.66683 5.0026 6.66683H5.83594V5.00016C5.83594 3.89509 6.27492 2.83529 7.05633 2.05388C7.83773 1.27248 8.89754 0.833496 10.0026 0.833496C10.5498 0.833496 11.0916 0.94127 11.5971 1.15066C12.1026 1.36006 12.562 1.66697 12.9489 2.05388C13.3358 2.4408 13.6427 2.90013 13.8521 3.40565C14.0615 3.91117 14.1693 4.45299 14.1693 5.00016V6.66683H15.0026ZM10.0026 2.50016C9.33956 2.50016 8.70368 2.76355 8.23484 3.2324C7.766 3.70124 7.5026 4.33712 7.5026 5.00016V6.66683H12.5026V5.00016C12.5026 4.33712 12.2392 3.70124 11.7704 3.2324C11.3015 2.76355 10.6656 2.50016 10.0026 2.50016Z" fill="#12B76A"/>
        </svg> All Data is encrypted <svg xmlns="http://www.w3.org/2000/svg" width="12" height="24" viewBox="0 0 12 24" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10.1569 12.7116L4.49994 18.3686L3.08594 16.9546L8.03594 12.0046L3.08594 7.05463L4.49994 5.64062L10.1569 11.2976C10.3444 11.4852 10.4497 11.7395 10.4497 12.0046C10.4497 12.2698 10.3444 12.5241 10.1569 12.7116Z" fill="#12B76A"/>
        </svg></p>
        
              {/* Card Logos */}
              <div className="flex gap-2 mt-3">
                <p className='border border-natural-color rounded-[5px] p-1 '>
                <img src={mastercard} alt="Visa" className="w-7" />
                </p>
                <p className='border border-natural-color rounded-[5px] p-1 '>
                <img src={visa} alt="Visa" className="w-7" />
                </p>
                <p className='border border-natural-color rounded-[5px] p-1 '>
                <img src={mastercard} alt="Visa" className="w-7" />
                </p>
                <p className='border border-natural-color rounded-[5px] p-1 '>
                <img src={visa} alt="Visa" className="w-7" />
                </p>
                <p className='border border-natural-color rounded-[5px] p-1 '>
                <img src={mastercard} alt="Visa" className="w-7" />
                </p>
                
              </div>
        
              {/* Input Fields */}
              <div className='flex flex-col mt-3 gap-3 2xl:gap-4'>
                <Input type="text" name="CardNumber" placeholder="Card Number"/>
                <Input type="text" name="OwnerName" placeholder="Cardholder Name"/>
              </div>
        
              <div className="flex gap-3 mt-3">
                  <Input type="text" name="CVV" placeholder="MM/YY"/>
                  <Input type="text" name="CVV" placeholder="CVV"/>
              </div>
              <div className="flex justify-between items-center mt-3 space-x-3">
      <span className="text-gray-700">Save card details</span>
      <button
        onClick={() => setIsToggled(!isToggled)}
        className={`relative w-12 h-6 rounded-full transition-colors duration-300 
        ${isToggled ? "bg-dark-blue" : "bg-gray-300"}`}
      >
        <span
          className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md transition-transform duration-300 
          ${isToggled ? "translate-x-6" : "translate-x-0"}`}
        ></span>
      </button>
    </div>

              
              {/* Add Card Button */}
              <button className="w-full bg-dark-blue text-white py-2 rounded mt-6">Add Your Card</button>
        </div>
              
              {/* Security Info */}
             
            </div>
            </>
    ):(
        <div className='sm:flex mx-auto max-w-[1920px] w-full items-start gap-2 sm:gap-5 sm:p-6 sm:bg-natural-0'>
        <div className='hidden md:block'><AccountSideBar/></div>
        <div className='w-full'>
            
        <div className="sm:border border-[#F2F2F2] p-3 sm:p-5 rounded-lg bg-white w-full">
            <div className='hidden sm:flex items-center justify-between'>
            
            <h1 className='text-2xl font-semibold'>Your payment methods</h1>
            <button className="bg-dark-blue text-white px-4 py-2 rounded flex items-center"  onClick={scrollToForm}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M15.0013 10.8334H10.8346V15.0001C10.8346 15.4584 10.4596 15.8334 10.0013 15.8334C9.54297 15.8334 9.16797 15.4584 9.16797 15.0001V10.8334H5.0013C4.54297 10.8334 4.16797 10.4584 4.16797 10.0001C4.16797 9.54175 4.54297 9.16675 5.0013 9.16675H9.16797V5.00008C9.16797 4.54175 9.54297 4.16675 10.0013 4.16675C10.4596 4.16675 10.8346 4.54175 10.8346 5.00008V9.16675H15.0013C15.4596 9.16675 15.8346 9.54175 15.8346 10.0001C15.8346 10.4584 15.4596 10.8334 15.0013 10.8334Z" fill="#FCFCFC"/>
</svg> Add a new card</button>
            </div>
            <p className="text-[#12B76A] mb-5 hidden sm:flex gap-1 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M10.0026 14.1668C10.4446 14.1668 10.8686 13.9912 11.1811 13.6787C11.4937 13.3661 11.6693 12.9422 11.6693 12.5002C11.6693 12.0581 11.4937 11.6342 11.1811 11.3217C10.8686 11.0091 10.4446 10.8335 10.0026 10.8335C9.56058 10.8335 9.13665 11.0091 8.82409 11.3217C8.51153 11.6342 8.33594 12.0581 8.33594 12.5002C8.33594 12.9422 8.51153 13.3661 8.82409 13.6787C9.13665 13.9912 9.56058 14.1668 10.0026 14.1668ZM15.0026 6.66683C15.4446 6.66683 15.8686 6.84242 16.1811 7.15498C16.4937 7.46755 16.6693 7.89147 16.6693 8.3335V16.6668C16.6693 17.1089 16.4937 17.5328 16.1811 17.8453C15.8686 18.1579 15.4446 18.3335 15.0026 18.3335H5.0026C4.56058 18.3335 4.13665 18.1579 3.82409 17.8453C3.51153 17.5328 3.33594 17.1089 3.33594 16.6668V8.3335C3.33594 7.89147 3.51153 7.46755 3.82409 7.15498C4.13665 6.84242 4.56058 6.66683 5.0026 6.66683H5.83594V5.00016C5.83594 3.89509 6.27492 2.83529 7.05633 2.05388C7.83773 1.27248 8.89754 0.833496 10.0026 0.833496C10.5498 0.833496 11.0916 0.94127 11.5971 1.15066C12.1026 1.36006 12.562 1.66697 12.9489 2.05388C13.3358 2.4408 13.6427 2.90013 13.8521 3.40565C14.0615 3.91117 14.1693 4.45299 14.1693 5.00016V6.66683H15.0026ZM10.0026 2.50016C9.33956 2.50016 8.70368 2.76355 8.23484 3.2324C7.766 3.70124 7.5026 4.33712 7.5026 5.00016V6.66683H12.5026V5.00016C12.5026 4.33712 12.2392 3.70124 11.7704 3.2324C11.3015 2.76355 10.6656 2.50016 10.0026 2.50016Z" fill="#12B76A"/>
</svg> All Data is encrypted <svg xmlns="http://www.w3.org/2000/svg" width="12" height="24" viewBox="0 0 12 24" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.1569 12.7116L4.49994 18.3686L3.08594 16.9546L8.03594 12.0046L3.08594 7.05463L4.49994 5.64062L10.1569 11.2976C10.3444 11.4852 10.4497 11.7395 10.4497 12.0046C10.4497 12.2698 10.3444 12.5241 10.1569 12.7116Z" fill="#12B76A"/>
</svg></p>
<button className='flex items-center justify-center gap-1 sm:hidden border border-natural-black 
        mb-4 w-full p-2 rounded-[5px]' onClick={()=>setAddPayment(true)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M10 18.75C5.175 18.75 1.25 14.825 1.25 10C1.25 5.175 5.175 1.25 10 1.25C14.825 1.25 18.75 5.175 18.75 10C18.75 14.825 14.825 18.75 10 18.75ZM10 2.5C5.8625 2.5 2.5 5.8625 2.5 10C2.5 14.1375 5.8625 17.5 10 17.5C14.1375 17.5 17.5 14.1375 17.5 10C17.5 5.8625 14.1375 2.5 10 2.5Z" fill="#1A1A1A"/>
  <path d="M10 14.375C9.65 14.375 9.375 14.1 9.375 13.75V6.25C9.375 5.9 9.65 5.625 10 5.625C10.35 5.625 10.625 5.9 10.625 6.25V13.75C10.625 14.1 10.35 14.375 10 14.375Z" fill="#1A1A1A"/>
  <path d="M13.75 10.625H6.25C5.9 10.625 5.625 10.35 5.625 10C5.625 9.65 5.9 9.375 6.25 9.375H13.75C14.1 9.375 14.375 9.65 14.375 10C14.375 10.35 14.1 10.625 13.75 10.625Z" fill="#1A1A1A"/>
</svg> Add New Address
        </button>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {paymentMethod.map((cards,index) => (
          <div
            key={cards.id}
            className={`p-4 border border-natural-color rounded-lg bg-natural-0`}
          >

            <h3 className="text-natural-gray text-sm flex gap-1">Account Number</h3>
            <h3 className='text-[#333] font-medium'>{"*".repeat(cards.accountNumber.length - 4)+cards.accountNumber.slice(-4)}</h3>
            <div className='flex justify-between'>
                <div>
                <h3 className="text-natural-gray text-sm flex gap-1">Owner</h3>
                <h3 className='text-[#333] font-medium'>{cards.name}</h3>
                </div>
                <div>
                <h3 className="text-natural-gray text-sm flex gap-1">Expiry</h3>
                <h3 className='text-[#333] font-medium'>{cards.Expiry}</h3>
                </div>
                <div>
                <h3 className="text-natural-gray text-sm flex gap-1">CVV</h3>
                <h3 className='text-[#333] font-medium'>{cards.cvv}</h3>
                </div>
            </div>
           
            <div className='flex items-center justify-between mt-3 '>
            <div className="flex gap-3 text-sm">
              <button className=" hover:underline" onClick={()=>{openModal('editCard');setUpdatePayment(index)}}>Edit</button>
              <p className='w-px bg-natural-gray-20'></p>
              <button className=" hover:underline">Delete</button>
            </div>
            <img className='min-w-14' src={cards.cardImage} alt="" />
            </div>
            
          </div>
        ))}
      </div>
        </div>

{activeModal === "editCard" && (
                   <div
                     className="fixed inset-0 bg-[#00000042] bg-opacity-50 flex justify-center p-3 items-center z-100"
                     onClick={closeModal} // Click outside to close modal
                   >
                     <div className={`${closing ? 'animate-flyout' : 'animate-wiggle'} relative bg-natural-0 p-3 sm:p-6 rounded-[10px] sm:rounded-[15px] shadow-lg`} onClick={(e) => e.stopPropagation()}>
                     <button
                         className="absolute -top-3 -right-3 bg-white rounded-full"
                         onClick={closeModal} // Close button inside modal
                       >
                         <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
             <path d="M15 0C6.64286 0 0 6.64286 0 15C0 23.3571 6.64286 30 15 30C23.3571 30 30 23.3571 30 15C30 6.64286 23.3571 0 15 0ZM20.7857 22.5L15 16.7143L9.21429 22.5L7.5 20.7857L13.2857 15L7.5 9.21429L9.21429 7.5L15 13.2857L20.7857 7.5L22.5 9.21429L16.7143 15L22.5 20.7857L20.7857 22.5Z" fill="#002882"/>
           </svg>
                       </button>
           
                       <div className="flex justify-center items-center ">
      <div className=" rounded-2xl  max-w-[600px]">
        {/* Profile Header */}
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Update Card</h2>

        {/* Profile Image */}
        <h3 className="text-[#039855] font-medium flex w-max"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 17C12.5304 17 13.0391 16.7893 13.4142 16.4142C13.7893 16.0391 14 15.5304 14 15C14 14.4696 13.7893 13.9609 13.4142 13.5858C13.0391 13.2107 12.5304 13 12 13C11.4696 13 10.9609 13.2107 10.5858 13.5858C10.2107 13.9609 10 14.4696 10 15C10 15.5304 10.2107 16.0391 10.5858 16.4142C10.9609 16.7893 11.4696 17 12 17ZM18 8C18.5304 8 19.0391 8.21071 19.4142 8.58579C19.7893 8.96086 20 9.46957 20 10V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V10C4 9.46957 4.21071 8.96086 4.58579 8.58579C4.96086 8.21071 5.46957 8 6 8H7V6C7 4.67392 7.52678 3.40215 8.46447 2.46447C9.40215 1.52678 10.6739 1 12 1C12.6566 1 13.3068 1.12933 13.9134 1.3806C14.52 1.63188 15.0712 2.00017 15.5355 2.46447C15.9998 2.92876 16.3681 3.47995 16.6194 4.08658C16.8707 4.69321 17 5.34339 17 6V8H18ZM12 3C11.2044 3 10.4413 3.31607 9.87868 3.87868C9.31607 4.44129 9 5.20435 9 6V8H15V6C15 5.20435 14.6839 4.44129 14.1213 3.87868C13.5587 3.31607 12.7956 3 12 3Z" fill="#12B76A"/>
        </svg> All Data is encrypted</h3>

        {
            <div className='py-4'>
            <img src={paymentMethod[updatePayment].cardImage} />
            <p className='text-natural-black mt-2'>Card Number <span className='text-mon-yellow'>*</span></p>
            <p>{"*".repeat(paymentMethod[updatePayment].accountNumber.length-4) + paymentMethod[updatePayment].accountNumber.slice(-4)}</p>
            <div className="flex gap-2 2xl:gap-4 mt-4">
        <div className="w-2/2">
          <label className="block text-sm mb-1 text-natural-black font-medium">Expiration date <span className='text-mon-yellow'>*</span></label>
          <div className="flex gap-2">
          <Select value={paymentMethod[updatePayment].Expiry}
        options={options} className="w-1/2"
        placeholder="Please Select"
           />
          <Select
        options={options} className="w-1/2"
        placeholder="Please Select"
           />
            
          </div>
        </div>
        <div className="w-1/2">
          <label className="block text-sm mb-1 text-natural-black font-medium">CVV <span className='text-mon-yellow'>*</span></label>
          <Input type="text" value={paymentMethod[updatePayment].cvv} name="CVV" placeholder="XXX"/>
        </div>
      </div>
      <div className='h-px bg-natural-gray-20 mt-5'></div>
            </div>
        }

       

        {/* Save Button */}
        <button className="w-full mt-4 py-2 bg-dark-blue text-white font-semibold rounded-lg transition">
          Save
        </button>

        {/* Info Text */}
        <div className="mt-4 bg-natural-0 rounded border-[#F2F4F7]">
        <h3 className="text-[#039855] font-medium flex gap-1 w-max"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M10 0.833374L2.5 4.16671V9.16671C2.5 13.7917 5.7 18.1167 10 19.1667C14.3 18.1167 17.5 13.7917 17.5 9.16671V4.16671L10 0.833374ZM10 7.40837C11.3333 7.40837 12.4083 8.48337 12.4083 9.81671C12.4083 11.15 11.3333 12.225 10 12.225C8.66667 12.225 7.59167 11.1417 7.59167 9.81671C7.59167 8.49171 8.675 7.40837 10 7.40837ZM10 5.00004L11.15 6.66671C10.8 6.51671 10.4167 6.44171 10 6.44171C9.375 6.44171 9.20833 6.51671 8.85 6.66671L10 5.00004ZM5.83333 7.40837L7.83333 7.24171C7.55 7.50004 7.28333 7.78337 7.08333 8.13337C6.875 8.48337 6.75 8.85004 6.66667 9.23337L5.83333 7.40837ZM5.83333 12.225L6.69167 10.4167C6.75833 10.775 6.89167 11.15 7.08333 11.5C7.29167 11.8584 7.55 12.1584 7.83333 12.4L5.83333 12.225ZM14.1667 7.40837L13.3333 9.23337C13.25 8.85004 13.1167 8.48337 12.9167 8.13337C12.7167 7.78337 12.4583 7.50004 12.1667 7.23337L14.1667 7.40837ZM14.1667 12.225L12.1667 12.3917C12.45 12.15 12.7083 11.85 12.9167 11.5C13.1167 11.15 13.2417 10.775 13.3083 10.4167L14.1667 12.225ZM10 14.625L8.84167 12.975C9.2 13.1 9.58333 13.1834 10 13.1834C10.4167 13.1834 10.7917 13.1 11.1417 12.975L10 14.625Z" fill="#039855"/>
</svg> ValueBox protects your card information</h3>
        <ul className="text-sm text-gray-600 flex flex-col gap-2 mt-2">
          <li className='flex gap-1'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M6 12L10.2426 16.2426L18.7275 7.75732" stroke="#12B76A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg> Card information is secure and uncompromised</li>
          <li className='flex gap-1'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M6 12L10.2426 16.2426L18.7275 7.75732" stroke="#12B76A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg> All data is encrypted</li>
          <li className='flex gap-1'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M6 12L10.2426 16.2426L18.7275 7.75732" stroke="#12B76A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg> ValueBox never sells your card information</li>
        </ul>
      </div>
      </div>
    </div>
                
               </div>
                       
                     
                   </div>
                 )}

  <div ref={formRef} className="hidden sm:flex items-start gap-10 border-[#F2F2F2] mt-4 p-6 bg-white rounded-lg border">
<div className='w-full'>
<h2 className="text-lg font-semibold mb-4">Add a new card</h2>
<p className="text-[#12B76A] mb-5 hidden sm:flex gap-1 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M10.0026 14.1668C10.4446 14.1668 10.8686 13.9912 11.1811 13.6787C11.4937 13.3661 11.6693 12.9422 11.6693 12.5002C11.6693 12.0581 11.4937 11.6342 11.1811 11.3217C10.8686 11.0091 10.4446 10.8335 10.0026 10.8335C9.56058 10.8335 9.13665 11.0091 8.82409 11.3217C8.51153 11.6342 8.33594 12.0581 8.33594 12.5002C8.33594 12.9422 8.51153 13.3661 8.82409 13.6787C9.13665 13.9912 9.56058 14.1668 10.0026 14.1668ZM15.0026 6.66683C15.4446 6.66683 15.8686 6.84242 16.1811 7.15498C16.4937 7.46755 16.6693 7.89147 16.6693 8.3335V16.6668C16.6693 17.1089 16.4937 17.5328 16.1811 17.8453C15.8686 18.1579 15.4446 18.3335 15.0026 18.3335H5.0026C4.56058 18.3335 4.13665 18.1579 3.82409 17.8453C3.51153 17.5328 3.33594 17.1089 3.33594 16.6668V8.3335C3.33594 7.89147 3.51153 7.46755 3.82409 7.15498C4.13665 6.84242 4.56058 6.66683 5.0026 6.66683H5.83594V5.00016C5.83594 3.89509 6.27492 2.83529 7.05633 2.05388C7.83773 1.27248 8.89754 0.833496 10.0026 0.833496C10.5498 0.833496 11.0916 0.94127 11.5971 1.15066C12.1026 1.36006 12.562 1.66697 12.9489 2.05388C13.3358 2.4408 13.6427 2.90013 13.8521 3.40565C14.0615 3.91117 14.1693 4.45299 14.1693 5.00016V6.66683H15.0026ZM10.0026 2.50016C9.33956 2.50016 8.70368 2.76355 8.23484 3.2324C7.766 3.70124 7.5026 4.33712 7.5026 5.00016V6.66683H12.5026V5.00016C12.5026 4.33712 12.2392 3.70124 11.7704 3.2324C11.3015 2.76355 10.6656 2.50016 10.0026 2.50016Z" fill="#12B76A"/>
</svg> All Data is encrypted <svg xmlns="http://www.w3.org/2000/svg" width="12" height="24" viewBox="0 0 12 24" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.1569 12.7116L4.49994 18.3686L3.08594 16.9546L8.03594 12.0046L3.08594 7.05463L4.49994 5.64062L10.1569 11.2976C10.3444 11.4852 10.4497 11.7395 10.4497 12.0046C10.4497 12.2698 10.3444 12.5241 10.1569 12.7116Z" fill="#12B76A"/>
</svg></p>

      {/* Card Logos */}
      <div className="flex gap-2 mt-3">
        <img src={mastercard} alt="Visa" className="w-10" />
        <img src={visa} alt="Mastercard" className="w-10" />
        <img src={mastercard} alt="Discover" className="w-10" />
        <img src={visa} alt="Apple Pay" className="w-10" />
        <img src={mastercard} alt="Google Pay" className="w-10" />
      </div>

      {/* Input Fields */}
      <div className='flex gap-2 2xl:gap-4'>
      <div className="mt-4 w-full">
        <label className="block text-sm mb-1 text-[#666] font-medium">Card Number*</label>
        <Input type="text" name="CardNumber" placeholder="XXXX XXXX XXXX XXXX"/>
      </div>
      
      <div className="mt-4 w-full">
        <label className="block text-sm mb-1 text-[#666] font-medium">Owner Name*</label>
        <Input type="text" name="OwnerName" placeholder="e.g. Jorge Fransis"/>
        
      </div>
      </div>

      <div className="flex gap-2 2xl:gap-4 mt-4">
        <div className="w-1/2">
          <label className="block text-sm mb-1 text-[#666] font-medium">Expiration date*</label>
          <div className="flex gap-2">
          <Select
        options={options} className="w-1/2"
        placeholder="Please Select"
           />
          <Select
        options={options} className="w-1/2"
        placeholder="Please Select"
           />
            
          </div>
        </div>
        <div className="w-1/2">
          <label className="block text-sm mb-1 text-[#666] font-medium">CVV*</label>
          <Input type="text" name="CVV" placeholder="XXX"/>
        </div>
      </div>
      
      {/* Add Card Button */}
      <button className="w-full bg-dark-blue text-white py-2 rounded mt-6">Add Your Card</button>
</div>
      
      {/* Security Info */}
      <div className="mt-4 p-4 bg-natural-0 rounded border-[#F2F4F7]">
        <h3 className="text-[#039855] font-medium flex w-max"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M10 0.833374L2.5 4.16671V9.16671C2.5 13.7917 5.7 18.1167 10 19.1667C14.3 18.1167 17.5 13.7917 17.5 9.16671V4.16671L10 0.833374ZM10 7.40837C11.3333 7.40837 12.4083 8.48337 12.4083 9.81671C12.4083 11.15 11.3333 12.225 10 12.225C8.66667 12.225 7.59167 11.1417 7.59167 9.81671C7.59167 8.49171 8.675 7.40837 10 7.40837ZM10 5.00004L11.15 6.66671C10.8 6.51671 10.4167 6.44171 10 6.44171C9.375 6.44171 9.20833 6.51671 8.85 6.66671L10 5.00004ZM5.83333 7.40837L7.83333 7.24171C7.55 7.50004 7.28333 7.78337 7.08333 8.13337C6.875 8.48337 6.75 8.85004 6.66667 9.23337L5.83333 7.40837ZM5.83333 12.225L6.69167 10.4167C6.75833 10.775 6.89167 11.15 7.08333 11.5C7.29167 11.8584 7.55 12.1584 7.83333 12.4L5.83333 12.225ZM14.1667 7.40837L13.3333 9.23337C13.25 8.85004 13.1167 8.48337 12.9167 8.13337C12.7167 7.78337 12.4583 7.50004 12.1667 7.23337L14.1667 7.40837ZM14.1667 12.225L12.1667 12.3917C12.45 12.15 12.7083 11.85 12.9167 11.5C13.1167 11.15 13.2417 10.775 13.3083 10.4167L14.1667 12.225ZM10 14.625L8.84167 12.975C9.2 13.1 9.58333 13.1834 10 13.1834C10.4167 13.1834 10.7917 13.1 11.1417 12.975L10 14.625Z" fill="#039855"/>
</svg> ValueBox protects your card information</h3>
        <ul className="text-sm text-gray-600 flex flex-col gap-2 pl-5 mt-2">
          <li className='flex gap-1'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M6 12L10.2426 16.2426L18.7275 7.75732" stroke="#12B76A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg> Card information is secure and uncompromised</li>
          <li className='flex gap-1'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M6 12L10.2426 16.2426L18.7275 7.75732" stroke="#12B76A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg> All data is encrypted</li>
          <li className='flex gap-1'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M6 12L10.2426 16.2426L18.7275 7.75732" stroke="#12B76A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg> ValueBox never sells your card information</li>
        </ul>
      </div>
    </div>
        </div>
        
    </div>
    )}
    </>
  )
}

export default YourPaymentMethod