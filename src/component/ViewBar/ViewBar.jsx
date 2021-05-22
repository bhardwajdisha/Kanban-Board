import React from 'react'
import {Dropdown} from 'react-bootstrap'
import {BsClipboardData,BsFilter} from 'react-icons/bs'
import {AiOutlineSearch} from 'react-icons/ai'
import {HiOutlineSortAscending,HiOutlineDotsHorizontal} from 'react-icons/hi'
import {Form , FormControl} from 'react-bootstrap' 

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
                    <Form inline className="search">
                        <AiOutlineSearch/>
                        <FormControl type="text" placeholder="Search " className="mr-sm-2" />
                    </Form>
                </div>
                <div className="viewbar-filter">
                    <button className="viewbar-button">
                        <BsFilter />
                        <span>Filter</span>
                    </button>
                </div>
                <div className="viewbar-sort">
                    <button className="viewbar-button">
                        <HiOutlineSortAscending/>
                        <p>Sort: <span>Time</span> </p>
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
