import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Landing from './pages/Landing'
import CreateWheel from './pages/CreateWheel'
import Error404 from './pages/Error404'

// import Test from './pages/Test'
// import Login from './pages/Login'
// import Signup from './pages/Signup'
// import ContactSupport from './pages/ContactSupport'
// import PrivacyPolicy from './pages/PrivacyPolicy'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Landing/>} />
      <Route path='/create' element={<CreateWheel />} />

      <Route path='*' element={<Error404/>} />

      {/* <Route path='/signup' element={<Signup/>} /> */}
      {/* <Route path='/login' element={<Login/>} /> */}
      {/* <Route path='/support' element={<ContactSupport/>} /> */}
      {/* <Route path='/privacy-policy' element={<PrivacyPolicy/>} /> */}
      {/* <Route path='/test' element={<Test/>} /> */}

    </Routes>
  )
}
