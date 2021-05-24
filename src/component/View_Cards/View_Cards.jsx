import React, {useState} from 'react'
import {Row, Col} from 'react-bootstrap'

import {HiOutlineDotsHorizontal} from 'react-icons/hi'

import AddTaskButton from '../AddTaskButton/AddTaskButton'
import Task from '../Task.js/Task'
import AddTaskForm from '../AddTaskForm/AddTaskForm'

import './View_cards.scss'

const ViewCards = ({cards}) => {

    const [Tasks, setTasks] = useState(cards.tasks);
    const [showAddTask, setShowAddTask]=useState(false);

    const onAdd=(task)=>{
        console.log(task)
        setTasks([ ...Tasks , task ])
    }

    return (
        <div className='view-cards' >
            <div className="card-design" 
                style={{backgroundColor:`${cards.color}` ,height:'1.5px'}}            
            />
            <Row className="task-header">
                <Col xs={8} className="task-heading">
                    {cards.title}
                </Col>
                <Col className="task-info">
                    <button>
                        <HiOutlineDotsHorizontal />
                    </button>
                </Col>
            </Row>
            <div>
                <Task tasks={Tasks} />
            </div>
            <div className="addTask-footer">
                <AddTaskButton showAdd={()=>setShowAddTask(!showAddTask)}/>   
                { showAddTask && <AddTaskForm onAdd={onAdd} />}
            </div>
        </div>
    )
}

export default ViewCards
