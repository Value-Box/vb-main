import React, { useState } from "react";

export default function VerticalCategories() {
  const [openCategory, setOpenCategory] = useState(null);

  const verticleCategory=[{
    name:'Men Feshion',
    subCategories:[
      { name: "Sneakers" },
          { name: "Loafers" },
          { name: "Sandals" },
    ],
    },
  {
    name:'Accessories',
    subCategories:[
      { name: "Watches" },
          { name: "Bags" },
          { name: "Belts" },
    ]
  }]

  const toggleCategory = (index) => {
    setOpenCategory(openCategory === index ? null : index);
  };
  return (
    <>
<div className="p-2 relative group">
  {/* Main Button */}
  <button className="bg-[#002882] text-[#E6EAF3] flex gap-2 w-max p-2 rounded-lg">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M5 17L19 17M5 12H19M5 7L13 7" stroke="#E6EAF3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg> 
    All Categories 
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M15 11L12 14L9 11" stroke="#E6EAF3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </button>

  {/* Dropdown Menu */}
  <div className="absolute bg-[#F2F2F2] shadow-md rounded-lg transition-all duration-300 ease-in-out 
    mt-2 translate-y-2 opacity-0 scale-95 flex flex-col gap-2 w-[250px] md:w-[300px] left-1/2 
    transform md:-translate-x-1/2 -translate-x-1/2 z-50 left-full
    group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 
    group-hover:visible pointer-events-none group-hover:pointer-events-auto delay-150">
    
    <ul className="p-2 w-full">
      {verticleCategory.map((items,index)=>(
        <li className="py-2 px-3 hover:bg-gray-200 flex items-center justify-between" key={index}>{items.name} <svg xmlns="http://www.w3.org/2000/svg" width="10" height="20" viewBox="0 0 10 20" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M8.46476 10.592L3.7506 15.3061L2.57226 14.1278L6.69726 10.0028L2.57227 5.8778L3.7506 4.69946L8.46476 9.41363C8.62099 9.5699 8.70875 9.78183 8.70875 10.0028C8.70875 10.2238 8.62099 10.4357 8.46476 10.592Z" fill="#CCCCCC"/>
      </svg></li>
      ))}

    </ul>

  </div>
</div>


    </>
  )
}
