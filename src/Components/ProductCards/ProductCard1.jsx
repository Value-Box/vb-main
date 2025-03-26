import React, { useState,useEffect,useRef  } from 'react'
import useFetchHomeProducts from '../../services/productsAPI';
import useFetchHomeCategories from '../../services/categoryAPI';
import LoadMoreButton from '../Buttons/LoadMoreButton';
import {Link} from 'react-router-dom'


function ProductCard1() {
    const[loadMore,setLoadMore]=useState(5)
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
    { text: "Welcome Deal", icon: "🎁" },
    { text: "30+ Sold Recently", icon: "🛒" },
    { text: "Selling out so Fast", icon: "🔥" },
    { text: "Free Shipping Worldwide", icon: "🚚" }
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
  <div className="bg-[#FCFCFC] p-3 sm:p-5 2xl:p-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid xl:grid-cols-5 gap-3 2xl:gap-5">
  
      
        {Products.slice(0,loadMore).map((items, index) => (
          
<div key={index} className="bg-white rounded-lg overflow-hidden duration-400 hover:shadow-lg group ">
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
      <Link className='flex items-center gap-1 text-sm 2xl:text-base bg-white px-3 py-1 2xl:py-2 whitespace-nowrap rounded-full absolute bottom-2 left-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100' to="/SingleProduct">
            <svg xmlns="http://www.w3.org/2000/svg" className='w-4 2xl:w-5' viewBox="0 0 24 24" fill="none">
        <path d="M12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9ZM12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17ZM12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5Z" fill="#1A1A1A"/>
      </svg> See Preview</Link>
      </div>
      <div className="p-2 flex flex-col gap-2">

        <div className='flex items-start justify-between '>
        <div className="mt-2 flex flex-col items-start gap-2">
        <span className='flex'>
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
            <span className="bg-[#FFEAD5] text-[#FB6514] py-1 px-2 text-xs rounded-sm font-semibold tracking-wide">
          Top Selling
          </span>
          <p className="font-medium text-sm 2xl:text-base truncate max-w-[190px]">{items.productName}</p>
        </div>
        <span className='bg-[#FCFCFC] border border-[#CCD1D2] rounded-lg p-1 2xl:p-2 '>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
          <path d="M11.5996 8.99985H13.5996V5.99985H16.5996V3.99985H13.5996V0.999847H11.5996V3.99985H8.59961V5.99985H11.5996V8.99985ZM7.59961 17.9998C6.49961 17.9998 5.60961 18.8998 5.60961 19.9998C5.60961 21.0998 6.49961 21.9998 7.59961 21.9998C8.69961 21.9998 9.59961 21.0998 9.59961 19.9998C9.59961 18.8998 8.69961 17.9998 7.59961 17.9998ZM17.5996 17.9998C16.4996 17.9998 15.6096 18.8998 15.6096 19.9998C15.6096 21.0998 16.4996 21.9998 17.5996 21.9998C18.6996 21.9998 19.5996 21.0998 19.5996 19.9998C19.5996 18.8998 18.6996 17.9998 17.5996 17.9998ZM8.69961 12.9998H16.1496C16.8996 12.9998 17.5596 12.5898 17.8996 11.9698L21.7596 4.95985L20.0096 3.99985L16.1496 10.9998H9.12961L4.86961 1.99985H1.59961V3.99985H3.59961L7.19961 11.5898L5.84961 14.0298C5.11961 15.3698 6.07961 16.9998 7.59961 16.9998H19.5996V14.9998H7.59961L8.69961 12.9998Z" fill="#1A1A1A"/>
        </svg>
        </span>
        </div>
     
        <div className="flex flex-col gap-2">
        <span className="flex justify-between">
       <span className="text-lg ml-[2px]"><span className="text-xs">PKR</span>{items.price}</span>
      <span className='flex flex-row items-center text-[13px] font-bold text-[#F04438]'>26% off</span>
      </span>
      <div className='flex flex-row'>
      <span className="bg-[#F04438] text-[13px] text-white flex justify-center items-center rounded-md px-[10px] py-[3px] gap-[10px]">
  Sale
</span>
        <span className="text-red-500 px-1 2xl:px-2">•</span> 
        <span className="bg-[#E6EAF3] text-[13px] text-black flex justify-center items-center rounded-md px-[10px] py-[3px]">
  Super<span className='text-[#33539B]'>Deal</span>
</span>
        <span className="text-red-500 px-1 2xl:px-2">•</span> 
        <span className='flex flex-row items-center text-[10px] 2xl:text-[13px] font-bold text-[#F04438]'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M7.5493 10.0003H5.4168C5.25211 10.0006 5.09119 10.0496 4.95431 10.1412C4.81744 10.2327 4.71073 10.3628 4.64763 10.5149C4.58454 10.667 4.56788 10.8344 4.59977 10.996C4.63165 11.1576 4.71065 11.3061 4.8268 11.4228L10.0001 16.667L15.1726 11.4228C15.2503 11.3456 15.3119 11.2538 15.354 11.1527C15.396 11.0516 15.4177 10.9432 15.4177 10.8337C15.4177 10.7242 15.396 10.6157 15.354 10.5146C15.3119 10.4135 15.2503 10.3217 15.1726 10.2445C15.0164 10.0882 14.8045 10.0004 14.5835 10.0003H12.5093C12.566 7.70866 12.981 5.20449 15.8335 3.33366H15.0001C11.1393 3.33366 7.9643 6.25033 7.5493 10.0003Z" fill="#F04438"/>
</svg>Save 4,456</span>
      </div>

      {animation}

      <div className='flex gap-2 items-center '>
      <span className="flex h-[28px] px-[10px] py-[5px] items-center gap-[5px] font-bold rounded-bl-[20px] rounded-br-[20px] rounded-tr-[20px] bg-gradient-to-r from-[#FFC136] via-[#FAC142] via-[#FFD168] via-[#F5BC3A] to-[#E09B00]">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M9.99935 2.66663C11.4138 2.66663 12.7704 3.22853 13.7706 4.22872C14.7708 5.22892 15.3327 6.58547 15.3327 7.99996C15.3327 9.41445 14.7708 10.771 13.7706 11.7712C12.7704 12.7714 11.4138 13.3333 9.99935 13.3333C8.58486 13.3333 7.22831 12.7714 6.22811 11.7712C5.22792 10.771 4.66602 9.41445 4.66602 7.99996C4.66602 6.58547 5.22792 5.22892 6.22811 4.22872C7.22831 3.22853 8.58486 2.66663 9.99935 2.66663ZM9.99935 3.99996C8.93848 3.99996 7.92107 4.42139 7.17092 5.17153C6.42078 5.92168 5.99935 6.93909 5.99935 7.99996C5.99935 9.06083 6.42078 10.0782 7.17092 10.8284C7.92107 11.5785 8.93848 12 9.99935 12C11.0602 12 12.0776 11.5785 12.8278 10.8284C13.5779 10.0782 13.9993 9.06083 13.9993 7.99996C13.9993 6.93909 13.5779 5.92168 12.8278 5.17153C12.0776 4.42139 11.0602 3.99996 9.99935 3.99996ZM9.33268 5.33329H10.3327V7.85329L11.886 9.40663L11.1793 10.1133L9.33268 8.26663V5.33329ZM1.33268 12C1.15587 12 0.986302 11.9297 0.861278 11.8047C0.736253 11.6797 0.666016 11.5101 0.666016 11.3333C0.666016 11.1565 0.736253 10.9869 0.861278 10.8619C0.986302 10.7369 1.15587 10.6666 1.33268 10.6666H3.88602C4.09268 11.14 4.35935 11.5866 4.66602 12H1.33268ZM1.99935 8.66663C1.82254 8.66663 1.65297 8.59639 1.52794 8.47136C1.40292 8.34634 1.33268 8.17677 1.33268 7.99996C1.33268 7.82315 1.40292 7.65358 1.52794 7.52855C1.65297 7.40353 1.82254 7.33329 1.99935 7.33329H3.36602L3.33268 7.99996L3.36602 8.66663H1.99935ZM2.66602 5.33329C2.4892 5.33329 2.31964 5.26305 2.19461 5.13803C2.06959 5.01301 1.99935 4.84344 1.99935 4.66663C1.99935 4.48981 2.06959 4.32025 2.19461 4.19522C2.31964 4.0702 2.4892 3.99996 2.66602 3.99996H4.66602C4.35935 4.41329 4.09268 4.85996 3.88602 5.33329H2.66602Z" fill="#1A1A1A"/>
</svg> express
</span>
<span>Get it within 2 Days</span>

      </div>
      
        </div>
        
      </div>
    </div>
        ))}
      
    
  </div>

</div>
    <div className='flex justify-center mb-5'>
    <LoadMoreButton className="bg-[#00171F] text-white " onClick={()=>setLoadMore(loadMore+5)}> Load More <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M19 8.5L12 15.5L5 8.5" stroke="#EEA500" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></LoadMoreButton>
    </div>
   
    </>
  )
}

export default ProductCard1