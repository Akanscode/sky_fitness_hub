'use client'
import React from 'react'
import { sampleimage } from './Data'
import Image from 'next/image'
const Hero = () => {
  return (
      <>
          <div className="w-full bg-center bg-cover h-[58rem] mx-auto bg-[url('/assets/heroImage.jpg')]">
              <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
                  <div className="mx-10 mt-10 lg:mt-20">
                      <h1 className="text-center text-white "> Visionary Movement</h1>
                      <p className="max-w-xl mt-5 font-sans font-bold leading-none text-center text-gray-400 sm:text-sm lg:text-xl lg:my-8">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Provident, excepturi? Laborum odio nisi iste quidem porro.
                      </p>
                  </div>
              </div>
          </div>
          <div className='container mx-auto w-full relative lg:grid gap-6 row-gap-5 mb-8 space-y-4 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2 hidden'>
              {sampleimage.map((sampleimg) => (
                  <div key={sampleimg.id}>
                       <div className='relative overflow-hidden transition duration-200 transform rounded shadow-lg group -top-32 hover:-translate-y-2 hover:shadow-2xl'>
                          <Image src={sampleimg.coverimage} alt='sampleimage' width={1000} height={200} />
                          <div className='absolute inset-x-0 bottom-0 px-6 py-4 duration-300 bg-status-stone-90 bg-opacity-75 opacity-0 group-hover:opacity-100'>
                              <p className='text-sm font-medium tracking-wide text-white'>
                                  {sampleimg.text}
                              </p>
                          </div>
                      </div>
                  </div>
              ))}
          </div>    
    </>
  )
}

export default Hero