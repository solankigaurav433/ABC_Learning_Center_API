import React, { Component } from 'react'
import ResultService from '../services/ResultService';
import { Switch, Route, Link } from "react-router-dom";

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);

    this.state = {
      currentUser:false,
    };
    }

    componentDidMount() {
        const user = ResultService.getCurrentUser();
    
        if (user) {
          this.setState({
            currentUser: user,
          });
        }
      }

      logOut() {
        ResultService.logout();
      }

    render() {
        return (
            <div>

<nav className="navbar navbar-expand-md navbar-dark bg-info">
<div><a href="" style={{fontWeight:"bold", fontFamily:"unset"}} className="navbar-brand">ABC Learning Center</a></div>
                <div className="navbar-nav">

            {this.state.currentUser && (
              <li className="nav-item">
                <Link to={"/Dashboard"} className="nav-link">
                  Home
                </Link>
              </li>
            )}


         {this.state.currentUser==false && (
            <li className="nav-item">
             <a className="nav-link" href="/register">Register</a>
            </li>
        )}
        
        {this.state.currentUser==false && (
            <li className="nav-item">
             <a className="nav-link" href="/login">Login</a>
            </li>
        )}        

        {/* {this.state.currentUser && (
                <li className="nav-item text-right">
                    <a className="nav-link text-right"> Welcome {this.state.currentUser.username}</a>
                </li>
        )} */}

        {this.state.currentUser && (
                <li className="nav-item text-right">
                    <a href="/ContactUs" className="nav-link">Contact us</a>
                </li>
        )}

        {this.state.currentUser && (
                <li className="nav-item text-right">
                    <a href="/AboutUs" className="nav-link">About us</a>
                </li>
        )}

        {this.state.currentUser && (
                <li className="nav-item text-right">
                    <a href="/TnC" className="nav-link">Terms & Conditions</a>
                </li>
        )}
        


        {/* {this.state.currentUser && (
                <li className="nav-item text-right">
                    <a href="/login" className="nav-link" onClick={this.logOut}>LogOut</a>
                </li>
        )} */}
 


                        </div>
            
                    </nav>






            </div>
        )
    }
}

export default HeaderComponent