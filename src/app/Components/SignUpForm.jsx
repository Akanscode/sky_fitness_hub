
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/app/firebase';
import { toast } from 'react-toastify';
import Loader from './Loader';
import Link from 'next/link';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useRouter } from 'next/navigation';
import * as Yup from 'yup';
import {
    HiEye,
    HiEyeSlash,
    HiEnvelope,
    HiUser
 } from "react-icons/hi2"

const SignUpSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
    username: Yup.string().required('Required')
});



const SignUpForm = ({ 
    ShowPassword,
    onChangePassword,
     isLoading,
    setIsLoading,
}) => {

    const router = useRouter();
    
    const handleSignUp = async (values) => {
        const { email, password } = values;
        setIsLoading(true);
        try {
            await createUserWithEmailAndPassword( auth,  email, password);
            setIsLoading(false);
            router.push("/signin")
            toast.success("Sign Up successful");
        
        } catch (error) {
            setIsLoading(false);
            toast.error(error.message);
        }
    }
   
    return (
        <>
            {isLoading && <Loader />}
            <div className='w-full max-w-md p-8 space-y-3 rounded-xl bg-white '>
                <h3 className='mb-3 text-center text-stone-800 capitalize'>Sign Up to have access</h3>
                <div className="text-sm text-center text-stone-600 capitalize">Already have an account?
                    <Link href="/login" className="text-status-purple-50 font-bold text-md pl-2">Sign In </Link>
                </div>
                <div className="my-5">
                    <button className="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-status-purple-40 rounded-lg text-status-stone-70 hover:bg-status-stone-30  hover:shadow transition duration-150">
                        <svg className='h-6 w-6' viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.9892 10.1871C18.9892 9.36767 18.9246 8.76973 18.7847 8.14966H9.68848V11.848H15.0277C14.9201 12.767 14.3388 14.1512 13.047 15.0812L13.0289 15.205L15.905 17.4969L16.1042 17.5173C17.9342 15.7789 18.9892 13.221 18.9892 10.1871Z" fill="#4285F4" />
                            <path d="M9.68813 19.9314C12.3039 19.9314 14.4999 19.0455 16.1039 17.5174L13.0467 15.0813C12.2286 15.6682 11.1306 16.0779 9.68813 16.0779C7.12612 16.0779 4.95165 14.3395 4.17651 11.9366L4.06289 11.9465L1.07231 14.3273L1.0332 14.4391C2.62638 17.6946 5.89889 19.9314 9.68813 19.9314Z" fill="#34A853" />
                            <path d="M4.17667 11.9366C3.97215 11.3165 3.85378 10.6521 3.85378 9.96562C3.85378 9.27905 3.97215 8.6147 4.16591 7.99463L4.1605 7.86257L1.13246 5.44363L1.03339 5.49211C0.37677 6.84302 0 8.36005 0 9.96562C0 11.5712 0.37677 13.0881 1.03339 14.4391L4.17667 11.9366Z" fill="#FBBC05" />
                            <path d="M9.68807 3.85336C11.5073 3.85336 12.7344 4.66168 13.4342 5.33718L16.1684 2.59107C14.4892 0.985496 12.3039 0 9.68807 0C5.89885 0 2.62637 2.23672 1.0332 5.49214L4.16573 7.99466C4.95162 5.59183 7.12608 3.85336 9.68807 3.85336Z" fill="#EB4335" />
                        </svg>
                        <span>Sign Up with Google</span>
                    </button>
                </div>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 bg-status-stone-70"></div>
                    <p className="px-3 text-sm text-status-stone-400 capitalize">Sign Up with email</p>
                    <div className="flex-1 h-px sm:w-16 bg-status-stone-70"></div>
                </div>
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                        username: '',
                    }}
                    validationSchema={SignUpSchema}
                    onSubmit={handleSignUp}
                >
                    <Form className='space-y-2'>
                        <div>
                            <label htmlFor="name" className='block'>Your Name</label>
                            <div className='relative'>
                                <HiUser className="w-5 absolute right-3 top-1/2 -translate-y-1/2 text-status-purple-40" />
                                <Field type="text" name="username" className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded-full" placeholder="AJale the Traveler" />
                            </div>
                            <ErrorMessage name="username" component="div" className="text-red-500 font-normal text-sm" />
                        </div>
                        <div>
                            <label htmlFor="email" className='block'>Email</label>
                            <div className='relative'>
                                <HiEnvelope className="w-5 absolute right-3 top-1/2 -translate-y-1/2 text-status-purple-40" />
                                <Field type="email" name="email" className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded-full" placeholder="makin@gmail.com" />
                            </div>
                            <ErrorMessage name="email" component="div" className="text-red-500 font-normal text-sm" />
                        </div>
                        <div>
                            <label htmlFor="password" className='block'>Password</label>
                            <div className='relative'>
                                {ShowPassword ? (
                                    <HiEye
                                        className="w-5 absolute right-3 top-1/2 -translate-y-1/2 text-status-purple-40"
                                        onClick={onChangePassword}
                                    />
                                ) : (
                                    <HiEyeSlash
                                        className="w-5 absolute right-3 top-1/2 -translate-y-1/2 text-status-purple-40"
                                        onClick={onChangePassword}
                                    />
                                )}
                                <Field
                                    type={ShowPassword ? "text" : "password"}
                                    name="password"
                                    className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded-full" placeholder="Enter Password" />
                            </div>
                            <ErrorMessage name="password" component="div" className="text-red-500 font-normal text-sm" />
                        </div>
                        <button type="submit" className='w-full py-4 bg-status-purple-60 hover:bg-status-purple-70 rounded-md text-md font-bold text-status-stone-30 transition duration-200'>Sign Up</button>
                    </Form>
                </Formik>
            </div>
        </>
    );
};
export default SignUpForm;