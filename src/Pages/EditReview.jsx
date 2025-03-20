import React, { useState } from 'react'
import AccountSideBar from '../Components/AccountSideBar'
import Image2 from "/src/Images/Image2.png";
import Image3 from "/src/Images/Image3.png";

function EditReview() {
    const [rating, setRating] = useState({
        product: 0,
        shipping: 0,
        seller: 0,
      });
    
      const handleRating = (category, value) => {
        setRating((prev) => ({ ...prev, [category]: value }));
      };
      
  return (
    <div className='flex gap-2 sm:gap-4 md:p-4'>
        <div className='hidden md:block'><AccountSideBar/></div>
        <h2 className="text-lg font-semibold">Leave a review</h2>
        <div>
        
      
      {/* Product Section */}
      <div className=" items-center gap-4 mt-4 border border-natural-color p-4 rounded-lg">
        <img
          src={Image2}
          alt="Product"
          className="w-16 h-16 rounded-md"
        />
        <div>
          <p className="font-semibold">Wifi doorbell Camera</p>
          <p className="text-sm text-gray-500">White and gray / 8</p>
          <p className="text-sm text-gray-500">QTY: 01</p>
        </div>
      </div>
        </div>
        <div className="w-full p-4 border-natural-color border rounded-lg bg-white">
      
      
      {/* Content Section */}
      <h3 className="mt-4 font-medium">Content</h3>
      <div className="flex gap-4 mt-2">
        <button className="border-dashed border-2 p-4 rounded-lg flex items-center gap-2">
          📷 Photo
        </button>
        <button className="border-dashed border-2 p-4 rounded-lg flex items-center gap-2">
          🎥 Video
        </button>
      </div>
      
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-4">
        {["Fine", "Very happy with items", "Good, Value for money", "Perfect! thanks valuebox", "really comfortable", "really nice"].map(
          (tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-200 rounded-full text-sm cursor-pointer hover:bg-gray-300"
            >
              {tag}
            </span>
          )
        )}
      </div>
      
      {/* Review Input */}
      <textarea
        placeholder="Share your thoughts or select a brief review above."
        className="w-full mt-4 p-3 border rounded-lg resize-none"
        rows={4}
      ></textarea>
      
      {/* Ratings */}
      <div className="mt-4">
        {["Product Quality", "Shipping Service", "Seller Service"].map(
          (category, index) => (
            <div key={index} className="flex items-center justify-between mt-2">
              <span>{category} *</span>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`text-xl cursor-pointer ${
                      rating[category.toLowerCase().split(" ").join("")] >= star
                        ? "text-yellow-500"
                        : "text-gray-300"
                    }`}
                    onClick={() => handleRating(category.toLowerCase().split(" ").join(""), star)}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          )
        )}
      </div>
      
      {/* Submit Button */}
      <button className="w-full bg-blue-600 text-white py-2 mt-6 rounded-lg hover:bg-blue-700">
        Submit
      </button>
    </div>
    </div>
  )
}

export default EditReview