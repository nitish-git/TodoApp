import React from 'react'
import './notfound.css'
import DashboardLayout from '../../layouts/dashboard/DashboardLayout'

function NotFound() {
  return (
    <DashboardLayout>
      <div className='notfound-container'>
        <h1>404</h1>
        <p>Resource Not Found</p>
      </div>
    </DashboardLayout>
  )
}

export default NotFound