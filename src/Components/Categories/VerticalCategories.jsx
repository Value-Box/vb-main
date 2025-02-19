import React from 'react'

export default function VerticalCategories() {
  return (
    <>
    <div className='p-2'>
    <button className='bg-[#002882] text-[#E6EAF3] flex gap-2 w-max p-2 rounded-lg'>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M5 17L19 17M5 12H19M5 7L13 7" stroke="#E6EAF3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg> All Categories <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M15 11L12 14L9 11" stroke="#E6EAF3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    </button>
    </div>
    </>
  )
}
