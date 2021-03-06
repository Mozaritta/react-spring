import React, { Component } from 'react';
import EmployeeService from '../service/EmployeeService';

class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            firstName : '',
            lastName : '',
            emailId : ''
        }
        this.changeEmailHandler = this.changeEmailHandler.bind(this)
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this)
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this)
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this)
        
    }

    componentDidMount(){
        if(this.state.id === '_add'){
            return
        }else{
            EmployeeService.getEmployeeById(this.state.id).then(res => {
                let employee = res.data
                this.setState({
                    firstName: employee.firstName,
                    lastName: employee.lastName,
                    emailId: employee.emailId
                })
            })
        }
    }


    saveOrUpdateEmployee = (e) => {
        e.preventDefault();

        let employee = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            emailId: this.state.emailId
        }
        
        if(this.state.id === '_add'){
            EmployeeService.createEmployee(employee).then(res => {
                this.props.history.push('/employees')
            })
        } else {
            EmployeeService.updateEmployee(employee, this.state.id).then(res => {
                this.props.history.push('/employees')
            })
        }
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center" style={{color:"black", marginBlockStart:"50px", border:"2px solid black"}}>Add Employee</h3>
        }else{
            return <h3 className="text-center" style={{color:"black", marginBlockStart:"50px", border:"2px solid black"}}>Update Employee</h3>
        }
    }

    changeFirstNameHandler(event){
        this.setState({firstName: event.target.value})
    }
    changeLastNameHandler(event){
        this.setState({lastName: event.target.value})
    }
    changeEmailHandler(event){
        this.setState({emailId: event.target.value})
    }

    cancel() {
        this.props.history.push('/employees')
    }
    render() {
        return (
            <div style={{marginBlockEnd:"20px", marginBlockStart:"50px"}}> 
            <br/><br/>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3" style={{marginBlockEnd:"70px", marginBlockStart:"50px"}}>
                        
                        {
                            this.getTitle()
                        }
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label> First Name</label>
                                    <input placeholder="First Name" name="firstName" className="form-control" value={this.state.firstName} onChange={this.changeFirstNameHandler}/>

                                </div>
                                <div className="form-group">
                                    <label> Last Name</label>
                                    <input placeholder="Last Name" name="lastName" className="form-control" value={this.state.lastName} onChange={this.changeLastNameHandler}/>

                                </div>
                                <div className="form-group">
                                    <label> Email</label>
                                    <input placeholder="Email" name="emailId" className="form-control" value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                </div>

                                <button className="btn btn-success" onClick={this.saveOrUpdateEmployee}>Save</button>
                                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                            </form>
                        </div>
                        
                    </div>
                </div>
                
            </div>
            </div>
        );
    }
}

export default CreateEmployeeComponent;