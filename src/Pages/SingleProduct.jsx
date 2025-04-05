import React, { useState, useEffect, useRef } from "react";
import electricity from "/src/Images/electricity.gif";
import Express from "../Components/DeliveryTypes/Express";
import FreeShip from "../Components/DeliveryTypes/FreeShip";
import { Link } from "react-router-dom";
import ViewMoreButton from "../Components/Buttons/ViewMoreButton";
import ProductsCarousel from "../Components/Carousels/ProductsCarousel";
import MoreToLove from "../Components/MoreToLove";

function ProductPage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // sale CountDown Timer start
  const targetDate = new Date("April 15, 2025 23:59:59").getTime(); // Sale ends on 3/15/2025

  const calculateTimeLeft = () => {
    const now = Date.now();
    const timeDiff = targetDate - now;

    if (timeDiff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(timeDiff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((timeDiff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((timeDiff / (1000 * 60)) % 60),
      seconds: Math.floor((timeDiff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
// sale CountDown Timer end

  const [quantity, setQuantity] = useState(1);

  const [activeModal, setActiveModal] = useState(null);
  const openModal = (modalName) => setActiveModal(modalName);
  const closeModal = () => setActiveModal(null);
  useEffect(() => {
    
  }, [activeModal]);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const [isExpanded, setIsExpanded] = useState(false);
  const product = {
    description:
      "When it's colder than the far side of the moon and spitting rain too, you've still got to look good. From water-repellent leather to a rugged outsole, the Lunar Force 1 adapts AF-1 style, so you can keep your flame burning when the weather hits. Metal lace hardware and extended tongue bring mountain boot toughness, while the star-studded toe design gives your look the edge.",
    images: [
      "https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Bag Image
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Shoes Image
    ],
  };
  // const [mainImage, setMainImage] = useState("/images/product1.jpg");
  // const [isPlaying, setIsPlaying] = useState(false);
  const thumbnails = [
    // "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080",
    // "https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8aGVhZHBob25lfGVufDB8MHx8fDE3MjEzMDM2OTB8MA&ixlib=rb-4.0.3&q=80&w=1080",
    // "https://images.unsplash.com/photo-1484704849700-f032a568e944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw0fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080",
    // "https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080",
    // "https://images.unsplash.com/photo-1528148343865-51218c4a13e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwzfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080",
        // Example video
    { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" }, 
    { type: "image", src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { type: "image", src: "https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { type: "image", src: "https://images.unsplash.com/photo-1484704849700-f032a568e944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { type: "image", src: "https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080" }, // Another video
  ];
  const reorderedThumbnails = [
    ...thumbnails.filter((item) => item.type === "video"), // Pehle sab videos le lo
    ...thumbnails.filter((item) => item.type === "image") // Phir sab images le lo
  ];

// Step 2: Set defaultMedia from sorted array
const defaultMedia = reorderedThumbnails[0];
  
// Step 3: useState and useEffect
const [mainMedia, setMainMedia] = useState(defaultMedia);

useEffect(() => {
  setMainMedia(defaultMedia);
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
  const mobSections = [
    { name: "Overview", id: "overview" },
    { name: "Rating", id: "rating" },
    { name: "Product Details", id: "productDetails" },
    { name: "Recommendations", id: "recommendations" },
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


  const products = [
    { id: 1, name: "Men'S Other Running Shoes Korean Style", price: 5000, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080' },
    { id: 2, name: "Men'S Other Running Shoes Korean Style", price: 4500, image: "https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8aGVhZHBob25lfGVufDB8MHx8fDE3MjEzMDM2OTB8MA&ixlib=rb-4.0.3&q=80&w=1080" },
    { id: 3, name: "Men'S Other Running Shoes Korean Style", price: 4000, image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw0fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080" },
    { id: 4, name: "Men'S Other Running Shoes Korean Style", price: 6000, image: "https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080" },
    { id: 3, name: "Men'S Other Running Shoes Korean Style", price: 4000, image: "https://images.unsplash.com/photo-1528148343865-51218c4a13e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwzfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080" },
    { id: 5, name: "Men'S Other Running Shoes Korean Style", price: 6000, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080' },
    { id: 6, name: "Men'S Other Running Shoes Korean Style", price: 4000, image: "https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8aGVhZHBob25lfGVufDB8MHx8fDE3MjEzMDM2OTB8MA&ixlib=rb-4.0.3&q=80&w=1080" },
    { id: 7, name: "Men'S Other Running Shoes Korean Style", price: 6000, image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw0fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080" },
    { id: 8, name: "Men'S Other Running Shoes Korean Style", price: 5500, image: "https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080" }
  ];

  const [currentIndex1, setCurrentIndex1] = useState(0);
      const [isSliding, setIsSliding] = useState(false);
      const items = [
          { text: "Welcome Deal", icon: "🎁" },
          { text: "30+ Sold Recently", icon: "🛒" },
          { text: "Selling out so Fast", icon: "🔥" },
          { text: "Free Shipping Worldwide", icon: "🚚" }
        ];
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
        <div className="relative h-6 text-center items-center overflow-hidden flex text-[12px]">
          <div
            className={`absolute flex gap-2 text-center items-center text-gray-500 text-[12px] transition-transform duration-700 ease-in-out ${
              isSliding ? "translate-y-full opacity-0" : "translate-y-0 opacity-100"
            }`}
          >
            <span className="xl:text-[18px]">{items[currentIndex1].icon}</span>
            <span className="text-red-500">•</span> 
            <span>{items[currentIndex1].text}</span>
          </div>
        </div>
      );
      const [openIndex, setOpenIndex] = useState(null);

      const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
      };
    
      const accordianItems = [
        {
          icon:(<svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
            <path d="M17.7215 7.50856V9.35935C17.7215 11.6664 17.3104 13.6673 16.4999 15.306C15.8602 16.5991 14.9687 17.6753 13.8502 18.5043C12.8469 19.248 11.8394 19.6546 11.1709 19.8648C10.5909 20.0471 10.1572 20.1178 9.99929 20.1396C9.84136 20.1178 9.40772 20.0471 8.82772 19.8648C8.15917 19.6546 7.15165 19.248 6.14837 18.5043C5.02985 17.6753 4.13836 16.5991 3.49868 15.306C2.68817 13.6673 2.27712 11.6664 2.27712 9.35935V6.13423C3.37731 5.89612 4.4517 5.56112 5.47851 5.13558C6.43552 4.73889 7.35371 4.26297 8.20744 3.7211C9.02008 3.20529 9.62016 2.7275 9.99929 2.39808C10.3784 2.7275 10.9785 3.20529 11.7911 3.7211C12.4982 4.16991 13.2496 4.57351 14.0305 4.9242L14.8124 3.81588C14.0194 3.47422 13.2577 3.07421 12.5448 2.62487C11.201 1.77777 10.4872 1.03915 10.481 1.03265L10.0021 0.522949L9.51845 1.03171C9.5114 1.03915 8.79753 1.77777 7.45381 2.62487C6.66709 3.12073 5.82095 3.55651 4.93905 3.91997C3.83874 4.37369 2.67859 4.71562 1.49093 4.93644L0.947754 5.03747V9.35936C0.947754 11.8924 1.41224 14.1059 2.3283 15.9382C3.07195 17.4253 4.11006 18.6621 5.4139 19.6144C7.63234 21.2346 9.84309 21.4621 9.93614 21.4709L9.99929 21.477L10.0624 21.4709C10.1555 21.4621 12.3662 21.2346 14.5847 19.6144C15.8885 18.6621 16.9266 17.4252 17.6701 15.9382C18.5863 14.1059 19.0508 11.8924 19.0508 9.35936V5.62426L17.7215 7.50856Z" fill="#33539B"/>
            <path d="M11.793 3.7211C10.9823 3.20648 10.3832 2.72976 10.0039 2.40047V0.522949L10.4829 1.03265C10.489 1.03916 11.2029 1.77778 12.5466 2.62487C13.2595 3.07421 14.0213 3.47422 14.8142 3.81588L14.0323 4.9242C13.2514 4.57351 12.5001 4.16991 11.793 3.7211Z" fill="#002882"/>
            <path d="M19.0526 5.62427V9.35937C19.0526 11.8924 18.5882 14.1059 17.672 15.9382C16.9285 17.4253 15.8904 18.6621 14.5865 19.6144C12.368 21.2346 10.1573 21.4621 10.0643 21.4709L10.0039 21.4767V20.1392C10.1641 20.117 10.596 20.046 11.1727 19.8648C11.8412 19.6546 12.8488 19.248 13.852 18.5043C14.9706 17.6753 15.862 16.5991 16.5017 15.306C17.3122 13.6673 17.7233 11.6664 17.7233 9.35935V7.50856L19.0526 5.62427Z" fill="#002882"/>
            <path d="M9.4511 16.4112L5.55732 13.1898C5.23834 12.9259 5.19368 12.4534 5.45757 12.1344L6.32964 11.0802C6.59353 10.7612 7.06604 10.7166 7.38502 10.9805L9.51679 12.7441L16.2964 3.13396C16.5351 2.79567 17.0028 2.7149 17.341 2.95356L18.4589 3.74224C18.7972 3.9809 18.878 4.44861 18.6393 4.7869L10.5414 16.2657C10.2897 16.6225 9.78753 16.6895 9.4511 16.4112Z" fill="#EEA500"/>
          </svg>),
          title: "01 Year Warranty",
          content:
            "Lorem ipsum dolor sit amet consectetur. Semper tellus consectetur lectus sit et dignissim mauris aliquam odio. Leo pharetra et egestas fermentum sed. Eget sem rutrum non consectetur non nulla ornare ultricies libero.",
        },
        {
          icon:(<svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
            <path d="M17.7215 7.50856V9.35935C17.7215 11.6664 17.3104 13.6673 16.4999 15.306C15.8602 16.5991 14.9687 17.6753 13.8502 18.5043C12.8469 19.248 11.8394 19.6546 11.1709 19.8648C10.5909 20.0471 10.1572 20.1178 9.99929 20.1396C9.84136 20.1178 9.40772 20.0471 8.82772 19.8648C8.15917 19.6546 7.15165 19.248 6.14837 18.5043C5.02985 17.6753 4.13836 16.5991 3.49868 15.306C2.68817 13.6673 2.27712 11.6664 2.27712 9.35935V6.13423C3.37731 5.89612 4.4517 5.56112 5.47851 5.13558C6.43552 4.73889 7.35371 4.26297 8.20744 3.7211C9.02008 3.20529 9.62016 2.7275 9.99929 2.39808C10.3784 2.7275 10.9785 3.20529 11.7911 3.7211C12.4982 4.16991 13.2496 4.57351 14.0305 4.9242L14.8124 3.81588C14.0194 3.47422 13.2577 3.07421 12.5448 2.62487C11.201 1.77777 10.4872 1.03915 10.481 1.03265L10.0021 0.522949L9.51845 1.03171C9.5114 1.03915 8.79753 1.77777 7.45381 2.62487C6.66709 3.12073 5.82095 3.55651 4.93905 3.91997C3.83874 4.37369 2.67859 4.71562 1.49093 4.93644L0.947754 5.03747V9.35936C0.947754 11.8924 1.41224 14.1059 2.3283 15.9382C3.07195 17.4253 4.11006 18.6621 5.4139 19.6144C7.63234 21.2346 9.84309 21.4621 9.93614 21.4709L9.99929 21.477L10.0624 21.4709C10.1555 21.4621 12.3662 21.2346 14.5847 19.6144C15.8885 18.6621 16.9266 17.4252 17.6701 15.9382C18.5863 14.1059 19.0508 11.8924 19.0508 9.35936V5.62426L17.7215 7.50856Z" fill="#33539B"/>
            <path d="M11.793 3.7211C10.9823 3.20648 10.3832 2.72976 10.0039 2.40047V0.522949L10.4829 1.03265C10.489 1.03916 11.2029 1.77778 12.5466 2.62487C13.2595 3.07421 14.0213 3.47422 14.8142 3.81588L14.0323 4.9242C13.2514 4.57351 12.5001 4.16991 11.793 3.7211Z" fill="#002882"/>
            <path d="M19.0526 5.62427V9.35937C19.0526 11.8924 18.5882 14.1059 17.672 15.9382C16.9285 17.4253 15.8904 18.6621 14.5865 19.6144C12.368 21.2346 10.1573 21.4621 10.0643 21.4709L10.0039 21.4767V20.1392C10.1641 20.117 10.596 20.046 11.1727 19.8648C11.8412 19.6546 12.8488 19.248 13.852 18.5043C14.9706 17.6753 15.862 16.5991 16.5017 15.306C17.3122 13.6673 17.7233 11.6664 17.7233 9.35935V7.50856L19.0526 5.62427Z" fill="#002882"/>
            <path d="M9.4511 16.4112L5.55732 13.1898C5.23834 12.9259 5.19368 12.4534 5.45757 12.1344L6.32964 11.0802C6.59353 10.7612 7.06604 10.7166 7.38502 10.9805L9.51679 12.7441L16.2964 3.13396C16.5351 2.79567 17.0028 2.7149 17.341 2.95356L18.4589 3.74224C18.7972 3.9809 18.878 4.44861 18.6393 4.7869L10.5414 16.2657C10.2897 16.6225 9.78753 16.6895 9.4511 16.4112Z" fill="#EEA500"/>
          </svg>),
          title: "Enjoy hassle free returns on that product",
          content: "",
        },
        {
          icon:(<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 22C17.523 22 22 19.986 22 17.5C22 16.234 20.837 15.09 18.965 14.271C17.823 16.367 16.082 18.174 13.87 19.119C13.2787 19.3707 12.6426 19.5004 12 19.5004C11.3574 19.5004 10.7213 19.3707 10.13 19.119C7.918 18.174 6.177 16.367 5.035 14.272C3.163 15.089 2 16.234 2 17.5C2 19.986 6.477 22 12 22Z" fill="#002882"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M5 8.515C5 4.917 8.134 2 12 2C15.866 2 19 4.917 19 8.515C19 12.085 16.766 16.25 13.28 17.74C12.8751 17.9118 12.4398 18.0003 12 18.0003C11.5602 18.0003 11.1249 17.9118 10.72 17.74C7.234 16.25 5 12.084 5 8.515ZM12 11C12.5304 11 13.0391 10.7893 13.4142 10.4142C13.7893 10.0391 14 9.53043 14 9C14 8.46957 13.7893 7.96086 13.4142 7.58579C13.0391 7.21071 12.5304 7 12 7C11.4696 7 10.9609 7.21071 10.5858 7.58579C10.2107 7.96086 10 8.46957 10 9C10 9.53043 10.2107 10.0391 10.5858 10.4142C10.9609 10.7893 11.4696 11 12 11Z" fill="#EEA500"/>
          </svg>),
          title: "Free delivery on Pickup points",
          content: "",
        },
      ];

      const [selected, setSelected] = useState("free");
      const deliveryOptions = [
        {
          id: "free",
          title: "Free Shipping over PKR 2,570",
          delivery: "Standard Delivery: DEC 06 - 16",
          extraBold: "DEC 06 - 16",
        },
        {
          id: "express",
          title: "Express Delivery",
          delivery: "Standard Delivery: 24 Hours Delivery",
          extraBold: "24 Hours Delivery",
        },
        {
          id: "standard",
          title: "Standard Delivery",
          delivery: "Standard Delivery: DEC 06 - 16",
          extraBold: "DEC 06 - 16",
        },
      ];

      const banks = [
        {
          name: "Faysal Bank Islami",
          logo: "data:image/jpeg;base64,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", // Replace with actual logo
          installments: [
            { period: "Down Payment", interest: "-", fee: "PKR 12,000" },
            { period: "6", interest: "0%", fee: "PKR 6,000" },
            { period: "12", interest: "0%", fee: "PKR 6,000" },
            { period: "24", interest: "0%", fee: "PKR 6,000" },
            { period: "36", interest: "0%", fee: "PKR 6,000" },
          ],
        },
        {
          name: "Meezan Bank",
          logo: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUQEhIVFRUXFRcXGBUXGBcYFxsbFRkZGBsYGBcYHSggGB0mHhcYIjEiJikrLi4uGB8zODMtNygtLisBCgoKDg0OGxAQGi8lHyUzLS0vLS8tLS0tLystLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAGAAMEBQcBAgj/xABNEAABAgMFBAYGBQoEBQQDAAABAgMABBEFBhIhMQdBUWETIjJxgZEUQlJiobEjcoKSwRYzQ1NUY6KywtEVJNLhc5Oj8PEXJePyNIPi/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAMEBQIB/8QAKxEAAgIBBAEDBAICAwAAAAAAAAECAxEEEiExQRMiUTJCYYFxoSOxJJHx/9oADAMBAAIRAxEAPwCcBDiRCSIcSIASRDiRCSmHEpgBJTHtKY6Ew4lMAcCY9gRMs+znHT1RlvUdB4wRMWUwwkuOkGmZUsgJHnkPGAZQSVluudlBp7RyH+/hF1LXaSM3Fk8k5Dz1PwgdvBtQYaqmWT0yh6xOFvwOqvDLnAyJm2bS7IWhs70/QtU7+0r4wK8tRFPEeX+DSZu0JCU/OOMoI3KIK/LNUUs7tPkkZNh136qMI81kfKKWzdk47UzMd6Wh81q18hFp+Tdiyn50tE/vXMZ+5WnkIJN9Hid8+kkVU1tc9iVHet2nwCT84iHavMnsy7P3lq+VIJE3qshjJpCMv1bFPjhEJW02TGjTx+ygf1RIqZvwzpae9/d/QNDavNDtS7PmsfMxKl9rqvXlUn6rvyBR+MXSdp0odWnh9lB/qj0b52U9k4gZ/rGa/IGDpmvAenvX3f0eJPanKKycbeb54Qofwmvwi6lLes6byS8ypR3KolfkqiopDZNhzWSCwCfYWWlfdBHyiBaOydpQrLvqTwS4AtPmKEfGOGmuzn/kR7SYYzF3G1ZoUU/Ef3+MU07YzreeHEOKc/hrAauQtmzc2ytbY9g9K3T/AIZzT4CLuwdqSSQicawHTpG6lPig9ZPhWPBHUxziSwOlMeFJgwDEtOI6VpSVA6ONkfH+xiitGyHGsyMSfaH4jdAsp5KgiG1JiSUw2pMARiI8KESFJhspgCOoR4Ih8iGyIAapCj3SOwB7SIcSmEkQ4kQAkphxIhJEOoRwFeUAJKYIbJsDF13QQNyN57+HdEqx7GDQ6V2mLWh0TzPP5QE3z2gLcV6LIVNThLqc1KOmFoD+by4wI7LY1rLCS9V95eRHRNgOOgUDaSAlP1yOz3awCsSFo2yrG4cLNclGoaH1EarPP4xe3V2eIaHpU+QSOv0RIwJ31cVoo/DvhXm2ihP0MiBQZdKR1RT9Wnf3nLkY7rrlN4RFCmy95lwvgs5S7Vm2YkOvqSpe5btCSf3bY/AE84qra2nnNMo0Ke25+CB+J8Iz6aecdUp5wqcNaKcVU5nQE7uQ5ZQzF+vSxX1cmjXpoQXBa2jeGcmTRx5xVfUSSlPdhTSvjWPEpdubc7Eo6a7yjCPNVBHLCtx2TWp1nDiKCnrAkZkGtARnlGwTM84/ZaphCil1UsXAUGhxhGIgcMwRHts3VhRSwdzk4dIzuV2czis1hpoe+up8kgw3ee5KpJhL6nUuVWlJCUkAYgTWpOenDfDlj3dmJ9h6YcmHepiohzGrHRGIUKlUoTlkDpEK0L3OvSiJJTbeBKWxi6xWejpQg1oNOG8wUrHLh5+QnJvsHqRZXfsVc490DeEKwqVVVcICaa0HEjziugguXeJMi6txTRcxpCaggFIrU0BGdaJ3jSJ7HJRe3sklnHBy0bkzrWsuVji3RY8hn8IgSdqTUqqiHHWiPUJIHihWXwi2avFPvTbhlFvEuLKktA4glOgqlVUpyAqdK1zjULLk3lMf+5ejuGlSAjqpG/EpRoTzAA74qztlD60mRObX1ARY+055NBMtJcHtt9Vf3TkfhBA7J2XawqnD0tNU/RvDvHrDvBEAN91yhmKSaUhATRRRXCVVOlcqAUzGUD7aikhSSQQagg0IPEEaGPXpoTjuXBzOiFi6C+0rrT9lrMxKLUtsaqb1oNzjeYUOYr4QUXS2jNTFGZoJadOQV+iX4nsnkcs9Yo7sbR3G6NzYLiP1g/ODvGix5Hvi5vDcuWtBv0qTUhK1AkFP5pfEKA7KuJ8xFKyqVb5M+zT2UvMOvgIbVsEKqtnI70bj3cDAy42QSCKEag6xSXZvhMWe76HOpWW05Z1K0DcUn10cvLhGkTsk1Nth5pSSVJBStJqlQ3VI1HOIzuq1T/kDVJhtSYlPslKilQII1BhlQgSkZSYbUIkqEMqEANYYUOQoA9pEOpEcSmHUiAElMFlg2UGx0zg61KgH1RxPP5RCu3ZmI9KsdVJ6o4nj3CBnabetSlf4dLVJJCXSnMknINJ5muflxgR22KuOWQb73tcnnPQZIKU2VYSU6ungDubFNcq0J01JbvXflrIZM1MKBdpmvWlf0bQ4nzPdkOXWsJmyZZU1MkdKU9c64a6NN8STrxPICM7vPeBydd6RzJAJCGwckj8VHeYnopdj/B5ptM5vfPv/AESr23tdnVYT1GQeq2DrTQrO8/AfGH7uXPU8j0mZV6PLAVK1dVSh7oOg94+AMW9x7Dkh0L0w8hx10no2SeqCn2hvVUb8q0pWJm1eyZlZbcbK3GqhPRJFQlZ0VhGtdKnTxiz6iT9OHH5L+5fTHgkyVt2W7KvylOiZQMqiil10cR6yl4h36RliwKmhJFTQnIkbiRujTrx3IQuTbXLs9E82gKLdQVKBFVIUodpQNaHvG+Ba7tzHJthcwhxIoCEIrUqUncr2f9xHVM4RTlk9g4pN5BgxtOzGZxyCE70LWj44h8FCMXWkglJBBBIIORBGoMaddy8FnWeyUIfddKyFkYa0UUgEA0AGg37o91S3RSQuWVwQ7P2jutuPpnEYwDgSlpITQpKgrEVKrQ5eUVtzroNTzTrxdcQULKQhOHTCCmpIPGnhEqZvdZ4WpxqzUrWpRUVu4cyo1J0VSpiO9tJmqYWmmGk8Akk/MD4RwoTS9kcHKUvtWAMOVa6jWDO6+z92ZAdeJZaOYH6RQ5DRI5nygOdWVFSjqoknhU5wd2dtMdSkIel0KTSlW1FBppoajTmImu9Tb7CSe7HtCectiQslsstJBX+rQarJ4uLOnj4CM3vHeqZnK9IcLVcm0ZIH1j6x7/ACLlSbGmamr8qsmpOZTU8T1h8oK7tysrJyj5RMNzCes6T1TklFAkip4fGK8dtfLTcvyRLEfHJkFIUIqrmd8dQgqISkFROgAqT3AZxfLByLS7tvvSS8bJ6pPXbPYV3jceevyi4sXZ9Nv0U4Awjivt+CB+JEFB2bSpbWyh5RfABxlQJTrSrYyCTQ88tYrWX1dPkjlZHpk19iTtuWqOq4nfl0jajuPtJPke+AqwrYmLGmTKzCSWSaqSMxQ/pWuPMb9NYp2H37PmjhIS42cKgDVKhwPEHL/wAxprzUvbcnlRDidD6za+B4pPxHMZUrqdnK6M/U6Zr3w7LyelW5tpLzSgqqQULGigd1f+6QJONkEgihGREUVybfcs2ZMhNDC2V0NdELOiwfYV+IPGNDvFZ2IdMgZgdbmOPhEB5Vapr8gmpMNqTEhQhpQgSjOGFDlIUAe0iJtnSZdWEDfqeAGpiMkQWXelQ20XVZFQrU7kj/ALrAFffm8KZCWCW6dKsYGk8OKyOAr5kQN7LrtUBtKY1OItYtwzxOknec6HhU74pOtbVpb+hSdeDSD8Csn+LlBHtQt0NNps9nLEkdJT1WxklHjTyHOO64OctqK1UfXs3eF0Ct+LzmdeojJhskIHtcXCOe4bh3mBuC6492EzLcw+6ha0oSUtpSaKUumI4TyyGeVVGBN1pSFFC0qQoapUCCO8HONSpxXsj4NeLX0o8DI1GRGYIyNRoY2y4d5hOM4VkdO2AFjiNyx37+B8IxSCG4JpOIX06WAkFSirRSR2kcMxnmcqV1Ec6itThn4PLY5Ra2vZNpJm3pZtx1wP0UXK0SUAmmJWiMNaECndnSLBqdl7GbW0hfpE0umNING0kaVG7X6xy0EM3v2iKXVmTJSjQvaKP1AeyOevdrFJda5rs59KslpjMl1WquJQDr9Y5d8RKPsTs4X+yPHtzLopJuYcmXlLKcbjiqkITqeSUwSWVs7mnRidwsJ981V90aeJEF1jqbb+hsqWS5uXNu1DVRrRfaePJHV5iLZN1A71p19yZOuAno2ByDSMlD6xVEc9W+oLBFLUt8QQGi69lMnC/OqdWNUNkE/cbClfGJzFm2X6khOOc+hmf6qQZzDkrIM41JbYaSQOqigqcgAECpit/L+zv2n/pu/wCiK7tm+2QSuln3SwUD1nWZTrWdOIHEMzH9BMQHbvWQ6cKJpyXWdEuEo8MLyQfjBd+X9nftP/Td/wBETLNtuTnsTbS0vYQCpKkK0NQDRaRXSCtmvIjdLPEjOLS2bPpGOXcQ+ndQ4VEcqnCfOA+bkltKKHG1IUNyhQ/7iNvdug0klcqtyUX+5VRs/WZVVs+QPOK+1nFpT0Vpy6H2P2lpJOH3nGhVTf1kEjuieGrkvq5Jo6mS+tGX3bnmmH0uPtB1uhSUnOmLLEBoogVyPGNW9KkpGU9LlmMbZHaaAUo13rUrMAaGukA147kFtHpUmv0iXIxdXrKSOIKe2nmM/nAzK2m620thDiktuUxIByNPlXQ01GtYnlCN3ui/5RO0rOYs1Cftl20ZQrkHS26n86xl0hruSrdvoRryh3ZvJ+jyS5l7EFuKUtZXXFhbqkYq57lHPjGfXasydp6ZKJPUWEVGpxUqMPrJFRi7+WWmbR54syDgr1nKND7Xa/hCogsiov049N/s4ksPajG56aLzq3larWpR+0Sfxiddq23JN9LyMxotG5Sd47+B3RVwo0HBNbX0Wdqxg1a/NiN2jKpnpbrLSjEmmq0alB94ZkDjUb45srvN07Xojxq42OoTqtvTfqU5A8qRSbLrw9E76Gs/RuklHJzWncqnmOcR77WcuzZ9udYFELUVpA0CvXR3KB+J4RkW1uEsGPqYOme9fsL7ckOicy7Ksx/bwirUIMFrROSqXW8wpIWjvpofiDAkoRGTp55GcMKHKQoHpKs6V6RxKOJz7hr8If2qWz6PKdAg0U+cHcgDrnyon7UWV05fNbh3dUeOZ/CM/vcTaFrolkmqELDVeAT1nT/MPAQINRNqGF2+An2fSCZGz1zjuRcSXVcQgDqJ8a171Rl1pTy33Vvr7a1FR/BPcBQeEaRtZtPA01JoyxnEoD2W+yPP+WMuKgI0dJXiO75L2lqUII3G7KkN2e16HheCU1IrhKlarHurqTkeQy1hpFoWfaQ6J1KekFR0bowPJIyISdfumMtuteNySdxoBUhVOkb0ChxHBQ3Hwg4vNYDVpMifkyOlpUp0K8PqqHquDcd+XIxDOrZPl9+Q4Ylz/wBnl7ZcgPIUl4ljFVaFdunBK067hnTLfGdWq20l5xLJKm0rIQVEEkA0rUAVz05Ugtkb4Kas96XW66qYKihIWDVCT1TRRzJAB1zqRFVce7npj9FZMt0U4ePBFedM+QPKLFblFOU3wiSLay5MsLnXWbUgz84cEsgYgk+vTefc5aqPLU3l7PctCin0lqUH5uV7JcA0U/TRPBvhrXSFIMifdDxH+TZVRhulEurRl0xG9CSKIGmRPCC4CKNtrm8spzk7Xl9HhloJASlIAAoABQADcANI9GPUVV5bXTKS7kwrPCnqj2lHJKfEkREG1FZMy2t250r6ZRBqlnNfNxQ0+yk+azwgBpDjzylqU4s1UtRUo8So1J8zHqUllOuIaQKrWoJSOajSBh2Tdk8jNIuLpWz6HNNv+p2XB7iqYvLJX2Y7eywFSL/QqJUkpCkL4g5HxCqjy4xTwOfdCX5R9ONqBAINQcwe+PREBGyq3enlfR1H6RiieZQewfChT9nnBuIG5XNTipIF5yxXJVSpmQAFTidlKgNucVI/VOcxkd43wI3nu61NtKtCRSQoE9MxSigpPa6nqrG8b9Rz1YiBi35Ncs4bQl0kkAekMp/Stj1wP1iBmOIqOEd12ODyj1SdbyujJLu2+7Juhxo1BpjQeyscDz4Hd8yi/wDbrM7LS7rbtCFKxMEdYEgVJ4U0HHFlES/9hIThtCWIVLv0V1eylShWo91XzrxEUN2ZZp2aZafr0a1YTQ0zPZz4VoPGNFKE/wDKvBdW2XvRWRwmNLY2WguqLj5S1iOFKBVWGuQKlZDLkYuWmrLs4hICC7WiRm68SdABmQSe6PJaqP2rIdy8Gd3lu/6GJd5txS0uoC0rphKVCiqAbslJOfAxoLlLXssnLpaHweb/AAPyVHvaY2hcgVL6i0qQpANK4tCnLfQq8oF9klq4H1yqjk6nEn66NfNP8sQSzbTufaIpx9SvkmbHLYycklnNNXEA99Fp8DQ+Ji9t+VwOmmiusPHUefzgLvCk2dbKH05NrWHeAwuVS4PPEfERpt5GMTQWPVI8lZf2imUNM+HB+ASpHY9RyBZCuTWJeTLqtEoU4fIq+VIzzY/Kl2Zfm15lKaV950lSj5D+KDHaPMdDZrqR6wQ2O4qAP8IMVey1oM2c4+fWW454NjCP5D5wKs1uuivjkCL+z/TzzpGYSoNJA9zq0Heoq841GwrHTJyaG1Ml1QGJwJSlRKlZqyURWmlBwjGrJtHon0TK0BwpXjKSaAmpNa8ia+EFDG0mZS8tZSlbSlVDSqApGlErHnmDnXSNG2qbiox6RqThJpJBI/b1jKUUPMJQoZELllJUO+icom2NatkMFSpd1tvFTEKrSDTSqVZV5wwzbdm2okNvJSlzclyiVg+44DQ9wPhFLeS6MpISrzqipxSylLOI0UhRrvTTFvJqNExXUYv2yymR4XTyDV+Z9uYnHFsAYeqkKT65GqudSaeAg4RZRZl2LKbNHZiqphadUtihdVXiapbSedd0BmzuzQ/PIxCqW6ukfVph/iI8o027A6Z+ZnTopzoGuTcuSk+bhcPcEx3qZbcVrwc6h9QQQS0ulCEoQkJSkBKQNAAKACHoQhRTIzhjIdrtudI8mTQapaotf1yMh4JP8XKNMvDaqZWXcmF6ITUDio5JSO80EfO8w+pxanFmqlqKlHiVGpgUdbbiO1eRuNG2RWDiWqeWOqmqG671HtK8Bl4mACRk1vOIYbFVuKCU953nkMyeQj6JsSzUSzDcujRCQK8TvUeZNT4wK+jq3S3PwDm06wfSZUuIFXGarTTUp9dPiM+9IjEo+nSIwO/lhehza0gUbc67fAA6p+ya+BTAl1tX3oYubbRk5tt4nqHqOfUVSp8DRX2ecfQaFAiozEfMJja9llu9PKhlR+kYog8Sj1D5VT9mB5oredjDWOEQhHYGkBaLOQh16y3B/l5lC3WPcNautp4YVFLie88IySelVsPLaVkttVK80nIjyBHeI22+zJEv6SgVcllB9NNSEdtI+s2VjxgB2pySelam0dh9sZjQlIBB8UqH3Yt6SeJbfk708sScBm+N8DMtshl51H0f0yBVKcRA3jNW8cIuNnd2kMNm0pqiaJKkBWQSmmbiuZGnAd8D2zyxG5qZ+lIwtpx9H7edKfVBpXjlGi3rsGYnSGA6lmXFCqnWW4eFMglI7zU7so7tcYf41x8slm0vajNrw2w5ac2htJCGyrA0lRoBX1l81fDIRCW0uz51IUesy4lRI0KciSORSTGksXesyzsLjyklYzCnlYlVGdUNjf3CsDO0ttt8S9oMnEhxJQToTQkpNDn7Q8BHVdibUEvb1+zqM03hdFrthkAuXZmQK4FYSfcdFfmB5wR3Qm/SrOaJNSWi2r6yKor8AYp3j6VYRJzUJev2mP8AdEMbF5rFKutV7DuIdziQfmlUUGsPBmNbNRj5X+hYDw+EKDn/AA9HCOR4WQI2yvUlmUe0+P4ULPzIh5r6GwARkTK18Xv/ALxW7bFdWVHvOnySn+8Wl5hhsNAH6mWHxRHUF7kV6lnUP9GRJjsKFG2bJ5WmooYIL03j9LDKEtlttpFAjFi62hNd4oAB4xQwo5cU2m/B40s5D7ZuoMS09On1EUH/AOtCl/iI0W68l0Mow1vS0mp4qIqo+JJMZ7YDf/sc177ikn7RbR8jGqIFABGTe82MoWPNrPUKFDUy8lCVLUQEpBUSdAAKkmIjwH753ZM+hDfTlpCVYiAkKxHQVqRkKnLieUCv/pIn9sV/yk/6oGLUv5OuPOLafW22VHAgBGSRpqmtaZnmYi/lpaH7WvyR/pgZtl1EpZayaZdG4CJJ4zBeLqsJSmqQkJrqciammXiYM4z3ZhexyYLktMLK3B9IhRoCU5BSchuND3K5RoQgXKHBwzDoVIH743XRPtJbUotqSrElYAURXIihOh/AQQwOX7t/0OVU4k/SK6jY95XrU90VPhA7s27Xu6BP/wBJE/tiv+Un/VFvda4RkXw+maUsYSlSCgAKB54txAP/AJjN/wAtLQ/a1+Tf+mOflraH7WvyR/pgZ0bqIvKifQAjsUl0LbE5Kof0VTCscFp1/v3ERdwNOLTWUNvthQKSKgggjkcozC3GCuxUV7Uq6W6nX6JxTHyoY1Ixn9qI/wAhaiNyZh0jx6Nz5kx3W8TTEeLEzO7u2wqUmETCU4sNQU1piChSlfI+EW9r3+nH6hKwyg+q3kfFZ63lSBaFGvKuEnua5NBxTeWJZJJUSSo6kkknvJ1hf9+eeUKFHZ0a1syPS2cto6BbqPBYB/qih2JuUdmGzvbQfuqUD/NFzsdP+WeH775oTFDsoNLRfT+6d/hdQIx71ixmRqeL4/s1+sdjkKIiYzLbYjqSp99weYSfwizvIcdhoI/Uyx+LcM7ZWayrS/ZfHkpC/wCwh2V+msAAZkSxHizl/THUHiSK9TxqH+jJIUcTHY2zZFChQoA0C77lbDmvcWpX3ejX+EaqhVQDxFYyjZmA8xOyR/SN1H20qQf6Y0K6k500mw4e0W0hQ4KR1VD7yTGResWMz7Fi1ltGd7XLe6NpMmg9Z3rLpubB0+0fgDB5PzaWW1urNEoSVKPJIrHztbdprmn3Jheq1VA4JHZSO4fjEJT1duyOF2yFChQoGQSrKtBcu8iYb7SFBQHEDVJ5EEjxj6KsufQ+0h9s1StIUPHceY0j5rMaVsht+hVILORq41/Wj+ofagXdHbtltfk1NRjCtotv+lzakpNWmaoRwJr11eJFO5PONK2j2/6JKEIP0rtUIpqK9pfgPiRGGAQJdbb9iOwoUKBmhlsvt70ea6BZ+jfonklY7J8a4fKNsEfMIPhG93Et70yVQ4o/SJ6jg94b/tAg+MDS0VuVsYRmM+tRz/IWovcqYdSPDo2/mkwezLwQlS1ZBIKieQFTGX3ge6OxWgrJcy4XSN/0q1Pn5gR3WszRfis2JGewoUKNo0hQoUKANV2Op/yzx/ffJCYotk4raL6v3Tn8TqD+EEWzX6KzFun2nl+CRT+kxRbEWquTDh3Ntp+8pRP8sY97zYzH1PN8V/JrMKFSFEROCu0OX6azXVDclDo+wQo/w1io2UvB6z3Jc+q44jwcGL+o+UFFnAPyhbVoUqbV3Up8iIzrZHMlibflF6qBH22VEH4E/dgVZ+26MvngCFtFBKDqklJ70kg/KOQR7QrP6Cecp2XKOJ+1r/EFQORtQluimbMXlZFChQo7OghuDaYl51tRNEr+jV9ugH8QTGoXcPQTM1JnIY/SWvqPk4wO5wK++Iw0xq0raapmVZtBoYpmUJDqB2looA6j7SQFj3kgRQ1kOVMqamPUkeNsk64hhppIIbcWcavqCqUeOavsRksbzeeRRaMgroiFYkB1pQ0xDrJp36eJjBaxRMPWp78+GdhRysKsCmdh+QmltOoebrjQoKTTiDp46eMR6wUbOLI9JnUVFUNfSq70nqjxVn9kwO64uUkkedodoOvTig6ko6NKUpRWtAUhRPOpPwHCBqNP2yWRk3OpGlGnO4mqCfGo+0Iy/EIEmoi42PJ2FHMUKsCA7BjspnXETwaQCUOoV0g3DACUr8CcP24DcUaxsgsjAyucXkXDhQTuQjU+Kq/dECxpot2LAS31cKmUyaD15pYZFNQjtOq8GwrxIgA2qWgFTCJVHZYRSg0xLpl4JCfOCpq1Ekv2w5+ZbQWpUe0K9Zwf8RYAHupB3xks3MqdcW6s1UtRUo8yaxc0leZbvg3tNHLcxqFChRol0UcJjsTbEkS/MMsD13AD3aq/hBjxvCyeN4NOnh6LYRTooy4Tw6z+v858oZ2MSuGUcdp23SB3ISB8yqI22S0QllmVGWJRcI91sUA81fwwUXXlPRLOaSRRSWsRHvL6xHmaRiN5eTGb36jPwiz/AMVRCgL6TmY5HhZL66cx1ltnf1h3jI/CnlADfhBkLVbm0jqrUl3LfTqOp8s/tQSyMyW1pWNx+G8eUTdpdj+lSfSozWz9Imm9NOuB4Z96RAg1EHKGV2uSu2qWaHpdqcbz6PUjehylD4Gn3jGWRqmzW00zkkuSdzLaSinFtdcJHdmPARm1rWcqWeXLudpCiK8RqFDvBB8Y0dHZlbS9pbVOCIkKFCi4WhReXOvCZJ/pDUtqolxI4blAcRWvmN8UceuiJSVYThBAKqGgKq0BOgrQ+RjmUVJYZzJJrDNjl5hMi5jCgZCYViSsaMOOZ67mlk1B9VR4HK1N05FRKjKMkqJJOAZk5kxmNzL2CXBlZkdJKrqCCMWDFrlvSd48YOpeZXIJCgVTEgRVC09dxgHjTNxrgRUp31GcZFtTreGZ1lex4a4LX8jpD9jY+4I5+R0h+xsfcEWsnOIdQlxtaVoUKhSSCCORESBEZ5sh8Io/yPkP2Nn7gibZtjS8vi6BlDeKmLAkCtK0rTvMT4UD1QiukR52SbeQW3UJWhWqVCoNDXMd4iq/I6Q/Y2fuCL2FAOKfaKL8jpD9jY+4I7+R0h+xsfcEXceVuAAkkAAVJOkDz04fCKU3QkP2Nn7girngmYP+GSo6NhsATLiMglOvQNkaLV61OykneRDsxazk8S1JKwMDJyc3c0y9e2ff7I3VMBl67zNNNf4dIdVoZOOg5qrqEq1VU9pe+O663OWEIV73iK4Id/bxJfWmVYoJdmgThySpQFKj3QMh48oE4WE0rTLMA7sqVofEecKNeuChHCNKMVFYQoUKFHZ0KD/ZHZON1ybUMkDAj6ys1eSafegCbbKlJQkVUohKRxJyAHjGu2mtNk2XgSR0pTgB4uuVKldwzPckRV1dm2GPkr6ixQgB9qq/xK2UtjNtKwjlgZqVnxNR4iNMvM/hbDY9Y/BP+9IENjtjUbXOLGa+oivspPWPirL7MW1uTfSOkjRPVHhqfOMwzdMnhyfbIEKPNYUCyNpMFl2pzG2WlZlPHek/9/KBBJiZIzRbWFjcdOI3iABW0EKsa0g4kEsqJUAPWaWesgc0nTuTxgn2kWImZYRPsUUUIqojPG0c8Q44ak9xMXt8LDRaMr1KdIOu0o7leyeR0P8AtAfsxvIW1GzZnq9YhvF6qqnE0a8TUjnUcI7hNwluRWrn6FuPD6M+BjsFV/rrGTd6VtP+XcOXuKOZQeXDllugWQkkgAVJNABqSdwjXhNTjuRsRkmsnI0zZXZ7ymXelSkyrmQQpIONWQUqvs0FM61PCmYvde6TszMll1Cm0NkdLUEHiEjmePDPhGsWkrC0qUlFtNv9F9Eg7kjq1CR8DxirqbU/YiK2a6RnN7Lj9Hjfkj0rSSQtsHEtsjUCnaA4ajnFNdi9j0krqnG0T1micuZSR2T8DvEPXcdnZOdDaUOY1LAcaUDRYJzUeO844u9qlgtsqRNNAJ6RRStIyBVQqCgN1aGvhHSfKrnyn5Cf2vkuLIflplRes6YMo+c1sKA6JZ4qZrQn30EHjF2LxPMZTkqtI/XMAvNHmQB0iPFNBxjDq0zBpz4eMEdkX6nGOr0odSPVd63krteZMRWaR/ayKWmxzBmw2fb8s/8AmphpZ4BQxDvScx4iLEKjKF34kpj/APMs5Cz7QCF/zAEecPN21Y25Ew1yQp9A/wCmukV3RYvBE4WLwalWIM/bDDAq8+22PeWkfAnOM9XbNjDX0pzkpcyoeS10iOm+NmsZy1nDF7SkoQfvdZUFTY/AULX4DRV6i71ZOXdfO5wgtMd/SLHWH1QqKm2UpSnpbWmUqGqZNqoaPJSe2/8AaonlAda20ObeGFCksJ/djrfeV+AEDKQ484BVS3FkCpNVEnICp798Tw0j7m8EkdM3zNhHei+rkynoGh0EuBQITkpQG5RGQHujLjWHLkXSTNnpHnEpbSrAWwaOKVSuH3RTxNDprBbc64bbFHpnC48KEI1Qg6jL1lc/LjFZdqSeVbTq30JSpCVLISKJOIBCFCutUqOffzjt2RUXGvjBK5JJqJE2oTKW1NSDKEIabQF4UpAoVFSQAd2QPfXOASDG+9iTjs4+8JdxSCoBBSMQKUpCRShrurpvgYNnPYggsuBRNAkoUCSdwBET0OKglkkraUSLCj04gpJSoEEEgg5EEZEERb3Uu+udeDacm05uL9lPAe8d3nuiWUkll9HbkkshPssu9jX6c4Oqioa5q0UvuGYHOvCK29M6u1bRRKsH6NJKEndQZuO/DLuHGCPaJeFEmwmz5aiVqQEnD+jbpTLgpWnmeES9mV2fRWPSHhR1wA0PqI1A5E6nwG6Mi2xzllmNqJu+zYuvIQzhRKSyWmhhASEIHCg1gSJifbM90rmIdkZJ7uPjFaoxGWEsHawo8YoUD0bSYcSqI6VQ6kwBf3dtPo1dGs9RRy5H+xil2nXQK/8APS6eunN1KdSE6OJp6wpu3DlHEmCi79r4qMuHPRKjv9084EdlanHDKG5d5mrRYMlNUU6E0NdHUj108FDfTvHIKvPd56znkqSo4MVWnRqCM6HgofHzpf39uYthfp0kCkBWNaEZKbOvSN03cRuqd1RFtdS9bFpNehzYT0pFCDklz3keyrfTxHKWm1wf4OdPqHXLZP8A9PVzr+ofoxMYW3tAvRCzur7KuW/dwgFvXKzkvMqemFKDhXiQ8muHLTAfVoPViXfC5TsmS43Vxj2tVI5LHD3tONIk3a2gOMJDUwnp2xoSfpE03AnJY78+cXIxS99fK+DQSX1RDiXtt9FmonXGgpxKMS0qqkqSDTEKDqkpoqlIzO9t6XJ9SSpIQhHZQDXM6kkgVMXt7toCZlky7Da0BdMal4QaDPCAknXjWKS6N13J13CQUNII6Reh44U+8fgM+FfKYKtOc1gQio+6Q9cm6ip1zGuqZdJ6yt6j7CfxO7vjS27Ps+bLjAZbX0BS2SEgYTTspUM8qUhWhgDKpCRmGGXkpCQkkYkg8AMwSN9DrWKnZ1YEzJuTCX0gJWGylaVBQJSVg860I1EQWWOacm8Y6RHKWcsyqdY6N1xs+o4tH3TT8IuLtXVdnQpTbjaAlQScZVWpFRQAZjxjzfiX6OfmU01cx/8AMSlZPmoxVSD2B1tfsuIV91QP4RoZbhmJY5ccoOV7LXQhR9IQVgHCkIIBO4FROXlAhZTLKZjo53GhtOILwg4gobqAE6ika7fS21SaWJlPWR0uBxPFK0k1HMFNR5b4Hr/XeRNMi0ZSilFAUsJHbRTtAe0kbt4FNQIqV3Sf19PyRQsfnySBd6zESfp6WFut9H0gClLxEfVJAB74zK0HUKdWtpJQgqJQnekbh4Rqd1h01iFvf0T6PIrw/DDGRiJNPnMsvo6q7eS/uxed2VmenWpS0roHQTUqHtZ+sN3lvjW7VU44x6TIqbLpQChRTiDiBngrUEVqaZ5HxjBo0zZZPOtsOl1SBKozC1KAKVZFQA9mhrnTPStcudVUvrR5bD7kRrN2kzJWlDjLNCsIUolbYSSaUUethORy5GLu91/W5erLFHHqUJ1Qg8z6x5ecCN9L3tzAVLy7aUsleJSykBS1DPEBTq95zPKKq7F13p1YwDC0D13SMhyT7SuW7fD0YY3zWPwebI9vgasyzpi0JghPWWo4nHDokH1jT4CNJtW0JexZQNNAKdUDhSe0tW9xfujL4AQrUtSUsWXDLSQp0iqUV6yj7bh3J/8AAECN1ruP2o+Z2bUS1XM5jHT1EDcgaee8kxWuu38LopanUuT2Q7JGz+7S5x42jN1UnEVJxfpFg9qnsJ3DiOUHV47T/QJP1z/T/eJFqz6ZdAZaACsICQBQISBQZbuQgTWreYgPKqlCODijDSjHVGG1KgSnawobxQoA8Aw4kxHSYcSYAkJMOJVEdJhxJgAssW3Ar6N456BR38lc+cC99tnmImZkQErriU0MgTribPqq5acKHVJVF7ZNulvqOVUjcfWH9xAjsrjNYYL3U2iFH+VtAHI4elIOIbqOpp8ad43xYXg2ftPp6eRUhBV1ggGrSq51SR2K+XdrF7eO6craCekyS5TqvIpXuUPWHI58KRni2bSsZRUk4ma5kVUye8atny7zHcJyg8ohjbZQ+eV8g9aNnOy6+jfbKFcFDI9x0UO6Diy9qK0gCYYSoe02cJ+6qo+Ii0s+/MhOo6GbQlsn1XKKbJ91e7xpDNrbM2XB0ko7grmEq66PBQzHxi169dixYi/DUV2oAryvyzjxXLJWEKGJXSEqVjJJUesSeG+DzZrJzqVIeccKpZbaqJKyopUFAJOFWmQOh3wHWlcyeYriYK0+031x5DrfCKyUtKYl1fRuuNHeASPNJyPiInnBThtg0TtKUcRYUbWJbDOpXTJbSTXmkqSfgE+cBS9D3Rf2ve2ZmWBLvKSoBQVjwgKOHcaZc9N0QLEtH0Z5L/Rpcwg9RXZNQR+MSVqUa8NHsU1HDNPvygv2ShaQVEhhYoKnrYQchyUYFbgXnMo76K/VLSz6wI6NZyqa5gHf58YT20qbOSEMtjQAJUaeaqfCBOfnFPOLecIK1mqqAAVpTTwiGumW1xmuDmNbxhm/WXZTbCXENiiHFqXh3JxgBQTyqCae8Y+fHmsClIOqVFP3SR+ESzbMyQG/SXqAABIWvQZAAAxLs+687MGqGF0Prr6g76q18Kx7TX6WXJiEdmcsp4elW3HD0LQUoqIPRpqakaHCNaV1OlTGh2Nsv0VNvd6G9PFah8gIspq8tmWYktS6UqXvQ1mSffcP4knlHlmrguuTi3UwguSquzs3OTs6QAM+hSfH6RY+Q84fvNtAZlk+iyAQVJGHGkDokbqIAyWfh36QPTVq2lbCi2ykpZrQpSSGx/xHPXPIeUG11bhy8mA89R14Z4lCiEfUSdO8590ULLJTeWZ077L+IcL5Bm6VxHZpfpdoFWFRxYFV6RzmvelPLXdkIP7TtNEunoWgMQFAAAEoG7IZeERbVt/VDJ71/wCn+8Dq1b44Ja6o1rg644SSompOZJhlSoSlQ2pUCQSlQ0ox0mGyYA7ihR4rCgBtJhxJhgGPaTAEhJhxJiOkw4FQBISYcSYjJVDoVAE+SnVtGqFU4jce8QRydvNuDC6AknI1zSf7eMCAVHsKgCyt3ZxKTFVs/QLOdW6FBrxRp5UgQVdu1rPJMutSkfujiHi0r8AYKJSecb7CyOWo8jlFzK3l/WI8U/2MCCeng3lcP8ATZ+1F9o4JqXSojUpq2vxQqor5Rdpv/ZkwKPoKeTrQWPNOKCV96TmRhdDa+TqR/UIqpnZ3ZzuaWijm2sgeVSn4QOVC+PUs/wAkBMrYL+ipYE8F9GfKoj2LmWSrsrT9l/8A/qIsxslYPYmHU/WShQ+AEQXNkPCbHiz/APJHasmvJ162oX2/2XBuTZSe0seL9PxjwqzbCZ7SpfLcp3GfLEYqU7ITvm0juZ/+SJjGyRn15lw/VQhPzxQdk35Hr6h/b/ZK/LWyJbJhKSR+qZp/EQB8YqbS2rqV1ZaXAJ0U4cR+4j+8EUrs0s9vNaFuU3rWQPJNBFtKsyMqKNIab+okFXmBXzjhts5cb5dtIzX0C2bR/OFaGz7X0TdPqDrK8QYJrC2Xy7dFTKumUPVHVbHhqrxNOUEMzeRIybRXmrL4CKWctN1zJSzT2RkPhr4wPY6aKeZcv8hA9ajEuno2kpyyCEABI8RkPCB60LTcdPWOW5I0/wB4hFUeSqBYwdUqGlKhKVDZMAdUqGlGEpUeFGAETDajCUY8EwB3FChusKAEI9JhQoAcTDghQoA9iHBChQA4I9pjkKAHBHoQoUAehEyyfznlChQAZsaR7MKFACji9IUKABO39fGKuFCgDyY8mOwoAbVHkxyFAHhUNqhQoAbVHgwoUANqjwqFCgDzChQoA//Z", // Replace with actual logo
          installments: [
            { period: "Down Payment", interest: "-", fee: "PKR 15,000" },
            { period: "6", interest: "0%", fee: "PKR 5,500" },
            { period: "12", interest: "0%", fee: "PKR 5,500" },
            { period: "24", interest: "0%", fee: "PKR 5,500" },
            { period: "36", interest: "0%", fee: "PKR 5,500" },
          ],
        },
        {
          name: "Alfalah Bank",
          logo: "data:image/jpeg;base64,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", // Replace with actual logo
          installments: [
            { period: "Down Payment", interest: "-", fee: "PKR 10,000" },
            { period: "6", interest: "0%", fee: "PKR 4,000" },
            { period: "12", interest: "0%", fee: "PKR 4,000" },
            { period: "24", interest: "0%", fee: "PKR 4,000" },
            { period: "36", interest: "0%", fee: "PKR 4,000" },
          ],
        },
      ];
    
      const [selectedBank, setSelectedBank] = useState(banks[0]);
      const scrollRef = useRef(null);

  const onDragScroll = (e) => {
    if (e.buttons !== 1) return; // Only scroll when left mouse button is held
    
    scrollRef.current.scrollLeft -= e.movementX;
  };

  const reviewScroll = useRef(null);

  const onDragReviewScroll = (e) => {
    if (e.buttons !== 1) return;
    
    reviewScroll.current.scrollLeft -= e.movementX;
  };
  const heroSecScroll = useRef(null);

  const onDragheroSecScroll = (e) => {
    if (e.buttons !== 1) return;
    heroSecScroll.current.scrollLeft -= e.movementX;
  };
  
  const store = useRef(null);
  const onDragScroll1 = (e, ref) => {
  if (e.buttons !== 1 || !ref.current) return;
  ref.current.scrollLeft -= e.movementX;
};


  const allReviews = [
    { id: 1, img: "https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", rating: 4.3 },
    { id: 2, img: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", rating: 4.3 },
    { id: 3, img: "https://plus.unsplash.com/premium_photo-1675186049222-0b5018db6ce9?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", rating: 4.3 },
    { id: 4, img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1336&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", rating: 4.3 },
    { id: 5, img: "https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", rating: 4.3 },
    { id: 6, img: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", rating: 4.3 },
    { id: 7, img: "https://plus.unsplash.com/premium_photo-1675186049222-0b5018db6ce9?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", rating: 4.3 },
    { id: 8, img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1336&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", rating: 4.3 },
    
  ];

  const [openPopup, setOpenPopup] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Handle Open Popup
  const handleOpen = (popupName) => {
    if (openPopup === popupName) {
      handleClose(); // If same popup clicked, close it
    } else {
      setOpenPopup(popupName);
      setTimeout(() => setIsAnimating(true), 10);
    }
  };
  
  // Handle Close Popup
  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => setOpenPopup(null), 300);
  };
  


  return (
    <>
    
      
      {!isMobile ? (
        <div className="flex flex-col md:flex-row p-3 xl:p-6 gap-3 2xl:gap-6 max-w-[1920px] mx-auto">
        <div className="w-full md:w-[68%] lg:w-[78%] ">
        <div className="flex items-start flex-col lg:flex-row gap-3 xl:gap-6 ">
        {/* Left Section - Images */}
        <div className="flex lg:w-max flex-row-reverse gap-2 xl:gap-4 lg:sticky top-[8%]">
          {/* <img
            src={mainImage}
            alt="Product"
            className="w-[85%] lg:w-[80%] xl:w-[86%] h-96 object-cover rounded-lg shadow-lg"
          /> */}
          {mainMedia.type === "video" ? (
    <video controls className="w-[85%] lg:w-[80%] xl:w-[86%] h-96 object-cover rounded-lg shadow-lg">
      <source src={mainMedia.src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  ) : (
    <img
      src={mainMedia.src}
      alt="Product"
      className="w-[85%] lg:w-[80%] xl:w-[86%] h-96 object-cover rounded-lg shadow-lg"
    />
  )}
<div className="flex flex-col gap-2">
  {thumbnails.map((item, index) => (
    item.type === "video" ? (
      <video
        key={index}
        onClick={() => setMainMedia(item)} // Fixing undefined variable issue
        className={`w-16 h-16 object-cover rounded-md cursor-pointer border-1 
        ${mainMedia.src === item.src ? "border-[#EEA500]" : "border-transparent"}`}
      >
        <source src={item.src} type="video/mp4" />
      </video>
    ) : (
      <img
        key={index}
        src={item.src} // Fixing incorrect src reference
        alt="Thumbnail"
        className={`w-16 h-16 object-cover rounded-md cursor-pointer border-1 
        ${mainMedia.src === item.src ? "border-[#EEA500]" : "border-transparent"}`}
        onClick={() => setMainMedia(item)} // Correct function call
      />
    )
  ))}
</div>

        </div>

        {/* Right Section - Product Details */}
        <div className="lg:w-max space-y-2 2xl:space-y-4">
          <div className="hidden md:flex bg-[#FEE4E2] items-center px-3 py-2 rounded-lg">
            <img src={electricity} className="w-8 2xl:w-10" alt="" />
            <div className="ml-2">
              <p className="text-xs font-semibold 2xl:font-normal 2xl:text-sm">Upcoming Price</p>
              <p className="text-lg 2xl:text-xl font-semibold">PKR 6,500</p>
            </div>
            <span className="text-red-500 font-bold ml-auto text-2xl 2xl:text-3xl">
              FLASH SALE
            </span>
          </div>

          <div className="flex justify-between" >
          <h1 className="text-2xl 2xl:text-3xl font-bold text-[#002882]">PKR 7,100</h1>
          <div className="flex items-center space-x-2 2xl:text-lg text-md font-semibold">
      <span>ENDS:</span>
      <div className="flex space-x-1">
        {/* <div className="bg-[#F04438] text-white px-2 2xl:px-3 py-1 text-sm 2xl:text-base rounded-[3px] ">{timeLeft.days}</div>
        <span>:</span> */}
        <div className="bg-[#F04438] text-white px-2 2xl:px-3 py-1 text-sm 2xl:text-base rounded-[3px]">{timeLeft.hours.toString().padStart(2, "0")}</div>
        <span>:</span>
        <div className="bg-[#F04438] text-white px-2 2xl:px-3 py-1 text-sm 2xl:text-base rounded-[3px]">{timeLeft.minutes.toString().padStart(2, "0")}</div>
        <span>:</span>
        <div className="bg-red-500 text-white px-2 2xl:px-3 py-1 text-sm 2xl:text-base rounded-[3px]">{timeLeft.seconds.toString().padStart(2, "0")}</div>
      </div>
    </div>
          </div>
          <div className="flex items-center">
            <del className="text-[#999] text-lg md:text-xl 2xl:text-2xl">PKR 8,500</del>
            <span className="ml-2 text-[#F04438] text-sm md:text-md 2xl:text-lg">26% OFF</span>
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
          <p className="text-[#1A1A1A] text-lg 2xl:text-xl font-semibold leading-6">
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

          {/* Size & Shipping */}
          <div className="flex gap-4">
            <Express />
            <FreeShip />
          </div>

          {/* Quantity & Buttons */}
          <div className="flex items-center 2xl:gap-2 mt-4 bg-[#FEF6E6] p-2 rounded-lg cursor-pointer" onClick={() => openModal("installmentDetail")}>
            <svg className="w-6 md:w-8 2xl:w-10"
              xmlns="http://www.w3.org/2000/svg"
              
              viewBox="0 0 36 36"
              fill="none"
            >
              <path
                d="M7.58864 11.9546C6.96068 11.9546 6.39167 11.5846 6.13694 11.0107C5.78112 10.2089 6.14262 9.27052 6.94437 8.91471L16.2767 4.77307C17.097 4.40898 18.0333 4.40898 18.8537 4.77307L28.1859 8.91471C28.76 9.16944 29.1299 9.73845 29.1299 10.3664C29.1299 11.2436 28.4188 11.9546 27.5417 11.9546H7.58864Z"
                fill="#EEA500"
                stroke="#002882"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M9 15.9C9 15.4029 9.40294 15 9.9 15H11.1C11.5971 15 12 15.4029 12 15.9V26.1C12 26.5971 11.5971 27 11.1 27H9.9C9.40294 27 9 26.5971 9 26.1V15.9Z"
                fill="#FEF6E6"
                stroke="#002882"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M18.6 15H17.4C16.9029 15 16.5 15.4029 16.5 15.9V26.1C16.5 26.5971 16.9029 27 17.4 27H18.6C19.0971 27 19.5 26.5971 19.5 26.1V15.9C19.5 15.4029 19.0971 15 18.6 15Z"
                fill="#FEF6E6"
                stroke="#002882"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M24 15.9C24 15.4029 24.4029 15 24.9 15H26.1C26.5971 15 27 15.4029 27 15.9V26.1C27 26.5971 26.5971 27 26.1 27H24.9C24.4029 27 24 26.5971 24 26.1V15.9Z"
                fill="#FEF6E6"
                stroke="#002882"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M16.5081 30.7639H6.84375"
                stroke="#002882"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M23.0196 31.1499C26.6159 31.1499 29.5313 28.2345 29.5313 24.6381C29.5313 21.0417 26.6159 18.1263 23.0196 18.1263C19.4232 18.1263 16.5078 21.0417 16.5078 24.6381C16.5078 28.2345 19.4232 31.1499 23.0196 31.1499Z"
                fill="#EEA500"
                stroke="#002882"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M20.9957 23.7466C21.7151 23.7466 22.2981 23.1635 22.2981 22.4441C22.2981 21.7249 21.7151 21.1418 20.9957 21.1418C20.2764 21.1418 19.6934 21.7249 19.6934 22.4441C19.6934 23.1635 20.2764 23.7466 20.9957 23.7466Z"
                fill="#FEF6E6"
                stroke="#002882"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M25.2819 28.5425C26.0012 28.5425 26.5842 27.9594 26.5842 27.24C26.5842 26.5208 26.0012 25.9377 25.2819 25.9377C24.5627 25.9377 23.9795 26.5208 23.9795 27.24C23.9795 27.9594 24.5627 28.5425 25.2819 28.5425Z"
                fill="#FEF6E6"
                stroke="#002882"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M25.6458 21.9211L20.4297 27.8013"
                stroke="#002882"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <p className="text-[#1A1A1A] inline text-sm 2xl:text-base">
              Installment Offers available up to 36 months
              <Link className="text-[#002882] underline inline ml-1" >
                View more details
              </Link>
            </p>
            {activeModal === "installmentDetail" && (
             <div className="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.4)] 
              bg-opacity-50 px-5 md:p-0 z-1050"
             onClick={closeModal}
           >
                <div
                  className="bg-[#FCFCFC] w-[600px] p-5 flex flex-col items-start gap-4 rounded-2xl shadow-lg relative"
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
                  <h2 className="text-xl font-semibold">Easy Monthly Instalments</h2>
                  <div className="w-full flex gap-4">
      {/* Left Side - Bank Logos */}
      
      <div className="flex flex-col gap-4">
        {banks.map((bank, index) => (
          <img
            key={index}
            src={bank.logo}
            alt={bank.name}
            className={`w-12 h-12 rounded-md cursor-pointer transition ${
              selectedBank.name === bank.name ? "border-1 border-[#EEA500]" : ""
            }`}
            onClick={() => setSelectedBank(bank)}
          />
        ))}
      </div>

      {/* Right Side - Bank Details */}
      <div className="flex-1">
       

        {/* Selected Bank Name */}
        <div className="flex items-center gap-3 mt-3">
          
          <span className="font-semibold">{selectedBank.name}</span>
        </div>

        {/* Table */}
        <div className="mt-4 overflow-hidden border border-[#DBDBDB;] rounded-lg">
          <table className="w-full text-left">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="p-3">Time Period</th>
                <th className="p-3">Interest</th>
                <th className="p-3">Processing Fee</th>
              </tr>
            </thead>
            <tbody>
              {selectedBank.installments.map((item, index) => (
                <tr key={index} className="border-t border-[#DBDBDB;]">
                  <td className="p-3">{item.period}</td>
                  <td className="p-3">{item.interest}</td>
                  <td className="p-3">{item.fee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
                </div>
              </div>
            )}
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

        {/* New Section - Delivery Details */}
       
      </div>
          <div className="flex gap-4 mt-4 bg-[#F2F2F2] h-[1px]"></div>
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
            <div className="flex items-center gap-2 bg-white border border-[#F2F2F2] rounded-lg p-6 w-full ">
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
            <div className="bg-white border border-[#F2F2F2] rounded-lg p-6 w-full ">
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
                  className="mb-4 w-full lg:w-[49%] p-4 bg-white border rounded-lg border-[#F2F2F2] flex flex-col items-start gap-2 2xl:gap-4"
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
            <div className="flex gap-4 mt-4 bg-[#F2F2F2] h-[1px]"></div>
            {/* Specification Section */}
            
          </div>
          <h2 className="text-xl 2xl:text-2xl font-semibold text-black mb-4 mt-2">Related Items</h2>
          <ProductsCarousel products={products} CardType="DetailProductCard" />
          <div className="flex gap-4 mt-4 bg-[#F2F2F2] h-[1px]"></div>

          <div className="mt-2">
      {/* Title */}
      <h2 className="text-xl 2xl:text-2xl font-semibold text-black mb-4 mt-2">Specifications</h2>

      {/* Product Description */}
      <div className="flex flex-col xl:flex-row gap-2 xl:gap-4 mb-5">


       
<div className="border border-[#999] w-[100%] my-2 xl:my-0 rounded-lg overflow-hidden">
        <table className="w-full text-sm text-left text-[#999]">
          <tbody>
            <tr className="border-b border-[#999]">
              <td className="px-4 py-2 font-semibold bg-gray-100 w-[25%]">Expandable Memory Type</td>
              <td className="px-4 py-2">No Expandable Memory</td>
            </tr>
            <tr className="border-b border-[#999]">
              <td className="px-4 py-2 font-semibold bg-gray-100">RAM Size</td>
              <td className="px-4 py-2">6 GB</td>
            </tr>
            <tr className="border-b border-[#999]">
              <td className="px-4 py-2 font-semibold bg-gray-100">Secondary Camera Resolution</td>
              <td className="px-4 py-2">12 MP</td>
            </tr>
            <tr >
              <td className="px-4 py-2 font-semibold bg-gray-100">Battery Size</td>
              <td className="px-4 py-2">Specifications</td>
            </tr>
            
          </tbody>
        </table>
      </div>
       </div>
       <ViewMoreButton />
    </div>
          <div className="mt-3">
      {/* Title */}
      <h2 className="text-xl 2xl:text-2xl font-semibold text-black mb-4 mt-2">Description</h2>

      {/* Product Description */}
      <div className="flex flex-col xl:flex-row gap-2 xl:gap-4">


       <div className="w-[100%] xl:w-[60%]">
       <h3 className="2xl:text-lg font-semibold text-[#666] mb-2">Product Description</h3>
       <p className="text-gray-700 text-sm leading-relaxed">
          When it's colder than the far side of the moon and spitting rain too, you've still got 
          to look good. From water-repellent leather to a rugged outsole, the Lunar Force 1 adapts 
          ACG-style, so you can stop your flame burning when the weather hits. Metal lace hardware 
          and extended tongue bring mountain boot toughness, while the streamlined toe design gives 
          your look the edge.
        </p>

        {/* Benefits Section */}
        <h3 className="text-lg font-semibold text-gray-900 mt-4">Benefits</h3>
        <ul className="list-none text-gray-700 text-sm space-y-2 mt-2">
  {[
    "Durable leather is easily cleanable so you can keep your look fresh.",
    "Water-repellent finish and internal membrane help keep your feet dry.",
    "Toe piece with star pattern adds durability.",
    "Synthetic insulation helps keep you warm.",
    "Originally designed for performance hoops, the Air unit delivers lightweight cushioning.",
    "Plush tongue wraps over the ankle to help keep out the moisture and cold.",
    "Rubber outsole with aggressive traction pattern adds durable grip.",
    "Durable leather is easily cleanable so you can keep your look fresh."
  ].map((text, index) => (
    <li key={index} className="flex gap-2 items-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
        <rect y="0.266357" width="20" height="20" rx="10" fill="#E6EAF3"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M14.247 6.42474L8.28033 12.1831L6.69699 10.4914C6.40533 10.2164 5.94699 10.1997 5.61366 10.4331C5.28866 10.6747 5.19699 11.0997 5.39699 11.4414L7.27199 14.4914C7.45533 14.7747 7.77199 14.9497 8.13033 14.9497C8.47199 14.9497 8.79699 14.7747 8.98033 14.4914C9.28033 14.0997 15.0053 7.27474 15.0053 7.27474C15.7553 6.50808 14.847 5.83308 14.247 6.41641V6.42474Z" fill="#002882"/>
      </svg>
      {text}
    </li>
  ))}
</ul>
       </div>
<div className="border border-[#999] w-[100%] my-2 xl:my-0 xl:w-[40%] rounded-lg overflow-hidden shadow">
        <table className="w-full text-sm text-left text-[#999]">
          <tbody>
            <tr className="border-b border-[#999]">
              <td className="px-4 py-2 font-semibold bg-gray-100 w-[25%]">Expandable Memory Type</td>
              <td className="px-4 py-2">No Expandable Memory</td>
            </tr>
            <tr className="border-b border-[#999]">
              <td className="px-4 py-2 font-semibold bg-gray-100">RAM Size</td>
              <td className="px-4 py-2">6 GB</td>
            </tr>
            <tr className="border-b border-[#999]">
              <td className="px-4 py-2 font-semibold bg-gray-100">Secondary Camera Resolution</td>
              <td className="px-4 py-2">12 MP</td>
            </tr>
            <tr className="border-b border-[#999]">
              <td className="px-4 py-2 font-semibold bg-gray-100">Battery Size</td>
              <td className="px-4 py-2">Specifications</td>
            </tr>
            <tr className="border-b border-[#999]">
              <td className="px-4 py-2 font-semibold bg-gray-100">Charging Type</td>
              <td className="px-4 py-2">Lightning Port</td>
            </tr>
            <tr className="border-b border-[#999]">
              <td className="px-4 py-2 font-semibold bg-gray-100">SIM Type</td>
              <td className="px-4 py-2">Nano + eSIM</td>
            </tr>
            <tr className="border-b border-[#999]">
              <td className="px-4 py-2 font-semibold bg-gray-100">SIM Count</td>
              <td className="px-4 py-2">Dual SIM</td>
            </tr>
            <tr className="border-b border-[#999]">
              <td className="px-4 py-2 font-semibold bg-gray-100">Operating System</td>
              <td className="px-4 py-2">iOS</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-semibold bg-gray-100">Internal Memory</td>
              <td className="px-4 py-2">256 GB</td>
            </tr>
          </tbody>
        </table>
      </div>
       </div>
     
    </div>

    <div className="flex items-center justify-between bg-[#F2F2F2] p-3 rounded-lg shadow-sm w-full mt-4 mx-auto">
      {/* Left Side - Store Info */}
      <div className="flex items-center gap-3">
        {/* Profile Image */}
        <img
          src="https://plus.unsplash.com/premium_photo-1689565611422-b2156cc65e47?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Profile"
          className="w-[50px] h-[50px] rounded-full object-cover"
        />

        {/* Store Details */}
        <div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-800">Zahir | Men's Clothing</span>
            <span className="flex gap-1 text-xs bg-[#E6EAF3] text-[#002882] font-medium px-2 py-1 rounded-md"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
  <path d="M15.3335 8.26636L13.7068 6.40636L13.9335 3.94636L11.5268 3.39969L10.2668 1.26636L8.00014 2.23969L5.73348 1.26636L4.47348 3.39302L2.06681 3.93302L2.29348 6.39969L0.666809 8.26636L2.29348 10.1264L2.06681 12.593L4.47348 13.1397L5.73348 15.2664L8.00014 14.2864L10.2668 15.2597L11.5268 13.133L13.9335 12.5864L13.7068 10.1264L15.3335 8.26636ZM6.25348 10.9397L4.66681 9.33969C4.60501 9.27802 4.55598 9.20476 4.52252 9.12411C4.48907 9.04346 4.47185 8.957 4.47185 8.86969C4.47185 8.78238 4.48907 8.69592 4.52252 8.61527C4.55598 8.53463 4.60501 8.46137 4.66681 8.39969L4.71348 8.35302C4.97348 8.09302 5.40014 8.09302 5.66014 8.35302L6.73348 9.43302L10.1668 5.99302C10.4268 5.73302 10.8535 5.73302 11.1135 5.99302L11.1601 6.03969C11.4201 6.29969 11.4201 6.71969 11.1601 6.97969L7.21348 10.9397C6.94014 11.1997 6.52014 11.1997 6.25348 10.9397Z" fill="#002882"/>
</svg> Verified</span>
            <span className="flex gap-1 text-xs bg-[#FCEDCD] text-[#EEA500] font-medium px-2 py-1 rounded-md"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
  <path d="M7.70083 7.20536C7.8231 6.95759 8.17636 6.95759 8.29863 7.20536L9.29366 9.22149C9.34223 9.31989 9.4361 9.38809 9.54466 9.40386L11.7696 9.72716C12.043 9.76689 12.1522 10.1029 11.9543 10.2957L10.3444 11.8651C10.2658 11.9417 10.2299 12.052 10.2485 12.1601L10.6286 14.3761C10.6753 14.6484 10.3894 14.856 10.1449 14.7275L8.15483 13.6812C8.05773 13.6302 7.94173 13.6302 7.84463 13.6812L5.85456 14.7275C5.61003 14.856 5.3242 14.6484 5.3709 14.3761L5.75096 12.1601C5.76953 12.052 5.73366 11.9417 5.6551 11.8651L4.04513 10.2957C3.84726 10.1029 3.95646 9.76689 4.22986 9.72716L6.4548 9.40386C6.56336 9.38809 6.65723 9.31989 6.7058 9.22149L7.70083 7.20536Z" fill="#FCEDCD" stroke="#EEA500" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M11.9996 1.59973H3.99957V4.93306L7.99957 6.59973L11.9996 4.93306V1.59973Z" fill="#FCEDCD" stroke="#EEA500" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
</svg> Top Rated</span>
          </div>
          <a href="/vb-main/#/SellerStore" className="text-[#002882] text-sm underline">Visit Store</a>
        </div>
      </div>

      {/* Right Side - Reviews & Follow Button */}
      <div className="flex items-center gap-4">
        <span className="text-gray-600 text-sm">67 Reviews | 97% Positive rating | 221 Followers</span>
        <button className="bg-dark-blue text-white px-4 py-1 rounded-full flex items-center gap-2">
          <span className="">+</span> Follow
        </button>
      </div>
    </div>

    <div className="flex flex-wrap gap-4 mt-4">
   
                  <ProductsCarousel products={products} CardType="DetailProductCard" />
                  </div>
        </div>

        <div className="w-full md:w-[35%] flex flex-col gap-2 flex-1">

        <div className="border rounded-lg border-[#F2F2F2]">
          <div className="px-2 2xl:px-3 py-4 2xl:py-6">
            <div className="flex items-center justify-between">
              <span className="flex text-[#333] font-bold items-center text-xs xl:text-sm 2xl:text-base">
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
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.6654 17.4998V13.3332C11.6654 12.8911 11.4898 12.4672 11.1772 12.1547C10.8646 11.8421 10.4407 11.6665 9.9987 11.6665C9.55667 11.6665 9.13275 11.8421 8.82019 12.1547C8.50763 12.4672 8.33203 12.8911 8.33203 13.3332V17.4998"
                    stroke="#1A1A1A"
                    strokeWidth="1.25"
                  />
                </svg>{" "}
                Sold By
              </span>
              <p className="text-[#1A1A1A] inline text-xs xl:text-sm 2xl:text-base">
                Zahir Clothing
                <Link className="text-[#002882] underline inline ml-1">
                  Visit
                </Link>
              </p>
            </div>

            <div className="flex gap-4 my-4 bg-[#F2F2F2] h-[1px]"></div>

            <div className="flex items-center justify-between">
              <span className="flex text-[#333] font-bold items-center text-xs xl:text-sm 2xl:text-base text-nowrap">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <g clipPath="url(#clip0_6998_126789)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
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
              <p className="text-[#1A1A1A] inline text-xs xl:text-sm 2xl:text-base text-nowrap">
                Johar town, Lahore
                <Link className="text-[#002882] underline inline ml-1">
                  Change
                </Link>
              </p>
            </div>
          </div>

          <div className="px-3 py-2 bg-gradient-to-b from-[#FCEDCD] to-[#FFF] flex gap-2 items-center">
            <span className="text-nowrap bg-[linear-gradient(90deg,#0032A3_0%,#1A51CB_25%,#3B66C8_50%,#1A51CB_75%,#0032A3_100%)] rounded-sm py-1 px-2 text-[#FCFCFC] text-xs xl:text-sm 2xl:text-base">
              VB MALL
            </span>
            <span className="text-nowrap text-[#1A1A1A] font-semibold text-xs xl:text-sm 2xl:text-base">
              ValueBox Commitment
            </span>
          </div>

          <div className="px-2 2xl:px-3 py-2 2xl:py-5 flex flex-col gap-3 2xl:gap-5">
            <button
              className="flex justify-between cursor-pointer"
              onClick={() => openModal("warentyReturn")}
            >
              <span className="flex items-center gap-1 text-xs xl:text-sm 2xl:text-base">
                <svg className="w-3 xl:w-4 2xl:w-5"
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
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {activeModal === "warentyReturn" && (
             <div className="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.4)] 
              bg-opacity-50 px-5 md:p-0 z-1050"
             onClick={closeModal}
           >
                <div
                  className="bg-[#FCFCFC] w-[600px] p-5 flex flex-col items-start gap-4 rounded-2xl shadow-lg relative"
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
                  <div className="w-full">
      {accordianItems.map((item, index) => (
        <div key={index}>
          <button
            onClick={() => toggleAccordion(index)}
            className="flex justify-between w-full p-4 text-left font-semibold"
          >
            
            <span className="flex gap-1">{item.icon}{item.title}</span>
            <span
              className={`h-fit text-xl transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="10" viewBox="0 0 20 10" fill="none">
  <g clipPath="url(#clip0_7006_127218)">
    <path fillRule="evenodd" clipRule="evenodd" d="M9.4081 8.46428L4.69393 3.75011L5.87226 2.57178L9.99727 6.69678L14.1223 2.57178L15.3006 3.75011L10.5864 8.46428C10.4302 8.6205 10.2182 8.70827 9.99727 8.70827C9.77629 8.70827 9.56437 8.6205 9.4081 8.46428Z" fill="#1A1A1A"/>
  </g>
  <defs>
    <clipPath id="clip0_7006_127218">
      <rect width="10" height="20" fill="white" transform="translate(20) rotate(90)"/>
    </clipPath>
  </defs>
</svg>
            </span>
          </button>
          {openIndex === index && item.content && (
            <div className="p-4 text-gray-600 transition-transform duration-300">{item.content}</div>
          )}
        </div>
      ))}
    </div>
                </div>
              </div>
            )}

            <button
              className="flex justify-between cursor-pointer"
              onClick={() => openModal("freeShipping")}
            >
              <span className="flex items-center gap-1 text-xs xl:text-sm 2xl:text-base">
                <svg className="w-4 md:w-4 xl:w-7"
                  xmlns="http://www.w3.org/2000/svg"
                  
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16 15.76V6.25C16 5.71957 15.7893 5.21086 15.4142 4.83579C15.0391 4.46071 14.5304 4.25 14 4.25H4C3.46957 4.25 2.96086 4.46071 2.58579 4.83579C2.21071 5.21086 2 5.71957 2 6.25V15.25C2 15.5152 2.10536 15.7696 2.29289 15.9571C2.48043 16.1446 2.73478 16.25 3 16.25H3.71C3.90493 15.8049 4.22534 15.4263 4.63204 15.1604C5.03874 14.8945 5.5141 14.7529 6 14.7529C6.4859 14.7529 6.96126 14.8945 7.36796 15.1604C7.77466 15.4263 8.09507 15.8049 8.29 16.25H15.71C15.783 16.074 15.88 15.909 16 15.76ZM16 15.76C16.2599 15.4075 16.6081 15.1298 17.0096 14.9548C17.4111 14.7799 17.8517 14.714 18.2868 14.7637C18.7219 14.8134 19.1362 14.9769 19.4879 15.2379C19.8396 15.4989 20.1163 15.848 20.29 16.25H22V13.36C22.0004 12.6343 21.8033 11.9223 21.43 11.3L20.2 9.25L19.29 7.74C19.2015 7.59072 19.0757 7.46705 18.9249 7.38114C18.7741 7.29522 18.6035 7.25003 18.43 7.25H16V15.76Z"
                    stroke="#1A1A1A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11 11.25H6M11 8.25H6M8.5 17.25C8.50044 17.6219 8.41789 17.9892 8.25839 18.3252C8.09888 18.6611 7.86642 18.9573 7.57796 19.192C7.2895 19.4268 6.9523 19.5942 6.59094 19.6821C6.22957 19.77 5.85315 19.7762 5.48909 19.7002C5.12504 19.6242 4.78253 19.4679 4.48652 19.2428C4.19051 19.0176 3.94846 18.7293 3.77802 18.3987C3.60757 18.0682 3.51302 17.7038 3.50125 17.332C3.48948 16.9603 3.5608 16.5907 3.71 16.25C3.9402 15.7244 4.34422 15.2939 4.85423 15.031C5.36424 14.768 5.94919 14.6884 6.51091 14.8057C7.07262 14.923 7.57689 15.2299 7.93908 15.675C8.30127 16.1201 8.49932 16.6762 8.5 17.25ZM20.5 17.25C20.5004 17.6219 20.4179 17.9892 20.2584 18.3252C20.0989 18.6611 19.8664 18.9573 19.578 19.192C19.2895 19.4268 18.9523 19.5942 18.5909 19.6821C18.2296 19.77 17.8531 19.7762 17.4891 19.7002C17.125 19.6242 16.7825 19.4679 16.4865 19.2428C16.1905 19.0176 15.9485 18.7293 15.778 18.3987C15.6076 18.0682 15.513 17.7038 15.5013 17.332C15.4895 16.9603 15.5608 16.5907 15.71 16.25C15.783 16.074 15.88 15.909 16 15.76C16.2599 15.4075 16.6081 15.1298 17.0096 14.9548C17.4111 14.7799 17.8517 14.714 18.2868 14.7637C18.7219 14.8134 19.1362 14.9769 19.4879 15.2379C19.8396 15.4989 20.1163 15.848 20.29 16.25C20.43 16.565 20.502 16.906 20.5 17.25Z"
                    stroke="#1A1A1A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {activeModal === "freeShipping" && (
              <div className="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.4)] 
                 bg-opacity-50 px-5 md:p-0 z-1050"
                onClick={closeModal}
              >
                <div
                  className="bg-[#FCFCFC] w-[600px] p-5 flex flex-col items-start gap-4 rounded-2xl shadow-lg relative"
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
                  <h2 className="text-xl font-semibold">Shipping Method</h2>
                  <div className="space-y-4 w-full">
      {deliveryOptions.map((option) => (
        <label
          key={option.id}
          className={`block p-4 rounded-lg bg-[#F2F2F2] cursor-pointer transition-all border-0 ${
            selected === option.id ? "" : "border-gray-300"
          }`}
        >
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium text-gray-800">
                {option.title.includes("PKR") ? (
                  <>
                    Free Shipping over{" "}
                    <span className="text-[#0032A3] font-semibold">PKR 2,570</span>
                  </>
                ) : (
                  option.title
                )}
              </h3>
              <p className="text-sm text-[#1A1A1A]">
                Standard Delivery:{" "}
                <span className="font-bold">{option.extraBold}</span>
              </p>
            </div>
            <input
              type="radio"
              name="shipping"
              value={option.id}
              checked={selected === option.id}
              onChange={() => setSelected(option.id)}
              className="w-5 h-5 accent-[#0032A3] cursor-pointer"
            />
          </div>
          <button
            className="mt-2 px-4 py-2 text-sm text-gray-500 bg-[#FCFCFC] rounded-md cursor-not-allowed"
            disabled
          >
            Tracking Available
          </button>
        </label>
      ))}
    </div>
                </div>
              </div>
            )}
            <div className="flex justify-between">
              <span className="flex items-center gap-1 text-xs xl:text-sm 2xl:text-base">
                <svg className="w-4 xl:w-5 2xl:w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12Z"
                    stroke="#1A1A1A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 7V12L15 15"
                    stroke="#1A1A1A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>{" "}
                Standard Delivery:{" "}
                <span className="font-semibold">DEC 06 - 16</span>
              </span>
            </div>
            <div className="flex justify-between">
              <span className="flex gap-1 text-xs xl:text-sm 2xl:text-base">
                <svg className="w-4 xl:w-5 2xl:w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M18.5 14.01L18.51 13.999M7.5 14.01L7.51 13.999M4 18V10C4 9.46957 4.21071 8.96086 4.58579 8.58579C4.96086 8.21071 5.46957 8 6 8H20C20.5304 8 21.0391 8.21071 21.4142 8.58579C21.7893 8.96086 22 9.46957 22 10V18C22 18.5304 21.7893 19.0391 21.4142 19.4142C21.0391 19.7893 20.5304 20 20 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18Z"
                    stroke="#1A1A1A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 16H3C2.46957 16 1.96086 15.7893 1.58579 15.4142C1.21071 15.0391 1 14.5304 1 14V6C1 5.46957 1.21071 4.96086 1.58579 4.58579C1.96086 4.21071 2.46957 4 3 4H17C17.5304 4 18.0391 4.21071 18.4142 4.58579C18.7893 4.96086 19 5.46957 19 6V8M13 16C12.4696 16 11.9609 15.7893 11.5858 15.4142C11.2107 15.0391 11 14.5304 11 14C11 13.4696 11.2107 12.9609 11.5858 12.5858C11.9609 12.2107 12.4696 12 13 12C13.5304 12 14.0391 12.2107 14.4142 12.5858C14.7893 12.9609 15 13.4696 15 14C15 14.5304 14.7893 15.0391 14.4142 15.4142C14.0391 15.7893 13.5304 16 13 16Z"
                    stroke="#1A1A1A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>{" "}
                Cash on Delivery Available
              </span>
            </div>
            <button className="flex justify-between" onClick={() => openModal("deliveryGuarantee")}>
              <span className="flex items-center gap-1 text-xs xl:text-sm 2xl:text-base">
                <svg className="w-4 xl:w-5 2xl:w-6"
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
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {activeModal === "deliveryGuarantee" && (
              <div className="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.4)] 
                bg-opacity-50 px-5 md:p-0 z-1050"
                onClick={closeModal}
              >
                <div
                  className="bg-[#FCFCFC] w-[600px] p-5 flex flex-col items-start gap-4 rounded-2xl shadow-lg relative"
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
                  <h2 className="text-xl font-semibold">Delivery Guarantee</h2>
                  <div className=" text-gray-800">
      {/* Delivery Guarantee */}

      <ul className="mt-2 space-y-2">
        <li className="flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M6 12L10.2426 16.2426L18.7275 7.75732" stroke="#12B76A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
          <span>Refund if no delivery in 30 days</span>
        </li>
        <li className="flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M6 12L10.2426 16.2426L18.7275 7.75732" stroke="#12B76A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
          <span>Refund if items damaged</span>
        </li>
        <li className="flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M6 12L10.2426 16.2426L18.7275 7.75732" stroke="#12B76A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
          <span>Refund if package lost</span>
        </li>
      </ul>

      {/* Valuebox Assurance */}
      <h2 className="text-lg font-bold mt-6">Valuebox Assurance</h2>
      <ul className="mt-2 space-y-2">
        <li className="flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 22.4967C12 22.4967 20.9986 19.4971 20.9986 11.9983" stroke="#EEA500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M20.9986 11.9984V2.99977C20.9986 2.99977 17.9991 1.5 12 1.5" stroke="#EEA500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M11.9996 22.4967C11.9996 22.4967 3.00101 19.4971 3.00101 11.9983" stroke="#EEA500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M3.00098 11.9984V2.99977C3.00098 2.99977 6.00051 1.5 11.9996 1.5" stroke="#EEA500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M17.9984 5.99927C11.9993 10.4986 10.4995 16.4976 10.4995 16.4976C10.4995 16.4976 8.99977 14.7075 7.5 13.4981" stroke="#EEA500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
          <span>We provide safe and secure payment method</span>
        </li>
        <li className="flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M6 22C5.45 22 4.97933 21.8043 4.588 21.413C4.19667 21.0217 4.00067 20.5507 4 20V10C4 9.45 4.196 8.97933 4.588 8.588C4.98 8.19667 5.45067 8.00067 6 8H7V6C7 4.61667 7.48767 3.43767 8.463 2.463C9.43833 1.48833 10.6173 1.00067 12 1C13.3833 1 14.5627 1.48767 15.538 2.463C16.5133 3.43833 17.0007 4.61733 17 6V8H18C18.55 8 19.021 8.196 19.413 8.588C19.805 8.98 20.0007 9.45067 20 10V20C20 20.55 19.8043 21.021 19.413 21.413C19.0217 21.805 18.5507 22.0007 18 22H6ZM6 20H18V10H6V20ZM12 17C12.55 17 13.021 16.8043 13.413 16.413C13.805 16.0217 14.0007 15.5507 14 15C14 14.45 13.8043 13.9793 13.413 13.588C13.0217 13.1967 12.5507 13.0007 12 13C11.45 13 10.9793 13.196 10.588 13.588C10.1967 13.98 10.0007 14.4507 10 15C10 15.55 10.196 16.021 10.588 16.413C10.98 16.805 11.4507 17.0007 12 17ZM9 8H15V6C15 5.16667 14.7083 4.45833 14.125 3.875C13.5417 3.29167 12.8333 3 12 3C11.1667 3 10.4583 3.29167 9.875 3.875C9.29167 4.45833 9 5.16667 9 6V8Z" fill="#EEA500"/>
</svg>
          <span>We ensure your Security & Privacy.</span>
        </li>
        <li className="flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M14.4847 5.22666C14.0685 5.22966 13.6552 5.24991 13.2188 5.36691C12.7432 5.49599 12.292 5.70196 11.883 5.97666C11.3085 5.63916 10.752 5.36166 10.2188 5.29641C9.5565 5.21466 8.9415 5.25891 8.22675 5.27391C7.37925 5.29116 6.8265 5.72391 5.9295 6.07041C5.03325 6.41541 3.879 6.74991 2.25 6.74991H1.5V13.9687L1.92225 14.1794L3.3045 14.8597L8.22675 20.3437L8.25 20.3669C8.8125 20.9234 9.5715 21.0614 10.242 21.0232C10.9132 20.9857 11.5433 20.7892 12.0465 20.4847C13.1543 19.8164 16.1715 17.7187 16.1715 17.7187L16.242 17.6714L16.2892 17.6249C16.6462 17.2702 16.8255 16.8374 16.9455 16.3829L19.8278 14.9294L21.984 14.2034L22.5 14.0384V6.74991H21.75C20.4893 6.75853 19.2391 6.51951 18.0705 6.04641C17.1735 5.69616 16.629 5.26791 15.7725 5.24991C15.315 5.24091 14.9002 5.22366 14.4847 5.22666ZM14.5072 6.72666C14.8448 6.72366 15.2347 6.74166 15.7267 6.74991C15.8055 6.75291 16.5262 7.06041 17.5312 7.45341C18.381 7.78716 19.5615 8.08341 21 8.17941V12.9607L19.2653 13.5472H19.2188L19.1715 13.5697L16.899 14.7187C16.7784 14.3706 16.5868 14.0514 16.3365 13.7812L16.2892 13.7107L13.1017 9.79716L12.633 9.21066L12.0465 9.67941L10.0312 11.3204C9.35475 11.7892 8.8065 11.6542 8.25 11.3909C8.08875 11.3144 8.09775 11.2912 7.96875 11.2034L11.391 8.36691L11.4375 8.32041C12.4537 7.31241 13.0785 6.96366 13.617 6.82041C13.887 6.74691 14.1705 6.72966 14.5072 6.72666ZM9.282 6.74991C9.53224 6.74048 9.78283 6.74825 10.032 6.77316C10.2285 6.79641 10.4513 6.96366 10.6418 7.03116C10.5653 7.10166 10.5097 7.14216 10.4303 7.21866L10.3837 7.26591L6.282 10.6634L5.649 11.1794L6.2115 11.7652C6.2115 11.7652 6.75375 12.3517 7.5945 12.7499C8.43525 13.1482 9.7335 13.3739 10.899 12.5624L10.9462 12.5152L12.399 11.3204L15.165 14.7187L15.1882 14.7659L15.2115 14.7884C15.7065 15.2782 15.6952 16.0484 15.2115 16.5472C15.2055 16.5524 15.2175 16.5644 15.2115 16.5697C15.2055 16.5734 15.1065 16.6319 15.0945 16.6409L14.1097 15.3044L12.891 16.1954L13.8525 17.4839C13.4625 17.7479 13.287 17.8859 12.8678 18.1642L11.8605 16.8044L10.641 17.6954L11.6025 18.9839C11.517 19.0364 11.3415 19.1542 11.274 19.1954C11.037 19.3387 10.5795 19.4999 10.1722 19.5232C9.789 19.5442 9.49575 19.4557 9.3525 19.3357L9.32925 19.3124L4.31325 13.7579L4.2195 13.6402L3 13.0312V8.17941C4.4325 8.08566 5.622 7.80141 6.46875 7.47666C7.47075 7.09266 8.18625 6.77616 8.27325 6.77316L9.282 6.74991Z" fill="#EEA500"/>
</svg>
          <span>We provide buyers protection so that they get their money back.</span>
        </li>
      </ul>
    </div>
                </div>
              </div>
            )}
          </div>

          <div className="px-3">
            <div className="flex gap-4 my-4 bg-[#F2F2F2] h-[1px]"></div>
            <span className="flex text-[#333] font-bold items-center text-xs md:text-sm xl:text-base">
              Select Quantity
            </span>
            <div className="flex items-center space-x-2 rounded-lg w-fit mt-4">
              <button
                className="px-1 py-1 bg-[#F2F2F2] text-white rounded-full disabled:opacity-50"
                onClick={decreaseQuantity}
                disabled={quantity === 1}
              >
                <svg className="w-5 md:w-6 xl:w-7"
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
              <span className="px-2 py-1 bg-white rounded-lg text-md md:text-lg xl:text-xl font-medium">
                {quantity}
              </span>
              <button
                className="px-1 py-1 bg-[#F2F2F2] text-white rounded-full"
                onClick={increaseQuantity}
              >
                <svg className="w-5 md:w-6 xl:w-7"
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

            <Link to="/Checkout" className="bg-[#002882] w-full flex items-center justify-center text-sm xl:text-base gap-0.5 md:gap-2 p-2 rounded-[5px] mt-4 text-[#FCFCFC] ">
              <svg className="w-4 md:w-5 xl:w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M15.7778 10.5V6C15.7778 5.00544 15.3827 4.05161 14.6794 3.34835C13.9762 2.64509 13.0223 2.25 12.0278 2.25C11.0332 2.25 10.0794 2.64509 9.37612 3.34835C8.67286 4.05161 8.27777 5.00544 8.27777 6V10.5M19.6338 8.507L20.8968 20.507C20.9668 21.172 20.4468 21.75 19.7778 21.75H4.27777C4.11998 21.7502 3.96392 21.7171 3.81972 21.6531C3.67552 21.589 3.54642 21.4953 3.44079 21.3781C3.33517 21.2608 3.25539 21.1227 3.20663 20.9726C3.15787 20.8226 3.14122 20.6639 3.15777 20.507L4.42177 8.507C4.45093 8.23056 4.5814 7.9747 4.78802 7.78876C4.99465 7.60281 5.2628 7.49995 5.54077 7.5H18.5148C19.0908 7.5 19.5738 7.935 19.6338 8.507ZM8.65277 10.5C8.65277 10.5995 8.61326 10.6948 8.54294 10.7652C8.47261 10.8355 8.37723 10.875 8.27777 10.875C8.17831 10.875 8.08293 10.8355 8.01261 10.7652C7.94228 10.6948 7.90277 10.5995 7.90277 10.5C7.90277 10.4005 7.94228 10.3052 8.01261 10.2348C8.08293 10.1645 8.17831 10.125 8.27777 10.125C8.37723 10.125 8.47261 10.1645 8.54294 10.2348C8.61326 10.3052 8.65277 10.4005 8.65277 10.5ZM16.1528 10.5C16.1528 10.5995 16.1133 10.6948 16.0429 10.7652C15.9726 10.8355 15.8772 10.875 15.7778 10.875C15.6783 10.875 15.5829 10.8355 15.5126 10.7652C15.4423 10.6948 15.4028 10.5995 15.4028 10.5C15.4028 10.4005 15.4423 10.3052 15.5126 10.2348C15.5829 10.1645 15.6783 10.125 15.7778 10.125C15.8772 10.125 15.9726 10.1645 16.0429 10.2348C16.1133 10.3052 16.1528 10.4005 16.1528 10.5Z"
                  stroke="#FCFCFC"
                  strokeWidth="1.79167"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>{" "}
              Buy Now
            </Link>
            <Link to="/AddToCart" className="border border-[#002882] w-full flex items-center justify-center text-sm xl:text-base font-medium gap-0.5 md:gap-2 p-2 rounded-[5px] mt-4 text-[#002882] ">
              <svg className="w-4 md:w-5 xl:w-6"
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
            </Link>
            <div className="flex space-x-2 md:space-x-4 mt-4 mb-6">
              <button className="flex text-center gap-0.5 md:gap-2 justify-center px-4 py-2 w-full text-sm xl:text-base rounded-md bg-[#F2F2F2] text-[#666]">
                <svg className="w-4 md:w-5 xl:w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M7.21665 10.907C6.97452 10.4713 6.59456 10.1284 6.13643 9.93202C5.67829 9.73564 5.16791 9.69695 4.68541 9.82202C4.2029 9.94709 3.77559 10.2288 3.47054 10.623C3.16549 11.0172 2.99997 11.5016 2.99997 12C2.99997 12.4985 3.16549 12.9828 3.47054 13.377C3.77559 13.7712 4.2029 14.053 4.68541 14.1781C5.16791 14.3031 5.67829 14.2644 6.13643 14.0681C6.59456 13.8717 6.97452 13.5287 7.21665 13.093M7.21665 10.907C7.39665 11.231 7.49965 11.603 7.49965 12C7.49965 12.397 7.39665 12.77 7.21665 13.093M7.21665 10.907L16.7827 5.59304M7.21665 13.093L16.7827 18.407M16.7827 5.59304C16.9229 5.85718 17.1144 6.0907 17.346 6.27997C17.5775 6.46923 17.8445 6.61043 18.1313 6.69531C18.418 6.7802 18.7188 6.80706 19.0161 6.77433C19.3134 6.7416 19.6011 6.64994 19.8626 6.5047C20.124 6.35946 20.3539 6.16356 20.5387 5.92845C20.7235 5.69334 20.8596 5.42375 20.9391 5.13542C21.0185 4.8471 21.0397 4.54583 21.0013 4.24923C20.9629 3.95264 20.8658 3.66667 20.7157 3.40804C20.4197 2.89838 19.9356 2.52518 19.3675 2.36865C18.7993 2.21213 18.1924 2.28478 17.6772 2.57099C17.162 2.8572 16.7797 3.33412 16.6124 3.89923C16.4451 4.46434 16.5063 5.07252 16.7827 5.59304ZM16.7827 18.407C16.6391 18.6654 16.5479 18.9495 16.5141 19.2432C16.4804 19.5368 16.5048 19.8342 16.5861 20.1184C16.6673 20.4026 16.8036 20.668 16.9874 20.8995C17.1712 21.131 17.3988 21.324 17.6572 21.4675C17.9155 21.6111 18.1996 21.7023 18.4933 21.736C18.7869 21.7698 19.0843 21.7453 19.3685 21.6641C19.6527 21.5829 19.9181 21.4465 20.1496 21.2628C20.3811 21.079 20.5741 20.8514 20.7177 20.593C21.0075 20.0712 21.0783 19.4556 20.9143 18.8817C20.7503 18.3077 20.365 17.8224 19.8432 17.5325C19.3213 17.2427 18.7057 17.1719 18.1318 17.3359C17.5578 17.4999 17.0725 17.8852 16.7827 18.407Z"
                    stroke="#666666"
                    strokeWidth="1.79167"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>{" "}
                Share
              </button>
              <button className="flex text-center gap-0.5 md:gap-2 justify-center px-4 py-2 w-full text-sm xl:text-base rounded-md bg-[#F2F2F2] text-[#666]">
                <svg className="w-4 md:w-5 xl:w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16.544 3.74988C13.5009 3.74988 12.0009 6.74988 12.0009 6.74988C12.0009 6.74988 10.5009 3.74988 7.45775 3.74988C4.98463 3.74988 3.02619 5.81894 3.00088 8.28785C2.94931 13.4127 7.06635 17.0572 11.579 20.12C11.7034 20.2047 11.8504 20.2499 12.0009 20.2499C12.1513 20.2499 12.2983 20.2047 12.4228 20.12C16.9349 17.0572 21.052 13.4127 21.0009 8.28785C20.9756 5.81894 19.0171 3.74988 16.544 3.74988Z"
                    stroke="#666666"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>{" "}
                396
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-4 my-4 bg-[#F2F2F2] h-[1px]"></div>
        
        <div className="border sticky top-[8%] rounded-lg border-[#F2F2F2]">
          <div className="px-2 2xl:px-3 py-4 2xl:py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl 2xl:text-3xl font-bold text-[#002882]">PKR 7,100</h1>
            </div>

            <div className="flex items-center">
              <del className="text-[#999] md:text-lg 2xl:text-2xl">PKR 8,500</del>
              <span className="ml-2 text-[#F04438] text-sm md:text-md 2xl:text-lg">26% OFF</span>
              <span className="ml-2 text-[#F04438] bg-[#FEE4E2] rounded-sm p-1 text-xs">Almost Sold Out</span>
            </div>
            <p className="text-natural-gray text-xs xl:text-sm 2xl:text-base">Tax Excluded, add at checkout if applicable.</p>
            <div className="flex gap-4 my-4 bg-[#F2F2F2] h-[1px]"></div>
            <div className="flex items-center justify-between">
              <span className="flex text-[#333] font-bold items-center text-xs xl:text-sm 2xl:text-base">
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
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.6654 17.4998V13.3332C11.6654 12.8911 11.4898 12.4672 11.1772 12.1547C10.8646 11.8421 10.4407 11.6665 9.9987 11.6665C9.55667 11.6665 9.13275 11.8421 8.82019 12.1547C8.50763 12.4672 8.33203 12.8911 8.33203 13.3332V17.4998"
                    stroke="#1A1A1A"
                    strokeWidth="1.25"
                  />
                </svg>{" "}
                Sold By
              </span>
              <p className="text-[#1A1A1A] inline text-xs xl:text-sm 2xl:text-base">
                Zahir Clothing
                <Link className="text-[#002882] underline inline ml-1">
                  Visit
                </Link>
              </p>
            </div>

            <div className="flex gap-4 my-4 bg-[#F2F2F2] h-[1px]"></div>

            <div className="flex items-center justify-between">
              <span className="flex text-[#333] font-bold items-center text-xs xl:text-sm 2xl:text-base text-nowrap">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <g clipPath="url(#clip0_6998_126789)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
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
              <p className="text-[#1A1A1A] inline text-xs xl:text-sm 2xl:text-base text-nowrap">
                Johar town, Lahore
                <Link className="text-[#002882] underline inline ml-1">
                  Change
                </Link>
              </p>
            </div>
            <div className="flex items-center justify-between mt-3">
              <div className="flex gap-1">
              <span className="flex text-[#333] font-bold items-center text-xs xl:text-sm 2xl:text-base text-nowrap">
               Color</span> 
               <p className="text-natural-gray text-xs xl:text-sm 2xl:text-base">RED</p>,
              <span className="flex text-[#333] font-bold items-center text-xs xl:text-sm 2xl:text-base text-nowrap">
              Size</span> 
               <p className="text-natural-gray text-xs xl:text-sm 2xl:text-base">XXL</p>
              </div>
              <p className="text-[#1A1A1A] inline text-xs xl:text-sm 2xl:text-base text-nowrap">
                
                <Link className="text-[#002882] underline inline ml-1">
                Edit
                </Link>
              </p>
            </div>
          </div>

          <div className="px-3 py-2 bg-gradient-to-b from-[#FCEDCD] to-[#FFF] flex gap-2 items-center">
            <span className="text-nowrap bg-[linear-gradient(90deg,#0032A3_0%,#1A51CB_25%,#3B66C8_50%,#1A51CB_75%,#0032A3_100%)] rounded-sm py-1 px-2 text-[#FCFCFC] text-xs xl:text-sm 2xl:text-base">
              VB MALL
            </span>
            <span className="text-nowrap text-[#1A1A1A] font-semibold text-xs xl:text-sm 2xl:text-base">
              ValueBox Commitment
            </span>
          </div>

          <div className="px-2 2xl:px-3 py-2 2xl:py-5 flex flex-col gap-3 2xl:gap-5">
            <button
              className="flex justify-between cursor-pointer"
              onClick={() => openModal("warentyReturn")}
            >
              <span className="flex items-center gap-1 text-xs xl:text-sm 2xl:text-base">
                <svg className="w-3 xl:w-4 2xl:w-5"
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
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {activeModal === "warentyReturn" && (
             <div className="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.4)] 
              bg-opacity-50 px-5 md:p-0 z-1050"
             onClick={closeModal}
           >
                <div
                  className="bg-[#FCFCFC] w-[600px] p-5 flex flex-col items-start gap-4 rounded-2xl shadow-lg relative"
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
                  <div className="w-full">
      {accordianItems.map((item, index) => (
        <div key={index}>
          <button
            onClick={() => toggleAccordion(index)}
            className="flex justify-between w-full p-4 text-left font-semibold"
          >
            
            <span className="flex gap-1">{item.icon}{item.title}</span>
            <span
              className={`h-fit text-xl transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="10" viewBox="0 0 20 10" fill="none">
  <g clipPath="url(#clip0_7006_127218)">
    <path fillRule="evenodd" clipRule="evenodd" d="M9.4081 8.46428L4.69393 3.75011L5.87226 2.57178L9.99727 6.69678L14.1223 2.57178L15.3006 3.75011L10.5864 8.46428C10.4302 8.6205 10.2182 8.70827 9.99727 8.70827C9.77629 8.70827 9.56437 8.6205 9.4081 8.46428Z" fill="#1A1A1A"/>
  </g>
  <defs>
    <clipPath id="clip0_7006_127218">
      <rect width="10" height="20" fill="white" transform="translate(20) rotate(90)"/>
    </clipPath>
  </defs>
</svg>
            </span>
          </button>
          {openIndex === index && item.content && (
            <div className="p-4 text-gray-600 transition-transform duration-300">{item.content}</div>
          )}
        </div>
      ))}
    </div>
                </div>
              </div>
            )}

            <button
              className="flex justify-between cursor-pointer"
              onClick={() => openModal("freeShipping")}
            >
              <span className="flex items-center gap-1 text-xs xl:text-sm 2xl:text-base">
                <svg className="w-4 md:w-4 xl:w-7"
                  xmlns="http://www.w3.org/2000/svg"
                  
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16 15.76V6.25C16 5.71957 15.7893 5.21086 15.4142 4.83579C15.0391 4.46071 14.5304 4.25 14 4.25H4C3.46957 4.25 2.96086 4.46071 2.58579 4.83579C2.21071 5.21086 2 5.71957 2 6.25V15.25C2 15.5152 2.10536 15.7696 2.29289 15.9571C2.48043 16.1446 2.73478 16.25 3 16.25H3.71C3.90493 15.8049 4.22534 15.4263 4.63204 15.1604C5.03874 14.8945 5.5141 14.7529 6 14.7529C6.4859 14.7529 6.96126 14.8945 7.36796 15.1604C7.77466 15.4263 8.09507 15.8049 8.29 16.25H15.71C15.783 16.074 15.88 15.909 16 15.76ZM16 15.76C16.2599 15.4075 16.6081 15.1298 17.0096 14.9548C17.4111 14.7799 17.8517 14.714 18.2868 14.7637C18.7219 14.8134 19.1362 14.9769 19.4879 15.2379C19.8396 15.4989 20.1163 15.848 20.29 16.25H22V13.36C22.0004 12.6343 21.8033 11.9223 21.43 11.3L20.2 9.25L19.29 7.74C19.2015 7.59072 19.0757 7.46705 18.9249 7.38114C18.7741 7.29522 18.6035 7.25003 18.43 7.25H16V15.76Z"
                    stroke="#1A1A1A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11 11.25H6M11 8.25H6M8.5 17.25C8.50044 17.6219 8.41789 17.9892 8.25839 18.3252C8.09888 18.6611 7.86642 18.9573 7.57796 19.192C7.2895 19.4268 6.9523 19.5942 6.59094 19.6821C6.22957 19.77 5.85315 19.7762 5.48909 19.7002C5.12504 19.6242 4.78253 19.4679 4.48652 19.2428C4.19051 19.0176 3.94846 18.7293 3.77802 18.3987C3.60757 18.0682 3.51302 17.7038 3.50125 17.332C3.48948 16.9603 3.5608 16.5907 3.71 16.25C3.9402 15.7244 4.34422 15.2939 4.85423 15.031C5.36424 14.768 5.94919 14.6884 6.51091 14.8057C7.07262 14.923 7.57689 15.2299 7.93908 15.675C8.30127 16.1201 8.49932 16.6762 8.5 17.25ZM20.5 17.25C20.5004 17.6219 20.4179 17.9892 20.2584 18.3252C20.0989 18.6611 19.8664 18.9573 19.578 19.192C19.2895 19.4268 18.9523 19.5942 18.5909 19.6821C18.2296 19.77 17.8531 19.7762 17.4891 19.7002C17.125 19.6242 16.7825 19.4679 16.4865 19.2428C16.1905 19.0176 15.9485 18.7293 15.778 18.3987C15.6076 18.0682 15.513 17.7038 15.5013 17.332C15.4895 16.9603 15.5608 16.5907 15.71 16.25C15.783 16.074 15.88 15.909 16 15.76C16.2599 15.4075 16.6081 15.1298 17.0096 14.9548C17.4111 14.7799 17.8517 14.714 18.2868 14.7637C18.7219 14.8134 19.1362 14.9769 19.4879 15.2379C19.8396 15.4989 20.1163 15.848 20.29 16.25C20.43 16.565 20.502 16.906 20.5 17.25Z"
                    stroke="#1A1A1A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {activeModal === "freeShipping" && (
              <div className="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.4)] 
                 bg-opacity-50 px-5 md:p-0 z-1050"
                onClick={closeModal}
              >
                <div
                  className="bg-[#FCFCFC] w-[600px] p-5 flex flex-col items-start gap-4 rounded-2xl shadow-lg relative"
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
                  <h2 className="text-xl font-semibold">Shipping Method</h2>
                  <div className="space-y-4 w-full">
      {deliveryOptions.map((option) => (
        <label
          key={option.id}
          className={`block p-4 rounded-lg bg-[#F2F2F2] cursor-pointer transition-all border-0 ${
            selected === option.id ? "" : "border-gray-300"
          }`}
        >
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium text-gray-800">
                {option.title.includes("PKR") ? (
                  <>
                    Free Shipping over{" "}
                    <span className="text-[#0032A3] font-semibold">PKR 2,570</span>
                  </>
                ) : (
                  option.title
                )}
              </h3>
              <p className="text-sm text-[#1A1A1A]">
                Standard Delivery:{" "}
                <span className="font-bold">{option.extraBold}</span>
              </p>
            </div>
            <input
              type="radio"
              name="shipping"
              value={option.id}
              checked={selected === option.id}
              onChange={() => setSelected(option.id)}
              className="w-5 h-5 accent-[#0032A3] cursor-pointer"
            />
          </div>
          <button
            className="mt-2 px-4 py-2 text-sm text-gray-500 bg-[#FCFCFC] rounded-md cursor-not-allowed"
            disabled
          >
            Tracking Available
          </button>
        </label>
      ))}
    </div>
                </div>
              </div>
            )}
            <div className="flex justify-between">
              <span className="flex items-center gap-1 text-xs xl:text-sm 2xl:text-base">
                <svg className="w-4 xl:w-5 2xl:w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12Z"
                    stroke="#1A1A1A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 7V12L15 15"
                    stroke="#1A1A1A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>{" "}
                Standard Delivery:{" "}
                <span className="font-semibold">DEC 06 - 16</span>
              </span>
            </div>
            <div className="flex justify-between">
              <span className="flex gap-1 text-xs xl:text-sm 2xl:text-base">
                <svg className="w-4 xl:w-5 2xl:w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M18.5 14.01L18.51 13.999M7.5 14.01L7.51 13.999M4 18V10C4 9.46957 4.21071 8.96086 4.58579 8.58579C4.96086 8.21071 5.46957 8 6 8H20C20.5304 8 21.0391 8.21071 21.4142 8.58579C21.7893 8.96086 22 9.46957 22 10V18C22 18.5304 21.7893 19.0391 21.4142 19.4142C21.0391 19.7893 20.5304 20 20 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18Z"
                    stroke="#1A1A1A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 16H3C2.46957 16 1.96086 15.7893 1.58579 15.4142C1.21071 15.0391 1 14.5304 1 14V6C1 5.46957 1.21071 4.96086 1.58579 4.58579C1.96086 4.21071 2.46957 4 3 4H17C17.5304 4 18.0391 4.21071 18.4142 4.58579C18.7893 4.96086 19 5.46957 19 6V8M13 16C12.4696 16 11.9609 15.7893 11.5858 15.4142C11.2107 15.0391 11 14.5304 11 14C11 13.4696 11.2107 12.9609 11.5858 12.5858C11.9609 12.2107 12.4696 12 13 12C13.5304 12 14.0391 12.2107 14.4142 12.5858C14.7893 12.9609 15 13.4696 15 14C15 14.5304 14.7893 15.0391 14.4142 15.4142C14.0391 15.7893 13.5304 16 13 16Z"
                    stroke="#1A1A1A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>{" "}
                Cash on Delivery Available
              </span>
            </div>
            <button className="flex justify-between" onClick={() => openModal("deliveryGuarantee")}>
              <span className="flex items-center gap-1 text-xs xl:text-sm 2xl:text-base">
                <svg className="w-4 xl:w-5 2xl:w-6"
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
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {activeModal === "deliveryGuarantee" && (
              <div className="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.4)] 
                bg-opacity-50 px-5 md:p-0 z-1050"
                onClick={closeModal}
              >
                <div
                  className="bg-[#FCFCFC] w-[600px] p-5 flex flex-col items-start gap-4 rounded-2xl shadow-lg relative"
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
                  <h2 className="text-xl font-semibold">Delivery Guarantee</h2>
                  <div className=" text-gray-800">
      {/* Delivery Guarantee */}

      <ul className="mt-2 space-y-2">
        <li className="flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M6 12L10.2426 16.2426L18.7275 7.75732" stroke="#12B76A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
          <span>Refund if no delivery in 30 days</span>
        </li>
        <li className="flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M6 12L10.2426 16.2426L18.7275 7.75732" stroke="#12B76A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
          <span>Refund if items damaged</span>
        </li>
        <li className="flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M6 12L10.2426 16.2426L18.7275 7.75732" stroke="#12B76A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
          <span>Refund if package lost</span>
        </li>
      </ul>

      {/* Valuebox Assurance */}
      <h2 className="text-lg font-bold mt-6">Valuebox Assurance</h2>
      <ul className="mt-2 space-y-2">
        <li className="flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 22.4967C12 22.4967 20.9986 19.4971 20.9986 11.9983" stroke="#EEA500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M20.9986 11.9984V2.99977C20.9986 2.99977 17.9991 1.5 12 1.5" stroke="#EEA500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M11.9996 22.4967C11.9996 22.4967 3.00101 19.4971 3.00101 11.9983" stroke="#EEA500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M3.00098 11.9984V2.99977C3.00098 2.99977 6.00051 1.5 11.9996 1.5" stroke="#EEA500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M17.9984 5.99927C11.9993 10.4986 10.4995 16.4976 10.4995 16.4976C10.4995 16.4976 8.99977 14.7075 7.5 13.4981" stroke="#EEA500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
          <span>We provide safe and secure payment method</span>
        </li>
        <li className="flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M6 22C5.45 22 4.97933 21.8043 4.588 21.413C4.19667 21.0217 4.00067 20.5507 4 20V10C4 9.45 4.196 8.97933 4.588 8.588C4.98 8.19667 5.45067 8.00067 6 8H7V6C7 4.61667 7.48767 3.43767 8.463 2.463C9.43833 1.48833 10.6173 1.00067 12 1C13.3833 1 14.5627 1.48767 15.538 2.463C16.5133 3.43833 17.0007 4.61733 17 6V8H18C18.55 8 19.021 8.196 19.413 8.588C19.805 8.98 20.0007 9.45067 20 10V20C20 20.55 19.8043 21.021 19.413 21.413C19.0217 21.805 18.5507 22.0007 18 22H6ZM6 20H18V10H6V20ZM12 17C12.55 17 13.021 16.8043 13.413 16.413C13.805 16.0217 14.0007 15.5507 14 15C14 14.45 13.8043 13.9793 13.413 13.588C13.0217 13.1967 12.5507 13.0007 12 13C11.45 13 10.9793 13.196 10.588 13.588C10.1967 13.98 10.0007 14.4507 10 15C10 15.55 10.196 16.021 10.588 16.413C10.98 16.805 11.4507 17.0007 12 17ZM9 8H15V6C15 5.16667 14.7083 4.45833 14.125 3.875C13.5417 3.29167 12.8333 3 12 3C11.1667 3 10.4583 3.29167 9.875 3.875C9.29167 4.45833 9 5.16667 9 6V8Z" fill="#EEA500"/>
</svg>
          <span>We ensure your Security & Privacy.</span>
        </li>
        <li className="flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M14.4847 5.22666C14.0685 5.22966 13.6552 5.24991 13.2188 5.36691C12.7432 5.49599 12.292 5.70196 11.883 5.97666C11.3085 5.63916 10.752 5.36166 10.2188 5.29641C9.5565 5.21466 8.9415 5.25891 8.22675 5.27391C7.37925 5.29116 6.8265 5.72391 5.9295 6.07041C5.03325 6.41541 3.879 6.74991 2.25 6.74991H1.5V13.9687L1.92225 14.1794L3.3045 14.8597L8.22675 20.3437L8.25 20.3669C8.8125 20.9234 9.5715 21.0614 10.242 21.0232C10.9132 20.9857 11.5433 20.7892 12.0465 20.4847C13.1543 19.8164 16.1715 17.7187 16.1715 17.7187L16.242 17.6714L16.2892 17.6249C16.6462 17.2702 16.8255 16.8374 16.9455 16.3829L19.8278 14.9294L21.984 14.2034L22.5 14.0384V6.74991H21.75C20.4893 6.75853 19.2391 6.51951 18.0705 6.04641C17.1735 5.69616 16.629 5.26791 15.7725 5.24991C15.315 5.24091 14.9002 5.22366 14.4847 5.22666ZM14.5072 6.72666C14.8448 6.72366 15.2347 6.74166 15.7267 6.74991C15.8055 6.75291 16.5262 7.06041 17.5312 7.45341C18.381 7.78716 19.5615 8.08341 21 8.17941V12.9607L19.2653 13.5472H19.2188L19.1715 13.5697L16.899 14.7187C16.7784 14.3706 16.5868 14.0514 16.3365 13.7812L16.2892 13.7107L13.1017 9.79716L12.633 9.21066L12.0465 9.67941L10.0312 11.3204C9.35475 11.7892 8.8065 11.6542 8.25 11.3909C8.08875 11.3144 8.09775 11.2912 7.96875 11.2034L11.391 8.36691L11.4375 8.32041C12.4537 7.31241 13.0785 6.96366 13.617 6.82041C13.887 6.74691 14.1705 6.72966 14.5072 6.72666ZM9.282 6.74991C9.53224 6.74048 9.78283 6.74825 10.032 6.77316C10.2285 6.79641 10.4513 6.96366 10.6418 7.03116C10.5653 7.10166 10.5097 7.14216 10.4303 7.21866L10.3837 7.26591L6.282 10.6634L5.649 11.1794L6.2115 11.7652C6.2115 11.7652 6.75375 12.3517 7.5945 12.7499C8.43525 13.1482 9.7335 13.3739 10.899 12.5624L10.9462 12.5152L12.399 11.3204L15.165 14.7187L15.1882 14.7659L15.2115 14.7884C15.7065 15.2782 15.6952 16.0484 15.2115 16.5472C15.2055 16.5524 15.2175 16.5644 15.2115 16.5697C15.2055 16.5734 15.1065 16.6319 15.0945 16.6409L14.1097 15.3044L12.891 16.1954L13.8525 17.4839C13.4625 17.7479 13.287 17.8859 12.8678 18.1642L11.8605 16.8044L10.641 17.6954L11.6025 18.9839C11.517 19.0364 11.3415 19.1542 11.274 19.1954C11.037 19.3387 10.5795 19.4999 10.1722 19.5232C9.789 19.5442 9.49575 19.4557 9.3525 19.3357L9.32925 19.3124L4.31325 13.7579L4.2195 13.6402L3 13.0312V8.17941C4.4325 8.08566 5.622 7.80141 6.46875 7.47666C7.47075 7.09266 8.18625 6.77616 8.27325 6.77316L9.282 6.74991Z" fill="#EEA500"/>
</svg>
          <span>We provide buyers protection so that they get their money back.</span>
        </li>
      </ul>
    </div>
                </div>
              </div>
            )}
          </div>

          <div className="px-3">
            <div className="flex gap-4 my-4 bg-[#F2F2F2] h-[1px]"></div>
            <span className="flex text-[#333] font-bold items-center text-xs md:text-sm xl:text-base">
              Select Quantity
            </span>
            <div className="flex items-center space-x-2 rounded-lg w-fit mt-4">
              <button
                className="px-1 py-1 bg-[#F2F2F2] text-white rounded-full disabled:opacity-50"
                onClick={decreaseQuantity}
                disabled={quantity === 1}
              >
                <svg className="w-5 md:w-6 xl:w-7"
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
              <span className="px-2 py-1 bg-white rounded-lg text-md md:text-lg xl:text-xl font-medium">
                {quantity}
              </span>
              <button
                className="px-1 py-1 bg-[#F2F2F2] text-white rounded-full"
                onClick={increaseQuantity}
              >
                <svg className="w-5 md:w-6 xl:w-7"
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

            <Link to="/Checkout" className="bg-[#002882] w-full flex items-center justify-center text-sm xl:text-base gap-0.5 md:gap-2 p-2 rounded-[5px] mt-4 text-[#FCFCFC] ">
              <svg className="w-4 md:w-5 xl:w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M15.7778 10.5V6C15.7778 5.00544 15.3827 4.05161 14.6794 3.34835C13.9762 2.64509 13.0223 2.25 12.0278 2.25C11.0332 2.25 10.0794 2.64509 9.37612 3.34835C8.67286 4.05161 8.27777 5.00544 8.27777 6V10.5M19.6338 8.507L20.8968 20.507C20.9668 21.172 20.4468 21.75 19.7778 21.75H4.27777C4.11998 21.7502 3.96392 21.7171 3.81972 21.6531C3.67552 21.589 3.54642 21.4953 3.44079 21.3781C3.33517 21.2608 3.25539 21.1227 3.20663 20.9726C3.15787 20.8226 3.14122 20.6639 3.15777 20.507L4.42177 8.507C4.45093 8.23056 4.5814 7.9747 4.78802 7.78876C4.99465 7.60281 5.2628 7.49995 5.54077 7.5H18.5148C19.0908 7.5 19.5738 7.935 19.6338 8.507ZM8.65277 10.5C8.65277 10.5995 8.61326 10.6948 8.54294 10.7652C8.47261 10.8355 8.37723 10.875 8.27777 10.875C8.17831 10.875 8.08293 10.8355 8.01261 10.7652C7.94228 10.6948 7.90277 10.5995 7.90277 10.5C7.90277 10.4005 7.94228 10.3052 8.01261 10.2348C8.08293 10.1645 8.17831 10.125 8.27777 10.125C8.37723 10.125 8.47261 10.1645 8.54294 10.2348C8.61326 10.3052 8.65277 10.4005 8.65277 10.5ZM16.1528 10.5C16.1528 10.5995 16.1133 10.6948 16.0429 10.7652C15.9726 10.8355 15.8772 10.875 15.7778 10.875C15.6783 10.875 15.5829 10.8355 15.5126 10.7652C15.4423 10.6948 15.4028 10.5995 15.4028 10.5C15.4028 10.4005 15.4423 10.3052 15.5126 10.2348C15.5829 10.1645 15.6783 10.125 15.7778 10.125C15.8772 10.125 15.9726 10.1645 16.0429 10.2348C16.1133 10.3052 16.1528 10.4005 16.1528 10.5Z"
                  stroke="#FCFCFC"
                  strokeWidth="1.79167"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>{" "}
              Buy Now
            </Link>
            <Link to="/AddToCart" className="border border-[#002882] w-full flex items-center justify-center text-sm xl:text-base font-medium gap-0.5 md:gap-2 p-2 rounded-[5px] mt-4 text-[#002882] ">
              <svg className="w-4 md:w-5 xl:w-6"
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
            </Link>
            <div className="flex space-x-2 md:space-x-4 mt-4 mb-6">
              <button className="flex text-center gap-0.5 md:gap-2 justify-center px-4 py-2 w-full text-sm xl:text-base rounded-md bg-[#F2F2F2] text-[#666]">
                <svg className="w-4 md:w-5 xl:w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M7.21665 10.907C6.97452 10.4713 6.59456 10.1284 6.13643 9.93202C5.67829 9.73564 5.16791 9.69695 4.68541 9.82202C4.2029 9.94709 3.77559 10.2288 3.47054 10.623C3.16549 11.0172 2.99997 11.5016 2.99997 12C2.99997 12.4985 3.16549 12.9828 3.47054 13.377C3.77559 13.7712 4.2029 14.053 4.68541 14.1781C5.16791 14.3031 5.67829 14.2644 6.13643 14.0681C6.59456 13.8717 6.97452 13.5287 7.21665 13.093M7.21665 10.907C7.39665 11.231 7.49965 11.603 7.49965 12C7.49965 12.397 7.39665 12.77 7.21665 13.093M7.21665 10.907L16.7827 5.59304M7.21665 13.093L16.7827 18.407M16.7827 5.59304C16.9229 5.85718 17.1144 6.0907 17.346 6.27997C17.5775 6.46923 17.8445 6.61043 18.1313 6.69531C18.418 6.7802 18.7188 6.80706 19.0161 6.77433C19.3134 6.7416 19.6011 6.64994 19.8626 6.5047C20.124 6.35946 20.3539 6.16356 20.5387 5.92845C20.7235 5.69334 20.8596 5.42375 20.9391 5.13542C21.0185 4.8471 21.0397 4.54583 21.0013 4.24923C20.9629 3.95264 20.8658 3.66667 20.7157 3.40804C20.4197 2.89838 19.9356 2.52518 19.3675 2.36865C18.7993 2.21213 18.1924 2.28478 17.6772 2.57099C17.162 2.8572 16.7797 3.33412 16.6124 3.89923C16.4451 4.46434 16.5063 5.07252 16.7827 5.59304ZM16.7827 18.407C16.6391 18.6654 16.5479 18.9495 16.5141 19.2432C16.4804 19.5368 16.5048 19.8342 16.5861 20.1184C16.6673 20.4026 16.8036 20.668 16.9874 20.8995C17.1712 21.131 17.3988 21.324 17.6572 21.4675C17.9155 21.6111 18.1996 21.7023 18.4933 21.736C18.7869 21.7698 19.0843 21.7453 19.3685 21.6641C19.6527 21.5829 19.9181 21.4465 20.1496 21.2628C20.3811 21.079 20.5741 20.8514 20.7177 20.593C21.0075 20.0712 21.0783 19.4556 20.9143 18.8817C20.7503 18.3077 20.365 17.8224 19.8432 17.5325C19.3213 17.2427 18.7057 17.1719 18.1318 17.3359C17.5578 17.4999 17.0725 17.8852 16.7827 18.407Z"
                    stroke="#666666"
                    strokeWidth="1.79167"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>{" "}
                Share
              </button>
              <button className="flex text-center gap-0.5 md:gap-2 justify-center px-4 py-2 w-full text-sm xl:text-base rounded-md bg-[#F2F2F2] text-[#666]">
                <svg className="w-4 md:w-5 xl:w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16.544 3.74988C13.5009 3.74988 12.0009 6.74988 12.0009 6.74988C12.0009 6.74988 10.5009 3.74988 7.45775 3.74988C4.98463 3.74988 3.02619 5.81894 3.00088 8.28785C2.94931 13.4127 7.06635 17.0572 11.579 20.12C11.7034 20.2047 11.8504 20.2499 12.0009 20.2499C12.1513 20.2499 12.2983 20.2047 12.4228 20.12C16.9349 17.0572 21.052 13.4127 21.0009 8.28785C20.9756 5.81894 19.0171 3.74988 16.544 3.74988Z"
                    stroke="#666666"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>{" "}
                396
              </button>
            </div>
          </div>
        </div>

        </div>
      </div>
      ) : (
       <div className="bg-[#F2F2F2] flex flex-col gap-3">
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


          <div className="flex items-center justify-between bg-[#FFF] shadow-[0px_4px_8px_-2px_rgba(16,24,40,0.10),0px_2px_4px_-2px_rgba(16,24,40,0.06)] px-2 w-full py-4 sticky top-[6%] gap-7 xl:gap-10 z-1050">
              {mobSections.map((section) => (
                <button
                  key={section.id}
                  className="text-xs sm:text-sm"
                  onClick={() => handleScroll(section.id)}
                >
                  {section.name}
                </button>
              ))}
            </div>

            <div className="bg-[#FFF] py-3">
              <h3 className="text-[#1A1A1A] text-lg px-3">Vouchers</h3>
              <div ref={scrollRef} onMouseMove={onDragScroll} className="flex px-3 w-full overflow-y-hidden overflow-x-auto whitespace-nowrap scrollbar-hidden cursor-grab active:cursor-grabbing select-none gap-3">

              <div className="flex items-center bg-blue-100 border border-blue-300 rounded-lg w-[350px] ">
      {/* Left Section */}
      <div className="flex flex-col items-center justify-center w-1/3 px-2 py-2 ">
        <p className="text-blue-600 font-bold text-lg">10% OFF</p>
        <p className="text-xs text-blue-500">No Min Spend</p>
      </div>
      
      {/* Right Section */}
      <div className="flex flex-col justify-between relative border-r border-dashed border-blue-400 rounded-l-lg h-[90px] ">
        <p className="absolute -top-2 left-[-5px]">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
  <circle cx="6" cy="6" r="6" fill="#FCFCFC"/>
</svg>
        </p>
        <p className="absolute -bottom-2 left-[-5px]">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
  <circle cx="6" cy="6" r="6" fill="#FCFCFC"/>
</svg>
        </p>
      </div>
      <div className="flex-1 space-y-1 px-2">
        <p className="font-bold text-sm text-blue-800">ValueBox Voucher</p>
        <p className="text-xs text-blue-500">Bank of Punjab</p>
        <p className="text-xs text-gray-600">From: 26/11/2024</p>
        <p className="text-xs text-gray-600">To: 28/11/2024</p>
      </div>
      
      {/* Actions */}
      <div className="flex flex-col items-end p-3 space-y-2">
        <button className="text-xs text-blue-600 bg-blue-200 px-2 py-1 rounded">T&C</button>
        <button className="text-white bg-blue-500 px-3 py-1 rounded shadow-md text-sm">Collect</button>
      </div>
              </div>
              <div className="flex items-center bg-[#ECFDF3] border border-[#12B76A] rounded-lg w-[350px] ">
      {/* Left Section */}
      <div className="flex flex-col items-center justify-center w-1/3 px-2 py-2 ">
        <p className="text-[#027A48] font-bold text-lg">10% OFF</p>
        <p className="text-xs text-[#12B76A]">No Min Spend</p>
      </div>
      
      {/* Right Section */}
      <div className="flex flex-col justify-between relative border-r border-dashed border-[#12B76A] rounded-l-lg h-[90px] ">
        <p className="absolute -top-2 left-[-5px]">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
  <circle cx="6" cy="6" r="6" fill="#FCFCFC"/>
</svg>
        </p>
        <p className="absolute -bottom-2 left-[-5px]">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
  <circle cx="6" cy="6" r="6" fill="#FCFCFC"/>
</svg>
        </p>
      </div>
      <div className="flex-1 space-y-1 px-2">
        <p className="font-bold text-sm text-[#027A48]">ValueBox Voucher</p>
        <p className="text-xs text-[#12B76A]">Bank of Punjab</p>
        <p className="text-xs text-[#12B76A]">From: 26/11/2024</p>
        <p className="text-xs text-[#12B76A]">To: 28/11/2024</p>
      </div>
      
      {/* Actions */}
      <div className="flex flex-col items-end p-3 space-y-2">
        <button className="text-xs text-[#027A48] bg-[#A6F4C5] px-2 py-1 rounded">T&C</button>
        <button className="text-white bg-[#12B76A] px-3 py-1 rounded shadow-md text-sm">Collect</button>
      </div>
              </div>
              </div>
            </div>
           
           <div className="bg-gradient-to-b from-[#FCEDCD] to-[#FFF]">
           <div className="px-3 py-2  flex gap-2 items-center">
            <span className="bg-[linear-gradient(90deg,#0032A3_0%,#1A51CB_25%,#3B66C8_50%,#1A51CB_75%,#0032A3_100%)] rounded-sm py-1 px-2 text-[#FCFCFC] text-xs md:text-sm xl:text-base">
              VB MALL
            </span>
            <span className="text-[#1A1A1A] font-semibold text-xs md:text-sm xl:text-base">
              ValueBox Commitment
            </span>
          </div>
          <div className="px-3 py-5 flex flex-col gap-5">
            <button
              className="flex justify-between cursor-pointer"
              onClick={() => handleOpen("warentyReturn")}
            >
              <span className="flex items-center gap-1 text-xs md:text-sm xl:text-base">
                <svg className="w-3 md:w-4 xl:w-5"
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
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {openPopup==='warentyReturn' && (
        <div
          className={`fixed inset-0 z-1050 bg-[rgba(0,0,0,0.3)]  bg-opacity-50
            flex items-end justify-center transition-opacity duration-300 ${
            isAnimating ? "opacity-100" : "opacity-0"
          }`}
          onClick={handleClose}
        >
          {/* Popup Content */}
          
          <div
            className={`w-full p-6 bg-white rounded-t-2xl shadow-lg transform transition-transform duration-300 ${
              isAnimating ? "translate-y-0" : "translate-y-full"
            }`}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            
          >
            <div className="flex justify-between items-center mb-3">
    <p className="text-base font-semibold">Warranty & Returns</p>
            <button
              onClick={handleClose}
              className=" text-white rounded-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <path d="M15 0C6.64286 0 0 6.64286 0 15C0 23.3571 6.64286 30 15 30C23.3571 30 30 23.3571 30 15C30 6.64286 23.3571 0 15 0ZM20.7857 22.5L15 16.7143L9.21429 22.5L7.5 20.7857L13.2857 15L7.5 9.21429L9.21429 7.5L15 13.2857L20.7857 7.5L22.5 9.21429L16.7143 15L22.5 20.7857L20.7857 22.5Z" fill="#002882"/>
</svg>
            </button>
    </div>
           <div className="w-full">
      {accordianItems.map((item, index) => (
        <div key={index}>
          <button
            onClick={() => toggleAccordion(index)}
            className="flex justify-between w-full py-4 text-left font-semibold"
          >
            
            <span className="flex gap-1 text-sm font-normal">{item.icon}{item.title}</span>
            <span
              className={`h-fit text-xl transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="10" viewBox="0 0 20 10" fill="none">
  <g clipPath="url(#clip0_7006_127218)">
    <path fillRule="evenodd" clipRule="evenodd" d="M9.4081 8.46428L4.69393 3.75011L5.87226 2.57178L9.99727 6.69678L14.1223 2.57178L15.3006 3.75011L10.5864 8.46428C10.4302 8.6205 10.2182 8.70827 9.99727 8.70827C9.77629 8.70827 9.56437 8.6205 9.4081 8.46428Z" fill="#1A1A1A"/>
  </g>
  <defs>
    <clipPath id="clip0_7006_127218">
      <rect width="10" height="20" fill="white" transform="translate(20) rotate(90)"/>
    </clipPath>
  </defs>
</svg>
            </span>
          </button>
          {openIndex === index && item.content && (
            <div className="p-4 text-gray-600 transition-transform duration-300">{item.content}</div>
          )}
        </div>
      ))}
    </div>
    
          </div>
        </div>
      )}
            <button
              className="flex justify-between cursor-pointer"
              onClick={() => handleOpen("freeShipping")}
            >
              <span className="flex items-center gap-1 text-xs md:text-sm xl:text-base">
                <svg className="w-4 md:w-6 xl:w-7"
                  xmlns="http://www.w3.org/2000/svg"
                  
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16 15.76V6.25C16 5.71957 15.7893 5.21086 15.4142 4.83579C15.0391 4.46071 14.5304 4.25 14 4.25H4C3.46957 4.25 2.96086 4.46071 2.58579 4.83579C2.21071 5.21086 2 5.71957 2 6.25V15.25C2 15.5152 2.10536 15.7696 2.29289 15.9571C2.48043 16.1446 2.73478 16.25 3 16.25H3.71C3.90493 15.8049 4.22534 15.4263 4.63204 15.1604C5.03874 14.8945 5.5141 14.7529 6 14.7529C6.4859 14.7529 6.96126 14.8945 7.36796 15.1604C7.77466 15.4263 8.09507 15.8049 8.29 16.25H15.71C15.783 16.074 15.88 15.909 16 15.76ZM16 15.76C16.2599 15.4075 16.6081 15.1298 17.0096 14.9548C17.4111 14.7799 17.8517 14.714 18.2868 14.7637C18.7219 14.8134 19.1362 14.9769 19.4879 15.2379C19.8396 15.4989 20.1163 15.848 20.29 16.25H22V13.36C22.0004 12.6343 21.8033 11.9223 21.43 11.3L20.2 9.25L19.29 7.74C19.2015 7.59072 19.0757 7.46705 18.9249 7.38114C18.7741 7.29522 18.6035 7.25003 18.43 7.25H16V15.76Z"
                    stroke="#1A1A1A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11 11.25H6M11 8.25H6M8.5 17.25C8.50044 17.6219 8.41789 17.9892 8.25839 18.3252C8.09888 18.6611 7.86642 18.9573 7.57796 19.192C7.2895 19.4268 6.9523 19.5942 6.59094 19.6821C6.22957 19.77 5.85315 19.7762 5.48909 19.7002C5.12504 19.6242 4.78253 19.4679 4.48652 19.2428C4.19051 19.0176 3.94846 18.7293 3.77802 18.3987C3.60757 18.0682 3.51302 17.7038 3.50125 17.332C3.48948 16.9603 3.5608 16.5907 3.71 16.25C3.9402 15.7244 4.34422 15.2939 4.85423 15.031C5.36424 14.768 5.94919 14.6884 6.51091 14.8057C7.07262 14.923 7.57689 15.2299 7.93908 15.675C8.30127 16.1201 8.49932 16.6762 8.5 17.25ZM20.5 17.25C20.5004 17.6219 20.4179 17.9892 20.2584 18.3252C20.0989 18.6611 19.8664 18.9573 19.578 19.192C19.2895 19.4268 18.9523 19.5942 18.5909 19.6821C18.2296 19.77 17.8531 19.7762 17.4891 19.7002C17.125 19.6242 16.7825 19.4679 16.4865 19.2428C16.1905 19.0176 15.9485 18.7293 15.778 18.3987C15.6076 18.0682 15.513 17.7038 15.5013 17.332C15.4895 16.9603 15.5608 16.5907 15.71 16.25C15.783 16.074 15.88 15.909 16 15.76C16.2599 15.4075 16.6081 15.1298 17.0096 14.9548C17.4111 14.7799 17.8517 14.714 18.2868 14.7637C18.7219 14.8134 19.1362 14.9769 19.4879 15.2379C19.8396 15.4989 20.1163 15.848 20.29 16.25C20.43 16.565 20.502 16.906 20.5 17.25Z"
                    stroke="#1A1A1A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {openPopup==='freeShipping' && (
        <div
          className={`fixed inset-0 z-1050 bg-[rgba(0,0,0,0.3)]  bg-opacity-50
            flex sm:hidden items-end justify-center transition-opacity duration-300 ${
            isAnimating ? "opacity-100" : "opacity-0"
          }`}
          onClick={handleClose}
        >
          {/* Popup Content */}
          
          <div
            className={`w-full p-6 bg-white rounded-t-2xl shadow-lg transform transition-transform duration-300 ${
              isAnimating ? "translate-y-0" : "translate-y-full"
            }`}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            
          >
            <div className="flex justify-between items-center mb-3">
    <p className="text-2xl font-semibold">Shipping</p>
            <button
              onClick={handleClose}
              className=" text-white rounded-lg cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <path d="M15 0C6.64286 0 0 6.64286 0 15C0 23.3571 6.64286 30 15 30C23.3571 30 30 23.3571 30 15C30 6.64286 23.3571 0 15 0ZM20.7857 22.5L15 16.7143L9.21429 22.5L7.5 20.7857L13.2857 15L7.5 9.21429L9.21429 7.5L15 13.2857L20.7857 7.5L22.5 9.21429L16.7143 15L22.5 20.7857L20.7857 22.5Z" fill="#002882"/>
</svg>
            </button>
    </div>
    <p className="inline text-[#999] ">Ship to</p>
    <p className="inline"> Pakistan</p>
    <div className="space-y-4 w-full">
      <div className="p-4 rounded-lg mt-2 bg-[#F2F2F2] cursor-pointer transition-all border-0 flex justify-between">
        <div className="flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <g clipPath="url(#clip0_7051_138622)">
    <path fill-rule="evenodd" clipRule="evenodd" d="M10 1.66675C11.9891 1.66675 13.8968 2.45692 15.3033 3.86345C16.7098 5.26997 17.5 7.17762 17.5 9.16675C17.5 11.7284 16.1033 13.8251 14.6317 15.3292C13.8963 16.0725 13.094 16.7464 12.235 17.3426L11.88 17.5842L11.7133 17.6951L11.3992 17.8951L11.1192 18.0659L10.7725 18.2676C10.5371 18.4016 10.2709 18.472 10 18.472C9.72913 18.472 9.46291 18.4016 9.2275 18.2676L8.88083 18.0659L8.4475 17.7992L8.2875 17.6951L7.94583 17.4676C7.01915 16.8404 6.15589 16.1242 5.36833 15.3292C3.89667 13.8242 2.5 11.7284 2.5 9.16675C2.5 7.17762 3.29018 5.26997 4.6967 3.86345C6.10322 2.45692 8.01088 1.66675 10 1.66675ZM10 3.33341C8.4529 3.33341 6.96917 3.948 5.87521 5.04196C4.78125 6.13592 4.16667 7.61965 4.16667 9.16675C4.16667 11.1017 5.22667 12.8001 6.55917 14.1634C7.13218 14.7433 7.75145 15.2756 8.41083 15.7551L8.7925 16.0267C8.91583 16.1126 9.03417 16.1926 9.14833 16.2667L9.47333 16.4751L9.75917 16.6492L10 16.7901L10.3792 16.5659L10.685 16.3742C10.8475 16.2709 11.0225 16.1551 11.2075 16.0267L11.5892 15.7551C12.2485 15.2756 12.8678 14.7433 13.4408 14.1634C14.7733 12.8009 15.8333 11.1017 15.8333 9.16675C15.8333 7.61965 15.2188 6.13592 14.1248 5.04196C13.0308 3.948 11.5471 3.33341 10 3.33341ZM10 5.83342C10.8841 5.83342 11.7319 6.1846 12.357 6.80973C12.9821 7.43485 13.3333 8.28269 13.3333 9.16675C13.3333 10.0508 12.9821 10.8987 12.357 11.5238C11.7319 12.1489 10.8841 12.5001 10 12.5001C9.11594 12.5001 8.2681 12.1489 7.64298 11.5238C7.01786 10.8987 6.66667 10.0508 6.66667 9.16675C6.66667 8.28269 7.01786 7.43485 7.64298 6.80973C8.2681 6.1846 9.11594 5.83342 10 5.83342ZM10 7.50008C9.55797 7.50008 9.13405 7.67568 8.82149 7.98824C8.50893 8.3008 8.33333 8.72472 8.33333 9.16675C8.33333 9.60878 8.50893 10.0327 8.82149 10.3453C9.13405 10.6578 9.55797 10.8334 10 10.8334C10.442 10.8334 10.866 10.6578 11.1785 10.3453C11.4911 10.0327 11.6667 9.60878 11.6667 9.16675C11.6667 8.72472 11.4911 8.3008 11.1785 7.98824C10.866 7.67568 10.442 7.50008 10 7.50008Z" fill="#666666"/>
  </g>
  <defs>
    <clipPath id="clip0_7051_138622">
      <rect width="20" height="20" fill="white"/>
    </clipPath>
  </defs>
</svg>
<p>Johar town, Lahore</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M10 8L14 12L10 16" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <p>Shipping Method</p>
      {deliveryOptions.map((option) => (
        <label
          key={option.id}
          className={`block p-4 rounded-lg bg-[#F2F2F2] cursor-pointer transition-all border-0 ${
            selected === option.id ? "" : "border-gray-300"
          }`}
        >
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium text-gray-800">
                {option.title.includes("PKR") ? (
                  <>
                    Free Shipping over{" "}
                    <span className="text-[#0032A3] font-semibold">PKR 2,570</span>
                  </>
                ) : (
                  option.title
                )}
              </h3>
              <p className="text-sm text-[#1A1A1A]">
                Standard Delivery:{" "}
                <span className="font-bold">{option.extraBold}</span>
              </p>
            </div>
            <input
              type="radio"
              name="shipping"
              value={option.id}
              checked={selected === option.id}
              onChange={() => setSelected(option.id)}
              className="w-5 h-5 accent-[#0032A3] cursor-pointer"
            />
          </div>
          <button
            className="mt-2 px-4 py-2 text-sm text-gray-500 bg-[#FCFCFC] rounded-md cursor-not-allowed"
            disabled
          >
            Tracking Available
          </button>
        </label>
      ))}
    </div>
    
          </div>
        </div>
      )}
            <div className="flex justify-between">
              <span className="flex items-center gap-1 text-xs md:text-sm xl:text-base">
                <svg className="w-4 md:w-5 xl:w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12Z"
                    stroke="#1A1A1A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 7V12L15 15"
                    stroke="#1A1A1A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>{" "}
                Standard Delivery:{" "}
                <span className="font-semibold">DEC 06 - 16</span>
              </span>
            </div>
            <div className="flex justify-between">
              <span className="flex gap-1 text-xs md:text-sm xl:text-base">
                <svg className="w-4 md:w-5 xl:w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M18.5 14.01L18.51 13.999M7.5 14.01L7.51 13.999M4 18V10C4 9.46957 4.21071 8.96086 4.58579 8.58579C4.96086 8.21071 5.46957 8 6 8H20C20.5304 8 21.0391 8.21071 21.4142 8.58579C21.7893 8.96086 22 9.46957 22 10V18C22 18.5304 21.7893 19.0391 21.4142 19.4142C21.0391 19.7893 20.5304 20 20 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18Z"
                    stroke="#1A1A1A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 16H3C2.46957 16 1.96086 15.7893 1.58579 15.4142C1.21071 15.0391 1 14.5304 1 14V6C1 5.46957 1.21071 4.96086 1.58579 4.58579C1.96086 4.21071 2.46957 4 3 4H17C17.5304 4 18.0391 4.21071 18.4142 4.58579C18.7893 4.96086 19 5.46957 19 6V8M13 16C12.4696 16 11.9609 15.7893 11.5858 15.4142C11.2107 15.0391 11 14.5304 11 14C11 13.4696 11.2107 12.9609 11.5858 12.5858C11.9609 12.2107 12.4696 12 13 12C13.5304 12 14.0391 12.2107 14.4142 12.5858C14.7893 12.9609 15 13.4696 15 14C15 14.5304 14.7893 15.0391 14.4142 15.4142C14.0391 15.7893 13.5304 16 13 16Z"
                    stroke="#1A1A1A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>{" "}
                Cash on Delivery Available
              </span>
            </div>
            <button className="flex justify-between" onClick={() => handleOpen("deliveryGuarantee")}>
              <span className="flex items-center gap-1 text-xs md:text-sm xl:text-base">
                <svg className="w-4 md:w-5 xl:w-6"
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
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {openPopup==='deliveryGuarantee' && (
        <div
          className={`fixed inset-0 z-1050 bg-[rgba(0,0,0,0.3)]  bg-opacity-50
            flex items-end justify-center transition-opacity duration-300 ${
            isAnimating ? "opacity-100" : "opacity-0"
          }`}
          onClick={handleClose}
        >
          {/* Popup Content */}
          
          <div
            className={`w-full p-6 bg-white rounded-t-2xl shadow-lg transform transition-transform duration-300 ${
              isAnimating ? "translate-y-0" : "translate-y-full"
            }`}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            
          >
            <div className="flex justify-between items-center mb-3">
    <p className="text-base font-semibold">Warranty & Returns</p>
            <button
              onClick={handleClose}
              className=" text-white rounded-lg cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <path d="M15 0C6.64286 0 0 6.64286 0 15C0 23.3571 6.64286 30 15 30C23.3571 30 30 23.3571 30 15C30 6.64286 23.3571 0 15 0ZM20.7857 22.5L15 16.7143L9.21429 22.5L7.5 20.7857L13.2857 15L7.5 9.21429L9.21429 7.5L15 13.2857L20.7857 7.5L22.5 9.21429L16.7143 15L22.5 20.7857L20.7857 22.5Z" fill="#002882"/>
</svg>
            </button>
    </div>
           <div className="w-full">
           <h2 className="text-xl font-semibold">Delivery Guarantee</h2>
          <div className=" text-gray-800">
{/* Delivery Guarantee */}

<ul className="mt-2 space-y-2">
<li className="flex items-center gap-2">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M6 12L10.2426 16.2426L18.7275 7.75732" stroke="#12B76A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
  <span>Refund if no delivery in 30 days</span>
</li>
<li className="flex items-center gap-2">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M6 12L10.2426 16.2426L18.7275 7.75732" stroke="#12B76A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
  <span>Refund if items damaged</span>
</li>
<li className="flex items-center gap-2">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M6 12L10.2426 16.2426L18.7275 7.75732" stroke="#12B76A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
  <span>Refund if package lost</span>
</li>
</ul>

{/* Valuebox Assurance */}
<h2 className="text-lg font-bold mt-6">Valuebox Assurance</h2>
<ul className="mt-2 space-y-2">
<li className="flex items-center gap-2">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M12 22.4967C12 22.4967 20.9986 19.4971 20.9986 11.9983" stroke="#EEA500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.9986 11.9984V2.99977C20.9986 2.99977 17.9991 1.5 12 1.5" stroke="#EEA500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.9996 22.4967C11.9996 22.4967 3.00101 19.4971 3.00101 11.9983" stroke="#EEA500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.00098 11.9984V2.99977C3.00098 2.99977 6.00051 1.5 11.9996 1.5" stroke="#EEA500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.9984 5.99927C11.9993 10.4986 10.4995 16.4976 10.4995 16.4976C10.4995 16.4976 8.99977 14.7075 7.5 13.4981" stroke="#EEA500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
  <span>We provide safe and secure payment method</span>
</li>
<li className="flex items-center gap-2">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M6 22C5.45 22 4.97933 21.8043 4.588 21.413C4.19667 21.0217 4.00067 20.5507 4 20V10C4 9.45 4.196 8.97933 4.588 8.588C4.98 8.19667 5.45067 8.00067 6 8H7V6C7 4.61667 7.48767 3.43767 8.463 2.463C9.43833 1.48833 10.6173 1.00067 12 1C13.3833 1 14.5627 1.48767 15.538 2.463C16.5133 3.43833 17.0007 4.61733 17 6V8H18C18.55 8 19.021 8.196 19.413 8.588C19.805 8.98 20.0007 9.45067 20 10V20C20 20.55 19.8043 21.021 19.413 21.413C19.0217 21.805 18.5507 22.0007 18 22H6ZM6 20H18V10H6V20ZM12 17C12.55 17 13.021 16.8043 13.413 16.413C13.805 16.0217 14.0007 15.5507 14 15C14 14.45 13.8043 13.9793 13.413 13.588C13.0217 13.1967 12.5507 13.0007 12 13C11.45 13 10.9793 13.196 10.588 13.588C10.1967 13.98 10.0007 14.4507 10 15C10 15.55 10.196 16.021 10.588 16.413C10.98 16.805 11.4507 17.0007 12 17ZM9 8H15V6C15 5.16667 14.7083 4.45833 14.125 3.875C13.5417 3.29167 12.8333 3 12 3C11.1667 3 10.4583 3.29167 9.875 3.875C9.29167 4.45833 9 5.16667 9 6V8Z" fill="#EEA500"/>
</svg>
  <span>We ensure your Security & Privacy.</span>
</li>
<li className="flex items-center gap-2">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M14.4847 5.22666C14.0685 5.22966 13.6552 5.24991 13.2188 5.36691C12.7432 5.49599 12.292 5.70196 11.883 5.97666C11.3085 5.63916 10.752 5.36166 10.2188 5.29641C9.5565 5.21466 8.9415 5.25891 8.22675 5.27391C7.37925 5.29116 6.8265 5.72391 5.9295 6.07041C5.03325 6.41541 3.879 6.74991 2.25 6.74991H1.5V13.9687L1.92225 14.1794L3.3045 14.8597L8.22675 20.3437L8.25 20.3669C8.8125 20.9234 9.5715 21.0614 10.242 21.0232C10.9132 20.9857 11.5433 20.7892 12.0465 20.4847C13.1543 19.8164 16.1715 17.7187 16.1715 17.7187L16.242 17.6714L16.2892 17.6249C16.6462 17.2702 16.8255 16.8374 16.9455 16.3829L19.8278 14.9294L21.984 14.2034L22.5 14.0384V6.74991H21.75C20.4893 6.75853 19.2391 6.51951 18.0705 6.04641C17.1735 5.69616 16.629 5.26791 15.7725 5.24991C15.315 5.24091 14.9002 5.22366 14.4847 5.22666ZM14.5072 6.72666C14.8448 6.72366 15.2347 6.74166 15.7267 6.74991C15.8055 6.75291 16.5262 7.06041 17.5312 7.45341C18.381 7.78716 19.5615 8.08341 21 8.17941V12.9607L19.2653 13.5472H19.2188L19.1715 13.5697L16.899 14.7187C16.7784 14.3706 16.5868 14.0514 16.3365 13.7812L16.2892 13.7107L13.1017 9.79716L12.633 9.21066L12.0465 9.67941L10.0312 11.3204C9.35475 11.7892 8.8065 11.6542 8.25 11.3909C8.08875 11.3144 8.09775 11.2912 7.96875 11.2034L11.391 8.36691L11.4375 8.32041C12.4537 7.31241 13.0785 6.96366 13.617 6.82041C13.887 6.74691 14.1705 6.72966 14.5072 6.72666ZM9.282 6.74991C9.53224 6.74048 9.78283 6.74825 10.032 6.77316C10.2285 6.79641 10.4513 6.96366 10.6418 7.03116C10.5653 7.10166 10.5097 7.14216 10.4303 7.21866L10.3837 7.26591L6.282 10.6634L5.649 11.1794L6.2115 11.7652C6.2115 11.7652 6.75375 12.3517 7.5945 12.7499C8.43525 13.1482 9.7335 13.3739 10.899 12.5624L10.9462 12.5152L12.399 11.3204L15.165 14.7187L15.1882 14.7659L15.2115 14.7884C15.7065 15.2782 15.6952 16.0484 15.2115 16.5472C15.2055 16.5524 15.2175 16.5644 15.2115 16.5697C15.2055 16.5734 15.1065 16.6319 15.0945 16.6409L14.1097 15.3044L12.891 16.1954L13.8525 17.4839C13.4625 17.7479 13.287 17.8859 12.8678 18.1642L11.8605 16.8044L10.641 17.6954L11.6025 18.9839C11.517 19.0364 11.3415 19.1542 11.274 19.1954C11.037 19.3387 10.5795 19.4999 10.1722 19.5232C9.789 19.5442 9.49575 19.4557 9.3525 19.3357L9.32925 19.3124L4.31325 13.7579L4.2195 13.6402L3 13.0312V8.17941C4.4325 8.08566 5.622 7.80141 6.46875 7.47666C7.47075 7.09266 8.18625 6.77616 8.27325 6.77316L9.282 6.74991Z" fill="#EEA500"/>
</svg>
  <span>We provide buyers protection so that they get their money back.</span>
</li>
</ul>
<button className="bg-[#002882] w-full text-white rounded-[5px] py-2 mt-5 cursor-pointer ">Learn More</button>
</div>
    </div>
    
          </div>
        </div>
      )}
          </div>
           </div>
           <div className="w-full p-4 bg-[#FFF]">
      {/* Header */}
      <div className="flex justify-between items-center mb-3  ">
        <h2 className="text-xl font-semibold">Reviews Gallery</h2>
        <button className="text-gray-500 hover:text-black flex items-center space-x-1">
          <span>View All</span> <span>›</span>
        </button>
      </div>

      {/* Review Cards */}
      <div
  ref={reviewScroll}
  className="flex max-w-[590px] w-full space-x-4 whitespace-nowrap overflow-x-scroll scrollbar-hidden select-none cursor-grab active:cursor-grabbing"
  onMouseMove={onDragReviewScroll}
>


        {allReviews.map((item) => (
          <div
            key={item.id}
            className="relative min-w-[100px] bg-gray-300 rounded-lg overflow-hidden shadow-md"
          >
            <img onDragStart={(e) => e.preventDefault()}
              src={item.img}
              alt="Review"
              className="w-[100px] h-24 object-cover"
            />
            {/* Rating */}
            <div className="absolute bottom-2 left-2 text-white flex items-center px-2 py-1 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <g clipPath="url(#clip0_7013_131074)">
    <path d="M7.28142 1.91199C7.35478 1.78609 7.45987 1.68164 7.58621 1.60904C7.71254 1.53644 7.8557 1.49823 8.00141 1.49823C8.14712 1.49823 8.29028 1.53644 8.41662 1.60904C8.54295 1.68164 8.64804 1.78609 8.72141 1.91199L10.5847 5.11065L14.2034 5.89465C14.3457 5.92558 14.4775 5.99329 14.5855 6.09101C14.6935 6.18873 14.774 6.31306 14.819 6.4516C14.864 6.59014 14.8719 6.73806 14.8419 6.8806C14.8119 7.02314 14.745 7.15533 14.648 7.26399L12.1814 10.0247L12.5547 13.708C12.5694 13.853 12.5459 13.9994 12.4863 14.1325C12.4268 14.2655 12.3334 14.3807 12.2155 14.4664C12.0975 14.552 11.9592 14.6053 11.8142 14.6208C11.6693 14.6363 11.5228 14.6135 11.3894 14.5547L8.00141 13.0613L4.61343 14.5547C4.48005 14.6135 4.33356 14.6363 4.18861 14.6208C4.04365 14.6053 3.90529 14.552 3.78735 14.4664C3.66941 14.3807 3.57602 14.2655 3.51649 14.1325C3.45696 13.9994 3.43338 13.853 3.44811 13.708L3.82144 10.0247L1.35479 7.26465C1.25761 7.156 1.19062 7.02376 1.16053 6.88113C1.13044 6.7385 1.13828 6.59047 1.18328 6.45182C1.22829 6.31317 1.30887 6.18875 1.41699 6.09099C1.52511 5.99322 1.65699 5.92552 1.79945 5.89465L5.4181 5.11065L7.28142 1.91199Z" fill="url(#paint0_linear_7013_131074)"/>
  </g>
  <defs>
    <linearGradient id="paint0_linear_7013_131074" x1="1.14258" y1="8.06187" x2="14.8597" y2="8.06187" gradientUnits="userSpaceOnUse">
      <stop stopColor="#FFC136"/>
      <stop offset="0.197568" stopColor="#FAC142"/>
      <stop offset="0.525" stopColor="#FFD168"/>
      <stop offset="0.771328" stopColor="#F5BC3A"/>
      <stop offset="1" stopColor="#E09B00"/>
    </linearGradient>
    <clipPath id="clip0_7013_131074">
      <rect width="15.9999" height="16" fill="white"/>
    </clipPath>
  </defs>
</svg>
              <span className="ml-1 font-semibold text-sm">{item.rating}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-2 my-4 bg-[#F2F2F2] h-[1px]"></div>
      <div className="flex justify-between items-center w-full pb-2">
      {/* Left Section */}
      <div className="flex items-center space-x-2">
        <h3 className="text-lg font-semibold text-[#333] ">
          Reviews (08)
        </h3>
        <span className="bg-green-100 text-green-700 text-[8px] px-2 py-1 rounded-md flex items-center space-x-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
  <path d="M3 6L5.12132 8.12132L9.36373 3.87866" stroke="#12B76A" strokeLinecap="round" strokeLinejoin="round"/>
</svg> <span>All from verified purchases</span>
        </span>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-1 text-gray-700">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <g clipPath="url(#clip0_7013_131176)">
    <path d="M7.28142 1.91199C7.35478 1.78609 7.45987 1.68164 7.58621 1.60904C7.71254 1.53644 7.8557 1.49823 8.00141 1.49823C8.14712 1.49823 8.29028 1.53644 8.41662 1.60904C8.54295 1.68164 8.64804 1.78609 8.72141 1.91199L10.5847 5.11065L14.2034 5.89465C14.3457 5.92558 14.4775 5.99329 14.5855 6.09101C14.6935 6.18873 14.774 6.31306 14.819 6.4516C14.864 6.59014 14.8719 6.73806 14.8419 6.8806C14.8119 7.02314 14.745 7.15533 14.648 7.26399L12.1814 10.0247L12.5547 13.708C12.5694 13.853 12.5459 13.9994 12.4863 14.1325C12.4268 14.2655 12.3334 14.3807 12.2155 14.4664C12.0975 14.552 11.9592 14.6053 11.8142 14.6208C11.6693 14.6363 11.5228 14.6135 11.3894 14.5547L8.00141 13.0613L4.61343 14.5547C4.48005 14.6135 4.33356 14.6363 4.18861 14.6208C4.04365 14.6053 3.90529 14.552 3.78735 14.4664C3.66941 14.3807 3.57602 14.2655 3.51649 14.1325C3.45696 13.9994 3.43338 13.853 3.44811 13.708L3.82144 10.0247L1.35479 7.26465C1.25761 7.156 1.19062 7.02376 1.16053 6.88113C1.13044 6.7385 1.13828 6.59047 1.18328 6.45182C1.22829 6.31317 1.30887 6.18875 1.41699 6.09099C1.52511 5.99322 1.65699 5.92552 1.79945 5.89465L5.4181 5.11065L7.28142 1.91199Z" fill="url(#paint0_linear_7013_131176)"/>
  </g>
  <defs>
    <linearGradient id="paint0_linear_7013_131176" x1="1.14258" y1="8.06187" x2="14.8597" y2="8.06187" gradientUnits="userSpaceOnUse">
      <stop stopColor="#FFC136"/>
      <stop offset="0.197568" stopColor="#FAC142"/>
      <stop offset="0.525" stopColor="#FFD168"/>
      <stop offset="0.771328" stopColor="#F5BC3A"/>
      <stop offset="1" stopColor="#E09B00"/>
    </linearGradient>
    <clipPath id="clip0_7013_131176">
      <rect width="15.9999" height="16" fill="white"/>
    </clipPath>
  </defs>
</svg>
        <span className=" font-medium">3.6</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M10 8L14 12L10 16" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
      </div>
    </div>
      <div id="reviews" className="flex flex-wrap">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="mb-2.5 w-full lg:w-[49%] p-2.5 bg-[#FCFCFC] border rounded-lg border-[#F2F2F2] flex flex-col items-start gap-2 2xl:gap-4"
                >
                  <div className="flex gap-2">
                    <img
                      src={review.userImg}
                      alt={review.name}
                      className="w-6 h-6 rounded-full border"
                    />
                    <div>
                      
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
                    <p className="text-[#667479] leading-5 text-sm">{review.review}</p>
                  </div>
                  <p className="text-[#999] text-xs">
                      {review.name.replace(/^(.)(.*)(.)$/, (match, first, middle, last) => 
                        first + '*'.repeat(middle.length) + last
                      )}
                      </p>
                </div>
              ))}
            </div>
    </div>
    
    <div className="p-4 bg-white">
      {/* Store Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="font-semibold flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M2.5 17.5H4.16667M4.16667 17.5H15.8333M4.16667 17.5V7.77333M17.5 17.5H15.8333M15.8333 17.5V7.77333M4.16667 7.77333C4.13551 7.75544 4.10494 7.73654 4.075 7.71667L3.625 7.41667C3.30688 7.20448 3.0714 6.88935 2.95806 6.52414C2.84472 6.15893 2.86041 5.76585 3.0025 5.41083L3.7475 3.5475C3.87124 3.23825 4.0848 2.97318 4.36063 2.78647C4.63647 2.59976 4.96192 2.49998 5.295 2.5H14.705C15.0381 2.49998 15.3635 2.59976 15.6394 2.78647C15.9152 2.97318 16.1288 3.23825 16.2525 3.5475L16.9975 5.41083C17.1396 5.76585 17.1553 6.15893 17.0419 6.52414C16.9286 6.88935 16.6931 7.20448 16.375 7.41667L15.925 7.71667C15.8951 7.73654 15.8645 7.75544 15.8333 7.77333M4.16667 7.77333C4.43587 7.92882 4.7432 8.00591 5.05392 7.99589C5.36464 7.98588 5.66636 7.88916 5.925 7.71667L7.5 6.66667L9.075 7.71667C9.34888 7.8994 9.67075 7.99692 10 7.99692C10.3292 7.99692 10.6511 7.8994 10.925 7.71667L12.5 6.66667L14.075 7.71667C14.3336 7.88916 14.6354 7.98588 14.9461 7.99589C15.2568 8.00591 15.5641 7.92882 15.8333 7.77333" stroke="#1A1A1A" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M11.6654 17.4998V13.3332C11.6654 12.8911 11.4898 12.4672 11.1772 12.1547C10.8646 11.8421 10.4407 11.6665 9.9987 11.6665C9.55667 11.6665 9.13275 11.8421 8.82019 12.1547C8.50763 12.4672 8.33203 12.8911 8.33203 13.3332V17.4998" stroke="#1A1A1A" strokeWidth="1.25"/>
          </svg> Zahir Clothing</span>
        </div>
        <button className="bg-gradient-to-r from-[#0032A3] via-[#1A51CB] to-[#0032A3] flex items-center text-white text-sm px-2.5 py-[5px] rounded-md">
          Visit Store <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M6.66675 5.33332L9.33341 7.99999L6.66675 10.6667" stroke="#E6EAF3" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
        </button>

      </div>

      {/* Store Stats */}
      <div className="bg-yellow-50 p-4 rounded-md mt-3 flex justify-between text-center">
        <div >
          <p className="text-lg font-semibold">4.8</p>
          <p className="text-gray-500 text-sm">Store Rating</p>
        </div>
        <p className="w-px bg-[#EEA500] "></p>
        <div >
          <p className="text-lg font-semibold">86.9%</p>
          <p className="text-gray-500 text-sm">Positive Reviews</p>
        </div>
        <p className="w-px bg-[#EEA500] "></p>
        <div >
          <p className="text-lg font-semibold">5 Yr.</p>
          <p className="text-gray-500 text-sm">Partner Since</p>
        </div>
      </div>

      {/* Store Recommendations */}
      <h3 className="font-semibold mt-4">Store Recommendations</h3>
      <div className="max-w-[590px] flex w-full overflow-x-auto gap-4 mt-2 scrollbar-hidden select-none cursor-grab active:cursor-grabbing" ref={store} onMouseMove={(e) => onDragScroll1(e, store)}>
        {products.map((item,index) => (
          <div key={index} className="bg-white rounded-md overflow-hidden min-w-36">
            <img
              src={item.image} 
              alt="Product"
              className="min-h-24 object-cover pointer-events-none"
            />
            <div className="p-2">
              <p className="text-red-600 font-semibold text-lg">
               <span className="text-xs">PKR</span> {item.price} <span className="text-[#999] text-sm line-through">7,699</span>
              </p>
              <p className="text-gray-500 text-sm">110k+ Orders</p>
              <div className="flex items-center text-yellow-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
  <g clipPath="url(#clip0_11892_288)">
    <path d="M6.82453 2.2925C6.89331 2.17447 6.99183 2.07655 7.11027 2.00848C7.22871 1.94042 7.36293 1.9046 7.49953 1.9046C7.63614 1.9046 7.77035 1.94042 7.88879 2.00848C8.00723 2.07655 8.10575 2.17447 8.17453 2.2925L9.92141 5.29125L13.3139 6.02625C13.4474 6.05525 13.5709 6.11872 13.6721 6.21033C13.7734 6.30195 13.8489 6.41851 13.8911 6.54839C13.9332 6.67827 13.9406 6.81694 13.9125 6.95057C13.8844 7.08421 13.8217 7.20813 13.7308 7.31L11.4183 9.89812L11.7683 13.3512C11.7821 13.4872 11.76 13.6244 11.7042 13.7492C11.6484 13.874 11.5608 13.9819 11.4502 14.0622C11.3397 14.1426 11.21 14.1925 11.0741 14.207C10.9382 14.2215 10.8008 14.2001 10.6758 14.145L7.49953 12.745L4.32328 14.145C4.19823 14.2001 4.0609 14.2215 3.925 14.207C3.78911 14.1925 3.6594 14.1426 3.54883 14.0622C3.43826 13.9819 3.3507 13.874 3.29489 13.7492C3.23908 13.6244 3.21698 13.4872 3.23078 13.3512L3.58078 9.89812L1.26828 7.31062C1.17718 7.20876 1.11438 7.08479 1.08617 6.95107C1.05795 6.81736 1.06531 6.67858 1.1075 6.5486C1.14969 6.41861 1.22524 6.30197 1.3266 6.21031C1.42796 6.11865 1.5516 6.05519 1.68516 6.02625L5.07766 5.29125L6.82453 2.2925Z" fill="#EEA500"/>
  </g>
  <defs>
    <clipPath id="clip0_11892_288">
      <rect width="15" height="15" fill="white" transform="translate(0 0.5)"/>
    </clipPath>
  </defs>
</svg>
                <span className="text-sm ml-1">4.9</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="w-full p-3 bg-[#FFF]">
  <h2 className="text-lg font-semibold mb-2">Specifications</h2>
  <div className="bg-[#F2F2F2] p-2 rounded-md">
    <div className="flex gap-5 text-gray-500 text-sm mb-1">
      <span className="max-w-[130px] min-w-[130px] text-[#999] ">High-concerned Chemical</span>
      <span className="text-[#1A1A1A] font-medium ">NONE</span>
    </div>
    <div className="flex gap-5 text-gray-500 text-sm mb-1">
      <span className="max-w-[130px] min-w-[130px] text-[#999] ">Type</span>
      <span className="text-[#1A1A1A] font-medium ">USB Adapter</span>
    </div>
    <div className="flex gap-5 text-gray-500 text-sm mb-1">
      <span className="max-w-[130px] min-w-[130px] text-[#999] ">Brand Name</span>
      <span className="text-[#1A1A1A] font-medium ">Minaj</span>
    </div>
    <div className="flex gap-5 text-gray-500 text-sm">
      <span className="max-w-[130px] min-w-[130px] text-[#999] ">Origin</span>
      <span className="text-[#1A1A1A] font-medium ">China</span>
    </div>
  </div>
  
</div>
<div className="bg-white p-4 shadow-md">
      {/* Heading */}
      <h2 className="text-lg font-semibold text-[#333]">Item Description</h2>
      
      {/* Sub-heading */}
      <h3 className="font-semibold text-[#666] mt-2">Product Description</h3>

      {/* Description */}
      <p className="text-[#999] text-sm mt-1 ">
        {isExpanded
          ? product.description
          : product.description.slice(0, 150) + "..."}{" "}
      </p>

      {/* Images */}
      <div className="flex gap-2 mt-3">
        {product.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Product"
            className="w-1/2 rounded-md object-cover h-24"
          />
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-3">
        <button
          className="text-[#002882] cursor-pointer font-semibold hover:underline"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "View Less" : "View All"}
        </button>
      </div>
    </div>
    
    </div>
      )}
    
<h1 className='text-xl lg:text-2xl mt-3 sm:mt-0 sm:mb-6 sm:py-0 p-3 sm:px-7 2xl:text-4xl font-semibold max-w-[1920px] mx-auto'>More To Love</h1>
    <MoreToLove/>

    <div className="flex md:hidden gap-3 items-center fixed bottom-0 bg-white w-full p-2 z-1055">
    <Link to='/SellerStore' className='text-center'>
    <img
          src="https://plus.unsplash.com/premium_photo-1689565611422-b2156cc65e47?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Profile"
          className="w-[30px] h-[30px] rounded-full object-cover"
        />
        <p>Store</p>
    </Link>
        <Link to='/AddToCart' className="text-dark-blue border border-dark-blue h-max py-2 w-full rounded-[5px] text-center">Add to Cart</Link>
        <Link to='/Checkout' className="bg-dark-blue text-white border border-dark-blue h-max py-2 w-full rounded-[5px] text-center">Buy Now</Link>
    </div>
    </>
  );
}

export default ProductPage;
