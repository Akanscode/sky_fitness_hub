import React from 'react'
import Image from 'next/image'
import { testimonials } from './Data'
const Testimony = () => {
    return (
        <section className="bg-white w-full mx-auto">
            <div className="container w-full  mx-auto">
                <div className='py-10 md:py-16'>
                    <div className="flex flex-wrap -m-4">
                        {testimonials.map((testimonial) => (
                             <div key={testimonial.id} className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <Image alt="testimonial"
                                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                    src={testimonial.coverimage} 
                                    width={60}
                                    height={60}
                                />
                                    <p className="leading-relaxed">{testimonial.text }</p>
                                <span className="inline-block h-1 w-10 rounded bg-status-purple-50 mt-6 mb-4"></span>
                                    <h5 className="text-gray-900 ">{testimonial.customername }</h5>
                                <p className="text-gray-500">{testimonial.customertitle}</p>
                            </div>
                        </div>
                        ))}
                       
                    </div>
                </div>
            </div>
      </section>
    
  )
}

export default Testimony