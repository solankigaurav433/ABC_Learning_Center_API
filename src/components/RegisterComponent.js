import React, { Component } from 'react'
import ResultService from '../services/ResultService';

class RegisterComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            // step 2
            username:'',
            password: '',
            email: '',
            name: '',
            number:''
        }
        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeNumberHandler = this.changeNumberHandler.bind(this);
       

        this.registerUser = this.registerUser.bind(this);
    }


    registerUser = (e) => {
        e.preventDefault();
        let user = {username: this.state.username, password: this.state.password, email: this.state.email,name: this.state.name, number: this.state.number};
        console.log('user => ' + JSON.stringify(user));

        // step 5
        ResultService.saveUser(user).then(res =>{
                console.log("Response is "+JSON.stringify(res) + res.status);
                console.log("Response Stauts is "+ res.status);
                if (res.status===200){
                    this.props.history.push('/RegSuccess');
                }else{
                    this.props.history.push('/register');
                }
            });
        
    }
    
    changeUserNameHandler= (event) => {
        this.setState({username: event.target.value});
    }

    changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }

    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changeNumberHandler= (event) => {
        this.setState({number: event.target.value});
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
                                    <h1> Register New User </h1>
                                <div className = "card-body">
                                    <form>

                                       <div className = "form-group">
                                            <label> Name </label>
                                            <input placeholder="Enter Your  Name" name="name" className="form-control" 
                                                value={this.state.name} onChange={this.changeNameHandler}/>
                                        </div>

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
                                        <div className = "form-group">
                                            <label> Email </label>
                                            <input placeholder="Enter Your Email" name="email" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Mobile </label>
                                            <input placeholder="Enter Your Mobile Number" name="number" className="form-control" 
                                                value={this.state.number} onChange={this.changeNumberHandler}/>
                                        </div>


                                        <button className="btn btn-success" onClick={this.registerUser}>Save</button>
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

export default RegisterComponent