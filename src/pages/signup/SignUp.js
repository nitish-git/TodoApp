import React, { useEffect, useState } from 'react'
import './signup.css'
import DashboardLayout from '../../layouts/dashboard/DashboardLayout'
import { Link, useNavigate } from 'react-router-dom'
import { useApp, useAppDispatch } from '../../hooks/appLevelHooks'
import { toast } from 'react-toastify'

function SignUp() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch()
    const app = useApp()
    const [signUpForm, setSignUpForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })

    function handleInputChange(e) {
        setSignUpForm({ ...signUpForm, [e.target.name]: e.target.value })
    }

    function handleSignup(e) {
        e.preventDefault()
        dispatch({ type: "REGISTER_NEW_USER", payload: { ...signUpForm } })
    }

    useEffect(() => {
        if (app?.logged_in_user) {
            navigate("/dashboard")
            toast.success("Welcome to the dashboard! Signup successful.")
        }
    }, [app, navigate])
    return (
        <DashboardLayout >
            <div className='signup-form-container'>
                <h1>Sign Up</h1>
                <form onSubmit={handleSignup} className='signup-form'>
                    <label htmlFor='firstName' className='form-field-label'>First Name</label>
                    <input id="firstName" type='text' placeholder='e.g. Nitish' name='firstName' value={signUpForm.firstName} onChange={handleInputChange} required />
                    <label htmlFor='lastName' className='form-field-label'>Last Name</label>
                    <input id="lastName" type='text' placeholder='e.g. Kumar' name='lastName' value={signUpForm.lastName} onChange={handleInputChange} required />
                    <label htmlFor='email' className='form-field-label'>Email</label>
                    <input id="email" type='email' placeholder='e.g example@email.com' name='email' value={signUpForm.email} onChange={handleInputChange} required />
                    <label htmlFor='password' className='form-field-label'>Password</label>
                    <input id="password" type='password' name='password' value={signUpForm.password} onChange={handleInputChange} required />
                    <button type='submit' className='form-signup-button'>Submit</button>
                </form>
                <p>Already have an account? <Link to="/login">LogIn here!</Link></p>
            </div>
        </DashboardLayout>
    )
}

export default SignUp