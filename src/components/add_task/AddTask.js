import React, { useState, useId } from 'react'
import './addtask.css'
import { useApp, useAppDispatch } from '../../hooks/appLevelHooks'

function AddTask(props) {
    const id = useId()
    const app = useApp()
    const dispatch = useAppDispatch()
    const [newTask, setNewTask] = useState({
        title: "",
        description: ""
    })

    function handleInputChange(e) {
        setNewTask({ ...newTask, [e.target.name]: e.target.value, user: app.logged_in_user })
    }

    function handleCreateTask(e) {
        e.preventDefault()
        dispatch({ type: "ADD_NEW_TASK", payload: { ...newTask, id } })
        props.onCancle()
    }
    return (
        <div className='add-task-modal-container'>
            <div className='add-task-modal'>
                <div className='add-task-modal-title'>
                    <h2>Add Task</h2>
                    <hr />
                </div>
                <div className='add-task-modal-form'>
                    <form onSubmit={handleCreateTask} className='add-task-form'>
                        <div className='add-task-form-input-area'>
                            <label htmlFor='title' className='form-field-label'>Title</label>
                            <input id="title" type='Text' placeholder='Title of the task' name='title' value={newTask.title} onChange={handleInputChange} required />
                            <label htmlFor='description' className='form-field-label'>Description</label>
                            <textarea id="desctiptyion" type='text' placeholder='Describe your task here..' rows={12} name='description' value={newTask.description} onChange={handleInputChange} required />
                        </div>
                        <div className='add-task-modal-actions'>
                            <button className='add-task-modal-action cancle' onClick={props.onCancle}>Cancle</button>
                            <button className='add-task-modal-action create' type="submit">Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddTask