import React from 'react'
import * as AiIcons from'react-icons/ai'
import {BiFolder} from 'react-icons/bi'
import {HiInboxIn} from 'react-icons/hi'
import {FaRegCalendarCheck} from 'react-icons/fa'
import {IoCheckmarkDoneCircleOutline} from 'react-icons/io5'
import {CgNotes} from 'react-icons/cg'


export const sideNavData =  [
    {
        title:'Dashboard',
        path:'/',
        icon:<AiIcons.AiOutlineDashboard />,
        cName:'nav-text'
    },
    {
        title:'Projects',
        path:'/',
        icon:<BiFolder/>,
        cName:'nav-text'
    },
    {
        title:'Inbox',
        path:'/',
        icon:< HiInboxIn/>,
        cName:'nav-text'
    },
    {
        title:'Calender',
        path:'/',
        icon:<FaRegCalendarCheck />,
        cName:'nav-text'
    },
    {
        title:'Task',
        path:'/',
        icon:<IoCheckmarkDoneCircleOutline />,
        cName:'nav-text'
    },
    {
        title:'Reports',
        path:'/',
        icon:<CgNotes />,
        cName:'nav-text'
    },
    {
        title:'Settings',
        path:'/',
        icon:<AiIcons.AiOutlineSetting />,
        cName:'nav-text'
    }
]


