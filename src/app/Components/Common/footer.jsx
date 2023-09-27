
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {FaInstagram, FaXTwitter, FaFacebookF} from "react-icons/fa6"

const Footer = () => {
    return (
        <div className="bg-slate-50 w-full">
            <div className=" container mx-auto w-full">
                <div className="grid row-gap-10 mx-5 mb-8 pt-6 lg:grid-cols-6">
                    <div className="grid grid-cols-1 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-3">
                        <div>
                            <Link href="/">
                                <Image src="/assets/skyfitlogo.JPG" width={150} height={100} alt="logo" className="object-cover" />
                            </Link>
                            <p className="mt-2 text-sm text-gray-500">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Alias, quibusdam.
                            </p>
                        </div>
                        <div>
                            <p className="font-medium tracking-wide text-gray-500">Category</p>
                            <ul className="mt-2">
                                <li>
                                    <Link href="#" className="nav-link">News</Link>
                                </li>
                                <li>
                                    <Link href="#" className="nav-link">World</Link>
                                </li>
                                <li>
                                    <Link href="#" className="nav-link">Games</Link>
                                </li>
                                <li>
                                    <Link href="#" className="nav-link">References</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-medium tracking-wide text-gray-500">Links</p>
                            <ul className="mt-2">
                                <li>
                                    <Link href="#" className="nav-link">Blog</Link>
                                </li>
                                <li>
                                    <Link href="#" className="nav-link">Contact Us</Link>
                                </li>
                                <li>
                                    <Link href="#" className="nav-link">Classes</Link>
                                </li>
                                <li>
                                    <Link href="/" className="nav-link">Instructor</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="lg:max-w-md lg:col-span-2">
                        <span className="text-base font-medium tracking-wide text-gray-500">Subscribe for updates</span>
                        <form className="flex flex-col mt-4 md:flex-row">
                            <input placeholder="Email" required="" type="text" className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline" />
                            <button type="submit" className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-purple-400 rounded shadow-md hover:bg-purple-700 focus:shadow-outline focus:outline-none">
                                Subscribe
                            </button>
                        </form>
                        <p className="mt-4 text-sm text-gray-500">
                            Bacon ipsum dolor amet short ribs pig sausage prosciuto chicken spare ribs salami
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center pt-5 pb-10 border-t border-gray-800 border-opacity-30 sm:flex-row">
                    <div className="flex items-center mt-4 space-x-4 sm:mt-0">
                      <Link href="/" className="text-gray-500 transition-colors duration-300 hover:text-purple-400">
                          <FaFacebookF className="h-6 w-6" />
                      </Link>
                      <Link href="/" className="text-gray-500 transition-colors duration-300 hover:text-purple-400">
                          <FaXTwitter className="h-6 w-6" />
                      </Link>
                      <Link href="/" className="text-gray-500 transition-colors duration-300 hover:text-purple-400">
                          <FaInstagram className="h-6 w-6" />
                      </Link>
                  </div>
              </div>
          </div>
      </div> 
  )
}

export default Footer