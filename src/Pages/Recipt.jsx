import React from 'react'
import ODproduct1 from "/src/Images/ODproduct1.png";
import ODproduct2 from "/src/Images/ODproduct2.png";
import ODproduct3 from "/src/Images/ODproduct3.png";
import circleImage from "/src/Images/circleimage.png";
import AccountSideBar from '../Components/AccountSideBar'


function Recipt() {


 const items = [
    {
      id: 1,
      img:  ODproduct3,
      deal: "Welcome Deal",
      name: "Wifi doorbell Camera Smart WI-FI Video Intercom FI Video Video Do...",
      color: "Red/42",
      brand: "By KKK Brand",
      price: "PKR 8,500",
      qty: "x1",
      brandImg: circleImage,
    },
    {
      id: 2,
      img:  ODproduct2,
      name: "Wifi doorbell Camera Smart WI-FI Video Intercom FI Video Video Do...",
      color: "Red/42",
      brand: "By KKK Brand",
      price: "PKR 8,500",
      qty: "x1",
      brandImg: circleImage ,
    },
    {
      id: 3,
      img: ODproduct1,
      name: "Wifi doorbell Camera Smart WI-FI Video Intercom FI Video Video Do...",
      color: "Red/42",
      brand: "By KKK Brand",
      price: "PKR 8,500",
      qty: "x1",
      brandImg:  circleImage,
    },
    {
      id: 4,
      img:  ODproduct3,
      name: "Wifi doorbell Camera Smart WI-FI Video Intercom FI Video Video Do...",
      color: "Red/42",
      brand: "By KKK Brand",
      price: "PKR 8,500",
      qty: "x1",
      brandImg:  circleImage,
    },
    {
      id: 5,
      img:  ODproduct2,
      name: "Wifi doorbell Camera Smart WI-FI Video Intercom FI Video Video Do...",
      color: "Red/42",
      brand: "By KKK Brand",
      price: "PKR 8,500",
      qty: "x1",
      brandImg:  circleImage,
    },
  ];

  return (
    <>
   <div className="w-full p-7.5 bg-[#FCFCFC] hidden md:flex">
    <div className="flex flex-col md:flex-row gap-10 w-full">
        {/* Left Section - Sidebar */}
  <div className="">
    <AccountSideBar />
  </div>
  <div className="w-full flex-1 space-y-5">
    {/* Main Content */}
    <main className=" flex flex-col gap-5">
      {/* Order Summary Section */}
      <div className="flex flex-col gap-3 p-4 rounded-lg">
        <h2 className="text-[30px] font-semibold">Receipt</h2>
      
        <p className="text-[#12B76A] flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 17C12.5304 17 13.0391 16.7893 13.4142 16.4142C13.7893 16.0391 14 15.5304 14 15C14 14.4696 13.7893 13.9609 13.4142 13.5858C13.0391 13.2107 12.5304 13 12 13C11.4696 13 10.9609 13.2107 10.5858 13.5858C10.2107 13.9609 10 14.4696 10 15C10 15.5304 10.2107 16.0391 10.5858 16.4142C10.9609 16.7893 11.4696 17 12 17ZM18 8C18.5304 8 19.0391 8.21071 19.4142 8.58579C19.7893 8.96086 20 9.46957 20 10V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V10C4 9.46957 4.21071 8.96086 4.58579 8.58579C4.96086 8.21071 5.46957 8 6 8H7V6C7 4.67392 7.52678 3.40215 8.46447 2.46447C9.40215 1.52678 10.6739 1 12 1C12.6566 1 13.3068 1.12933 13.9134 1.3806C14.52 1.63188 15.0712 2.00017 15.5355 2.46447C15.9998 2.92876 16.3681 3.47995 16.6194 4.08658C16.8707 4.69321 17 5.34339 17 6V8H18ZM12 3C11.2044 3 10.4413 3.31607 9.87868 3.87868C9.31607 4.44129 9 5.20435 9 6V8H15V6C15 5.20435 14.6839 4.44129 14.1213 3.87868C13.5587 3.31607 12.7956 3 12 3Z" fill="#12B76A"/>
</svg> All Data is encryted <svg xmlns="http://www.w3.org/2000/svg" width="12" height="24" viewBox="0 0 12 24" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.1569 12.7116L4.49994 18.3686L3.08594 16.9546L8.03594 12.0046L3.08594 7.05463L4.49994 5.64062L10.1569 11.2976C10.3444 11.4852 10.4497 11.7395 10.4497 12.0046C10.4497 12.2698 10.3444 12.5241 10.1569 12.7116Z" fill="#12B76A"/>
</svg></p>
      </div>
    
<div className="flex flex-col gap-3">
      {/* Left Section - Payment Details */}
      <div className="bg-white p-6 rounded-lg border border-[#F2F2F2] flex flex-col gap-2.5">
      {/* Logo */}
      <div className="flex justify-center">
      <h1 className="text-2xl font-bold">
        <svg xmlns="http://www.w3.org/2000/svg" width="186" height="48" viewBox="0 0 186 48" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M26.2207 17.936L20.5864 18.8403C20.5864 20.6488 21.9079 20.1271 21.9079 22.3473L15.6826 38.9198L9.17848 17.936L0.414062 18.8403C0.414062 20.4403 2.43137 19.9533 2.8835 20.8924L12.274 47.0118H14.778L26.1859 18.0753C26.2207 18.0405 26.2207 18.0056 26.2207 17.9708V17.936ZM34.3242 25.3789C26.6728 25.3789 23.786 28.2656 23.786 30.4914C23.786 32.0218 25.1076 32.648 26.4988 32.648C27.1597 32.648 27.8552 32.4739 28.4117 32.2304C28.7246 28.2656 30.9159 26.8744 33.0374 26.8744C35.7154 26.8744 36.1675 29.4828 36.1675 31.8478C36.1675 32.4739 36.1329 33.1 36.0981 33.6563C35.3676 33.0305 33.6635 32.4043 32.3767 32.4043C26.5336 32.4043 23.4383 36.5431 23.4383 40.4732C23.4383 43.9514 25.9075 47.2551 31.0549 47.2551C33.9765 47.2551 35.7154 46.1424 36.9676 44.1599C37.9415 45.9336 40.1325 47.0118 42.3584 47.0118H44.2365C44.2365 46.8726 44.2712 46.7685 44.2712 46.6641C44.2712 45.4466 43.0889 45.4466 42.602 44.9597C42.0802 44.438 41.941 43.2904 41.941 41.8645C41.941 40.0907 42.1498 37.8994 42.1498 35.6388C42.1498 30.561 41.1064 25.3789 34.3242 25.3789ZM35.8893 38.2126C35.9242 38.8037 35.9242 39.6386 35.9242 40.5081C35.9242 42.8383 34.9851 45.0641 32.7245 45.0641C29.6289 45.0641 29.8029 40.9602 29.8029 38.3516C29.8029 35.7432 31.4722 34.3868 32.9678 34.3868C34.4634 34.3868 35.8198 35.6736 35.8893 38.2126ZM52.0618 41.7369C52.0966 38.8908 52.0966 35.9751 52.0966 33.0305V17.936L43.7843 19.1184C43.7843 20.7125 45.9406 20.0864 45.9406 21.1299C45.9406 24.2544 45.9057 27.2687 45.9057 30.2192C45.9057 33.2042 45.9406 36.0795 45.9406 38.9604C45.9406 43.2267 47.4361 47.0118 52.9315 47.0118H55.053C55.053 44.5134 52.0618 47.0118 52.0618 41.7369ZM77.9035 47.0118C77.9035 45.4118 75.747 46.0032 75.747 44.9597C75.747 38.4445 75.921 32.068 75.8862 25.5528L67.5043 26.4281C67.5043 28.0626 69.6606 27.4365 69.6606 28.48C69.6606 32.7348 69.5909 37.0879 69.5561 41.4065C68.3041 43.5338 66.8782 44.7164 65.6262 44.7164C63.296 44.7164 63.0176 42.8731 62.9827 39.6676C62.9482 33.7435 62.9482 32.6304 62.9482 25.5528L54.74 26.4281C54.74 28.0626 56.8963 27.4365 56.8963 28.48V38.937C56.8963 43.2208 58.3223 47.2551 63.8177 47.2551C66.8434 47.2551 68.4781 45.7599 69.5216 44.3686V47.0118H77.9035ZM95.8151 40.0212C94.9109 41.2035 92.8936 42.1426 90.4937 42.1426C87.7462 42.1426 86.0769 40.4385 85.2768 37.7953C93.0676 37.7953 96.2325 34.1432 96.2325 30.8044C96.2325 28.022 93.9371 25.4485 88.8244 25.4485C82.1815 25.4485 78.8426 31.1524 78.8426 36.6127C78.8426 42.0733 82.077 47.2551 88.6156 47.2551C95.8151 47.2551 97.6932 42.5599 97.6932 40.1255C97.6932 39.6038 97.4152 39.3602 97.0323 39.3602C96.615 39.3602 96.0933 39.6386 95.8151 40.0212ZM88.5115 27.2918C89.9375 27.3265 90.7721 28.8221 90.7721 30.6306C90.7721 33.2042 89.0678 36.3346 84.9638 36.3346C84.8594 35.778 84.7898 35.0475 84.7898 34.2476C84.7898 31.2567 85.6596 27.2918 88.5115 27.2918Z" fill="#002882"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M184.163 46.7464L184.162 46.7467C182.883 47.8945 180.898 47.7869 179.75 46.5081L173.801 39.8789L167.975 46.3633C166.826 47.6416 164.841 47.7476 163.563 46.599L163.562 46.5987C162.284 45.4503 162.178 43.4652 163.327 42.1866L169.603 35.2012L162.945 27.7816C161.797 26.5025 161.904 24.5176 163.184 23.3697L163.184 23.3695C164.463 22.2219 166.448 22.3289 167.596 23.608L173.804 30.5262L180.144 23.4712C181.292 22.1932 183.278 22.0869 184.556 23.2356C185.834 24.3842 185.94 26.3699 184.792 27.6479L178.002 35.2039L184.401 42.3346C185.549 43.6134 185.441 45.5988 184.163 46.7464ZM100.734 11.8028V48L117.462 47.8722C118.729 47.8626 120.005 47.9274 121.258 47.7016C128.696 46.358 138.228 37.0716 128.989 28.6011C132.269 25.3631 133.065 16.5533 124.929 12.8752C122.213 11.6479 120.954 11.734 118.113 11.7436L100.734 11.8028ZM148.965 21.468C152.412 21.468 155.436 22.6822 158.036 25.1105C160.637 27.539 161.937 30.6332 161.937 34.3934C161.937 36.9941 161.264 39.3049 159.916 41.3259C158.569 43.3469 156.932 44.8353 155.005 45.7912C153.078 46.7469 151.096 47.2246 149.059 47.2246C146.96 47.2246 144.939 46.7156 142.996 45.6971C141.053 44.6789 139.416 43.1748 138.084 41.1851C136.753 39.1952 136.087 36.947 136.087 34.4404C136.087 30.6802 137.403 27.578 140.035 25.1342C142.667 22.6899 145.644 21.468 148.965 21.468ZM145.91 37.8008C146.913 38.5686 147.931 38.9524 148.965 38.9524C149.999 38.9524 151.033 38.5609 152.067 37.7774C153.101 36.9941 153.618 35.8348 153.618 34.2994C153.618 32.764 153.133 31.6204 152.161 30.8683C151.19 30.1163 150.109 29.7401 148.918 29.7401C147.853 29.7401 146.834 30.132 145.863 30.9153C144.892 31.6987 144.406 32.8423 144.406 34.3464C144.406 35.8818 144.907 37.0331 145.91 37.8008Z" fill="#EEA500"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M111.267 12.3507C107.41 11.0551 105.275 10.3344 102.522 5.49256C101.765 4.16299 101.579 2.67144 102.516 1.14185C103.33 -0.185034 105.29 -0.28547 107.083 0.480109C110.259 1.83598 111.098 5.13392 112.446 8.08738C114.268 4.89538 116.23 3.26061 119.405 4.04612C122.25 5.27288 122.147 7.47003 120.178 9.24717C118.344 10.8968 116.043 12.0526 113.376 12.4548L113.455 21.5207L131.303 21.5198C131.379 22.3006 131.31 22.924 131.242 23.6293H113.473L113.684 47.9012L111.576 47.9222L111.365 23.6293H100.734V21.5209H111.346L111.267 12.3507ZM111.023 10.671C110.704 8.01566 108.568 2.37045 105.471 1.93372C104.835 1.84422 104.213 1.99375 103.966 2.46793C102.793 4.71874 108.511 9.8879 111.023 10.671ZM113.272 10.917C113.934 8.60326 115.252 6.723 117.085 5.76856C118.573 4.95729 120.741 6.18056 119.035 8.03528C117.484 9.47536 115.574 10.6952 113.272 10.917Z" fill="#002882"/>
</svg>
        </h1>
      </div>

      {/* Order Summary Title */}
      <hr className="border-t-[1px] border-[#F2F2F2] " />
      <h2 className="text-lg font-semibold text-gray-900">Order Summary</h2>
      <hr className="border-t-[1px] border-[#F2F2F2] " />
      {/* Order Details */}
      <div className="space-y-2 text-[18px] text-black flex flex-col gap-2.5">
        <div className="flex justify-between">
          <span>Order ID</span>
          <span className="font-medium">PO-153-789456123456789</span>
        </div>
        <div className="flex justify-between">
          <span>Order Time</span>
          <span className="font-medium">Nov 4, 2024</span>
        </div>
        <div className="flex justify-between">
          <span>Item(s) Total</span>
          <span className="text-gray-400 line-through">PKR 24,900</span>
        </div>
        <div className="flex justify-between">
          <span>Item(s) Discount</span>
          <span className="text-red-500">-PKR 4,900</span>
        </div>
        <div className="flex justify-between">
          <span>Special Discount</span>
          <span className="text-red-500">-PKR 4,900</span>
        </div>
        <div className="flex justify-between font-semibold">
          <span>Subtotal</span>
          <span className="text-gray-900">PKR 20,000</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping Fee</span>
          <span className="text-green-600">FREE</span>
        </div>
      </div>

      {/* Order Total */}
      <div className="flex justify-between font-bold text-[20px] mt-2">
        <span>Order Total</span>
        <span className="text-gray-900">PKR 20,000</span>
      </div>
    </div>

      {/* Right Section - Payment Method */}
      <div className='bg-white p-5 rounded-[5px] border-1 border-[#F2F2F2] flex flex-col gap-2.5 justify-around'>
        <h2 className="text-[24px] font-semibold mb-2">Payment Method</h2>
        <hr className="border-t-[1px] border-[#F2F2F2]" />
        <div className="flex gap-2">
        <div
  className="flex w-[68px] h-[48px] p-[10px] flex-col justify-center items-center gap-[10px] rounded-[5px] border border-[#CCC] bg-[#FCFCFC]"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="56"
    height="19"
    viewBox="0 0 56 19"
    fill="none"
  >
    <g clipPath="url(#clip0_7524_42535)">
      <path
        d="M28.9509 6.03122C28.9192 8.52866 31.1766 9.92225 32.8771 10.7509C34.6241 11.601 35.211 12.1462 35.204 12.9066C35.191 14.0701 33.8105 14.5836 32.5186 14.6036C30.2647 14.6385 28.9541 13.995 27.9123 13.5084L27.1004 17.3077C28.1457 17.7893 30.0812 18.2094 32.0883 18.2278C36.7998 18.2278 39.8821 15.9022 39.8988 12.2963C39.9172 7.71996 33.5689 7.46666 33.6122 5.42117C33.6272 4.80093 34.219 4.13905 35.5159 3.97076C36.1578 3.88575 37.9298 3.82069 39.9389 4.74584L40.7274 1.06994C39.647 0.676544 38.2584 0.299845 36.5295 0.299845C32.095 0.299845 28.976 2.65719 28.9509 6.03122ZM48.3044 0.616472C47.444 0.616472 46.7191 1.1183 46.3955 1.8884L39.6654 17.9578H44.3734L45.3103 15.3687H51.0633L51.6068 17.9578H55.7564L52.1353 0.616472H48.3044ZM48.963 5.30103L50.3217 11.8129H46.6006L48.963 5.30103ZM23.2427 0.616688L19.5317 17.9576H24.018L27.7273 0.616255L23.2427 0.616688ZM16.6059 0.616688L11.9363 12.4197L10.0474 2.38373C9.82578 1.26339 8.9505 0.616472 7.9785 0.616472H0.345197L0.238281 1.12004C1.80537 1.46008 3.58585 2.00854 4.66455 2.59539C5.32469 2.95387 5.51293 3.26724 5.7298 4.1191L9.30746 17.9578H14.0484L21.3169 0.616472L16.6059 0.616688Z"
        fill="url(#paint0_linear_7524_42535)"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_7524_42535"
        x1="2552.63"
        y1="54.1914"
        x2="2604.52"
        y2="-1787.04"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#222357" />
        <stop offset="1" stopColor="#254AA5" />
      </linearGradient>
      <clipPath id="clip0_7524_42535">
        <rect
          width="55.5181"
          height="18"
          fill="white"
          transform="translate(0.240234 0.299988)"
        />
      </clipPath>
    </defs>
  </svg>
</div>

          <div className='flex flex-col'>
          <span className="text-gray-800 font-bold">VISA....4181</span>
          <span className="text-[#999] text-sm">Paid on Nov 4, 2024</span>
          </div>
          
        </div>

        {/* Billing Address */}
        <div className="mt-4 text-sm text-[#999] flex flex-col gap-2">
          <p>
            <span className="font-semibold">Billing Address:</span> Farman Haris |
            +92123456789
          </p>
          <p>135- Mian House, Garden Town Lahore</p>
          <p>Lahore - Garden Town, Punjab, Pakistan</p>
        </div>
        <hr className="border-t-[1px] border-[#F2F2F2]" />
        {/* Security Assurance */}
        <div className="mt-4 text-sm flex flex-col gap-2">
          <p className="text-[#12B76A] flex items-center font-medium text-[20px]">
            <span className="mr-1"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M18.3307 3.28334L9.9974 0.366669L1.66406 3.28334V10C1.66406 13.4392 3.77573 15.8433 5.74406 17.3358C6.93246 18.2279 8.23591 18.9553 9.61906 19.4983C9.71351 19.5339 9.80851 19.5678 9.90406 19.6L9.9974 19.6333L10.0924 19.6C10.2746 19.5367 10.4552 19.4689 10.6341 19.3967C11.9222 18.866 13.1375 18.1735 14.2507 17.3358C16.2199 15.8433 18.3307 13.4392 18.3307 10V3.28334ZM9.1649 12.8458L5.63073 9.31L6.80906 8.13084L9.16573 10.4883L13.8799 5.77417L15.0591 6.9525L9.1649 12.8458Z" fill="#12B76A"/>
</svg></span> Security Assurance
          </p>
          <p className="text-[#999]">
            ValueBox prioritizes the security of your payment information. We
            adhere to PCI DSS standards, implement advanced encryption technologies,
            and conduct regular system audits to ensure your data remains private
            and secure.
          </p>
        </div>
      </div>
    </div>
    <div className="bg-white p-5 rounded-[5px] border-1 border-[#F2F2F2]">
      {/* Header */}
      <h2 className="text-lg font-semibold mb-4">Item Details (08)</h2>

      <div className="flex gap-5">
        {/* Left: Items List */}
        <div className="flex-1 space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center bg-[#FCFCFC] border border-[#F2F2F2] p-4 rounded-lg"
            >
              {/* Image */}
              <img
                src={item.img}
                alt="Product"
                className="w-20 h-20 object-cover rounded-lg"
              />

              {/* Product Details */}
              <div className="ml-4 flex-1 flex flex-col gap-2">
                <div className="flex items-center space-x-2">
                  {item.deal && (
                  <span className="bg-gradient-to-r from-red-600 to-orange-500 text-white text-xs px-2 py-1 rounded">
                  {item.deal}
                </span>
                
                  )}
                  <p className="text-sm font-medium">{item.name}</p>
                </div>
                <p className="text-gray-500 text-xs">{item.color}</p>
                 {/* Brand with Circular Image */}
          <div className="flex items-center gap-2">
            <img
              src={item.brandImg} // 👈 Brand Image dynamically render ho raha hai
              alt="Brand"
              className="w-6 h-6 object-cover rounded-full"
            />
            <p className="text-xs">{item.brand}</p>
          </div>
              </div>

              {/* Quantity & Price */}
              <div className="text-right flex flex-col gap-2">
                <p className="text-gray-500 text-sm">{item.qty}</p>
                <p className="text-lg font-semibold">{item.price}</p>
              </div>
            </div>
          ))}
        </div>

        
     
      </div>
    </div>
    
    </main>
  </div>
    </div>
   </div>
    </>
  )
}

export default Recipt
