import React, { useEffect } from 'react'
import './home.css'
import DashboardLayout from '../../layouts/dashboard/DashboardLayout'
import { useNavigate } from 'react-router-dom'
import { useApp } from '../../hooks/appLevelHooks'
function Home() {
    const app = useApp()
    const navigate = useNavigate()
    useEffect(() => app.logged_in_user ? navigate("/dashboard") : null)
    return (
        <DashboardLayout>
            <div className='home'>
                <div className='home-left'>
                    <h1>Greetings!</h1>
                    <h2>Start Keeping track of your tasks.</h2>
                    <p>This Todo application let's you "Add" a new task, "Modify" an existing task and "Delete" when you're done with it.</p>
                </div>
                <div className='home-right'>
                    <button className='call-to-action signup' onClick={() => navigate("/signup")}>Sign Up</button>
                    <button className='call-to-action login' onClick={() => navigate("/login")}>Log In</button>
                </div>
            </div>
        </DashboardLayout>

    )
}

export default Home