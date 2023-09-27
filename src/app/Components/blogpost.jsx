'use client'
import React from 'react'
import { FaArrowRight } from "react-icons/fa"
import Link from 'next/link'
import { blog } from './Data'
import Image from 'next/image'



const BlogPost = () => {
  return (
      <div className='bg-status-stone-10 w-full'>
          <div className=' container mx-auto w-full'>
              <div className=' relative py-16 md:py-20'>
                  <div className='flex flex-row mt-10 overflow-hidden lg:justify-between'>
                      <div className='mx-5'>
                          <h5 className="mb-2  text-status-purple-90">Blog</h5>
                          <h3 className="uppercase font-bold">recent blogpost</h3>
                          <div className="mt-1">
                              <span className="inline-block w-10 h-1 bg-status-purple-80 rounded-full lg:w-32"></span>
                              <span className=" w-3 h-1 ml-1 bg-status-purple-80 rounded-full inline-block"></span>
                              <span className=" w-1 h-1 ml-1 bg-status-purple-80 rounded-full inline-block"></span>
                          </div>
                      </div>
                      <div className="justify-around hidden lg:block lg:self-end">
                          <Link href="#" className="inline-flex items-center justify-center font-medium text-white bg-status-purple-70 rounded-md px-2 py-2">
                              See More
                              <FaArrowRight className="ml-1 w-4 h-4" />
                          </Link>
                      </div>
                  </div>
                  <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3 sm:max-w-sm sm:mx-auto md:max-w-full mt-2'>
                      {blog.map((blogpost, id) => (
                          <div className='' key={id}>
                              <Link href="#" className=''>
                                  
                                      <div className=' overflow-hidden border-2 border-gray-200 rounded-lg shadow-2xl border-opacity-60'>
                                          <Image src={blogpost.blogimage} alt="blogimage" width={200} height={200} className="bject-cover object-center w-full rounded-b-full shadow-md lg:h-48 md:h-36 rounded-l-md" />
                                          <div className='p-4'>
                                              <h3 className='text-status-purple-50'> {blogpost.blogtitle}</h3>
                                              <h4 className='text-gray-700 hover:text-blue-900 max-w-md'> {blogpost.blogsubtitle}</h4>
                                              <p className='mb-2 leading-relaxed text-sm'> {blogpost.blogtext}</p>
                                              <div className=' inline-flex items-center'>
                                                  <Image src={blogpost.authorimage} alt="authorimage" width={30} height={30} className="flex-shrink-0 object-cover object-center w-8 h-8 rounded-full" />
                                                  <span className='pl-4 text-sm text-gray-900 font-extralight'> {blogpost.blogauthor }</span>
                                              </div>   
                                          </div>
                                      </div>
                                  
                              </Link>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
    </div>
  )
}

export default BlogPost