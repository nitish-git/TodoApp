import React from 'react'
import './login.css'
import DashboardLayout from '../../layouts/dashboard/DashboardLayout'
import { Link, useNavigate } from 'react-router-dom'

function LogIn() {
    const navigate = useNavigate()
    function handleLogin(e) {
        e.preventDefault()
        navigate('/dashboard')
    }
    return (
        <DashboardLayout>
            <div className='login-form-container'>
                <h1>Log In</h1>
                <form onSubmit={handleLogin} className='login-form'>
                    <label htmlFor='email' className='form-field-label'>Email</label>
                    <input id="email" type='email' placeholder='e.g example@email.com' />
                    <label htmlFor='password' className='form-field-label'>Password</label>
                    <input id="password" type='password' />
                    <button type='submit' className='form-login-button' onClick={handleLogin}>LogIn</button>
                </form>
                <p>Don't have account? <Link to="/signup">Sign Up here!</Link></p>
            </div>
        </DashboardLayout>
    )
}

export default LogIn