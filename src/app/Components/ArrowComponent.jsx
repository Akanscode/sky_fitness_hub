'use client'
import React from 'react';
import {FaAngleLeft, FaAngleRight} from "react-icons/fa"

const PrevArrow = ({ onClick }) => (
    <div className='absolute inset-y-0 left-0 z-10 flex items-center'>
        <button
    onClick={onClick}
    className="absolute w-8 h-8 flex items-center justify-center left-0 top-1/3 transform -translate-y-1/3 bg-status-purple-70  text-white px-3 py-2 rounded-full"
  >
    <FaAngleLeft className='w-4 h-4'/>
        </button>
        </div>
)
    

  

const NextArrow = ({ onClick }) => (
    <div className='absolute inset-y-0 right-0 z-10 flex items-center'>
        <button
    onClick={onClick}
    className="absolute w-8 h-8 flex items-center justify-center right-0 top-1/3 transform -translate-y-1/3 bg-status-purple-70 text-white px-3 py-2 rounded-full"
  >
    <FaAngleRight className='w-6 h-6'/>
  </button>
    </div>
  
);

export { PrevArrow, NextArrow };
