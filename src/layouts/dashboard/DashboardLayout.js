import React from 'react'
import './dashboardlayout.css'
import Header from '../../components/header/Header'

function DashboardLayout({ children }) {
    return (
        <div className='dashboard-container'>
            <Header />
            <div className='main-content-area'>
                {children}
            </div>
        </div>
    )
}

export default DashboardLayout