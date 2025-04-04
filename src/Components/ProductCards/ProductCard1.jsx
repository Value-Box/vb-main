import React, { useState,useEffect,useRef  } from 'react'
import useFetchHomeProducts from '../../services/productsAPI';
import useFetchHomeCategories from '../../services/categoryAPI';
import LoadMoreButton from '../Buttons/LoadMoreButton';
import {Link} from 'react-router-dom'
import Express from '../DeliveryTypes/Express';
import FreeShip from '../DeliveryTypes/FreeShip';


function ProductCard1() {
    const [isOpen, setIsOpen] = useState(false);
    const[loadMore,setLoadMore]=useState(10)
    const [activeCategory,setActiveCategory]=useState('All')
    const categories=[
      
          {
              "id": 1,
              "name": "Clothing",
              "parentID": null,
              "imagepath": null
          },
          {
              "id": 2,
              "name": "Mens Cloth",
              "parentID": 1,
              "imagepath": null
          },
          {
              "id": 3,
              "name": "Female Cloth",
              "parentID": 1,
              "imagepath": "/CollectionImages/Female Cloth-fc541a9d-c427-4034-9f82-32ea7164684c.png"
          },
          {
              "id": 4,
              "name": "Mens Casual",
              "parentID": 2,
              "imagepath": null
          },
          {
              "id": 9,
              "name": "Paints",
              "parentID": 5,
              "imagepath": null
          },
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
              "imagepath": null
          },
          {
              "id": 13,
              "name": "Water Bottle",
              "parentID": 12,
              "imagepath": null
          },
          {
              "id": 1012,
              "name": "Electronics",
              "parentID": 11,
              "imagepath": "/CollectionImages/Electronics-ec25dc43-b46b-49bc-9352-f81108547a65.jpg"
          },
          {
              "id": 5,
              "name": "Mens Formal",
              "parentID": 2,
              "imagepath": null
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
              "imagepath": "/CollectionImages/Atta-f5ad628a-d175-4fdb-b95e-04e327e1f4e0.jpg"
          },
          {
              "id": 8,
              "name": "Fine Atta",
              "parentID": null,
              "imagepath": null
          }
        ]

    // const { response: proData, loading: proLoading, error: proError } = useFetchHomeProducts();
    const [Products, setProducts] = useState([]); // ✅ Empty array instead of null
    const [error, setError] = useState(null);
    useEffect(()=>{
      fetch("https://api.escuelajs.co/api/v1/products")
      .then((res)=>res.json())
      .then((result)=>{
        setProducts(result)
      })
      .catch((err)=>{
        setError(err)
      })
      
    },[])

    // useEffect(() => {
    //   if (proData?.data) {
    //     console.log("Products:", proData);
    //     setProducts(proData.data);
    //   }
    // }, [proData]);

    // const { response: categoryData, loading: catLoading, error: catError } = useFetchHomeCategories();
    
    // const [category,setCategory]=useState([])
    // useEffect(() => {
    //   if ( categoryData?.data) {
    //     console.log("Setting Category Data:", categoryData);
    //     setCategory(categoryData.data);
        
    //   }
    // }, [categoryData]); // ✅ `catLoading` ko bhi add kiya

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
  
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsSliding(true); // Pehle animation start kro
  
      setTimeout(() => {
        setCurrentIndex1((prevIndex) => (prevIndex + 1) % items.length);
        setIsSliding(false); // Animation complete hone ke baad reset kro
      }, 700); // Animation duration ke baad item change ho
    }, 2000); // Har item 2s tak screen pe rahe
  
    return () => clearInterval(interval);
  }, []);
  
  let animation = (
    <div className="relative h-10 text-center items-center overflow-hidden flex text-[12px]">
      <div
        className={`absolute flex gap-2 text-center items-center text-gray-500 text-[12px] transition-transform duration-700 ease-in-out ${
          isSliding ? "translate-y-full opacity-0" : "translate-y-0 opacity-100"
        }`}
      >
        <span className="text-[18px]">{items[currentIndex1].icon}</span>
        <span className="text-red-500">•</span> 
        <span>{items[currentIndex1].text}</span>
      </div>
    </div>
  );

    const thumbnails = [
      { type: "image", src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
      { type: "image", src: "https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
      { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" }, // Example video
      { type: "image", src: "https://images.unsplash.com/photo-1484704849700-f032a568e944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
      { type: "image", src: "https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080" }, // Another video
    ];
    const reorderedThumbnails = [
      ...thumbnails.filter((item) => item.type === "video"), // Pehle sab videos le lo
      ...thumbnails.filter((item) => item.type === "image") // Phir sab images le lo
    ];
    let defaultMedia = null;
    for (let i = 0; i < thumbnails.length; i++) {
      if (thumbnails[i].type === "video") {
        defaultMedia = thumbnails[i]; // First video found
        break;
      } else if (!defaultMedia && thumbnails[i].type === "image") {
        defaultMedia = thumbnails[i]; // First image if no video
      }
    }
    
    const [mainMedia, setMainMedia] = useState(defaultMedia);
    
    useEffect(() => {
      setMainMedia(defaultMedia);
    }, []);
    const colors = ["Red", "Blue", "Green"];
    const sizes = ["S", "M", "L", "XL"];
  
    const [selectedColor, setSelectedColor] = useState(colors[0]);
    const [selectedSize, setSelectedSize] = useState(sizes[0]);

    const heroSecScroll = useRef(null);
  
    const onDragheroSecScroll = (e) => {
      if (e.buttons !== 1) return;
      heroSecScroll.current.scrollLeft -= e.movementX;
    };
  return (
    <>



<div className="sticky top-14 md:top-0 z-20 md:relative max-w-[1920px] mx-auto flex items-center mt-3 ">
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
    className="flex overflow-x-auto space-x-2 2xl:space-x-4 px-2 md:px-12 scrollbar-hide bg-gradient-to-r from-[#FFC136] via-[#FFD168] to-[#E09B00] shadow py-3"
  >
    {categories.map((category, index) => (
      <button
        key={index}
        onClick={() => setActiveCategory(category.name)}
        className={`px-4 2xl:px-6 py-2 2xl:py-2 select-none text-sm 2xl:text-base rounded-full border 
          font-medium whitespace-nowrap flex items-center ${
          activeCategory === category.name
            ? "bg-[#002882] text-white font-medium border-dark-blue"
            : "bg-[#FCFCFC] text-gray-600 border-[#999]"
        }`}
      >
        {category.name}
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

    <div className="antialiased text-gray-900 max-w-[1920px] mx-auto ">
  <div className="bg-[#FCFCFC] p-3 sm:p-5 2xl:p-8 xs:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-3 2xl:gap-5">
  
      
        {Products.slice(0,loadMore).map((items, index) => (
          
<div key={index} className="bg-white rounded-lg flex-1 min-w-[180px] sm:min-w-[250px] md:min-w-[240px] xl:max-w-[350px] xl:min-w-[270px] overflow-hidden duration-400 hover:shadow-lg group ">
      <div className="relative ">
      {/* <img
        className="h-48 w-full object-cover object-end"
        src={`http://182.176.166.222:8081${items.imagePath}`}
        alt="Home in Countryside"
      /> */}
      <img
        className="h-48 w-full object-cover object-end"
        src={items.images[0]}
        alt="Home in Countryside"
      />
      <span className='flex items-center gap-1 text-sm 2xl:text-base bg-white px-3 py-1 2xl:py-2 whitespace-nowrap rounded-full absolute bottom-2 left-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100' onClick={() => setIsOpen(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" className='w-4 2xl:w-5' viewBox="0 0 24 24" fill="none">
        <path d="M12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9ZM12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17ZM12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5Z" fill="#1A1A1A"/>
      </svg> See Preview</span>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Preview</h2>
            <p>This is your modal content!</p>
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>

            <div>
               <div className="bg-[#F2F2F2] flex flex-col">
                     <div ref={heroSecScroll} onMouseMove={onDragheroSecScroll} className="flex w-full overflow-auto 
                     scrollbar-hidden p-3 gap-3 bg-[#FFF] select-none cursor-grab active:cursor-grabbing">
                  {reorderedThumbnails.map((item, index) => (
                    item.type === "video" ? (
                      <video key={index} className="w-70 h-[400px] object-fill rounded-[10px] select-none" controls>
                        <source src={item.src} type="video/mp4" />
                      </video>
                    ) : (
                      <img key={index} src={item.src} className="w-70 h-[400px] object-fill rounded-[10px] select-none pointer-events-none" />
                    )
                  ))}
                     </div>
                    <div className="px-3 flex flex-col gap-2 bg-[#FFF] pb-2.5">
                <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                        <h1 className="text-xl font-bold text-[#002882]">PKR 7,100</h1>
                        <del className="text-[#999] text-lg md:text-xl 2xl:text-2xl">PKR 8,500</del>
                        </div>
                          
                          <span className="ml-2 text-[#F04438] bg-[#FEE4E2] rounded-sm p-1 text-xs">
                            Almost Sold Out
                          </span>
                        </div>
                        <div className="flex items-center">
                        <span className="flex flex-row items-center text-[12px] flex-wrap font-bold text-[#F04438]">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M7.5493 10.0003H5.4168C5.25211 10.0006 5.09119 10.0496 4.95431 10.1412C4.81744 10.2327 4.71073 10.3628 4.64763 10.5149C4.58454 10.667 4.56788 10.8344 4.59977 10.996C4.63165 11.1576 4.71065 11.3061 4.8268 11.4228L10.0001 16.667L15.1726 11.4228C15.2503 11.3456 15.3119 11.2538 15.354 11.1527C15.396 11.0516 15.4177 10.9432 15.4177 10.8337C15.4177 10.7242 15.396 10.6157 15.354 10.5146C15.3119 10.4135 15.2503 10.3217 15.1726 10.2445C15.0164 10.0882 14.8045 10.0004 14.5835 10.0003H12.5093C12.566 7.70866 12.981 5.20449 15.8335 3.33366H15.0001C11.1393 3.33366 7.9643 6.25033 7.5493 10.0003Z" fill="#F04438">
                            </path>
                          </svg> Save PKR 4,456 </span>
                         <span className="ml-2 text-[#CCC]"> |</span><span className="ml-2 text-[#F04438] text-sm md:text-md 2xl:text-lg">26% OFF</span>
                        </div>
                        <p className="text-[#999] text-xs ">Tax Excluded, add at checkout if applicable.</p>
                        <div className="flex gap-4">
                          <Express />
                          <FreeShip />
                        </div>
                        <p className="text-[#1A1A1A] text-sm md:text-md 2xl:text-lg font-semibold leading-6">
                          4K UHD DLED Smart Television 43Inch (2023 Model) 43A61K Black nch
                          (2023 Model) 43A61K Black
                        </p>
              
                        <div className="flex gap-0.5">
                          {[...Array(4)].map((_, index) => (
                            <svg
                              key={index}
                              className="w-4"
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                            >
                              <g clipPath="url(#clip0_6953_113760)">
                                <path
                                  d="M9.10134 2.39C9.19305 2.23263 9.32441 2.10206 9.48233 2.01131C9.64025 1.92056 9.8192 1.8728 10.0013 1.8728C10.1835 1.8728 10.3624 1.92056 10.5203 2.01131C10.6783 2.10206 10.8096 2.23263 10.9013 2.39L13.2305 6.38833L17.7538 7.36833C17.9317 7.407 18.0964 7.49162 18.2314 7.61378C18.3664 7.73593 18.4671 7.89134 18.5233 8.06452C18.5796 8.2377 18.5894 8.42259 18.5519 8.60077C18.5144 8.77894 18.4309 8.94418 18.3096 9.08L15.2263 12.5308L15.693 17.135C15.7114 17.3163 15.6819 17.4992 15.6075 17.6656C15.5331 17.8319 15.4163 17.9758 15.2689 18.083C15.1215 18.1901 14.9485 18.2566 14.7673 18.276C14.5862 18.2954 14.403 18.2669 14.2363 18.1933L10.0013 16.3267L5.76636 18.1933C5.59963 18.2669 5.41653 18.2954 5.23533 18.276C5.05413 18.2566 4.88119 18.1901 4.73376 18.083C4.58634 17.9758 4.46959 17.8319 4.39518 17.6656C4.32077 17.4992 4.2913 17.3163 4.30971 17.135L4.77637 12.5308L1.69306 9.08083C1.57158 8.94502 1.48785 8.77972 1.45024 8.60143C1.41262 8.42314 1.42243 8.23811 1.47868 8.06479C1.53493 7.89148 1.63566 7.73596 1.77081 7.61375C1.90596 7.49154 2.07081 7.40692 2.24889 7.36833L6.77219 6.38833L9.10134 2.39Z"
                                  fill="#EEA500"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_6953_113760">
                                  <rect width="19.9999" height="20" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          ))}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4"
                            width="21"
                            height="20"
                            viewBox="0 0 21 20"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_6953_113776)">
                              <path
                                d="M13.1635 6.64001L13.2744 6.83035L13.4897 6.87699L18.0127 7.85693C18.0127 7.85693 18.0127 7.85694 18.0127 7.85694C18.1052 7.87705 18.1908 7.92105 18.261 7.98456C18.3312 8.04808 18.3836 8.12889 18.4128 8.21894L18.8884 8.06452L18.4128 8.21895C18.4421 8.309 18.4472 8.40515 18.4277 8.49779C18.4082 8.59038 18.3648 8.67625 18.3018 8.74686C18.3018 8.7469 18.3017 8.74695 18.3017 8.747L15.2185 12.1977L15.0717 12.362L15.0939 12.5813L15.5606 17.1854L15.5606 17.1855C15.5702 17.2798 15.5548 17.3749 15.5161 17.4614C15.4774 17.5479 15.4167 17.6228 15.3401 17.6785L15.634 18.083L15.3401 17.6785C15.2634 17.7342 15.1735 17.7688 15.0793 17.7788C14.985 17.7889 14.8898 17.7741 14.8031 17.7358L14.803 17.7358L10.5681 15.8691L10.3664 15.7802L10.1647 15.8691L5.92975 17.7358L5.92966 17.7358C5.84296 17.7741 5.74774 17.7889 5.65352 17.7788C5.5593 17.7688 5.46937 17.7342 5.39271 17.6785L5.13483 18.0334L5.39271 17.6785C5.31605 17.6228 5.25534 17.5479 5.21665 17.4614C5.17795 17.3749 5.16263 17.2798 5.1722 17.1855L5.17221 17.1854L5.63887 12.5813L5.6611 12.362L5.51423 12.1976L2.43092 8.74765L2.43078 8.7475C2.36762 8.67687 2.32408 8.59092 2.30452 8.49821C2.28495 8.4055 2.29005 8.30928 2.31931 8.21915C2.34856 8.12903 2.40094 8.04816 2.47122 7.98461C2.54149 7.92106 2.62721 7.87706 2.71981 7.85699L7.24311 6.87699L7.4584 6.83035L7.56928 6.64001L9.89839 2.64174C9.89841 2.64172 9.89842 2.6417 9.89843 2.64168C9.94612 2.55987 10.0144 2.492 10.0965 2.44483C10.1786 2.39764 10.2717 2.3728 10.3664 2.3728C10.4611 2.3728 10.5542 2.39764 10.6363 2.44483C10.7184 2.492 10.7867 2.55987 10.8343 2.64168C10.8344 2.6417 10.8344 2.64172 10.8344 2.64174L13.1635 6.64001Z"
                                stroke="#EEA500"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_6953_113776">
                                <rect
                                  width="19.9999"
                                  height="20"
                                  fill="white"
                                  transform="translate(0.367004)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                          <span className="text-[#1A1A1A] ml-1 text-sm 2xl:text-base">4.3</span>{" "}
                          <span className="text-[#666] ml-1 text-sm 2xl:text-base">20 Reviews | 1,000+ Sold</span>
                        </div>
                        <div className="flex gap-4 mt-4 bg-[#F2F2F2] h-[1px]"></div>
                        <p className="text-[#333] text-sm md:text-md 2xl:text-lg font-semibold ">
                          Cabinet Color: EU Ship
                        </p>
                        <div className="flex gap-2">
                          {colors.map((color) => (
                            <button
                              key={color}
                              onClick={() => setSelectedColor(color)}
                              className={`px-3 py-1 text-sm md:text-base rounded-md border font-medium ${
                                selectedColor === color
                                  ? "border border-[#EEA500] text-[#1A1A1A]"
                                  : "border border-[#CCC] text-[#666] "
                              }`}
                            >
                              {color}
                            </button>
                          ))}
                        </div>
                        <p className="text-[#333] text-sm md:text-md font-semibold ">Size: 80’</p>
                        <div className="flex gap-2">
                          {sizes.map((size) => (
                            <button
                              key={size}
                              onClick={() => setSelectedSize(size)}
                              className={`px-3 py-1 text-sm md:text-base rounded-md border font-medium ${
                                selectedSize === size
                                  ? "border border-[#EEA500] text-[#1A1A1A]"
                                  : "border border-[#CCC] text-[#666] "
                              }`}
                            >
                              {size}
                            </button>
                          ))}
                        </div>
                </div>
                </div>
            </div>
          </div>
        </div>
      )}

      </div>
      <div className="p-2 flex flex-col gap-2">
          
                  <div className='flex items-start justify-between'>
                  <div className="mt-2 flex flex-col items-start gap-2 w-[70%] ">
                  <span className='hidden sm:flex items-center'>
                       <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
            <g clipPath="url(#clip0_11451_16133)">
              <path d="M6.82551 2.2925C6.89429 2.17447 6.99281 2.07655 7.11125 2.00848C7.22969 1.94042 7.36391 1.9046 7.50051 1.9046C7.63711 1.9046 7.77133 1.94042 7.88977 2.00848C8.00821 2.07655 8.10673 2.17447 8.17551 2.2925L9.92238 5.29125L13.3149 6.02625C13.4483 6.05525 13.5718 6.11872 13.6731 6.21033C13.7744 6.30195 13.8499 6.41851 13.892 6.54839C13.9342 6.67827 13.9416 6.81694 13.9135 6.95057C13.8854 7.08421 13.8227 7.20813 13.7318 7.31L11.4193 9.89812L11.7693 13.3512C11.7831 13.4872 11.761 13.6244 11.7052 13.7492C11.6493 13.874 11.5618 13.9819 11.4512 14.0622C11.3406 14.1426 11.2109 14.1925 11.075 14.207C10.9391 14.2215 10.8018 14.2001 10.6768 14.145L7.50051 12.745L4.32426 14.145C4.19921 14.2001 4.06188 14.2215 3.92598 14.207C3.79008 14.1925 3.66037 14.1426 3.5498 14.0622C3.43923 13.9819 3.35167 13.874 3.29587 13.7492C3.24006 13.6244 3.21795 13.4872 3.23176 13.3512L3.58176 9.89812L1.26926 7.31062C1.17815 7.20876 1.11536 7.08479 1.08714 6.95107C1.05893 6.81736 1.06628 6.67858 1.10847 6.5486C1.15066 6.41861 1.22621 6.30197 1.32758 6.21031C1.42894 6.11865 1.55257 6.05519 1.68613 6.02625L5.07863 5.29125L6.82551 2.2925Z" fill="#EEA500"/>
            </g>
            <defs>
              <clipPath id="clip0_11451_16133">
                <rect width="15" height="15" fill="white" transform="translate(0 0.5)"/>
              </clipPath>
            </defs>
                       </svg>
                       <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
            <g clipPath="url(#clip0_11451_16133)">
              <path d="M6.82551 2.2925C6.89429 2.17447 6.99281 2.07655 7.11125 2.00848C7.22969 1.94042 7.36391 1.9046 7.50051 1.9046C7.63711 1.9046 7.77133 1.94042 7.88977 2.00848C8.00821 2.07655 8.10673 2.17447 8.17551 2.2925L9.92238 5.29125L13.3149 6.02625C13.4483 6.05525 13.5718 6.11872 13.6731 6.21033C13.7744 6.30195 13.8499 6.41851 13.892 6.54839C13.9342 6.67827 13.9416 6.81694 13.9135 6.95057C13.8854 7.08421 13.8227 7.20813 13.7318 7.31L11.4193 9.89812L11.7693 13.3512C11.7831 13.4872 11.761 13.6244 11.7052 13.7492C11.6493 13.874 11.5618 13.9819 11.4512 14.0622C11.3406 14.1426 11.2109 14.1925 11.075 14.207C10.9391 14.2215 10.8018 14.2001 10.6768 14.145L7.50051 12.745L4.32426 14.145C4.19921 14.2001 4.06188 14.2215 3.92598 14.207C3.79008 14.1925 3.66037 14.1426 3.5498 14.0622C3.43923 13.9819 3.35167 13.874 3.29587 13.7492C3.24006 13.6244 3.21795 13.4872 3.23176 13.3512L3.58176 9.89812L1.26926 7.31062C1.17815 7.20876 1.11536 7.08479 1.08714 6.95107C1.05893 6.81736 1.06628 6.67858 1.10847 6.5486C1.15066 6.41861 1.22621 6.30197 1.32758 6.21031C1.42894 6.11865 1.55257 6.05519 1.68613 6.02625L5.07863 5.29125L6.82551 2.2925Z" fill="#EEA500"/>
            </g>
            <defs>
              <clipPath id="clip0_11451_16133">
                <rect width="15" height="15" fill="white" transform="translate(0 0.5)"/>
              </clipPath>
            </defs>
                       </svg>
                       <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
            <g clipPath="url(#clip0_11451_16133)">
              <path d="M6.82551 2.2925C6.89429 2.17447 6.99281 2.07655 7.11125 2.00848C7.22969 1.94042 7.36391 1.9046 7.50051 1.9046C7.63711 1.9046 7.77133 1.94042 7.88977 2.00848C8.00821 2.07655 8.10673 2.17447 8.17551 2.2925L9.92238 5.29125L13.3149 6.02625C13.4483 6.05525 13.5718 6.11872 13.6731 6.21033C13.7744 6.30195 13.8499 6.41851 13.892 6.54839C13.9342 6.67827 13.9416 6.81694 13.9135 6.95057C13.8854 7.08421 13.8227 7.20813 13.7318 7.31L11.4193 9.89812L11.7693 13.3512C11.7831 13.4872 11.761 13.6244 11.7052 13.7492C11.6493 13.874 11.5618 13.9819 11.4512 14.0622C11.3406 14.1426 11.2109 14.1925 11.075 14.207C10.9391 14.2215 10.8018 14.2001 10.6768 14.145L7.50051 12.745L4.32426 14.145C4.19921 14.2001 4.06188 14.2215 3.92598 14.207C3.79008 14.1925 3.66037 14.1426 3.5498 14.0622C3.43923 13.9819 3.35167 13.874 3.29587 13.7492C3.24006 13.6244 3.21795 13.4872 3.23176 13.3512L3.58176 9.89812L1.26926 7.31062C1.17815 7.20876 1.11536 7.08479 1.08714 6.95107C1.05893 6.81736 1.06628 6.67858 1.10847 6.5486C1.15066 6.41861 1.22621 6.30197 1.32758 6.21031C1.42894 6.11865 1.55257 6.05519 1.68613 6.02625L5.07863 5.29125L6.82551 2.2925Z" fill="#EEA500"/>
            </g>
            <defs>
              <clipPath id="clip0_11451_16133">
                <rect width="15" height="15" fill="white" transform="translate(0 0.5)"/>
              </clipPath>
            </defs>
                       </svg>
                       <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
            <g clipPath="url(#clip0_11451_16133)">
              <path d="M6.82551 2.2925C6.89429 2.17447 6.99281 2.07655 7.11125 2.00848C7.22969 1.94042 7.36391 1.9046 7.50051 1.9046C7.63711 1.9046 7.77133 1.94042 7.88977 2.00848C8.00821 2.07655 8.10673 2.17447 8.17551 2.2925L9.92238 5.29125L13.3149 6.02625C13.4483 6.05525 13.5718 6.11872 13.6731 6.21033C13.7744 6.30195 13.8499 6.41851 13.892 6.54839C13.9342 6.67827 13.9416 6.81694 13.9135 6.95057C13.8854 7.08421 13.8227 7.20813 13.7318 7.31L11.4193 9.89812L11.7693 13.3512C11.7831 13.4872 11.761 13.6244 11.7052 13.7492C11.6493 13.874 11.5618 13.9819 11.4512 14.0622C11.3406 14.1426 11.2109 14.1925 11.075 14.207C10.9391 14.2215 10.8018 14.2001 10.6768 14.145L7.50051 12.745L4.32426 14.145C4.19921 14.2001 4.06188 14.2215 3.92598 14.207C3.79008 14.1925 3.66037 14.1426 3.5498 14.0622C3.43923 13.9819 3.35167 13.874 3.29587 13.7492C3.24006 13.6244 3.21795 13.4872 3.23176 13.3512L3.58176 9.89812L1.26926 7.31062C1.17815 7.20876 1.11536 7.08479 1.08714 6.95107C1.05893 6.81736 1.06628 6.67858 1.10847 6.5486C1.15066 6.41861 1.22621 6.30197 1.32758 6.21031C1.42894 6.11865 1.55257 6.05519 1.68613 6.02625L5.07863 5.29125L6.82551 2.2925Z" fill="#EEA500"/>
            </g>
            <defs>
              <clipPath id="clip0_11451_16133">
                <rect width="15" height="15" fill="white" transform="translate(0 0.5)"/>
              </clipPath>
            </defs>
                       </svg>
                       <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
            <g clipPath="url(#clip0_11451_16149)">
              <path d="M9.49035 5.54293L9.60122 5.73327L9.81651 5.77991L13.2087 6.51485C13.2568 6.52528 13.3012 6.54813 13.3377 6.58111L13.6731 6.21033L13.3377 6.58112C13.3741 6.6141 13.4013 6.65606 13.4165 6.70282C13.4317 6.74957 13.4343 6.7995 13.4242 6.8476C13.4141 6.89571 13.3915 6.94032 13.3588 6.977L11.0464 9.56498L10.8996 9.7293L10.9218 9.94854L11.2718 13.4017L11.2718 13.4018C11.2768 13.4507 11.2688 13.5001 11.2487 13.545C11.2286 13.5899 11.1971 13.6288 11.1573 13.6577C11.1175 13.6866 11.0708 13.7046 11.0219 13.7098C10.973 13.7151 10.9235 13.7074 10.8785 13.6875L10.8784 13.6875L7.70217 12.2875L7.50051 12.1986L7.29884 12.2875L4.12259 13.6875L4.1225 13.6875C4.07749 13.7074 4.02805 13.7151 3.97912 13.7098C3.9302 13.7046 3.8835 13.6866 3.8437 13.6577C3.80389 13.6288 3.77237 13.5899 3.75228 13.545C3.73219 13.5001 3.72423 13.4507 3.7292 13.4018L3.72921 13.4017L4.07921 9.94854L4.10144 9.72927L3.95457 9.56494L1.64207 6.97744L1.64193 6.97729C1.60914 6.94062 1.58653 6.89599 1.57637 6.84785C1.56621 6.79971 1.56886 6.74975 1.58405 6.70296C1.59924 6.65616 1.62644 6.61417 1.66293 6.58117C1.69942 6.54818 1.74393 6.52533 1.79201 6.51491L5.18451 5.77991L5.39979 5.73327L5.51067 5.54293L7.25751 2.54425C7.28227 2.50176 7.31774 2.4665 7.36038 2.442C7.40301 2.4175 7.45133 2.4046 7.50051 2.4046C7.54969 2.4046 7.598 2.4175 7.64064 2.442C7.68326 2.46649 7.71871 2.50172 7.74347 2.54418C7.74348 2.5442 7.7435 2.54422 7.74351 2.54425L9.49035 5.54293Z" stroke="#EEA500"/>
            </g>
            <defs>
              <clipPath id="clip0_11451_16149">
                <rect width="15" height="15" fill="white" transform="translate(0 0.5)"/>
              </clipPath>
            </defs>
                       </svg>
          
                        <span className="ml-2 text-gray-600 text-sm">250+ Sold</span>              
                      </span>
                      <span className="hidden sm:block bg-[#FFEAD5] text-[#FB6514] py-1 px-2 text-xs rounded-sm font-semibold tracking-wide">
                    Top Selling
                    </span>
                    <p className="font-medium text-sm 2xl:text-base truncate">{items.name}</p>
                  </div>
                  <span className='bg-[#FCFCFC] border border-[#CCD1D2] rounded-lg p-1 2xl:p-2 '>
                  <svg xmlns="http://www.w3.org/2000/svg" className='w-4 sm:w-6' viewBox="0 0 25 24" fill="none">
                    <path d="M11.5996 8.99985H13.5996V5.99985H16.5996V3.99985H13.5996V0.999847H11.5996V3.99985H8.59961V5.99985H11.5996V8.99985ZM7.59961 17.9998C6.49961 17.9998 5.60961 18.8998 5.60961 19.9998C5.60961 21.0998 6.49961 21.9998 7.59961 21.9998C8.69961 21.9998 9.59961 21.0998 9.59961 19.9998C9.59961 18.8998 8.69961 17.9998 7.59961 17.9998ZM17.5996 17.9998C16.4996 17.9998 15.6096 18.8998 15.6096 19.9998C15.6096 21.0998 16.4996 21.9998 17.5996 21.9998C18.6996 21.9998 19.5996 21.0998 19.5996 19.9998C19.5996 18.8998 18.6996 17.9998 17.5996 17.9998ZM8.69961 12.9998H16.1496C16.8996 12.9998 17.5596 12.5898 17.8996 11.9698L21.7596 4.95985L20.0096 3.99985L16.1496 10.9998H9.12961L4.86961 1.99985H1.59961V3.99985H3.59961L7.19961 11.5898L5.84961 14.0298C5.11961 15.3698 6.07961 16.9998 7.59961 16.9998H19.5996V14.9998H7.59961L8.69961 12.9998Z" fill="#1A1A1A"/>
                  </svg>
                  </span>
                  </div>
               
                  <div className="flex flex-col sm:gap-2">
                  <span className="flex justify-between">
                 <span className="text-md xl:text-lg ml-[2px]"><span className="text-xs">PKR </span>{items.price}</span>
                <span className='flex flex-row items-center text-[8px] sm:text-[13px] font-bold text-[#F04438]'>26% off</span>
                </span>
                <div className='flex flex-col-reverse sm:flex-row'>
                <div  className='flex flex-row gap-1'>
                <span className="bg-[#F04438] text-[10px] sm:text-[13px] text-white flex justify-center items-center rounded-md px-3 h-fit xl:px-[10px] py-[3px] gap-[10px]">
            Sale
          </span>
                  <span className="hidden sm:block text-red-500 xl:px-2">•</span> 
                  <span className="bg-[#E6EAF3] text-[10px] sm:text-[13px] text-black flex justify-center items-center rounded-md px-3 h-fit xl:px-[10px] py-[3px]">
            Super<span className='text-[#33539B]'>Deal</span>
          </span>
                  <span className="hidden sm:block text-red-500 xl:px-2">•</span> 
                </div>
                  <span className='flex flex-row items-center text-[10px] flex-wrap font-bold text-[#F04438]'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7.5493 10.0003H5.4168C5.25211 10.0006 5.09119 10.0496 4.95431 10.1412C4.81744 10.2327 4.71073 10.3628 4.64763 10.5149C4.58454 10.667 4.56788 10.8344 4.59977 10.996C4.63165 11.1576 4.71065 11.3061 4.8268 11.4228L10.0001 16.667L15.1726 11.4228C15.2503 11.3456 15.3119 11.2538 15.354 11.1527C15.396 11.0516 15.4177 10.9432 15.4177 10.8337C15.4177 10.7242 15.396 10.6157 15.354 10.5146C15.3119 10.4135 15.2503 10.3217 15.1726 10.2445C15.0164 10.0882 14.8045 10.0004 14.5835 10.0003H12.5093C12.566 7.70866 12.981 5.20449 15.8335 3.33366H15.0001C11.1393 3.33366 7.9643 6.25033 7.5493 10.0003Z" fill="#F04438"/>
          </svg> Save PKR 4,456</span>
                </div>
          
                
                {animation}
                
          
                <div className='flex flex-col sm:flex-row sm:gap-2 items-start sm:items-center'>
                <span className="flex items-center h-6 xl:h-[28px] px-[10px] py-[5px] text-xs xl:text-base gap-[5px] font-bold rounded-bl-[20px] rounded-br-[20px] rounded-tr-[20px] bg-gradient-to-r from-[#FFC136] via-[#F5BC3A] to-[#E09B00]">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M9.99935 2.66663C11.4138 2.66663 12.7704 3.22853 13.7706 4.22872C14.7708 5.22892 15.3327 6.58547 15.3327 7.99996C15.3327 9.41445 14.7708 10.771 13.7706 11.7712C12.7704 12.7714 11.4138 13.3333 9.99935 13.3333C8.58486 13.3333 7.22831 12.7714 6.22811 11.7712C5.22792 10.771 4.66602 9.41445 4.66602 7.99996C4.66602 6.58547 5.22792 5.22892 6.22811 4.22872C7.22831 3.22853 8.58486 2.66663 9.99935 2.66663ZM9.99935 3.99996C8.93848 3.99996 7.92107 4.42139 7.17092 5.17153C6.42078 5.92168 5.99935 6.93909 5.99935 7.99996C5.99935 9.06083 6.42078 10.0782 7.17092 10.8284C7.92107 11.5785 8.93848 12 9.99935 12C11.0602 12 12.0776 11.5785 12.8278 10.8284C13.5779 10.0782 13.9993 9.06083 13.9993 7.99996C13.9993 6.93909 13.5779 5.92168 12.8278 5.17153C12.0776 4.42139 11.0602 3.99996 9.99935 3.99996ZM9.33268 5.33329H10.3327V7.85329L11.886 9.40663L11.1793 10.1133L9.33268 8.26663V5.33329ZM1.33268 12C1.15587 12 0.986302 11.9297 0.861278 11.8047C0.736253 11.6797 0.666016 11.5101 0.666016 11.3333C0.666016 11.1565 0.736253 10.9869 0.861278 10.8619C0.986302 10.7369 1.15587 10.6666 1.33268 10.6666H3.88602C4.09268 11.14 4.35935 11.5866 4.66602 12H1.33268ZM1.99935 8.66663C1.82254 8.66663 1.65297 8.59639 1.52794 8.47136C1.40292 8.34634 1.33268 8.17677 1.33268 7.99996C1.33268 7.82315 1.40292 7.65358 1.52794 7.52855C1.65297 7.40353 1.82254 7.33329 1.99935 7.33329H3.36602L3.33268 7.99996L3.36602 8.66663H1.99935ZM2.66602 5.33329C2.4892 5.33329 2.31964 5.26305 2.19461 5.13803C2.06959 5.01301 1.99935 4.84344 1.99935 4.66663C1.99935 4.48981 2.06959 4.32025 2.19461 4.19522C2.31964 4.0702 2.4892 3.99996 2.66602 3.99996H4.66602C4.35935 4.41329 4.09268 4.85996 3.88602 5.33329H2.66602Z" fill="#1A1A1A"/>
          </svg> <p>express</p>
          </span>
          <span className='text-sm xl:text-base'>Get it within 2 Days</span>
          
                </div>
                
                  </div>
                  
                </div>
    </div>
        ))}
      
    
  </div>

</div>
    <div className='flex justify-center mb-5'>
    <LoadMoreButton className="bg-[#00171F] text-white " onClick={()=>setLoadMore(loadMore+10)}> Load More <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M19 8.5L12 15.5L5 8.5" stroke="#EEA500" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></LoadMoreButton>
    </div>
   
    </>
  )
}

export default ProductCard1