import React from 'react'
import { Link } from 'react-router-dom'


export default function NotFound() {
  return (
    <>
    <section className="relative z-10 bg-primary py-[120px] overflow-hidden">
        <div className=" mx-auto">
          <div className="-mx-4 flex">
            <div className="w-full">
              <div className=" text-center text-[#002882]">
                <h2 className="mb-2 text-[50px] font-bold leading-none  sm:text-[80px] md:text-[100px]">
                  404
                </h2>
                <h4 className="mb-3 text-[22px] font-semibold leading-tight ">
                  Oops! That page can’t be found
                </h4>
                <p className="mb-8 text-lg ">
                  The page you are looking for it maybe deleted
                </p>
                <Link to="/"
                  className="inline-block rounded-lg border border-[#002882] px-8 py-3 text-center text-base font-semibold  transition text-[#002882] hover:bg-[#002882] hover:text-white"
                >
                  Go To Home
                </Link>
              </div>
            </div>
          </div>
        </div>

        
      </section>
    </>
  )
}
