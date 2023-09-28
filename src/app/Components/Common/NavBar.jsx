'use client'
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import {FaCaretUp, FaCaretDown} from "react-icons/fa"
import Image from "next/image";
import Link from "next/link";
import LogIn from "./LoginAndSignUp/login";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
     <div className=" fixed inset-x-0 z-50 bg-slate-50">
      <div className= " container py-5 mx-auto ">
        <div className="relative flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" aria-label="Company" title="Company">
              <Image src="/assets/skyfitlogo.JPG" width={200} height={100} alt="logo" className="object-cover" />
            </Link>
            <ul className=" items-center hidden space-x-4 lg:flex">
              <li>
                <div className=" relative flex flex-col items-center ">
                  <Link
                    onClick={() => setIsOpen((prev) => !prev)} href="/" className="nav-link flex items-center justify-between"
                  >
                    Classes
                    {!isOpen ? (
                      <FaCaretDown className="h-4" />
                    ) : (
                        <FaCaretUp className="h-4" />
                    )
                    }
                  </Link>
                  {!isOpen && (
                    <div className=" bg-slate-50 absolute top-10 flex flex-col items-start p-4 w-[150px]">
                      <ul className="flex flex-col">
                        <li>
                          <Link href="#" className="nav-link">Private Class</Link>
                        </li>
                        <li>
                          <Link href="#" className="nav-link">Group Class</Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>    
              </li>
              <li>
                <Link href="/" className="nav-link">Contemporary Dance</Link>
              </li>
              <li>
                <Link href="/" className="nav-link"> Our Story</Link>
              </li>
               <li>
                <Link href="/" className="nav-link">Blog</Link>
              </li>
              <li>
                <Link href="/" className="nav-link"> Contact Us </Link>
              </li>
            </ul>
          </div>
          <ul className=" items-center hidden space-x-8 lg:flex">
            <li>
              <LogIn/>
            </li>
            <li>
              <Link href="/" className=" bg-status-purple-40 text-stone-100 font-medium rounded-md px-4 py-3">
                Book a Class
              </Link>
            </li>
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
             <AiOutlineMenu className="w-5 h-5"/>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link href="/">
                        <Image src="/assets/skyfitlogo.JPG" width={200} height={100} alt="logo" className="object-cover" />
                      </Link>
                    </div>
                    <div>
                      <button
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded "
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <AiOutlineClose className="w-5 h-5"/>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <div className=" relative flex flex-col w-full ">
                          <Link
                            onClick={() => setIsOpen((prev) => !prev)}
                            href="/"
                            className="nav-link flex items-center justify-between"
                          >
                            Classes
                            {!isOpen ? (
                              <FaCaretDown className="h-4" />
                            ) : (
                                <FaCaretUp className="h-4" />
                            )
                            }
                          </Link>
                          {!isOpen && (
                            <div className=" bg-slate-50 absolute top-10 flex flex-col items-end p-4 w-[150px]">
                              <ul className="flex flex-col">
                                <li>
                                  <Link href="#" className="nav-link">Private Class</Link>
                                </li>
                                <li>
                                  <Link href="#" className="nav-link">Group Class</Link>
                                </li>
                              </ul>
                            </div>
                          )}
                        </div>
                      </li>
                      <li>
                        <Link href="/" className="nav-link"> Contemporary Dance </Link>
                      </li>
                      <li>
                        <Link href="/" className="nav-link"> Our Story </Link>
                      </li>
                      <li>
                        <Link href="/" className="nav-link">Blog </Link>
                      </li>
                      <li>
                        <Link href="/" className="nav-link"> Contact Us </Link>
                      </li>
                      <div className="flex justify-between">
                        <li>
                          <Link href="/" className=" bg-transparent border border-status-purple-40 text-black font-medium rounded-md px-2 py-3">
                            Sign in
                          </Link>
                        </li>
                        <li>
                          <Link href="/" className=" bg-status-purple-40 text-stone-100 font-medium rounded-md px-4 py-3">
                            Book a Class
                          </Link>
                        </li>
                      </div>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;