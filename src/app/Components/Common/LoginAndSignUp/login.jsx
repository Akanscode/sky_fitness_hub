'use client'
import { useState } from 'react';
import Modal from './Modal';
import LoginForm from './LoginForm';

const LogIn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogin = (values) => {
    // Handle login logic here
    console.log(values);
  };

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)} className='bg-transparent border border-status-purple-40 text-black font-medium rounded-md px-2 py-3'>Sign in</button>
      <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} >
        <LoginForm onSubmit={handleLogin} />
        <button onClick={() => setIsModalOpen(false)} className='px-2 py-3 bg-slate-200 text-black rounded-md'>Close</button>
      </Modal>
    </div>
  );
};

export default LogIn;
