import React from 'react'
import './signup.css'
import DashboardLayout from '../../layouts/dashboard/DashboardLayout'
import { Link, useNavigate } from 'react-router-dom'

function SignUp() {
    const navigate = useNavigate();
    function handleSignup(e) {
        e.preventDefault()
        navigate('/dashboard')
    }
    return (
        <DashboardLayout >
            <div className='signup-form-container'>
                <h1>Sign Up</h1>
                <form onSubmit={handleSignup} className='signup-form'>
                    <label htmlFor='firstName' className='form-field-label'>First Name</label>
                    <input id="firstName" type='text' placeholder='e.g. Nitish' />
                    <label htmlFor='lastName' className='form-field-label'>Last Name</label>
                    <input id="lastName" type='text' placeholder='e.g. Kumar' />
                    <label htmlFor='email' className='form-field-label'>Email</label>
                    <input id="email" type='email' placeholder='e.g example@email.com' />
                    <label htmlFor='password' className='form-field-label'>Password</label>
                    <input id="password" type='password' />
                    <button type='submit' className='form-signup-button' onClick={handleSignup}>Submit</button>
                </form>
                <p>Already have an account? <Link to="/login">LogIn here!</Link></p>
            </div>
        </DashboardLayout>
    )
}

export default SignUp