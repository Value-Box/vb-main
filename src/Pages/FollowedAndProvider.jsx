import React from 'react'
import AccountSideBar from '../Components/AccountSideBar'
import DetailProductCard from '../Components/Cards/DetailProductCard';
import { NavLink } from 'react-router-dom';
import user1 from "/src/Images/user1.png";
import user2 from "/src/Images/user2.png";
import user3 from "/src/Images/user3.png";
import user4 from "/src/Images/user4.png";
import user5 from "/src/Images/user5.png";

const users = [
  { id: 1, img: user1 },
  { id: 2, img: user2 },
  { id: 3, img: user3 },
  { id: 4, img: user4 },
  { id: 5, img: user5 },
  { id: 6, img: user1 },
  { id: 7, img: user4 },
  { id: 8, img: user2 },
  { id: 9, img: user3 },
  ];
  const products = [
    { id: 1, name: "Men'S Other Running Shoes Korean Style", price: 5000, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080' },
    { id: 2, name: "Men'S Other Running Shoes Korean Style", price: 4500, image: "https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8aGVhZHBob25lfGVufDB8MHx8fDE3MjEzMDM2OTB8MA&ixlib=rb-4.0.3&q=80&w=1080" },
    { id: 3, name: "Men'S Other Running Shoes Korean Style", price: 4000, image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw0fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080" },
    { id: 4, name: "Men'S Other Running Shoes Korean Style", price: 6000, image: "https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080" },
    { id: 3, name: "Men'S Other Running Shoes Korean Style", price: 4000, image: "https://images.unsplash.com/photo-1528148343865-51218c4a13e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwzfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080" },
    { id: 5, name: "Men'S Other Running Shoes Korean Style", price: 6000, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080' },
    { id: 6, name: "Men'S Other Running Shoes Korean Style", price: 4000, image: "https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8aGVhZHBob25lfGVufDB8MHx8fDE3MjEzMDM2OTB8MA&ixlib=rb-4.0.3&q=80&w=1080" },
    { id: 7, name: "Men'S Other Running Shoes Korean Style", price: 6000, image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw0fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080" },
    { id: 8, name: "Men'S Other Running Shoes Korean Style", price: 5500, image: "https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080" },
    { id: 9, name: "Men'S Other Running Shoes Korean Style", price: 5500, image: "https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080" }
  ];

  
function FollowedAndProvider() {
  return (
    <>
    <div className="w-full flex flex-col md:hidden bg-white shadow-[0px_4px_8px_-2px_rgba(16,24,40,0.10),0px_2px_4px_-2px_rgba(16,24,40,0.06)]">
      {/* Search Bar */}
      <div className="flex items-center p-4 pr-6 ">
      <NavLink to="/OrderDetails">
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
  <path d="M21 12L15 18L21 24" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
      </NavLink>
        <div className="relative flex-1 items-center">
       <span className='text-[18px]'>Followed Stories</span>
        </div>
    </div>
   
    </div>   
       <div className="w-full mx-auto max-w-[1920px] md:p-6 p-5 bg-[#FCFCFC] ">
    <div className="flex flex-col md:flex-row gap-5  w-full">
        {/* Left Section - Sidebar */}
  <div className="hidden md:flex">
    <AccountSideBar />
  </div>

  
  <div className="w-full flex-1 md:space-y-7.5 space-y-5">
    {/* Main Content */}
    <div className="w-full flex flex-col gap-5">
      <div className="flex justify-between items-center">
      <span className='text-[24px]'>Following</span>
        <a href="#" className="text-sm flex items-center">
          See All <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M10 8L14 12L10 16" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>   
        </a>
      </div>
      <div className="flex flex-wrap gap-2 md:gap-4 overflow-x-auto scrollbar-hide">
        {users.map((user) => (
          <NavLink to='/SellerStore' key={user.id}>
   <div  className="flex flex-col items-center min-w-[25%] md:min-w-[120px]">
            <img
              src={user.img}
              alt="User"
              className="md:w-[120px] md:h-[120px] w-[80px] h-[80px] rounded-full"
            />
            <p className="text-xs mt-2 text-gray-600">YS Traders</p>
          </div>
          </NavLink>
       
        ))}
      </div>
    </div>
    <hr className="border-t-[1px] border-[#CCD1D2] md:hidden flex" />
    <div className="flex flex-col gap-5 flex-wrap px-0 bg-[#FCFCFC]">
        <div className='flex items-center justify-between'>
        <span className='text-[24px]'>Provider Updates</span>
     <a href="#" className="text-sm flex items-center">
          See All <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M10 8L14 12L10 16" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>   
        </a>
        </div>
    
    <DetailProductCard products={products} style="flex-wrap justify-center md:justify-start !px-0" />
  </div>
  
 
  
    
     
     
  </div>
    </div>
   </div>
    </>
  )
}

export default FollowedAndProvider
