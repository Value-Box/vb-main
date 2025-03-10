import React from "react";
import { useState} from "react";
import Select from "../Components/Select"
import FormButton from '../Components/FormButton';
import Input from '../Components/Input';
import CheckBox from '../Components/CheckBox';
import SAsvg from "/src/Images/SAsvg.svg";
import jazzcash from "/src/Images/jazzcash.svg";
import CheckoutDt1 from "/src/Images/CheckoutDt1.png";
import CheckoutDt2 from "/src/Images/CheckoutDt2.png";
import CheckoutDt3 from "/src/Images/CheckoutDt3.png";




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
          <div className="w-full flex flex-col bg-white p-5 rounded-[5px] border-1 border-[#CCC] gap-5">
          <h3 className="text-[24px] font-semibold">Payment Method</h3>
        
          <div className="flex gap-2.5 items-baseline">
           <CheckBox/>
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
           <span className="flex p-2.5 flex-col justify-center items-center gap-2.5 rounded-[5px] border border-[#CCC] bg-[#FCFCFC]">
           <svg xmlns="http://www.w3.org/2000/svg" width="34" height="24" viewBox="0 0 36 36" fill="none">
  <path d="M9 18H27M18 27L18 9" stroke="#999999" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </span>
             <span className="text-black text-[18px] font-medium">Add New Card</span>            

           </div>
           </div>
       </div>
           <div className="flex gap-2.5 items-center">
           <CheckBox/>
           <span className="flex p-2.5 flex-col justify-center items-center gap-2.5 rounded-[5px] border border-[#CCC] bg-[#FCFCFC]">
           <img src={jazzcash} className="w-[34px] h-[24px]" alt="Icon"/>
            </span>
            <span className="text-black text-[18px] font-medium">JazzCash</span>             

           </div>
           <div className="flex gap-2.5 items-center">
           <CheckBox/>
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
           <CheckBox/>
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
           <CheckBox/>
           <span className="flex p-2.5 flex-col justify-center items-center gap-2.5 rounded-[5px] border border-[#CCC] bg-[#FCFCFC]">
           <svg xmlns="http://www.w3.org/2000/svg" width="34" height="24" viewBox="0 0 36 36" fill="none">
  <path d="M21 27.75C21 27.75 22.5 27.75 24 30.75C24 30.75 28.7655 23.25 33 21.75M8.25 17.25H8.2365M16.5 29.25H15.75C10.1115 29.25 7.293 29.25 5.4105 27.765C5.11134 27.528 4.8333 27.2655 4.5795 26.9805C3 25.2105 3 22.5555 3 17.25C3 11.9445 3 9.291 4.5795 7.5195C4.8325 7.2355 5.1095 6.9745 5.4105 6.7365C7.293 5.25 10.1115 5.25 15.75 5.25H20.25C25.8885 5.25 28.707 5.25 30.588 6.735C30.89 6.975 31.1675 7.2365 31.4205 7.5195C32.844 9.1155 32.985 11.427 33 15.75V16.5" stroke="#1A1A1A" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M21.75 17.25C21.75 18.2446 21.3549 19.1984 20.6517 19.9017C19.9484 20.6049 18.9946 21 18 21C17.0054 21 16.0516 20.6049 15.3483 19.9017C14.6451 19.1984 14.25 18.2446 14.25 17.25C14.25 16.2554 14.6451 15.3016 15.3483 14.5983C16.0516 13.8951 17.0054 13.5 18 13.5C18.9946 13.5 19.9484 13.8951 20.6517 14.5983C21.3549 15.3016 21.75 16.2554 21.75 17.25Z" stroke="#1A1A1A" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </span>
            <span className="text-black text-[18px] font-medium">Buy Now Pay Later</span>              
           </div>
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
           <Input type="text" placeholder="XXXX-XXXXXXX-X" />
              </div>
              <div className="w-full flex flex-col gap-1">
              <label className="text-gray-600 text-[16px] font-medium">Customer Phone Number  <span className="text-yellow-400">*</span></label>
                <Input type="text" placeholder=" +92312-3456452" />
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
            <div className="w-full flex flex-col bg-white p-5 rounded-[5px] border-1 border-[#CCC] gap-5">
            <div className="w-full flex flex-col gap-1">
           <label className="text-gray-600 text-[16px] font-medium">Order Note (Optional)<span className="text-yellow-400">*</span></label>
           <Input type="text" placeholder="Please Input" />
              </div>
             <div>
              
             </div>

            </div>
        </div>

        {/* Right Section - col-3 */}
        <div className="w-full md:w-1/4 flex flex-col bg-white p-5 rounded-[5px] border-1 border-[#CCC] gap-5">
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
  <button className="w-full bg-[#002882] text-white font-bold py-3 rounded-md">
  Place Order
  </button>
  <p className="text-[#999] text-[14px] font-normal text-center">Upon clicking 'Place Order', I confirm I have read and acknowledged <a href="" className="text-[#002882] underline"> all terms and policies.</a></p>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
