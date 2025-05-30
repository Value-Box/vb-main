import React, { useState } from "react";
import Input from '../../Components/Input';

import FormButton from "../../Components/FormButton";
import { NavLink } from "react-router-dom";



function ResetPassword() {
  const [selectedOption, setSelectedOption] = useState("email");

  return (
    <>
  
    <div className="flex flex-col items-center h-screen ">
      <div className="bg-white w-98 mt-10 px-5 md:px-0">
        <NavLink to="/LoginSignup">
        <span className="flex flex-row gap-1 text-[#002882]"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M19.0004 10.9999H7.83041L12.7104 6.11991C13.1004 5.72991 13.1004 5.08991 12.7104 4.69991C12.6179 4.60721 12.508 4.53366 12.387 4.48348C12.2661 4.4333 12.1364 4.40747 12.0054 4.40747C11.8744 4.40747 11.7448 4.4333 11.6238 4.48348C11.5028 4.53366 11.3929 4.60721 11.3004 4.69991L4.71041 11.2899C4.61771 11.3824 4.54416 11.4923 4.49398 11.6133C4.4438 11.7343 4.41797 11.8639 4.41797 11.9949C4.41797 12.1259 4.4438 12.2556 4.49398 12.3765C4.54416 12.4975 4.61771 12.6074 4.71041 12.6999L11.3004 19.2899C11.393 19.3825 11.5029 19.4559 11.6239 19.506C11.7448 19.5561 11.8745 19.5819 12.0054 19.5819C12.1363 19.5819 12.266 19.5561 12.387 19.506C12.5079 19.4559 12.6178 19.3825 12.7104 19.2899C12.803 19.1973 12.8764 19.0874 12.9265 18.9665C12.9766 18.8455 13.0024 18.7158 13.0024 18.5849C13.0024 18.454 12.9766 18.3243 12.9265 18.2034C12.8764 18.0824 12.803 17.9725 12.7104 17.8799L7.83041 12.9999H19.0004C19.5504 12.9999 20.0004 12.5499 20.0004 11.9999C20.0004 11.4499 19.5504 10.9999 19.0004 10.9999Z" fill="#002882"/>
</svg>Back</span>
        </NavLink>
      

        <h2 className="text-2xl font-bold mb-1 mt-5">Reset your password</h2>
        <p className="text-[#666]">
          Enter your email address to get a verification code to reset your password.
        </p>

       {/* Radio Buttons */}
<div className="flex gap-4 mb-4 mt-5">
  <label className="flex items-center gap-2 cursor-pointer text-[#666] text-[18px]">
    <input
      type="radio"
      name="option"
      value="email"
      checked={selectedOption === "email"}
      onChange={() => setSelectedOption("email")}
      className="hidden peer"
    />
    <div className="w-5 h-5 border-1 border-gray-400 rounded-full flex items-center justify-center peer-checked:bg-[#002882]">
      {selectedOption === "email" && <span className="w-2.5 h-2.5 bg-white rounded-full"></span>}
    </div>
    Email
  </label>

  <label className="flex items-center gap-2 cursor-pointer text-[#666] text-[18px]">
    <input
      type="radio"
      name="option"
      value="password"
      checked={selectedOption === "password"}
      onChange={() => setSelectedOption("password")}
      className="hidden peer"
    />
    <div className="w-5 h-5 border-1 border-gray-400 rounded-full flex items-center justify-center peer-checked:bg-[#002882]">
      {selectedOption === "password" && <span className="w-2.5 h-2.5 bg-white rounded-full"></span>}
    </div>
    Password
  </label>
</div>

{/* Conditional Input Rendering */}
{selectedOption === "email" && (
  <div className="mt-5">
    <label className="block text-blue-900">Your Email</label>
    <Input type="email" placeholder="Enter your email" className="w-full mb-3 !mt-10" />
  </div>
)}

{selectedOption === "password" && (
    <div className="mt-5">
   <label className="block text-blue-900">Your Password</label>     
   <Input type="password" placeholder="Enter your password" className="w-full mb-3 !mt-10" />
    </div>
  
)}


        <NavLink to="/GetCode">
        <FormButton className="w-full bg-[#002882] text-white py-2 rounded-md mt-3">
         Get Code
        </FormButton>
        </NavLink>
     
       
      </div>
    </div>
    </>
    
  );
}

export default ResetPassword;
