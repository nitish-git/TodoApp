import React from 'react'
import './dashboard.css'
import DashboardLayout from '../../layouts/dashboard/DashboardLayout'
import TasksList from '../../components/tasks_list/TasksList'
import { useApp } from '../../hooks/appLevelHooks'
import NotFound from '../404/NotFound'

function Dashboard() {
    const app = useApp()
    const tasks = app.tasks.filter(task => task.user === app.logged_in_user)
    return (
        <>
            {app.logged_in_user &&

                <DashboardLayout>
                    <TasksList tasks={tasks} />
                </DashboardLayout>
            }
            {!app.logged_in_user && <NotFound />}
        </>
    )
}

export default Dashboard