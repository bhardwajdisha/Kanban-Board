import React from 'react'

import ViewCards from '../View_Cards/View_Cards'
import {Container , Row, Col} from 'react-bootstrap'

import {BoardData} from './boardData'

import './kanban-board.scss'

const KanbanBoard = () => {
    return (
        <Container fluid>
            <Row xs={1} sm={1} md={2} lg={4}>
                {
                    BoardData.map(cards=>(
                        <Col>
                            <ViewCards cards={cards}/>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export default KanbanBoard
