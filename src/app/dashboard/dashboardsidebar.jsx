'use client'
import React, { useState } from 'react';
import Link from 'next/link'
import {
    HiChartPie,
    HiOutlineHome,
    HiCreditCard,
    HiOutlineScale,
    HiOutlineCog,
    HiOutlineBookOpen,
    HiSpeakerphone 

} from 'react-icons/hi';

const DashboardSideBar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleSidebarClose = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div>
       <aside
        id="sidebar"
        onClick={handleSidebarClose}
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full sm:translate-x-0'
        }`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-status-purple-50">
          <ul className="space-y-2 font-medium pt-20">
            <li>
              <div className="flex items-center p-2 text-white  bg-status-purple-80 rounded-full shadow-lg  hover:bg-status-purple-100  group">
                <HiChartPie className='w-5 h-5 text-white transition duration-75' />
                <span className="ms-3">Dashboard</span>
              </div>
            </li>
            <li>
              <Link href="#"
                className="flex items-center p-2 text-white transition duration-75 rounded-lg  group"
              >
                <HiOutlineHome className='flex-shrink-0 w-5 h-5 ' />
                <span className="flex-1 ms-3 whitespace-nowrap">Home</span>
              </Link>
            </li>
            <li>
              <Link href="#"
                className="flex items-center p-2 text-white transition duration-75 rounded-lg  group"
              >
                <HiOutlineBookOpen  className='flex-shrink-0 w-5 h-5' />
                <span className="flex-1 ms-3 whitespace-nowrap">Book a Class</span>
              </Link>
            </li>
            <li>
              <Link href="#"
                className="flex items-center p-2 text-white transition duration-75 rounded-lg  group"
              >
                <HiCreditCard  className='flex-shrink-0 w-5 h-5' />
                <span className="flex-1 ms-3 whitespace-nowrap">Payment</span>
              </Link>
            </li>
            <li>
              <Link href="#"
                className="flex items-center p-2 text-white transition duration-75 rounded-lg  group"
              >
                <HiSpeakerphone  className='flex-shrink-0 w-5 h-5' />
                <span className="flex-1 ms-3 whitespace-nowrap">Anouncement</span>
              </Link>
              
            </li>
            <li>
              <Link href="#"
                className="flex items-center p-2 text-white transition duration-75 rounded-lg  group"
              >
                <HiOutlineCog  className='flex-shrink-0 w-5 h-5' />
                <span className="flex-1 ms-3 whitespace-nowrap">Setting</span>
              </Link>
            </li>
            <li>
              <Link href="#"
                className="flex items-center p-2 text-white transition duration-75 rounded-lg  group"
              >
                <HiOutlineScale  className='flex-shrink-0 w-5 h-5' />
                <span className="flex-1 ms-3 whitespace-nowrap">Acticities</span>
              </Link>
            </li>
            <li>
              
            </li>
          </ul>
        </div>
      </aside>
    </div>
  )
}

export default DashboardSideBar
