import React from 'react'
import {Button} from 'react-bootstrap' 
import {AiOutlineSearch} from 'react-icons/ai'
import {FiPlus} from 'react-icons/fi'
import {BiBell} from 'react-icons/bi'
import {FaUser} from 'react-icons/fa'


import './TopNavbar.scss'

const TopNavbar = () => {
    return (
        <div className="top-navbar">
            <div className="view-search ">
                        <AiOutlineSearch/>
                        <input type="search" placeholder="Search for anything" />
            </div>
                <div className="top-nav-contents">
                    <div>
                        <Button variant="primary" className="add-btn"> <FiPlus/> </Button>
                    </div>
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
