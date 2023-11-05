'use client'
import React from 'react'
import ProtectedRoute from './ProtectedRoute'
import DashboardHero from './DashboardHero'

import DashboardLayout from './DashboardLayout'
const Profile = () => {
  return (
    <ProtectedRoute>
       <DashboardLayout>
        <DashboardHero/>
      </DashboardLayout>
    </ProtectedRoute>
     
     
    
    
  )
}

export default Profile