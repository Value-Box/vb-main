import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function VerticalCategories() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [subCategory, setSubCategory] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false); // Sidebar control state

  const verticleCategory = [
    {
      name: "Men Fashion",
      subCategories: [
        {
          name: "Foot Wear",
          items: [{ name: "Sneakers" }, { name: "Loafers" }, { name: "Sandals" }],
        },
        {
          name: "Accessories",
          items: [{ name: "Watches" }, { name: "Bags" }, { name: "Belts" }],
        },
      ],
    },
    {
      name: "Women Fashion",
      subCategories: [
        {
          name: "Wear",
          items: [{ name: "Sandles" }, { name: "Pumpy" }],
        },
        {
          name: "Accessories",
          items: [{ name: "Watches" }, { name: "Bags" }, { name: "Jewellery" }],
        },
      ],
    },
    {
      name: "Kid Fashion",
      subCategories: [
        {
          name: "Kids FootWear",
          items: [{ name: "Chappal" }, { name: "Sports" }, { name: "Shoes" }, { name: "Sneakers" }],
        },
        {
          name: "Boys Clothing",
          items: [{ name: "Waistcoats" }, { name: "Pants & Shorts" }, { name: "Polo Shirts" }, { name: "Sets" }],
        },
        {
          name: "Girls Clothing",
          items: [{ name: "Sweatshirts" }, { name: "Dresses" }, { name: "Shirts" }, { name: "Sets" },{name:'T-Shirts'}],
        },
      ],
    },
  ];
  const Categories=[
    {"id": 1,"name": "Clothing","parentID": null,"imagepath": null},
    {"id": 2,"name": "Mens Cloth","parentID": 1,"imagepath": "https://i.imgur.com/QkIa5tT.jpeg"},
    {"id": 3,"name": "Female Cloth","parentID": 1,"imagepath": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"},
    {"id": 4,"name": "Mens Casual","parentID": 2,"imagepath": "https://i.imgur.com/mcW42Gi.jpeg"},
    {"id": 9,"name": "Paints","parentID": 5,"imagepath": "https://i.imgur.com/qNOjJje.jpeg"},
    {
        "id": 10,
        "name": "ygyg",
        "parentID": null,
        "imagepath": null
    },
    {
        "id": 11,
        "name": "Steel",
        "parentID": null,
        "imagepath": null
    },
    {
        "id": 12,
        "name": "Custom Bottle",
        "parentID": 11,
        "imagepath": "https://i.imgur.com/BG8J0Fj.jpg"
    },
    {
        "id": 13,
        "name": "Water Bottle",
        "parentID": 12,
        "imagepath": "https://i.imgur.com/sC0ztOB.jpeg"
    },
    {
        "id": 1012,
        "name": "Electronics",
        "parentID": 11,
        "imagepath": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg"
    },
    {
        "id": 5,
        "name": "Mens Formal",
        "parentID": 2,
        "imagepath": "https://i.imgur.com/BG8J0Fj.jpg"
    },
    {
        "id": 6,
        "name": "Grocery",
        "parentID": null,
        "imagepath": null
    },
    {
        "id": 7,
        "name": "Atta",
        "parentID": 6,
        "imagepath": "https://i.imgur.com/62gGzeF.jpeg"
    },
    {
        "id": 8,
        "name": "Fine Atta",
        "parentID": null,
        "imagepath": null
    }
]

const parentCategory = Categories
  .filter(category => category.parentID === null)
  .sort((a, b) => a.name.localeCompare(b.name));

const parentWithSubcategories = parentCategory.map(parent => ({
  ...parent,
  subCategories: Categories.filter(category => category.parentID === parent.id)
})); 

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

  useEffect(() => {
    // console.log(sidebarOpen)
  }, [sidebarOpen]);
  

  return (
    <div className="ml-2 sm:ml-0 relative py-1 group" ref={dropdownRef}>
      
      {/* Button for mobile */}
      <button
        className="hidden sm:flex bg-[#002882] text-[#E6EAF3] gap-2 w-max p-1 rounded-lg"
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
      <Link to="/MobCategories" className="flex sm:hidden bg-[#002882] text-[#E6EAF3] gap-2 w-max p-1 rounded-lg">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M5 17L19 17M5 12H19M5 7L13 7"
            stroke="#E6EAF3"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg></Link>

      {/* Dropdown Menu */}
      <div
        className={`absolute bg-[#F2F2F2] shadow-md rounded-l-lg transition-all sm:duration-300 ease-in-out 
        translate-y-2 opacity-0 scale-95 flex flex-col gap-2 w-[230px] md:w-[250px] left-1/2 
        transform md:-translate-x-1/2 -translate-x-1/2 z-50 sm:mt-1 
        sm:group-hover:opacity-100 sm:group-hover:scale-100 sm:group-hover:translate-y-0 
        sm:group-hover:visible sm:pointer-events-auto 
        ${isOpen ? "opacity-100 visible z-[1055]" : "opacity-0 invisible"}`}
        onClick={(e) => e.stopPropagation()} // 🛑 Prevent closing on click inside
      >
        {/* <ul className="w-full h-[600px] overflow-y-auto">

          {verticleCategory.map((items, index) => (
            <li className="py-2 px-3 flex items-center justify-between cursor-pointer text-xs 2xl:text-base" key={index}
            onMouseEnter={()=>setHoveredCategory(index)} onMouseLeave={()=>setHoveredCategory(null)}
            onClick={() => {if (window.innerWidth < 640) {setSidebarOpen(true)}
             if (window.innerWidth < 640) {setSubCategory(index)} }}
>
              {items.name}
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="20" viewBox="0 0 10 20" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.46476 10.592L3.7506 15.3061L2.57226 14.1278L6.69726 10.0028L2.57227 5.8778L3.7506 4.69946L8.46476 9.41363C8.62099 9.5699 8.70875 9.78183 8.70875 10.0028C8.70875 10.2238 8.62099 10.4357 8.46476 10.592Z"
                  fill="#CCCCCC"
                />
              </svg>
              {verticleCategory.length > 0 && (
    <div className="hidden sm:flex absolute left-[99%] top-0 bg-white rounded-r-lg gap-4 w-max h-full min-h-full">
      {(hoveredCategory !== null ? verticleCategory[hoveredCategory] : verticleCategory[0])?.subCategories.map((subcategory, subIndex) => (
        <div key={subIndex} className="px-4 py-2 transition-colors duration-200">
          <h3 className="font-semibold lg:text-sm 2xl:text-base text-gray-800">{subcategory.name}</h3>
          <div>
            {subcategory.items.map((child, childIndex) => (
              <div 
                key={childIndex} 
                className="text-sm text-gray-600 hover:text-gray-900 hover:underline cursor-pointer"
              >
                <Link to='/Collection'>
                {child.name}
                </Link>
                
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )}
              
                
              
            </li>
          ))}
        </ul> */}

<ul className="w-full h-[600px] overflow-y-auto">
  {parentWithSubcategories.map((items, index) => (
    <li className="py-2 px-3 flex items-center justify-between cursor-pointer text-xs 2xl:text-base" key={index}
      onMouseEnter={() => setHoveredCategory(index)} 
      onMouseLeave={() => setHoveredCategory(null)}
      onClick={() => { if (window.innerWidth < 640) setSidebarOpen(true); setSubCategory(index); }}
    >
      {items.name}
      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="20" viewBox="0 0 10 20" fill="none">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.46476 10.592L3.7506 15.3061L2.57226 14.1278L6.69726 10.0028L2.57227 5.8778L3.7506 4.69946L8.46476 9.41363C8.62099 9.5699 8.70875 9.78183 8.70875 10.0028C8.70875 10.2238 8.62099 10.4357 8.46476 10.592Z"
          fill="#CCCCCC"
        />
      </svg>

      {hoveredCategory === index && parentWithSubcategories[index]?.subCategories?.length > 0 && (
        <div className="hidden sm:flex absolute left-[99%] top-0 bg-white rounded-r-lg gap-4 w-max h-full 
        min-h-full">
          {parentWithSubcategories[hoveredCategory]?.subCategories.map((subcategory, subIndex) => (
            <div key={subIndex} className="px-4 py-2 transition-colors duration-200">
              <h3 className="font-semibold lg:text-sm 2xl:text-base text-gray-800">{subcategory.name}</h3>
              <div className="flex items-start flex-wrap gap-4 p-2">
                {Categories.filter(child => child.parentID === subcategory.id).map((child, childIndex) => (
                  <div key={childIndex} className="text-sm text-gray-600 hover:text-gray-900 hover:underline cursor-pointer">
                    <img className='w-20 h-20 object-cover rounded-full' src={child.imagepath} />
                    <Link to='/Collection'>{child.name}</Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </li>
  ))}
</ul>
      </div>


      {/* <div
  className={`fixed inset-0 z-[9999] duration-400 ${
    sidebarOpen ? "opacity-100 visible" : "opacity-0 delay-100 invisible"
  }`}
  onClick={() => setSidebarOpen(false)}
>
  <h1 className="bg-white">Sidebar</h1>
  <button
      className="text-[#002882] text-lg border-[#002882] border rounded-full w-8 h-8 cursor-pointer flex justify-center items-center z-1050 font-bold absolute top-2 right-2 p-2"
      onClick={(e) => {
        e.stopPropagation();
        setSidebarOpen(false);
      }}
    >
      ✕
    </button>
<div className={`bg-[#F2F2F2] flex w-[100%]  h-screen shadow-lg transform transition-transform duration-400 ease-in-out ${
      sidebarOpen ? "translate-x-0" : "-translate-x-full"
    }`}>
      
<div className="w-[30%]"
    onClick={(e) => e.stopPropagation()} // Prevent closing sidebar when clicking inside
  >

    <div className="block sm:hidden">
      {verticleCategory.map((items, index) =>
        subCategory === index ? (
          <div key={index}>
            {items.subCategories.map((subcategory, subIndex) => (
              <div key={subIndex} className="px-4 py-2 transition-colors duration-200">
                <h3 className="font-semibold lg:text-sm 2xl:text-base text-gray-800">
                  {subcategory.name}
                </h3>
                <div>
                  {subcategory.items.map((child, childIndex) => (
                    <div
                      key={childIndex}
                      className="text-sm text-gray-600 hover:text-gray-900 hover:underline cursor-pointer"
                    >
                      {child.name}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : null
      )}
    </div>
  </div>
  <div className="bg-white h-full w-full">

  </div>
</div>
</div> */}



     


    </div>
  );
}
