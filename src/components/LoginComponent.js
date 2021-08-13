import React, { Component } from 'react'
import ResultService from '../services/ResultService';
import GoogleComponent from './GoogleComponent';


class LoginComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            // step 2
            username:'',
            password: '',
            errorMessage:''
        }
        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
       
        this.loginUser = this.loginUser.bind(this);
    }


    loginUser = (e) => {
        e.preventDefault();
        let user = {username: this.state.username, password: this.state.password};
        console.log('loginuser => ' + JSON.stringify(user));

        // step 5

        ResultService.loginUser(user).then(res =>{
                console.log("Response is "+res);
                console.log("Response Status is "+ JSON.stringify(res));
                this.props.history.push('/Dashboard');
                alert("You are being logged into the portal!")
                window.location.reload();  
            }, 
            error => {
                const resMessage =
                  (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                  error.message ||
                  error.toString();
      
                this.setState({
                  errorMessage: resMessage
                });
              }
            
            );
        
    }
    
    changeUserNameHandler= (event) => {
        this.setState({username: event.target.value});
    }

    changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }

    cancel(){
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                    <h1> Login Here </h1>
                                <div className = "card-body">
                                {this.state.errorMessage && <div className="alert alert-danger" role="alert"> { this.state.errorMessage } </div> }
                                    <form>


                                        <div className = "form-group">
                                            <label> UserName : </label>
                                            <input placeholder="Enter Your Login Name" name="username" className="form-control" 
                                                value={this.state.username} onChange={this.changeUserNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Password: </label>
                                            <input placeholder="Enter Your Password" type="password" name="password" className="form-control" 
                                                value={this.state.password} onChange={this.changePasswordHandler}/>
                                        </div>
                            


                                        <button className="btn btn-success" onClick={this.loginUser}>Login</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                       
                                       
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default LoginComponent