import React, { useState, useEffect } from 'react'
import AccountSideBar from '../Components/AccountSideBar'
import Image2 from "/src/Images/Image2.png";
import Image3 from "/src/Images/Image3.png";

const reviews = [
    {
      id: 1,
      user: "Muhammad Arshad",
      totalReviews: 1,
      likes: 46,
      helpfuls: 2,
      profileImage: Image2,
      reviews: [
        {
          product: "Wifi doorbell Camera Smart Wi-Fi Video Intercom",
          productImage:Image2,
          color: "Red/42",
          badge: "Weekend Deal",
          rating: 4,
          status: "Satisfied",
          reviewText:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
          images: [
            Image2,
            Image3,
          ],
          date: "Dec 06, 2024",
        },
        {
          product: "Wifi doorbell Camera Smart Wi-Fi Video Intercom",
          productImage:Image2,
          color: "Red/42",
          badge: "Weekend Deal",
          rating: 4,
          status: "Satisfied",
          reviewText:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
          images: [
            Image2,
            Image3,
          ],
          date: "Dec 06, 2024",
        },
      ],
      helpfulReviews: [
        {
          product: "Wifi doorbell Camera Smart Wi-Fi Video Intercom",
          color: "Red/42",
          rating: 4,
          status: "Satisfied",
          reviewText:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
          images: [
            "https://via.placeholder.com/50",
            "https://via.placeholder.com/50",
          ],
          date: "Dec 06, 2024",
        },
      ],
    },
  ];

