import React from 'react'
import {Route, Switch} from 'react-router-dom'
import './App.css';

import SideBar from './component/Sidebar/Sidebar'
import MainPage from './pages/main-page/main-page'

function App() {
  return (
    <div className="App">
      <SideBar />
        <Switch>
          <Route  exact path='/'  component={MainPage} />
        </Switch>
    </div>
  );
}

export default App;
