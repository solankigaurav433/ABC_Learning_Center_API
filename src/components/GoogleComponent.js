import React, { Component } from 'react'
import GoogleLogin from 'react-google-login';

 class GoogleComponent extends Component {

    state={
        isLoggedIn:false,
        userID:"",
        name:"",
        email:"",
        picture:""
    }
    render() {
        let googleContent;
        const responseGoogle=(response)=>{
            console.log(response);
            console.log(response.Qs.zt);

            this.setState({
              isLoggedIn:true,
              userID:response.userID,
              name:response.name,
              email:response.Qs.zt
        });
        }
        
        if(this.state.isLoggedIn){
            this.props.history.push('/Dashboard');
            window.location.reload();
            
        }else{
           googleContent=(
            <GoogleLogin
            clientId="751396047254-iji7vv1k4go3tqsi4lesjv3ctrksudea.apps.googleusercontent.com" //its ur client 
            buttonText="Login with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
          />
           )
        }
        return (
            <div>
              {googleContent}
            </div>
        )
    }
}

export default GoogleComponent
