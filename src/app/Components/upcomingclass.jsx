'use client'
import React from 'react'
import Link from 'next/link'
import Slider from "react-slick";
import { upcomingclasses } from './Data';
import { FaArrowRight } from "react-icons/fa"
import Image from 'next/image';
import { PrevArrow, NextArrow } from './ArrowComponent';




const UpcomingClass = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        prevArrow: <PrevArrow />,
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
                    slidesToShow: 1,
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
        <div className=' bg-status-stone-10 w-full'>
            <div className='container mx-auto w-full'>
                <div className='py-16 md:py-20'>
                    <div className="flex flex-col items-center sm:max-auto">
                        <h2 className="mb-4 tracking-wide text-center "> We Teach Movement</h2>
                        <div className="w-32 h-1 mb-5 bg-status-purple-70 rounded-b-lg"></div>
                        <p className="max-w-md font-medium text-center leading-5 text-status-stone-70 text-md">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
                            praesentium sequi modi quae aliquam ut corporis quo doloremque
                            libero deleniti?
                        </p>
                    </div>
                    <div className="flex flex-row justify-between">
                        <div className="mx-5 pt-4">
                            <h5 className="mt-2 font-bold text-status-purple-90">Classes</h5>
                            <h3 className="capitalize"> How Upcoming Classes</h3>
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
                    <div className="w-full mx-auto ">
                        <Slider {...settings} >
                            {upcomingclasses.map((upcomingclass) => (
                                <div className='' key={upcomingclass.id}>
                                    <Link href="#">
                                        <div className='p-2'>
                                            <div className='h-full overflow-hidden border-2 border-gray-200 rounded-lg border-opacity-60'>
                                                <Image src={upcomingclass.cardimage} alt="upcomingimage" width="200" height="100" className="object-cover object-center w-full rounded-md shadow-md" />
                                                <div className='p-2 md:p-6'>
                                                    <div className='flex justify-between'>
                                                        <div className='inline-flex justify-between'>
                                                            <p className='px-2 text-status-stone-60 bg-status-purple-20'>
                                                                {upcomingclass.mins}
                                                            </p>
                                                            <span className='text-sm text-status-stone-60'>
                                                                {upcomingclass.timeandday}
                                                            </span>
                                                        </div>
                                                        <p className="italic font-bold text-md">{upcomingclass.price}</p>
                                                    </div>
                                                    <h4 className="mt-2 mb-1 text-status-stone-80">{upcomingclass.upcomingclassestitle }</h4>
                                                    <p className="mb-3 leading-relaxed">{upcomingclass.upcomingclassestext}</p>
                                                    <div className='flex justify-between'>
                                                        <div className='inline-flex items-center'>
                                                            <div className='w-50 h-50'>
                                                                <Image src={upcomingclass.instructorimage} alt="instructorimage" width={25} height={25} className="rounded-full w-10 h-10" />
                                                            </div>
                                                            <span className=' pl-2 text-sm text-gray-900 font-extralight'>{upcomingclass.instructorname}</span>
                                                        </div>
                                                        <button className="px-2 py-2 text-white bg-status-purple-70 hover:bg-status-purple-80 focus:outline-none font-meduim">
                                                            Buy now
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </Slider>
                        <div className="flex flex-col items-center  justify-center  lg:hidden mt-10">
                            <Link href="#" className="inline-flex items-center text-white font-medium bg-status-purple-70 rounded-md px-2 py-3">
                                See More
                                <FaArrowRight className="ml-1 w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UpcomingClass