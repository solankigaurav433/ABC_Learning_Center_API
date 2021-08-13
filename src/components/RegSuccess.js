import React, { Component } from 'react';

class RegSuccess extends Component {
    render() {
        return (
            <div>
                <h1>User registered successfully!</h1><br/>
                <h3>Click below to login</h3>
                <a href="/login">Login</a>
            </div>
        );
    }
}

export default RegSuccess;