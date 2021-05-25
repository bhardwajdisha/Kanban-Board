import React from 'react'

import TopNavbar from '../../component/TopNavbar/TopNavbar'
import InfoBar from '../../component/InfoBar/InfoBar'
import ViewBar from '../../component/ViewBar/ViewBar'
import KanBanBoard from '../../component/Kanban_Board/Kanban-board'

import './main-page.scss'

const MainPage = () => {
    return (
        <div className="main-page">
            <TopNavbar />
            <InfoBar />
            <ViewBar />
            <KanBanBoard />
        </div>
    )
}

export default MainPage
