import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import RegisterComponent from './components/RegisterComponent';
import LoginComponent from './components/LoginComponent';
import ListResultComponent from './components/ListResultComponent';
import ProfileComponent from './components/ProfileComponent';
import HomeComponent from './components/HomeComponent';
import ContactUsComponent from './components/ContactUsComponent';
import AboutUsComponent from './components/AboutUsComponent';
import TnC from './components/TnC';
import DashboardComponent from './components/DashboardComponent';
import RegSuccess from './components/RegSuccess';
import GoogleComponent from './components/GoogleComponent';

function App() {

  return (
    <div>
        <Router>
        <HeaderComponent/>
                <div className="container">
                    <Switch> 

                          <Route path = "/" exact component = {HomeComponent}></Route>
                          <Route path = "/login" exact component = {LoginComponent}></Route>
                          <Route path = "/results" component = {ListResultComponent}></Route>
                         
                          <Route path = "/register" component = {RegisterComponent}></Route>
                          <Route path = "/login" component = {LoginComponent}></Route>
                          <Route path = "/view-user" component = {ProfileComponent}></Route>
                          <Route path = "/ContactUs" component = {ContactUsComponent}></Route>
                          <Route path = "/AboutUs" component = {AboutUsComponent}></Route>
                          <Route path = "/TnC" component = {TnC}></Route>
                          <Route path="/Dashboard" component ={DashboardComponent}></Route>
                          <Route path ="/RegSuccess" component={RegSuccess}></Route>
                          <Route path="/googleComponent" component={GoogleComponent}></Route>
                          
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;