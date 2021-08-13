import React, { Component } from 'react';

class ContactUsComponent extends Component {
    render() {
        return (
            <div className="container" style={{border:"0.5px solid teal", margin:"20px"}}>
            <div>
               <section>
               <h2 className="h1-responsive font-weight-bold text-center my-4">CONTACT US</h2>
               <p className="">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>
            <br/>
        <div className="row">
        <div className="col-md-9 mb-md-0 mb-5">
            <form className="contact-form">
            <div className="row">
            <div className="col-md-6">
            <div className="md-form mb-0">
                <input type="text" name="name" className="form-control"/>
                <label className="">Your name</label>
            </div>
            </div>

            <div class="col-md-6">
            <div class="md-form mb-0">
            <input type="text" name="email" className="form-control"/>
                <label className="">Your email</label>
                </div>
            </div>
            </div>
                <br/>
            <div className="row">
            <div className="col-md-12">
            <div className="md-form mb-0">
            <input type="text" name="subject" className="form-control"/>
                <label className="">Subject</label>
                
                </div>

                </div>
            </div>
            <br/>

            <div className="row">
            <div className="col-md-12">
            <div className="md-form">
            <textarea type="text" name="message" rows="2" className="form-control md-textarea"></textarea>
                            <label for="message">Your message</label>

                </div>
            </div>
            </div>

            </form>

            <div className="text-center text-md-left">
            <a className="btn btn-primary">Send</a>
            </div>
            <br/>
            <div className="status"></div>
        </div>
        <br/>

        <div className="col-md-3 text-center">
        <ul className="list-unstyled mb-0">
        <li><i className="fas fa-map-marker-alt fa-2x"></i>
                    <p>San Francisco, CA 94126, USA</p>
                </li>

                <li><i className="fas fa-phone mt-4 fa-2x"></i>
                    <p>+ 01 234 567 89</p>
                </li>

                <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                    <p>contact@ABC.com</p>
                </li>  
        </ul>
        </div>
            </div>
               </section>
            </div>
            </div>
        );
    }
}

export default ContactUsComponent;