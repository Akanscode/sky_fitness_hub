// components/ProtectedRoute.jsx
import { useRouter } from 'next/navigation';
import { createContext } from 'react';
import { useAuth } from '../context/UserAuth';


const ProtectedRoute = ({ children }) => {
  const {user} = createContext(useAuth);
  const router = useRouter();

  
    if (!user) {
      router.push('/login'); 
    }

  return children;
};

export default ProtectedRoute;
