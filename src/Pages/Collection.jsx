import React, { useEffect, useRef, useState } from 'react'
import ProductImg from "/src/Images/DealCarousel2.png";
import DetailProductCard2 from '../Components/Cards/DetailProductCard2';
import LoadMoreButton from '../Components/Buttons/LoadMoreButton';


const collections = [
  { name: "Electronics", image: "https://images.unsplash.com/photo-1651969650742-4fecf6d9a20a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Clothing", image: "https://plus.unsplash.com/premium_photo-1671469876456-b1bafec2d029?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Home & Kitchen", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Books", image: "https://plus.unsplash.com/premium_photo-1682125773446-259ce64f9dd7?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Toys", image: "https://plus.unsplash.com/premium_photo-1681488178364-bd965565837e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Beauty", image: "https://plus.unsplash.com/premium_photo-1723708939980-55adb9dd0fc9?q=80&w=1454&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Sports", image: "https://plus.unsplash.com/premium_photo-1682435566673-cedb75cd7459?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Automobiles", image: "https://images.unsplash.com/photo-1602074613059-383ad96bf016?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Music", image: "https://images.unsplash.com/photo-1477233534935-f5e6fe7c1159?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Gaming", image: "https://plus.unsplash.com/premium_photo-1687672031149-fcab45e86b58?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
];
const categories = ["Shalwar Kameez","Dresses & Skirts","Shoes","Jeans","Sports Wear","Heels","Sneakers",
  "Makeup","Sandals","Shalwar Kameez","Dresses & Skirts","Shoes","Jeans","Sports Wear","Heels","Sneakers",];
  
  const categoryProducts = [
    { id: 1, name: "Men's Trendy Shoes Men's Trendy Shoes", price: "5,699",sellingPrice:"6000", category: "Shoes", image: "https://i.imgur.com/I5g1DoE.jpg",rating: 3.8, },
    { id: 2, name: "Women's Handbag", price: "5,699",sellingPrice:"6000", category: "Bags", image: "https://i.imgur.com/TF0pXdL.jpg",rating: 3.5, },
    { id: 3, name: "Winter Jacket", price: "5,699",sellingPrice:"6000", category: "Dresses & Skirts", image: "https://i.imgur.com/axsyGpD.jpeg",rating: 3, },
    { id: 4, name: "Decor Lamp", price: "5,699",sellingPrice:"6000", category: "Makeup", image: "https://i.imgur.com/J6MinJn.jpeg" ,rating: 4,},
    { id: 5, name: "Men's Trendy Shoes", price: "5,699",sellingPrice:"6000", category: "Shoes", image: "https://i.imgur.com/Y54Bt8J.jpeg" ,rating: 4.8,},
    { id: 6, name: "Women's Handbag", price: "5,699",sellingPrice:"6000", category: "Bags", image: "https://i.imgur.com/9DqEOV5.jpeg" ,rating: 4.5,},
    { id: 7, name: "Winter Jacket", price: "5,699",sellingPrice:"6000", category: "Jeans", image: "https://i.imgur.com/yVeIeDa.jpeg" ,rating: 3.2,},
    { id: 8, name: "Decor Lamp", price: "5,699",sellingPrice:"6000", category: "Shalwar Kameez", image: "https://i.imgur.com/SolkFEB.jpeg" ,rating: 4.5,},
    { id: 9, name: "Decor Lamp", price: "5,699",sellingPrice:"6000", category: "Makeup", image: "https://i.imgur.com/keVCVIa.jpeg" ,rating: 4,},
    { id: 10, name: "Men's Trendy Shoes", price: "5,699",sellingPrice:"6000", category: "Shoes", image: "https://i.imgur.com/w3Y8NwQ.jpeg" ,rating: 4.8,},
    { id: 11, name: "Women's Handbag", price: "5,699",sellingPrice:"6000", category: "Bags", image: "https://i.imgur.com/OKn1KFI.jpeg" ,rating: 4.5,},
    { id: 12, name: "Winter Jacket", price: "5,699",sellingPrice:"6000", category: "Jeans", image: "https://i.imgur.com/ItHcq7o.jpeg" ,rating: 3.2,},
    { id: 13, name: "Decor Lamp", price: "5,699",sellingPrice:"6000", category: "Shalwar Kameez", image: "https://i.imgur.com/YaSqa06.jpeg" ,rating: 4.5,},
  ];

function Collection() {
  const [loadProducts,setLoadProducts]=useState(10)
  const catSlideRef  = useRef(null);
  const catScrollLeft = () => {
    if (catSlideRef.current) {
      catSlideRef.current.scrollBy({ left: -150, behavior: "smooth" });
    }
  };
  
  const catScrollRight = () => {
    if (catSlideRef.current) {
      catSlideRef.current.scrollBy({ left: 150, behavior: "smooth" });
    }
  };
  
  const onDragCategoryScroll = (e) => {
    if (e.buttons !== 1 || !catSlideRef.current) return;
    catSlideRef.current.scrollLeft -= e.movementX;
  };
  
  const [activeCategory,setActiveCategory]=useState('All')
  
  const filteredProducts=activeCategory==='All'?categoryProducts:categoryProducts.filter(item=>item.category===activeCategory)
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
   const [isSliding, setIsSliding] = useState(false);
   const [isExiting, setIsExiting] = useState(false);
      const items = [
          { text: "Welcome Deal", icon: (<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
            <path d="M13.6992 4.50002H11.5067C11.5311 4.47939 11.5561 4.45939 11.5798 4.43752C11.7697 4.26888 11.9226 4.06289 12.0292 3.83243C12.1358 3.60196 12.1937 3.35199 12.1992 3.09814C12.2074 2.82044 12.1588 2.54399 12.0563 2.28576C11.9538 2.02753 11.7996 1.79298 11.6032 1.5965C11.4068 1.40002 11.1723 1.24575 10.9141 1.14318C10.6559 1.04061 10.3794 0.991891 10.1017 1.00002C9.84776 1.00549 9.59767 1.06332 9.3671 1.1699C9.13652 1.27647 8.93043 1.4295 8.76172 1.61939C8.52827 1.88995 8.33848 2.19529 8.19922 2.52439C8.05995 2.19529 7.87017 1.88995 7.63672 1.61939C7.46801 1.4295 7.26192 1.27647 7.03134 1.1699C6.80077 1.06332 6.55067 1.00549 6.29672 1.00002C6.01901 0.991891 5.74258 1.04061 5.48438 1.14318C5.22618 1.24575 4.99167 1.40002 4.79525 1.5965C4.59883 1.79298 4.44463 2.02753 4.34214 2.28576C4.23964 2.54399 4.19101 2.82044 4.19922 3.09814C4.20477 3.35199 4.26265 3.60196 4.36922 3.83243C4.4758 4.06289 4.62878 4.26888 4.81859 4.43752C4.84234 4.45814 4.86734 4.47814 4.89172 4.50002H2.69922C2.434 4.50002 2.17965 4.60538 1.99211 4.79291C1.80458 4.98045 1.69922 5.2348 1.69922 5.50002V7.50002C1.69922 7.76523 1.80458 8.01959 1.99211 8.20712C2.17965 8.39466 2.434 8.50002 2.69922 8.50002V12.5C2.69922 12.7652 2.80458 13.0196 2.99211 13.2071C3.17965 13.3947 3.434 13.5 3.69922 13.5H7.44922C7.51552 13.5 7.57911 13.4737 7.626 13.4268C7.67288 13.3799 7.69922 13.3163 7.69922 13.25V7.50002H2.69922V5.50002H7.69922V7.50002H8.69922V5.50002H13.6992V7.50002H8.69922V13.25C8.69922 13.3163 8.72556 13.3799 8.77244 13.4268C8.81933 13.4737 8.88291 13.5 8.94922 13.5H12.6992C12.9644 13.5 13.2188 13.3947 13.4063 13.2071C13.5939 13.0196 13.6992 12.7652 13.6992 12.5V8.50002C13.9644 8.50002 14.2188 8.39466 14.4063 8.20712C14.5939 8.01959 14.6992 7.76523 14.6992 7.50002V5.50002C14.6992 5.2348 14.5939 4.98045 14.4063 4.79291C14.2188 4.60538 13.9644 4.50002 13.6992 4.50002ZM5.48109 3.68752C5.39367 3.60835 5.32356 3.51196 5.27516 3.40441C5.22676 3.29685 5.20112 3.18045 5.19984 3.06252C5.19668 2.92433 5.22113 2.78691 5.27176 2.65829C5.32239 2.52967 5.39818 2.41245 5.49469 2.3135C5.59119 2.21455 5.70648 2.13585 5.83379 2.08202C5.9611 2.02819 6.09787 2.00031 6.23609 2.00002H6.26672C6.38465 2.00129 6.50105 2.02693 6.60861 2.07533C6.71616 2.12373 6.81255 2.19384 6.89172 2.28127C7.41609 2.87377 7.60109 3.85627 7.66609 4.46377C7.05609 4.39939 6.07422 4.21439 5.48109 3.68752ZM10.9186 3.68752C10.3255 4.21252 9.34109 4.39752 8.73109 4.46252C8.80547 3.80564 9.01172 2.84377 9.51172 2.28189C9.59089 2.19447 9.68727 2.12436 9.79483 2.07596C9.90238 2.02756 10.0188 2.00191 10.1367 2.00064H10.1673C10.3056 2.00151 10.4422 2.02995 10.5693 2.08431C10.6964 2.13867 10.8114 2.21785 10.9075 2.31722C11.0036 2.41658 11.0789 2.53412 11.129 2.66296C11.1791 2.7918 11.203 2.92934 11.1992 3.06752C11.1972 3.18465 11.1711 3.30012 11.1226 3.40677C11.0741 3.51342 11.0043 3.60898 10.9173 3.68752H10.9186Z" fill="#F04438"/>
          </svg>) ,dot:(<p className="text-red-500 text-xl leading-none">•</p> )},
          { text: "30+ Sold Recently", icon: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M11.7186 2.95466L10.3853 2.25466C9.21465 1.64066 8.62931 1.33333 7.99998 1.33333C7.37065 1.33333 6.78531 1.63999 5.61465 2.25466L5.40065 2.36733L11.3493 5.76666L14.0266 4.42666C13.596 3.93866 12.9013 3.57399 11.7186 2.95333M14.4986 5.30933L11.8333 6.64266V8.66666C11.8333 8.79927 11.7806 8.92645 11.6869 9.02022C11.5931 9.11398 11.4659 9.16666 11.3333 9.16666C11.2007 9.16666 11.0735 9.11398 10.9798 9.02022C10.886 8.92645 10.8333 8.79927 10.8333 8.66666V7.14266L8.49998 8.30933V14.6027C8.97865 14.4833 9.52331 14.198 10.3853 13.7453L11.7186 13.0453C13.1526 12.2927 13.87 11.9167 14.2686 11.24C14.6666 10.564 14.6666 9.722 14.6666 8.04V7.962C14.6666 6.7 14.6666 5.91066 14.4986 5.30933ZM7.49998 14.6027V8.30933L1.50131 5.30933C1.33331 5.91066 1.33331 6.7 1.33331 7.96066V8.03866C1.33331 9.722 1.33331 10.564 1.73131 11.24C2.12998 11.9167 2.84731 12.2933 4.28131 13.046L5.61465 13.7453C6.47665 14.198 7.02131 14.4833 7.49998 14.6027ZM1.97331 4.42733L7.99998 7.44066L10.274 6.304L4.34998 2.91866L4.28131 2.95466C3.09931 3.57466 2.40398 3.93933 1.97331 4.428" fill="#12B76A"/>
          </svg>),dot:(<span className="text-[#12B76A] text-xl leading-none">•</span> ) },
          { text: "Selling out so Fast", icon: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M17.9166 11.1667C17.9166 12.1667 17.7499 13.0834 17.3333 14C16.9166 14.9167 16.3333 15.6667 15.5833 16.4167C14.8333 17.0834 13.9999 17.6667 12.9999 18C12.5833 18.1667 12.0833 18.3334 11.5833 18.4167L11.8333 18.3334C11.8333 18.3334 13.6666 17.25 14.0833 14.9167C14.2499 12.8334 12.4999 11.9167 12.4999 11.9167C12.4999 11.9167 11.5833 13.0834 10.3333 13.0834C8.33325 13.0834 8.66659 9.75003 8.66659 9.75003C8.66659 9.75003 5.66659 11.3334 5.66659 14.6667C5.66659 16.75 7.83325 18.3334 7.83325 18.3334C7.58325 18.25 7.24992 18.1667 6.99992 18.0834C5.99992 17.75 5.16659 17.1667 4.41659 16.5C3.66659 15.8334 3.08325 15 2.66659 14.0834C2.24992 13.1667 2.08325 12.25 2.08325 11.25C2.08325 8.00003 5.91659 4.83336 5.91659 4.83336C5.91659 4.83336 6.24992 7.33336 8.16659 7.33336C11.6666 7.33336 10.4166 1.75003 10.4166 1.75003C10.4166 1.75003 13.5833 3.58336 14.4999 8.58336C16.2499 8.33336 16.0833 6.08336 16.0833 6.08336C16.0833 6.08336 17.9166 8.50003 17.9166 11.1667Z" fill="#EEA500"/>
          </svg>) ,dot:(<span className="text-[#EEA500] text-xl leading-none">•</span> )},
          { text: "Free Shipping Worldwide", icon: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M11.8749 3.75C12.2201 3.75 12.4999 4.02982 12.4999 4.375V7.5H15.9143C16.0175 7.5 16.1191 7.52556 16.21 7.57439C16.3009 7.62321 16.3783 7.69379 16.4353 7.77982L18.646 11.1167C18.7138 11.219 18.7499 11.3391 18.7499 11.4618V13.125C18.7499 13.4702 18.4701 13.75 18.1249 13.75H16.2499C16.2499 15.1307 15.1306 16.25 13.7499 16.25C12.3692 16.25 11.2499 15.1307 11.2499 13.75H7.49994C7.49994 15.1307 6.38064 16.25 4.99994 16.25C3.61924 16.25 2.49994 15.1307 2.49994 13.75H1.87494C1.52976 13.75 1.24994 13.4702 1.24994 13.125V4.375C1.24994 4.02982 1.52976 3.75 1.87494 3.75H11.8749ZM4.99994 12.5C4.30959 12.5 3.74994 13.0596 3.74994 13.75C3.74994 14.4404 4.30959 15 4.99994 15L5.0206 14.9998C5.70142 14.9888 6.24994 14.4335 6.24994 13.75C6.24994 13.0596 5.69029 12.5 4.99994 12.5ZM13.7499 12.5C13.0596 12.5 12.4999 13.0596 12.4999 13.75C12.4999 14.4404 13.0596 15 13.7499 15L13.7706 14.9998C14.4514 14.9888 14.9999 14.4335 14.9999 13.75C14.9999 13.0596 14.4403 12.5 13.7499 12.5ZM15.5786 8.75H12.4999V11.5845C12.8677 11.3718 13.2946 11.25 13.7499 11.25C14.6753 11.25 15.4832 11.7528 15.9155 12.5H17.4999V11.6501L15.5786 8.75ZM9.76556 8.75H6.48431C6.35488 8.75 6.24994 8.85494 6.24994 8.98438V9.76562C6.24994 9.89506 6.35488 10 6.48431 10H9.76556C9.895 10 9.99994 9.89506 9.99994 9.76562V8.98438C9.99994 8.85494 9.895 8.75 9.76556 8.75ZM6.01556 6.25H3.98431C3.85488 6.25 3.74994 6.35494 3.74994 6.48438V7.26562C3.74994 7.39506 3.85488 7.5 3.98431 7.5H6.01556C6.145 7.5 6.24994 7.39506 6.24994 7.26562V6.48438C6.24994 6.35494 6.145 6.25 6.01556 6.25Z" fill="#002882"/>
          </svg>) ,dot:(<span className="text-[#002882] text-xl leading-none">•</span> )}
        ];
  
      useEffect(() => {
        const interval = setInterval(() => {
          setIsSliding(true); // Pehle neeche se slide-in karo
    
          setTimeout(() => {
            setIsExiting(true); // Upar jane ke liye exit effect start karo
    
            setTimeout(() => {
              setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
              setIsSliding(false); // Reset for next item
              setIsExiting(false);
            }, 200); // Exit animation duration
          }, 2000); // Item screen pe rehne ka duration
        }, 2000); // Total time: 2s visible + 0.5s slide out
    
        return () => clearInterval(interval);
      }, []);
      
      let animation = (
        <div className="relative flex flex-col items-start h-10 w-60 overflow-hidden">
        {items.map((item, index) => (
          <div
            key={index}
            className={`absolute left-0 w-full px-2 flex gap-2 text-center items-center text-gray-500 text-[12px] transition-all duration-500 ease-in-out transform ${
              currentIndex === index
                ? isExiting
                  ? "-translate-y-10 opacity-0" // Slide out effect
                  : "translate-y-0 opacity-100" // Slide in effect
                : "translate-y-10 opacity-0" // Default hidden
            }`}
          >
            
            <span className="xl:text-[18px]">{item.icon}</span>
            {item.dot}
            <span>{item.text}</span>
          </div>
        ))}
      </div>
      );

      const filters = [
                  { 
                    name: "Category", 
                    options: ["Couch & Sofa Decor", "Men’s Fashion", "Men’s Shirts", "Women Fashion", "Cover, Mats & Cushions"] 
                  },
                  { name: "Brand", options: ['Nestle','knor'] },
                  { name: "Deals", options: ['1$'] },
                  { name: "Size", options: ['XL','Lg','sm'] },
                  { 
                    name: "Color", 
                    options: [
                      { name: "Black", color: "#000" },
                      { name: "Grey", color: "#808080" },
                      { name: "Blue", color: "#0000FF" },
                      { name: "White", color: "#FFF" },
                      { name: "Yellow", color: "#FFFF00" },
                      { name: "Red", color: "#FF0000" },
                      { name: "Green", color: "#008000" },
                    ] 
                  },
                  { name: "Material", options: [] },
                  { name: "Operation Instruction", options: [] },
                  { name: "Fabric", options: [] },
                  { name: "Sheer", options: [] },
                  { name: "Details", options: [] },
                ];
                
      const [filterSideBar,setFilterSideBar]=useState(false)
      const [selectedFilters, setSelectedFilters] = useState({});
      const [selectedCategory, setSelectedCategory] = useState("");
      const sideBarRef=useRef(null)
      
      const handleFilterChange = (category, value) => {
        setSelectedFilters((prev) => {
          const currentCategory = prev[category] || [];
          return {
            ...prev,
            [category]: currentCategory.includes(value)
              ? currentCategory.filter((item) => item !== value) // Remove if exists
              : [...currentCategory, value], // Add if not exists
          };
        });
      };
        // Close sidebar if user clicks outside
  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (sideBarRef.current && !sideBarRef.current.contains(event.target)) {
  //       setFilterSideBar(false); // ✅ Sidebar band ho jaye ga
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  return (
    <>
    <div className="w-full sm:px-4 py-4 max-w-[1920px] mx-auto">
      {/* Flexbox layout for auto-adjusting items */}
      <div className="flex  overflow-auto scrollbar-hidden flex-nowrap sm:flex-wrap gap-4 items-start justify-center content-start self-stretch">
        {collections.map((item, index) => (
          <div key={index} className="flex-1 min-w-20 sm:min-w-[100px] sm:max-w-[120px] text-center">
            <img src={item.image} alt={item.name} className="w-15 h-15 sm:w-24 sm:h-24 object-cover rounded-full mb-2 mx-auto" />
            <p className="text-xs sm:text-sm sm:font-medium">{item.name}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="sticky top-14 md:top-0 z-20 md:relative w-full flex items-center mt-3 max-w-[1920px] mx-auto">
  {/* Left Scroll Button */}
  <button
    onClick={catScrollLeft}
    className="absolute left-2 z-10 hidden md:block bg-[#FCFCFC] border border-[#999] rounded-full p-1 2xl:p-2 shadow-md"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M14.2894 18.2929C13.8989 18.6834 13.2657 18.6834 12.8752 18.2929L7.98782 13.4006C7.20742 12.6195 7.20772 11.3537 7.98842 10.5729L12.8788 5.68254C13.2693 5.29202 13.9025 5.29202 14.293 5.68254C14.6836 6.07307 14.6836 6.70623 14.293 7.09676L10.1074 11.2824C9.71682 11.6729 9.71682 12.3061 10.1074 12.6966L14.2894 16.8787C14.68 17.2692 14.68 17.9023 14.2894 18.2929Z" fill="#999999"/>
</svg>
  </button>

  {/* Categories Scrollable Container */}
  <div ref={catSlideRef} onMouseMove={onDragCategoryScroll}
    className="flex overflow-x-auto space-x-2 2xl:space-x-4 px-2 md:px-12 scrollbar-hide bg-[#FFF] shadow py-3"
  >
    {["Filters","All", ...categories].map((category, index) => (
      <button
        key={index}
        onClick={() => {index===0 ?setFilterSideBar(!filterSideBar):setActiveCategory(category)}}
        className={`${index===0?'flex ':''}px-3 2xl:px-6 py-1 2xl:py-2 select-none text-sm 2xl:text-base block rounded-full border font-medium whitespace-nowrap ${
          activeCategory === category
            ? "bg-[#002882] text-white font-medium"
            : "bg-[#FCFCFC] text-gray-600 border-gray-300"
        }`}
      >
        {index===0 &&(
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M6.532 4.75H13.468C13.925 4.75 14.322 4.75 14.633 4.78C14.94 4.808 15.318 4.875 15.626 5.128C16.023 5.454 16.247 5.942 16.25 6.45C16.252 6.84 16.078 7.176 15.91 7.442C15.742 7.712 15.499 8.032 15.215 8.406L15.184 8.446L15.174 8.459L12.619 11.828C12.367 12.16 12.304 12.248 12.26 12.338C12.2142 12.4323 12.1809 12.5321 12.161 12.635C12.141 12.735 12.138 12.847 12.138 13.269V17.512C12.138 17.72 12.138 17.924 12.124 18.09C12.109 18.254 12.072 18.517 11.9 18.753C11.69 19.04 11.363 19.226 11 19.248C10.698 19.267 10.453 19.145 10.31 19.065C10.166 18.985 10.001 18.87 9.834 18.755L8.845 18.072L8.797 18.039C8.606 17.908 8.394 17.763 8.235 17.562C8.09682 17.3886 7.99389 17.1899 7.932 16.977C7.861 16.733 7.862 16.477 7.862 16.239V13.269C7.862 12.847 7.858 12.735 7.839 12.635C7.8188 12.5321 7.78518 12.4322 7.739 12.338C7.696 12.248 7.633 12.16 7.381 11.828L4.825 8.459L4.815 8.447L4.785 8.407C4.501 8.032 4.258 7.712 4.089 7.442C3.922 7.176 3.749 6.84 3.75 6.45C3.75053 6.19734 3.80672 5.9479 3.91457 5.71941C4.02242 5.49092 4.17928 5.289 4.374 5.128C4.682 4.875 5.06 4.808 5.367 4.779C5.678 4.75 6.074 4.75 6.532 4.75ZM6.929 8.75L8.576 10.92L8.611 10.967C8.812 11.231 8.972 11.442 9.089 11.682C9.19167 11.8933 9.26567 12.115 9.311 12.347C9.362 12.608 9.361 12.874 9.361 13.211V16.179C9.361 16.337 9.362 16.426 9.366 16.493L9.372 16.555C9.37887 16.5815 9.39113 16.6064 9.408 16.628L9.449 16.662C9.499 16.702 9.569 16.75 9.697 16.838L10.638 17.488V13.21C10.638 12.873 10.638 12.607 10.689 12.346C10.7343 12.1147 10.8083 11.893 10.911 11.681C11.028 11.441 11.188 11.231 11.389 10.966L11.424 10.92L13.07 8.75H6.929ZM14.209 7.25C14.404 6.99 14.543 6.8 14.639 6.646C14.719 6.52 14.743 6.458 14.749 6.439C14.7458 6.38916 14.7257 6.3419 14.692 6.305C14.6266 6.28759 14.5596 6.27687 14.492 6.273C14.26 6.251 13.936 6.25 13.432 6.25H6.568C6.064 6.25 5.74 6.25 5.508 6.273C5.44043 6.27687 5.37342 6.28759 5.308 6.305C5.27434 6.3419 5.25424 6.38916 5.251 6.439C5.257 6.458 5.281 6.52 5.361 6.646C5.457 6.801 5.596 6.99 5.791 7.25H14.209ZM15.75 10.5C15.75 10.3011 15.829 10.1103 15.9697 9.96967C16.1103 9.82902 16.3011 9.75 16.5 9.75H19.5C19.6989 9.75 19.8897 9.82902 20.0303 9.96967C20.171 10.1103 20.25 10.3011 20.25 10.5C20.25 10.6989 20.171 10.8897 20.0303 11.0303C19.8897 11.171 19.6989 11.25 19.5 11.25H16.5C16.3011 11.25 16.1103 11.171 15.9697 11.0303C15.829 10.8897 15.75 10.6989 15.75 10.5ZM14.25 13C14.25 12.8011 14.329 12.6103 14.4697 12.4697C14.6103 12.329 14.8011 12.25 15 12.25H19.5C19.6989 12.25 19.8897 12.329 20.0303 12.4697C20.171 12.6103 20.25 12.8011 20.25 13C20.25 13.1989 20.171 13.3897 20.0303 13.5303C19.8897 13.671 19.6989 13.75 19.5 13.75H15C14.8011 13.75 14.6103 13.671 14.4697 13.5303C14.329 13.3897 14.25 13.1989 14.25 13ZM13.75 15.5C13.75 15.3011 13.829 15.1103 13.9697 14.9697C14.1103 14.829 14.3011 14.75 14.5 14.75H19.5C19.6989 14.75 19.8897 14.829 20.0303 14.9697C20.171 15.1103 20.25 15.3011 20.25 15.5C20.25 15.6989 20.171 15.8897 20.0303 16.0303C19.8897 16.171 19.6989 16.25 19.5 16.25H14.5C14.3011 16.25 14.1103 16.171 13.9697 16.0303C13.829 15.8897 13.75 15.6989 13.75 15.5ZM13.75 18C13.75 17.8011 13.829 17.6103 13.9697 17.4697C14.1103 17.329 14.3011 17.25 14.5 17.25H17C17.1989 17.25 17.3897 17.329 17.5303 17.4697C17.671 17.6103 17.75 17.8011 17.75 18C17.75 18.1989 17.671 18.3897 17.5303 18.5303C17.3897 18.671 17.1989 18.75 17 18.75H14.5C14.3011 18.75 14.1103 18.671 13.9697 18.5303C13.829 18.3897 13.75 18.1989 13.75 18Z" fill="#666666"/>
        </svg>
        )}{category}
      </button>
    ))}
  </div>

  {/* Right Scroll Button */}
  <button
    onClick={catScrollRight}
    className="absolute right-2 z-10 hidden md:block bg-[#FCFCFC] border border-[#999] rounded-full p-1 2xl:p-2 shadow-md"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M9.71057 18.2929C10.1011 18.6834 10.7343 18.6834 11.1248 18.2929L16.0122 13.4006C16.7926 12.6195 16.7923 11.3537 16.0116 10.5729L11.1212 5.68254C10.7307 5.29202 10.0975 5.29202 9.70696 5.68254C9.31643 6.07307 9.31643 6.70623 9.70696 7.09676L13.8926 11.2824C14.2832 11.6729 14.2832 12.3061 13.8926 12.6966L9.71057 16.8787C9.32004 17.2692 9.32004 17.9023 9.71057 18.2929Z" fill="#999999"/>
</svg>
  </button>
</div>
{/* Product Grid */}
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-2 sm:gap-4 mt-6 mb-6 px-2 md:px-4 max-w-[1920px] mx-auto">
        
        <DetailProductCard2 products={filteredProducts} loadProducts={loadProducts} />

      </div>
      <div className='flex justify-center mb-5'>
    <LoadMoreButton className="bg-[#00171F] text-white " onClick={()=>setLoadProducts(loadProducts+10)}> Load More <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M19 8.5L12 15.5L5 8.5" stroke="#EEA500" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></LoadMoreButton>
    </div>


    {/* Filters Views */} 
    <aside ref={sideBarRef}
        className={`hidden sm:block fixed top-[56px] left-0 z-40 w-72 p-4 bg-[#FCFCFC] shadow-md 
          transition-transform duration-600 transform ease-in-out ${
            filterSideBar ? "translate-x-0" : "-translate-x-full"
          }`}
      >
      
        <div className='relative h-screen' onClick={(e)=>e.stopPropagation()}>
        <div className='flex justify-between'>
        <h2 className="text-lg font-semibold">FILTERS</h2>
        <button
                onClick={()=>setFilterSideBar(false)}
                className=" text-white rounded-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
    <path d="M15 0C6.64286 0 0 6.64286 0 15C0 23.3571 6.64286 30 15 30C23.3571 30 30 23.3571 30 15C30 6.64286 23.3571 0 15 0ZM20.7857 22.5L15 16.7143L9.21429 22.5L7.5 20.7857L13.2857 15L7.5 9.21429L9.21429 7.5L15 13.2857L20.7857 7.5L22.5 9.21429L16.7143 15L22.5 20.7857L20.7857 22.5Z" fill="#002882"/>
  </svg>
              </button>
        </div>
        <p className="text-gray-500 text-sm mb-4">1000+ Products</p>
  
       <div className='h-full overflow-y-scroll max-h-[calc(100vh-56px)]'>

      {/* Other Sections */}
      {filters.map((section, index) => (
        <div key={index} className="mb-2">
          <div className="flex justify-between items-center" onClick={() => toggleSection(section.name)}>
            <h3 className="font-medium">{section.name}</h3>
            {/* Dropdown Arrow */}
          </div>
          {section.options.map((option, idx) => (
  <label key={idx} className="flex items-center space-x-2 py-1">
    <input type="checkbox" className='accent-[#002882] w-4 h-4 border-natural-gray border rounded-[5px]' 
    onChange={() => handleFilterChange(section.name, option?.name ?? option)} 
    checked={!!selectedFilters[section.name]?.includes(option?.name ?? option)} />
    {section.name === "Color" ? (
      <span className="w-4 h-4 rounded-full border" style={{ backgroundColor: option.color }}></span>
    ) : (
      <span>{option.name || option}</span>
    )}
  </label>
))}

          <div className="h-px bg-[#CCC] my-4"></div>
        </div>
      ))}
    </div>
  
        {/* Buttons */}
        <div className="absolute bottom-18 py-2 w-full flex space-x-2 bg-white">
          <button className="flex-1 bg-dark-blue text-white py-2 rounded-full">Show Results</button>
          <button className="flex-1 bg-gray-300 text-gray-600 py-2 rounded-full" onClick={()=>setSelectedFilters({})}>Reset</button>
        </div>
        </div>
      </aside>

      <aside ref={sideBarRef} 
      className={`block sm:hidden fixed left-0 z-40 w-full bg-[#FCFCFC] shadow-md transition-transform duration-600 ease-in-out ${
        filterSideBar ? "translate-y-0 top-[56px]" : "-translate-y-full"
      }`}
    >
      <div className="flex">
       
      <div className="w-[30%]">
  {filters.map((filter, index) => (
    <div
      key={index}
      className={`p-2 text-sm cursor-pointer hover:bg-gray-200 ${
        selectedCategory === filter.name ? "border-l-4 border-mon-yellow bg-white" : "bg-natural-color"
      }`}
      onClick={() => setSelectedCategory(filter.name)}
    >
      {filter.name}
    </div>
  ))}
</div>

        
<div className="w-[70%] bg-white px-2">
  <h2 className="text-lg font-semibold">{selectedCategory}</h2>
  <div className="mt-2 flex flex-wrap gap-2">
    {filters.find((filter) => filter.name === selectedCategory)
      ?.options.map((item, index) => {
        const value=typeof item === "object" ? item.name : item;
        const isSelected=selectedFilters[selectedCategory]?.includes(value)
        return(
          <button key={index} className={`px-3 py-1 rounded-full 
        text-sm ${isSelected?'border border-dark-blue bg-dark-blue text-white':'border border-natural-gray-20 text-[#666]'}`} onClick={()=>handleFilterChange(selectedCategory, typeof item === "object" ? item.name : item)}>
          {value} {/* Handle color objects */}
        </button>
        )
      })}
  </div>
</div>

      </div>

      
      <div className="flex justify-end space-x-2 bg-white p-2 ">
        <button className="border border-black text-gray-600 py-1 px-3 rounded-full" onClick={()=>setSelectedFilters({})}>Reset</button>
        <button className="bg-dark-blue text-white py-1 px-3 rounded-full">Show Results</button>
        <button className="bg-dark-blue text-white py-1 px-3 rounded-full" onClick={()=>setFilterSideBar(false)}>Close</button>
      </div>
    </aside>
     </> 
  )
}

export default Collection