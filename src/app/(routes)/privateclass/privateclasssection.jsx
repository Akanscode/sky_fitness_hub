import React from 'react'
import { FaSearch } from "react-icons/fa";
import Image from 'next/image';
import { privateclasses } from '../../Components/Data';
const PrivateClassSection = () => {
  return (
      <div className=' bg-white w-full'>
          <div className='container w-full mx-auto'>
              <div className='mx-auto py-10 md:py-16'>
                  <div className='mt-5'>
                      <div className='flex flex-col lg:flex-row justify-between'>
                          <h3 className=" leading-none tracking-tight text-gray-900">
                              Find a Class
                          </h3>
                          <div>
                              <form action="" className="md:w-[400px]">
                                  <div className="relative flex flex-row items-center px-2 rounded-full bg-white shadow-sm p-1 md:pr-3">
                                      <input
                                          placeholder="Search for categories"
                                          className="w-full p-4 rounded-full placeholder-grey-40 bg-white ring-0 ring-offset-0 outline-none"
                                          type="email"  
                                      />
                                      <div className="md:pr-1.5 lg:pr-0 flex">
                                          <button type="button" className="relative px-6 py-2 ml-auto before:absolute inset-0 rounded-full bg-status-purple-50">
                                              <span className="relative flex items-center justify-center px-2 md:px-4 py-3 text-white font-semibold ">
                                                  <FaSearch size={15} />
                                              </span>
                                          </button>
                                      </div>
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
                  {/*=================classes=============*/}
                  <div className="lg:w-3/4 lg:mx-auto ">
                      {privateclasses.map((privateclass) => (
                          <div className="group relative -mx-4 sm:-mx-8 p-6 sm:p-8 my-5 rounded-3xl bg-white border border-transparent hover:border-gray-100 shadow-2xl shadow-gray-400/10  hover:shadow-gray-600/10 sm:gap-8 sm:flex transition duration-300 hover:z-10">
                              <div className="sm:w-2/6 rounded-3xl overflow-hidden transition-all duration-500 group-hover:rounded-xl">
                                  <Image
                                      src={privateclass.postimage}
                                      alt="art cover"
                                      loading="lazy"
                                      width="1000"
                                      height="667"
                                      className="h-56 sm:h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"   
                                  />
                              </div>
                              <div className="sm:p-2 sm:pl-0 sm:w-4/6">
                                  <div className='flex justify-between'>
                                      <div className='flex mt-4 mb-2 space-x-2'>
                                          <span className="  inline-block font-medium text-gray-400 bg-black px-2  sm:mt-0">{privateclass.mins}</span>
                                          <span className=" inline-block font-medium text-gray-400  sm:mt-0">{privateclass.timeandday}</span>
                                      </div>
                                      <span className='inline-block font-medium text-gray-400 sm:mt-0'>{privateclass.price }</span>
                                  </div>
                                  
                                  <h4 className="  text-gray-800">
                                      {privateclass.title}
                                  </h4>
                                  <p className="my-6 text-gray-600">
                                      {privateclass.text}
                                  </p>
                                  <div className="flex justify-between gap-4">
                                      <div className='inline-flex items-center'>
                                          <div className='w-50 h-50'>
                                              <Image src={privateclass.instructorimage} alt="instructorimage" width={25} height={25} className="rounded-full w-10 h-10" />
                                          </div>
                                          <span className=' pl-2 text-sm text-gray-900 font-extralight'>{privateclass.instructorname}</span>
                                      </div>
                                      <button href="#" className="px-3 py-1 rounded-full border border-gray-100 text-sm font-medium text-primary transition duration-300 hover:border-transparent hover:bg-status-purple-100 hover:text-white">
                                        Buy Now  
                                      </button>
                                  </div>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
      </div>
         
  )
}

export default PrivateClassSection