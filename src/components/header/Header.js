import React, { useState } from 'react'
import './header.css'
import { useNavigate } from 'react-router-dom'
import AddTask from '../add_task/AddTask'
import { useApp } from "../../hooks/appLevelHooks"

function Header(props) {
    const app = useApp()
    const [openAddTask, setOpenAddTask] = useState(false)
    function onCancle() {
        setOpenAddTask(false)
    }
    const navigate = useNavigate()
    return (
        <>
            {openAddTask && <AddTask onCancle={onCancle} />}
            <header className='header'>
                <div className='header-left'>
                    <div className='app-logo' onClick={() => navigate('/')}>Todo App</div>
                </div>
                <div className='header-right'>
                    <ul className='header-right-links'>
                        {app.user_logged_in && <li className='header-right-link' onClick={() => setOpenAddTask(true)}>Add</li>}
                        {!app.user_logged_in && <li className='header-right-link' onClick={() => navigate('/login')}>Login</li>}
                        {app.user_logged_in && <li className='header-right-link' onClick={() => navigate('/logout')}>Logout</li>}
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header