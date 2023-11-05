'use client'
import { useState } from 'react';
import Modal from '@/app/Components/Modal';
import SignUpForm from '@/app/Components/SignUpForm';
import {AiOutlineClose} from "react-icons/ai"

const SignUp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
   const [ShowPassword, setShowPassword] = useState(false);

   const [isLoading, setIsLoading] = useState(false);
   const onChangePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className=''>
      <button onClick={() => setIsModalOpen(true)} className='bg-status-purple-40 text-stone-100 font-medium rounded-md px-4 py-3'>Book A Class</button>
      <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} className="relative" >
        <button onClick={() => setIsModalOpen(false)} className='px-2 py-3 absolute right-44 -translate-x-96   hover:cursor-pointer  bg-status-purple-40 text-white rounded-md'>
           <AiOutlineClose className="w-5 h-5"/>         
        </button>
        <SignUpForm isLoading={isLoading} setIsLoading={setIsLoading}  ShowPassword={ShowPassword} onChangePassword={onChangePassword} />
       
      </Modal>
    </div>
  );
};

export default SignUp;