function MyProfile() {
   
  const [activeModal, setActiveModal] = useState(null);
  const [closing, setClosing] = useState(false); // New state for closing animation
  const openModal = (modalName) => {
    setActiveModal(modalName);
    setClosing(false); // Reset closing animation when opening a new modal
  };

  const closeModal = () => {
    setClosing(true); // Trigger closing animation
    setTimeout(() => {
      setActiveModal(null); // Close the modal after animation
      setClosing(false);
    }, 390); // Match the animation duration
  };

  const [name, setName] = useState("Muhammad Arshad");
  const [profileImage, setProfileImage] = useState(null); // Initially null
  const [isSaving, setIsSaving] = useState(false);

  // On initial render, check localStorage for saved profile image and name
  useEffect(() => {
    const savedName = localStorage.getItem('profileName');
    const savedImage = localStorage.getItem('profileImage');

    // If image is saved in localStorage, use it, otherwise use the default
    if (savedImage) {
      setProfileImage(savedImage);
    } else {
      setProfileImage(Image2); // Use the imported default image
    }

    // If name is saved in localStorage, set it
    if (savedName) {
      setName(savedName);
    }
  }, []); // Empty dependency array ensures this only runs once when the component mounts

 

  const handleImageChange = (e) => {
    const file = e.target.files[0];
  
    if (file) {
      // Check file size (max 500KB)
      if (file.size > 500 * 1024) {
        alert("File size must be less than 500KB.");
        return;
      }
  
      // Check file type (PNG, JPG, SVG)
      const validTypes = ["image/png", "image/jpeg", "image/svg+xml"];
      if (!validTypes.includes(file.type)) {
        alert("Only PNG, JPG, and SVG files are allowed.");
        return;
      }
  
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result;
        setProfileImage(base64Image); // Set the base64 image string in state
        localStorage.setItem("profileImage", base64Image); // Save the image in localStorage
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSaving(true);
    // Save name to localStorage
    localStorage.setItem("profileName", name);
    setTimeout(() => {
      setIsSaving(false);
      closeModal();
    }, 1500);
  };


  return (
    <div className='bg-natural-0'>
    <div className='flex gap-2 sm:gap-4 md:p-3 xl:p-6 max-w-[1920px] mx-auto'>
        <div className='hidden md:block'>
            <AccountSideBar/>
        </div>
        <div className='flex-1 min-w-0'>
      <div className=" bg-white border border-natural-color sm:rounded-lg p-2 sm:p-4">
        <div className='flex items-center space-x-4'>
        <img
  src={profileImage}
  alt="profile"
  className="w-20 xs:w-25 sm:w-30 h-20 xs:h-25 sm:h-30 rounded-full"
/>
        <div className='w-full lg:w-auto'>
        <h2 className="text-lg font-semibold flex gap-1.5">
        {name} <button onClick={()=>openModal('editProfile')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
  <path d="M15.9049 12.5339V16.2339C15.9047 16.7575 15.6966 17.2595 15.3265 17.6296C14.9563 17.9998 14.4543 18.2079 13.9308 18.2081H4.26326C4.00306 18.208 3.74544 18.1565 3.50521 18.0565C3.26498 17.9565 3.04687 17.8101 2.86342 17.6255C2.67997 17.441 2.5348 17.222 2.43624 16.9812C2.33767 16.7404 2.28767 16.4825 2.2891 16.2223V6.56561C2.28755 6.30582 2.33758 6.0483 2.43628 5.80798C2.53499 5.56767 2.6804 5.34933 2.86411 5.16562C3.04781 4.98192 3.26615 4.8365 3.50647 4.7378C3.74679 4.63909 4.0043 4.58906 4.2641 4.59061H7.96326" stroke="#999999" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M15.9039 7.99576L12.4997 4.59076M5.69141 13.6691V11.8649C5.69307 11.5674 5.81141 11.2816 6.02057 11.0708L13.9639 3.12743C14.0693 3.02085 14.1948 2.93624 14.3331 2.8785C14.4714 2.82075 14.6198 2.79102 14.7697 2.79102C14.9196 2.79102 15.068 2.82075 15.2064 2.8785C15.3447 2.93624 15.4702 3.02085 15.5756 3.12743L17.3681 4.91993C17.4747 5.02533 17.5593 5.15082 17.617 5.28915C17.6748 5.42747 17.7045 5.57587 17.7045 5.72576C17.7045 5.87566 17.6748 6.02406 17.617 6.16238C17.5593 6.30071 17.4747 6.4262 17.3681 6.5316L9.42474 14.4749C9.21352 14.6847 8.92825 14.8029 8.63057 14.8041H6.82641C6.6773 14.8043 6.52961 14.7751 6.3918 14.7181C6.254 14.6612 6.12879 14.5776 6.02335 14.4722C5.91791 14.3667 5.83432 14.2415 5.77736 14.1037C5.7204 13.9659 5.69119 13.8182 5.69141 13.6691Z" stroke="#999999" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
            </button></h2>
          <div className='flex md:justify-between items-center gap-3 md:gap-1 mt-3 text-sm sm:text-base text-natural-gray'>
          <p className=" text-center lg:w-24"><span className='text-natural-black text-lg md:text-2xl'>{reviews[0].totalReviews}</span><br/> Total Reviews</p>
          <p className='bg-natural-gray-20 w-px h-8'></p>

          <p className=" text-center lg:w-24"><span className='text-natural-black text-lg md:text-2xl'>{reviews[0].likes}</span><br/> Likes</p>
          <p className='bg-natural-gray-20 w-px h-8'></p>

          <p className=" text-center lg:w-24"><span className='text-natural-black text-lg md:text-2xl'>{reviews[0].helpfuls}</span><br/> Helpfuls</p>
          </div>
        </div>
        </div>
        
        <p className='flex text-[#12B76A] gap-1 mt-4'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 17C12.5304 17 13.0391 16.7893 13.4142 16.4142C13.7893 16.0391 14 15.5304 14 15C14 14.4696 13.7893 13.9609 13.4142 13.5858C13.0391 13.2107 12.5304 13 12 13C11.4696 13 10.9609 13.2107 10.5858 13.5858C10.2107 13.9609 10 14.4696 10 15C10 15.5304 10.2107 16.0391 10.5858 16.4142C10.9609 16.7893 11.4696 17 12 17ZM18 8C18.5304 8 19.0391 8.21071 19.4142 8.58579C19.7893 8.96086 20 9.46957 20 10V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V10C4 9.46957 4.21071 8.96086 4.58579 8.58579C4.96086 8.21071 5.46957 8 6 8H7V6C7 4.67392 7.52678 3.40215 8.46447 2.46447C9.40215 1.52678 10.6739 1 12 1C12.6566 1 13.3068 1.12933 13.9134 1.3806C14.52 1.63188 15.0712 2.00017 15.5355 2.46447C15.9998 2.92876 16.3681 3.47995 16.6194 4.08658C16.8707 4.69321 17 5.34339 17 6V8H18ZM12 3C11.2044 3 10.4413 3.31607 9.87868 3.87868C9.31607 4.44129 9 5.20435 9 6V8H15V6C15 5.20435 14.6839 4.44129 14.1213 3.87868C13.5587 3.31607 12.7956 3 12 3Z" fill="#12B76A"/>
</svg> Your information and privacy will be kept secure and uncompromised.</p>
      </div>
      <div className="mt-4 pt-4 bg-white border border-natural-color sm:rounded-lg p-2 sm:p-4">
        <h3 className="text-md font-semibold">Your Reviews</h3>
        {reviews[0].reviews.map((review, index) => (
          <div key={index} className="mt-2 p-3 border rounded-md border-natural-color">
            <div className='flex gap-2 bg-natural-color p-2 rounded-md'>
              <img className="w-17 h-17" src={review.productImage} alt="" />
             <div className='flex flex-col justify-between min-w-0'>
             <div className='flex gap-2 min-w-0'>
           <span className="text-xs text-nowrap bg-red-500 text-white h-max px-2 py-1 rounded-md">
              {review.badge}
            </span>
            <h4 className="font-semibold truncate min-w-0">{review.product}</h4>
           </div>
            <p className="text-gray-500 text-sm">{review.color}</p>
          </div>
          </div>
            
            <div className="flex items-center justify-between space-x-1 mt-3">
              <div className="flex items-center space-x-1 mt-1">
              {Array.from({ length: review.rating }, (_, i) => (
                <span key={i} className="text-natural-black">
                <svg xmlns="http://www.w3.org/2000/svg" className='w-[15px] sm:w-[18px]' viewBox="0 0 24 24" fill="none">
                <path d="M10.7125 0.834866L7.78319 7.04035L1.22918 8.03866C0.053853 8.21677 -0.417174 9.73064 0.435161 10.5977L5.17683 15.4253L4.05534 22.2447C3.85347 23.4774 5.09609 24.4007 6.13683 23.8242L12 20.6043L17.8632 23.8242C18.9039 24.396 20.1465 23.4774 19.9447 22.2447L18.8232 15.4253L23.5648 10.5977C24.4172 9.73064 23.9461 8.21677 22.7708 8.03866L16.2168 7.04035L13.2875 0.834866C12.7626 -0.271247 11.2419 -0.285308 10.7125 0.834866Z" fill="#1A1A1A"/>
              </svg></span>
              ))}
              {Array.from({ length: 5 - review.rating }, (_, i) => (
                <span key={i} className="text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className='w-[15px] sm:w-[18px]' viewBox="0 0 24 24" fill="none">
                <path d="M8.46018 7.94876L7.93377 8.02895L1.37976 9.02726L1.379 9.02738C1.22157 9.05123 1.08756 9.16079 1.02679 9.35645C0.965647 9.55331 1.00804 9.75401 1.14831 9.8967L1.14858 9.89699L5.89026 14.7245L6.24595 15.0867L6.16358 15.5875L5.0422 22.4063C5.04217 22.4065 5.04214 22.4067 5.04211 22.4069C5.0421 22.4069 5.04209 22.407 5.04209 22.407C5.00468 22.6368 5.09731 22.8129 5.2316 22.914C5.3645 23.0141 5.51162 23.0274 5.65228 22.9494L5.65547 22.9477L11.5186 19.7278L12 19.4634L12.4814 19.7278L18.3445 22.9477L18.3447 22.9478C18.4867 23.0258 18.6358 23.0119 18.7691 22.9117C18.9032 22.811 18.9954 22.6361 18.9578 22.4065C18.9578 22.4064 18.9578 22.4064 18.9578 22.4063L17.8364 15.5875L17.7541 15.0867L18.1097 14.7245L22.8514 9.89699L22.8517 9.8967C22.992 9.75401 23.0344 9.55331 22.9732 9.35645C22.9124 9.16079 22.7784 9.05123 22.621 9.02738L22.6202 9.02726L16.0662 8.02895L15.5398 7.94876L15.3125 7.46723L12.384 1.26356C12.3839 1.26333 12.3838 1.26311 12.3837 1.26288C12.2932 1.07272 12.1415 1.00049 11.9983 1C11.8581 0.999521 11.7089 1.06727 11.6168 1.26175L8.46018 7.94876ZM8.46018 7.94876L8.68749 7.46723L11.6167 1.26212L8.46018 7.94876Z" stroke="#1A1A1A" strokeWidth="2"/>
              </svg></span>
              ))}
              <span className="text-gray-500 text-sm ml-1">{review.status}</span>
              </div>
              <div className='hidden sm:flex gap-2 text-natural-gray'>
                <img className='w-6 h-6 rounded-full' src={Image2} alt="" />
                <p>Muhammad Arshad on Dec 06, 2024</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm mt-2">{review.reviewText}</p>
            
            <div className='flex justify-between items-center'>
            <div className='flex gap-1 sm:gap-2 my-4 text-natural-gray text-sm sm:text-base'>
              <p className='flex items-center gap-1'><svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
                <rect width="21.5385" height="20" fill="white"/>
                <path d="M6.70312 15.2918L9.48518 17.2918C9.84415 17.6251 10.6518 17.7918 11.1903 17.7918H14.6006C15.6775 17.7918 16.8442 17.0418 17.1134 16.0418L19.2672 9.95847C19.7159 8.7918 18.9083 7.7918 17.5621 7.7918H13.9724C13.4339 7.7918 12.9852 7.37514 13.0749 6.7918L13.5236 4.12514C13.7031 3.37514 13.1647 2.5418 12.357 2.2918C11.639 2.0418 10.7416 2.37514 10.3826 2.87514L6.70312 7.95847" fill="#999999"/>
                <path d="M2.125 15.2917V7.12508C2.125 5.95841 2.66346 5.54175 3.91987 5.54175H4.81731C6.07372 5.54175 6.61218 5.95841 6.61218 7.12508V15.2917C6.61218 16.4584 6.07372 16.8751 4.81731 16.8751H3.91987C2.66346 16.8751 2.125 16.4584 2.125 15.2917Z" fill="#999999"/>
              </svg> 2.5k</p>
              <p className='bg-natural-gray-20 w-px'></p>
              <p>Replay</p>
              <p className='bg-natural-gray-20 w-px'></p>
              <p>Delete</p>
              <p className='bg-natural-gray-20 w-px hidden sm:block'></p>
              <button className='hidden sm:block'>
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                <path d="M6.3724 10C6.3724 10.4421 6.1968 10.866 5.88424 11.1786C5.57168 11.4911 5.14776 11.6667 4.70573 11.6667C4.2637 11.6667 3.83978 11.4911 3.52722 11.1786C3.21466 10.866 3.03906 10.4421 3.03906 10C3.03906 9.55801 3.21466 9.13409 3.52722 8.82153C3.83978 8.50897 4.2637 8.33337 4.70573 8.33337C5.14776 8.33337 5.57168 8.50897 5.88424 8.82153C6.1968 9.13409 6.3724 9.55801 6.3724 10ZM12.2057 10C12.2057 10.4421 12.0301 10.866 11.7176 11.1786C11.405 11.4911 10.9811 11.6667 10.5391 11.6667C10.097 11.6667 9.67311 11.4911 9.36055 11.1786C9.04799 10.866 8.8724 10.4421 8.8724 10C8.8724 9.55801 9.04799 9.13409 9.36055 8.82153C9.67311 8.50897 10.097 8.33337 10.5391 8.33337C10.9811 8.33337 11.405 8.50897 11.7176 8.82153C12.0301 9.13409 12.2057 9.55801 12.2057 10ZM18.0391 10C18.0391 10.4421 17.8635 10.866 17.5509 11.1786C17.2383 11.4911 16.8144 11.6667 16.3724 11.6667C15.9304 11.6667 15.5064 11.4911 15.1939 11.1786C14.8813 10.866 14.7057 10.4421 14.7057 10C14.7057 9.55801 14.8813 9.13409 15.1939 8.82153C15.5064 8.50897 15.9304 8.33337 16.3724 8.33337C16.8144 8.33337 17.2383 8.50897 17.5509 8.82153C17.8635 9.13409 18.0391 9.55801 18.0391 10Z" fill="#1A1A1A"/>
              </svg>
              </button>
            </div>
            
            <button className='flex items-center gap-1 text-sm sm:text-base sm:border border-[#666] py-1 px-1 sm:px-2 rounded-full'>
              <svg xmlns="http://www.w3.org/2000/svg" className='w-4 sm:w-5' viewBox="0 0 20 20" fill="none">
  <path d="M3.125 10.625V15.625C3.125 15.9565 3.2567 16.2745 3.49112 16.5089C3.72554 16.7433 4.04348 16.875 4.375 16.875H15.625C15.9565 16.875 16.2745 16.7433 16.5089 16.5089C16.7433 16.2745 16.875 15.9565 16.875 15.625V10.625M10 12.5V2.1875M13.75 5.625L10 1.875L6.25 5.625" stroke="#1A1A1A" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</svg> Share</button>
            </div>
            <div className="flex space-x-2 mt-2">
              {review.images.map((img, i) => (
                <img key={i} src={img} alt="" className="w-17 h-17 rounded-md" />
              ))}
            </div>
            <p className="text-gray-400 text-xs mt-2">{review.date}</p>
          </div>
        ))}
      </div>
   
        </div>

        {activeModal === "editProfile" && (
  <div
    className="fixed inset-0 bg-[#00000042] bg-opacity-50 flex justify-center p-3 items-center"
    onClick={closeModal}
  >
    <div
      className={`${closing ? 'animate-flyout' : 'animate-wiggle'} relative bg-white p-3 sm:p-6 rounded-[10px] sm:rounded-[15px] shadow-lg`}
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="absolute -top-3 -right-3 bg-white rounded-full"
        onClick={closeModal}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
          <path d="M15 0C6.64286 0 0 6.64286 0 15C0 23.3571 6.64286 30 15 30C23.3571 30 30 23.3571 30 15C30 6.64286 23.3571 0 15 0ZM20.7857 22.5L15 16.7143L9.21429 22.5L7.5 20.7857L13.2857 15L7.5 9.21429L9.21429 7.5L15 13.2857L20.7857 7.5L22.5 9.21429L16.7143 15L22.5 20.7857L20.7857 22.5Z" fill="#002882"/>
        </svg>
      </button>

      <div className="flex justify-center items-center">
        <div className="rounded-2xl max-w-[600px] w-full">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Update Profile</h2>

          <form onSubmit={handleSubmit}>
            <div className="relative w-20 h-20 mb-4">
              <img
                src={profileImage}
                alt="Profile"
                className="w-20 h-20 rounded-full object-cover"
              />
              <label className="absolute bottom-0 right-0 bg-white border border-gray-300 rounded-full p-1 cursor-pointer">
                <input type="file" className="hidden" onChange={handleImageChange} />
                📷
              </label>
            </div>

            <label className="block mt-2 text-gray-700 font-medium">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-natural-gray-20 rounded-lg focus:outline-none focus:ring-0"
            />

            <button
              type="submit"
              className="w-full mt-4 py-2 bg-dark-blue text-white font-semibold rounded-lg transition"
              disabled={isSaving}
            >
              {isSaving ? "Saving..." : "Save"}
            </button>
          </form>

          <div className="text-sm text-natural-gray mt-4">
            <p className="text-natural-black mb-1">
              How we use your profile avatar and username?
            </p>
            Your avatar and username may be shown to others when you add an item to your cart, buy an item, or participate in a promo or event. To opt out, go to ‘Notifications – Avatar and username sharing’.
          </div>
        </div>
      </div>
    </div>
  </div>
)}

    </div>
    </div>
  )
}

export default MyProfile