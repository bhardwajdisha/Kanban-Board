import React from 'react'
import {Form , FormControl,Button} from 'react-bootstrap' 
import {AiOutlineSearch} from 'react-icons/ai'
import {FiPlus} from 'react-icons/fi'
import {BiBell} from 'react-icons/bi'
import {FaUser} from 'react-icons/fa'

import './TopNavbar.scss'

const TopNavbar = () => {
    return (
        <div className="top-navbar">
            <Form inline className="search">
                <AiOutlineSearch/>
                <FormControl type="text" placeholder="Search for anything" className="mr-sm-2" />
            </Form>
            <div className="top-nav-contents">
                <Button variant="primary" className="add-btn"> <FiPlus/> </Button>
                <div className="notification">
                    <BiBell />
                </div>
                <div className="user-name">
                    <FaUser />
                    <p>Jerone Bell</p>
                </div>
            </div>
        </div>
    )
}

export default TopNavbar
