import React, { Component } from 'react';
import EmployeeService from '../Services/EmployeeService';

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    componentDidMount() {

        EmployeeService.getEmployees().then((res) => {

            this.setState({ employees: res.data });

        });
    }

    deleteEmployee(id) {
        EmployeeService.deleteEmployee(id).then(res => {
            this.setState({ employees: this.state.employees.filter(employee => employee.id !== id) });
        });
    }

    addEmployee() {
        this.props.history.push('/add-employee');
    }


    render() {
        return (
            <div>
                <br />
                <br />


                <h2 className="text-center">Employee List</h2>
               
                
                <div>
                <button className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button>
               
                </div>
                <br />
                <div className="row">

                    <table className="table table-striped table-bordered">

                        <thead>
                            <th>Employee First Name</th>
                            <th>Employee Last Name</th>
                            <th>Employee Email Address</th>

                            <th>Action</th>

                        </thead>
                        <tbody>
                            {

                                this.state.employees.map(
                                    employee =>
                                        <tr key={employee.id}>
                                            <td>{employee.firstName}</td>
                                            <td>{employee.lastName}</td>
                                            <td>{employee.emailId}</td>
                                            <td >
                                                <button onClick={() => this.deleteEmployee(employee.id)} className="btn btn-danger ">Delete</button>
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