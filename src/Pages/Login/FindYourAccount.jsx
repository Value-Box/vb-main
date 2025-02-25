import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Input from '../../Components/Input';
import FormButton from "../../Components/FormButton";
import LoginImage from "/src/Images/LoginImage.png";
import { motion } from "framer-motion";

function FindYourAccount() {


  
  const [view, setView] = useState("main"); 
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [orderInfo, setOrderInfo] = useState("");
  const [accounts, setAccounts] = useState([]);

  const handleFindAccount = () => {
    // Simulating API response
    const fakeAccounts = [
      { id: 1, name: "Sajeela", email:"waseemsajeela123@gmail.com", Image:LoginImage},
      { id: 2, name: "Jane Smith", email :"123@gmail.com", Image:LoginImage},
       


    ];
    setAccounts(fakeAccounts);
    setView("results");
  };

  return (


    
    <div className="flex flex-col items-center h-screen">
      <div className="bg-white mt-10 px-5 md:px-0 w-full max-w-md">
      {view === "main" && (
          <NavLink to="/LoginSignup">
            <motion.span 
              className="flex flex-row gap-1 text-[#002882] cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M19.0004 10.9999H7.83041L12.7104 6.11991C13.1004 5.72991 13.1004 5.08991 12.7104 4.69991C12.6179 4.60721 12.508 4.53366 12.387 4.48348C12.2661 4.4333 12.1364 4.40747 12.0054 4.40747C11.8744 4.40747 11.7448 4.4333 11.6238 4.48348C11.5028 4.53366 11.3929 4.60721 11.3004 4.69991L4.71041 11.2899C4.61771 11.3824 4.54416 11.4923 4.49398 11.6133C4.4438 11.7343 4.41797 11.8639 4.41797 11.9949C4.41797 12.1259 4.4438 12.2556 4.49398 12.3765C4.54416 12.4975 4.61771 12.6074 4.71041 12.6999L11.3004 19.2899C11.393 19.3825 11.5029 19.4559 11.6239 19.506C11.7448 19.5561 11.8745 19.5819 12.0054 19.5819C12.1363 19.5819 12.266 19.5561 12.387 19.506C12.5079 19.4559 12.6178 19.3825 12.7104 19.2899C12.803 19.1973 12.8764 19.0874 12.9265 18.9665C12.9766 18.8455 13.0024 18.7158 13.0024 18.5849C13.0024 18.454 12.9766 18.3243 12.9265 18.2034C12.8764 18.0824 12.803 17.9725 12.7104 17.8799L7.83041 12.9999H19.0004C19.5504 12.9999 20.0004 12.5499 20.0004 11.9999C20.0004 11.4499 19.5504 10.9999 19.0004 10.9999Z" fill="#002882"/>
              </svg>
              Back
            </motion.span>
          </NavLink>
        )}
     {view !== "main" && (
          <motion.button
            onClick={() => setView("main")}
            className="flex items-center gap-2 text-[#002882] cursor-pointer mb-4"
            whileHover={{ scale: 1.05 }}
          >
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M19.0004 10.9999H7.83041L12.7104 6.11991C13.1004 5.72991 13.1004 5.08991 12.7104 4.69991C12.6179 4.60721 12.508 4.53366 12.387 4.48348C12.2661 4.4333 12.1364 4.40747 12.0054 4.40747C11.8744 4.40747 11.7448 4.4333 11.6238 4.48348C11.5028 4.53366 11.3929 4.60721 11.3004 4.69991L4.71041 11.2899C4.61771 11.3824 4.54416 11.4923 4.49398 11.6133C4.4438 11.7343 4.41797 11.8639 4.41797 11.9949C4.41797 12.1259 4.4438 12.2556 4.49398 12.3765C4.54416 12.4975 4.61771 12.6074 4.71041 12.6999L11.3004 19.2899C11.393 19.3825 11.5029 19.4559 11.6239 19.506C11.7448 19.5561 11.8745 19.5819 12.0054 19.5819C12.1363 19.5819 12.266 19.5561 12.387 19.506C12.5079 19.4559 12.6178 19.3825 12.7104 19.2899C12.803 19.1973 12.8764 19.0874 12.9265 18.9665C12.9766 18.8455 13.0024 18.7158 13.0024 18.5849C13.0024 18.454 12.9766 18.3243 12.9265 18.2034C12.8764 18.0824 12.803 17.9725 12.7104 17.8799L7.83041 12.9999H19.0004C19.5504 12.9999 20.0004 12.5499 20.0004 11.9999C20.0004 11.4499 19.5504 10.9999 19.0004 10.9999Z" fill="#002882"/>
              </svg>  Back
          </motion.button>
        )}
     
        {view === "main" && (
          <>
            <h2 className="text-2xl font-bold mt-5">Find Your Account</h2>
            <p className="text-[#666] text-lg mt-2">
              You can find your account by using one of the following methods:
            </p>

            <div className="mt-5">
              <div
                className="flex justify-between border-b border-[#F2F2F2] pb-2 cursor-pointer"
                onClick={() => setView("email")}
              >
                <span className="text-md text-gray-800 font-medium">By Email Address</span>
                 <svg
                 className="w-6 h-6 text-gray-800 cursor-pointer"
                 fill="none"
                 stroke="currentColor"
                 strokeWidth="2"
                 viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg"
                 >
                   <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
                 </svg>

              </div>

              <div
                className="flex justify-between border-b border-[#F2F2F2] pb-2 mt-3 cursor-pointer"
                onClick={() => setView("phone")}
              >
                <span className="text-md text-gray-800 font-medium">By Phone Number</span>
                <svg
                className="w-6 h-6 text-gray-800 cursor-pointer"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                                                 >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
                 </svg>
              </div>

              <div
                className="flex justify-between border-b border-[#F2F2F2] pb-2 mt-3 cursor-pointer"
                onClick={() => setView("order")}
              >
                <span className="text-md text-gray-800 font-medium">By Order Information</span>
                <svg
                className="w-6 h-6 text-gray-800 cursor-pointer"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                                                 >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
                 </svg>

              </div>
            </div>
          </>
        )}

        {view === "email" && (
          <div>
            <h2 className="text-2xl font-bold">Find by email address</h2>
            <p className="text-[#666] text-lg mt-2">Enter your emails address to get verification code to recover your account.</p>
            <label className="block text-blue-900 text-[14px] font-medium mb-1 mt-[20px]">Your email address</label>
            <Input  type="email" placeholder="Enter your email" value={email}  onChange={(e) => setEmail(e.target.value)} className="w-full border border-gray-300 rounded-md p-2 mt-3"/>
           
            <FormButton
             onClick={handleFindAccount}
             className="bg-blue-900 text-white w-full mb-1 cursor-pointer mt-[20px]"
            >
              Find account
            </FormButton>
          </div>
        )}

        
        {view === "phone" && (
          <div>
            <h2 className="text-2xl font-bold">Find by phone number</h2>
            <p className="text-[#666] text-lg mt-2">Enter your phone number to find your account.</p>
                
            <label className="block text-blue-900 text-[14px] font-medium mb-1 mt-[20px]">Your Phone Number</label>
            <Input  type="text" placeholder="Enter your phone number" value={number}  onChange={(e) => setNumber(e.target.value)} className="w-full border border-gray-300 rounded-md p-2 mt-3"/>

           
            <FormButton
             onClick={handleFindAccount}
             className="bg-blue-900 text-white w-full mb-1 cursor-pointer mt-[20px]"
           >
             Find account
           </FormButton>
          </div>
        )}

      
        {view === "order" && (
          <div>
            <h2 className="text-2xl font-bold">Find by order information</h2>
            <p className="text-[#666] text-lg mt-2">Enter your order details to find your account.</p>
            <label className="block text-blue-900 text-[14px] font-medium mb-1 mt-[20px]">Your Order Number</label>
            <Input  type="text" placeholder="Enter order number" value={orderInfo}  onChange={(e) => setOrderInfo(e.target.value)} className="w-full border border-gray-300 rounded-md p-2 mt-3"/>
            <FormButton
              onClick={handleFindAccount}
              className="bg-blue-900 text-white w-full mb-1 cursor-pointer mt-[20px]" >
              Find account
            </FormButton>
          </div>
        )}

{view === "results" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <h2 className="text-2xl font-bold">Account linked with this email:</h2>
            <ul className="mt-3 space-y-2.5">
              {accounts.length > 0 ? (
                accounts.map((account) => (
                  <motion.li
                    key={account.id}
                    className="flex items-center gap-4 p-2 border rounded-full border-gray-300 bg-white"
                    whileHover={{ scale: 1.05, backgroundColor: "#f0f0f0" }}
                  >
                    <img src={account.Image} alt={account.name} className="w-12 h-12 rounded-full object-cover" />
                    <div className="flex flex-col">
                      <p className="text-black text-xm font-normal">{account.email}</p>
                    </div>
                  </motion.li>
                ))
              ) : (
                <p>No accounts found.</p>
              )}
            </ul>
          </motion.div>
        )}
      



      </div>
    </div>
  );
}

export default FindYourAccount;
