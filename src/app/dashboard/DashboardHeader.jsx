'use client'
import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa"
import {HiUser, HiArrowLeftOnRectangle} from "react-icons/hi2"
import Image from "next/image";
import Link from "next/link";
import UserProfileImage from "./UserProfileImage";


const DashboardHeader = () => {
  
    const [isOpen, setIsOpen] = useState(false);
   const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
      <div className=" fixed inset-x-0 z-50 bg-slate-50">
          <div className=" container py-5 mx-auto ">
              <div className="relative flex items-center justify-between">
                  <div className="flex items-center">
                      <Link href="/" aria-label="Company" title="Company">
                          <Image src="/assets/skyfitlogo.JPG" width={200} height={100} alt="logo" className="object-cover" />
                      </Link>
                  </div>
                  <div className="flex space-x-2">
                      <UserProfileImage/>
                      <div className=" relative flex flex-col items-center justify-center ">
                          <button
                              onClick={toggleDropdown}
                              className=" flex items-center"
                          >
                              <FaCaretDown className="h-4" />
                          </button>
                          {!isOpen && (
                              <div className=" bg-black absolute top-10 flex flex-col items-start p-4 w-[150px] shadow-md">
                                  <ul className="flex flex-col space-y-4" role="menu" aria-orientation="vertical" aria-labelledby="options-menu" >
                                      <li className="flex items-center justify-center space-x-4" role="menuitem">
                                          <HiUser className="w-4 h-4 text-white" />
                                          <Link href="#" className=" text-white font-medium text-sm">Profile</Link>
                                      </li>
                                      <li className="flex items-center justify-center space-x-4" role="menuitem">
                                          <HiArrowLeftOnRectangle className="w-4 h-4 text-red-600" />
                                          <Link href="#" className=" text-red-600 font-medium text-sm">Logout</Link>
                                      </li>
                                  </ul>
                              </div>
                          )}
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
};
export default DashboardHeader;