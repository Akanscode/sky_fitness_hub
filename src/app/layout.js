
import Footer from './Components/Common/footer'
import NavBarLayout from './Components/Common/navbarlayout'
import './globals.css'

  

export const metadata = {
  title: 'Sky Fitness Hub',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
       <NavBarLayout/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
