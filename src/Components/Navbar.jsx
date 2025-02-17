import React, { useState } from 'react'
import Logo from "/src/Images/Logo.png";

function Navbar() {
  const [isTrue,setIsTrue]=useState(false)
  return (
    <>
<nav className="bg-gradient-to-r from-[#FFC136] via-[#FFD168] to-[#E09B00]">
<div className="mx-auto max-w-[1920px] px-2 sm:px-6 lg:px-8 xl:px-15">
    <div className="relative flex h-16 items-center sm:justify-between">
      <div className=" inset-y-0 left-0 flex items-center sm:hidden">
        {/* Mobile menu button*/}
        <button
          type="button" onClick={()=>setIsTrue(!isTrue)}
          className="relative inline-flex items-center justify-center rounded-md  text-gray-400 hover:bg-gray-700 hover:text-white"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <i className="fa-solid fa-bars text-[#1A1A1A] text-2xl"></i>
          {/*
      Icon when menu is closed.

      Menu open: "hidden", Menu closed: "block"
    */}
          
          {/*
      Icon when menu is open.

      Menu open: "block", Menu closed: "hidden"
    */}
          <svg
            className="hidden size-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
            data-slot="icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
        <div className="flex shrink-0 items-center ml-2 sm:ml-0">
          <img
            className="h-8 w-auto"
            src={Logo}
            alt="Your Company"
          />
        </div>
        
      <div className='bg-white p-[5px] rounded-lg sm:flex max-w-[800px] mx-2 w-full hidden'>
            <input type="text" className='w-full outline-none lg:text-[20px]'/>
            <span className='bg-[#002882] lg:p-[8px] lg:px-[16px] py-[6px] px-[12px] rounded-[5px]'>
            <i className="fa-solid fa-magnifying-glass text-[#E6EAF3]"></i>
            </span>
        </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <button
          type="button"
          className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
        >
          <span className="absolute -inset-1.5" />
          <span className="sr-only">View notifications</span>
          <svg
            className="size-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
            data-slot="icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
            />
          </svg>
        </button>
        {/* Profile dropdown */}
        <div className="relative ml-3">
          <div>
            <button
              type="button"
              className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
              id="user-menu-button"
              aria-expanded="false"
              aria-haspopup="true"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">Open user menu</span>
              <img
                className="size-8 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </button>
          </div>
          {/*
      Dropdown menu, show/hide based on menu state.

      Entering: "transition ease-out duration-100"
        From: "transform opacity-0 scale-95"
        To: "transform opacity-100 scale-100"
      Leaving: "transition ease-in duration-75"
        From: "transform opacity-100 scale-100"
        To: "transform opacity-0 scale-95"
    */}
          {/* <div
            className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 focus:outline-hidden"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu-button"
            tabIndex={-1}
          >
            
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700"
              role="menuitem"
              tabIndex={-1}
              id="user-menu-item-0"
            >
              Your Profile
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700"
              role="menuitem"
              tabIndex={-1}
              id="user-menu-item-1"
            >
              Settings
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700"
              role="menuitem"
              tabIndex={-1}
              id="user-menu-item-2"
            >
              Sign out
            </a>
          </div> */}
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