import React, { useRef } from 'react'
import MoreToLove from '../Components/MoreToLove'
import { Link, NavLink } from 'react-router-dom';
import thankyounimation from "/src/Images/thankyounimation.gif";


function ThankYouPage() {
    const productImgCarousel = useRef(null);

    const onDragProdImgScroll = (e) => {
      if (e.buttons !== 1 || !productImgCarousel.current) return;
      productImgCarousel.current.scrollLeft -= e.movementX;
    };

  return (
    <div className='bg-[#F2F2F2] py-2 flex flex-col gap-4'>
        <div className='bg-[#FCFCFC] md:px-6 lg:px-15 2xl:px-32 py-9'>
          
        <div className="flex flex-col items-center justify-center relative p-6 border-b border-[#F2F2F2] md:border-b-0 w-full md:max-w-sm mx-auto bg-white md:bg-transparent">
        <img src={thankyounimation} className='absolute left-0 md:left-[-8%] z-0' alt="" />
        <img src={thankyounimation} className='absolute right-0 md:right-[-8%]' alt="" />
      <h2 className="text-red-500 flex items-center gap-1 text-xl 2xl:text-2xl text-nowrap font-medium">
        <svg xmlns="http://www.w3.org/2000/svg" className='h-6 w-6 2xl:w-8 2xl:h-8' viewBox="0 0 37 36" fill="none">
  <path d="M7.25284 6.75005C12.501 4.12655 16.8153 7.31255 18.5028 9.56255C20.1903 7.31255 24.5047 4.12655 29.7528 6.75005C36.5028 10.1251 34.8153 18.5626 29.7528 23.6251C27.2823 26.0956 22.932 30.4459 19.7505 32.8658C19.3951 33.1358 18.9591 33.2781 18.5128 33.2697C18.0666 33.2613 17.6362 33.1028 17.2912 32.8197C14.3741 30.4651 9.68847 26.0607 7.25284 23.6251C2.19034 18.5626 0.502844 10.1251 7.25284 6.75005Z" fill="#F8312F"/>
  <path d="M18.5028 9.56241V12.9937C19.9316 9.97304 23.481 5.93991 29.3681 6.56654C24.2943 4.28279 20.1487 7.36754 18.5028 9.56241ZM13.9421 6.22904C12.0453 5.56866 9.75597 5.49779 7.25284 6.74991C0.502843 10.1249 2.19034 18.5624 7.25284 23.6249C9.68847 26.0605 14.3741 30.4649 17.2912 32.8195C17.6364 33.1025 18.0668 33.2608 18.513 33.269C18.9593 33.2771 19.3952 33.1347 19.7505 32.8645C20.0362 32.647 20.3306 32.4153 20.6336 32.1693C17.4228 29.7584 12.9161 25.9604 10.4692 23.7745C4.89259 18.7897 3.03297 10.4827 10.4692 7.15941C11.5674 6.65941 12.741 6.34502 13.9421 6.22904Z" fill="#CA0B4A"/>
  <path d="M24.2243 18.8263C25.7503 19.7074 28.1914 18.3361 29.6766 15.7636C31.1619 13.191 31.1289 10.3913 29.6029 9.51029C28.0769 8.62926 25.6358 10.0005 24.1505 12.5731C22.6653 15.1456 22.6983 17.9453 24.2243 18.8263Z" fill="#F37366"/>
</svg> Thank You for your purchase
      </h2>
      <p className="text-2xl lg:text-3xl 2xl:text-4xl font-bold text-[#EEA500] mt-2">PKR 5,465</p>
      <p className="2xl:text-xl mt-1">Your order number is 20287894654</p>
    </div>
    <div className="bg-white md:rounded-[10px] p-6 w-full max-w-[1428px] mx-auto border border-[#F2F2F2] ">
      {/* Heading */}
      <div className="border-b pb-3 border-[#F2F2F2]">
        <h2 className="text-gray-800 font-semibold text-lg">Order Summary</h2>
        <p className="text-[#12B76A] text-sm flex items-center gap-1.5 mt-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M8.0013 11.3332C8.35492 11.3332 8.69406 11.1927 8.94411 10.9426C9.19416 10.6926 9.33464 10.3535 9.33464 9.99984C9.33464 9.64622 9.19416 9.30708 8.94411 9.05703C8.69406 8.80698 8.35492 8.6665 8.0013 8.6665C7.64768 8.6665 7.30854 8.80698 7.05849 9.05703C6.80844 9.30708 6.66797 9.64622 6.66797 9.99984C6.66797 10.3535 6.80844 10.6926 7.05849 10.9426C7.30854 11.1927 7.64768 11.3332 8.0013 11.3332ZM12.0013 5.33317C12.3549 5.33317 12.6941 5.47365 12.9441 5.7237C13.1942 5.97374 13.3346 6.31288 13.3346 6.6665V13.3332C13.3346 13.6868 13.1942 14.0259 12.9441 14.276C12.6941 14.526 12.3549 14.6665 12.0013 14.6665H4.0013C3.64768 14.6665 3.30854 14.526 3.05849 14.276C2.80844 14.0259 2.66797 13.6868 2.66797 13.3332V6.6665C2.66797 6.31288 2.80844 5.97374 3.05849 5.7237C3.30854 5.47365 3.64768 5.33317 4.0013 5.33317H4.66797V3.99984C4.66797 3.11578 5.01916 2.26794 5.64428 1.64281C6.2694 1.01769 7.11725 0.666504 8.0013 0.666504C8.43904 0.666504 8.87249 0.752723 9.27691 0.920239C9.68133 1.08775 10.0488 1.33329 10.3583 1.64281C10.6679 1.95234 10.9134 2.31981 11.0809 2.72423C11.2484 3.12864 11.3346 3.5621 11.3346 3.99984V5.33317H12.0013ZM8.0013 1.99984C7.47087 1.99984 6.96216 2.21055 6.58709 2.58562C6.21202 2.9607 6.0013 3.4694 6.0013 3.99984V5.33317H10.0013V3.99984C10.0013 3.4694 9.79059 2.9607 9.41552 2.58562C9.04044 2.21055 8.53174 1.99984 8.0013 1.99984Z" fill="#12B76A"/>
</svg> All Data is encrypted <svg xmlns="http://www.w3.org/2000/svg" width="10" height="20" viewBox="0 0 10 20" fill="none">
  <path fillRule="evenodd" clipRule="evenodd" d="M8.45891 10.5929L3.74474 15.3071L2.56641 14.1288L6.69141 10.0038L2.56641 5.87877L3.74474 4.70044L8.45891 9.41461C8.61513 9.57088 8.70289 9.7828 8.70289 10.0038C8.70289 10.2247 8.61513 10.4367 8.45891 10.5929Z" fill="#12B76A"/>
</svg></p>
      </div>

      {/* Order Details */}
      <div className="mt-4 space-y-3 text-gray-700">
        <div className="flex justify-between">
          <span>Item(s) Total</span>
          <del className="text-[#999] font-medium">PKR 24,900</del>
        </div>

        <div className="flex justify-between">
          <span>Item(s) Discount</span>
          <span className="text-red-500">-PKR 4,900</span>
        </div>

        <div className="flex justify-between">
          <span>Special Discount</span>
          <span className="text-red-500">-PKR 4,900</span>
        </div>

        <div className="flex justify-between font-medium">
          <span>Subtotal</span>
          <span className="text-gray-900">PKR 20,000</span>
        </div>

        <div className="flex justify-between py-2 border-y-[1px] border-[#F2F2F2] ">
          <span>Shipping Fee</span>
          <span className="text-[#12B76A] font-medium">FREE</span>
        </div>

        <div className="flex justify-between pt-3 font-semibold">
          <span>Order Total</span>
          <span className="text-gray-900">PKR 20,000</span>
        </div>

        <div className="flex justify-between text-red-500 font-medium">
          <span>You Saved</span>
          <span>-PKR 4,900</span>
        </div>
      </div>
    </div>

    <div className="bg-white rounded-lg p-2 md:p-6 w-full max-w-[1428px] mt-4 mx-auto flex flex-col-reverse sm:flex-col border border-[#F2F2F2] ">
      {/* Shipping Info */}
      <div className="bg-[#FEF6E6] text-gray-700 p-3 rounded-md ">
        <div className='flex justify-between items-center'>
        <div className="flex items-center gap-2">
          <span className="font-medium">Shipping updates will be sent to</span>
          <span className="font-medium">farmaharris669@gmail.com</span>
        </div>
        <button className="text-[#EEA500] font-medium hover:underline">Cancel</button>
        </div>
        <p className='flex gap-1.5'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M4 6L10.108 10.612L10.11 10.614C10.788 11.111 11.127 11.36 11.499 11.456C11.8276 11.541 12.1724 11.541 12.501 11.456C12.873 11.36 13.213 11.111 13.893 10.612C13.893 10.612 17.81 7.606 20 6M3 15.8V8.2C3 7.08 3 6.52 3.218 6.092C3.41 5.715 3.715 5.41 4.092 5.218C4.52 5 5.08 5 6.2 5H17.8C18.92 5 19.48 5 19.907 5.218C20.284 5.41 20.59 5.715 20.782 6.092C21 6.519 21 7.079 21 8.197V15.804C21 16.922 21 17.48 20.782 17.908C20.59 18.2845 20.2837 18.5904 19.907 18.782C19.48 19 18.921 19 17.803 19H6.197C5.079 19 4.519 19 4.092 18.782C3.71569 18.5903 3.40974 18.2843 3.218 17.908C3 17.48 3 16.92 3 15.8Z" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg> farmanharis66@gmail.com</p>
      </div>

      {/* Product Images */}
      <div className="hidden sm:flex mt-4 overflow-x-auto space-x-4">
        {[
          "https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
          "https://plus.unsplash.com/premium_photo-1678099940967-73fe30680949?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
          "https://plus.unsplash.com/premium_photo-1668418188837-d40b734ed6d2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D",
          "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D",
        ].map((src, index) => (
          <div key={index} className="text-center">
            <img
              src={src}
              alt="Product"
              className="w-24 h-24 object-cover rounded-md shadow"
            />
            <p className="text-gray-800 text-sm 2xl:text-base mt-1 font-medium">PKR 1,500</p>
          </div>
        ))}
      </div>
      <div
  ref={productImgCarousel}
  className="flex sm:hidden mt-4 mb-2 overflow-x-scroll space-x-4 scrollbar-hidden 
             select-none cursor-grab active:cursor-grabbing"
  onMouseMove={onDragProdImgScroll} // No need to pass ref manually
>
  {[
    "https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1678099940967-73fe30680949?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1668418188837-d40b734ed6d2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D",
    "https://plus.unsplash.com/premium_photo-1668418188837-d40b734ed6d2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D",
  ].map((src, index) => (
    <div key={index} className="min-w-[100px] text-center snap-start">
      <img
        src={src}
        alt="Product"
        className="w-30 h-24 object-cover rounded-md shadow pointer-events-none"
      />
      <p className="text-gray-800 text-sm 2xl:text-base mt-1 font-medium">
        PKR 1,500
      </p>
    </div>
  ))}
</div>

      {/* Info Message */}
      <div className="mt-4 flex items-center text-xs md:text-base justify-between gap-1.5 p-1.5 md:p-3 rounded-sm md:rounded-[10px] border border-[#F2F2F2] ">
      <p className='flex items-center gap-1.5 '>
      <svg xmlns="http://www.w3.org/2000/svg" className='w-4 h-4 md:w-6 md:h-6' viewBox="0 0 24 24" fill="none">
  <path d="M21.9961 3.94006L11.9961 0.440063L1.99609 3.94006V12.0001C1.99609 16.1271 4.53009 19.0121 6.89209 20.8031C8.31817 21.8735 9.88231 22.7464 11.5421 23.3981C11.6554 23.4407 11.7694 23.4814 11.8841 23.5201L11.9961 23.5601L12.1101 23.5201C12.3287 23.4441 12.5455 23.3628 12.7601 23.2761C14.3058 22.6392 15.7642 21.8082 17.1001 20.8031C19.4631 19.0121 21.9961 16.1271 21.9961 12.0001V3.94006ZM10.9971 15.4151L6.75609 11.1721L8.17009 9.75706L10.9981 12.5861L16.6551 6.92906L18.0701 8.34306L10.9971 15.4151Z" fill="#12B76A"/>
</svg> ValueBox does not ask customers for additional fees via SMS or email
      </p>
      <Link to='/OrderDetails' className="bg-gradient-to-r from-[#FFC136] via-[#FAC142] via-[#FFD168] via-[#F5BC3A] to-[#E09B00] 
 text-[#1A1A1A] px-2 md:px-4 py-1 md:py-2 rounded-md font-medium text-xs md:text-base">
          View Order
        </Link>
      </div>

      {/* Buttons */}
      
    </div>
    <div className="mt-4 flex justify-center">
        
        <NavLink to="/" className="bg-[#002882] text-white px-5 py-2 rounded-md font-medium">
          Continue Shopping
        </NavLink>
      </div>
        </div>

        <div className='bg-[#FCFCFC] py-4'>
        <div className="text-xl md:text-2xl 2xl:text-4xl font-bold flex gap-1 justify-center mb-4">
  <span className="text-[#F04438]">MORE</span> 
  <span className="text-black">TO LOVE</span>
</div>
<MoreToLove/>
        </div>
    </div>
  )
}

export default ThankYouPage