import React, { useState } from 'react'
import './header.css'
import { useNavigate } from 'react-router-dom'
import AddTask from '../add_task/AddTask'
import { useApp, useAppDispatch } from "../../hooks/appLevelHooks"

function Header(props) {
    const app = useApp()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [openAddTask, setOpenAddTask] = useState(false)

    function handleLogout() {
        dispatch({ type: "LOGOUT_USER" })
        navigate("/logout")
    }

    function onCancle() {
        setOpenAddTask(false)
    }

    return (
        <>
            {openAddTask && <AddTask onCancle={onCancle} />}
            <header className='header'>
                <div className='header-left'>
                    <div className='app-logo' onClick={() => navigate('/')}>Todo App</div>
                </div>
                <div className='header-right'>
                    {app?.logged_in_user && <p>Hi, {app.logged_in_user}</p>}
                    <ul className='header-right-links'>
                        {app?.logged_in_user && <li className='header-right-link' onClick={() => setOpenAddTask(true)}>Add</li>}
                        {!app?.logged_in_user && <li className='header-right-link' onClick={() => navigate('/login')}>Login</li>}
                        {app?.logged_in_user && <li className='header-right-link' onClick={handleLogout}>Logout</li>}
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header