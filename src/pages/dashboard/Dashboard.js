import React from 'react'
import './dashboard.css'
import DashboardLayout from '../../layouts/dashboard/DashboardLayout'
import TasksList from '../../components/tasks_list/TasksList'
import { useApp } from '../../hooks/appLevelHooks'

function Dashboard() {
    const { tasks } = useApp()
    return (
        <DashboardLayout>
            <TasksList tasks={tasks} />
        </DashboardLayout>
    )
}

export default Dashboard