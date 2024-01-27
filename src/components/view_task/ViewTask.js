import React from 'react'
import './viewtask.css'

function ViewTask({ task, onClose }) {
    return (
        <div className='view-task-modal-container'>
            <div className='view-task-modal'>
                <h1>{task.title}</h1>
                <p>{task.description}</p>


                <div className='view-task-modal-actions'>
                    <button className='view-task-modal-action cancle' onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default ViewTask