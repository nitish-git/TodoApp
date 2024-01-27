import React from 'react'
import Header from '../../components/header/Header'

function DashboardLayout({ children }) {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}

export default DashboardLayout