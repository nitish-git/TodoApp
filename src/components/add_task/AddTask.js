import React from 'react'
import './addtask.css'

function AddTask(props) {
    function handleCreateTask(e) {
        e.preventDefault()
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
                            <input id="title" type='Text' placeholder='Title of the task' />
                            <label htmlFor='description' className='form-field-label'>Description</label>
                            <textarea id="desctiptyion" type='text' placeholder='Describe your task here..' rows={12} />
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