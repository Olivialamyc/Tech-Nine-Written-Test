import './App.css';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import Welcome from './components/Welcome';
import Login from './components/Login/Login';
import { Trans, useTranslation } from "react-i18next";
 
function App() {
 

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="navbar">
            <NavLink exact activeClassName="active" to="/"><span className='nav-item'>Home</span></NavLink>
            <NavLink activeClassName="active" to="/login"><span className='nav-item'>Login</span></NavLink>
           
            
           
            
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Welcome} />
              <Route path="/login" component={Login} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}
 
export default App;