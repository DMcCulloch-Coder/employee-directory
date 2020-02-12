import React from 'react';
import '../styles/employee.css';

const Employee = (props) => {

    const person = props.object

    return (
        <div className="employee-box-indy" onClick={() => props.getEmployee(person)}>
            <p>Name: {`${person.name.first} ${person.name.last}`}</p>
            <p>Phone: {person.cell}</p>
            <p>E-mail: {person.email}</p>
        </div>
    )
};

export default Employee;
