

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const FounderStory = () => {
    return (
        <div className='bg-white w-full'>
            <div className='container mx-auto w-full'>
                <div className='py-10'>
                    <div className="flex flex-col lg:flex-row md:space-x-10 mx-auto md:mx-[150px] ">
                        <div className="w-full md:max-w-md">
                            <h5 className="mb-6 text-status-purple-80 capitalize">
                                our talented stuff
                            </h5>
                            <h3 className=" tracking-wide text-status-stone-60">
                                Nicollice scotte
                            </h3>
                            <span className="text-xs font-medium text-status-stone-60 capitalize lg:text-md">co/founder & instructor</span>
                            <p className="max-w-sm mb-3 text-sm tracking-wide">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Obcaecati, natus soluta molestias qui illum provident! Lorem
                                ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati,
                                natus soluta molestias qui illum provident!
                            </p>
                            <Link href="" className="text-sm italic font-medium text-status-purple-80">Read more </Link>
                        </div>
                        <div className="w-full lg:max-w-md">
                            <div className="relative w-full h-40 ml-2 bg-status-purple-90 shadow-2xl top-4"></div>
                            <Image className=" relative object-cover h-56 shadow-2xl -top-32 w-full" src="/assets/founderimage.jpg" width={200} height={200} alt="founderimage" />
                        </div>
                    </div>
                    {/*==========second founder====*/}
                    <div className="flex flex-col-reverse lg:flex-row mt-10 md:space-x-10 mx-auto md:mx-[150px] ">
                        <div className="w-full lg:max-w-md">
                            <div className="relative w-full h-40 ml-2 bg-purple-900 shadow-2xl top-4 "></div>
                            <Image className=" relative object-cover h-56 shadow-2xl -top-32 w-full " src="/assets/founderimage2.jpg" width={200} height={200} alt="founderimage" />
                        </div>
                        <div className="w-full lg:max-w-md">
                            <h3 className=" text-status-stone-60"> Marlians Song </h3>
                            <span className="text-xs font-medium text-status-stone-60 capitalize lg:text-md">co/founder & instructor</span>
                            <p className="max-w-sm mb-3 text-sm tracking-wide">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Obcaecati, natus soluta molestias qui illum provident! Lorem
                                ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati,
                                natus soluta molestias qui illum provident!
                            </p>
                            <Link href="" className="text-sm italic font-medium text-status-purple-80"> Read more</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FounderStory