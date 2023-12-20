'use client'
import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {HiOutlineUser, HiOutlineLogout, HiChartBar  } from "react-icons/hi"
//import UserProfileImage from "./UserProfileImage";

 

const DashboardHeader = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
    };
    const handleSubMenuToggle = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    sessionStorage.setItem("subMenuOpen", JSON.stringify(newState));
  };
  

    return (
        <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start rtl:justify-end">
                        <button onClick={handleSidebarToggle}
                            data-drawer-target="logo-sidebar"
                            data-drawer-toggle="logo-sidebar"
                            aria-controls="logo-sidebar"
                            type="button"
                            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
                        >
                            <span className="sr-only">Open sidebar</span>
                            <svg className="w-6 h-6"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    clipRule="evenodd"
                                    fillRule="evenodd"
                                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                                >

                                </path>
                            </svg>
                        </button>
                         <Link href="/" aria-label="Company" title="Company">
                            <Image
                                src="/assets/skyfitlogo.JPG"
                                width={200}
                                height={100}
                                alt="logo"
                                className="object-cover" 
                                
                            />
                        </Link>
                    </div>
                    <div className="flex items-center">
                        <div className="flex items-center ms-3">
                            <div>
                                <button
                                    onClick={handleSubMenuToggle}
                                    type="button"
                                    className="   flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300"
                                    aria-expanded="false"
                                    data-dropdown-toggle="dropdown-user"
                                >
                                    <span className="sr-only">Open user menu</span>
                                    <svg className=" w-12 h-12 text-gray-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fillRule="evenodd"
                                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                            clipRule="evenodd">
                                        
                                        </path>
                                    </svg>
                                </button>
                               
                            </div>
                            {isOpen && (
                                <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow " id="dropdown-user">
                                <div className="px-4 py-3" role="none">
                                    <p className="text-sm text-gray-900" role="none">
                                        Neil Sims
                                    </p>
                                    <p className="text-sm font-medium text-gray-900 truncate" role="none">
                                        neil.sims@flowbite.com
                                    </p>
                                </div>
                                <ul className="py-1" role="none">
                                    <li>
                                        <Link href="#" className="block nav-link" role="menuitem">Dashboard</Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="flez items-center space-x-1 nav-link" role="menuitem"
                                        >
                                            <HiOutlineUser    className='flex-shrink-0 w-5 h-5'/>
                                            <span className="flex-1 ms-3 whitespace-nowrap">Profile</span>
                                            
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="flex items-center  nav-link" role="menuitem"
                                        > <HiChartBar  className='flex-shrink-0 w-5 h-5'/>
                                            <span className="flex-1 ms-3 whitespace-nowrap">Progress</span>
                                            
                                        </Link>
                                    </li>
                                    <li>
                                        <button href="#" className="flex items-center space-x-1 px-4 py-2 text-sm text-red-700 hover:bg-red-800 transition duration-75" role="menuitem"
                                        >
                                            <HiOutlineLogout   className='flex-shrink-0 w-5 h-5'/>
                                            <span className="flex-1 ms-3 whitespace-nowrap">Sign out</span>
                                            
                                        </button>
                                    </li>
                                </ul>
                            </div>
                             )}
                            
                        </div>
                    </div>
                </div>
            </div>
        </nav>
  );
};
export default DashboardHeader;