import React, { useState } from 'react'
import './taskitem.css'
import ViewTask from '../view_task/ViewTask'

function TaskItem({ task, index }) {
    const [openViewTask, setOpenViewTask] = useState(false)
    return (
        <>
            {openViewTask && <ViewTask task={task} onClose={() => setOpenViewTask(false)} />}
            <div className='task-item-container'>
                <div className='task-item-content'>
                    <h2 className='task-index'>{`Task ${index}`}</h2>
                    <h3 className='task-title'>{task.title}</h3>
                </div>
                <div className='task-item-actions'>
                    <button className='task-item-action view' onClick={() => setOpenViewTask(true)}>View</button>
                </div>
            </div>
        </>
    )
}

export default TaskItem