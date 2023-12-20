import React from 'react'
import FormReducer from './FormReducer'
import { AuthProvider } from '../context/UserAuth'

const BookAClass = () => {
  return (
    <AuthProvider>

      <FormReducer />
    </AuthProvider>
  )
}

export default BookAClass