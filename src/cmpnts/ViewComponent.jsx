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

    componentDidMount(id){
        EmployeeService.getEmployeeById(this.state.id).then(res => {
            this.setState({
                employee : res.data
            })
        })
    }

    home() {
        this.props.history.push('/employees')
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
                                    <span> {this.state.employee.firstName}</span>
                                    <br/>
                                    <br/>
                                    <span>Lastname :</span>
                                    <span> {this.state.employee.lastName}</span>
                                    <br/>
                                    <br/>
                                    <span>Email :</span>
                                    <span> {this.state.employee.emailId}</span>
                                    <br/>
                                    <br/>
                                    <button className="btn btn-primary" onClick={this.home.bind(this)} >Home</button>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
    

    

