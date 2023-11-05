
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '@/app/firebase';

import { toast } from 'react-toastify';
import Loader from './Loader';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useRouter } from 'next/navigation';

import { HiEnvelope } from "react-icons/hi2"

const ForgetPasswordSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
   
});

const ForgetPasswordForm = ({ 
     isLoading,
    setIsLoading,
}) => {
     const router = useRouter();
    
    const handleResetPassword = async (values) => {
        const { email } = values;
        setIsLoading(true);
        try {
            await sendPasswordResetEmail( auth,  email);
            setIsLoading(false);
            router.push("/signin")
            toast.success("Password Reset successful");
        
        } catch (error) {
            setIsLoading(false);
            toast.error(error.message);
        }
    }
   
    return (
        <>
            {isLoading && <Loader />}
            <div className='w-full max-w-md   p-8 space-y-3 rounded-xl bg-white '>
                <h3 className='mb-3 text-center text-stone-800 capitalize'>Forgot Password ?</h3>
                <div className="text-sm text-center text-stone-600 capitalize">
                    You Will Be Sent A Verification Link To Verify Your Password
                </div>
                <Formik
                    initialValues={{
                        email: '',
                    }}
                    validationSchema={ForgetPasswordSchema}
                    onSubmit={handleResetPassword}
                >
                    <Form className='space-y-2'>
                        <div>
                            <label htmlFor="email" className='block'>Email</label>
                            <div className='relative'>
                                <HiEnvelope className="w-5 absolute right-3 top-1/2 -translate-y-1/2 text-status-purple-40" />
                                <Field type="email" name="email" className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded-full" placeholder="makin@gmail.com" />
                            </div>
                            <ErrorMessage name="email" component="div" className="text-red-500 font-normal text-sm" />
                        </div>
                        <button type="submit" className='w-full py-4 bg-status-purple-60 hover:bg-status-purple-70 rounded-md text-md font-bold text-status-stone-20 transition duration-200'>Verify Now</button>
                    </Form>
                </Formik>
            </div>
        </>
    );
};

export default ForgetPasswordForm;
