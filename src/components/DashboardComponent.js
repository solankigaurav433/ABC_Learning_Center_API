import React, { Component } from 'react';
import ResultService from '../services/ResultService';
import { Link } from 'react-router-dom';

class DashboardComponent extends Component {
    
    constructor(props) {
        super(props)
        this.logOut = this.logOut.bind(this);

        this.state = {
            currentUser:false,
        };
    }

    componentDidMount(){
        const user= ResultService.getCurrentUser();

        if(user){
            this.setState({
                currentUser: user,
            });
        }
    }

    logOut(){
        ResultService.logout();
    }
    
    render(){
        return(
            <div>     
                <div>  
                    <h2 style={{textAlign:"center", marginTop:"20px", fontFamily:"fantasy", letterSpacing:"4px", fontSize:"50px"}}>User Dashboard</h2>     
                <center><div className="container" style={{marginTop:"20px"}}>
                                                  
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title">Hey {this.state.currentUser.username}! Good to see you :)</h3>
                            <p className="card-text">Click below to see results</p>
                            
                            {this.state.currentUser && (
                             <Link to={"/results"} className="btn btn-primary">Results</Link>
                             )}
                        </div>
                    </div>
                </div>
                </center>
           </div>
           <div>       
                <center><div className="container" style={{marginTop:"20px"}}>
                                                  
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title">Want to logout?</h3>
                            <p className="card-text">Click below to logout</p>
                            
                            {this.state.currentUser && (
                        <a className="btn btn-primary" href="/login" onClick={this.logOut}>Logout</a>
           )}

                        </div>

                    </div>


                </div>
                </center> 
           
</div>
</div>
        );
    }
}

export default DashboardComponent;