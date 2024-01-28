import React from 'react'
import './notfound.css'
import DashboardLayout from '../../layouts/dashboard/DashboardLayout'
import { Link } from 'react-router-dom'

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