import React from 'react'
import Image from 'next/image'
const Cta = () => {
  return (
      <div className=' bg-status-stone-10 w-full mx-auto'>
          <div className="container w-full mx-auto ">
              <div className='py-10 md:py-16'>
                  <div className=' bg-status-purple-50 backdrop-blur-md rounded-xl shadow-lg '>
                      <div className="justify-center gap-6 text-center md:flex md:text-left lg:items-center lg:gap-16 py-6 px-6">
                  <div className="order-last mb-6 space-y-6 md:mb-0 md:w-6/12 lg:w-6/12">
                      <h2 className="text-gray-800 ">
                          Let us handle <span className="text-white"> your next fitness activities</span>
                      </h2>
                      <p className=" text-white text-base ">
                          Be part of millions people around the world that use our modern fitness hub.
                      </p>
                      <div className="flex flex-wrap gap-6">
                          <button
                              className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-white before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                          >
                              <span className="relative text-base font-semibold text-status-purple-40 "
                              >Start Now
                              </span>
                          </button>
                          <button
                              className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:border before:bg-transparent before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 before:border-gray-700  sm:w-max"
                          >
                              <span
                                  className="relative text-base font-semibold  text-white"
                              >More about</span>
                          </button>
                      </div>
                  </div>
                  <div className="grid grid-cols-5 grid-rows-4 gap-4 md:w-5/12 lg:w-6/12">
                      <div className="col-span-2 row-span-3">
                          <Image
                              src="/assets/ctaimage3"
                              className="rounded-full h-full w-full"
                              width="450"
                              height="640"
                              alt="shoes"
                              loading="lazy"
                              
                          />
                      </div>
                      <div className="col-span-2 row-span-2">
                          <Image
                              src="/assets/ctaimage"
                              className="h-full w-full rounded-xl object-cover object-top"
                              width="450"
                              height="450"
                              alt="gymimage"
                              loading="lazy"
                              
                          />
                      </div>
                      <div className="col-span-3 row-span-3">
                          <Image
                              src="/assets/ctaimage2"
                              className="h-full w-full rounded-xl object-cover object-top"
                              width="450"
                              height="300"
                              alt="shoes"
                              loading="lazy"    
                          />
                      </div>
                  </div>
              </div>
                  </div>
                  
              </div>
              
          </div>
      </div>
    
  )
}

export default Cta
