import React, { Component } from 'react';

class Home extends Component {

    render() {
        return (
            
            <div>   
             <div>       
                <center><div className="container" style={{marginTop:"20px"}}>
                                                  
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title">Welcome to the Institute!</h3>
                            <p className="card-text">ABC Learning Insitute, Register or Login below</p>
                            
                            <a href="/register" className="btn btn-primary">Register</a>
                            <a href="/login" className="btn btn-primary" style={{margin:"10px"}}>Login</a>

                        </div>

                    </div>


                </div>
                </center>  

      </div>
                    
            </div>
            
            
        );
        
    }
}

export default Home;