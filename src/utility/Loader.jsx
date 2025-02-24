import React from 'react'
import Logo from "../Images/Logo.png";

function Loader() {
  return (
    <div className="absolute z-1050 top-0 loader-overlay gap-7 flex justify-center items-center w-full h-screen gap-[-20px]">
    <div className="flex justify-center items-center">
      <div className="absolute animate-spin rounded-md h-25 w-25 border-4 border-[#002882]"></div>
      <span className="text-2xl text-[#002882]">ValuBox...</span>
      
      </div>
    <span ><img
        src={Logo}
        className="rounded-full w-35 animate-horizontal-spin"
      /></span>
</div>

  )
}

export default Loader