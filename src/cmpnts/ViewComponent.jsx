import React, { Component } from 'react'
import EmployeeService from '../service/EmployeeService'

export default class ViewComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            id: this.props.match.params.id,
            firstName : '',
            lastName : '',
            emailId : ''
        }

    }

    viewEmployee(id){
        EmployeeService.getEmployeeById(this.state.id).then(res => {
            let employee = res.data
            this.setState({
                firstName: employee.firstName,
                lastName: employee.lastName,
                emailId: employee.emailId
            })
        })
    }

    render() {
        return (
            <div style={{marginBlockEnd:"20px", marginBlockStart:"50px"}}> 
                <br/><br/>
                <div className="container" style={{color:"black"}}>
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3" style={{marginBlockEnd:"70px", marginBlockStart:"50px"}}>
                            
                            <h3>View Employee</h3>
                            <div className="card-body">
                            
                                    <div>
                                        <span>Firstname :</span>
                                        <span>{this.state.firstName}</span>
                                        <br/>
                                        <br/>
                                        <span>Lastname :</span>
                                        <span>{this.state.lastName}</span>
                                        <br/>
                                        <br/>
                                        <span>Email :</span>
                                        <span>{this.state.emailId}</span>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
