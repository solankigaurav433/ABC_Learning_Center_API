import React, { Component } from 'react';
import avtar from '../images/avtar.png'

class AboutUsComponent extends Component {
    render() {
        return (
          <div>
            <div>
            <h2 className="h1-responsive font-weight-bold text-center my-4" style={{ marginTop:"20px", marginBottom:"50px"}}>ABOUT US</h2>
                <div class="container">
                    <div className="row">
                        <div className="col-md-6">
  
  <div className="card" style={{width:"400px"}}>
    <img className="card-img-top" src={avtar} alt="Card image" style={{width:"100%"}}/>
    <div className="card-body">
      <h4 className="card-title">Business Head</h4>
      <p className="card-text">Some example text some example text. Business Head of an ABC Learning Center</p>
      <a href="#" className="btn btn-primary">See Profile</a>
    </div>
  </div>
  
  </div>
 
  

<div className="col-md-6">
  
  <div className="card" style={{width:"400px"}}>
    <img className="card-img-top" src={avtar} alt="Card image" style={{width:"100%"}}/>
    <div className="card-body">
      <h4 className="card-title">Team Leader</h4>
      <p className="card-text">Some example text some example text. Team Leader of an ABC Learning Center</p>
      <a href="#" className="btn btn-primary">See Profile</a>
    </div>
  </div>
  
  </div>

  </div>



  </div>

  </div>          



  </div>
                
            
        );
    }
}

export default AboutUsComponent;