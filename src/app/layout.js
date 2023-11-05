
import NavBarLayout from './Components/Common/navbarlayout';
import Footer from './Components/Common/footer';
import './globals.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  


  

export const metadata = {
  title: 'Sky Fitness Hub',
  description: 'Your fitness hub',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ToastContainer />
       <NavBarLayout/>
        {children}
        <Footer/>
        
      </body>
    </html>
  )
}
