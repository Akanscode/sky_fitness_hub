
import React, { useState, useReducer } from 'react'
import { useAuth } from "../context/UserAuth";
import { toast } from 'react-toastify';
import Loader from '../lib/Loader';
//import Link from 'next/link';
import ModalComponent from '../lib/Modal';
import { useRouter } from 'next/navigation';
import LoginForm from './signinform';
import SignUpForm from './registerform';
import ForgetPasswordForm from './forgetpasswordform';

//reducer for Formreducer

const reducer = (state, action) => {
  switch (action.type) {
    case 'SHOW_MODAL':
      return { ...state, showModal: true, currentForm: action.form };
    case 'HIDE_MODAL':
      return { ...state, showModal: false };
    case 'START_LOADING':
      return { ...state, isLoading: true };
    case 'STOP_LOADING':
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
const initialState = {
  showModal: false,
  isLoading: false,
  currentForm: 'login'
};

const FormReducer = () => {
    
   const [ShowPassword, setShowPassword] = useState(false);
  const { login, signup, sendPasswordResetEmail, updateUser } = useAuth();
    const [state, dispatch] = useReducer(reducer, initialState);
     const router = useRouter();
  

  const onChangePassword = () => {
    setShowPassword(prev => !prev);
  };
    
   const handleSubmit = async (values, form) => {
    dispatch({ type: 'START_LOADING' });
    try {
      if (form === 'login') {
        await login(values.email, values.password);
      } else if (form === 'signup') {
        await signup(values.email, values.password, values.username);
              updateUser(values.username)
      } else {
        await sendPasswordResetEmail(values.email);
      }
      dispatch({ type: 'STOP_LOADING' });
        dispatch({ type: 'HIDE_MODAL' });
       
      router.push('/dashboard');
      router.refresh()
      toast.success('Success!');
    } catch (error) {
      dispatch({ type: 'STOP_LOADING' });
      toast.error(error.message);
    }
  };

     const openModal = (formType) => dispatch({ type: 'SHOW_MODAL', form: formType });
    const closeModal = () => dispatch({ type: 'HIDE_MODAL' });
  return (
    <div>
      <button
        onClick={() => openModal('login')}
        className="bg-transparent border border-status-purple-40 text-black font-medium rounded-md px-2 py-3"
      >
        Book A Class
      </button>
      {state.showModal && (
        <ModalComponent
          isOpen={state.showModal}
          onRequestClose={closeModal}
        >
          {state.currentForm === 'login' &&
            <LoginForm
              ShowPassword={ShowPassword}
              onChangePassword={onChangePassword}
              onSubmit={(values) => handleSubmit(values, 'login')}
            
            />
          }
          {state.currentForm === 'signup' &&
            <SignUpForm
              ShowPassword={ShowPassword}
              onChangePassword={onChangePassword}
              onSubmit={(values) => handleSubmit(values, 'signup')} 
            
            />
          }
          {state.currentForm === 'forgetPassword' &&
            <ForgetPasswordForm
              onSubmit={(values) => handleSubmit(values, 'forgetPassword')} 
            />
          }
        </ModalComponent>
      )}
      
      {state.isLoading && <Loader/>}
          
      
    </div>
  )
}

export default FormReducer
