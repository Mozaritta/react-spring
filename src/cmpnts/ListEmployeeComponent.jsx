import React, { Component } from 'react';
import EmployeeService from '../service/EmployeeService';

class ListEmployeeComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            employees : []
        }

        this.addEmployee = this.addEmployee.bind(this)
    }
    componentDidMount(){
        EmployeeService.getEmployee().then((res ) => {
            this.setState({employees : res.data})
        })
    }

    addEmployee(){
        this.props.history.push('/add_employee')
    }
    
    render() {
        return (
            <div>
                <h2 className="text-center">Employee List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick="{this.addEmployee}"></button>
                </div>
                <div className="row">
                    <table className='table table-striped table bordered'>
                        <thead>
                            <tr>
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
                                    <tr key = {employee.id}>
                                        <td>{employee.firstName}</td> 
                                        <td>{employee.lastName}</td> 
                                        <td>{employee.emailId}</td> 
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