import React from 'react'
import AccountSideBar from '../Components/AccountSideBar'
import google from "/src/Images/google.svg";
import applepay from "/src/Images/applepay.svg";

function AccountSecurity() {
  return (
    <div className='sm:flex mx-auto max-w-[1920px] w-full items-start gap-2 sm:gap-4 sm:p-6 sm:bg-natural-0'>
        <div className='hidden sm:block'><AccountSideBar/></div>
        <div className='w-full'>
        <div className="sm:border border-[#F2F2F2] sm:rounded-[10px] p-4 flex items-start gap-3 bg-white">
      <div className="bg-[#D1FADF] p-2 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <path d="M15 21.2502C15.663 21.2502 16.2989 20.9869 16.7678 20.518C17.2366 20.0492 17.5 19.4133 17.5 18.7502C17.5 18.0872 17.2366 17.4513 16.7678 16.9825C16.2989 16.5136 15.663 16.2502 15 16.2502C14.337 16.2502 13.7011 16.5136 13.2322 16.9825C12.7634 17.4513 12.5 18.0872 12.5 18.7502C12.5 19.4133 12.7634 20.0492 13.2322 20.518C13.7011 20.9869 14.337 21.2502 15 21.2502ZM22.5 10.0002C23.163 10.0002 23.7989 10.2636 24.2678 10.7325C24.7366 11.2013 25 11.8372 25 12.5002V25.0002C25 25.6633 24.7366 26.2992 24.2678 26.768C23.7989 27.2369 23.163 27.5002 22.5 27.5002H7.5C6.83696 27.5002 6.20107 27.2369 5.73223 26.768C5.26339 26.2992 5 25.6633 5 25.0002V12.5002C5 11.8372 5.26339 11.2013 5.73223 10.7325C6.20107 10.2636 6.83696 10.0002 7.5 10.0002H8.75V7.50024C8.75 5.84264 9.40848 4.25293 10.5806 3.08083C11.7527 1.90872 13.3424 1.25024 15 1.25024C15.8208 1.25024 16.6335 1.41191 17.3918 1.726C18.1501 2.04009 18.8391 2.50046 19.4194 3.08083C19.9998 3.66119 20.4602 4.35019 20.7742 5.10847C21.0883 5.86676 21.25 6.67948 21.25 7.50024V10.0002H22.5ZM15 3.75024C14.0054 3.75024 13.0516 4.14533 12.3483 4.84859C11.6451 5.55186 11.25 6.50568 11.25 7.50024V10.0002H18.75V7.50024C18.75 6.50568 18.3549 5.55186 17.6517 4.84859C16.9484 4.14533 15.9946 3.75024 15 3.75024Z" fill="#12B76A"/>
</svg>
      </div>
      <div>
        <h3 className="text-[#12B76A] font-medium text-xl 2xl:text-2xl">Your account is protected</h3>
        <p className="text-natural-gray text-sm 2xl:text-lg">
          Your ValueBox account is protected with advanced security. Keeping your
          information updated helps ensure your account remains safe.
        </p>
      </div>
    </div>
    
    <div className="sm:border border-[#F2F2F2] sm:rounded-[10px] bg-white p-4 sm:mt-4">
    <div className='h-px bg-gray-200 '></div>
      <div className="divide-y divide-gray-200">
        {[
          { label: "Mobile phone number", button: "Add" },
          { label: "Email", value: "muhammadshad@gmail.com", button: "Edit" },
          { label: "Password", button: "Add" },
          {
            label: "Two-factor authentication: Off",
            subtext: "Protect your account by adding an extra layer of security.",
            button: "Turn On",
          },
        ].map((item, index) => (
          <div key={index} className="flex justify-between items-center py-3">
            <div>
              <p className="font-medium text-natural-black">{item.label}</p>
              {item.value && <p className="text-natural-gray text-sm">{item.value}</p>}
              {item.subtext && <p className="text-natural-gray text-sm">{item.subtext}</p>}
            </div>
            <button className="bg-dark-blue min-w-[100px] text-white px-4 py-1.5 rounded-full 2xl:text-base text-sm">
              {item.button}
            </button>
          </div>
        ))}
      </div>
    </div>

    <div className="sm:border border-[#F2F2F2] sm:rounded-[10px] bg-white p-4 mt-4">
      <p className="font-medium text-xl text-gray-900 mb-3">Third Party Accounts</p>
      <div className="divide-y divide-gray-200">
        {[
          { icon: google, label: "Google", button: "Unlink", color: "bg-[#FEF3F2] text-[#F04438] font-semibold" },
          { icon: applepay, label: "Facebook", button: "Link", color: "bg-blue-900 text-white" },
          { icon: google, label: "Apple", button: "Link", color: "bg-blue-900 text-white" },
        ].map((item, index) => (
          <div key={index} className="flex justify-between items-center py-3">
            <div className="flex items-center gap-3">
              <img src={item.icon} alt="" />
              <p className="text-gray-900 font-medium">{item.label}</p>
            </div>
            <button className={`${item.color} px-4 min-w-[100px] py-1.5 rounded-full 2xl:text-base text-sm`}>
              {item.button}
            </button>
          </div>
        ))}
        <div className="pt-3 cursor-pointer">
          

            
              <p className="text-natural-black font-medium flex items-center">Sign in Activity <svg xmlns="http://www.w3.org/2000/svg" width="12" height="24" viewBox="0 0 12 24" fill="none">
  <path fillRule="evenodd" clipRule="evenodd" d="M10.1569 12.7116L4.49994 18.3686L3.08594 16.9546L8.03594 12.0046L3.08594 7.05463L4.49994 5.64063L10.1569 11.2976C10.3444 11.4852 10.4497 11.7395 10.4497 12.0046C10.4497 12.2698 10.3444 12.5241 10.1569 12.7116Z" fill="#1A1A1A"/>
</svg></p>
              <p className="text-natural-gray text-sm">Review sign-in activity for this account</p>
            
          
        </div>
      </div>
    </div>
        </div>
    </div>
  )
}

export default AccountSecurity