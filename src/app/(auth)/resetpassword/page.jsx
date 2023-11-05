'use client'
import { useState } from 'react';
import Modal from '@/app/Components/Modal';
import ForgetPasswordForm from '@/app/Components/ForgetPasswordForm';
import {AiOutlineClose} from "react-icons/ai"

const ForgetPassword = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
 

  return (
    <div className=''>
      <button onClick={() => setIsModalOpen(true)} className='bg-transparent border border-status-purple-40 text-black font-medium rounded-md px-2 py-3'>Sign in</button>
      <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} className="relative" >
        <button onClick={() => setIsModalOpen(false)} className='px-2 py-3 absolute right-44 -translate-x-96   hover:cursor-pointer  bg-status-purple-40 text-white rounded-md'>
           <AiOutlineClose className="w-5 h-5"/>         
        </button>
        <ForgetPasswordForm isLoading={isLoading} setIsLoading={setIsLoading}  />
       
      </Modal>
    </div>
  );
};

export default ForgetPassword;
