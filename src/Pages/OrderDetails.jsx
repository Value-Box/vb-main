import React from 'react'
import AccountSideBar from '../Components/AccountSideBar'

function OrderDetails() {
  return (
    <>
      <div className="w-full p-7.5 bg-[#FCFCFC] hidden md:flex">
      <div className="flex flex-col md:flex-row gap-10 w-full">
  {/* Left Section - Sidebar */}
  <div className="">
    <AccountSideBar />
  </div>

  {/* Right Section - Full Width */}
  <div className="w-full flex-1 space-y-5">
    {/* Main Content */}
    <main className=" flex flex-col gap-4">
      {/* Order Summary Section */}
      <div className="p-4 rounded-lg">
        <h2 className="text-lg font-semibold">Order Placed Successfully</h2>
        <div className="text-gray-600 flex items-center justify-between mt-2">
          <p>Order time: <span className="font-medium">Nov 4, 2024 at 17:45:00</span></p>
          <p>Order ID: <span className="font-medium bg-gray-200 p-1 rounded">PO-153-18926398341670452</span> 
            <button className="ml-2 text-blue-500">Copy</button>
          </p>
        </div>
        <p className="text-gray-600 mt-2">Order confirmation was sent on Nov 4, 2024 to farmanaharis66@gmail.com and +92123456786</p>
      </div>

      {/* Shipping and Delivery Details */}
      <div className="bg-white p-4 shadow-md rounded-lg flex justify-between">
        <div>
          <h3 className="text-lg font-semibold">Shipping to</h3>
          <p className="text-gray-600">Farman Haris</p>
          <p className="text-gray-600">135- Mian House, Garden Town Lahore, Lahore - Garden Town, Punjab, Pakistan</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Delivery Time</h3>
          <p className="text-gray-600">Estimated Delivery on Nov 13 - Nov 21</p>
        </div>
      </div>

      {/* Order Items */}
      <div className="bg-white p-4 shadow-md rounded-lg">
        <h3 className="text-lg font-semibold">Item Details</h3>
        <div className="divide-y">
          <div className="flex items-center py-2">
            <img src="/path-to-image.jpg" alt="Product" className="w-16 h-16 rounded" />
            <div className="ml-4">
              <p className="font-medium">WiFi Doorbell Camera</p>
              <p className="text-gray-600">PKR 8,500</p>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Details & Actions */}
      <div className="bg-white p-4 shadow-md rounded-lg flex justify-between items-center">
        <p className="text-lg font-semibold">Total: PKR 25,500</p>
        <div className="space-x-2">
          <button className="px-4 py-2 bg-blue-600 text-white rounded">Track Order</button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded">Edit Address</button>
          <button className="px-4 py-2 bg-red-600 text-white rounded">Cancel Order</button>
        </div>
      </div>
    </main>
  </div>
</div>


      </div>
    </>
  )
}

export default OrderDetails
