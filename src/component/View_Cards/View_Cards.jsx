import React from 'react'
import {Row, Col} from 'react-bootstrap'

import {HiOutlineDotsHorizontal} from 'react-icons/hi'

import AddTaskButton from '../AddTaskButton/AddTaskButton'

import './View_cards.scss'

const ViewCards = ({cards}) => {
    return (
        <div className='view-cards'>
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

            <div className="addTask-footer">
                <AddTaskButton />
            </div>
        </div>
    )
}

export default ViewCards
