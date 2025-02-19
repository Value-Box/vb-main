import React, { useState, useEffect, useRef } from "react";

export default function VerticalCategories() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const verticleCategory = [
    {
      name: "Men Fashion",
      subCategories: [{ name: "Sneakers" }, { name: "Loafers" }, { name: "Sandals" }],
    },
    {
      name: "Accessories",
      subCategories: [{ name: "Watches" }, { name: "Bags" }, { name: "Belts" }],
    },
  ];

  // Function to handle clicks outside the dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Listen for window resize events
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Run once on mount to ensure correct state

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="ml-2 sm:ml-0 relative py-1 group" ref={dropdownRef}>
      {/* Button for mobile */}
      <button
        className="bg-[#002882] text-[#E6EAF3] flex gap-2 w-max p-1 rounded-lg"
        onClick={() => {
          if (window.innerWidth < 640) {
            setIsOpen((prev) => !prev);
          }
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M5 17L19 17M5 12H19M5 7L13 7"
            stroke="#E6EAF3"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute bg-[#F2F2F2] shadow-md rounded-lg transition-all sm:duration-300 ease-in-out 
        translate-y-2 opacity-0 scale-95 flex flex-col gap-2 w-[250px] md:w-[300px] left-1/2 
        transform md:-translate-x-1/2 -translate-x-1/2 z-50 mt-1 
        sm:group-hover:opacity-100 sm:group-hover:scale-100 sm:group-hover:translate-y-0 
        sm:group-hover:visible sm:pointer-events-auto 
        ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={(e) => e.stopPropagation()} // 🛑 Prevent closing on click inside
      >
        <ul className="p-2 w-full">
          {verticleCategory.map((items, index) => (
            <li className="py-2 px-3 hover:bg-gray-200 flex items-center justify-between" key={index}>
              {items.name}
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="20" viewBox="0 0 10 20" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.46476 10.592L3.7506 15.3061L2.57226 14.1278L6.69726 10.0028L2.57227 5.8778L3.7506 4.69946L8.46476 9.41363C8.62099 9.5699 8.70875 9.78183 8.70875 10.0028C8.70875 10.2238 8.62099 10.4357 8.46476 10.592Z"
                  fill="#CCCCCC"
                />
              </svg>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
