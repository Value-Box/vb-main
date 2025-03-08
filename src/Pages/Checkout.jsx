import React from "react";
import FormButton from '../Components/FormButton';
import SAsvg from "/src/Images/SAsvg.svg";
import CheckoutDt1 from "/src/Images/CheckoutDt1.png";
import CheckoutDt2 from "/src/Images/CheckoutDt2.png";
import CheckoutDt3 from "/src/Images/CheckoutDt3.png";




function Checkout() {
  return (
    <div className="w-full p-10 bg-[#FCFCFC]">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Left Section - col-9 */}
        <div className="w-full md:w-3/4 space-y-5">
          {/* Two Equal Columns inside col-9 */}
          <div className="flex flex-col md:flex-row gap-5">
            <div className="w-full md:w-1/2 flex flex-col bg-white p-5 rounded-[5px] border-1 border-[#CCC] gap-5">
              <h3 className="text-[24px] font-semibold">Shippind Address</h3>
              <div className="relative p-2.5 rounded-[10px] border-[1px] border-dashed border-gray-400 pl-5 space-y-[5px]">
              <div className="flex justify-between items-center">
              <span className="text-[16px] font-semibold">
              Farman Haris <span className="mx-2 text-[#999] font-normal">|</span> <span className="text-[#999] text-[14px] font-normal">+92123456789</span>
              </span>
              <button className="flex gap-1 bg-transparent text-[#002882]"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
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
              <div className="flex items-center gap-[10px] p-[10px_15px]  rounded-[5px] bg-[#FEF6E6]">
              <span className="flex flex-col justify-center items-center gap-[10px] p-4 rounded-[5px] border border-[#667EB4] bg-[#FCFCFC]">
              <img src={SAsvg} alt="Icon"/>
              </span>
              <div className="flex flex-col gap-1-">
                <span className="text-[#002882] text-[16px] font-medium">Collect your parcels at a location close to you at a fraction of the delivery fee!</span>
                <span className="text-[#F1B733] text-[16px] font-medium">4 Suggested Collection Point(s) Nearby</span>
              </div>

               </div>

            
            </div>

            <div className="w-full md:w-1/2 flex flex-col bg-white p-5 rounded-[5px] border-1 border-[#CCC] gap-5">
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
            <p className="text-[#666] text-[18px] ">Installment Offers available up to 36 months <a href="" className="text-[#002882] underline"> View more details</a></p>
            </div>
        
            </div>
          </div>
          <div className="w-full bg-white p-5 rounded-[5px] border-1 border-[#CCC] gap-5">
          <h3 className="text-[24px] font-semibold">Payment Method</h3>
           
          </div>
        </div>

        {/* Right Section - col-3 */}
        <div className="w-full md:w-1/4 flex flex-col bg-white p-5 rounded-[5px] border-1 border-[#CCC] gap-5">
        <h1 className='text-md md:text-xl 2xl:text-2xl font-bold'>Order Summery</h1>
          {/* Coupon Input */}
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
  <div className="flex items-center justify-between mt-4 border bg-[#E6EAF3] border-gray-300 rounded-md px-3 py-2 cursor-pointer">
    <div className="flex items-center space-x-2 ">
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
    <p className=" flex gap-2">
    <label className="flex items-center cursor-pointer">
  <input
    type="radio"
    className="peer hidden"
    name="radio-group"
  />
  <span className="flex justify-center items-center w-[18px] h-[18px] rounded-full border border-gray-400 peer-checked:border-[#002882] peer-checked:bg-[#002882] relative">
    {/* Checkmark (✓) appears when checked */}
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path d="M13.5288 5.7668C13.4661 5.70354 13.3914 5.65332 13.3092 5.61905C13.2269 5.58478 13.1387 5.56714 13.0496 5.56714C12.9605 5.56714 12.8722 5.58478 12.79 5.61905C12.7077 5.65332 12.6331 5.70354 12.5703 5.7668L7.54156 10.8023L5.42881 8.6828C5.36366 8.61987 5.28675 8.57038 5.20247 8.53717C5.1182 8.50395 5.0282 8.48767 4.93763 8.48923C4.84706 8.4908 4.75768 8.51019 4.6746 8.5463C4.59153 8.58241 4.51637 8.63453 4.45344 8.69968C4.3905 8.76483 4.34102 8.84174 4.3078 8.92602C4.27459 9.01029 4.2583 9.10029 4.25987 9.19086C4.26144 9.28143 4.28083 9.37081 4.31694 9.45389C4.35304 9.53696 4.40516 9.61212 4.47031 9.67505L7.06231 12.2671C7.12506 12.3303 7.19972 12.3805 7.28197 12.4148C7.36423 12.4491 7.45246 12.4667 7.54156 12.4667C7.63067 12.4667 7.7189 12.4491 7.80115 12.4148C7.88341 12.3805 7.95806 12.3303 8.02081 12.2671L13.5288 6.75905C13.5973 6.69584 13.652 6.61913 13.6894 6.53374C13.7268 6.44835 13.7461 6.35615 13.7461 6.26293C13.7461 6.16971 13.7268 6.0775 13.6894 5.99211C13.652 5.90673 13.5973 5.83001 13.5288 5.7668V5.7668Z" fill="white"/>
</svg>
  </span>
</label>

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
  <button className="w-full bg-[#002882] text-white font-bold py-3 rounded-md">
  Place Order
  </button>
  <p className="text-[#999] text-[14px] font-normal text-center
">Upon clicking 'Place Order', I confirm I have read and acknowledged <a href="" className="text-[#002882] underline"> all terms and policies.</a></p>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
