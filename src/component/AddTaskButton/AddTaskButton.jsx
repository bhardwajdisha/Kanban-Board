import React from 'react'

import {TiPlus} from 'react-icons/ti'

import "./AddTaskButton.scss"

const AddTaskButton = () => {
    return (
        <button className="add-task-button">
            <TiPlus />
            Add Task
        </button>
    )
}

export default AddTaskButton
