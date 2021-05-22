import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {Dropdown} from 'react-bootstrap'
import {AiOutlineInfoCircle ,AiOutlineStar} from 'react-icons/ai'

import './InfoBar.scss'

const InfoBar = () => {
    return (
        <div className="info-bar">
            <div className="dropdown-icon">
                <GiHamburgerMenu />
            </div>
                <Dropdown>
                    <Dropdown.Toggle  id="dropdown-basic">
                        Builing a new app
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            <div className="info-icon">
                <AiOutlineInfoCircle />
            </div>
            <div className="info-icon">
                <AiOutlineStar />
            </div>
        </div>
    )
}

export default InfoBar
