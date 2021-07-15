import React, { Component } from 'react'
import EmployeeService from '../service/EmployeeService'

export default class ViewComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee:{}
        }

    }

    viewEmployee(id){
        EmployeeService.getEmployeeById(this.state.id).then(res => {
            this.setState({
                employee : res.data
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
                                        <span>{this.props.employee.firstName}</span>
                                        <span>{this.props.employee.lastName}</span>
                                        <span>{this.props.employee.emailId}</span>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
    

    

