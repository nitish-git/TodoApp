import React from 'react'
import './dashboard.css'
import DashboardLayout from '../../layouts/dashboard/DashboardLayout'
import TasksList from '../../components/tasks_list/TasksList'
import { useApp } from '../../hooks/appLevelHooks'
import NotFound from '../404/NotFound'

function Dashboard() {
    const app = useApp()
    const logged_in_user = JSON.parse(localStorage.getItem("TODO_APP_BY_NITISH")).logged_in_user
    const tasks = app.tasks.filter(task => task.user === app.logged_in_user)
    return (
        <>
            {logged_in_user &&
                <DashboardLayout>
                    <TasksList tasks={tasks} />
                </DashboardLayout>
            }
            {!logged_in_user && <NotFound />}
        </>
    )
}

export default Dashboard