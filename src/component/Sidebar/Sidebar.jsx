import React, {useState ,useEffect} from 'react'
import {Link } from 'react-router-dom'

import {FaArtstation} from 'react-icons/fa'
import Button from 'react-bootstrap/Button';

import {sideNavData} from './sideNavData'

import './Sidebar.scss'
import { GiHamburgerMenu } from 'react-icons/gi';

const SideBar = () => {  
    const [selected,setIsSelected] = useState()
    const [width, setWidth] = useState(window.innerWidth);
    const [showSideNav, setShowSideNav]=useState(true)

    useEffect(() => {
        function handleResize() {
        setWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [width]);

    useEffect(() => {
        width < 900 && setShowSideNav(false);
        width >= 900 && setShowSideNav(true);
    },[width]);

    function handleSideNavToggle() {
        setShowSideNav(!showSideNav);
        console.log('toggle')
    }

    return (
        <nav className='sideNav'>
            <div className="sideNav-header">
                <div className="heading">
                    <Link to='#'> 
                        <FaArtstation />
                        <span> TeamSpace</span>
                    </Link> 
                </div>
                {width < 900 && <div className="ToggleButton">
                    <button onClick={() => handleSideNavToggle()} >
                        <GiHamburgerMenu />
                    </button>
                </div>}
            </div>
            <div className={` navbar-collapse ${showSideNav ? '':'hide-nav' }`} id="navbarSupportContent">
                <div className=" nav-items sideNav-contents">
                    <ul className=" nav-list ">
                        {
                            sideNavData.map((item,index)=>(
                                <li key={index} className={ ` ${item.cName} ${selected === index?'nav-active': ''}`} onClick={()=>setIsSelected(index)}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            ))
                        } 
                    </ul>
                </div>
                <div className="upgrade-plan nav-items ">
                    <p className="trail">Currently in Trail</p>
                    <p className="days-left">Trail: 17 days left</p>
                    <Button variant="light" className="btn">Upgrade plan</Button>
                </div>
            </div>
        </nav>
    )
}

export default SideBar
