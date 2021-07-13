import React, { Component } from 'react';
import EmployeeService from '../service/EmployeeService';

class ListEmployeeComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            employees : []
        }

        this.addEmployee = this.addEmployee.bind(this)
        this.upEmployee = this.upEmployee.bind(this)
    }
    componentDidMount(){
        EmployeeService.getEmployee().then((res ) => {
            this.setState({employees : res.data})
        })
    }

    addEmployee() {
        this.props.history.push('/add_employee')
    }

    upEmployee(id) {
        this.props.history.push(`/update/${id}`)
    }
    
    render() {
        return (
            <div>
                <h2 className="text-center">Employee List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addEmployee} style={{marginBlockStart: "30px", marginBlockEnd: "10px", marginInline: "10px"}}>Add Employee</button>
                </div>
                <div className="row">
                    <table className='table table-striped table bordered'>
                        <thead>
                            <tr style={{textAlign:"center", backgroundColor:"blueviolet", color:"white"}}>
                            <th>Employee First Name</th>
                            <th>Employee Last Name</th>
                            <th>Employee Email</th>
                            <th>Actions</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee =>
                                    <tr key = {employee.id} style={{textAlign:"center", backgroundColor:"lightblue"}}>
                                        <td>{employee.firstName}</td> 
                                        <td>{employee.lastName}</td> 
                                        <td>{employee.emailId}</td>
                                        <td>
                                            <button className="btn btn-success" onClick={ () => this.upEmployee(employee.id)}>Update</button>
                                            <button className="btn btn-danger" onClick = { () => this.upEmployee(employee.id)} style={{marginInline: "10px"}}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                
            </div>
        );
    }
}

export default ListEmployeeComponent;