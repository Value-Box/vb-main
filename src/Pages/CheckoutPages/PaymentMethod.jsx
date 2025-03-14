import React,{ useEffect, useState } from 'react'
import jazzcash from "/src/Images/jazzcash.svg";
import mastercard from "/src/Images/mastercard.svg";
import easypaisa from "/src/Images/easypaisa.svg";
import visa from "/src/Images/visa.svg";
import jcb from "/src/Images/jcb.svg";
import applepay from "/src/Images/applepay.svg";
import googlepay from "/src/Images/googlepay.svg";
import newcard from "/src/Images/newcard.svg";
import cashondelivery from "/src/Images/cashondelivery.svg";
import buynowlater from "/src/Images/buynowlater.svg";
import Input from '../../Components/Input';
import Select from '../../Components/Select';

function PaymentMethod() {
    const [selectedMethod, setSelectedMethod] = useState('');
    const [paymentMethod,setPaymentMethod]=useState(true)
    const [cardDetail,setCardDetail]=useState(false)
    const [installmentPayment,setInstallmentPayment]=useState(false)

    const paymentOptions = [
        { id: 1, name: "Easypaisa", icon: easypaisa },
        { id: 2, name: "JazzCash", icon: jazzcash},
      ];
      const handleChange = (event) => {
        const newValue = event.target.value;
        setSelectedMethod(newValue);
      };

      const options = [
        { value: "punjab", label: "Punjab" },
        { value: "kpk", label: "Kpk" },
        { value: "sindh", label: "Sindh" },
        { value: "blochistan", label: "Blochistan" },
      ];

  return (
    <>
    {paymentMethod&& <div className="bg-[#F2F2F2] shadow-md flex flex-col h-[94vh] justify-between ">
      <div className='flex flex-col gap-2'>
      <div className='bg-[#FCFCFC] flex items-center gap-2 py-2 '>
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="37" viewBox="0 0 36 37" fill="none">
  <path d="M21 12.5L15 18.5L21 24.5" stroke="#333333" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
      <div>
      <h2 className="text-lg font-semibold">Choose Payment Method</h2>
      <p className="text-green-600 text-sm flex gap-2 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
  <path d="M6 8.5C6.26522 8.5 6.51957 8.39464 6.70711 8.20711C6.89464 8.01957 7 7.76522 7 7.5C7 7.23478 6.89464 6.98043 6.70711 6.79289C6.51957 6.60536 6.26522 6.5 6 6.5C5.73478 6.5 5.48043 6.60536 5.29289 6.79289C5.10536 6.98043 5 7.23478 5 7.5C5 7.76522 5.10536 8.01957 5.29289 8.20711C5.48043 8.39464 5.73478 8.5 6 8.5ZM9 4C9.26522 4 9.51957 4.10536 9.70711 4.29289C9.89464 4.48043 10 4.73478 10 5V10C10 10.2652 9.89464 10.5196 9.70711 10.7071C9.51957 10.8946 9.26522 11 9 11H3C2.73478 11 2.48043 10.8946 2.29289 10.7071C2.10536 10.5196 2 10.2652 2 10V5C2 4.73478 2.10536 4.48043 2.29289 4.29289C2.48043 4.10536 2.73478 4 3 4H3.5V3C3.5 2.33696 3.76339 1.70107 4.23223 1.23223C4.70107 0.763392 5.33696 0.5 6 0.5C6.3283 0.5 6.65339 0.564664 6.95671 0.690301C7.26002 0.815938 7.53562 1.00009 7.76777 1.23223C7.99991 1.46438 8.18406 1.73998 8.3097 2.04329C8.43534 2.34661 8.5 2.6717 8.5 3V4H9ZM6 1.5C5.60218 1.5 5.22064 1.65804 4.93934 1.93934C4.65804 2.22064 4.5 2.60218 4.5 3V4H7.5V3C7.5 2.60218 7.34196 2.22064 7.06066 1.93934C6.77936 1.65804 6.39782 1.5 6 1.5Z" fill="#12B76A"/>
</svg>  Your Payment information is safe with us</p>
      </div>
      </div>
      <div className="bg-[#D1E9FF] text-[#175CD3] text-sm p-2 flex gap-1 items-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M8 1C6.61553 1 5.26216 1.41054 4.11101 2.17971C2.95987 2.94888 2.06266 4.04213 1.53285 5.32122C1.00303 6.6003 0.86441 8.00776 1.13451 9.36563C1.4046 10.7235 2.07129 11.9708 3.05026 12.9497C4.02922 13.9287 5.2765 14.5954 6.63437 14.8655C7.99224 15.1356 9.3997 14.997 10.6788 14.4672C11.9579 13.9373 13.0511 13.0401 13.8203 11.889C14.5895 10.7378 15 9.38447 15 8C15 6.14348 14.2625 4.36301 12.9497 3.05025C11.637 1.7375 9.85652 1 8 1ZM8 4C8.14834 4 8.29334 4.04399 8.41668 4.1264C8.54002 4.20881 8.63615 4.32594 8.69291 4.46299C8.74968 4.60003 8.76453 4.75083 8.73559 4.89632C8.70665 5.0418 8.63522 5.17544 8.53033 5.28033C8.42544 5.38522 8.29181 5.45665 8.14632 5.48559C8.00083 5.51453 7.85004 5.49968 7.71299 5.44291C7.57595 5.38614 7.45881 5.29001 7.3764 5.16668C7.29399 5.04334 7.25 4.89834 7.25 4.75C7.25 4.55109 7.32902 4.36032 7.46967 4.21967C7.61033 4.07902 7.80109 4 8 4ZM10 12.0625H6V10.9375H7.4375V8.0625H6.5V6.9375H8.5625V10.9375H10V12.0625Z" fill="#175CD3"/>
</svg> Please collect bank vouchers to avail bank discounts and mega deals.
      </div>
      <p className='text-[#666] px-3 font-semibold'>Recommended Methods</p>
      <label className="flex items-center bg-[#FFF] space-x-3 p-3 cursor-pointer" 
      >
          <input
            type="radio"
            name="paymentMethod"
            className="w-5 h-5 accent-[#002882]" 
            checked={selectedMethod==='masterCard'} onChange={handleChange}
            value='masterCard'
          />
          <span className='border border-[#F2F2F2] rounded-[5px] p-2'>
          <img src={mastercard} className='w-7' />

          </span>
          <span className="text-lg text-[#999]">5590 ******** 2298</span>
          <button className=" text-[#002882] underline">Edit</button>
        </label>
        
      <label className="flex flex-col bg-[#FFF] space-x-3 p-3 cursor-pointer" >
          <div onClick={()=>{setCardDetail(true);setPaymentMethod(false)}}>
          <div className='flex items-center gap-2'>
          <input
            type="radio" onChange={handleChange}
            name="paymentMethod" checked={selectedMethod==='newcard'}
            value='newcard'
            className="w-5 h-5 accent-[#002882]"
          />
          <span>
          <p className='border border-[#F2F2F2] w-full rounded-[5px] p-1'>
          <img src={newcard} className='w-7' />
          </p>
          
          </span>
          <span className="text-lg text-[#1A1A1A]">Add a new card</span>
          
          </div>
          <div className='flex mt-1 gap-2'>
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
          </div>
        </label>
      
        <p className='text-[#666] px-3 font-semibold'>Other Payment Methods</p>
      {paymentOptions.map((method) => (
        <label key={method.id} className="flex items-center bg-[#FFF] space-x-3 p-3 cursor-pointer">
          <input
            type="radio"
            name="paymentMethod"
            value={method.name}
            checked={selectedMethod === method.name}
            onChange={handleChange}
            className="w-5 h-5 accent-[#002882]"
          />
          <span className="text-xl text-gray-700"><img src={method.icon} className='w-7' /></span>
          <span className="text-lg text-gray-900">{method.name}</span>
          {method.details && <span className="ml-auto text-gray-600">{method.details}</span>}
        </label>
      ))}

<label className="flex items-center bg-[#FFF] space-x-3 p-3 cursor-pointer">
          <input
            type="radio"
            name="paymentMethod" onChange={handleChange} checked={selectedMethod==='cashondelivery'}
            value='cashondelivery' className="w-5 h-5 accent-[#002882]"
          />
          <span className='border border-[#F2F2F2] rounded-[5px] p-2'>
          <img src={cashondelivery} className='w-7 aspect-square' />
          </span>
          <span className="text-lg text-[#1A1A1A]">Cash on Delivery</span>
          
        </label>

        <p className='text-[#666] px-3 font-semibold'>Instalment Plans</p>
        <label className="flex flex-col bg-[#FFF] space-x-3 p-3 cursor-pointer">
          <div onClick={()=>{setInstallmentPayment(true);setPaymentMethod(false)}}>
          <div className='flex items-center gap-2'>
          <input
            type="radio" 
            name="paymentMethod" onChange={handleChange} checked={selectedMethod==='buynowlater'}
            value='buynowlater' className="w-5 h-5 accent-[#002882]"
          />
          <span>
          <p className='border border-[#F2F2F2] w-full rounded-[5px] p-1'>
          <img src={buynowlater} className='w-7 aspect-square' />
          </p>
          
          </span>
          <span className="text-lg text-[#1A1A1A]">Buy Now Pay Later</span>
          
          </div>
          <div className='flex mt-1 gap-0.5 bg-[#FEF6E6] p-2 rounded-[5px] '>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M5.05909 7.96976C4.64045 7.96976 4.26111 7.7231 4.09129 7.34044C3.85408 6.80594 4.09508 6.18035 4.62958 5.94314L10.8511 3.18205C11.398 2.93932 12.0222 2.93932 12.5691 3.18205L18.7906 5.94314C19.1733 6.11296 19.4199 6.4923 19.4199 6.91094C19.4199 7.49571 18.9459 7.96976 18.3611 7.96976H5.05909Z" fill="#EEA500" stroke="#002882" strokeLinecap="round"/>
  <path d="M6 10.6C6 10.2686 6.26863 10 6.6 10H7.4C7.73137 10 8 10.2686 8 10.6V17.4C8 17.7314 7.73137 18 7.4 18H6.6C6.26863 18 6 17.7314 6 17.4V10.6Z" fill="#FEF6E6" stroke="#002882" strokeLinecap="round"/>
  <path d="M12.4 10H11.6C11.2686 10 11 10.2686 11 10.6V17.4C11 17.7314 11.2686 18 11.6 18H12.4C12.7314 18 13 17.7314 13 17.4V10.6C13 10.2686 12.7314 10 12.4 10Z" fill="#FEF6E6" stroke="#002882" strokeLinecap="round"/>
  <path d="M16 10.6C16 10.2686 16.2686 10 16.6 10H17.4C17.7314 10 18 10.2686 18 10.6V17.4C18 17.7314 17.7314 18 17.4 18H16.6C16.2686 18 16 17.7314 16 17.4V10.6Z" fill="#FEF6E6" stroke="#002882" strokeLinecap="round"/>
  <path d="M11.0054 20.5093H4.5625" stroke="#002882" strokeLinecap="round"/>
  <path d="M15.3471 20.7666C17.7446 20.7666 19.6882 18.823 19.6882 16.4254C19.6882 14.0278 17.7446 12.0842 15.3471 12.0842C12.9495 12.0842 11.0059 14.0278 11.0059 16.4254C11.0059 18.823 12.9495 20.7666 15.3471 20.7666Z" fill="#EEA500" stroke="#002882" strokeLinecap="round"/>
  <path d="M13.9971 15.8311C14.4767 15.8311 14.8654 15.4424 14.8654 14.9628C14.8654 14.4833 14.4767 14.0946 13.9971 14.0946C13.5176 14.0946 13.1289 14.4833 13.1289 14.9628C13.1289 15.4424 13.5176 15.8311 13.9971 15.8311Z" fill="#FEF6E6" stroke="#002882" strokeLinecap="round"/>
  <path d="M16.8546 19.0284C17.3341 19.0284 17.7228 18.6397 17.7228 18.1601C17.7228 17.6806 17.3341 17.2919 16.8546 17.2919C16.3751 17.2919 15.9863 17.6806 15.9863 18.1601C15.9863 18.6397 16.3751 19.0284 16.8546 19.0284Z" fill="#FEF6E6" stroke="#002882" strokeLinecap="round"/>
  <path d="M17.0965 14.6141L13.6191 18.5342" stroke="#002882" strokeLinecap="round"/>
</svg> Installment Offers available up to 36 months <button className='text-[#002882] underline'>View more details</button>
            
          </div>
          </div>
        </label>
     
      </div>
      <div className="flex justify-between items-center shadow-[0px_-3px_6px_rgba(0,0,0,0.1)] mt-4 bg-white p-3">
        <p className="text-lg font-semibold">Total: <span className="text-[#002882]">PKR 20,000</span></p>
        <button className="bg-[#002882] text-white px-6 py-2 rounded-md">Pay Now</button>
      </div>
    </div>}

    {cardDetail && <div>
      <button className='bg-[#FCFCFC] flex items-center w-full gap-2 py-2' onClick={()=>{setPaymentMethod(true);setCardDetail(false);}}>
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="37" viewBox="0 0 36 37" fill="none">
  <path d="M21 12.5L15 18.5L21 24.5" stroke="#333333" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
      <div>
      <h2 className="text-lg font-semibold text-start">Choose Payment Method</h2>
      <p className="text-green-600 text-sm flex gap-2 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
  <path d="M6 8.5C6.26522 8.5 6.51957 8.39464 6.70711 8.20711C6.89464 8.01957 7 7.76522 7 7.5C7 7.23478 6.89464 6.98043 6.70711 6.79289C6.51957 6.60536 6.26522 6.5 6 6.5C5.73478 6.5 5.48043 6.60536 5.29289 6.79289C5.10536 6.98043 5 7.23478 5 7.5C5 7.76522 5.10536 8.01957 5.29289 8.20711C5.48043 8.39464 5.73478 8.5 6 8.5ZM9 4C9.26522 4 9.51957 4.10536 9.70711 4.29289C9.89464 4.48043 10 4.73478 10 5V10C10 10.2652 9.89464 10.5196 9.70711 10.7071C9.51957 10.8946 9.26522 11 9 11H3C2.73478 11 2.48043 10.8946 2.29289 10.7071C2.10536 10.5196 2 10.2652 2 10V5C2 4.73478 2.10536 4.48043 2.29289 4.29289C2.48043 4.10536 2.73478 4 3 4H3.5V3C3.5 2.33696 3.76339 1.70107 4.23223 1.23223C4.70107 0.763392 5.33696 0.5 6 0.5C6.3283 0.5 6.65339 0.564664 6.95671 0.690301C7.26002 0.815938 7.53562 1.00009 7.76777 1.23223C7.99991 1.46438 8.18406 1.73998 8.3097 2.04329C8.43534 2.34661 8.5 2.6717 8.5 3V4H9ZM6 1.5C5.60218 1.5 5.22064 1.65804 4.93934 1.93934C4.65804 2.22064 4.5 2.60218 4.5 3V4H7.5V3C7.5 2.60218 7.34196 2.22064 7.06066 1.93934C6.77936 1.65804 6.39782 1.5 6 1.5Z" fill="#12B76A"/>
</svg>  Your Payment information is safe with us</p>
      </div>
      </button>
      <div className='flex flex-col justify-between h-[88vh]'>
      <div className='p-3'>
          <div className='flex mt-1 gap-2'>
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
          <Input type="text" placeholder='Card Number' className="mt-3" />
          <Input type="text" placeholder='Cardholder Name' className="mt-3" />
          <div className='mt-3 flex gap-3'>
          <input type="date" placeholder='Expiry Date' className="mt-3 w-full px-4 py-2 items-center inline-block
          gap-3 self-stretch rounded-md border border-gray-300 focus:outline-none focus:ring-0 focus:ring-gray-400" />
          <Input type="text" placeholder='CVV' className="mt-3" />
          </div>
          <div className="flex justify-between items-center mt-4">
        <span className="text-[#1A1A1A]">Save card details</span>
        <label class="inline-flex items-center me-5 cursor-pointer">
  <input type="checkbox" value="" class="sr-only peer"  />
  <div class="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-white dark:peer-focus:ring-[#002882] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#002882] dark:peer-checked:bg-[#002882]"></div>
</label>
      </div>
      </div>
      <div className="flex justify-between items-center shadow-[0px_-3px_6px_rgba(0,0,0,0.1)] mt-4 bg-white p-3">
        <p className="text-lg font-semibold">Total: <span className="text-[#002882]">PKR 20,000</span></p>
        <button className="bg-[#002882] text-white px-6 py-2 rounded-md">Pay Now</button>
      </div>
      </div>
      
      </div>}
    {installmentPayment && <div>
      <button className='bg-[#FCFCFC] flex items-center w-full gap-2 py-2' onClick={()=>{setPaymentMethod(true);setCardDetail(false);}}>
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="37" viewBox="0 0 36 37" fill="none">
  <path d="M21 12.5L15 18.5L21 24.5" stroke="#333333" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
      <div>
      <h2 className="text-lg font-semibold text-start">Add Details</h2>
      </div>
      </button>
      <div className='flex flex-col justify-between h-[88vh]'>
      <form action="" className='p-4'>

      <div>
      <span className="flex items-center gap-1 mb-1">Choose an instalment Partner :  
      <span className="text-[#EEA500] flex ">*</span></span>
      <Select
        options={options}
        placeholder="Please Select"
           />
      </div>

      <div className='mt-3'>
      <span className="flex items-center gap-1 mb-1">Instalment Duration :  
      <span className="text-[#EEA500] flex ">*</span></span>
      <Select
        options={options}
        placeholder="Please Select"
           />
      </div>
      <div className='mt-3'>
      <span className="flex items-center gap-1 mb-1">Customer CNIC :  
      <span className="text-[#EEA500] flex ">*</span></span>
      <Input type="text" placeholder='XXXXX-XXXXXXX-X' className="" />
      </div>
      <div className='mt-3'>
      <span className="flex items-center gap-1 mb-1">Customer Phone Number :  
      <span className="text-[#EEA500] flex ">*</span></span>
      <Input type="text" placeholder='e.g. +92312-3456452' className="" />
      </div>

      <div className=" mt-3">
      {/* Upload ID Front Side */}
      <div className="mb-4">
        <p className="block mb-1">
          Upload ID Front Side<span className="text-[#EEA500]">*</span>
        </p>
        <Input id='frontSidePic' type="file" placeholder='XXXXX-XXXXXXX-X' className="hidden" />
        <label htmlFor='frontSidePic' className="border-2 border-[#EEA500] rounded-lg p-3 flex items-center gap-2 justify-center cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <g clip-path="url(#clip0_7286_120186)">
    <path d="M9 11.25V1.5M9 1.5L11.25 4.125M9 1.5L6.75 4.125" stroke="#002882" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M6 16.5H12C14.121 16.5 15.1823 16.5 15.8408 15.8415C16.5 15.1815 16.5 14.1217 16.5 12V11.25C16.5 9.12896 16.5 8.06846 15.8408 7.40921C15.2648 6.83321 14.3812 6.76046 12.75 6.75146M5.25 6.75146C3.61875 6.76046 2.73525 6.83321 2.15925 7.40921C1.5 8.06846 1.5 9.12896 1.5 11.25V12C1.5 14.1217 1.5 15.1822 2.15925 15.8415C2.38425 16.0665 2.65575 16.2142 3 16.3117" stroke="#002882" stroke-width="1.125" stroke-linecap="round"/>
  </g>
  <defs>
    <clipPath id="clip0_7286_120186">
      <rect width="18" height="18" fill="white"/>
    </clipPath>
  </defs>
</svg>
          <span className="text-[#002882] font-medium">Upload Image</span>
        </label>
        <p className="text-gray-500 text-sm mt-1">
          Image format should be JPEG, PNG, JPG, PDF and less than 2MB
        </p>
      </div>

      {/* Upload ID Back Side */}
      <div className="mb-4">
        <p className="block mb-1">
          Upload ID Back Side<span className="text-[#EEA500]">*</span>
        </p>
        <Input id='backSidePic' type="file" placeholder='XXXXX-XXXXXXX-X' className="hidden" />
        <label htmlFor='backSidePic' className="border-2 border-[#EEA500] rounded-lg p-3 flex items-center gap-2 justify-center cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <g clip-path="url(#clip0_7286_120186)">
    <path d="M9 11.25V1.5M9 1.5L11.25 4.125M9 1.5L6.75 4.125" stroke="#002882" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M6 16.5H12C14.121 16.5 15.1823 16.5 15.8408 15.8415C16.5 15.1815 16.5 14.1217 16.5 12V11.25C16.5 9.12896 16.5 8.06846 15.8408 7.40921C15.2648 6.83321 14.3812 6.76046 12.75 6.75146M5.25 6.75146C3.61875 6.76046 2.73525 6.83321 2.15925 7.40921C1.5 8.06846 1.5 9.12896 1.5 11.25V12C1.5 14.1217 1.5 15.1822 2.15925 15.8415C2.38425 16.0665 2.65575 16.2142 3 16.3117" stroke="#002882" stroke-width="1.125" stroke-linecap="round"/>
  </g>
  <defs>
    <clipPath id="clip0_7286_120186">
      <rect width="18" height="18" fill="white"/>
    </clipPath>
  </defs>
</svg>
          <span className="text-[#002882] font-medium">Upload Image</span>
        </label>
        <p className="text-gray-500 text-sm mt-1">
          Image format should be JPEG, PNG, JPG, PDF and less than 2MB
        </p>
      </div>

      {/* Note */}
      <div className="flex items-start gap-1 text-[#002882] text-sm">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <g clip-path="url(#clip0_7326_123808)">
    <path d="M10 18.75C7.67936 18.75 5.45376 17.8281 3.81282 16.1872C2.17187 14.5462 1.25 12.3206 1.25 10C1.25 7.67936 2.17187 5.45376 3.81282 3.81282C5.45376 2.17187 7.67936 1.25 10 1.25C12.3206 1.25 14.5462 2.17187 16.1872 3.81282C17.8281 5.45376 18.75 7.67936 18.75 10C18.75 12.3206 17.8281 14.5462 16.1872 16.1872C14.5462 17.8281 12.3206 18.75 10 18.75ZM10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 7.34784 18.9464 4.8043 17.0711 2.92893C15.1957 1.05357 12.6522 0 10 0C7.34784 0 4.8043 1.05357 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C4.8043 18.9464 7.34784 20 10 20Z" fill="#002882"/>
    <path d="M11.1624 8.235L8.29994 8.59375L8.19744 9.06875L8.75994 9.1725C9.12744 9.26 9.19994 9.3925 9.11994 9.75875L8.19744 14.0938C7.95494 15.215 8.32869 15.7425 9.20744 15.7425C9.88869 15.7425 10.6799 15.4275 11.0387 14.995L11.1487 14.475C10.8987 14.695 10.5337 14.7825 10.2912 14.7825C9.94744 14.7825 9.82244 14.5413 9.91119 14.1163L11.1624 8.235ZM11.2499 5.625C11.2499 5.95652 11.1182 6.27446 10.8838 6.50888C10.6494 6.7433 10.3315 6.875 9.99994 6.875C9.66842 6.875 9.35048 6.7433 9.11606 6.50888C8.88164 6.27446 8.74994 5.95652 8.74994 5.625C8.74994 5.29348 8.88164 4.97554 9.11606 4.74112C9.35048 4.5067 9.66842 4.375 9.99994 4.375C10.3315 4.375 10.6494 4.5067 10.8838 4.74112C11.1182 4.97554 11.2499 5.29348 11.2499 5.625Z" fill="#002882"/>
  </g>
  <defs>
    <clipPath id="clip0_7326_123808">
      <rect width="20" height="20" fill="white"/>
    </clipPath>
  </defs>
</svg>
        <p>
          <span className="font-semibold">Note:</span> Installments are available for one product at a time during checkout
        </p>
      </div>
    </div>
      </form>
      <div className="flex justify-between items-center shadow-[0px_-3px_6px_rgba(0,0,0,0.1)] mt-4 bg-white p-3">
        <p className="text-lg font-semibold">Total: <span className="text-[#002882]">PKR 20,000</span></p>
        <button className="bg-[#002882] text-white px-6 py-2 rounded-md">Pay Now</button>
      </div>
      </div>
      
      </div>}

    
    </>
  )
}

export default PaymentMethod