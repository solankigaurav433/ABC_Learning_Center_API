import React, {Component} from 'react'
import ResultService from '../services/ResultService'

class ProfileComponent extends Component {
    constructor(props) {
        super(props);
        

    this.state = {
      curruser:false,
      name:'',
    };
    }

    componentDidMount(){

        const curruser = ResultService.getCurrentUserName();
        console.log(" Current User Name is "+ curruser);

        if(curruser) {
        console.log(" Current User If Case");

        this.setState({name:this.state.curruser})
            console.log(" Current User Name is "+this.state.name);
        }
    

          

           

            ResultService.getUserByUserName(this.state.name).then(res =>{
                console.log("Response form backend " + res.data);
               // this.setState({user:res.data});
            })
            
          }

        
    

    render(){
        return(
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                <h3 className = "text-center">User Profile</h3>
                <div className="card-body">

                    <div className="row">
                        <label>Name:</label>
                      
                    </div>
                    
                    <div className="row">
                        <label>Email:</label>
                        
                    </div>
                    
                    <div className="row">
                        <label>Number:</label>
                        
                    </div>
                    
                    <div className="row">
                        <label>Username:</label>
                       
                    </div>

                </div>
                </div>
            </div>
        )


    }
}

export default ProfileComponent