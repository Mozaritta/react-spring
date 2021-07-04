import React, { Component } from 'react';

class ListEmployeeComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            employees : []
        }
    }
    render() {
        return (
            <div>
                <h2 className="text-center">Employee List</h2>
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
                    </table>
                </div>
                
            </div>
        );
    }
}

export default ListEmployeeComponent;