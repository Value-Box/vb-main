import React from 'react'
import VerticalCategories from './VerticalCategories';
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
      const limittedCategories=categories.slice(0,9)
      const remainingCategories=categories.slice(9)
      // console.log(remainingCategories)
  return (
    <>
    <div className='flex items-center justify-center bg-white sticky top-[55px] z-[1023]'>
    {/* <VerticalCategories/> */}
    <div className="flex xl:gap-4 2xl:gap-10 p-2 bg-white justify-between w-full overflow-x-auto">
      {limittedCategories.map((category, index) => (
        <div
          key={index}
          className="flex-shrink-0 px-3 xl:px-4 py-2 rounded-lg text-sm font-medium text-gray-700 transition-colors duration-200 cursor-pointer"
        >
            {/* {console.log(index)} */}
          {category}
        </div>
      ))}
      <span className="flex items-center gap-1 flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 transition-colors duration-200 cursor-pointer">More <svg xmlns="http://www.w3.org/2000/svg" width="20" height="10" viewBox="0 0 20 10" fill="none">
  <g clipPath="url(#clip0_11067_35400)">
    <path fillRule="evenodd" clipRule="evenodd" d="M9.40828 8.46428L4.69411 3.75011L5.87245 2.57178L9.99745 6.69678L14.1224 2.57178L15.3008 3.75011L10.5866 8.46428C10.4303 8.6205 10.2184 8.70827 9.99745 8.70827C9.77648 8.70827 9.56455 8.6205 9.40828 8.46428Z" fill="#333333"/>
  </g>
  <defs>
    <clipPath id="clip0_11067_35400">
      <rect width="10" height="20" fill="white" transform="translate(20) rotate(90)"/>
    </clipPath>
  </defs>
</svg></span>
    </div>
    </div>
    </>
  )
}

export default HorizentolCategories