'use client'
import React from 'react'
//import ProtectedRoute from '../Components/ProtectedRoute'
import DashboardHero from './dashboardhero'
import { AuthProvider } from '../context/UserAuth'
//import DashboardLayout from './layout'

const DashboardProfile = () => {
  return (
    <AuthProvider>
      <section className='dashboardprofile'>
       <DashboardHero/>
     </section>
     
    </AuthProvider>
        
      
  
    
      
  )
}

export default DashboardProfile
