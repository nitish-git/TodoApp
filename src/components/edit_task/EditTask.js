import React, { useState } from 'react'
import { useAppDispatch } from '../../hooks/appLevelHooks'
import './edittask.css'

function EditTask({ task, onClose }) {
    const dispatch = useAppDispatch()
    const [modifiedTask, setModifiedTask] = useState(task)

    function handleInputChange(e) {
        setModifiedTask({ ...modifiedTask, [e.target.name]: e.target.value })
    }

    function handleEditTask(e) {
        e.preventDefault()
        dispatch({ type: "EDIT_TASK", payload: { ...modifiedTask } })
        onClose()
    }
    return (
        <div className='edit-task-modal-container'>
            <div className='edit-task-modal'>
                <div className='edit-task-modal-title'>
                    <h2>Edit Task</h2>
                    <hr />
                </div>
                <div className='edit-task-modal-form'>
                    <form onSubmit={handleEditTask} className='edit-task-form'>
                        <div className='edit-task-form-input-area'>
                            <label htmlFor='title' className='form-field-label'>Title</label>
                            <input id="title" type='Text' placeholder='Title of the task' name='title' value={modifiedTask.title} onChange={handleInputChange} required />
                            <label htmlFor='description' className='form-field-label'>Description</label>
                            <textarea id="desctiptyion" type='text' placeholder='Describe your task here..' rows={12} name='description' value={modifiedTask.description} onChange={handleInputChange} required />
                        </div>
                        <div className='edit-task-modal-actions'>
                            <button className='edit-task-modal-action cancle' onClick={onClose}>Cancle</button>
                            <button className='edit-task-modal-action create' type="submit">Modify</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditTask