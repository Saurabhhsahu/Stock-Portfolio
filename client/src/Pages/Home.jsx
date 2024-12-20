import React from 'react'
import {Routes, Route } from 'react-router-dom'

import Sidebar from '../Components/Sidebar'
import Dashboard from '../Components/Dashboard'
import Navbar from '../Components/Navbar'

function Home() {
  return (
    <div className='w-full bg-red-100 min-h-screen flex'>
      <Sidebar/>

      <div className='w-full'>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
      
    </div>
  )
}

export default Home