
import React from 'react';
import './globals.css'
export const metadata = {
  title: 'Sky Fitness Hub',
  description: 'Your fitness hub',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <>
          
          {children}
         
        </>
      </body>
    </html>
  )
}
