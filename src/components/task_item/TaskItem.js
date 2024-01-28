import React, { useState } from 'react'
import './taskitem.css'
import ViewTask from '../view_task/ViewTask'
import EditTask from '../edit_task/EditTask'
import { useAppDispatch } from '../../hooks/appLevelHooks'

function TaskItem({ task, index }) {
    const dispatch = useAppDispatch()
    const [openViewTask, setOpenViewTask] = useState(false)
    const [openEditTask, setOpenEditTask] = useState(false)

    function handleDelete(task) {
        dispatch({ type: "DELETE_TASK", payload: task })
    }

    return (
        <>
            {openViewTask && <ViewTask task={task} onClose={() => setOpenViewTask(false)} />}
            {openEditTask && <EditTask task={task} onClose={() => setOpenEditTask(false)} />}
            <div className='task-item-container'>
                <div className='task-item-content'>
                    <h2 className='task-index'>{`Task ${index}`}</h2>
                    <h3 className='task-title'>{task.title}</h3>
                </div>
                <div className='task-item-actions'>
                    <button className='task-item-action delete' onClick={() => handleDelete(task)}>Delete</button>
                    <button className='task-item-action edit' onClick={() => setOpenEditTask(true)}>Edit</button>
                    <button className='task-item-action view' onClick={() => setOpenViewTask(true)}>View</button>
                </div>
            </div>
        </>
    )
}

export default TaskItem