import React, { useState } from 'react'

function AddToCart() {
    const [deliveries, setDeliveries] = useState({
        "Standard Delivery": {
          "Seller A": [
            { id: 1, name: "Product 1", quantity: 2 },
            { id: 2, name: "Product 2", quantity: 1 },
          ],
          "Seller B": [
            { id: 3, name: "Product 3", quantity: 3 },
          ],
        },
        "Express Delivery": {
          "Seller A": [
            { id: 4, name: "Product 4", quantity: 1 },
          ],
        },
      });
      
  return (
    <div className='bg-[#FCFCFC] p-4 xl:p-8'>
        <div className='flex gap-6'>
            <div className='w-[70%]'>
                <div className='bg-[#FFF] border border-[#CCD1D2] px-3 py-3 2xl:py-5 2xl:px-8 rounded-[10px] '>
                    <p className='text-xl 2xl:text-2xl'>Shopping Cart (04)</p>
                    <div>
                        <div>
                            <input type="checkbox" className='w-4 h-4 appearance-none accent-[#002882] bg-gray-100 border-[#666] rounded-full focus:ring-[#002882] dark:focus:ring-[#002882] ' />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h1>Order Summery</h1>
            </div>
        </div>
    </div>
  )
}

export default AddToCart