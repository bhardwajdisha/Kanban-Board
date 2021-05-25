import React from 'react'
import './App.css';

import SideBar from './component/Sidebar/Sidebar'
import MainPage from './pages/main-page/main-page'

function App() {
  return (
    <div className="App">
      <SideBar />
       <MainPage />
        
    </div>
  );
}

export default App;
