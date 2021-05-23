import React from 'react'
import {Row, Col} from 'react-bootstrap'

import {HiOutlineDotsHorizontal} from 'react-icons/hi'

import AddTaskButton from '../AddTaskButton/AddTaskButton'
import Task from '../Task.js/Task'

import './View_cards.scss'

const ViewCards = ({cards}) => {
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
                <Task tasks={cards.tasks} />
            </div>
            <div className="addTask-footer">
                <AddTaskButton />
            </div>
        </div>
    )
}

export default ViewCards
