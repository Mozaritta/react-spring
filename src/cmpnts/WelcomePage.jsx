import React, { Component } from 'react';

class WelcomePage extends Component {

    constructor(props){
        super(props)

        this.state = {

        }
    }

    listEmployee() {
        this.props.history.push('/employees')
    }

    render() {
        return (
            <div className="text-center">
                <h2 className="text-center">Welcome to Employee page</h2>
                <button className="btn btn-primary" onClick={this.listEmployee.bind(this)} style={{marginBlockStart: "30px", marginBlockEnd: "10px"}}>Employee List</button>
            </div>
        );
    }
}

export default WelcomePage;