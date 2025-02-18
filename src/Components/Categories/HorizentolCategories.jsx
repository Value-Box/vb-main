import React from 'react'

function HorizentolCategories() {
    const categories = [
        "Organic",
        "Books",
        "Sasgirat",
        "Under 1500",
        "Hash Dads",
        "Bundle Dads",
        "Women",
        "Men",
        "Kids",
        "Babies",
        "Stores",
        "More v"
      ];
  return (
    <>
    <div className="flex overflow-x-auto gap-4 p-4 bg-white shadow-sm">
      {categories.map((category, index) => (
        <div
          key={index}
          className="flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 transition-colors duration-200 cursor-pointer"
        >
          {category}
        </div>
      ))}
    </div>
    </>
  )
}

export default HorizentolCategories