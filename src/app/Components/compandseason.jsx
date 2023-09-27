'use client'
import React from 'react'
import ReactPlayer from 'react-player'
import { PrevArrow, NextArrow } from './ArrowComponent';
import { videoclasses } from './Data';
import Slider from 'react-slick';
import Link from 'next/link';
import { FaPlay } from "react-icons/fa6"
import { FaArrowRight } from "react-icons/fa"
import dynamic from 'next/dynamic';






const CompandSeason = () => {
  const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });
     const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
        initialSlide: 0,
       prevArrow: <PrevArrow/>,
        nextArrow: <NextArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (
    <div className='bg-status-stone-10 w-full'>
      <div className=' container mx-auto w-full'>
        <div className='py-10'>
          <div className="flex flex-row justify-between">
            <div className="mx-5">
              <h5 className="mb-2 text-status-purple-90">Video Classes</h5>
              <h3 className="capitalize"> COMPAND SEASON</h3>
              <div className="mt-1">
                <span className="inline-block w-20 h-1 bg-status-purple-80 rounded-full md:w-32 lg:w-40"></span>
                <span className="inline-block w-3 h-1 ml-1 bg-status-purple-80 rounded-full"></span>
                <span className="inline-block w-1 h-1 ml-1 bg-status-purple-80 rounded-full"></span>
              </div>
            </div>
            <div className="justify-around hidden lg:block lg:self-end">
              <Link href="#" className="inline-flex items-center justify-center font-medium text-white bg-status-purple-70 rounded-md px-2 py-2">
                See More
                <FaArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className=' w-full mx-auto'>
            <Slider {...settings}>
              {videoclasses.map((videoclass, id) => (
                <div className='p-4' key={id}>
                  <div className='h-auto overflow-hidden hover:cursor-pointer'>
                    <div className='wrapper'>
                       <ReactPlayer url={videoclass.videocard} controls={true} loop={true}  playing={true} className="w-auto h-auto rounded-md shadow-lg" />
                    </div>
                    <div className='p-6'>
                      <div className='relative -top-[250px] lg:-top-56 flex flex-col items-center'>
                        <div className='w-12 h-12 px-4 py-3 mb-12 bg-white rounded-full'>
                          <FaPlay className="h-5 w-5 text-red-700" />
                        </div>
                        <div className="max-w-md">
                          <h3 className=" text-slate-200">{videoclass.videotitle} </h3>
                          <p className="text-sm font-medium text-slate-200">{videoclass.videotext} </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompandSeason