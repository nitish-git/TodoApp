import React, { useEffect, useState } from 'react'
import './login.css'
import DashboardLayout from '../../layouts/dashboard/DashboardLayout'
import { Link, useNavigate } from 'react-router-dom'
import { useApp, useAppDispatch } from '../../hooks/appLevelHooks'
import { toast } from 'react-toastify'

function LogIn() {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const app = useApp()

    const [loginForm, setLoginForm] = useState({
        email: "",
        password: ""
    })

    function handleInputChange(e) {
        setLoginForm({ ...loginForm, [e.target.name]: e.target.value })
    }


    function handleLogin(e) {
        e.preventDefault()
        dispatch({ type: "LOGIN_USER", payload: loginForm })
    }

    useEffect(() => {
        if (app?.logged_in_user) {
            navigate("/dashboard")
            toast.success("Welcome to the dashboard! Login successful.")
        } else {
            navigate("/login")
        }
    }, [app, navigate])
    return (
        <DashboardLayout>
            <div className='login-form-container'>
                <h1>Log In</h1>
                <form onSubmit={handleLogin} className='login-form'>
                    <label htmlFor='email' className='form-field-label'>Email</label>
                    <input id="email" type='email' placeholder='e.g example@email.com' name='email' value={loginForm.email} onChange={handleInputChange} required />
                    <label htmlFor='password' className='form-field-label'>Password</label>
                    <input id="password" type='password' name='password' value={loginForm.password} onChange={handleInputChange} required />
                    <button type='submit' className='form-login-button'>LogIn</button>
                </form>
                <p>Don't have account? <Link to="/signup">Sign Up here!</Link></p>
            </div>
        </DashboardLayout>
    )
}

export default LogIn