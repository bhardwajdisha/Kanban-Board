import React from 'react'
import {Dropdown} from 'react-bootstrap'
import {BsClipboardData,BsFilter} from 'react-icons/bs'
import {AiOutlineSearch} from 'react-icons/ai'
import {HiOutlineSortAscending,HiOutlineDotsHorizontal} from 'react-icons/hi'
import {BiFilter} from 'react-icons/bi'

import './ViewBar.scss'

const ViewBar = () => {
    return (
        <div className="view-bar">
            <div className="view-dropdown">
                <p>View:</p>
                <Dropdown>
                    <Dropdown.Toggle  >
                        <BsClipboardData />
                        Board
                    </Dropdown.Toggle>
                </Dropdown>
            </div>
            <div className="side-content">
                <div className="view-search">
                        <AiOutlineSearch/>
                        <input type="search" placeholder="Search" />
                </div>
                <div className="viewbar-filter">
                    <button className="viewbar-button">
                        <BiFilter />                       
                         Filter
                    </button>
                </div>
                <div className="viewbar-sort">
                    <button className="viewbar-button">
                        <HiOutlineSortAscending/>
                        Sort: <span className="time">Time</span> 
                    </button>
                </div>
                <div className="viewbar-moreInfo">
                    <HiOutlineDotsHorizontal />
                </div>
            </div> 
        </div>
    )
}

export default ViewBar
