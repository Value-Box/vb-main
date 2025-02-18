import React, { useState } from 'react'
import Logo from "/src/Images/Logo.png";

function Navbar() {
  const [isTrue,setIsTrue]=useState(false)
  return (
    <>
<nav className="bg-gradient-to-r from-[#FFC136] via-[#FFD168] to-[#E09B00]">
<div className="mx-auto max-w-[1920px] px-2 sm:px-6 lg:px-8 xl:px-15">
    <div className="relative flex py-2 items-center sm:justify-between">
      <div className=" inset-y-0 left-0 flex items-center sm:hidden">
        {/* Mobile menu button*/}
        <button
          type="button" onClick={()=>setIsTrue(!isTrue)}
          className="relative inline-flex items-center justify-center rounded-md  text-gray-400 hover:bg-gray-700 hover:text-white"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          {/* <i className="fa-solid fa-bars text-[#1A1A1A] text-2xl"></i> */}
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
  <path d="M7.5 25.5L28.5 25.5M7.5 18H28.5M7.5 10.5L19.5 10.5" stroke="#1A1A1A" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>  
          
        </button>
      </div>
        <div className="flex shrink-0 items-center ml-2 sm:ml-0">
          <img
            className="xl:h-9 h-8 w-auto sm:mr-4"
            src={Logo}
            alt="Your Company"
          />
        </div>
        
      <div className='bg-white p-1 2xl:p-[5px] rounded-lg sm:flex max-w-[800px] mx-2 w-full hidden'>
            <input type="text" className='w-full px-2 outline-none 2xl:text-[20px]'/>
            <button className='bg-[#002882] 2xl:px-[16px] cursor-pointer 2xl:py-[6px] py-[3px] px-[12px] rounded-[5px]'>
            {/* <i className="fa-solid fa-magnifying-glass text-[#E6EAF3]"></i> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
            <path d="M15.9434 14.2929C15.5529 13.9024 14.9197 13.9024 14.5292 14.2929C14.1387 14.6834 14.1387 15.3166 14.5292 15.7071L15.9434 14.2929ZM20.5292 21.7071C20.9197 22.0976 21.5529 22.0976 21.9434 21.7071C22.334 21.3166 22.334 20.6834 21.9434 20.2929L20.5292 21.7071ZM10.2363 16C6.92262 16 4.23633 13.3137 4.23633 10H2.23633C2.23633 14.4183 5.81805 18 10.2363 18V16ZM4.23633 10C4.23633 6.68629 6.92262 4 10.2363 4V2C5.81805 2 2.23633 5.58172 2.23633 10H4.23633ZM10.2363 4C13.55 4 16.2363 6.68629 16.2363 10H18.2363C18.2363 5.58172 14.6546 2 10.2363 2V4ZM16.2363 10C16.2363 13.3137 13.55 16 10.2363 16V18C14.6546 18 18.2363 14.4183 18.2363 10H16.2363ZM14.5292 15.7071L20.5292 21.7071L21.9434 20.2929L15.9434 14.2929L14.5292 15.7071Z" fill="#E6EAF3"/>
            </svg>
            </button>
        </div>
      <div className="relative inset-y-0 right-0 flex items-center pr-2 sm:static ml-auto sm:inset-auto sm:ml-4 sm:pr-0">
        
        {/* Profile dropdown */}
        <div className="relative ml-3 flex gap-3 xl:gap-8  items-center">
          <div>
            <button type="button" className="relative flex gap-2 rounded-full w-max cursor-pointer text-sm focus:outline-hidden"
              id="user-menu-button" aria-expanded="false" aria-haspopup="true" >
              
              <img className="size-8 rounded-full max-w-none"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="" />
                <div>
                    <p className='text-[10px] text-start xl:text-xs font-semibold text-[#333] '>Welcome</p>
                    <span className='text-[#1A1A1A] font-semibold text-[13px] lg:text-sm xl:text-base flex items-center'>Muhammad Arshad 
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
                       <path fill-rule="evenodd" clip-rule="evenodd" d="M10.1075 11.8925L5.39333 7.17833L6.57167 6L10.6967 10.125L14.8217 6L16 7.17833L11.2858 11.8925C11.1296 12.0487 10.9176 12.1365 10.6967 12.1365C10.4757 12.1365 10.2638 12.0487 10.1075 11.8925Z" fill="#1A1A1A"/>
                    </svg>
                    </span>
                </div>
            </button>
          </div>
         <button className='flex gap-1 text-sm xl:text-base cursor-pointer'>
         <svg xmlns="http://www.w3.org/2000/svg" className='w-5 xl:w-9' viewBox="0 0 36 36" fill="none">
            <path d="M29.905 11.9999H31.498C32.2937 11.9999 33.0568 12.3159 33.6194 12.8785C34.182 13.4411 34.498 14.2042 34.498 14.9998V20.9998C34.498 21.7955 34.182 22.5586 33.6194 23.1212C33.0568 23.6838 32.2937 23.9998 31.498 23.9998H29.905C29.5397 26.8999 28.1283 29.5669 25.936 31.5002C23.7437 33.4335 20.9211 34.5001 17.998 34.4999V31.4999C20.385 31.4999 22.6742 30.5516 24.362 28.8638C26.0498 27.176 26.998 24.8868 26.998 22.4998V13.4999C26.998 11.1129 26.0498 8.82372 24.362 7.13589C22.6742 5.44806 20.385 4.49985 17.998 4.49985C15.6111 4.49985 13.3219 5.44806 11.6341 7.13589C9.94626 8.82372 8.99805 11.1129 8.99805 13.4999V23.9998H4.49805C3.7024 23.9998 2.93934 23.6838 2.37673 23.1212C1.81412 22.5586 1.49805 21.7955 1.49805 20.9998V14.9998C1.49805 14.2042 1.81412 13.4411 2.37673 12.8785C2.93934 12.3159 3.7024 11.9999 4.49805 11.9999H6.09105C6.45709 9.10019 7.86867 6.43376 10.0609 4.50086C12.2531 2.56797 15.0754 1.50146 17.998 1.50146C20.9207 1.50146 23.7429 2.56797 25.9352 4.50086C28.1274 6.43376 29.539 9.10019 29.905 11.9999ZM4.49805 14.9998V20.9998H5.99805V14.9998H4.49805ZM29.998 14.9998V20.9998H31.498V14.9998H29.998ZM11.638 23.6773L13.228 21.1334C14.6576 22.0291 16.3111 22.5027 17.998 22.4998C19.685 22.5027 21.3385 22.0291 22.768 21.1334L24.358 23.6773C22.452 24.8718 20.2474 25.5035 17.998 25.4998C15.7487 25.5035 13.5441 24.8718 11.638 23.6773Z" fill="#1A1A1A"/>
         </svg>
         Support
         </button>
          <button className='relative cursor-pointer'>
          <svg xmlns="http://www.w3.org/2000/svg" className='w-6 xl:w-9' viewBox="0 0 36 36" fill="none">
            <path d="M3 3H5.61001C7.23001 3 8.505 4.395 8.37 6L7.125 20.94C6.915 23.385 8.84998 25.485 11.31 25.485H27.285C29.445 25.485 31.335 23.715 31.5 21.57L32.31 10.32C32.49 7.83 30.6 5.805 28.095 5.805H8.73001" stroke="#1A1A1A" stroke-width="2.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M24.375 33C25.4106 33 26.25 32.1606 26.25 31.125C26.25 30.0894 25.4106 29.25 24.375 29.25C23.3394 29.25 22.5 30.0894 22.5 31.125C22.5 32.1606 23.3394 33 24.375 33Z" stroke="#1A1A1A" stroke-width="2.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12.375 33C13.4105 33 14.25 32.1606 14.25 31.125C14.25 30.0894 13.4105 29.25 12.375 29.25C11.3395 29.25 10.5 30.0894 10.5 31.125C10.5 32.1606 11.3395 33 12.375 33Z" stroke="#1A1A1A" stroke-width="2.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14 15C14 15 16.0704 17 20 17C23.9296 17 25.5 15 25.5 15" stroke="#1A1A1A" stroke-width="2.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
             <span className='absolute top-[-4px] right-[-8px] xl:top-[-6px] xl:right-[-11px] w-4 h-4 xl:h-auto 
             flex items-center justify-center xl:w-6 bg-gradient-to-r from-[#0032A3] via-[#3B66C8] to-[#0032A3]
              text-[9px] xl:text-xs p-0.5 xl:p-1 rounded-full text-[#FCFCFC]'>20</span>
          </button>
        </div>
      </div>
    </div>
  </div>
  {/* Mobile menu, show/hide based on menu state. */}
  {isTrue?<div className="sm:hidden px-2 pb-2" id="mobile-menu">
  <div className='bg-white p-[5px] rounded-lg flex w-full'>
            <input type="text" className='w-full outline-none pr-1'/>
            <span className='bg-[#002882] lg:p-[8px] lg:px-[16px] py-[3px] px-[6px] rounded-[5px]'>
            <i className="fa-solid fa-magnifying-glass text-[#E6EAF3]"></i>
            </span>
        </div>
  </div>:''}
  
</nav>

    </>
  )
}

export default Navbar