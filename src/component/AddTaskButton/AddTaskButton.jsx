import React from 'react'

import {TiPlus} from 'react-icons/ti'

import "./AddTaskButton.scss"

const AddTaskButton = ({showAdd}) => {
    return (
        <button className="add-task-button" onClick={showAdd}>
            <TiPlus />
            Add Task
        </button>
    )
}

export default AddTaskButton
