import React, { useState, useEffect, useRef } from "react";
import electricity from "/src/Images/electricity.gif";
import Express from "../Components/DeliveryTypes/Express";
import FreeShip from "../Components/DeliveryTypes/FreeShip";
import { Link } from "react-router-dom";
import ViewMoreButton from "../Components/Buttons/ViewMoreButton";

function ProductPage() {
  const [quantity, setQuantity] = useState(1);

  const [activeModal, setActiveModal] = useState(null);
  const openModal = (modalName) => setActiveModal(modalName);
  const closeModal = () => setActiveModal(null);
  useEffect(() => {
    console.log(activeModal);
  }, [activeModal]);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const [mainImage, setMainImage] = useState("/images/product1.jpg");
  const thumbnails = [
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8aGVhZHBob25lfGVufDB8MHx8fDE3MjEzMDM2OTB8MA&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1484704849700-f032a568e944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw0fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1528148343865-51218c4a13e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwzfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080",
  ];
  useEffect(() => {
    if (thumbnails.length > 0) {
      setMainImage(thumbnails[0]); // First image as default
    }
  }, []);
  const colors = ["Red", "Blue", "Green"];
  const sizes = ["S", "M", "L", "XL"];

  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  const sections = [
    { name: "Customer Reviews (5)", id: "reviews" },
    { name: "Specification", id: "specification" },
    { name: "Description", id: "description" },
    { name: "Store", id: "store" },
    { name: "More to Love", id: "more-to-love" },
  ];

  const reviews = [
    {
      id: 1,
      name: "Alice Johnson",
      review: "Great quality, fast shipping! Will buy again.",
      userImg: "https://randomuser.me/api/portraits/women/5.jpg",
      productImg:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      id: 2,
      name: "Michael Smith",
      review: "Amazing product! Totally worth the price.",
      userImg: "https://randomuser.me/api/portraits/men/6.jpg",
      productImg:
        "https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8aGVhZHBob25lfGVufDB8MHx8fDE3MjEzMDM2OTB8MA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      id: 3,
      name: "Emma Williams",
      review: "Exceeded my expectations. Highly recommend!",
      userImg: "https://randomuser.me/api/portraits/women/7.jpg",
      productImg:
        "https://images.unsplash.com/photo-1484704849700-f032a568e944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw0fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      id: 4,
      name: "David Brown",
      review:
        "Great Product There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
      userImg: "https://randomuser.me/api/portraits/men/8.jpg",
      productImg:
        "https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      id: 5,
      name: "Sophia Miller",
      review: "Satisfied with the purchase. Will order again!",
      userImg: "https://randomuser.me/api/portraits/women/9.jpg",
      productImg:
        "https://images.unsplash.com/photo-1528148343865-51218c4a13e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwzfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080",
    },
  ];

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const ratings = [
    { stars: 5, percentage: 70 },
    { stars: 4, percentage: 25 },
    { stars: 3, percentage: 13 },
    { stars: 2, percentage: 10 },
    { stars: 1, percentage: 5 },
  ];
  const userRatingimages = [
    "https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1675186049222-0b5018db6ce9?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1336&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1560060141-7b9018741ced?q=80&w=1479&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1676968003093-9ad884a589ad?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true); // Auto slide feature
  const [showBtn, setShowbtn] = useState(false);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
    setAutoSlide(false); // Stop auto-slide when user interacts
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => {
    setIsDragging(false);
    setAutoSlide(true); // Resume auto-slide
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 250; // Smooth scroll amount
      carouselRef.current.scrollTo({
        left:
          carouselRef.current.scrollLeft +
          (direction === "left" ? -scrollAmount : scrollAmount),
        behavior: "smooth",
      });

      // Looping Effect: Jump to first item when reaching the end
      setTimeout(() => {
        if (
          direction === "right" &&
          carouselRef.current.scrollLeft + carouselRef.current.clientWidth >=
            carouselRef.current.scrollWidth
        ) {
          carouselRef.current.scrollTo({ left: 0, behavior: "instant" });
        }
        if (direction === "left" && carouselRef.current.scrollLeft <= 0) {
          carouselRef.current.scrollTo({
            left: carouselRef.current.scrollWidth,
            behavior: "instant",
          });
        }
      }, 500); // Delay to ensure smooth transition
    }
  };

  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1024);
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
    
      

      <div className="flex flex-col sm:flex-row p-3 xl:p-6 gap-3 xl:gap-6 max-w-[1920px] mx-auto">
        <div className="w-[68%] xl:w-[70%] 2xl:w-[75%] ">
        <div className="flex items-start flex-col lg:flex-row gap-3 xl:gap-6 ">
        {/* Left Section - Images */}
        <div className="flex lg:w-max flex-row-reverse gap-2 xl:gap-4 lg:sticky top-[8%]">
          <img
            src={mainImage}
            alt="Product"
            className="w-[80%] xl:w-[86%] h-96 object-cover rounded-lg shadow-lg"
          />
          <div className="flex flex-col gap-2">
            {thumbnails.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="Thumbnail"
                className={`w-16 h-16 object-cover rounded-md cursor-pointer border-1 
        ${mainImage === image ? "border-[#EEA500]" : "border-transparent"}`}
                onClick={() => setMainImage(image)}
              />
            ))}
          </div>
        </div>

        {/* Right Section - Product Details */}
        <div className="lg:w-max space-y-2 2xl:space-y-4">
          <div className="flex bg-[#FEE4E2] items-center px-3 py-2 rounded-lg">
            <img src={electricity} className="w-8 2xl:w-10" alt="" />
            <div className="ml-2">
              <p className="text-xs font-semibold 2xl:font-normal 2xl:text-sm">Upcoming Price</p>
              <p className="text-lg 2xl:text-xl font-semibold">PKR 6,500</p>
            </div>
            <span className="text-red-500 font-bold ml-auto text-2xl 2xl:text-3xl">
              FLASH SALE
            </span>
          </div>

          <h1 className="text-2xl 2xl:text-3xl font-bold text-[#002882]">PKR 7,100</h1>
          <div className="flex items-center">
            <del className="text-[#999] text-xl 2xl:text-2xl">PKR 8,500</del>
            <span className="ml-2 text-[#F04438] text-md 2xl:text-lg">26% OFF</span>
            <span className="ml-2 text-[#F04438] bg-[#FEE4E2] rounded-sm p-1 text-xs">
              Almost Sold Out
            </span>
          </div>

          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M14.6484 3.69341L12.9817 2.81841C11.5184 2.05091 10.7867 1.66675 10.0001 1.66675C9.21341 1.66675 8.48175 2.05008 7.01841 2.81841L6.75091 2.95925L14.1867 7.20841L17.5334 5.53341C16.9951 4.92341 16.1267 4.46758 14.6484 3.69175M18.1234 6.63675L14.7917 8.30341V10.8334C14.7917 10.9992 14.7259 11.1581 14.6087 11.2754C14.4915 11.3926 14.3325 11.4584 14.1667 11.4584C14.001 11.4584 13.842 11.3926 13.7248 11.2754C13.6076 11.1581 13.5417 10.9992 13.5417 10.8334V8.92841L10.6251 10.3867V18.2534C11.2234 18.1042 11.9042 17.7476 12.9817 17.1817L14.6484 16.3067C16.4409 15.3659 17.3376 14.8959 17.8359 14.0501C18.3334 13.2051 18.3334 12.1526 18.3334 10.0501V9.95258C18.3334 8.37508 18.3334 7.38841 18.1234 6.63675ZM9.37508 18.2534V10.3867L1.87675 6.63675C1.66675 7.38841 1.66675 8.37508 1.66675 9.95091V10.0484C1.66675 12.1526 1.66675 13.2051 2.16425 14.0501C2.66258 14.8959 3.55925 15.3667 5.35175 16.3076L7.01841 17.1817C8.09591 17.7476 8.77675 18.1042 9.37508 18.2534ZM2.46675 5.53425L10.0001 9.30091L12.8426 7.88008L5.43758 3.64841L5.35175 3.69341C3.87425 4.46841 3.00508 4.92425 2.46675 5.53508"
                fill="#12B76A"
              />
            </svg>
            <span className="w-1.5 h-1.5 bg-[#12B76A] rounded-full inline-block"></span>
            <span className="text-[#666]">30+ Sold Recently</span>
          </div>
          <p className="text-[#1A1A1A] text-md 2xl:text-lg font-semibold leading-6">
            4K UHD DLED Smart Television 43Inch (2023 Model) 43A61K Black nch
            (2023 Model) 43A61K Black
          </p>
          {/* <p className="text-[#999]">Tax Excluded, add at checkout if applicable.</p>
        <p className="text-gray-500 line-through">PKR 8,500</p>
        <p className="text-green-600">26% OFF</p> */}

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
              <g clip-path="url(#clip0_6953_113776)">
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

          {/* Size & Shipping */}
          <div className="flex gap-4">
            <Express />
            <FreeShip />
          </div>

          {/* Quantity & Buttons */}
          <div className="flex items-center 2xl:gap-2 mt-4 bg-[#FEF6E6] p-2 rounded-lg">
            <svg className="w-8 2xl:w-10"
              xmlns="http://www.w3.org/2000/svg"
              
              viewBox="0 0 36 36"
              fill="none"
            >
              <path
                d="M7.58864 11.9546C6.96068 11.9546 6.39167 11.5846 6.13694 11.0107C5.78112 10.2089 6.14262 9.27052 6.94437 8.91471L16.2767 4.77307C17.097 4.40898 18.0333 4.40898 18.8537 4.77307L28.1859 8.91471C28.76 9.16944 29.1299 9.73845 29.1299 10.3664C29.1299 11.2436 28.4188 11.9546 27.5417 11.9546H7.58864Z"
                fill="#EEA500"
                stroke="#002882"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M9 15.9C9 15.4029 9.40294 15 9.9 15H11.1C11.5971 15 12 15.4029 12 15.9V26.1C12 26.5971 11.5971 27 11.1 27H9.9C9.40294 27 9 26.5971 9 26.1V15.9Z"
                fill="#FEF6E6"
                stroke="#002882"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M18.6 15H17.4C16.9029 15 16.5 15.4029 16.5 15.9V26.1C16.5 26.5971 16.9029 27 17.4 27H18.6C19.0971 27 19.5 26.5971 19.5 26.1V15.9C19.5 15.4029 19.0971 15 18.6 15Z"
                fill="#FEF6E6"
                stroke="#002882"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M24 15.9C24 15.4029 24.4029 15 24.9 15H26.1C26.5971 15 27 15.4029 27 15.9V26.1C27 26.5971 26.5971 27 26.1 27H24.9C24.4029 27 24 26.5971 24 26.1V15.9Z"
                fill="#FEF6E6"
                stroke="#002882"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M16.5081 30.7639H6.84375"
                stroke="#002882"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M23.0196 31.1499C26.6159 31.1499 29.5313 28.2345 29.5313 24.6381C29.5313 21.0417 26.6159 18.1263 23.0196 18.1263C19.4232 18.1263 16.5078 21.0417 16.5078 24.6381C16.5078 28.2345 19.4232 31.1499 23.0196 31.1499Z"
                fill="#EEA500"
                stroke="#002882"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M20.9957 23.7466C21.7151 23.7466 22.2981 23.1635 22.2981 22.4441C22.2981 21.7249 21.7151 21.1418 20.9957 21.1418C20.2764 21.1418 19.6934 21.7249 19.6934 22.4441C19.6934 23.1635 20.2764 23.7466 20.9957 23.7466Z"
                fill="#FEF6E6"
                stroke="#002882"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M25.2819 28.5425C26.0012 28.5425 26.5842 27.9594 26.5842 27.24C26.5842 26.5208 26.0012 25.9377 25.2819 25.9377C24.5627 25.9377 23.9795 26.5208 23.9795 27.24C23.9795 27.9594 24.5627 28.5425 25.2819 28.5425Z"
                fill="#FEF6E6"
                stroke="#002882"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M25.6458 21.9211L20.4297 27.8013"
                stroke="#002882"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
            <p className="text-[#1A1A1A] inline text-sm 2xl:text-base">
              Installment Offers available up to 36 months
              <Link className="text-[#002882] underline inline ml-1">
                View more details
              </Link>
            </p>
          </div>
          <div className="flex gap-4 mt-4 bg-[#CCC] h-[1px]"></div>
          <p className="text-[#333] text-md 2xl:text-lg font-semibold ">
            Cabinet Color: EU Ship
          </p>
          <div className="flex gap-2">
            {colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`px-3 py-1 rounded-md border font-medium ${
                  selectedColor === color
                    ? "border border-[#EEA500] text-[#1A1A1A]"
                    : "border border-[#CCC] text-[#666] "
                }`}
              >
                {color}
              </button>
            ))}
          </div>
          <p className="text-[#333] text-lg font-semibold ">Size: 80’</p>
          <div className="flex gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-3 py-1 rounded-md border font-medium ${
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

        {/* New Section - Delivery Details */}
       
      </div>
          <div className="flex gap-4 mt-4 bg-[#CCC] h-[1px]"></div>
          <div className="flex items-center gap-2 mt-2">
            <svg className="hidden lg:flex"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M20 2H4C2.9 2 2 2.9 2 4V19.59C2 20.48 3.08 20.93 3.71 20.3L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM13.57 11.57L12.45 14.01C12.4102 14.0973 12.3462 14.1713 12.2655 14.2232C12.1848 14.2751 12.0909 14.3027 11.995 14.3027C11.8991 14.3027 11.8052 14.2751 11.7245 14.2232C11.6438 14.1713 11.5798 14.0973 11.54 14.01L10.42 11.57L7.98 10.45C7.89271 10.4102 7.8187 10.3462 7.7668 10.2655C7.7149 10.1848 7.6873 10.0909 7.6873 9.995C7.6873 9.89907 7.7149 9.80517 7.7668 9.72449C7.8187 9.64382 7.89271 9.57977 7.98 9.54L10.42 8.42L11.54 5.98C11.5798 5.89271 11.6438 5.8187 11.7245 5.7668C11.8052 5.7149 11.8991 5.6873 11.995 5.6873C12.0909 5.6873 12.1848 5.7149 12.2655 5.7668C12.3462 5.8187 12.4102 5.89271 12.45 5.98L13.57 8.42L16.01 9.54C16.0973 9.57977 16.1713 9.64382 16.2232 9.72449C16.2751 9.80517 16.3027 9.89907 16.3027 9.995C16.3027 10.0909 16.2751 10.1848 16.2232 10.2655C16.1713 10.3462 16.0973 10.4102 16.01 10.45L13.57 11.57Z"
                fill="#1A1A1A"
              />
            </svg>
            <div className="hidden lg:flex items-center gap-7 xl:gap-10 overflow-x-auto 2xl:overflow-x-hidden">
              {sections.map((section) => (
                <button
                  key={section.id}
                  className="text-lg 2xl:text-xl"
                  onClick={() => handleScroll(section.id)}
                >
                  {section.name}
                </button>
              ))}
            </div>
          </div>
          <h2 className="text-xl 2xl:text-2xl font-semibold my-4">Customer Feedback</h2>
          <div className="flex flex-wrap lg:flex-nowrap gap-5 mt-5">
            <div className="flex items-center gap-2 bg-white border border-[#CCD1D2] rounded-lg p-6 w-full ">
              {/* Overall Rating */}
              <div className="flex items-center flex-col w-max">
                <div className="text-3xl 2xl:text-4xl font-bold">4.8</div>
                <div className="text-gray-500 text-sm">(798 Reviews)</div>
              </div>

              {/* Rating Bars */}
              <div className="mt-4">
                {ratings.map((rating) => (
                  <div key={rating.stars} className="flex items-center gap-3">
                    {/* Progress Bar */}
                    <div className="w-40 h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-2 bg-gradient-to-r from-[#FFC136] via-[#FFD168] to-[#E09B00] rounded-full"
                        style={{ width: `${rating.percentage}%` }}
                      ></div>
                    </div>

                    {/* Stars & Percentage */}
                    <div className="flex items-center gap-2">
                      {/* Stars */}
                      <div className="text-yellow-500">
                        {"★".repeat(rating.stars) +
                          "☆".repeat(5 - rating.stars)}
                      </div>
                      {/* Percentage */}
                      <div className="text-gray-600 text-sm">
                        {rating.percentage}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white border border-[#CCD1D2] rounded-lg p-6 w-full ">
              <h2 className="text-lg font-semibold mb-4">Customer Show</h2>

              {/* Scrollable Image Row */}

              <div
                className="relative w-full mt-2 md:mt-5"
                onMouseEnter={() => setShowbtn(true)}
                onMouseLeave={() => setShowbtn(false)}
              >
                {/* Left Button */}
                <button
                  onClick={() => scroll("left")}
                  className={`${
                    showBtn ? "opacity-100" : "opacity-0"
                  } absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700`}
                >
                  ◀
                </button>

                {/* Carousel */}
                <div
                  ref={carouselRef}
                  className="flex gap-3 overflow-x-scroll scrollbar-hide cursor-grab active:cursor-grabbing scroll-smooth"
                  onMouseDown={handleMouseDown}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseUp}
                  onMouseMove={handleMouseMove}
                >
                  {userRatingimages.map((src, index) => (
                    <img
                      key={index}
                      src={src}
                      alt={`Customer ${index + 1}`}
                      className="w-20 h-20 aspect-square select-none pointer-events-none object-cover rounded-lg shadow "
                    />
                  ))}
                </div>

                {/* Right Button */}
                <button
                  onClick={() => scroll("right")}
                  className={`${
                    showBtn ? "opacity-100" : "opacity-0"
                  } absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700`}
                >
                  ▶
                </button>
              </div>
              {/* Scroll Indicator */}
            </div>
          </div>
          {/* Sections */}
          <div className="mt-10 2xl:space-y-10">
            {/* Reviews Section */}

            <div id="reviews" className="flex flex-wrap gap-2">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="mb-4 w-full lg:w-[49%] p-4 bg-white border rounded-lg border-[#CCC] flex flex-col items-start gap-2 2xl:gap-4"
                >
                  <div className="flex gap-2">
                    <img
                      src={review.userImg}
                      alt={review.name}
                      className="w-12 h-12 rounded-full border"
                    />
                    <div>
                      <h3 className="font-semibold">{review.name}</h3>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="79"
                        height="11"
                        viewBox="0 0 79 11"
                        fill="none"
                      >
                        <path
                          d="M4.59673 0.914511L3.37617 3.50013L0.645336 3.91609C0.155617 3.9903 -0.0406439 4.62108 0.314496 4.98237L2.29019 6.99384L1.8229 9.83528C1.73879 10.3489 2.25655 10.7336 2.69019 10.4934L5.13318 9.15177L7.57617 10.4934C8.00981 10.7317 8.52757 10.3489 8.44345 9.83528L7.97617 6.99384L9.95186 4.98237C10.307 4.62108 10.1107 3.9903 9.62102 3.91609L6.89019 3.50013L5.66963 0.914511C5.45094 0.453631 4.81729 0.447772 4.59673 0.914511Z"
                          fill="#E59819"
                        />
                        <path
                          d="M21.5967 0.914511L20.3762 3.50013L17.6453 3.91609C17.1556 3.9903 16.9594 4.62108 17.3145 4.98237L19.2902 6.99384L18.8229 9.83528C18.7388 10.3489 19.2565 10.7336 19.6902 10.4934L22.1332 9.15177L24.5762 10.4934C25.0098 10.7317 25.5276 10.3489 25.4435 9.83528L24.9762 6.99384L26.9519 4.98237C27.307 4.62108 27.1107 3.9903 26.621 3.91609L23.8902 3.50013L22.6696 0.914511C22.4509 0.453631 21.8173 0.447772 21.5967 0.914511Z"
                          fill="#E59819"
                        />
                        <path
                          d="M38.5967 0.914511L37.3762 3.50013L34.6453 3.91609C34.1556 3.9903 33.9594 4.62108 34.3145 4.98237L36.2902 6.99384L35.8229 9.83528C35.7388 10.3489 36.2565 10.7336 36.6902 10.4934L39.1332 9.15177L41.5762 10.4934C42.0098 10.7317 42.5276 10.3489 42.4435 9.83528L41.9762 6.99384L43.9519 4.98237C44.307 4.62108 44.1107 3.9903 43.621 3.91609L40.8902 3.50013L39.6696 0.914511C39.4509 0.453631 38.8173 0.447772 38.5967 0.914511Z"
                          fill="#E59819"
                        />
                        <path
                          d="M55.5967 0.914511L54.3762 3.50013L51.6453 3.91609C51.1556 3.9903 50.9594 4.62108 51.3145 4.98237L53.2902 6.99384L52.8229 9.83528C52.7388 10.3489 53.2565 10.7336 53.6902 10.4934L56.1332 9.15177L58.5762 10.4934C59.0098 10.7317 59.5276 10.3489 59.4435 9.83528L58.9762 6.99384L60.9519 4.98237C61.307 4.62108 61.1107 3.9903 60.621 3.91609L57.8902 3.50013L56.6696 0.914511C56.4509 0.453631 55.8173 0.447772 55.5967 0.914511Z"
                          fill="#E59819"
                        />
                        <path
                          d="M72.5967 0.914511L71.3762 3.50013L68.6453 3.91609C68.1556 3.9903 67.9594 4.62108 68.3145 4.98237L70.2902 6.99384L69.8229 9.83528C69.7388 10.3489 70.2565 10.7336 70.6902 10.4934L73.1332 9.15177L75.5762 10.4934C76.0098 10.7317 76.5276 10.3489 76.4435 9.83528L75.9762 6.99384L77.9519 4.98237C78.307 4.62108 78.1107 3.9903 77.621 3.91609L74.8902 3.50013L73.6696 0.914511C73.4509 0.453631 72.8173 0.447772 72.5967 0.914511Z"
                          fill="#E59819"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-[#667479] leading-5">{review.review}</p>
                  </div>
                  <img
                    src={review.productImg}
                    alt="Product"
                    className="w-16 h-16 rounded-xl"
                  />
                </div>
              ))}
            </div>
            <ViewMoreButton />
            <div className="flex gap-4 mt-4 bg-[#CCC] h-[1px]"></div>
            {/* Specification Section */}
            <div id="specification">
              <h2 className="text-2xl font-semibold my-4">Customer Feedback</h2>
              <p>Here are the product specifications...</p>
            </div>

            {/* Description Section */}
            <div id="description" className="p-6 bg-gray-100 rounded-lg">
              <h2 className="text-2xl font-semibold">Description</h2>
              <p>This product is designed with high-quality materials...</p>
            </div>

            {/* Store Section */}
            <div id="store" className="p-6 bg-gray-100 rounded-lg">
              <h2 className="text-2xl font-semibold">Store</h2>
              <p>Find this product in our store...</p>
            </div>

            {/* More to Love Section */}
            <div id="more-to-love" className="p-6 bg-gray-100 rounded-lg">
              <h2 className="text-2xl font-semibold">More to Love</h2>
              <p>Discover more similar products...</p>
            </div>
          </div>
        </div>
        <div className="w-[32%] xl:w-[30%] 2xl:w-25 flex flex-col gap-2 flex-1">
        <div className="border rounded-lg border-[#CCC]">
          <div className="px-3 py-6">
            <div className="flex items-center justify-between gap-15">
              <span className="flex text-[#333] font-bold items-center text-sm xl:text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M2.5 17.5H4.16667M4.16667 17.5H15.8333M4.16667 17.5V7.77333M17.5 17.5H15.8333M15.8333 17.5V7.77333M4.16667 7.77333C4.13551 7.75544 4.10494 7.73654 4.075 7.71667L3.625 7.41667C3.30688 7.20448 3.0714 6.88935 2.95806 6.52414C2.84472 6.15893 2.86041 5.76585 3.0025 5.41083L3.7475 3.5475C3.87124 3.23825 4.0848 2.97318 4.36063 2.78647C4.63647 2.59976 4.96192 2.49998 5.295 2.5H14.705C15.0381 2.49998 15.3635 2.59976 15.6394 2.78647C15.9152 2.97318 16.1288 3.23825 16.2525 3.5475L16.9975 5.41083C17.1396 5.76585 17.1553 6.15893 17.0419 6.52414C16.9286 6.88935 16.6931 7.20448 16.375 7.41667L15.925 7.71667C15.8951 7.73654 15.8645 7.75544 15.8333 7.77333M4.16667 7.77333C4.43587 7.92882 4.7432 8.00591 5.05392 7.99589C5.36464 7.98588 5.66636 7.88916 5.925 7.71667L7.5 6.66667L9.075 7.71667C9.34888 7.8994 9.67075 7.99692 10 7.99692C10.3292 7.99692 10.6511 7.8994 10.925 7.71667L12.5 6.66667L14.075 7.71667C14.3336 7.88916 14.6354 7.98588 14.9461 7.99589C15.2568 8.00591 15.5641 7.92882 15.8333 7.77333"
                    stroke="#1A1A1A"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.6654 17.4998V13.3332C11.6654 12.8911 11.4898 12.4672 11.1772 12.1547C10.8646 11.8421 10.4407 11.6665 9.9987 11.6665C9.55667 11.6665 9.13275 11.8421 8.82019 12.1547C8.50763 12.4672 8.33203 12.8911 8.33203 13.3332V17.4998"
                    stroke="#1A1A1A"
                    stroke-width="1.25"
                  />
                </svg>{" "}
                Sold By
              </span>
              <p className="text-[#1A1A1A] inline text-sm xl:text-base">
                Zahir Clothing
                <Link className="text-[#002882] underline inline ml-1">
                  Visit
                </Link>
              </p>
            </div>

            <div className="flex gap-4 my-4 bg-[#CCC] h-[1px]"></div>

            <div className="flex items-center w-max gap-15">
              <span className="flex text-[#333] font-bold items-center text-sm xl:text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <g clip-path="url(#clip0_6998_126789)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10 1.66675C11.9891 1.66675 13.8968 2.45692 15.3033 3.86345C16.7098 5.26997 17.5 7.17762 17.5 9.16675C17.5 11.7284 16.1033 13.8251 14.6317 15.3292C13.8963 16.0725 13.094 16.7464 12.235 17.3426L11.88 17.5842L11.7133 17.6951L11.3992 17.8951L11.1192 18.0659L10.7725 18.2676C10.5371 18.4016 10.2709 18.472 10 18.472C9.72913 18.472 9.46291 18.4016 9.2275 18.2676L8.88083 18.0659L8.4475 17.7992L8.2875 17.6951L7.94583 17.4676C7.01915 16.8404 6.15589 16.1242 5.36833 15.3292C3.89667 13.8242 2.5 11.7284 2.5 9.16675C2.5 7.17762 3.29018 5.26997 4.6967 3.86345C6.10322 2.45692 8.01088 1.66675 10 1.66675ZM10 3.33341C8.4529 3.33341 6.96917 3.948 5.87521 5.04196C4.78125 6.13592 4.16667 7.61965 4.16667 9.16675C4.16667 11.1017 5.22667 12.8001 6.55917 14.1634C7.13218 14.7433 7.75145 15.2756 8.41083 15.7551L8.7925 16.0267C8.91583 16.1126 9.03417 16.1926 9.14833 16.2667L9.47333 16.4751L9.75917 16.6492L10 16.7901L10.3792 16.5659L10.685 16.3742C10.8475 16.2709 11.0225 16.1551 11.2075 16.0267L11.5892 15.7551C12.2485 15.2756 12.8678 14.7433 13.4408 14.1634C14.7733 12.8009 15.8333 11.1017 15.8333 9.16675C15.8333 7.61965 15.2188 6.13592 14.1248 5.04196C13.0308 3.948 11.5471 3.33341 10 3.33341ZM10 5.83342C10.8841 5.83342 11.7319 6.1846 12.357 6.80973C12.9821 7.43485 13.3333 8.28269 13.3333 9.16675C13.3333 10.0508 12.9821 10.8987 12.357 11.5238C11.7319 12.1489 10.8841 12.5001 10 12.5001C9.11594 12.5001 8.2681 12.1489 7.64298 11.5238C7.01786 10.8987 6.66667 10.0508 6.66667 9.16675C6.66667 8.28269 7.01786 7.43485 7.64298 6.80973C8.2681 6.1846 9.11594 5.83342 10 5.83342ZM10 7.50008C9.55797 7.50008 9.13405 7.67568 8.82149 7.98824C8.50893 8.3008 8.33333 8.72472 8.33333 9.16675C8.33333 9.60878 8.50893 10.0327 8.82149 10.3453C9.13405 10.6578 9.55797 10.8334 10 10.8334C10.442 10.8334 10.866 10.6578 11.1785 10.3453C11.4911 10.0327 11.6667 9.60878 11.6667 9.16675C11.6667 8.72472 11.4911 8.3008 11.1785 7.98824C10.866 7.67568 10.442 7.50008 10 7.50008Z"
                      fill="#1A1A1A"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_6998_126789">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>{" "}
                Ship to
              </span>
              <p className="text-[#1A1A1A] inline text-sm xl:text-base">
                Johar town, Lahore
                <Link className="text-[#002882] underline inline ml-1">
                  Change
                </Link>
              </p>
            </div>
          </div>

          <div className="px-3 py-2 bg-gradient-to-b from-[#FCEDCD] to-[#FFF] flex gap-2 items-center">
            <span className="bg-[linear-gradient(90deg,#0032A3_0%,#1A51CB_25%,#3B66C8_50%,#1A51CB_75%,#0032A3_100%)] rounded-sm py-1 px-2 text-[#FCFCFC] text-sm xl:text-base">
              VB MALL
            </span>
            <span className="text-[#1A1A1A] font-semibold text-sm xl:text-base">
              ValueBox Commitment
            </span>
          </div>

          <div className="px-3 py-5 flex flex-col gap-5">
            <button
              className="flex justify-between cursor-pointer"
              onClick={() => openModal("warentyReturn")}
            >
              <span className="flex gap-1 text-sm xl:text-base">
                <svg className="w-4 xl:w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  
                  viewBox="0 0 19 22"
                  fill="none"
                >
                  <path
                    d="M16.8101 7.50093V9.35578C16.8101 11.6679 16.3982 13.6732 15.5859 15.3155C14.9448 16.6115 14.0514 17.69 12.9304 18.5208C11.925 19.2661 10.9153 19.6737 10.2453 19.8843C9.66401 20.067 9.22943 20.1378 9.07116 20.1597C8.9129 20.1378 8.47831 20.067 7.89705 19.8843C7.22706 19.6737 6.21735 19.2661 5.2119 18.5208C4.09095 17.69 3.19753 16.6115 2.55646 15.3155C1.74419 13.6732 1.33225 11.6679 1.33225 9.35578V6.12359C2.43482 5.88496 3.51154 5.54922 4.54058 5.12275C5.49967 4.72519 6.41985 4.24822 7.27543 3.70516C8.08984 3.18822 8.69121 2.70939 9.07116 2.37924C9.45113 2.70939 10.0525 3.18822 10.8669 3.70516C11.5755 4.15496 12.3285 4.55944 13.1111 4.9109L13.8947 3.80016C13.1 3.45774 12.3366 3.05686 11.6222 2.60653C10.2755 1.75757 9.56011 1.01733 9.55397 1.01081L9.07396 0.5L8.58929 1.00987C8.58222 1.01733 7.8668 1.75757 6.52017 2.60653C5.73174 3.10347 4.88377 3.54022 3.99995 3.90448C2.89725 4.35919 1.73459 4.70187 0.544353 4.92317L0 5.02443V9.35579C0 11.8944 0.465494 14.1127 1.38354 15.949C2.1288 17.4394 3.16916 18.679 4.47583 19.6333C6.69909 21.2571 8.91463 21.4851 9.00788 21.4939L9.07116 21.5L9.13444 21.4939C9.2277 21.4851 11.4432 21.2571 13.6665 19.6333C14.9732 18.6789 16.0135 17.4394 16.7587 15.949C17.6768 14.1127 18.1423 11.8944 18.1423 9.35579V5.6125L16.8101 7.50093Z"
                    fill="#1A1A1A"
                  />
                  <path
                    d="M10.8691 3.70516C10.0567 3.18942 9.45626 2.71165 9.07617 2.38164V0.5L9.55618 1.01081C9.56231 1.01735 10.2777 1.75758 11.6244 2.60653C12.3389 3.05686 13.1022 3.45774 13.8969 3.80016L13.1133 4.9109C12.3307 4.55944 11.5777 4.15496 10.8691 3.70516Z"
                    fill="#333333"
                  />
                  <path
                    d="M18.1445 5.61255V9.35584C18.1445 11.8944 17.6791 14.1128 16.7609 15.9491C16.0157 17.4394 14.9754 18.679 13.6687 19.6333C11.4454 21.2572 9.22991 21.4851 9.13665 21.4939L9.07617 21.4998V20.1593C9.23671 20.1371 9.66956 20.0659 10.2475 19.8843C10.9175 19.6737 11.9272 19.2661 12.9326 18.5208C14.0536 17.69 14.947 16.6115 15.5881 15.3156C16.4004 13.6732 16.8123 11.6679 16.8123 9.35583V7.50098L18.1445 5.61255Z"
                    fill="#333333"
                  />
                  <path
                    d="M8.52223 16.4232L4.62001 13.1947C4.30034 12.9303 4.25558 12.4567 4.52004 12.137L5.39401 11.0805C5.65847 10.7608 6.13201 10.7161 6.45168 10.9806L8.58807 12.7481L15.3824 3.11683C15.6216 2.7778 16.0903 2.69685 16.4293 2.93604L17.5496 3.72645C17.8886 3.96563 17.9696 4.43437 17.7304 4.7734L9.61493 16.2774C9.36267 16.635 8.85939 16.7021 8.52223 16.4232Z"
                    fill="#1A1A1A"
                  />
                </svg>{" "}
                Warranty and Returns
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M10 8L14 12L10 16"
                  stroke="#333333"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>

            {activeModal === "warentyReturn" && (
              <div className="fixed inset-0 flex items-center justify-center bg-white/30 backdrop-blur-xs bg-opacity-50 px-5 md:p-0 z-1050">
                <div className="bg-[#FCFCFC] w-[600px] p-5 flex flex-col items-start gap-4 rounded-lg shadow-lg relative">
                  {/* Close Button */}
                  <button
                    className="absolute top-4 right-4 text-white cursor-pointer"
                    onClick={closeModal}
                  >
                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#002882] text-white">
                      ✖
                    </span>
                  </button>

                  {/* Modal Content */}
                  <h2 className="text-xl font-semibold">Modal Warenty</h2>
                  <p>Modal message</p>
                </div>
              </div>
            )}

            <button
              className="flex justify-between cursor-pointer"
              onClick={() => openModal("freeShipping")}
            >
              <span className="flex gap-1 text-sm xl:text-base">
                <svg className="w-6 xl:w-7"
                  xmlns="http://www.w3.org/2000/svg"
                  
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16 15.76V6.25C16 5.71957 15.7893 5.21086 15.4142 4.83579C15.0391 4.46071 14.5304 4.25 14 4.25H4C3.46957 4.25 2.96086 4.46071 2.58579 4.83579C2.21071 5.21086 2 5.71957 2 6.25V15.25C2 15.5152 2.10536 15.7696 2.29289 15.9571C2.48043 16.1446 2.73478 16.25 3 16.25H3.71C3.90493 15.8049 4.22534 15.4263 4.63204 15.1604C5.03874 14.8945 5.5141 14.7529 6 14.7529C6.4859 14.7529 6.96126 14.8945 7.36796 15.1604C7.77466 15.4263 8.09507 15.8049 8.29 16.25H15.71C15.783 16.074 15.88 15.909 16 15.76ZM16 15.76C16.2599 15.4075 16.6081 15.1298 17.0096 14.9548C17.4111 14.7799 17.8517 14.714 18.2868 14.7637C18.7219 14.8134 19.1362 14.9769 19.4879 15.2379C19.8396 15.4989 20.1163 15.848 20.29 16.25H22V13.36C22.0004 12.6343 21.8033 11.9223 21.43 11.3L20.2 9.25L19.29 7.74C19.2015 7.59072 19.0757 7.46705 18.9249 7.38114C18.7741 7.29522 18.6035 7.25003 18.43 7.25H16V15.76Z"
                    stroke="#1A1A1A"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11 11.25H6M11 8.25H6M8.5 17.25C8.50044 17.6219 8.41789 17.9892 8.25839 18.3252C8.09888 18.6611 7.86642 18.9573 7.57796 19.192C7.2895 19.4268 6.9523 19.5942 6.59094 19.6821C6.22957 19.77 5.85315 19.7762 5.48909 19.7002C5.12504 19.6242 4.78253 19.4679 4.48652 19.2428C4.19051 19.0176 3.94846 18.7293 3.77802 18.3987C3.60757 18.0682 3.51302 17.7038 3.50125 17.332C3.48948 16.9603 3.5608 16.5907 3.71 16.25C3.9402 15.7244 4.34422 15.2939 4.85423 15.031C5.36424 14.768 5.94919 14.6884 6.51091 14.8057C7.07262 14.923 7.57689 15.2299 7.93908 15.675C8.30127 16.1201 8.49932 16.6762 8.5 17.25ZM20.5 17.25C20.5004 17.6219 20.4179 17.9892 20.2584 18.3252C20.0989 18.6611 19.8664 18.9573 19.578 19.192C19.2895 19.4268 18.9523 19.5942 18.5909 19.6821C18.2296 19.77 17.8531 19.7762 17.4891 19.7002C17.125 19.6242 16.7825 19.4679 16.4865 19.2428C16.1905 19.0176 15.9485 18.7293 15.778 18.3987C15.6076 18.0682 15.513 17.7038 15.5013 17.332C15.4895 16.9603 15.5608 16.5907 15.71 16.25C15.783 16.074 15.88 15.909 16 15.76C16.2599 15.4075 16.6081 15.1298 17.0096 14.9548C17.4111 14.7799 17.8517 14.714 18.2868 14.7637C18.7219 14.8134 19.1362 14.9769 19.4879 15.2379C19.8396 15.4989 20.1163 15.848 20.29 16.25C20.43 16.565 20.502 16.906 20.5 17.25Z"
                    stroke="#1A1A1A"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>{" "}
                Free shipping over{" "}
                <Link className="text-[#002882] inline">PKR 2,570</Link>
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M10 8L14 12L10 16"
                  stroke="#333333"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            {activeModal === "freeShipping" && (
              <div
                className="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.4)] transform 
                transition-all duration-500 backdrop-blur-xs bg-opacity-50 px-5 md:p-0 z-1050"
                onClick={closeModal}
              >
                <div
                  className="bg-[#FCFCFC] w-[600px] p-5 flex flex-col items-start gap-4 rounded-lg shadow-lg relative"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close Button */}
                  <button
                    className="absolute -top-4 -right-4 text-white cursor-pointer"
                    onClick={closeModal}
                  >
                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#002882] text-white">
                      ✖
                    </span>
                  </button>

                  {/* Modal Content */}
                  <h2 className="text-xl font-semibold">Modal Free Shipping</h2>
                  <p>Modal message</p>
                </div>
              </div>
            )}
            <div className="flex justify-between">
              <span className="flex gap-1 text-sm xl:text-base">
                <svg className="w-5 xl:w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12Z"
                    stroke="#1A1A1A"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 7V12L15 15"
                    stroke="#1A1A1A"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>{" "}
                Standard Delivery:{" "}
                <span className="font-semibold">DEC 06 - 16</span>
              </span>
            </div>
            <div className="flex justify-between">
              <span className="flex gap-1 text-sm xl:text-base">
                <svg className="w-5 xl:w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M18.5 14.01L18.51 13.999M7.5 14.01L7.51 13.999M4 18V10C4 9.46957 4.21071 8.96086 4.58579 8.58579C4.96086 8.21071 5.46957 8 6 8H20C20.5304 8 21.0391 8.21071 21.4142 8.58579C21.7893 8.96086 22 9.46957 22 10V18C22 18.5304 21.7893 19.0391 21.4142 19.4142C21.0391 19.7893 20.5304 20 20 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18Z"
                    stroke="#1A1A1A"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4 16H3C2.46957 16 1.96086 15.7893 1.58579 15.4142C1.21071 15.0391 1 14.5304 1 14V6C1 5.46957 1.21071 4.96086 1.58579 4.58579C1.96086 4.21071 2.46957 4 3 4H17C17.5304 4 18.0391 4.21071 18.4142 4.58579C18.7893 4.96086 19 5.46957 19 6V8M13 16C12.4696 16 11.9609 15.7893 11.5858 15.4142C11.2107 15.0391 11 14.5304 11 14C11 13.4696 11.2107 12.9609 11.5858 12.5858C11.9609 12.2107 12.4696 12 13 12C13.5304 12 14.0391 12.2107 14.4142 12.5858C14.7893 12.9609 15 13.4696 15 14C15 14.5304 14.7893 15.0391 14.4142 15.4142C14.0391 15.7893 13.5304 16 13 16Z"
                    stroke="#1A1A1A"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>{" "}
                Cash on Delivery Available
              </span>
            </div>
            <div className="flex justify-between">
              <span className="flex gap-1 text-sm xl:text-base">
                <svg className="w-5 xl:w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M22.1113 6.46799L14.6113 2.34299C14.5005 2.28207 14.3762 2.25012 14.2498 2.25012C14.1234 2.25012 13.999 2.28207 13.8883 2.34299L6.38827 6.46799C6.27068 6.53274 6.17262 6.62785 6.10432 6.74342C6.03603 6.85898 6 6.99076 6 7.12499C6 7.25923 6.03603 7.39101 6.10432 7.50657C6.17262 7.62213 6.27068 7.71725 6.38827 7.78199L13.4998 11.6932V19.7325L11.2228 18.48L10.4998 19.7932L13.8883 21.657C13.999 21.7179 14.1234 21.7499 14.2498 21.7499C14.3762 21.7499 14.5005 21.7179 14.6113 21.657L22.1113 17.532C22.2289 17.4673 22.327 17.3722 22.3953 17.2566C22.4637 17.141 22.4997 17.0093 22.4998 16.875V7.12499C22.4997 6.99074 22.4637 6.85894 22.3953 6.74338C22.327 6.62781 22.2289 6.53271 22.1113 6.46799ZM14.2498 3.85649L20.1935 7.12499L14.2498 10.3935L8.30602 7.12499L14.2498 3.85649ZM20.9998 16.4317L14.9998 19.7317V11.6925L20.9998 8.39249V16.4317Z"
                    fill="#1A1A1A"
                  />
                  <path
                    d="M7.5 12H1.5V10.5H7.5V12ZM9 18H3V16.5H9V18ZM10.5 15H4.5V13.5H10.5V15Z"
                    fill="#1A1A1A"
                  />
                </svg>{" "}
                Delivery Guarantee
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M10 8L14 12L10 16"
                  stroke="#333333"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>

          <div className="px-3">
            <div className="flex gap-4 my-4 bg-[#CCC] h-[1px]"></div>
            <span className="flex text-[#333] font-bold items-center text-sm xl:text-base">
              Select Quantity
            </span>
            <div className="flex items-center space-x-2 rounded-lg w-fit mt-4">
              <button
                className="px-1 py-1 bg-[#F2F2F2] text-white rounded-full disabled:opacity-50"
                onClick={decreaseQuantity}
                disabled={quantity === 1}
              >
                <svg className="w-6 xl:w-7"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <path
                    d="M22.2 16.1998H7.80001C7.14001 16.1998 6.60001 15.6598 6.60001 14.9998C6.60001 14.3398 7.14001 13.7998 7.80001 13.7998H22.2C22.86 13.7998 23.4 14.3398 23.4 14.9998C23.4 15.6598 22.86 16.1998 22.2 16.1998Z"
                    fill="#999999"
                  />
                </svg>
              </button>
              <span className="px-2 py-1 bg-white rounded-lg text-lg xl:text-xl font-medium">
                {quantity}
              </span>
              <button
                className="px-1 py-1 bg-[#F2F2F2] text-white rounded-full"
                onClick={increaseQuantity}
              >
                <svg className="w-6 xl:w-7"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <path
                    d="M22.1981 16.1999H16.1981V22.1999C16.1981 22.8599 15.6581 23.3999 14.9981 23.3999C14.3381 23.3999 13.7981 22.8599 13.7981 22.1999V16.1999H7.79805C7.13805 16.1999 6.59805 15.6599 6.59805 14.9999C6.59805 14.3399 7.13805 13.7999 7.79805 13.7999H13.7981V7.79985C13.7981 7.13985 14.3381 6.59985 14.9981 6.59985C15.6581 6.59985 16.1981 7.13985 16.1981 7.79985V13.7999H22.1981C22.8581 13.7999 23.3981 14.3399 23.3981 14.9999C23.3981 15.6599 22.8581 16.1999 22.1981 16.1999Z"
                    fill="#999999"
                  />
                </svg>
              </button>
            </div>

            <button className="bg-[#002882] w-full flex items-center justify-center text-sm xl:text-base gap-2 p-2 rounded-[5px] mt-4 text-[#FCFCFC] ">
              <svg className="w-5 xl:w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M15.7778 10.5V6C15.7778 5.00544 15.3827 4.05161 14.6794 3.34835C13.9762 2.64509 13.0223 2.25 12.0278 2.25C11.0332 2.25 10.0794 2.64509 9.37612 3.34835C8.67286 4.05161 8.27777 5.00544 8.27777 6V10.5M19.6338 8.507L20.8968 20.507C20.9668 21.172 20.4468 21.75 19.7778 21.75H4.27777C4.11998 21.7502 3.96392 21.7171 3.81972 21.6531C3.67552 21.589 3.54642 21.4953 3.44079 21.3781C3.33517 21.2608 3.25539 21.1227 3.20663 20.9726C3.15787 20.8226 3.14122 20.6639 3.15777 20.507L4.42177 8.507C4.45093 8.23056 4.5814 7.9747 4.78802 7.78876C4.99465 7.60281 5.2628 7.49995 5.54077 7.5H18.5148C19.0908 7.5 19.5738 7.935 19.6338 8.507ZM8.65277 10.5C8.65277 10.5995 8.61326 10.6948 8.54294 10.7652C8.47261 10.8355 8.37723 10.875 8.27777 10.875C8.17831 10.875 8.08293 10.8355 8.01261 10.7652C7.94228 10.6948 7.90277 10.5995 7.90277 10.5C7.90277 10.4005 7.94228 10.3052 8.01261 10.2348C8.08293 10.1645 8.17831 10.125 8.27777 10.125C8.37723 10.125 8.47261 10.1645 8.54294 10.2348C8.61326 10.3052 8.65277 10.4005 8.65277 10.5ZM16.1528 10.5C16.1528 10.5995 16.1133 10.6948 16.0429 10.7652C15.9726 10.8355 15.8772 10.875 15.7778 10.875C15.6783 10.875 15.5829 10.8355 15.5126 10.7652C15.4423 10.6948 15.4028 10.5995 15.4028 10.5C15.4028 10.4005 15.4423 10.3052 15.5126 10.2348C15.5829 10.1645 15.6783 10.125 15.7778 10.125C15.8772 10.125 15.9726 10.1645 16.0429 10.2348C16.1133 10.3052 16.1528 10.4005 16.1528 10.5Z"
                  stroke="#FCFCFC"
                  stroke-width="1.79167"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>{" "}
              Buy Now
            </button>
            <button className="border border-[#002882] w-full flex items-center justify-center text-sm xl:text-base font-medium gap-2 p-2 rounded-[5px] mt-4 text-[#002882] ">
              <svg className="w-5 xl:w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M11.0278 9H13.0278V6H16.0278V4H13.0278V1H11.0278V4H8.02777V6H11.0278V9ZM7.02777 18C5.92777 18 5.03777 18.9 5.03777 20C5.03777 21.1 5.92777 22 7.02777 22C8.12777 22 9.02777 21.1 9.02777 20C9.02777 18.9 8.12777 18 7.02777 18ZM17.0278 18C15.9278 18 15.0378 18.9 15.0378 20C15.0378 21.1 15.9278 22 17.0278 22C18.1278 22 19.0278 21.1 19.0278 20C19.0278 18.9 18.1278 18 17.0278 18ZM8.12777 13H15.5778C16.3278 13 16.9878 12.59 17.3278 11.97L21.1878 4.96L19.4378 4L15.5778 11H8.55777L4.29777 2H1.02777V4H3.02777L6.62777 11.59L5.27777 14.03C4.54777 15.37 5.50777 17 7.02777 17H19.0278V15H7.02777L8.12777 13Z"
                  fill="#002882"
                />
              </svg>{" "}
              Add To Cart
            </button>
            <div className="flex space-x-4 mt-4 mb-6">
              <button className="flex gap-2 justify-center px-4 py-2 w-full text-sm xl:text-base rounded-md bg-[#F2F2F2] text-[#666]">
                <svg className="w-5 xl:w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M7.21665 10.907C6.97452 10.4713 6.59456 10.1284 6.13643 9.93202C5.67829 9.73564 5.16791 9.69695 4.68541 9.82202C4.2029 9.94709 3.77559 10.2288 3.47054 10.623C3.16549 11.0172 2.99997 11.5016 2.99997 12C2.99997 12.4985 3.16549 12.9828 3.47054 13.377C3.77559 13.7712 4.2029 14.053 4.68541 14.1781C5.16791 14.3031 5.67829 14.2644 6.13643 14.0681C6.59456 13.8717 6.97452 13.5287 7.21665 13.093M7.21665 10.907C7.39665 11.231 7.49965 11.603 7.49965 12C7.49965 12.397 7.39665 12.77 7.21665 13.093M7.21665 10.907L16.7827 5.59304M7.21665 13.093L16.7827 18.407M16.7827 5.59304C16.9229 5.85718 17.1144 6.0907 17.346 6.27997C17.5775 6.46923 17.8445 6.61043 18.1313 6.69531C18.418 6.7802 18.7188 6.80706 19.0161 6.77433C19.3134 6.7416 19.6011 6.64994 19.8626 6.5047C20.124 6.35946 20.3539 6.16356 20.5387 5.92845C20.7235 5.69334 20.8596 5.42375 20.9391 5.13542C21.0185 4.8471 21.0397 4.54583 21.0013 4.24923C20.9629 3.95264 20.8658 3.66667 20.7157 3.40804C20.4197 2.89838 19.9356 2.52518 19.3675 2.36865C18.7993 2.21213 18.1924 2.28478 17.6772 2.57099C17.162 2.8572 16.7797 3.33412 16.6124 3.89923C16.4451 4.46434 16.5063 5.07252 16.7827 5.59304ZM16.7827 18.407C16.6391 18.6654 16.5479 18.9495 16.5141 19.2432C16.4804 19.5368 16.5048 19.8342 16.5861 20.1184C16.6673 20.4026 16.8036 20.668 16.9874 20.8995C17.1712 21.131 17.3988 21.324 17.6572 21.4675C17.9155 21.6111 18.1996 21.7023 18.4933 21.736C18.7869 21.7698 19.0843 21.7453 19.3685 21.6641C19.6527 21.5829 19.9181 21.4465 20.1496 21.2628C20.3811 21.079 20.5741 20.8514 20.7177 20.593C21.0075 20.0712 21.0783 19.4556 20.9143 18.8817C20.7503 18.3077 20.365 17.8224 19.8432 17.5325C19.3213 17.2427 18.7057 17.1719 18.1318 17.3359C17.5578 17.4999 17.0725 17.8852 16.7827 18.407Z"
                    stroke="#666666"
                    stroke-width="1.79167"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>{" "}
                Share
              </button>
              <button className="flex gap-2 justify-center px-4 py-2 w-full text-sm xl:text-base rounded-md bg-[#F2F2F2] text-[#666]">
                <svg className="w-5 xl:w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16.544 3.74988C13.5009 3.74988 12.0009 6.74988 12.0009 6.74988C12.0009 6.74988 10.5009 3.74988 7.45775 3.74988C4.98463 3.74988 3.02619 5.81894 3.00088 8.28785C2.94931 13.4127 7.06635 17.0572 11.579 20.12C11.7034 20.2047 11.8504 20.2499 12.0009 20.2499C12.1513 20.2499 12.2983 20.2047 12.4228 20.12C16.9349 17.0572 21.052 13.4127 21.0009 8.28785C20.9756 5.81894 19.0171 3.74988 16.544 3.74988Z"
                    stroke="#666666"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>{" "}
                396
              </button>
            </div>
          </div>
        </div>
        <div className="flex gap-4 my-4 bg-[#CCC] h-[1px]"></div>
        
        <div className="border rounded-lg border-[#CCC] mt-6 md:mt-0 sticky top-[8%]">
        <div className="px-3 py-6">
            <div className="flex items-center justify-between gap-15">
              <span className="flex text-[#333] font-bold items-center text-sm xl:text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M2.5 17.5H4.16667M4.16667 17.5H15.8333M4.16667 17.5V7.77333M17.5 17.5H15.8333M15.8333 17.5V7.77333M4.16667 7.77333C4.13551 7.75544 4.10494 7.73654 4.075 7.71667L3.625 7.41667C3.30688 7.20448 3.0714 6.88935 2.95806 6.52414C2.84472 6.15893 2.86041 5.76585 3.0025 5.41083L3.7475 3.5475C3.87124 3.23825 4.0848 2.97318 4.36063 2.78647C4.63647 2.59976 4.96192 2.49998 5.295 2.5H14.705C15.0381 2.49998 15.3635 2.59976 15.6394 2.78647C15.9152 2.97318 16.1288 3.23825 16.2525 3.5475L16.9975 5.41083C17.1396 5.76585 17.1553 6.15893 17.0419 6.52414C16.9286 6.88935 16.6931 7.20448 16.375 7.41667L15.925 7.71667C15.8951 7.73654 15.8645 7.75544 15.8333 7.77333M4.16667 7.77333C4.43587 7.92882 4.7432 8.00591 5.05392 7.99589C5.36464 7.98588 5.66636 7.88916 5.925 7.71667L7.5 6.66667L9.075 7.71667C9.34888 7.8994 9.67075 7.99692 10 7.99692C10.3292 7.99692 10.6511 7.8994 10.925 7.71667L12.5 6.66667L14.075 7.71667C14.3336 7.88916 14.6354 7.98588 14.9461 7.99589C15.2568 8.00591 15.5641 7.92882 15.8333 7.77333"
                    stroke="#1A1A1A"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.6654 17.4998V13.3332C11.6654 12.8911 11.4898 12.4672 11.1772 12.1547C10.8646 11.8421 10.4407 11.6665 9.9987 11.6665C9.55667 11.6665 9.13275 11.8421 8.82019 12.1547C8.50763 12.4672 8.33203 12.8911 8.33203 13.3332V17.4998"
                    stroke="#1A1A1A"
                    stroke-width="1.25"
                  />
                </svg>{" "}
                Sold By
              </span>
              <p className="text-[#1A1A1A] inline text-sm xl:text-base">
                Zahir Clothing
                <Link className="text-[#002882] underline inline ml-1">
                  Visit
                </Link>
              </p>
            </div>

            <div className="flex gap-4 my-4 bg-[#CCC] h-[1px]"></div>

            <div className="flex items-center w-max gap-15">
              <span className="flex text-[#333] font-bold items-center text-sm xl:text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <g clip-path="url(#clip0_6998_126789)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10 1.66675C11.9891 1.66675 13.8968 2.45692 15.3033 3.86345C16.7098 5.26997 17.5 7.17762 17.5 9.16675C17.5 11.7284 16.1033 13.8251 14.6317 15.3292C13.8963 16.0725 13.094 16.7464 12.235 17.3426L11.88 17.5842L11.7133 17.6951L11.3992 17.8951L11.1192 18.0659L10.7725 18.2676C10.5371 18.4016 10.2709 18.472 10 18.472C9.72913 18.472 9.46291 18.4016 9.2275 18.2676L8.88083 18.0659L8.4475 17.7992L8.2875 17.6951L7.94583 17.4676C7.01915 16.8404 6.15589 16.1242 5.36833 15.3292C3.89667 13.8242 2.5 11.7284 2.5 9.16675C2.5 7.17762 3.29018 5.26997 4.6967 3.86345C6.10322 2.45692 8.01088 1.66675 10 1.66675ZM10 3.33341C8.4529 3.33341 6.96917 3.948 5.87521 5.04196C4.78125 6.13592 4.16667 7.61965 4.16667 9.16675C4.16667 11.1017 5.22667 12.8001 6.55917 14.1634C7.13218 14.7433 7.75145 15.2756 8.41083 15.7551L8.7925 16.0267C8.91583 16.1126 9.03417 16.1926 9.14833 16.2667L9.47333 16.4751L9.75917 16.6492L10 16.7901L10.3792 16.5659L10.685 16.3742C10.8475 16.2709 11.0225 16.1551 11.2075 16.0267L11.5892 15.7551C12.2485 15.2756 12.8678 14.7433 13.4408 14.1634C14.7733 12.8009 15.8333 11.1017 15.8333 9.16675C15.8333 7.61965 15.2188 6.13592 14.1248 5.04196C13.0308 3.948 11.5471 3.33341 10 3.33341ZM10 5.83342C10.8841 5.83342 11.7319 6.1846 12.357 6.80973C12.9821 7.43485 13.3333 8.28269 13.3333 9.16675C13.3333 10.0508 12.9821 10.8987 12.357 11.5238C11.7319 12.1489 10.8841 12.5001 10 12.5001C9.11594 12.5001 8.2681 12.1489 7.64298 11.5238C7.01786 10.8987 6.66667 10.0508 6.66667 9.16675C6.66667 8.28269 7.01786 7.43485 7.64298 6.80973C8.2681 6.1846 9.11594 5.83342 10 5.83342ZM10 7.50008C9.55797 7.50008 9.13405 7.67568 8.82149 7.98824C8.50893 8.3008 8.33333 8.72472 8.33333 9.16675C8.33333 9.60878 8.50893 10.0327 8.82149 10.3453C9.13405 10.6578 9.55797 10.8334 10 10.8334C10.442 10.8334 10.866 10.6578 11.1785 10.3453C11.4911 10.0327 11.6667 9.60878 11.6667 9.16675C11.6667 8.72472 11.4911 8.3008 11.1785 7.98824C10.866 7.67568 10.442 7.50008 10 7.50008Z"
                      fill="#1A1A1A"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_6998_126789">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>{" "}
                Ship to
              </span>
              <p className="text-[#1A1A1A] inline text-sm xl:text-base">
                Johar town, Lahore
                <Link className="text-[#002882] underline inline ml-1">
                  Change
                </Link>
              </p>
            </div>
          </div>

          <div className="px-3 py-2 bg-gradient-to-b from-[#FCEDCD] to-[#FFF] flex gap-2 items-center">
            <span className="bg-[linear-gradient(90deg,#0032A3_0%,#1A51CB_25%,#3B66C8_50%,#1A51CB_75%,#0032A3_100%)] rounded-sm py-1 px-2 text-[#FCFCFC] text-sm xl:text-base">
              VB MALL
            </span>
            <span className="text-[#1A1A1A] font-semibold text-sm xl:text-base">
              ValueBox Commitment
            </span>
          </div>

          <div className="px-3 py-5 flex flex-col gap-5">
            <button
              className="flex justify-between cursor-pointer"
              onClick={() => openModal("warentyReturn")}
            >
              <span className="flex gap-1 text-sm xl:text-base">
                <svg className="w-4 xl:w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  
                  viewBox="0 0 19 22"
                  fill="none"
                >
                  <path
                    d="M16.8101 7.50093V9.35578C16.8101 11.6679 16.3982 13.6732 15.5859 15.3155C14.9448 16.6115 14.0514 17.69 12.9304 18.5208C11.925 19.2661 10.9153 19.6737 10.2453 19.8843C9.66401 20.067 9.22943 20.1378 9.07116 20.1597C8.9129 20.1378 8.47831 20.067 7.89705 19.8843C7.22706 19.6737 6.21735 19.2661 5.2119 18.5208C4.09095 17.69 3.19753 16.6115 2.55646 15.3155C1.74419 13.6732 1.33225 11.6679 1.33225 9.35578V6.12359C2.43482 5.88496 3.51154 5.54922 4.54058 5.12275C5.49967 4.72519 6.41985 4.24822 7.27543 3.70516C8.08984 3.18822 8.69121 2.70939 9.07116 2.37924C9.45113 2.70939 10.0525 3.18822 10.8669 3.70516C11.5755 4.15496 12.3285 4.55944 13.1111 4.9109L13.8947 3.80016C13.1 3.45774 12.3366 3.05686 11.6222 2.60653C10.2755 1.75757 9.56011 1.01733 9.55397 1.01081L9.07396 0.5L8.58929 1.00987C8.58222 1.01733 7.8668 1.75757 6.52017 2.60653C5.73174 3.10347 4.88377 3.54022 3.99995 3.90448C2.89725 4.35919 1.73459 4.70187 0.544353 4.92317L0 5.02443V9.35579C0 11.8944 0.465494 14.1127 1.38354 15.949C2.1288 17.4394 3.16916 18.679 4.47583 19.6333C6.69909 21.2571 8.91463 21.4851 9.00788 21.4939L9.07116 21.5L9.13444 21.4939C9.2277 21.4851 11.4432 21.2571 13.6665 19.6333C14.9732 18.6789 16.0135 17.4394 16.7587 15.949C17.6768 14.1127 18.1423 11.8944 18.1423 9.35579V5.6125L16.8101 7.50093Z"
                    fill="#1A1A1A"
                  />
                  <path
                    d="M10.8691 3.70516C10.0567 3.18942 9.45626 2.71165 9.07617 2.38164V0.5L9.55618 1.01081C9.56231 1.01735 10.2777 1.75758 11.6244 2.60653C12.3389 3.05686 13.1022 3.45774 13.8969 3.80016L13.1133 4.9109C12.3307 4.55944 11.5777 4.15496 10.8691 3.70516Z"
                    fill="#333333"
                  />
                  <path
                    d="M18.1445 5.61255V9.35584C18.1445 11.8944 17.6791 14.1128 16.7609 15.9491C16.0157 17.4394 14.9754 18.679 13.6687 19.6333C11.4454 21.2572 9.22991 21.4851 9.13665 21.4939L9.07617 21.4998V20.1593C9.23671 20.1371 9.66956 20.0659 10.2475 19.8843C10.9175 19.6737 11.9272 19.2661 12.9326 18.5208C14.0536 17.69 14.947 16.6115 15.5881 15.3156C16.4004 13.6732 16.8123 11.6679 16.8123 9.35583V7.50098L18.1445 5.61255Z"
                    fill="#333333"
                  />
                  <path
                    d="M8.52223 16.4232L4.62001 13.1947C4.30034 12.9303 4.25558 12.4567 4.52004 12.137L5.39401 11.0805C5.65847 10.7608 6.13201 10.7161 6.45168 10.9806L8.58807 12.7481L15.3824 3.11683C15.6216 2.7778 16.0903 2.69685 16.4293 2.93604L17.5496 3.72645C17.8886 3.96563 17.9696 4.43437 17.7304 4.7734L9.61493 16.2774C9.36267 16.635 8.85939 16.7021 8.52223 16.4232Z"
                    fill="#1A1A1A"
                  />
                </svg>{" "}
                Warranty and Returns
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M10 8L14 12L10 16"
                  stroke="#333333"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>

            {activeModal === "warentyReturn" && (
              <div className="fixed inset-0 flex items-center justify-center bg-white/30 backdrop-blur-xs bg-opacity-50 px-5 md:p-0 z-1050">
                <div className="bg-[#FCFCFC] w-[600px] p-5 flex flex-col items-start gap-4 rounded-lg shadow-lg relative">
                  {/* Close Button */}
                  <button
                    className="absolute top-4 right-4 text-white cursor-pointer"
                    onClick={closeModal}
                  >
                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#002882] text-white">
                      ✖
                    </span>
                  </button>

                  {/* Modal Content */}
                  <h2 className="text-xl font-semibold">Modal Warenty</h2>
                  <p>Modal message</p>
                </div>
              </div>
            )}

            <button
              className="flex justify-between cursor-pointer"
              onClick={() => openModal("freeShipping")}
            >
              <span className="flex gap-1 text-sm xl:text-base">
                <svg className="w-6 xl:w-7"
                  xmlns="http://www.w3.org/2000/svg"
                  
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16 15.76V6.25C16 5.71957 15.7893 5.21086 15.4142 4.83579C15.0391 4.46071 14.5304 4.25 14 4.25H4C3.46957 4.25 2.96086 4.46071 2.58579 4.83579C2.21071 5.21086 2 5.71957 2 6.25V15.25C2 15.5152 2.10536 15.7696 2.29289 15.9571C2.48043 16.1446 2.73478 16.25 3 16.25H3.71C3.90493 15.8049 4.22534 15.4263 4.63204 15.1604C5.03874 14.8945 5.5141 14.7529 6 14.7529C6.4859 14.7529 6.96126 14.8945 7.36796 15.1604C7.77466 15.4263 8.09507 15.8049 8.29 16.25H15.71C15.783 16.074 15.88 15.909 16 15.76ZM16 15.76C16.2599 15.4075 16.6081 15.1298 17.0096 14.9548C17.4111 14.7799 17.8517 14.714 18.2868 14.7637C18.7219 14.8134 19.1362 14.9769 19.4879 15.2379C19.8396 15.4989 20.1163 15.848 20.29 16.25H22V13.36C22.0004 12.6343 21.8033 11.9223 21.43 11.3L20.2 9.25L19.29 7.74C19.2015 7.59072 19.0757 7.46705 18.9249 7.38114C18.7741 7.29522 18.6035 7.25003 18.43 7.25H16V15.76Z"
                    stroke="#1A1A1A"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11 11.25H6M11 8.25H6M8.5 17.25C8.50044 17.6219 8.41789 17.9892 8.25839 18.3252C8.09888 18.6611 7.86642 18.9573 7.57796 19.192C7.2895 19.4268 6.9523 19.5942 6.59094 19.6821C6.22957 19.77 5.85315 19.7762 5.48909 19.7002C5.12504 19.6242 4.78253 19.4679 4.48652 19.2428C4.19051 19.0176 3.94846 18.7293 3.77802 18.3987C3.60757 18.0682 3.51302 17.7038 3.50125 17.332C3.48948 16.9603 3.5608 16.5907 3.71 16.25C3.9402 15.7244 4.34422 15.2939 4.85423 15.031C5.36424 14.768 5.94919 14.6884 6.51091 14.8057C7.07262 14.923 7.57689 15.2299 7.93908 15.675C8.30127 16.1201 8.49932 16.6762 8.5 17.25ZM20.5 17.25C20.5004 17.6219 20.4179 17.9892 20.2584 18.3252C20.0989 18.6611 19.8664 18.9573 19.578 19.192C19.2895 19.4268 18.9523 19.5942 18.5909 19.6821C18.2296 19.77 17.8531 19.7762 17.4891 19.7002C17.125 19.6242 16.7825 19.4679 16.4865 19.2428C16.1905 19.0176 15.9485 18.7293 15.778 18.3987C15.6076 18.0682 15.513 17.7038 15.5013 17.332C15.4895 16.9603 15.5608 16.5907 15.71 16.25C15.783 16.074 15.88 15.909 16 15.76C16.2599 15.4075 16.6081 15.1298 17.0096 14.9548C17.4111 14.7799 17.8517 14.714 18.2868 14.7637C18.7219 14.8134 19.1362 14.9769 19.4879 15.2379C19.8396 15.4989 20.1163 15.848 20.29 16.25C20.43 16.565 20.502 16.906 20.5 17.25Z"
                    stroke="#1A1A1A"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>{" "}
                Free shipping over{" "}
                <Link className="text-[#002882] inline">PKR 2,570</Link>
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M10 8L14 12L10 16"
                  stroke="#333333"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            {activeModal === "freeShipping" && (
              <div
                className="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.4)] transform 
                transition-all duration-500 backdrop-blur-xs bg-opacity-50 px-5 md:p-0 z-1050"
                onClick={closeModal}
              >
                <div
                  className="bg-[#FCFCFC] w-[600px] p-5 flex flex-col items-start gap-4 rounded-lg shadow-lg relative"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close Button */}
                  <button
                    className="absolute -top-4 -right-4 text-white cursor-pointer"
                    onClick={closeModal}
                  >
                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#002882] text-white">
                      ✖
                    </span>
                  </button>

                  {/* Modal Content */}
                  <h2 className="text-xl font-semibold">Modal Free Shipping</h2>
                  <p>Modal message</p>
                </div>
              </div>
            )}
            <div className="flex justify-between">
              <span className="flex gap-1 text-sm xl:text-base">
                <svg className="w-5 xl:w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12Z"
                    stroke="#1A1A1A"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 7V12L15 15"
                    stroke="#1A1A1A"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>{" "}
                Standard Delivery:{" "}
                <span className="font-semibold">DEC 06 - 16</span>
              </span>
            </div>
            <div className="flex justify-between">
              <span className="flex gap-1 text-sm xl:text-base">
                <svg className="w-5 xl:w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M18.5 14.01L18.51 13.999M7.5 14.01L7.51 13.999M4 18V10C4 9.46957 4.21071 8.96086 4.58579 8.58579C4.96086 8.21071 5.46957 8 6 8H20C20.5304 8 21.0391 8.21071 21.4142 8.58579C21.7893 8.96086 22 9.46957 22 10V18C22 18.5304 21.7893 19.0391 21.4142 19.4142C21.0391 19.7893 20.5304 20 20 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18Z"
                    stroke="#1A1A1A"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4 16H3C2.46957 16 1.96086 15.7893 1.58579 15.4142C1.21071 15.0391 1 14.5304 1 14V6C1 5.46957 1.21071 4.96086 1.58579 4.58579C1.96086 4.21071 2.46957 4 3 4H17C17.5304 4 18.0391 4.21071 18.4142 4.58579C18.7893 4.96086 19 5.46957 19 6V8M13 16C12.4696 16 11.9609 15.7893 11.5858 15.4142C11.2107 15.0391 11 14.5304 11 14C11 13.4696 11.2107 12.9609 11.5858 12.5858C11.9609 12.2107 12.4696 12 13 12C13.5304 12 14.0391 12.2107 14.4142 12.5858C14.7893 12.9609 15 13.4696 15 14C15 14.5304 14.7893 15.0391 14.4142 15.4142C14.0391 15.7893 13.5304 16 13 16Z"
                    stroke="#1A1A1A"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>{" "}
                Cash on Delivery Available
              </span>
            </div>
            <div className="flex justify-between">
              <span className="flex gap-1 text-sm xl:text-base">
                <svg className="w-5 xl:w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M22.1113 6.46799L14.6113 2.34299C14.5005 2.28207 14.3762 2.25012 14.2498 2.25012C14.1234 2.25012 13.999 2.28207 13.8883 2.34299L6.38827 6.46799C6.27068 6.53274 6.17262 6.62785 6.10432 6.74342C6.03603 6.85898 6 6.99076 6 7.12499C6 7.25923 6.03603 7.39101 6.10432 7.50657C6.17262 7.62213 6.27068 7.71725 6.38827 7.78199L13.4998 11.6932V19.7325L11.2228 18.48L10.4998 19.7932L13.8883 21.657C13.999 21.7179 14.1234 21.7499 14.2498 21.7499C14.3762 21.7499 14.5005 21.7179 14.6113 21.657L22.1113 17.532C22.2289 17.4673 22.327 17.3722 22.3953 17.2566C22.4637 17.141 22.4997 17.0093 22.4998 16.875V7.12499C22.4997 6.99074 22.4637 6.85894 22.3953 6.74338C22.327 6.62781 22.2289 6.53271 22.1113 6.46799ZM14.2498 3.85649L20.1935 7.12499L14.2498 10.3935L8.30602 7.12499L14.2498 3.85649ZM20.9998 16.4317L14.9998 19.7317V11.6925L20.9998 8.39249V16.4317Z"
                    fill="#1A1A1A"
                  />
                  <path
                    d="M7.5 12H1.5V10.5H7.5V12ZM9 18H3V16.5H9V18ZM10.5 15H4.5V13.5H10.5V15Z"
                    fill="#1A1A1A"
                  />
                </svg>{" "}
                Delivery Guarantee
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M10 8L14 12L10 16"
                  stroke="#333333"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>

          <div className="px-3">
            <div className="flex gap-4 my-4 bg-[#CCC] h-[1px]"></div>
            <span className="flex text-[#333] font-bold items-center text-sm xl:text-base">
              Select Quantity
            </span>
            <div className="flex items-center space-x-2 rounded-lg w-fit mt-4">
              <button
                className="px-1 py-1 bg-[#F2F2F2] text-white rounded-full disabled:opacity-50"
                onClick={decreaseQuantity}
                disabled={quantity === 1}
              >
                <svg className="w-6 xl:w-7"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <path
                    d="M22.2 16.1998H7.80001C7.14001 16.1998 6.60001 15.6598 6.60001 14.9998C6.60001 14.3398 7.14001 13.7998 7.80001 13.7998H22.2C22.86 13.7998 23.4 14.3398 23.4 14.9998C23.4 15.6598 22.86 16.1998 22.2 16.1998Z"
                    fill="#999999"
                  />
                </svg>
              </button>
              <span className="px-2 py-1 bg-white rounded-lg text-lg xl:text-xl font-medium">
                {quantity}
              </span>
              <button
                className="px-1 py-1 bg-[#F2F2F2] text-white rounded-full"
                onClick={increaseQuantity}
              >
                <svg className="w-6 xl:w-7"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <path
                    d="M22.1981 16.1999H16.1981V22.1999C16.1981 22.8599 15.6581 23.3999 14.9981 23.3999C14.3381 23.3999 13.7981 22.8599 13.7981 22.1999V16.1999H7.79805C7.13805 16.1999 6.59805 15.6599 6.59805 14.9999C6.59805 14.3399 7.13805 13.7999 7.79805 13.7999H13.7981V7.79985C13.7981 7.13985 14.3381 6.59985 14.9981 6.59985C15.6581 6.59985 16.1981 7.13985 16.1981 7.79985V13.7999H22.1981C22.8581 13.7999 23.3981 14.3399 23.3981 14.9999C23.3981 15.6599 22.8581 16.1999 22.1981 16.1999Z"
                    fill="#999999"
                  />
                </svg>
              </button>
            </div>

            <button className="bg-[#002882] w-full flex items-center justify-center text-sm xl:text-base gap-2 p-2 rounded-[5px] mt-4 text-[#FCFCFC] ">
              <svg className="w-5 xl:w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M15.7778 10.5V6C15.7778 5.00544 15.3827 4.05161 14.6794 3.34835C13.9762 2.64509 13.0223 2.25 12.0278 2.25C11.0332 2.25 10.0794 2.64509 9.37612 3.34835C8.67286 4.05161 8.27777 5.00544 8.27777 6V10.5M19.6338 8.507L20.8968 20.507C20.9668 21.172 20.4468 21.75 19.7778 21.75H4.27777C4.11998 21.7502 3.96392 21.7171 3.81972 21.6531C3.67552 21.589 3.54642 21.4953 3.44079 21.3781C3.33517 21.2608 3.25539 21.1227 3.20663 20.9726C3.15787 20.8226 3.14122 20.6639 3.15777 20.507L4.42177 8.507C4.45093 8.23056 4.5814 7.9747 4.78802 7.78876C4.99465 7.60281 5.2628 7.49995 5.54077 7.5H18.5148C19.0908 7.5 19.5738 7.935 19.6338 8.507ZM8.65277 10.5C8.65277 10.5995 8.61326 10.6948 8.54294 10.7652C8.47261 10.8355 8.37723 10.875 8.27777 10.875C8.17831 10.875 8.08293 10.8355 8.01261 10.7652C7.94228 10.6948 7.90277 10.5995 7.90277 10.5C7.90277 10.4005 7.94228 10.3052 8.01261 10.2348C8.08293 10.1645 8.17831 10.125 8.27777 10.125C8.37723 10.125 8.47261 10.1645 8.54294 10.2348C8.61326 10.3052 8.65277 10.4005 8.65277 10.5ZM16.1528 10.5C16.1528 10.5995 16.1133 10.6948 16.0429 10.7652C15.9726 10.8355 15.8772 10.875 15.7778 10.875C15.6783 10.875 15.5829 10.8355 15.5126 10.7652C15.4423 10.6948 15.4028 10.5995 15.4028 10.5C15.4028 10.4005 15.4423 10.3052 15.5126 10.2348C15.5829 10.1645 15.6783 10.125 15.7778 10.125C15.8772 10.125 15.9726 10.1645 16.0429 10.2348C16.1133 10.3052 16.1528 10.4005 16.1528 10.5Z"
                  stroke="#FCFCFC"
                  stroke-width="1.79167"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>{" "}
              Buy Now
            </button>
            <button className="border border-[#002882] w-full flex items-center justify-center text-sm xl:text-base font-medium gap-2 p-2 rounded-[5px] mt-4 text-[#002882] ">
              <svg className="w-5 xl:w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M11.0278 9H13.0278V6H16.0278V4H13.0278V1H11.0278V4H8.02777V6H11.0278V9ZM7.02777 18C5.92777 18 5.03777 18.9 5.03777 20C5.03777 21.1 5.92777 22 7.02777 22C8.12777 22 9.02777 21.1 9.02777 20C9.02777 18.9 8.12777 18 7.02777 18ZM17.0278 18C15.9278 18 15.0378 18.9 15.0378 20C15.0378 21.1 15.9278 22 17.0278 22C18.1278 22 19.0278 21.1 19.0278 20C19.0278 18.9 18.1278 18 17.0278 18ZM8.12777 13H15.5778C16.3278 13 16.9878 12.59 17.3278 11.97L21.1878 4.96L19.4378 4L15.5778 11H8.55777L4.29777 2H1.02777V4H3.02777L6.62777 11.59L5.27777 14.03C4.54777 15.37 5.50777 17 7.02777 17H19.0278V15H7.02777L8.12777 13Z"
                  fill="#002882"
                />
              </svg>{" "}
              Add To Cart
            </button>
            <div className="flex space-x-4 mt-4 mb-6">
              <button className="flex gap-2 justify-center px-4 py-2 w-full text-sm xl:text-base rounded-md bg-[#F2F2F2] text-[#666]">
                <svg className="w-5 xl:w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M7.21665 10.907C6.97452 10.4713 6.59456 10.1284 6.13643 9.93202C5.67829 9.73564 5.16791 9.69695 4.68541 9.82202C4.2029 9.94709 3.77559 10.2288 3.47054 10.623C3.16549 11.0172 2.99997 11.5016 2.99997 12C2.99997 12.4985 3.16549 12.9828 3.47054 13.377C3.77559 13.7712 4.2029 14.053 4.68541 14.1781C5.16791 14.3031 5.67829 14.2644 6.13643 14.0681C6.59456 13.8717 6.97452 13.5287 7.21665 13.093M7.21665 10.907C7.39665 11.231 7.49965 11.603 7.49965 12C7.49965 12.397 7.39665 12.77 7.21665 13.093M7.21665 10.907L16.7827 5.59304M7.21665 13.093L16.7827 18.407M16.7827 5.59304C16.9229 5.85718 17.1144 6.0907 17.346 6.27997C17.5775 6.46923 17.8445 6.61043 18.1313 6.69531C18.418 6.7802 18.7188 6.80706 19.0161 6.77433C19.3134 6.7416 19.6011 6.64994 19.8626 6.5047C20.124 6.35946 20.3539 6.16356 20.5387 5.92845C20.7235 5.69334 20.8596 5.42375 20.9391 5.13542C21.0185 4.8471 21.0397 4.54583 21.0013 4.24923C20.9629 3.95264 20.8658 3.66667 20.7157 3.40804C20.4197 2.89838 19.9356 2.52518 19.3675 2.36865C18.7993 2.21213 18.1924 2.28478 17.6772 2.57099C17.162 2.8572 16.7797 3.33412 16.6124 3.89923C16.4451 4.46434 16.5063 5.07252 16.7827 5.59304ZM16.7827 18.407C16.6391 18.6654 16.5479 18.9495 16.5141 19.2432C16.4804 19.5368 16.5048 19.8342 16.5861 20.1184C16.6673 20.4026 16.8036 20.668 16.9874 20.8995C17.1712 21.131 17.3988 21.324 17.6572 21.4675C17.9155 21.6111 18.1996 21.7023 18.4933 21.736C18.7869 21.7698 19.0843 21.7453 19.3685 21.6641C19.6527 21.5829 19.9181 21.4465 20.1496 21.2628C20.3811 21.079 20.5741 20.8514 20.7177 20.593C21.0075 20.0712 21.0783 19.4556 20.9143 18.8817C20.7503 18.3077 20.365 17.8224 19.8432 17.5325C19.3213 17.2427 18.7057 17.1719 18.1318 17.3359C17.5578 17.4999 17.0725 17.8852 16.7827 18.407Z"
                    stroke="#666666"
                    stroke-width="1.79167"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>{" "}
                Share
              </button>
              <button className="flex gap-2 justify-center px-4 py-2 w-full text-sm xl:text-base rounded-md bg-[#F2F2F2] text-[#666]">
                <svg className="w-5 xl:w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16.544 3.74988C13.5009 3.74988 12.0009 6.74988 12.0009 6.74988C12.0009 6.74988 10.5009 3.74988 7.45775 3.74988C4.98463 3.74988 3.02619 5.81894 3.00088 8.28785C2.94931 13.4127 7.06635 17.0572 11.579 20.12C11.7034 20.2047 11.8504 20.2499 12.0009 20.2499C12.1513 20.2499 12.2983 20.2047 12.4228 20.12C16.9349 17.0572 21.052 13.4127 21.0009 8.28785C20.9756 5.81894 19.0171 3.74988 16.544 3.74988Z"
                    stroke="#666666"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>{" "}
                396
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
