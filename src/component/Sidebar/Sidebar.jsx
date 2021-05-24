import React, {useState} from 'react'
import {Link } from 'react-router-dom'

import {FaArtstation} from 'react-icons/fa'
import Button from 'react-bootstrap/Button';

import {sideNavData} from './sideNavData'

import './Sidebar.scss'

const SideBar = () => {

    const [selected,setIsSelected] = useState()
    return (
        <div className='sideNav'>
            <div className="sideNav-header">
                <Link to='#'> 
                    <FaArtstation />
                    <span> TeamSpace</span>
                </Link>
            </div>
            <div className="sideNav-contents ">
                <ul className="nav-list">
                    {
                        sideNavData.map((item,index)=>(
                            <li key={index} className={ `${item.cName} ${selected === index?'nav-active': ''}`} onClick={()=>setIsSelected(index)}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div className="upgrade-plan">
                <p className="trail">Currently in Trail</p>
                <p className="days-left">Trail: 17 days left</p>
                <Button variant="light" className="btn">Upgrade plan</Button>
            </div>
           
        </div>
    )
}

export default SideBar
