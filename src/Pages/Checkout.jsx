import React from "react";

function Checkout() {
  return (
    <div className="container mx-auto p-5">
      <div className="flex flex-col md:flex-row gap-5">
        {/* Left Section - col-9 */}
        <div className="w-full md:w-3/4 bg-gray-100 p-5 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Checkout Details</h2>
          <p>Customer form and checkout details go here.</p>
        </div>

        {/* Right Section - col-3 */}
        <div className="w-full md:w-1/4 bg-white p-5 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          <p>Order total, items, and summary go here.</p>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
