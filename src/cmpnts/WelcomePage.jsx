import React, { Component } from 'react';

class WelcomePage extends Component {
    render() {
        return (
            <div>
                <h2>Welcome to Employee page</h2>
                <button className="btn btn-primary" onClick="{this.componentDidMount}"></button>
            </div>
        );
    }
}

export default WelcomePage;