import React from 'react'
import './taskslist.css'
import TaskItem from '../task_item/TaskItem'

function TasksList({ tasks }) {
    return (
        <div className='tasks-container'>
            <h1>Tasks</h1>
            <div className='tasks-wrapper'>
                {tasks.length > 0 &&
                    <div>
                        {tasks.map((task, index) => <TaskItem key={task.id} task={task} index={index + 1} />)}
                    </div>
                }
                {tasks.length < 1 && <h3 className='no-task-text'>You have no tasks. Add New.</h3>}
            </div>
        </div>
    )
}

export default TasksList