import React from 'react'
import './logout.css'
import DashboardLayout from '../../layouts/dashboard/DashboardLayout'
import { Link } from 'react-router-dom'

function Logout() {
    return (
        <DashboardLayout>
            <div className='logout-container'>
                <h1>Thank You!</h1>
                <p>For using this application.</p>
                <Link to="/login">Re-login</Link>
            </div>
        </DashboardLayout>
    )
}

export default Logout